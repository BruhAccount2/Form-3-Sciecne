import React, { useState, useEffect } from 'react';
import { SubjectType, ExamQuestionItem } from '../types';
import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { recordQuestionAttempt, recordRevisionActivity } from '../utils/storage';
import { 
  Calendar, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  ChevronRight, 
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface DailyRevisionViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const DailyRevisionView: React.FC<DailyRevisionViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [dailyQuestions, setDailyQuestions] = useState<ExamQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [streakCount, setStreakCount] = useState(3);

  // Generate a deterministic 10-question daily set based on today's date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);

    const questions: ExamQuestionItem[] = [];

    // Extract 5 Math questions and 5 Science questions
    mathChapters.forEach((ch, chIdx) => {
      ch.exercises.forEach((ex, exIdx) => {
        if (questions.length < 5 && (chIdx + exIdx + dayOfYear) % 3 === 0) {
          questions.push({
            id: `daily-math-${ch.id}-${ex.id}`,
            subject: 'math',
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            topic: `Math Ch ${ch.chapterNumber}: ${ch.title}`,
            question: ex.question,
            options: [
              ex.answer.finalAnswer,
              'Option B (Alternative form)',
              'Option C (Reciprocal calculation)',
              'Option D (Complement value)'
            ],
            correctIndex: 0,
            explanation: ex.answer.scientificReasoning || ex.answer.fullWorking?.join(' ') || 'Standard step-by-step mathematical deduction.',
            marks: 2,
            difficulty: 'Application'
          });
        }
      });
    });

    scienceChapters.forEach((ch, chIdx) => {
      ch.exercises.forEach((ex, exIdx) => {
        if (questions.length < 10 && (chIdx + exIdx + dayOfYear) % 2 === 0) {
          questions.push({
            id: `daily-sci-${ch.id}-${ex.id}`,
            subject: 'science',
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            topic: `Science Ch ${ch.chapterNumber}: ${ch.title}`,
            question: ex.question,
            options: [
              ex.answer.finalAnswer,
              'Option B (Distractor)',
              'Option C (Secondary outcome)',
              'Option D (Initial hypothesis)'
            ],
            correctIndex: 0,
            explanation: ex.answer.scientificReasoning || 'Scientific conclusion based on KSSM Form 3 learning standards.',
            marks: 2,
            difficulty: 'Application'
          });
        }
      });
    });

    setDailyQuestions(questions.slice(0, 10));

    // Load streak
    try {
      const savedStreak = localStorage.getItem('f3_daily_streak');
      if (savedStreak) setStreakCount(parseInt(savedStreak, 10));
    } catch {
      // ignore
    }
  }, []);

  const handleSelectOption = (optIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [currentIndex]: optIndex }));
    const currentQ = dailyQuestions[currentIndex];
    if (currentQ) {
      const isCorrect = optIndex === currentQ.correctIndex;
      recordQuestionAttempt({
        chapterId: currentQ.chapterId,
        subject: currentQ.subject,
        chapterTitle: currentQ.chapterTitle,
        chapterNumber: currentQ.chapterNumber,
        topic: currentQ.topic,
        isCorrect
      });
    }
  };

  const handleFinish = () => {
    setIsCompleted(true);
    const newStreak = streakCount + 1;
    setStreakCount(newStreak);
    try {
      localStorage.setItem('f3_daily_streak', newStreak.toString());
    } catch {
      // ignore
    }
    recordRevisionActivity({
      type: 'daily_revision',
      subject: 'math',
      title: "Today's Daily Revision Set",
      subtitle: `Completed 10 questions (${Math.round((calculateScore() / dailyQuestions.length) * 100)}%)`
    });
  };

  const calculateScore = () => {
    let score = 0;
    dailyQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) score++;
    });
    return score;
  };

  const currentQ = dailyQuestions[currentIndex];
  const isAnswered = userAnswers[currentIndex] !== undefined;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Daily Revision</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Today's Revision Set
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            10 curated questions across Math & Science to build your daily study habit.
          </p>
        </div>

        {/* Streak Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/80 rounded-xl shrink-0 self-start">
          <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
          <div>
            <div className="text-xs font-bold text-amber-900 dark:text-amber-200">{streakCount} Day Streak</div>
            <div className="text-2xs text-amber-700 dark:text-amber-400">Keep it up!</div>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        currentQ ? (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
            {/* Progress Bar & Question Counter */}
            <div className="flex items-center justify-between gap-4 text-xs font-medium text-slate-500">
              <span>Question {currentIndex + 1} of {dailyQuestions.length}</span>
              <div className="flex items-center gap-1.5">
                <span className={`px-2 py-0.5 rounded-full text-2xs font-semibold ${
                  currentQ.subject === 'math' ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {currentQ.subject === 'math' ? 'Math' : 'Science'}
                </span>
                <span>{currentQ.chapterTitle}</span>
              </div>
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / dailyQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Box */}
            <div className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;

                let classes = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300';
                if (isAnswered) {
                  if (isCorrect) {
                    classes = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold';
                  } else if (isSelected) {
                    classes = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs transition-all flex items-center justify-between ${classes}`}
                  >
                    <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {isAnswered && (
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">
                  Explanation & Working:
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                Previous
              </button>

              {currentIndex < dailyQuestions.length - 1 ? (
                <button
                  disabled={!isAnswered}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors disabled:opacity-40 flex items-center gap-1.5"
                >
                  Next Question
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  disabled={!isAnswered}
                  onClick={handleFinish}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors disabled:opacity-40 flex items-center gap-1.5 shadow-sm"
                >
                  Complete Daily Set
                  <Award className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>Loading daily set...</div>
        )
      ) : (
        /* Summary Score View */
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Daily Revision Completed!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              You scored {calculateScore()} out of {dailyQuestions.length} ({Math.round((calculateScore() / dailyQuestions.length) * 100)}%).
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setIsCompleted(false);
                setCurrentIndex(0);
                setUserAnswers({});
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <RotateCcw className="w-4 h-4" />
              Practice Again
            </button>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
