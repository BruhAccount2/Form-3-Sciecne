import React from 'react';
import { SubjectType, Chapter, AppView } from '../types';
import { scienceChapters, mathChapters } from '../data';
import { 
  CheckCircle2, 
  ChevronRight, 
  Calculator, 
  FlaskConical, 
  Search, 
  BookOpen, 
  FileText, 
  Zap, 
  Timer, 
  Calendar, 
  Shuffle, 
  Bookmark, 
  AlertTriangle, 
  Award,
  Sparkles,
  ArrowRight
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

  return (
    <div className="flex-1 overflow-y-auto p-6 sm:p-10 leading-relaxed text-[#334155] dark:text-slate-300">
      <div className="mx-auto max-w-6xl space-y-12">
        
        {/* Central Hero Section */}
        <div className="text-center pt-2 pb-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#EFF6FF] px-3.5 py-1 text-xs font-semibold text-[#2563EB] dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Malaysian KSSM Curriculum</span>
            <span>•</span>
            <span>Dual Language Programme (DLP)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            KSSM Form 3 Revision Hub
          </h1>

          <div className="h-1 w-20 bg-[#2563EB] mx-auto rounded-full mt-3 mb-4"></div>

          <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#475569] dark:text-slate-400">
            Complete syllabus coverage for Form 3 Science and Mathematics with structured notes, step-by-step worked exercises, interactive past papers, formulas, and timed exam simulations.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-3 w-full max-w-md rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs text-gray-500 shadow-xs transition hover:border-[#2563EB] hover:text-gray-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-slate-200"
            >
              <Search className="h-4 w-4 text-[#2563EB] dark:text-blue-400 shrink-0" />
              <span className="flex-1 text-left">Search all 19 chapters, formulas, definitions, past papers...</span>
              <kbd className="hidden sm:inline-block rounded bg-gray-100 px-2 py-0.5 text-[10px] font-mono text-gray-500 dark:bg-slate-800 dark:text-slate-400">
                Ctrl+K
              </kbd>
            </button>
          </div>
        </div>

        {/* Quick Revision Tools Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                Interactive Practice & Revision Tools
              </h3>
            </div>
            <span className="text-xs text-slate-500">Timed simulations & rapid reviews</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Daily Revision */}
            <button
              onClick={() => onNavigateView('daily_revision')}
              className="p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Daily Revision Set
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  10 curated daily questions across Science & Math with streak counter.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                Start Daily Set <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>

            {/* Quick 5-10 Min Revision */}
            <button
              onClick={() => onNavigateView('quick_revision')}
              className="p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Quick Revision
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  5–10 min high-yield summaries, key facts, pitfall warnings & checkpoints.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                Rapid Review <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>

            {/* Timed Exam Mode */}
            <button
              onClick={() => onNavigateView('exam')}
              className="p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Timer className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Timed Exam Simulator
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Full exam conditions with timer, question palette & weak area analysis.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                Launch Exam <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>

            {/* Random Practice */}
            <button
              onClick={() => onNavigateView('random_practice')}
              className="p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Shuffle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Random Practice
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Customizable practice quizzes with immediate step-by-step solutions.
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                Custom Quiz <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>
          </div>
        </div>

        {/* Two Prominent Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Form 3 Science Card */}
          <div
            id="home-card-science"
            onClick={() => onSelectSubject('science')}
            className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs hover:border-[#2563EB] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 transition-all cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#EFF6FF] dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                  10 Chapters
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-blue-400 transition-colors">
                  Form 3 Science
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  Stimuli & responses, respiratory system, human & plant transport, reactivity series, thermochemistry, electricity, radioactivity, and space exploration.
                </p>
              </div>

              {/* Highlights bullet tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Human Physiology', 'Reactivity Series', 'Transformers', 'Radioactivity', 'Lab Reports'].map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-slate-400">
                {scienceCompleted}/10 Chapters completed
              </span>
              <span className="flex items-center gap-1.5 font-bold text-[#2563EB] dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                Explore Science <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Form 3 Mathematics Card */}
          <div
            id="home-card-math"
            onClick={() => onSelectSubject('math')}
            className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs hover:border-[#2563EB] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 transition-all cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#EFF6FF] dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                  <Calculator className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                  9 Chapters
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-blue-400 transition-colors">
                  Form 3 Mathematics
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  Indices laws, standard form, consumer math (savings, investments & loans), scale drawings, trigonometry ratios, circles, plans & elevations, and straight lines.
                </p>
              </div>

              {/* Highlights bullet tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Index Laws', 'Interest & Credit', 'Trig Ratios', 'Circle Theorems', 'Orthogonal Plans'].map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-slate-400">
                {mathCompleted}/9 Chapters completed
              </span>
              <span className="flex items-center gap-1.5 font-bold text-[#2563EB] dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                Explore Mathematics <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Resources & Reference Hub */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block"></span>
              <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                Exam Reference & Resource Vault
              </h3>
            </div>
            <span className="text-xs text-slate-500">Official definitions & trial papers</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Glossary */}
            <button
              onClick={() => onNavigateView('glossary')}
              className="p-5 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 transition-all text-left flex items-start gap-4 group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Subject Glossary
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete definitions, mathematical explanations and examples for all chapters.
                </p>
              </div>
            </button>

            {/* Formula Sheet */}
            <button
              onClick={() => onNavigateView('formula_sheet')}
              className="p-5 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 transition-all text-left flex items-start gap-4 group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Formula Sheet & Rules
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Mathematical formulas and science equations with symbol SI units and worked steps.
                </p>
              </div>
            </button>

            {/* Past Papers */}
            <button
              onClick={() => onNavigateView('past_papers')}
              className="p-5 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 transition-all text-left flex items-start gap-4 group shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Malaysian Past Papers
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  MRSM, State trial & premier school papers with official step-by-step marking rubrics.
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Personal Study Dashboard Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigateView('weak_areas')}
            className="p-4 rounded-xl border border-rose-100 bg-rose-50/50 dark:border-rose-950 dark:bg-rose-950/20 text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <div>
                <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">Weak Area Tracker</h4>
                <p className="text-2xs text-rose-700 dark:text-rose-400">Target mistakes & errors</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-rose-500 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateView('bookmarks')}
            className="p-4 rounded-xl border border-amber-100 bg-amber-50/50 dark:border-amber-950 dark:bg-amber-950/20 text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <div>
                <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200">Saved Bookmarks</h4>
                <p className="text-2xs text-amber-700 dark:text-amber-400">Notes, formulas & terms</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateView('progress')}
            className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 dark:border-blue-950 dark:bg-blue-950/20 text-left flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="text-xs font-bold text-blue-900 dark:text-blue-200">Syllabus Analytics</h4>
                <p className="text-2xs text-blue-700 dark:text-blue-400">Track 19 chapters mastery</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Frequently Examined Revision Topics */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#2563EB] rounded-full inline-block"></span>
              <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                Frequently Examined High-Yield Topics
              </h3>
            </div>
            <span className="text-xs text-gray-400 dark:text-slate-500">
              Exam focus areas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { chId: 'sci-ch3', subject: 'science', label: 'Human Blood & Plant Transport', chNum: 3 },
              { chId: 'sci-ch5', subject: 'science', label: 'Reactivity Series of Metals', chNum: 5 },
              { chId: 'math-ch3', subject: 'math', label: 'Consumer Maths (Interest & Loans)', chNum: 3 },
              { chId: 'math-ch6', subject: 'math', label: 'Angles & Tangents of Circles', chNum: 6 },
            ].map((item) => {
              const ch = (item.subject === 'science' ? scienceChapters : mathChapters).find(c => c.id === item.chId);
              if (!ch) return null;
              const padNum = String(item.chNum).padStart(2, '0');
              return (
                <button
                  key={item.chId}
                  onClick={() => onSelectChapter(ch)}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-white hover:border-[#2563EB] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 text-left transition group shadow-2xs"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#2563EB] dark:text-blue-400 uppercase tracking-wider block">
                      {item.subject === 'science' ? 'Science' : 'Mathematics'} • Ch {padNum}
                    </span>
                    <span className="text-xs font-bold text-[#0F172A] dark:text-slate-200 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 line-clamp-1">
                      {ch.title}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition shrink-0 ml-2" />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
