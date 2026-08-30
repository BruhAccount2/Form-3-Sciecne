import React, { useState, useEffect } from 'react';
import { Chapter } from '../../types';
import { getChapterQuizQuestions, ChapterMCQ } from '../../data/quizUtils';
import { 
  saveChapterQuizScore, 
  getChapterQuizRecord, 
  ChapterQuizRecord, 
  getChapterQuizGrade,
  recordQuestionAttempt
} from '../../utils/storage';
import { sanitizeContent } from '../../utils/symbolSanitizer';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  BookOpen,
  ChevronRight,
  Zap,
  Target,
  Maximize2,
  Check,
  AlertTriangle
} from 'lucide-react';
import { ImageViewerModal } from '../ImageViewerModal';
import { McqFeedback } from '../McqFeedback';

interface ChapterQuizViewProps {
  chapter: Chapter;
  onNavigateNotes?: () => void;
}

export const ChapterQuizView: React.FC<ChapterQuizViewProps> = ({ chapter, onNavigateNotes }) => {
  const [questions, setQuestions] = useState<ChapterMCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeViewerSvg, setActiveViewerSvg] = useState<string | null>(null);
  const [quizRecord, setQuizRecord] = useState<ChapterQuizRecord | undefined>(undefined);

  useEffect(() => {
    // Load fresh 15 questions (5 Easy, 5 Medium, 5 Hard) with shuffled options
    const qs = getChapterQuizQuestions(chapter.id);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmittedAnswers({});
    setIsSubmitted(false);
    setQuizRecord(getChapterQuizRecord(chapter.id));
  }, [chapter.id]);

  const currentQ = questions[currentIndex];
  const isCurrentQuestionSubmitted = currentQ && submittedAnswers[currentIndex] !== undefined;

  // When changing questions, sync selectedOption with already submitted answer if exists
  useEffect(() => {
    if (submittedAnswers[currentIndex] !== undefined) {
      setSelectedOption(submittedAnswers[currentIndex]);
    } else {
      setSelectedOption(null);
    }
  }, [currentIndex, submittedAnswers]);

  const handleSubmitCurrentQuestion = () => {
    if (selectedOption === null || !currentQ) return;
    
    const isCorrect = selectedOption === currentQ.correctIndex;
    setSubmittedAnswers(prev => ({ ...prev, [currentIndex]: selectedOption }));

    // Record attempt for weak-area tracking
    recordQuestionAttempt({
      chapterId: currentQ.chapterId,
      subject: currentQ.subject,
      chapterTitle: `Chapter ${currentQ.chapterNumber}: ${chapter.title}`,
      chapterNumber: currentQ.chapterNumber,
      topic: currentQ.topic,
      isCorrect
    });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (submittedAnswers[idx] === q.correctIndex) score++;
    });
    return score;
  };

  const handleFinishQuiz = () => {
    const score = calculateScore();
    const record = saveChapterQuizScore(chapter.id, score, questions.length);
    setQuizRecord(record);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    const qs = getChapterQuizQuestions(chapter.id);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmittedAnswers({});
    setIsSubmitted(false);
  };

  const score = calculateScore();
  const gradeInfo = getChapterQuizGrade(score, questions.length || 15);

  return (
    <div className="space-y-6">
      {/* Chapter Quiz Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-800/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Official 15-Question Chapter Mastery Assessment
            </div>
            <h2 className="text-2xl font-bold tracking-tight">
              Chapter {chapter.chapterNumber} Assessment Quiz
            </h2>
            <p className="text-blue-200/90 text-sm mt-1 max-w-xl">
              5 Easy (Knowledge) • 5 Medium (Application) • 5 Hard (Analysis & Multi-Step). Score ≥ 10/15 to complete this chapter!
            </p>
          </div>

          {quizRecord && (
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-xl shrink-0 self-start md:self-auto">
              <Award className={`w-8 h-8 ${quizRecord.passed ? 'text-amber-300' : 'text-slate-300'}`} />
              <div>
                <div className="text-2xs uppercase tracking-wider text-blue-200">Best Score</div>
                <div className="text-sm font-bold">
                  {quizRecord.score}/{quizRecord.total} ({quizRecord.percentage}%)
                </div>
                <div className={`text-2xs font-semibold ${quizRecord.passed ? 'text-emerald-300' : 'text-amber-300'}`}>
                  {quizRecord.passed ? `✓ Chapter Complete (${quizRecord.grade || 'PASS'})` : 'Needs Revision (< 10/15)'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isSubmitted ? (
        currentQ ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Top status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-bold text-sm">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-2xs font-bold uppercase tracking-wider ${
                  currentQ.difficulty === 'Easy' 
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                    : currentQ.difficulty === 'Medium'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}>
                  {currentQ.difficulty} Tier
                </span>
              </div>

              <div className="flex items-center gap-2 text-2xs">
                <span className="font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  DSKP {currentQ.learningStandardCode}
                </span>
                <span className="hidden sm:inline">• {currentQ.topic}</span>
              </div>
            </div>

            {/* Progress line */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Prompt */}
            <div className="text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </div>

            {/* Diagram if available (clickable for full zoom modal) */}
            {currentQ.diagramSvg && (
              <div className="relative p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
                <div 
                  onClick={() => setActiveViewerSvg(currentQ.diagramSvg || null)}
                  className="max-w-md w-full bg-white p-2 rounded shadow-xs cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                  dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg }} 
                />
                <button
                  onClick={() => setActiveViewerSvg(currentQ.diagramSvg || null)}
                  className="mt-2 text-2xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Click to Expand & Inspect Diagram in High Resolution
                </button>
              </div>
            )}

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;

                let classes = 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50';
                
                if (!isCurrentQuestionSubmitted) {
                  if (isSelected) {
                    classes = 'border-blue-600 bg-blue-50/70 text-blue-950 dark:bg-blue-950/60 dark:text-blue-200 ring-2 ring-blue-500 font-semibold';
                  }
                } else {
                  // After submission
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
                    disabled={isCurrentQuestionSubmitted}
                    onClick={() => setSelectedOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${classes}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono font-bold text-xs shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isCurrentQuestionSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                    {isCurrentQuestionSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Submit Button before submission */}
            {!isCurrentQuestionSubmitted && (
              <div className="pt-2 flex justify-end">
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitCurrentQuestion}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-2 shadow-xs transition cursor-pointer"
                >
                  <span>Submit Answer</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* MCQ Feedback Component after submission */}
            {isCurrentQuestionSubmitted && selectedOption !== null && (
              <McqFeedback
                isCorrect={selectedOption === currentQ.correctIndex}
                selectedOptionLetter={String.fromCharCode(65 + selectedOption)}
                selectedOptionText={currentQ.options[selectedOption]}
                correctOptionLetter={String.fromCharCode(65 + currentQ.correctIndex)}
                correctOptionText={currentQ.options[currentQ.correctIndex]}
                explanation={currentQ.explanation}
                topic={currentQ.topic}
                learningStandard={currentQ.learningStandardCode}
              />
            )}

            {/* Bottom Stepper Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {questions.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      dotIdx === currentIndex 
                        ? 'w-5 bg-blue-600' 
                        : submittedAnswers[dotIdx] !== undefined 
                        ? submittedAnswers[dotIdx] === questions[dotIdx].correctIndex ? 'bg-emerald-500' : 'bg-rose-400' 
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                    title={`Question ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {currentIndex < questions.length - 1 ? (
                <button
                  disabled={!isCurrentQuestionSubmitted}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  disabled={!isCurrentQuestionSubmitted}
                  onClick={handleFinishQuiz}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <span>Complete & View Final Grade</span>
                  <Award className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>Loading assessment quiz...</div>
        )
      ) : (
        /* Results & Grading Summary Card */
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
            gradeInfo.isComplete 
              ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300' 
              : 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <div>
            {/* Completion Banner */}
            <div className="mb-3">
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                gradeInfo.isComplete
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 border border-emerald-300'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 border border-amber-300'
              }`}>
                {gradeInfo.isComplete ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>✓ Chapter Complete • Grade: {gradeInfo.grade}</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Chapter Not Complete • Grade: {gradeInfo.grade}</span>
                  </>
                )}
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-lg mx-auto leading-relaxed">
              {gradeInfo.message}
            </p>
          </div>

          {/* Breakdown summary grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-left">
            {['Easy', 'Medium', 'Hard'].map((diff) => {
              const diffQuestions = questions.filter(q => q.difficulty === diff);
              const correctDiff = diffQuestions.filter(q => submittedAnswers[questions.indexOf(q)] === q.correctIndex).length;
              return (
                <div key={diff} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <div className="font-semibold text-slate-500">{diff} Tier</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {correctDiff} / {diffQuestions.length}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weak Areas Identified in this Quiz */}
          {questions.some((q, idx) => submittedAnswers[idx] !== q.correctIndex) && (
            <div className="max-w-xl mx-auto p-4 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 text-left space-y-2 text-xs">
              <div className="font-bold text-rose-950 dark:text-rose-200 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-rose-600" />
                Questions to Review:
              </div>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                {questions
                  .map((q, idx) => ({ q, idx }))
                  .filter(({ q, idx }) => submittedAnswers[idx] !== q.correctIndex)
                  .map(({ q, idx }) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>
                        <strong>Q{idx + 1} ({q.difficulty}):</strong> {q.topic} (DSKP {q.learningStandardCode})
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz (Fresh Shuffle)
            </button>
            {onNavigateNotes && (
              <button
                onClick={onNavigateNotes}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow-xs cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Review Chapter Notes
              </button>
            )}
          </div>
        </div>
      )}

      {/* Image / SVG Viewer Modal */}
      {activeViewerSvg && (
        <ImageViewerModal
          isOpen={Boolean(activeViewerSvg)}
          onClose={() => setActiveViewerSvg(null)}
          title={`Chapter ${chapter.chapterNumber} Assessment Diagram`}
          subtitle={chapter.title}
          svgContent={activeViewerSvg}
        />
      )}
    </div>
  );
};
