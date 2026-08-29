import React from 'react';
import { Sun, Moon, BookOpen, Search, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SubjectType } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeSubject: SubjectType | null;
  activeChapterId: string | null;
  onNavigateHome: () => void;
  onSelectSubject: (subject: SubjectType) => void;
  chapterTitle?: string;
  completedChaptersCount: number;
  totalChaptersCount: number;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeSubject,
  activeChapterId,
  onNavigateHome,
  onSelectSubject,
  chapterTitle,
  completedChaptersCount,
  totalChaptersCount,
  onOpenSearch
}) => {
  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-8 bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-slate-800 shadow-xs shrink-0 sticky top-0 z-40 transition-colors">
      
      {/* Brand & Left Navigation */}
      <div className="flex items-center gap-3">
        {activeSubject || activeChapterId ? (
          <button
            id="nav-back-button"
            onClick={() => {
              if (activeChapterId && activeSubject) {
                onSelectSubject(activeSubject);
              } else {
                onNavigateHome();
              }
            }}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#2563EB] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            title="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
        ) : null}

        <button
          id="nav-logo-home"
          onClick={onNavigateHome}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center text-white shrink-0 shadow-xs">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Form 3 Revision
            </h1>
          </div>
        </button>
      </div>

      {/* Middle Breadcrumb if viewing chapter */}
      {chapterTitle && (
        <div className="hidden xl:flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-slate-400">
          <span className="text-gray-300 dark:text-slate-700">/</span>
          <span className="max-w-[280px] truncate text-[#1E293B] dark:text-slate-200 font-semibold">
            {chapterTitle}
          </span>
        </div>
      )}

      {/* Right Navigation & Tools */}
      <nav className="flex items-center gap-4 sm:gap-6">
        
        {/* Subject Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            id="nav-tab-science"
            onClick={() => onSelectSubject('science')}
            className={`text-sm transition-colors ${
              activeSubject === 'science'
                ? 'font-semibold text-[#2563EB] border-b-2 border-[#2563EB] pb-1 dark:text-blue-400 dark:border-blue-400'
                : 'font-medium text-gray-500 hover:text-[#2563EB] dark:text-slate-400 dark:hover:text-blue-400'
            }`}
          >
            Science
          </button>
          <button
            id="nav-tab-math"
            onClick={() => onSelectSubject('math')}
            className={`text-sm transition-colors ${
              activeSubject === 'math'
                ? 'font-semibold text-[#2563EB] border-b-2 border-[#2563EB] pb-1 dark:text-blue-400 dark:border-blue-400'
                : 'font-medium text-gray-500 hover:text-[#2563EB] dark:text-slate-400 dark:hover:text-blue-400'
            }`}
          >
            Mathematics
          </button>
        </div>

        <div className="h-4 w-[1px] bg-gray-300 dark:bg-slate-700 hidden sm:block"></div>

        {/* Quick Search */}
        <button
          id="nav-search-trigger"
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 sm:px-3 py-1.5 text-xs text-gray-500 transition hover:border-blue-300 hover:bg-white hover:text-gray-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-700 dark:hover:bg-slate-900 dark:hover:text-slate-200"
          title="Search syllabus (Ctrl+K)"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden md:inline">Search...</span>
          <kbd className="hidden rounded bg-gray-200/80 px-1.5 py-0.5 text-[10px] font-mono text-gray-600 dark:bg-slate-700 dark:text-slate-300 lg:inline-block">
            Ctrl+K
          </kbd>
        </button>

        {/* Progress Tracker Pill */}
        <div className="hidden 2xl:flex items-center gap-1.5 rounded-full border border-blue-100 bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-[#2563EB] dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB] dark:text-blue-400" />
          <span>{completedChaptersCount}/{totalChaptersCount} Done</span>
        </div>

        <div className="h-4 w-[1px] bg-gray-300 dark:bg-slate-700"></div>

        {/* Theme Toggle Button */}
        <button
          id="theme-toggle-btn"
          onClick={() => setDarkMode(prev => !prev)}
          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 text-gray-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-amber-400 transition-transform hover:rotate-45" />
          ) : (
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

      </nav>

    </header>
  );
};
