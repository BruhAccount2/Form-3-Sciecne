import React, { useState, useMemo } from 'react';
import { GlossaryTerm, SubjectType } from '../types';
import { glossaryTerms } from '../data/glossary';
import { isBookmarked, toggleBookmark, recordRevisionActivity } from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Filter, 
  ArrowUpDown, 
  Dna, 
  Calculator,
  ExternalLink
} from 'lucide-react';

interface GlossaryViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<'all' | SubjectType>('all');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [randomHighlightId, setRandomHighlightId] = useState<string | null>(null);
  const [bookmarkUpdateTrigger, setBookmarkUpdateTrigger] = useState(0);

  // Extract unique chapters from glossary terms
  const availableChapters = useMemo(() => {
    const map = new Map<string, { id: string; title: string; subject: SubjectType; number: number }>();
    glossaryTerms.forEach(t => {
      if (!map.has(t.chapterId)) {
        map.set(t.chapterId, {
          id: t.chapterId,
          title: t.chapterTitle,
          subject: t.subject,
          number: t.chapterNumber
        });
      }
    });
    return Array.from(map.values()).sort((a, b) => {
      if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
      return a.number - b.number;
    });
  }, []);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(item => {
      // Subject filter
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
      // Chapter filter
      if (selectedChapterId !== 'all' && item.chapterId !== selectedChapterId) return false;
      // Bookmarked filter
      if (bookmarkedOnly && !isBookmarked(`glossary_${item.id}`)) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTerm = item.term.toLowerCase().includes(q);
        const matchDef = item.simpleDefinition.toLowerCase().includes(q);
        const matchExp = item.detailedExplanation.toLowerCase().includes(q);
        const matchEx = item.example.toLowerCase().includes(q);
        const matchCat = item.category?.toLowerCase().includes(q);
        return matchTerm || matchDef || matchExp || matchEx || matchCat;
      }
      return true;
    }).sort((a, b) => {
      return sortOrder === 'asc' 
        ? a.term.localeCompare(b.term) 
        : b.term.localeCompare(a.term);
    });
  }, [searchQuery, selectedSubject, selectedChapterId, sortOrder, bookmarkedOnly, bookmarkUpdateTrigger]);

  const handleToggleBookmark = (item: GlossaryTerm) => {
    toggleBookmark({
      type: 'glossary',
      title: item.term,
      subtitle: `${item.subject === 'math' ? 'Math' : 'Science'} Chapter ${item.chapterNumber}: ${item.chapterTitle}`,
      subject: item.subject,
      targetId: `glossary_${item.id}`,
      chapterId: item.chapterId
    });
    setBookmarkUpdateTrigger(prev => prev + 1);
  };

  const handlePickRandom = () => {
    if (filteredTerms.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredTerms.length);
    const chosen = filteredTerms[randomIndex];
    setRandomHighlightId(chosen.id);
    const el = document.getElementById(`term-${chosen.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectTermClick = (item: GlossaryTerm) => {
    recordRevisionActivity({
      type: 'glossary',
      subject: item.subject,
      title: item.term,
      subtitle: `Glossary: ${item.chapterTitle}`,
      chapterId: item.chapterId,
      targetId: item.id
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Glossary</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Form 3 Revision Glossary
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Core scientific & mathematical terminology with clear definitions, practical examples, and direct links to syllabus chapters.
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePickRandom}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60 font-medium text-sm transition-colors border border-blue-200 dark:border-blue-800/60 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Random Term
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 mb-8 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by term, definition, formula, or example..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Subject Filter */}
          <div className="flex rounded-lg border border-slate-200 dark:border-slate-800 p-1 bg-slate-100 dark:bg-slate-950 self-start">
            <button
              onClick={() => { setSelectedSubject('all'); setSelectedChapterId('all'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedSubject === 'all'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All Subjects ({glossaryTerms.length})
            </button>
            <button
              onClick={() => { setSelectedSubject('math'); setSelectedChapterId('all'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedSubject === 'math'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Math ({glossaryTerms.filter(t => t.subject === 'math').length})
            </button>
            <button
              onClick={() => { setSelectedSubject('science'); setSelectedChapterId('all'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedSubject === 'science'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Dna className="w-3.5 h-3.5" />
              Science ({glossaryTerms.filter(t => t.subject === 'science').length})
            </button>
          </div>
        </div>

        {/* Secondary Filters row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 flex items-center gap-1 font-medium">
              <Filter className="w-3.5 h-3.5" /> Chapter:
            </span>
            <select
              value={selectedChapterId}
              onChange={e => setSelectedChapterId(e.target.value)}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-2.5 py-1.5 text-slate-800 dark:text-slate-200 text-xs focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Chapters</option>
              {availableChapters
                .filter(ch => selectedSubject === 'all' || ch.subject === selectedSubject)
                .map(ch => (
                  <option key={ch.id} value={ch.id}>
                    {ch.subject === 'math' ? 'Math' : 'Science'} Ch {ch.number}: {ch.title}
                  </option>
                ))}
            </select>

            <button
              onClick={() => setBookmarkedOnly(prev => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                bookmarkedOnly
                  ? 'bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-950/50 dark:border-amber-700 dark:text-amber-300'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarkedOnly ? 'fill-amber-500 text-amber-500' : ''}`} />
              Favorites Only
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500">Showing {filteredTerms.length} terms</span>
            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ArrowUpDown className="w-3 h-3" />
              {sortOrder === 'asc' ? 'A to Z' : 'Z to A'}
            </button>
          </div>
        </div>
      </div>

      {/* Glossary Cards Grid */}
      {filteredTerms.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">No glossary terms match your filter</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            Try adjusting your search query, selecting another subject, or clearing the favorite filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
              setSelectedChapterId('all');
              setBookmarkedOnly(false);
            }}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map(item => {
            const isFav = isBookmarked(`glossary_${item.id}`);
            const isHighlighted = randomHighlightId === item.id;

            return (
              <div
                id={`term-${item.id}`}
                key={item.id}
                onClick={() => handleSelectTermClick(item)}
                className={`bg-white dark:bg-slate-900 rounded-xl border transition-all duration-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isHighlighted 
                    ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50/20 dark:bg-blue-950/20' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Header & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                          item.subject === 'math'
                            ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        }`}>
                          {item.subject === 'math' ? 'Mathematics' : 'Science'}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          Ch {item.chapterNumber}: {item.chapterTitle}
                        </span>
                        {item.category && (
                          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {sanitizeContent(item.term)}
                      </h2>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleBookmark(item);
                      }}
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                      className="p-1.5 rounded-md text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Bookmark className={`w-5 h-5 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>
                  </div>

                  {/* Simple Definition */}
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Definition
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-medium">
                      {sanitizeContent(item.simpleDefinition)}
                    </p>
                  </div>

                  {/* Detailed Explanation */}
                  <div className="mb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Explanation
                    </h3>
                    <p>{sanitizeContent(item.detailedExplanation)}</p>
                  </div>

                  {/* Formula if present */}
                  {item.formula && (
                    <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono text-blue-700 dark:text-blue-300">
                      <span className="font-sans font-semibold text-slate-500 dark:text-slate-400 block mb-0.5 text-2xs">FORMULA / RULE:</span>
                      {sanitizeContent(item.formula)}
                    </div>
                  )}

                  {/* Example */}
                  <div className="mb-4 p-3.5 bg-blue-50/50 dark:bg-slate-800/50 rounded-lg border border-blue-100 dark:border-slate-700 text-xs">
                    <span className="font-semibold text-blue-900 dark:text-blue-300 block mb-1">
                      Exam Example:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {sanitizeContent(item.example)}
                    </p>
                  </div>

                  {/* Related Terms Chips */}
                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      <span className="text-2xs text-slate-400">Related:</span>
                      {item.relatedTerms.map(rt => (
                        <button
                          key={rt}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchQuery(rt);
                          }}
                          className="text-2xs bg-slate-100 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-blue-950 text-slate-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300 px-2 py-0.5 rounded-md transition-colors"
                        >
                          {rt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer Link */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">KSSM DSKP Form 3</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateChapter(item.chapterId);
                    }}
                    className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Open Chapter Notes
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
