import React, { useState, useEffect } from 'react';
import { Chapter, MainChapterSection, ChapterTab, MasteryStatus } from '../../types';
import { NotesView } from './NotesView';
import { ExercisesView } from './ExercisesView';
import { AnswersView } from './AnswersView';
import { MindmapView } from './MindmapView';
import { ExperimentView } from './ExperimentView';
import { AnsweringTechniquesView } from './AnsweringTechniquesView';
import { SimulationView } from './SimulationView';
import { AuditView } from './AuditView';
import { ChapterQuizView } from './ChapterQuizView';
import { LearningStandardsAuditModal } from './LearningStandardsAuditModal';
import { ErrorBoundary } from '../ErrorBoundary';
import { computeChapterKSSMCoverage } from '../../utils/coverage';
import { 
  getStandardMastery, 
  setStandardMastery, 
  calculateChapterMastery,
  recordLastActivity 
} from '../../utils/storage';
import { 
  ArrowLeft, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  PenTool, 
  CheckCircle2, 
  Printer,
  Compass,
  FileText,
  Sliders,
  Check,
  CircleDot,
  Clock,
  RotateCcw
} from 'lucide-react';

interface ChapterContainerProps {
  chapter: Chapter;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onSelectChapter: (ch: Chapter) => void;
  allSubjectChapters: Chapter[];
  onBackToSubject: () => void;
  onOpenPrintView?: (chapter: Chapter) => void;
}

export const ChapterContainer: React.FC<ChapterContainerProps> = ({
  chapter,
  isCompleted,
  onToggleComplete,
  onSelectChapter,
  allSubjectChapters,
  onBackToSubject,
  onOpenPrintView
}) => {
  const [mainSection, setMainSection] = useState<MainChapterSection>('learn');
  const [learnSubTab, setLearnSubTab] = useState<'notes' | 'mindmap' | 'simulations' | 'experiments'>('notes');
  const [practiseSubTab, setPractiseSubTab] = useState<'quiz' | 'exercises' | 'answers' | 'techniques'>('quiz');
  const [checkSubTab, setCheckSubTab] = useState<'coverage' | 'mastery'>('coverage');

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [masteryState, setMasteryState] = useState<Record<string, MasteryStatus>>({});

  // Reset to learn/notes when chapter changes & track last activity
  useEffect(() => {
    setMainSection('learn');
    setLearnSubTab('notes');
    setIsMobileSidebarOpen(false);
    setMasteryState(getStandardMastery());
    window.scrollTo({ top: 0, behavior: 'smooth' });

    recordLastActivity({
      lastChapterId: chapter.id,
      lastSubject: chapter.subject,
      lastChapterTitle: chapter.title,
      lastChapterNumber: chapter.chapterNumber,
      lastSection: 'learn'
    });
  }, [chapter.id]);

  const currentIndex = allSubjectChapters.findIndex(c => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? allSubjectChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allSubjectChapters.length - 1 ? allSubjectChapters[currentIndex + 1] : null;

  // Real Computed KSSM Coverage
  const coverageData = computeChapterKSSMCoverage(chapter);
  const masterySummary = calculateChapterMastery(chapter.learningStandards || []);

  const handleUpdateMastery = (code: string, status: MasteryStatus) => {
    setStandardMastery(code, status);
    setMasteryState({ ...getStandardMastery(), [code]: status });
  };

  const jumpToStandard = (code: string) => {
    setMainSection('learn');
    setLearnSubTab('notes');
    // Scroll smoothly to standard anchor if exists
    setTimeout(() => {
      const el = document.getElementById(`standard-${code}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

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
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400">
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
            onClick={() => {
              setMainSection('check');
              setCheckSubTab('coverage');
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 text-xs font-bold transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>KSSM Coverage</span>
            </div>
            <span className="font-mono">{coverageData.coveredStandards}/{coverageData.totalStandards} ({coverageData.coveragePercentage}%)</span>
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
        
        {/* Top 3-Section Master Bar: Learn · Practise · Check */}
        <div className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          
          <div className="flex items-center gap-3">
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-1.5 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-white rounded-lg border border-gray-200 dark:border-slate-700"
              aria-label="Open chapters menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* 3 Core Section Switchers */}
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              <button
                onClick={() => {
                  setMainSection('learn');
                  recordLastActivity({ lastSection: 'learn' });
                }}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mainSection === 'learn'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Learn</span>
              </button>

              <button
                onClick={() => {
                  setMainSection('practise');
                  recordLastActivity({ lastSection: 'practise' });
                }}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mainSection === 'practise'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <PenTool className="h-4 w-4" />
                <span>Practise</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  {chapter.exercises.length}
                </span>
              </button>

              <button
                onClick={() => {
                  setMainSection('check');
                  recordLastActivity({ lastSection: 'check' });
                }}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mainSection === 'check'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Check</span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {coverageData.coveragePercentage}%
                </span>
              </button>
            </div>
          </div>

          {/* Quick Tools: Print Notes & Prev/Next */}
          <div className="flex items-center gap-2.5">
            {onOpenPrintView && (
              <button
                onClick={() => onOpenPrintView(chapter)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition"
                title="Print clean revision notes without UI distractions"
              >
                <Printer className="h-3.5 w-3.5 text-slate-500" />
                <span>Print Notes</span>
              </button>
            )}

            <div className="flex items-center gap-1 pl-2 border-l border-slate-200 dark:border-slate-700">
              {prevChapter && (
                <button
                  onClick={() => onSelectChapter(prevChapter)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  title={`Previous: Ch ${prevChapter.chapterNumber}`}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              )}
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 px-1">
                {chapter.chapterNumber}/{allSubjectChapters.length}
              </span>
              {nextChapter && (
                <button
                  onClick={() => onSelectChapter(nextChapter)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  title={`Next: Ch ${nextChapter.chapterNumber}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Secondary Sub-Tabs Strip for Active Section */}
        <div className="bg-slate-50/80 dark:bg-slate-900/60 border-b border-gray-200 dark:border-slate-800 px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none">
          
          {/* LEARN SUB-TABS */}
          {mainSection === 'learn' && (
            <>
              <button
                onClick={() => setLearnSubTab('notes')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  learnSubTab === 'notes'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                📝 Comprehensive Notes
              </button>
              <button
                onClick={() => setLearnSubTab('mindmap')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  learnSubTab === 'mindmap'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                🗺️ Mindmap
              </button>
              <button
                onClick={() => setLearnSubTab('simulations')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  learnSubTab === 'simulations'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                🧪 Interactive Lab
              </button>
              {chapter.subject === 'science' && (
                <button
                  onClick={() => setLearnSubTab('experiments')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                    learnSubTab === 'experiments'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                  }`}
                >
                  🔬 Core Experiments
                </button>
              )}
            </>
          )}

          {/* PRACTISE SUB-TABS */}
          {mainSection === 'practise' && (
            <>
              <button
                onClick={() => setPractiseSubTab('quiz')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                  practiseSubTab === 'quiz'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <span>⚡ 15-Q Chapter Quiz</span>
              </button>
              <button
                onClick={() => setPractiseSubTab('exercises')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  practiseSubTab === 'exercises'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                📋 Tiered Exercises ({chapter.exercises.length})
              </button>
              <button
                onClick={() => setPractiseSubTab('answers')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  practiseSubTab === 'answers'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                🔑 Step-by-Step Answer Bank
              </button>
              <button
                onClick={() => setPractiseSubTab('techniques')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  practiseSubTab === 'techniques'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                🎯 Exam Techniques
              </button>
            </>
          )}

          {/* CHECK SUB-TABS */}
          {mainSection === 'check' && (
            <>
              <button
                onClick={() => setCheckSubTab('coverage')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  checkSubTab === 'coverage'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                📊 KSSM DSKP Coverage Matrix
              </button>
              <button
                onClick={() => setCheckSubTab('mastery')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  checkSubTab === 'mastery'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                🏆 Learning Standard Mastery Tracker
              </button>
            </>
          )}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10 leading-relaxed text-[#334155] dark:text-slate-300">
          <div className="max-w-4xl mx-auto space-y-6">
            <ErrorBoundary fallbackTitle="Error displaying chapter view">
              {/* LEARN SECTION RENDERING */}
            {mainSection === 'learn' && (
              <>
                {learnSubTab === 'notes' && (
                  <NotesView
                    chapter={chapter}
                    isCompleted={isCompleted}
                    onToggleComplete={onToggleComplete}
                  />
                )}
                {learnSubTab === 'mindmap' && <MindmapView chapter={chapter} />}
                {learnSubTab === 'simulations' && <SimulationView chapter={chapter} />}
                {learnSubTab === 'experiments' && <ExperimentView chapter={chapter} />}
              </>
            )}

            {/* PRACTISE SECTION RENDERING */}
            {mainSection === 'practise' && (
              <>
                {practiseSubTab === 'quiz' && (
                  <ChapterQuizView 
                    chapter={chapter} 
                    onNavigateNotes={() => {
                      setMainSection('learn');
                      setLearnSubTab('notes');
                    }}
                  />
                )}
                {practiseSubTab === 'exercises' && <ExercisesView chapter={chapter} />}
                {practiseSubTab === 'answers' && <AnswersView chapter={chapter} />}
                {practiseSubTab === 'techniques' && <AnsweringTechniquesView chapter={chapter} />}
              </>
            )}

            {/* CHECK SECTION RENDERING */}
            {mainSection === 'check' && (
              <>
                {checkSubTab === 'coverage' && <AuditView chapter={chapter} />}
                
                {checkSubTab === 'mastery' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="p-5 rounded-2xl border border-blue-200 bg-white dark:border-blue-900/60 dark:bg-slate-900 shadow-xs space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Personal Competency & Revision Status
                          </span>
                          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            Chapter {chapter.chapterNumber} Learning Standards Mastery
                          </h2>
                        </div>
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1.5 rounded-xl border border-blue-100 dark:border-blue-900">
                          Overall Mastery: {masterySummary.masteryPercentage}%
                        </div>
                      </div>

                      {/* Mastery stats summary pill cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
                          <span className="font-bold text-emerald-800 dark:text-emerald-300 block">🟢 Mastered</span>
                          <span className="text-lg font-extrabold text-emerald-900 dark:text-emerald-200 font-mono">{masterySummary.masteredCount}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                          <span className="font-bold text-blue-800 dark:text-blue-300 block">🟡 Practising</span>
                          <span className="text-lg font-extrabold text-blue-900 dark:text-blue-200 font-mono">{masterySummary.practisingCount}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900">
                          <span className="font-bold text-rose-800 dark:text-rose-300 block">🔴 Needs Revision</span>
                          <span className="text-lg font-extrabold text-rose-900 dark:text-rose-200 font-mono">{masterySummary.needsRevisionCount}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold text-slate-700 dark:text-slate-300 block">⚪ Unattempted</span>
                          <span className="text-lg font-extrabold text-slate-800 dark:text-slate-200 font-mono">{masterySummary.unattemptedCount}</span>
                        </div>
                      </div>

                      {/* Standards interactive list */}
                      <div className="space-y-3 pt-2">
                        {chapter.learningStandards?.map((std) => {
                          const currentStatus: MasteryStatus = masteryState[std.code] || 'unattempted';
                          return (
                            <div
                              key={std.code}
                              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    KSSM {std.code}
                                  </span>
                                  <button
                                    onClick={() => jumpToStandard(std.code)}
                                    className="text-xs text-blue-600 hover:underline dark:text-blue-400 font-medium"
                                  >
                                    View Notes ↗
                                  </button>
                                </div>
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                  {std.standard}
                                </p>
                              </div>

                              {/* Mastery Status Selector */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                {(
                                  [
                                    { id: 'mastered', label: 'Mastered', color: 'bg-emerald-600 text-white' },
                                    { id: 'practising', label: 'Practising', color: 'bg-blue-600 text-white' },
                                    { id: 'needs_revision', label: 'Needs Help', color: 'bg-rose-600 text-white' },
                                    { id: 'unattempted', label: 'Reset', color: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300' }
                                  ] as const
                                ).map((opt) => (
                                  <button
                                    key={opt.id}
                                    onClick={() => handleUpdateMastery(std.code, opt.id)}
                                    className={`px-2.5 py-1 text-xs rounded-lg font-bold transition ${
                                      currentStatus === opt.id
                                        ? opt.color
                                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                                    }`}
                                  >
                                    {opt.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            </ErrorBoundary>

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
