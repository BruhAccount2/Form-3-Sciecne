import React, { useState, useEffect } from 'react';
import { SubjectType, Chapter } from './types';
import { scienceChapters, mathChapters, allChapters, getChapterById, getChaptersBySubject } from './data';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SubjectView } from './components/SubjectView';
import { ChapterContainer } from './components/chapter/ChapterContainer';
import { SearchModal } from './components/SearchModal';
import { FeedbackModal } from './components/FeedbackModal';

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

  // Routing state
  const [activeSubject, setActiveSubject] = useState<SubjectType | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

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

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handlers
  const handleNavigateHome = () => {
    setActiveSubject(null);
    setActiveChapterId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subject: SubjectType) => {
    setActiveSubject(subject);
    setActiveChapterId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (chapter: Chapter) => {
    setActiveSubject(chapter.subject);
    setActiveChapterId(chapter.id);
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
        onNavigateHome={handleNavigateHome}
        onSelectSubject={handleSelectSubject}
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
          />
        ) : activeSubject ? (
          <SubjectView
            subject={activeSubject}
            onSelectChapter={handleSelectChapter}
            completedChapterIds={completedChapterIds}
            onToggleCompleteChapter={toggleCompleteChapter}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          <HomePage
            onSelectSubject={handleSelectSubject}
            onSelectChapter={handleSelectChapter}
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

      {/* Feedback Modal for zc */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

    </div>
  );
}
