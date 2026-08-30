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
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  BookOpen,
  Maximize2,
  Check,
  AlertTriangle,
  Play,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ImageViewerModal } from '../ImageViewerModal';
import { McqFeedback } from '../McqFeedback';

interface ChapterEndTestProps {
  chapter: Chapter;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
  onScrollToTop?: () => void;
}

export const ChapterEndTest: React.FC<ChapterEndTestProps> = ({ 
  chapter, 
  isCompleted, 
  onToggleComplete,
  onScrollToTop
}) => {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<ChapterMCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [activeViewerSvg, setActiveViewerSvg] = useState<string | null>(null);
  const [quizRecord, setQuizRecord] = useState<ChapterQuizRecord | undefined>(undefined);

  // Load latest quiz record when chapter changes
  useEffect(() => {
    setQuizRecord(getChapterQuizRecord(chapter.id));
    setHasStarted(false);
    setIsFinished(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmittedAnswers({});
  }, [chapter.id]);

  const handleStartTest = () => {
    const qs = getChapterQuizQuestions(chapter.id);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmittedAnswers({});
    setIsFinished(false);
    setHasStarted(true);
  };

  const currentQ = questions[currentIndex];
  const isCurrentQuestionSubmitted = currentQ && submittedAnswers[currentIndex] !== undefined;

  // Sync selected option when stepping between already-answered questions
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

  const handleFinishTest = () => {
    const score = calculateScore();
    const record = saveChapterQuizScore(chapter.id, score, questions.length || 15);
    setQuizRecord(record);
    setIsFinished(true);

    // If passed (score >= 10) and chapter not marked completed yet, trigger toggle
    if (record.passed && !isCompleted && onToggleComplete) {
      onToggleComplete();
    }
  };

  const handleRetake = () => {
    const qs = getChapterQuizQuestions(chapter.id);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmittedAnswers({});
    setIsFinished(false);
    setHasStarted(true);
  };

  const score = calculateScore();
  const gradeInfo = getChapterQuizGrade(score, questions.length || 15);

  return (
    <section 
      id="chapter-end-test" 
      aria-label="Chapter End Assessment Test"
      className="mt-12 pt-8 border-t-2 border-dashed border-blue-200 dark:border-slate-800"
    >
      {/* 1. ENTRY CARD STATE: When test has not been started yet */}
      {!hasStarted && !isFinished && (
        <div className="rounded-2xl border-2 border-blue-300/80 bg-gradient-to-b from-blue-50/90 via-white to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 dark:border-blue-800/80 p-6 sm:p-8 shadow-sm transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Official Chapter Mastery Check</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Chapter {chapter.chapterNumber} Test
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Test yourself before moving on to solidify your understanding and verify syllabus mastery.
              </p>

              {/* Question difficulty breakdown badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900">
                  15 Multiple Choice Questions
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-900">
                  5 Easy
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900">
                  5 Medium
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-semibold border border-rose-200 dark:border-rose-900">
                  5 Hard
                </span>
              </div>

              <div className="text-2xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-0.5">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Passing rule:</span>
                <span>Score ≥ 10/15 (67%) is required to mark this chapter complete.</span>
              </div>
            </div>

            {/* Right Action Panel / Previous Score */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end justify-center gap-4 shrink-0">
              {quizRecord && (
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 shadow-2xs text-left w-full sm:w-auto">
                  <div className="flex items-center gap-2.5">
                    <Award className={`w-6 h-6 ${quizRecord.passed ? 'text-amber-500' : 'text-slate-400'}`} />
                    <div>
                      <div className="text-2xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                        Best Attempt
                      </div>
                      <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {quizRecord.score} / {quizRecord.total} ({quizRecord.percentage}%) • {quizRecord.grade}
                      </div>
                      <div className={`text-2xs font-semibold ${quizRecord.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                        {quizRecord.passed ? '✓ Chapter Completed' : 'Score < 10 (Retake to complete)'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                id="start-chapter-test-btn"
                onClick={handleStartTest}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Play className="w-4 h-4 fill-white transition-transform group-hover:translate-x-0.5" />
                <span>{quizRecord ? 'Retake Chapter Test' : 'Start Chapter Test'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. ACTIVE TEST STATE: When student is currently answering questions */}
      {hasStarted && !isFinished && currentQ && (
        <div className="rounded-2xl border-2 border-blue-300 dark:border-blue-900 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6 animate-fadeIn">
          
          {/* Header & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 dark:text-white text-base">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-2xs font-bold uppercase tracking-wider ${
                currentQ.difficulty === 'Easy' 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                  : currentQ.difficulty === 'Medium'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
              }`}>
                {currentQ.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-2 text-2xs text-slate-500 dark:text-slate-400">
              <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-bold text-slate-700 dark:text-slate-300">
                DSKP {currentQ.learningStandardCode}
              </span>
              <span className="hidden sm:inline">• {currentQ.topic}</span>
            </div>
          </div>

          {/* Linear Progress Bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
            {currentQ.question}
          </div>

          {/* Diagram SVG (if available) */}
          {currentQ.diagramSvg && (
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
              <div 
                onClick={() => setActiveViewerSvg(currentQ.diagramSvg || null)}
                className="max-w-md w-full bg-white p-2 rounded shadow-xs cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                dangerouslySetInnerHTML={{ __html: currentQ.diagramSvg }} 
              />
              <button
                type="button"
                onClick={() => setActiveViewerSvg(currentQ.diagramSvg || null)}
                className="mt-2 text-2xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Click to Enlarge Diagram
              </button>
            </div>
          )}

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;
              const letter = String.fromCharCode(65 + optIdx);

              let classes = 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50';
              
              if (!isCurrentQuestionSubmitted) {
                if (isSelected) {
                  classes = 'border-blue-600 bg-blue-50/80 text-blue-950 dark:bg-blue-950/60 dark:text-blue-100 ring-2 ring-blue-500 font-semibold';
                }
              } else {
                // Post-submission styling
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
                  type="button"
                  disabled={isCurrentQuestionSubmitted}
                  onClick={() => setSelectedOption(optIdx)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${classes}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-xs shrink-0 mt-0.5">
                      {letter}.
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isCurrentQuestionSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {isCurrentQuestionSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit Action (shown before submitting current question) */}
          {!isCurrentQuestionSubmitted && (
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                disabled={selectedOption === null}
                onClick={handleSubmitCurrentQuestion}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>Submit Answer</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Immediate Rich Feedback Component after submission */}
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

          {/* Stepper Navigation Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(prev => prev - 1)}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition"
            >
              Previous
            </button>

            {/* Quick jump navigation indicator dots */}
            <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-[200px] sm:max-w-none">
              {questions.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all shrink-0 ${
                    dotIdx === currentIndex 
                      ? 'w-6 bg-blue-600' 
                      : submittedAnswers[dotIdx] !== undefined 
                      ? submittedAnswers[dotIdx] === questions[dotIdx].correctIndex 
                        ? 'bg-emerald-500' 
                        : 'bg-rose-400' 
                      : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                  title={`Question ${dotIdx + 1}`}
                />
              ))}
            </div>

            {currentIndex < questions.length - 1 ? (
              <button
                type="button"
                disabled={!isCurrentQuestionSubmitted}
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1.5 shadow-xs transition cursor-pointer"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={!isCurrentQuestionSubmitted}
                onClick={handleFinishTest}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 shadow-xs transition cursor-pointer"
              >
                <span>Complete & View Final Grade</span>
                <Award className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      )}

      {/* 3. FINISHED TEST RESULTS STATE: Summary, Grading & Completion Rule */}
      {isFinished && (
        <div className="rounded-2xl border-2 border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-6 sm:p-10 text-center space-y-6 shadow-sm animate-fadeIn">
          
          <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
            gradeInfo.isComplete 
              ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300' 
              : 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <div>
            {/* Completion Pill */}
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
                    <span>Chapter Not Complete (Score &lt; 10) • Grade: {gradeInfo.grade}</span>
                  </>
                )}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-lg mx-auto leading-relaxed">
              {gradeInfo.message}
            </p>
          </div>

          {/* Difficulty breakdown summary grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto text-left">
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

          {/* Weak areas list */}
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

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={handleRetake}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Chapter Test
            </button>
            {onScrollToTop && (
              <button
                type="button"
                onClick={onScrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow-xs cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Review Chapter Notes
              </button>
            )}
          </div>
        </div>
      )}

      {/* Full Resolution Image/SVG Zoom Modal */}
      {activeViewerSvg && (
        <ImageViewerModal
          isOpen={Boolean(activeViewerSvg)}
          onClose={() => setActiveViewerSvg(null)}
          title={`Chapter ${chapter.chapterNumber} Assessment Diagram`}
          subtitle={chapter.title}
          svgContent={activeViewerSvg}
        />
      )}
    </section>
  );
};
