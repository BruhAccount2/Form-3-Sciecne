import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Search, 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  Calculator, 
  FileText, 
  Zap, 
  Timer, 
  Bookmark, 
  Award, 
  Eye, 
  ChevronDown,
  Menu,
  X,
  Settings
} from 'lucide-react';
import { SubjectType, AppView } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeSubject: SubjectType | null;
  activeChapterId: string | null;
  activeView: AppView;
  onNavigateHome: () => void;
  onSelectSubject: (subject: SubjectType) => void;
  onNavigateView: (view: AppView) => void;
  onOpenAccessibility: () => void;
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
  activeView,
  onNavigateHome,
  onSelectSubject,
  onNavigateView,
  onOpenAccessibility,
  chapterTitle,
  completedChaptersCount,
  totalChaptersCount,
  onOpenSearch
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-8 bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-slate-800 shadow-xs shrink-0 sticky top-0 z-40 transition-colors">
      
      {/* Brand & Left Navigation */}
      <div className="flex items-center gap-3">
        {activeSubject || activeChapterId || activeView !== 'home' ? (
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
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-white leading-tight">
              Form 3 Revision
            </h1>
            <span className="text-2xs text-slate-400 hidden sm:block">KSSM Science & Maths</span>
          </div>
        </button>
      </div>

      {/* Middle Breadcrumb if viewing chapter */}
      {chapterTitle && (
        <div className="hidden 2xl:flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-slate-400">
          <span className="text-gray-300 dark:text-slate-700">/</span>
          <span className="max-w-[240px] truncate text-[#1E293B] dark:text-slate-200 font-semibold">
            {chapterTitle}
          </span>
        </div>
      )}

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-5 text-sm">
        <button
          onClick={() => onSelectSubject('science')}
          className={`font-medium transition-colors ${
            activeSubject === 'science' && activeView === 'home'
              ? 'font-bold text-[#2563EB] dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#2563EB]'
          }`}
        >
          Science
        </button>

        <button
          onClick={() => onSelectSubject('math')}
          className={`font-medium transition-colors ${
            activeSubject === 'math' && activeView === 'home'
              ? 'font-bold text-[#2563EB] dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#2563EB]'
          }`}
        >
          Mathematics
        </button>

        <button
          onClick={() => onNavigateView('glossary')}
          className={`font-medium transition-colors ${
            activeView === 'glossary'
              ? 'font-bold text-[#2563EB] dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#2563EB]'
          }`}
        >
          Glossary
        </button>

        <button
          onClick={() => onNavigateView('formula_sheet')}
          className={`font-medium transition-colors ${
            activeView === 'formula_sheet'
              ? 'font-bold text-[#2563EB] dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#2563EB]'
          }`}
        >
          Formulae
        </button>

        <button
          onClick={() => onNavigateView('past_papers')}
          className={`font-medium transition-colors ${
            activeView === 'past_papers'
              ? 'font-bold text-[#2563EB] dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:text-[#2563EB]'
          }`}
        >
          Past Papers
        </button>

        {/* More Tools Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsMoreMenuOpen(prev => !prev)}
            className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-300 hover:text-[#2563EB] transition-colors"
          >
            Practice Hub
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {isMoreMenuOpen && (
            <div 
              className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg py-2 z-50 animate-fadeIn"
              onMouseLeave={() => setIsMoreMenuOpen(false)}
            >
              <button
                onClick={() => { onNavigateView('quick_revision'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-blue-600" />
                Quick Revision (5-10m)
              </button>
              <button
                onClick={() => { onNavigateView('daily_revision'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                Daily Revision Set
              </button>
              <button
                onClick={() => { onNavigateView('exam'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Timer className="w-4 h-4 text-emerald-600" />
                Timed Exam Simulator
              </button>
              <button
                onClick={() => { onNavigateView('random_practice'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-purple-600" />
                Random Practice Quiz
              </button>
              <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
              <button
                onClick={() => { onNavigateView('weak_areas'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4 text-rose-500" />
                Weak Area Tracker
              </button>
              <button
                onClick={() => { onNavigateView('bookmarks'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4 text-amber-500" />
                Saved Bookmarks
              </button>
              <button
                onClick={() => { onNavigateView('progress'); setIsMoreMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-blue-600" />
                Syllabus Analytics
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Right Navigation & Tools */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Search */}
        <button
          id="nav-search-trigger"
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 sm:px-3 py-1.5 text-xs text-gray-500 transition hover:border-blue-300 hover:bg-white hover:text-gray-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-700 dark:hover:bg-slate-900 dark:hover:text-slate-200"
          title="Search syllabus (Ctrl+K)"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden rounded bg-gray-200/80 px-1.5 py-0.5 text-[10px] font-mono text-gray-600 dark:bg-slate-700 dark:text-slate-300 xl:inline-block">
            Ctrl+K
          </kbd>
        </button>

        {/* Accessibility Button */}
        <button
          onClick={onOpenAccessibility}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Display and accessibility settings"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Settings Button */}
        <button
          onClick={() => onNavigateView('settings')}
          className={`p-2 rounded-lg transition-colors ${
            activeView === 'settings'
              ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          title="App & Study Data Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Theme Toggle Button */}
        <button
          id="theme-toggle-btn"
          onClick={() => setDarkMode(prev => !prev)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
          ) : (
            <Moon className="h-4 w-4 text-gray-600" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 shadow-xl z-50 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button
              onClick={() => { onSelectSubject('science'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Science (10 Ch)
            </button>
            <button
              onClick={() => { onSelectSubject('math'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Math (9 Ch)
            </button>
            <button
              onClick={() => { onNavigateView('glossary'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Glossary
            </button>
            <button
              onClick={() => { onNavigateView('formula_sheet'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Formulae
            </button>
            <button
              onClick={() => { onNavigateView('past_papers'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Past Papers
            </button>
            <button
              onClick={() => { onNavigateView('quick_revision'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Quick Revision
            </button>
            <button
              onClick={() => { onNavigateView('exam'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Exam Mode
            </button>
            <button
              onClick={() => { onNavigateView('progress'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Progress & Stats
            </button>
            <button
              onClick={() => { onNavigateView('settings'); setIsMobileMenuOpen(false); }}
              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-left"
            >
              Settings & Data
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
