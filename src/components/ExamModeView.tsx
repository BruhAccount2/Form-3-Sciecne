import React, { useState, useEffect, useRef } from 'react';
import { SubjectType, ExamQuestionItem, ExamSubmission } from '../types';
import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { saveExamSubmission, recordQuestionAttempt, recordRevisionActivity } from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  Timer, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Award, 
  BookOpen, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  Layers, 
  Dna, 
  Calculator,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ExamModeViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const ExamModeView: React.FC<ExamModeViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [subject, setSubject] = useState<'both' | SubjectType>('both');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(30);
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  // In-exam state
  const [questions, setQuestions] = useState<ExamQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const timerRef = useRef<any>(null);

  // Result state
  const [submissionResult, setSubmissionResult] = useState<ExamSubmission | null>(null);

  // Timer countdown
  useEffect(() => {
    if (isExamRunning && timeLeftSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeftSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitExam(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isExamRunning, timeLeftSeconds]);

  const handleStartExam = () => {
    const pool: ExamQuestionItem[] = [];

    if (subject === 'both' || subject === 'math') {
      mathChapters.forEach(ch => {
        ch.exercises.forEach(ex => {
          pool.push({
            id: `exam-math-${ch.id}-${ex.id}`,
            subject: 'math',
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            topic: `Math Ch ${ch.chapterNumber}: ${ch.title}`,
            question: ex.question,
            options: [
              ex.answer.finalAnswer,
              'Option B (Alternate representation)',
              'Option C (Inverse magnitude)',
              'Option D (Common distractor)'
            ],
            correctIndex: 0,
            explanation: ex.answer.scientificReasoning || ex.answer.fullWorking?.join(' ') || 'Standard step-by-step mathematical deduction.',
            marks: 2,
            difficulty: ex.difficulty
          });
        });
      });
    }

    if (subject === 'both' || subject === 'science') {
      scienceChapters.forEach(ch => {
        ch.exercises.forEach(ex => {
          pool.push({
            id: `exam-sci-${ch.id}-${ex.id}`,
            subject: 'science',
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            topic: `Science Ch ${ch.chapterNumber}: ${ch.title}`,
            question: ex.question,
            options: [
              ex.answer.finalAnswer,
              'Option B (Distractor factor)',
              'Option C (Counter hypothesis)',
              'Option D (Secondary state)'
            ],
            correctIndex: 0,
            explanation: ex.answer.scientificReasoning || 'Scientific rationale based on KSSM Form 3 Learning Standards.',
            marks: 2,
            difficulty: ex.difficulty
          });
        });
      });
    }

    const selected = [...pool].sort(() => Math.random() - 0.5).slice(0, questionCount);
    // Shuffle options
    selected.forEach(q => {
      const orig = q.options[q.correctIndex];
      const shuff = [...q.options].sort(() => Math.random() - 0.5);
      q.correctIndex = shuff.indexOf(orig);
      q.options = shuff;
    });

    setQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeLeftSeconds(timeLimitMinutes * 60);
    setStartTime(Date.now());
    setIsExamRunning(true);
    setIsSubmitted(false);
    setIsConfirmModalOpen(false);

    recordRevisionActivity({
      type: 'exam',
      subject: subject === 'both' ? 'math' : subject,
      title: `Form 3 Timed Exam Simulator (${subject.toUpperCase()})`,
      subtitle: `${questionCount} Questions • ${timeLimitMinutes} Mins`
    });
  };

  const handleSelectOption = (optIndex: number) => {
    const q = questions[currentIndex];
    if (!q) return;
    setUserAnswers(prev => ({ ...prev, [q.id]: optIndex }));
  };

  const handleToggleFlag = () => {
    const q = questions[currentIndex];
    if (!q) return;
    setFlaggedQuestions(prev => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  const handleSubmitExam = (auto = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsExamRunning(false);
    setIsConfirmModalOpen(false);

    let score = 0;
    const weakChaptersMap = new Map<string, { count: number; title: string; subject: SubjectType; number: number }>();
    const weakTopics: string[] = [];

    const answersReport = questions.map(q => {
      const selected = userAnswers[q.id] !== undefined ? userAnswers[q.id] : null;
      const isCorrect = selected === q.correctIndex;
      if (isCorrect) score++;

      recordQuestionAttempt({
        chapterId: q.chapterId,
        subject: q.subject,
        chapterTitle: q.chapterTitle,
        chapterNumber: q.chapterNumber,
        topic: q.topic,
        isCorrect
      });

      if (!isCorrect) {
        if (!weakTopics.includes(q.topic)) weakTopics.push(q.topic);
        const existing = weakChaptersMap.get(q.chapterId) || { count: 0, title: q.chapterTitle, subject: q.subject, number: q.chapterNumber };
        existing.count++;
        weakChaptersMap.set(q.chapterId, existing);
      }

      return {
        questionId: q.id,
        selectedOptionIndex: selected,
        isCorrect
      };
    });

    const percentage = Math.round((score / questions.length) * 100);
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);

    const submission: ExamSubmission = {
      id: `sub_${Date.now()}`,
      timestamp: Date.now(),
      subject,
      totalQuestions: questions.length,
      score,
      percentage,
      timeSpentSeconds: timeSpent,
      timeLimitSeconds: timeLimitMinutes * 60,
      answers: answersReport,
      weakChapterIds: Array.from(weakChaptersMap.keys()),
      weakTopics
    };

    saveExamSubmission(submission);
    setSubmissionResult(submission);
    setIsSubmitted(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 85) return { grade: 'A+', label: 'Distinction / Cemerlang Tertinggi', color: 'text-emerald-600 dark:text-emerald-400' };
    if (percentage >= 70) return { grade: 'A', label: 'Cemerlang', color: 'text-blue-600 dark:text-blue-400' };
    if (percentage >= 60) return { grade: 'B', label: 'Kepujian', color: 'text-indigo-600 dark:text-indigo-400' };
    if (percentage >= 50) return { grade: 'C', label: 'Memuaskan', color: 'text-amber-600 dark:text-amber-400' };
    if (percentage >= 40) return { grade: 'D', label: 'Mencapai Tahap Minimum', color: 'text-orange-600 dark:text-orange-400' };
    return { grade: 'E', label: 'Belum Mencapai Tahap Minimum', color: 'text-rose-600 dark:text-rose-400' };
  };

  const currentQ = questions[currentIndex];
  const unansweredCount = questions.filter(q => userAnswers[q.id] === undefined || userAnswers[q.id] === null).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Exam Mode</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <Timer className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Form 3 Timed Exam Simulator
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            Realistic examination simulator with countdown timer, question palette, and diagnostic weak area analysis.
          </p>
        </div>

        {isExamRunning && (
          <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-mono font-bold text-lg shadow-xs ${
            timeLeftSeconds < 300 
              ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse dark:bg-rose-950/60 dark:border-rose-800 dark:text-rose-300' 
              : 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-slate-900 dark:border-slate-700 dark:text-blue-300'
          }`}>
            <Timer className="w-5 h-5" />
            {formatTime(timeLeftSeconds)}
          </div>
        )}
      </div>

      {!isExamRunning && !isSubmitted ? (
        /* Setup Screen */
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs space-y-6 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Set Up Your Exam Simulation
          </h2>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Select Examination Subject:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'both', label: 'Science & Mathematics', icon: Layers },
                { id: 'math', label: 'Mathematics Only', icon: Calculator },
                { id: 'science', label: 'Science Only', icon: Dna }
              ].map(item => {
                const Icon = item.icon;
                const isSelected = subject === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSubject(item.id as any)}
                    className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Question Count:
              </label>
              <div className="flex gap-3">
                {[10, 20, 30, 40].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => setQuestionCount(cnt)}
                    className={`flex-1 py-2 rounded-lg border text-xs font-semibold ${
                      questionCount === cnt
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {cnt} Qs
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Time Limit:
              </label>
              <div className="flex gap-3">
                {[15, 30, 45, 60].map(mins => (
                  <button
                    key={mins}
                    onClick={() => setTimeLimitMinutes(mins)}
                    className={`flex-1 py-2 rounded-lg border text-xs font-semibold ${
                      timeLimitMinutes === mins
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {mins} mins
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
            <div className="font-semibold text-slate-900 dark:text-slate-200">
              Exam Rules & Conditions:
            </div>
            <div>• The countdown begins immediately once you click "Start Exam".</div>
            <div>• Answers are locked upon final submission or timer expiration.</div>
            <div>• You will receive a diagnostic report pinpointing weak syllabus chapters.</div>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-xs transition-colors"
          >
            Start Exam Simulation Now
          </button>
        </div>
      ) : isExamRunning ? (
        /* In-Exam Interface */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Question Arena (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {currentQ && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      {currentIndex + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {currentQ.chapterTitle}
                    </span>
                  </div>

                  <button
                    onClick={handleToggleFlag}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      flaggedQuestions[currentQ.id]
                        ? 'bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-950/60 dark:border-amber-700 dark:text-amber-300'
                        : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentQ.id] ? 'fill-amber-500 text-amber-500' : ''}`} />
                    {flaggedQuestions[currentQ.id] ? 'Flagged for Review' : 'Flag Question'}
                  </button>
                </div>

                {/* Question */}
                <div className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {sanitizeContent(currentQ.question)}
                </div>

                {/* Radio Options */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = userAnswers[currentQ.id] === optIdx;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full text-left p-4 rounded-xl border text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/50 font-semibold text-blue-900 dark:text-blue-100 shadow-xs'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-2xs font-bold border ${
                            isSelected ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300 text-slate-500'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{sanitizeContent(opt)}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => prev - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => prev + 1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsConfirmModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                    >
                      Submit Exam
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Palette Column */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Question Palette
              </h3>

              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== null;
                  const isFlagged = flaggedQuestions[q.id];

                  let btnColor = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                  if (isAnswered) {
                    btnColor = 'bg-blue-600 text-white border-blue-600 font-bold';
                  }
                  if (isFlagged) {
                    btnColor = 'bg-amber-500 text-white border-amber-500 font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-full aspect-square rounded-lg text-xs font-medium border flex items-center justify-center transition-all ${btnColor} ${
                        isCurrent ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                      }`}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-amber-200 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-2xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-xs bg-blue-600" />
                  <span>Answered ({questions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== null).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-xs bg-amber-500" />
                  <span>Flagged ({questions.filter(q => flaggedQuestions[q.id]).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-xs bg-slate-200 dark:bg-slate-800" />
                  <span>Unanswered ({unansweredCount})</span>
                </div>
              </div>

              <button
                onClick={() => setIsConfirmModalOpen(true)}
                className="w-full mt-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
              >
                Submit Examination
              </button>
            </div>
          </div>
        </div>
      ) : isSubmitted && submissionResult ? (
        /* Post-Exam Diagnostics & Review */
        <div className="space-y-8">
          {/* Result Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Examination Result Overview
                </div>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    {submissionResult.score} / {submissionResult.totalQuestions}
                  </h2>
                  <span className={`text-2xl font-bold ${getGrade(submissionResult.percentage).color}`}>
                    ({submissionResult.percentage}%) • Grade {getGrade(submissionResult.percentage).grade}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {getGrade(submissionResult.percentage).label} • Time spent: {Math.floor(submissionResult.timeSpentSeconds / 60)}m {submissionResult.timeSpentSeconds % 60}s
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsExamRunning(false);
                  }}
                  className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Take Another Exam
                </button>
                <button
                  onClick={onNavigateHome}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>

          {/* Diagnostic Weak Chapters & Recommendations */}
          {submissionResult.weakChapterIds.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-rose-200 dark:border-rose-900/60 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base mb-2">
                <AlertCircle className="w-5 h-5" />
                Targeted Weak Areas Identified
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                Based on your incorrect answers, we recommend reviewing these specific chapters immediately:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {submissionResult.weakChapterIds.map(chId => {
                  const chObj = mathChapters.find(c => c.id === chId) || scienceChapters.find(c => c.id === chId);
                  if (!chObj) return null;

                  return (
                    <div key={chId} className="p-4 bg-rose-50/50 dark:bg-rose-950/30 rounded-xl border border-rose-100 dark:border-rose-900/40 flex flex-col justify-between">
                      <div>
                        <span className="text-2xs font-semibold text-rose-700 dark:text-rose-400">
                          {chObj.subject === 'math' ? 'Math' : 'Science'} Chapter {chObj.chapterNumber}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                          {chObj.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => onNavigateChapter(chId)}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Revise Notes & Exercises
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Full Question-by-Question Review */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Comprehensive Question Review & Step-by-Step Solutions
            </h3>

            <div className="space-y-6">
              {questions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div 
                    key={q.id}
                    className={`p-5 rounded-xl border text-xs space-y-3 ${
                      isCorrect 
                        ? 'border-emerald-200/80 bg-emerald-50/30 dark:bg-emerald-950/20 dark:border-emerald-900/40' 
                        : 'border-rose-200/80 bg-rose-50/30 dark:bg-rose-950/20 dark:border-rose-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-slate-600 dark:text-slate-400">
                          {q.chapterTitle}
                        </span>
                      </div>
                      <span className={`font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        {isCorrect ? 'Correct (+2 Marks)' : 'Incorrect (0 Marks)'}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {sanitizeContent(q.question)}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userChoice === optIdx;
                        const isThisCorrect = optIdx === q.correctIndex;

                        let optClasses = 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
                        if (isThisCorrect) {
                          optClasses = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-bold';
                        } else if (isThisSelected) {
                          optClasses = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-200';
                        }

                        return (
                          <div key={optIdx} className={`p-2.5 rounded-lg border text-2xs flex items-center justify-between ${optClasses}`}>
                            <span>{String.fromCharCode(65 + optIdx)}. {sanitizeContent(opt)}</span>
                            {isThisCorrect && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-2 text-2xs bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-0.5">
                        Solution & Explanation:
                      </span>
                      {sanitizeContent(q.explanation)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {/* Confirmation Modal before Submit */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Ready to Submit Your Exam?
            </h3>
            {unansweredCount > 0 ? (
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-800/80 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>You have <strong>{unansweredCount} unanswered questions</strong>. Are you sure you want to finalize submission?</span>
              </div>
            ) : (
              <p className="text-xs text-slate-600 dark:text-slate-400">
                You have answered all {questions.length} questions. Once submitted, answers cannot be modified.
              </p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Return to Questions
              </button>
              <button
                onClick={() => handleSubmitExam(false)}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold"
              >
                Confirm Submission
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
