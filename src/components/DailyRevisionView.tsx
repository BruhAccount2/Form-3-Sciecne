import React, { useState, useEffect } from 'react';
import { SubjectType, ExamQuestionItem } from '../types';
import { getDailyRevisionQuestions } from '../data/quizUtils';
import { 
  recordQuestionAttempt, 
  recordRevisionActivity, 
  getStreakData, 
  recordStreakActivity,
  addPoints
} from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  Calendar, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  ChevronRight, 
  RotateCcw,
  BookOpen,
  Check,
  Maximize2
} from 'lucide-react';
import { McqFeedback } from './McqFeedback';
import { ImageViewerModal } from './ImageViewerModal';

interface DailyRevisionViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const DailyRevisionView: React.FC<DailyRevisionViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [dailyQuestions, setDailyQuestions] = useState<ExamQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [streakCount, setStreakCount] = useState<number>(() => getStreakData().currentStreak);
  const [activeViewerSvg, setActiveViewerSvg] = useState<string | null>(null);

  // Generate a deterministic 10-question authored daily set based on today's date
  useEffect(() => {
    const questions = getDailyRevisionQuestions(new Date());
    setDailyQuestions(questions);
    setStreakCount(getStreakData().currentStreak);
  }, []);

  const currentQ = dailyQuestions[currentIndex];
  const isCurrentSubmitted = currentQ && submittedAnswers[currentIndex] !== undefined;

  useEffect(() => {
    if (submittedAnswers[currentIndex] !== undefined) {
      setSelectedOption(submittedAnswers[currentIndex]);
    } else {
      setSelectedOption(null);
    }
  }, [currentIndex, submittedAnswers]);

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !currentQ) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    setSubmittedAnswers(prev => ({ ...prev, [currentIndex]: selectedOption }));

    recordQuestionAttempt({
      chapterId: currentQ.chapterId,
      subject: currentQ.subject,
      chapterTitle: currentQ.chapterTitle,
      chapterNumber: currentQ.chapterNumber,
      topic: currentQ.topic,
      isCorrect
    });

    if (isCorrect) {
      addPoints(10, `Daily Revision correct answer (${currentQ.topic})`);
    }
  };

  const handleFinish = () => {
    setIsCompleted(true);
    const updatedStreak = recordStreakActivity();
    setStreakCount(updatedStreak.currentStreak);

    const score = calculateScore();
    addPoints(score * 10 + 30, `Completed Daily Revision Set (${score}/${dailyQuestions.length})`);

    recordRevisionActivity({
      type: 'daily_revision',
      subject: 'math',
      title: "Today's Daily Revision Set",
      subtitle: `Completed 10 questions (${Math.round((score / dailyQuestions.length) * 100)}%)`
    });
  };

  const calculateScore = () => {
    let score = 0;
    dailyQuestions.forEach((q, idx) => {
      if (submittedAnswers[idx] === q.correctIndex) score++;
    });
    return score;
  };

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
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Progress Bar & Question Counter */}
            <div className="flex items-center justify-between gap-4 text-xs font-medium text-slate-500">
              <span className="font-bold text-slate-900 dark:text-white">Question {currentIndex + 1} of {dailyQuestions.length}</span>
              <div className="flex items-center gap-1.5">
                <span className={`px-2 py-0.5 rounded-full text-2xs font-semibold ${
                  currentQ.subject === 'math' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
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

            {/* Diagram if available */}
            {currentQ.diagramSvg && (
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
                <div 
                  onClick={() => setActiveViewerSvg(currentQ.diagramSvg || null)}
                  className="max-w-md w-full bg-white p-2 rounded cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                  dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg }} 
                />
                <button
                  onClick={() => setActiveViewerSvg(currentQ.diagramSvg || null)}
                  className="mt-2 text-2xs font-semibold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  Expand Diagram
                </button>
              </div>
            )}

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;

                let classes = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300';
                if (!isCurrentSubmitted) {
                  if (isSelected) {
                    classes = 'border-blue-600 bg-blue-50/80 text-blue-950 dark:bg-blue-950/60 dark:text-blue-100 ring-2 ring-blue-500 font-semibold';
                  }
                } else {
                  if (isCorrect) {
                    classes = 'border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                  } else if (isSelected) {
                    classes = 'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/60 dark:text-rose-200 ring-1 ring-rose-500';
                  } else {
                    classes = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isCurrentSubmitted}
                    onClick={() => setSelectedOption(optIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${classes}`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono font-bold text-xs shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isCurrentSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                    {isCurrentSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Submit Button */}
            {!isCurrentSubmitted && (
              <div className="pt-2 flex justify-end">
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <span>Submit Answer</span>
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* MCQ Feedback */}
            {isCurrentSubmitted && selectedOption !== null && (
              <McqFeedback
                isCorrect={selectedOption === currentQ.correctIndex}
                selectedOptionLetter={String.fromCharCode(65 + selectedOption)}
                selectedOptionText={currentQ.options[selectedOption]}
                correctOptionLetter={String.fromCharCode(65 + currentQ.correctIndex)}
                correctOptionText={currentQ.options[currentQ.correctIndex]}
                explanation={currentQ.explanation}
                topic={currentQ.topic}
                onReviseTopic={() => onNavigateChapter(currentQ.chapterId)}
              />
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                Previous
              </button>

              {currentIndex < dailyQuestions.length - 1 ? (
                <button
                  disabled={!isCurrentSubmitted}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                >
                  Next Question
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  disabled={!isCurrentSubmitted}
                  onClick={handleFinish}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors disabled:opacity-40 flex items-center gap-1.5 shadow-xs cursor-pointer"
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
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Daily Revision Completed!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              You scored {calculateScore()} out of {dailyQuestions.length} ({Math.round((calculateScore() / dailyQuestions.length) * 100)}%). Streak updated to {streakCount} days!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setIsCompleted(false);
                setCurrentIndex(0);
                setSelectedOption(null);
                setSubmittedAnswers({});
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Practice Again
            </button>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}

      {/* Image / Diagram Viewer Modal */}
      {activeViewerSvg && (
        <ImageViewerModal
          isOpen={Boolean(activeViewerSvg)}
          onClose={() => setActiveViewerSvg(null)}
          title="Daily Revision Question Diagram"
          subtitle={currentQ?.chapterTitle || ''}
          svgContent={activeViewerSvg}
        />
      )}
    </div>
  );
};
