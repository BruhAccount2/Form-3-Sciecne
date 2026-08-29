import React, { useState, useEffect } from 'react';
import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { getProgressSummary, getPastPaperRecords, getRevisionHistory } from '../utils/storage';
import { 
  Award, 
  CheckCircle2, 
  Circle, 
  Flame, 
  Layers, 
  ArrowRight, 
  BookOpen, 
  Dna, 
  Calculator,
  FileText,
  Clock
} from 'lucide-react';

interface ProgressViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [summary, setSummary] = useState({ totalNotesRead: 0, totalExercisesCompleted: 0, totalChapters: 19 });
  const [pastPaperCount, setPastPaperCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  useEffect(() => {
    setSummary(getProgressSummary());
    const pp = getPastPaperRecords();
    const completedPP = Object.values(pp).filter(p => p.completed).length;
    setPastPaperCount(completedPP);
    setRecentActivities(getRevisionHistory().slice(0, 5));
  }, []);

  const overallProgress = Math.min(
    100,
    Math.round(((summary.totalNotesRead + summary.totalExercisesCompleted) / (summary.totalChapters * 2)) * 100)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Progress & Analytics</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Syllabus Mastery & Progress
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            Track your completion across all 19 KSSM Form 3 Science and Mathematics chapters.
          </p>
        </div>
      </div>

      {/* Hero Stats Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 mb-8 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border-r border-slate-100 dark:border-slate-800 pr-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Overall Syllabus Completion
            </div>
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              {overallProgress}%
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          <div className="border-r border-slate-100 dark:border-slate-800 pr-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Notes Studied
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {summary.totalNotesRead} <span className="text-sm font-normal text-slate-500">/ 19 Chapters</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Comprehensive syllabus coverage</p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Past Papers Completed
            </div>
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {pastPaperCount} <span className="text-sm font-normal text-slate-500">Papers</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">State and MRSM trials solved</p>
          </div>
        </div>
      </div>

      {/* Chapter Checklists (Math & Science) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Math Chapters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold border-b border-slate-100 dark:border-slate-800 pb-3">
            <Calculator className="w-5 h-5" />
            <span>Mathematics (9 Chapters)</span>
          </div>

          <div className="space-y-3">
            {mathChapters.map(ch => (
              <div
                key={ch.id}
                onClick={() => onNavigateChapter(ch.id)}
                className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer transition-all"
              >
                <div>
                  <span className="text-2xs font-bold text-indigo-600 dark:text-indigo-400">
                    Chapter {ch.chapterNumber}
                  </span>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                    {ch.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Science Chapters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold border-b border-slate-100 dark:border-slate-800 pb-3">
            <Dna className="w-5 h-5" />
            <span>Science (10 Chapters)</span>
          </div>

          <div className="space-y-3">
            {scienceChapters.map(ch => (
              <div
                key={ch.id}
                onClick={() => onNavigateChapter(ch.id)}
                className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer transition-all"
              >
                <div>
                  <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400">
                    Chapter {ch.chapterNumber}
                  </span>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                    {ch.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
