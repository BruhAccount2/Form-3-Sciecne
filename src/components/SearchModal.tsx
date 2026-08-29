import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { allChapters } from '../data';
import { Chapter } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapter: Chapter) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? allChapters.filter(ch => {
        const q = query.toLowerCase();
        return (
          ch.title.toLowerCase().includes(q) ||
          ch.summary.toLowerCase().includes(q) ||
          ch.theme.toLowerCase().includes(q) ||
          ch.notes.some(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q))
        );
      })
    : allChapters;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/60 p-4 pt-16 sm:pt-24 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center border-b border-gray-200 px-4 py-3.5 dark:border-slate-800">
          <Search className="h-5 w-5 text-[#2563EB] dark:text-blue-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all Form 3 Science & Mathematics chapters, formulas, experiments..."
            className="ml-3 flex-1 bg-transparent text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none dark:text-slate-100"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5 divide-y divide-gray-100 dark:divide-slate-800/60">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-gray-500 dark:text-slate-400">
              No syllabus chapters found matching "{query}". Try keywords like "Indices", "Transpiration", "Electricity", or "Circle".
            </div>
          ) : (
            filtered.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(ch);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#EFF6FF] dark:hover:bg-slate-800/80 text-left transition group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-mono font-bold bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950 dark:text-blue-300">
                    {String(ch.chapterNumber).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-blue-400 transition-colors">
                        Chapter {ch.chapterNumber}: {ch.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 uppercase font-semibold">
                        {ch.subject === 'science' ? 'Science' : 'Mathematics'}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-slate-400 line-clamp-1">
                      {ch.summary}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-2.5 text-right text-[11px] text-gray-400 dark:border-slate-800 dark:bg-slate-950/40">
          Showing {filtered.length} KSSM chapters • Press <strong>Esc</strong> to close
        </div>
      </div>
    </div>
  );
};

