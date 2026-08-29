import React, { useState, useEffect } from 'react';
import { SubjectType, Chapter, AppView } from './types';
import { scienceChapters, mathChapters, allChapters, getChapterById, getChaptersBySubject } from './data';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SubjectView } from './components/SubjectView';
import { ChapterContainer } from './components/chapter/ChapterContainer';
import { SearchModal } from './components/SearchModal';
import { FeedbackModal } from './components/FeedbackModal';
import { GlossaryView } from './components/GlossaryView';
import { FormulaSheetView } from './components/FormulaSheetView';
import { PastPapersView } from './components/PastPapersView';
import { QuickRevisionView } from './components/QuickRevisionView';
import { DailyRevisionView } from './components/DailyRevisionView';
import { RandomPracticeView } from './components/RandomPracticeView';
import { ExamModeView } from './components/ExamModeView';
import { BookmarksView } from './components/BookmarksView';
import { WeakAreasView } from './components/WeakAreasView';
import { ProgressView } from './components/ProgressView';
import { AccessibilityModal } from './components/AccessibilityModal';
import { PrintNotesModal } from './components/PrintNotesModal';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('f3_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Font size state
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('f3_fontsize');
      if (saved === 'large' || saved === 'xlarge') return saved;
    }
    return 'normal';
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('f3_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('f3_theme', 'light');
    }
  }, [darkMode]);

  // Apply font size style
  useEffect(() => {
    localStorage.setItem('f3_fontsize', fontSize);
    if (fontSize === 'large') {
      document.documentElement.style.fontSize = '17px';
    } else if (fontSize === 'xlarge') {
      document.documentElement.style.fontSize = '18.5px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }
  }, [fontSize]);

  // Routing state
  const [activeView, setActiveView] = useState<AppView>('home');
  const [activeSubject, setActiveSubject] = useState<SubjectType | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState<boolean>(false);
  const [printChapter, setPrintChapter] = useState<Chapter | null>(null);

  // Completed chapters stored in localStorage
  const [completedChapterIds, setCompletedChapterIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('f3_completed_chapters');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleCompleteChapter = (id: string) => {
    setCompletedChapterIds(prev => {
      const updated = prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id];
      localStorage.setItem('f3_completed_chapters', JSON.stringify(updated));
      return updated;
    });
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.altKey && (e.key === 't' || e.key === 'T')) {
        e.preventDefault();
        setDarkMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handlers
  const handleNavigateHome = () => {
    setActiveView('home');
    setActiveSubject(null);
    setActiveChapterId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subject: SubjectType) => {
    setActiveView('home');
    setActiveSubject(subject);
    setActiveChapterId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (chapter: Chapter) => {
    setActiveView('home');
    setActiveSubject(chapter.subject);
    setActiveChapterId(chapter.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateChapterById = (chapterId: string) => {
    const ch = getChapterById(chapterId);
    if (ch) {
      handleSelectChapter(ch);
    }
  };

  const handleNavigateView = (view: AppView) => {
    setActiveView(view);
    setActiveChapterId(null);
    setActiveSubject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeChapter = activeChapterId ? getChapterById(activeChapterId) : null;
  const currentSubjectChapters = activeSubject ? getChaptersBySubject(activeSubject) : [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 selection:bg-blue-600 selection:text-white dark:bg-slate-950 dark:text-slate-100 transition-colors">
      
      {/* Global Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSubject={activeSubject}
        activeChapterId={activeChapterId}
        activeView={activeView}
        onNavigateHome={handleNavigateHome}
        onSelectSubject={handleSelectSubject}
        onNavigateView={handleNavigateView}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        chapterTitle={activeChapter ? `Chapter ${activeChapter.chapterNumber}: ${activeChapter.title}` : undefined}
        completedChaptersCount={completedChapterIds.length}
        totalChaptersCount={allChapters.length}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeChapter ? (
          <ChapterContainer
            chapter={activeChapter}
            isCompleted={completedChapterIds.includes(activeChapter.id)}
            onToggleComplete={() => toggleCompleteChapter(activeChapter.id)}
            onSelectChapter={handleSelectChapter}
            allSubjectChapters={currentSubjectChapters}
            onBackToSubject={() => setActiveChapterId(null)}
            onOpenPrintView={(ch) => setPrintChapter(ch)}
          />
        ) : activeSubject ? (
          <SubjectView
            subject={activeSubject}
            onSelectChapter={handleSelectChapter}
            completedChapterIds={completedChapterIds}
            onToggleCompleteChapter={toggleCompleteChapter}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'glossary' ? (
          <GlossaryView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'formula_sheet' ? (
          <FormulaSheetView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'past_papers' ? (
          <PastPapersView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'quick_revision' ? (
          <QuickRevisionView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'daily_revision' ? (
          <DailyRevisionView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'random_practice' ? (
          <RandomPracticeView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'exam' ? (
          <ExamModeView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'bookmarks' ? (
          <BookmarksView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateGlossary={() => handleNavigateView('glossary')}
            onNavigatePastPapers={() => handleNavigateView('past_papers')}
            onNavigateFormulae={() => handleNavigateView('formula_sheet')}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'weak_areas' ? (
          <WeakAreasView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : activeView === 'progress' ? (
          <ProgressView
            onNavigateChapter={handleNavigateChapterById}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          <HomePage
            onSelectSubject={handleSelectSubject}
            onSelectChapter={handleSelectChapter}
            onNavigateView={handleNavigateView}
            completedChapterIds={completedChapterIds}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onOpenFeedback={() => setIsFeedbackOpen(true)} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectChapter={handleSelectChapter}
      />

      {/* Feedback Modal for Form 3 students */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* Accessibility & Display Settings Modal */}
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        isDarkMode={darkMode}
        onToggleTheme={() => setDarkMode(prev => !prev)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
      />

      {/* Printable Notes Modal */}
      <PrintNotesModal
        chapter={printChapter}
        isOpen={!!printChapter}
        onClose={() => setPrintChapter(null)}
      />

    </div>
  );
}
