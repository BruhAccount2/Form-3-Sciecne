import React from 'react';
import { SubjectType, Chapter, AppView } from '../types';
import { scienceChapters, mathChapters, sejarahChapters } from '../data';
import { getLastActivity } from '../utils/storage';
import { 
  Calculator, 
  FlaskConical, 
  Landmark,
  Search, 
  BookOpen, 
  FileText, 
  Calendar, 
  Shuffle, 
  Sparkles,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  History,
  RotateCcw
} from 'lucide-react';

interface HomePageProps {
  onSelectSubject: (subject: SubjectType) => void;
  onSelectChapter: (chapter: Chapter) => void;
  onNavigateView: (view: AppView) => void;
  completedChapterIds: string[];
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectSubject,
  onSelectChapter,
  onNavigateView,
  completedChapterIds,
  onOpenSearch
}) => {
  const scienceCompleted = scienceChapters.filter(c => completedChapterIds.includes(c.id)).length;
  const mathCompleted = mathChapters.filter(c => completedChapterIds.includes(c.id)).length;
  const sejarahCompleted = sejarahChapters.filter(c => completedChapterIds.includes(c.id)).length;

  const sciencePercentage = Math.round((scienceCompleted / scienceChapters.length) * 100);
  const mathPercentage = Math.round((mathCompleted / mathChapters.length) * 100);
  const sejarahPercentage = Math.round((sejarahCompleted / sejarahChapters.length) * 100);

  // Resume last studied chapter
  const lastActivity = getLastActivity();
  let resumeChapter: Chapter | undefined;
  if (lastActivity?.lastChapterId) {
    resumeChapter = [...scienceChapters, ...mathChapters, ...sejarahChapters].find(c => c.id === lastActivity.lastChapterId);
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 sm:p-10 leading-relaxed text-[#334155] dark:text-slate-300">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Welcome Header */}
        <div className="text-center pt-4 pb-2 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KSSM Form 3 Curriculum · Science, Mathematics & Sejarah</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Form 3 Revision
          </h1>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Accurate KSSM DSKP learning standards, structured notes with BM terms & English explanations, tiered exercises, and chapter tests.
          </p>

          {/* Quick Global Search Trigger */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-3 w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-500 shadow-xs transition hover:border-blue-500 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-slate-200"
            >
              <Search className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="flex-1 text-left">Search all 27 chapters, formulas, definitions, past papers...</span>
              <kbd className="hidden sm:inline-block rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                Ctrl+K
              </kbd>
            </button>
          </div>
        </div>

        {/* 'Pick Up Where You Left Off' Banner */}
        {resumeChapter && (
          <div className="p-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:border-blue-900/60 dark:from-blue-950/40 dark:to-indigo-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <History className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                  Pick up where you left off
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {resumeChapter.subject === 'science' ? 'Science' : resumeChapter.subject === 'math' ? 'Math' : 'Sejarah'} {resumeChapter.subject === 'sejarah' ? 'Bab' : 'Ch'} {resumeChapter.chapterNumber}: {resumeChapter.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onSelectChapter(resumeChapter!)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
            >
              <span>Continue Studying</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Subject Selector (Three Clear Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Science Card */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-400 dark:hover:border-blue-500 transition group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  10 Chapters
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Form 3 Science
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Stimuli & Responses, Respiration, Circulation, Reactivity, Thermochemistry, Electricity, Energy & Space.
                </p>
              </div>

              {/* Progress */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span>Syllabus Progress</span>
                  <span>{scienceCompleted}/10 Completed ({sciencePercentage}%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-cyan-600 dark:bg-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${sciencePercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectSubject('science')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition flex items-center justify-center gap-2 dark:bg-slate-800 dark:hover:bg-blue-600"
            >
              <span>{scienceCompleted > 0 ? 'Continue Science' : 'Start Science'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mathematics Card */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-400 dark:hover:border-blue-500 transition group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  9 Chapters
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Form 3 Mathematics
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Indices, Standard Form, Consumer Math, Scale Drawings, Trigonometry, Circle Angles, Plans, Loci & Lines.
                </p>
              </div>

              {/* Progress */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span>Syllabus Progress</span>
                  <span>{mathCompleted}/9 Completed ({mathPercentage}%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${mathPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectSubject('math')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition flex items-center justify-center gap-2 dark:bg-slate-800 dark:hover:bg-blue-600"
            >
              <span>{mathCompleted > 0 ? 'Continue Mathematics' : 'Start Mathematics'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Sejarah Card */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-6 hover:border-amber-500 dark:hover:border-amber-500 transition group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Landmark className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  8 Bab
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Form 3 Sejarah
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Kedatangan Kuasa Barat, NNS, NNMB, NNMTB, Sarawak & Sabah, Kesan Ekonomi, Penentangan & Kebijaksanaan Raja.
                </p>
              </div>

              {/* Progress */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span>Syllabus Progress</span>
                  <span>{sejarahCompleted}/8 Selesai ({sejarahPercentage}%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-amber-600 dark:bg-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${sejarahPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectSubject('sejarah')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold transition flex items-center justify-center gap-2 dark:bg-slate-800 dark:hover:bg-amber-600"
            >
              <span>{sejarahCompleted > 0 ? 'Teruskan Sejarah' : 'Mula Sejarah'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Links Row: Test Yourself · Marking Scheme · Glossary · Formula Sheet · Past Papers */}
        <div className="pt-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Exam & Revision Tools
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <button
              onClick={() => onNavigateView('test_yourself')}
              className="p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-center shadow-xs group"
            >
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1.5" />
              <span className="text-xs font-extrabold text-blue-900 dark:text-blue-200 block">
                Test Yourself
              </span>
            </button>

            <button
              onClick={() => onNavigateView('marking_scheme')}
              className="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/40 dark:border-indigo-800 dark:bg-indigo-950/40 hover:border-indigo-500 transition text-center shadow-xs group"
            >
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 group-hover:text-indigo-600 block">
                Marking Scheme
              </span>
            </button>

            <button
              onClick={() => onNavigateView('past_papers')}
              className="p-3.5 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition text-center shadow-xs group"
            >
              <Bookmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block">
                Past Papers
              </span>
            </button>

            <button
              onClick={() => onNavigateView('glossary')}
              className="p-3.5 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition text-center shadow-xs group"
            >
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block">
                Glossary
              </span>
            </button>

            <button
              onClick={() => onNavigateView('formula_sheet')}
              className="p-3.5 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition text-center shadow-xs group col-span-2 sm:col-span-1"
            >
              <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block">
                Formula Sheet
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
