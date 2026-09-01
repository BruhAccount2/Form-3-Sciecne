import React, { useState } from 'react';
import { SubjectType, Chapter } from '../types';
import { getChaptersBySubject } from '../data';
import { Search, CheckCircle2, ChevronRight, ArrowLeft, Award } from 'lucide-react';
import { getChapterQuizRecord } from '../utils/storage';

interface SubjectViewProps {
  subject: SubjectType;
  onSelectChapter: (chapter: Chapter) => void;
  completedChapterIds: string[];
  onToggleCompleteChapter: (id: string) => void;
  onNavigateHome: () => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({
  subject,
  onSelectChapter,
  completedChapterIds,
  onToggleCompleteChapter,
  onNavigateHome
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');

  const chapters = getChaptersBySubject(subject);
  const themes = Array.from(new Set(chapters.map(c => c.theme)));

  const filteredChapters = chapters.filter(c => {
    const matchesQuery = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `Chapter ${c.chapterNumber}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTheme = selectedTheme === 'all' || c.theme === selectedTheme;
    return matchesQuery && matchesTheme;
  });

  const completedCount = chapters.filter(c => completedChapterIds.includes(c.id)).length;
  const progressPercent = Math.round((completedCount / chapters.length) * 100);

  return (
    <div className="flex-1 overflow-y-auto p-6 sm:p-10 leading-relaxed text-[#334155] dark:text-slate-300">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Subject Hero Header */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 block mb-1">
                KSSM Form 3 DLP Syllabus
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white">
                {subject === 'science' ? 'Form 3 Science' : 'Form 3 Mathematics'}
              </h1>
              <div className="h-1 w-16 bg-[#2563EB] rounded-full my-2.5"></div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 max-w-2xl leading-relaxed">
                {subject === 'science'
                  ? 'Complete coverage of all 10 Science chapters: Human physiology, respiration, transportation, reactivity series, thermochemistry, electricity, radioactivity, and space exploration.'
                  : 'Complete coverage of all 9 Mathematics chapters: Indices, standard form, consumer mathematics, scale drawings, trigonometry, circle theorems, plans & elevations, and straight lines.'}
              </p>
            </div>

            {/* Progress Tracker Box */}
            <div className="shrink-0 w-full sm:w-60 rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-gray-700 dark:text-slate-300">Topic Completion</span>
                <span className="text-[#2563EB] dark:text-blue-400 font-mono">{progressPercent}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">
                <div
                  className="h-full bg-[#2563EB] dark:bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="mt-2 text-[11px] text-gray-500 dark:text-slate-400">
                <span>{completedCount} of {chapters.length} chapters completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${subject === 'science' ? 'Science' : 'Mathematics'} chapters, keywords...`}
              className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-xs text-[#0F172A] shadow-2xs focus:border-[#2563EB] focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>

          {/* Theme Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedTheme('all')}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                selectedTheme === 'all'
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              All Themes
            </button>
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedTheme === theme
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredChapters.map((chapter) => {
            const isDone = completedChapterIds.includes(chapter.id);
            const quizRecord = getChapterQuizRecord(chapter.id);
            const padNum = String(chapter.chapterNumber).padStart(2, '0');
            return (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(chapter)}
                className="group relative cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-2xs hover:border-[#2563EB] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-mono font-bold text-[#2563EB] dark:bg-blue-950 dark:text-blue-300">
                        {padNum}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">
                        {chapter.theme}
                      </span>
                    </div>

                    {quizRecord?.passed ? (
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800 inline-flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Mastered ({quizRecord.score}/15)</span>
                      </span>
                    ) : quizRecord ? (
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800 inline-flex items-center gap-1 shrink-0">
                        <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>{quizRecord.score}/15 (≥10 to Pass)</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 shrink-0">
                        Test Required
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-blue-400 transition-colors">
                    Chapter {chapter.chapterNumber}: {chapter.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {chapter.summary}
                  </p>
                </div>

                {/* Sub-info tags */}
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 text-[11px]">
                    <span>{chapter.notes.length} Sections</span>
                    <span>•</span>
                    <span>{chapter.exercises.length} Exercises</span>
                  </div>

                  <span className="flex items-center gap-1 font-semibold text-[#2563EB] dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                    Revise <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

