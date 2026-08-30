import React, { useState, useEffect } from 'react';
import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { 
  getProgressSummary, 
  getPastPaperRecords, 
  getRevisionHistory,
  getStreakData,
  getUserPointsData,
  getUserRank,
  getChapterQuizRecords,
  StreakData,
  UserPointsData,
  ChapterQuizRecord
} from '../utils/storage';
import { 
  Award, 
  CheckCircle2, 
  Flame, 
  Layers, 
  ArrowRight, 
  BookOpen, 
  Dna, 
  Calculator,
  FileText,
  Clock,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  Trophy
} from 'lucide-react';

interface ProgressViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [summary, setSummary] = useState({ totalNotesRead: 0, totalExercisesCompleted: 0, totalChapters: 19 });
  const [pastPaperCount, setPastPaperCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [streak, setStreak] = useState<StreakData>({ currentStreak: 0, longestStreak: 0, lastActiveDateStr: '', totalDaysActive: 0, activityDates: [] });
  const [pointsData, setPointsData] = useState<UserPointsData>({ totalPoints: 0, history: [] });
  const [quizScores, setQuizScores] = useState<Record<string, ChapterQuizRecord>>({});

  useEffect(() => {
    setSummary(getProgressSummary());
    const pp = getPastPaperRecords();
    const completedPP = Object.values(pp).filter(p => p.completed).length;
    setPastPaperCount(completedPP);
    setRecentActivities(getRevisionHistory().slice(0, 5));
    setStreak(getStreakData());
    setPointsData(getUserPointsData());
    setQuizScores(getChapterQuizRecords());
  }, []);

  const overallProgress = Math.min(
    100,
    Math.round(((summary.totalNotesRead + summary.totalExercisesCompleted) / (summary.totalChapters * 2)) * 100)
  );

  const masteredChaptersCount = Object.values(quizScores).filter(q => q.passed).length;
  const rankInfo = getUserRank(pointsData.totalPoints);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Progress & Analytics</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Syllabus Mastery & Personal Analytics
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            Track your revision points, study streaks, and chapter assessment mastery across all 19 KSSM Form 3 chapters.
          </p>
        </div>
      </div>

      {/* Gamified Stat Banners: Points, Streak, Mastery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Points & Level Card */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xs border border-blue-800 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-200">Scholar Rank</span>
              <span className="text-2xl">{rankInfo.current.badge}</span>
            </div>
            <div className="text-2xl font-extrabold mt-2">
              {rankInfo.current.title}
            </div>
            <p className="text-xs text-blue-200/90 mt-1">{rankInfo.current.description}</p>
          </div>
          <div className="mt-6 pt-4 border-t border-blue-800/60 flex items-center justify-between text-xs">
            <div>
              <span className="text-blue-300">Total Points:</span>
              <span className="font-bold ml-1.5 text-white">{pointsData.totalPoints} XP</span>
            </div>
            <div className="text-amber-300 font-semibold">
              {rankInfo.next ? `${rankInfo.next.minPoints - pointsData.totalPoints} XP to ${rankInfo.next.title}` : 'Max Tier Reached!'}
            </div>
          </div>
        </div>

        {/* Study Streak Card */}
        <div className="bg-gradient-to-br from-amber-950 to-orange-950 text-white rounded-2xl p-6 shadow-xs border border-amber-900 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-200">Daily Study Streak</span>
              <Flame className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-4xl font-extrabold mt-2 flex items-baseline gap-2">
              {streak.currentStreak} <span className="text-lg font-normal text-amber-200">Days</span>
            </div>
            <p className="text-xs text-amber-200/90 mt-1">
              Active Streak: <strong>{streak.totalDaysActive} Total Study Days Recorded</strong>
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-amber-900/60 flex items-center justify-between text-xs text-amber-200">
            <span>Longest Streak: <strong>{streak.longestStreak} Days</strong></span>
            <span>{streak.lastActiveDateStr ? `Active: ${streak.lastActiveDateStr}` : 'Study today to start!'}</span>
          </div>
        </div>

        {/* Chapter Mastery Card */}
        <div className="bg-gradient-to-br from-emerald-950 to-teal-950 text-white rounded-2xl p-6 shadow-xs border border-emerald-900 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">15-Q Chapter Masteries</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-4xl font-extrabold mt-2 flex items-baseline gap-2">
              {masteredChaptersCount} <span className="text-lg font-normal text-emerald-200">/ 19 Mastered</span>
            </div>
            <p className="text-xs text-emerald-200/90 mt-1">
              Scored ≥ 60% (9/15) in chapter assessment quizzes
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-200">
            <span>Overall Completion: <strong>{overallProgress}%</strong></span>
            <span>Past Papers: <strong>{pastPaperCount}</strong></span>
          </div>
        </div>
      </div>

      {/* Chapter Checklists with Chapter-End Quiz Mastery Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Math Chapters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold">
              <Calculator className="w-5 h-5" />
              <span>Mathematics Chapters (9)</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">15-Q Quiz Status</span>
          </div>

          <div className="space-y-2.5">
            {mathChapters.map(ch => {
              const quizRecord = quizScores[ch.id];
              return (
                <div
                  key={ch.id}
                  onClick={() => onNavigateChapter(ch.id)}
                  className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-blue-400 dark:hover:border-blue-700 cursor-pointer transition-all"
                >
                  <div>
                    <span className="text-2xs font-bold text-indigo-600 dark:text-indigo-400">
                      Chapter {ch.chapterNumber}
                    </span>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                      {ch.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {quizRecord ? (
                      <span className={`px-2.5 py-1 rounded-lg text-2xs font-bold ${
                        quizRecord.passed 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {quizRecord.score}/{quizRecord.total} ({quizRecord.percentage}%) {quizRecord.passed ? '✓' : ''}
                      </span>
                    ) : (
                      <span className="text-2xs text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-2 py-0.5 rounded">
                        Not Attempted
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Science Chapters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
              <Dna className="w-5 h-5" />
              <span>Science Chapters (10)</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">15-Q Quiz Status</span>
          </div>

          <div className="space-y-2.5">
            {scienceChapters.map(ch => {
              const quizRecord = quizScores[ch.id];
              return (
                <div
                  key={ch.id}
                  onClick={() => onNavigateChapter(ch.id)}
                  className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-blue-400 dark:hover:border-blue-700 cursor-pointer transition-all"
                >
                  <div>
                    <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400">
                      Chapter {ch.chapterNumber}
                    </span>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                      {ch.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {quizRecord ? (
                      <span className={`px-2.5 py-1 rounded-lg text-2xs font-bold ${
                        quizRecord.passed 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {quizRecord.score}/{quizRecord.total} ({quizRecord.percentage}%) {quizRecord.passed ? '✓' : ''}
                      </span>
                    ) : (
                      <span className="text-2xs text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-2 py-0.5 rounded">
                        Not Attempted
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

