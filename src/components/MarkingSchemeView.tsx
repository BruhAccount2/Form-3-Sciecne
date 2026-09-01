import React, { useState, useMemo } from 'react';
import { SubjectType, SubjectiveMarkingItem } from '../types';
import { markingSchemesData } from '../data/markingSchemesData';
import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  BookOpen, 
  Search, 
  Filter, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  ArrowLeft,
  Calculator,
  Dna,
  Layers
} from 'lucide-react';

interface MarkingSchemeViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
  onNavigateTestYourself?: () => void;
}

export const MarkingSchemeView: React.FC<MarkingSchemeViewProps> = ({
  onNavigateChapter,
  onNavigateHome,
  onNavigateTestYourself
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | SubjectType>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<'all' | 'past_paper' | 'ai_generated'>('all');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Expanded card state
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allAvailableChapters = useMemo(() => {
    if (selectedSubject === 'math') return mathChapters;
    if (selectedSubject === 'science') return scienceChapters;
    return [...mathChapters, ...scienceChapters];
  }, [selectedSubject]);

  const filteredMarkingSchemes = useMemo(() => {
    return markingSchemesData.filter(item => {
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
      if (selectedSourceType !== 'all' && item.sourceType !== selectedSourceType) return false;
      if (selectedChapter !== 'all' && item.chapterId !== selectedChapter) return false;
      if (selectedYear !== 'all' && item.year?.toString() !== selectedYear) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.question.toLowerCase().includes(q) ||
          item.expectedAnswer.toLowerCase().includes(q) ||
          item.sourceName.toLowerCase().includes(q) ||
          item.chapterTitle.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedSubject, selectedSourceType, selectedChapter, selectedYear, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
              <BookOpen className="w-3.5 h-3.5" />
              Subjective & Structured Rubrics
            </span>
            <span className="text-xs text-slate-500">Official & AI-Standard Marking Schemes</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Marking Scheme
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Step-by-step scoring criteria, working requirements, and expected answers for subjective examination questions.
          </p>
        </div>

        {onNavigateTestYourself && (
          <button
            onClick={onNavigateTestYourself}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Test Yourself (MCQ & Papers)</span>
          </button>
        )}
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs mb-6 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search questions, formulas, keywords, or topics..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Subject Filter */}
          <div>
            <label className="text-2xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Subject</label>
            <select
              value={selectedSubject}
              onChange={e => {
                setSelectedSubject(e.target.value as any);
                setSelectedChapter('all');
              }}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              <option value="all">All Subjects</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
            </select>
          </div>

          {/* Source Type Filter */}
          <div>
            <label className="text-2xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Source Type</label>
            <select
              value={selectedSourceType}
              onChange={e => setSelectedSourceType(e.target.value as any)}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              <option value="all">All Sources</option>
              <option value="past_paper">Past Paper Marking Schemes</option>
              <option value="ai_generated">AI-Generated Practice Schemes</option>
            </select>
          </div>

          {/* Chapter Filter */}
          <div>
            <label className="text-2xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Chapter</label>
            <select
              value={selectedChapter}
              onChange={e => setSelectedChapter(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              <option value="all">All Chapters</option>
              {allAvailableChapters.map(ch => (
                <option key={ch.id} value={ch.id}>
                  {ch.subject === 'math' ? 'M' : 'S'} Ch {ch.chapterNumber}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div>
            <label className="text-2xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Year</label>
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              <option value="all">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {filteredMarkingSchemes.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-slate-500">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-slate-400 opacity-50" />
            <p className="font-semibold text-sm">No marking schemes match your current filter criteria.</p>
            <button
              onClick={() => {
                setSelectedSubject('all');
                setSelectedSourceType('all');
                setSelectedChapter('all');
                setSelectedYear('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-lg hover:bg-slate-200 text-slate-700 dark:text-slate-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredMarkingSchemes.map(item => {
            const isExpanded = expandedCards[item.id] !== false; // default expanded

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 hover:border-indigo-300 dark:hover:border-indigo-900 transition-colors"
              >
                {/* Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold uppercase ${
                      item.subject === 'math'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    }`}>
                      {item.subject === 'math' ? 'Mathematics' : 'Science'}
                    </span>

                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                      item.sourceType === 'past_paper'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}>
                      {item.sourceType === 'past_paper' ? 'Past Paper Marking Scheme' : 'AI-Generated Practice Marking Scheme'}
                    </span>

                    <span className="text-xs text-slate-500 font-medium">
                      Chapter {item.chapterNumber}: {item.chapterTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      [{item.marks} Marks]
                    </span>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Question Title & Text */}
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-1">
                    {item.sourceName} • {item.questionNumber}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    {sanitizeContent(item.question)}
                  </h3>
                </div>

                {/* Expanded Details: Mark Allocation, Working, Expected Answer */}
                {isExpanded && (
                  <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
                    {/* Expected Answer Box */}
                    <div className="p-4 bg-indigo-50/60 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
                      <div className="text-xs font-bold text-indigo-900 dark:text-indigo-300 mb-1 uppercase tracking-wider">
                        Expected Answer:
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {sanitizeContent(item.expectedAnswer)}
                      </div>
                    </div>

                    {/* Step-by-Step Mark Allocation Rubric */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                        Mark Allocation Scheme:
                      </div>
                      <div className="space-y-1.5">
                        {item.markAllocation.map((alloc, aIdx) => (
                          <div key={aIdx} className="flex items-start justify-between text-xs py-1 border-b border-slate-200/60 dark:border-slate-800/60 last:border-0">
                            <div className="flex items-start gap-2 flex-1 pr-3">
                              <span className="font-bold text-indigo-600 shrink-0">{alloc.step}:</span>
                              <span className="text-slate-700 dark:text-slate-300">{alloc.criteria}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 font-extrabold text-2xs shrink-0">
                              {alloc.mark} Mark{alloc.mark > 1 ? 's' : ''}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Working Steps */}
                    {item.workingSteps && item.workingSteps.length > 0 && (
                      <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">
                          Step-by-Step Working Required:
                        </div>
                        <ol className="list-decimal pl-5 space-y-1">
                          {item.workingSteps.map((st, sIdx) => (
                            <li key={sIdx} className="leading-relaxed">
                              {sanitizeContent(st)}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Common Errors & Scientific Explanation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {item.commonErrors && item.commonErrors.length > 0 && (
                        <div className="p-3 bg-rose-50/60 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800">
                          <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300 mb-1.5">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            Common Mistakes to Avoid:
                          </div>
                          <ul className="list-disc pl-4 space-y-1 text-rose-950 dark:text-rose-200">
                            {item.commonErrors.map((err, eIdx) => (
                              <li key={eIdx}>{sanitizeContent(err)}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="p-3 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="font-bold text-blue-800 dark:text-blue-300 mb-1.5">
                          Conceptual & Examination Reasoning:
                        </div>
                        <p className="leading-relaxed text-blue-950 dark:text-blue-200">
                          {sanitizeContent(item.explanation)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
