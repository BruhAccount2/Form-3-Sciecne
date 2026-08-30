import React, { useState, useEffect } from 'react';
import { BookmarkItem, SubjectType } from '../types';
import { getBookmarks, removeBookmark } from '../utils/storage';
import { 
  Bookmark, 
  Trash2, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Calculator, 
  Dna, 
  Layers,
  Sparkles
} from 'lucide-react';

interface BookmarksViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateGlossary: () => void;
  onNavigatePastPapers: () => void;
  onNavigateFormulae: () => void;
  onNavigateHome: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  onNavigateChapter,
  onNavigateGlossary,
  onNavigatePastPapers,
  onNavigateFormulae,
  onNavigateHome
}) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleRemove = (targetId: string) => {
    removeBookmark(targetId);
    setBookmarks(getBookmarks());
  };

  const handleOpenItem = (item: BookmarkItem) => {
    if (item.type === 'chapter' || item.type === 'note' || item.type === 'exercise') {
      if (item.chapterId) onNavigateChapter(item.chapterId);
    } else if (item.type === 'glossary') {
      onNavigateGlossary();
    } else if (item.type === 'past_paper') {
      onNavigatePastPapers();
    } else if (item.type === 'formula') {
      onNavigateFormulae();
    }
  };

  const filtered = bookmarks.filter(b => {
    if (filterType === 'all') return true;
    return b.type === filterType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Bookmarks</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <Bookmark className="w-8 h-8 text-amber-500 fill-amber-500" />
            Saved Bookmarks & Favorites
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            Quick-access collection of your saved chapters, formulas, glossary terms, and past papers.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 w-fit">
        {[
          { id: 'all', label: `All Items (${bookmarks.length})` },
          { id: 'chapter', label: 'Chapters' },
          { id: 'glossary', label: 'Glossary Terms' },
          { id: 'formula', label: 'Formulae' },
          { id: 'past_paper', label: 'Past Papers' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterType(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterType === tab.id
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bookmarks List */}
      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center">
          <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">No saved bookmarks yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
            Click the bookmark icon on any chapter, formula, glossary term, or past paper to save it for quick revision.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-2xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.type}
                  </span>
                  <button
                    onClick={() => handleRemove(item.targetId)}
                    title="Remove bookmark"
                    className="text-slate-400 hover:text-rose-500 p-1 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-slate-500 mt-1">{item.subtitle}</p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-2xs text-slate-400">
                  Saved {new Date(item.dateAdded || Date.now()).toLocaleDateString()}
                </span>
                <button
                  onClick={() => handleOpenItem(item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Open Item
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
