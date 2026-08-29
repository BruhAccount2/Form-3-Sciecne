import React from 'react';
import { SubjectType, Chapter } from '../types';
import { scienceChapters, mathChapters } from '../data';
import { CheckCircle2, ChevronRight, Calculator, FlaskConical, Search, Target } from 'lucide-react';

interface HomePageProps {
  onSelectSubject: (subject: SubjectType) => void;
  onSelectChapter: (chapter: Chapter) => void;
  completedChapterIds: string[];
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectSubject,
  onSelectChapter,
  completedChapterIds,
  onOpenSearch
}) => {
  const scienceCompleted = scienceChapters.filter(c => completedChapterIds.includes(c.id)).length;
  const mathCompleted = mathChapters.filter(c => completedChapterIds.includes(c.id)).length;

  return (
    <div className="flex-1 overflow-y-auto p-6 sm:p-10 leading-relaxed text-[#334155] dark:text-slate-300">
      <div className="mx-auto max-w-5xl space-y-12">
        
        {/* Central Hero Section */}
        <div className="text-center pt-4 pb-2">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#EFF6FF] px-3.5 py-1 text-xs font-semibold text-[#2563EB] dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 mb-4">
            <span>Malaysian KSSM Curriculum</span>
            <span>•</span>
            <span>Dual Language Programme (DLP)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
            Form 3 Revision
          </h1>

          <div className="h-1 w-20 bg-[#2563EB] mx-auto rounded-full mt-3 mb-4"></div>

          <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#475569] dark:text-slate-400">
            A minimalist, distraction-free revision platform designed for Malaysian Form 3 students. Concise notes, step-by-step math exercises, science lab experiments, and answering techniques.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-3 w-full max-w-md rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs text-gray-500 shadow-2xs transition hover:border-[#2563EB] hover:text-gray-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-slate-200"
            >
              <Search className="h-4 w-4 text-[#2563EB] dark:text-blue-400 shrink-0" />
              <span className="flex-1 text-left">Search all 19 KSSM chapters, topics, formulas...</span>
              <kbd className="hidden sm:inline-block rounded bg-gray-100 px-2 py-0.5 text-[10px] font-mono text-gray-500 dark:bg-slate-800 dark:text-slate-400">
                Ctrl+K
              </kbd>
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

        {/* Quick Access Top High-Yield Chapters */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#2563EB] rounded-full inline-block"></span>
              <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                Frequently Examined Revision Topics
              </h3>
            </div>
            <span className="text-xs text-gray-400 dark:text-slate-500">
              High-yield Malaysian Form 3 exam topics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { chId: 'sci-ch3', subject: 'science', label: 'Human Blood & Plant Transport', chNum: 3 },
              { chId: 'sci-ch5', subject: 'science', label: 'Reactivity Series of Metals', chNum: 5 },
              { chId: 'math-ch3', subject: 'math', label: 'Consumer Maths (Interest & Credit)', chNum: 3 },
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
