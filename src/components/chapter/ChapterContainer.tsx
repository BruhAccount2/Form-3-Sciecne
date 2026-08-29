import React, { useState, useEffect } from 'react';
import { Chapter, ChapterTab } from '../../types';
import { NotesView } from './NotesView';
import { ExercisesView } from './ExercisesView';
import { AnswersView } from './AnswersView';
import { MindmapView } from './MindmapView';
import { ExperimentView } from './ExperimentView';
import { AnsweringTechniquesView } from './AnsweringTechniquesView';
import { SimulationView } from './SimulationView';
import { AuditView } from './AuditView';
import { LearningStandardsAuditModal } from './LearningStandardsAuditModal';
import { ArrowLeft, ArrowRight, Menu, X, Sparkles, Award, ShieldCheck } from 'lucide-react';

interface ChapterContainerProps {
  chapter: Chapter;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onSelectChapter: (ch: Chapter) => void;
  allSubjectChapters: Chapter[];
  onBackToSubject: () => void;
}

export const ChapterContainer: React.FC<ChapterContainerProps> = ({
  chapter,
  isCompleted,
  onToggleComplete,
  onSelectChapter,
  allSubjectChapters,
  onBackToSubject
}) => {
  const [activeTab, setActiveTab] = useState<ChapterTab>('notes');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Reset to notes when chapter changes
  useEffect(() => {
    setActiveTab('notes');
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapter.id]);

  const currentIndex = allSubjectChapters.findIndex(c => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? allSubjectChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allSubjectChapters.length - 1 ? allSubjectChapters[currentIndex + 1] : null;

  // Tabs configuration
  const tabs: { id: ChapterTab; label: string; count?: number; show?: boolean }[] = [
    { id: 'notes', label: 'Notes' },
    { id: 'exercises', label: 'Exercises', count: chapter.exercises.length },
    { id: 'answers', label: 'Answers' },
    { id: 'simulations', label: 'Interactive Lab' },
    { id: 'audit', label: 'KSSM DSKP Matrix' },
    { id: 'mindmap', label: 'Mindmap' },
    { 
      id: 'experiment', 
      label: 'Experiments', 
      show: chapter.subject === 'science' || (chapter.experiments && chapter.experiments.length > 0)
    },
    { id: 'techniques', label: 'Answering Techniques' }
  ];

  const visibleTabs = tabs.filter(t => t.show !== false);

  const standards = chapter.learningStandards || [];
  const totalCount = standards.length;
  const completeCount = standards.filter(
    s => s.notesCoverage && s.exerciseCoverage && s.answerCoverage
  ).length;
  const coveragePercentage = totalCount > 0 ? Math.round((completeCount / totalCount) * 100) : 100;

  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-[#F8FAFC] dark:bg-slate-950 text-[#1E293B] dark:text-slate-100 min-h-[calc(100vh-7rem)] transition-colors">
      
      {/* Mobile Drawer Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/60 lg:hidden backdrop-blur-xs"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar (Syllabus KSSM Form 3 Chapters List) */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 lg:static lg:z-auto lg:w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col shrink-0 transform transition-transform duration-200 ease-in-out ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Official KSSM DSKP</span>
            </div>
            <p className="text-xs font-bold text-[#0F172A] dark:text-slate-200 mt-0.5">
              {chapter.subject === 'science' ? 'Form 3 Science' : 'Form 3 Mathematics'}
            </p>
          </div>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chapters list */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {allSubjectChapters.map((ch) => {
            const isCurrent = ch.id === chapter.id;
            const padNum = String(ch.chapterNumber).padStart(2, '0');
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-left transition-colors ${
                  isCurrent
                    ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold dark:bg-blue-950/60 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-slate-400 dark:hover:bg-slate-800 font-medium'
                }`}
              >
                <span className="w-6 opacity-60 font-mono text-xs shrink-0">{padNum}</span>
                <span className="truncate">{ch.title}</span>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer Back Link & Audit Quick Launch */}
        <div className="p-3 border-t border-gray-100 dark:border-slate-800 space-y-2">
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold transition-colors"
          >
            <Award className="h-3.5 w-3.5" />
            <span>KSSM Coverage: {coveragePercentage}%</span>
          </button>

          <button
            onClick={onBackToSubject}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All {chapter.subject === 'science' ? 'Science' : 'Math'} Topics</span>
          </button>
        </div>
      </aside>

      {/* Main Section Content Area */}
      <section className="flex-1 flex flex-col bg-white dark:bg-slate-900 overflow-hidden min-w-0">
        
        {/* Tab Navigation Header Bar */}
        <div className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-4 sm:px-6 shrink-0">
          
          <div className="flex items-center gap-2">
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-white"
              aria-label="Open chapters menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Tabs List */}
            <nav className="h-12 flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none">
              {visibleTabs.map((t) => {
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    id={`tab-${t.id}`}
                    onClick={() => setActiveTab(t.id)}
                    className={`text-sm h-full px-1 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      isActive
                        ? 'font-bold border-b-2 border-[#2563EB] text-[#2563EB] dark:border-blue-400 dark:text-blue-400'
                        : 'font-medium text-gray-500 hover:text-[#2563EB] dark:text-slate-400 dark:hover:text-blue-400'
                    }`}
                  >
                    <span>{t.label}</span>
                    {t.count !== undefined && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive 
                          ? 'bg-blue-100 text-[#2563EB] dark:bg-blue-900 dark:text-blue-300' 
                          : 'bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {t.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Prev / Next Navigator on top right */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 hover:opacity-90 transition"
              title="Click to view full KSSM DSKP coverage audit matrix"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Coverage: 100%</span>
            </button>

            <div className="flex items-center gap-1">
              {prevChapter && (
                <button
                  onClick={() => onSelectChapter(prevChapter)}
                  className="p-1 text-gray-400 hover:text-[#2563EB] dark:hover:text-blue-400 transition"
                  title={`Previous: Ch ${prevChapter.chapterNumber} ${prevChapter.title}`}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              )}
              <span className="text-xs font-semibold text-gray-400 dark:text-slate-500">
                {chapter.chapterNumber}/{allSubjectChapters.length}
              </span>
              {nextChapter && (
                <button
                  onClick={() => onSelectChapter(nextChapter)}
                  className="p-1 text-gray-400 hover:text-[#2563EB] dark:hover:text-blue-400 transition"
                  title={`Next: Ch ${nextChapter.chapterNumber} ${nextChapter.title}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10 leading-relaxed text-[#334155] dark:text-slate-300">
          <div className="max-w-4xl mx-auto">
            {activeTab === 'notes' && (
              <NotesView
                chapter={chapter}
                isCompleted={isCompleted}
                onToggleComplete={onToggleComplete}
              />
            )}
            {activeTab === 'exercises' && <ExercisesView chapter={chapter} />}
            {activeTab === 'answers' && <AnswersView chapter={chapter} />}
            {activeTab === 'simulations' && <SimulationView chapter={chapter} />}
            {activeTab === 'audit' && <AuditView chapter={chapter} />}
            {activeTab === 'mindmap' && <MindmapView chapter={chapter} />}
            {activeTab === 'experiment' && <ExperimentView chapter={chapter} />}
            {activeTab === 'techniques' && <AnsweringTechniquesView chapter={chapter} />}

            {/* Bottom Prev / Next Navigation Footer */}
            <div className="flex items-center justify-between pt-10 mt-12 border-t border-gray-200 dark:border-slate-800 text-xs">
              {prevChapter ? (
                <button
                  onClick={() => onSelectChapter(prevChapter)}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 bg-white hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 text-left transition group"
                >
                  <ArrowLeft className="h-4 w-4 text-gray-400 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 group-hover:-translate-x-0.5 transition" />
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider block">Previous Chapter</span>
                    <span className="font-bold text-[#0F172A] dark:text-slate-200 group-hover:text-[#2563EB] dark:group-hover:text-blue-400">
                      Ch {prevChapter.chapterNumber}: {prevChapter.title}
                    </span>
                  </div>
                </button>
              ) : <div />}

              {nextChapter ? (
                <button
                  onClick={() => onSelectChapter(nextChapter)}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 bg-white hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900 text-right transition group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider block">Next Chapter</span>
                    <span className="font-bold text-[#0F172A] dark:text-slate-200 group-hover:text-[#2563EB] dark:group-hover:text-blue-400">
                      Ch {nextChapter.chapterNumber}: {nextChapter.title}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition" />
                </button>
              ) : <div />}
            </div>

          </div>
        </div>

      </section>

      {/* Learning Standards DSKP Modal */}
      <LearningStandardsAuditModal
        chapter={chapter}
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

    </div>
  );
};
