import React, { useState, useMemo } from 'react';
import { SubjectType, PastPaper, PastPaperExamType } from '../types';
import { pastPapersList } from '../data/pastPapers';
import { generatePredictedPracticeSet, PredictedQuestionItem } from '../data/predictedQuestionsEngine';
import { 
  recordQuestionAttempt, 
  recordRevisionActivity, 
  recordStreakActivity,
  addPoints,
  getPastPaperRecords,
  recordPastPaperScore,
  togglePastPaperCompleted
} from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  FileText, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  RotateCcw, 
  Award, 
  Check, 
  AlertCircle, 
  Filter, 
  Search, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Layers,
  Dna,
  Calculator,
  ExternalLink
} from 'lucide-react';

interface TestYourselfViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
  onNavigateMarkingScheme?: () => void;
}

type QuestionSource = 'past_papers' | 'predicted';

export const TestYourselfView: React.FC<TestYourselfViewProps> = ({
  onNavigateChapter,
  onNavigateHome,
  onNavigateMarkingScheme
}) => {
  // Source & Subject Selection
  const [source, setSource] = useState<QuestionSource>('predicted');
  const [subject, setSubject] = useState<'both' | SubjectType>('both');
  const [predictedCount, setPredictedCount] = useState<number>(40);

  // Past Papers Filter state
  const [paperSearch, setPaperSearch] = useState<string>('');
  const [selectedPaperExamType, setSelectedPaperExamType] = useState<'all' | PastPaperExamType>('all');
  const [selectedPaperYear, setSelectedPaperYear] = useState<string>('all');
  const [selectedPaper, setSelectedPaper] = useState<PastPaper | null>(null);

  // Active Test Session State
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);
  const [currentQuestions, setCurrentQuestions] = useState<PredictedQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // User answers & submission state per question
  const [userSelectedOption, setUserSelectedOption] = useState<Record<string, number>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [showGuidance, setShowGuidance] = useState<Record<string, boolean>>({});

  // Past Paper In-Paper state
  const [paperAnswers, setPaperAnswers] = useState<Record<number, number>>({});
  const [paperSubmittedQuestions, setPaperSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [paperShowGuidance, setPaperShowGuidance] = useState<Record<number, boolean>>({});
  const [paperViewTab, setPaperViewTab] = useState<'questions' | 'rubrics'>('questions');

  const pastPaperRecords = useMemo(() => getPastPaperRecords(), [selectedPaper]);

  // Handle subject change and adjust predicted question counts
  const handleSubjectChange = (newSubject: 'both' | SubjectType) => {
    setSubject(newSubject);
    if (newSubject === 'both') {
      setPredictedCount(40);
    } else {
      setPredictedCount(20);
    }
  };

  // Start Predicted Questions Practice
  const handleStartPredictedTest = () => {
    const questions = generatePredictedPracticeSet(subject, predictedCount);
    setCurrentQuestions(questions);
    setCurrentIndex(0);
    setUserSelectedOption({});
    setSubmittedQuestions({});
    setShowGuidance({});
    setIsTestActive(true);
    setIsTestFinished(false);

    recordRevisionActivity({
      type: 'random_practice',
      subject: subject === 'both' ? 'science' : subject,
      title: `Test Yourself: Predicted Questions (${subject.toUpperCase()})`,
      subtitle: `${questions.length} Questions • Full Syllabus Practice`
    });
  };

  // Submit Answer for Predicted MCQ
  const handleSubmitQuestionAnswer = (qId: string) => {
    const q = currentQuestions[currentIndex];
    if (!q || userSelectedOption[q.id] === undefined) return;

    setSubmittedQuestions(prev => ({ ...prev, [q.id]: true }));
    const selectedIdx = userSelectedOption[q.id];
    const isCorrect = selectedIdx === q.correctIndex;

    recordQuestionAttempt({
      chapterId: q.chapterId,
      subject: q.subject,
      chapterTitle: q.chapterTitle,
      chapterNumber: q.chapterNumber,
      topic: q.topic,
      isCorrect
    });

    if (isCorrect) {
      addPoints(10, `Correct answer in Test Yourself: ${q.chapterTitle}`);
    }
    recordStreakActivity();
  };

  // Finish Predicted Test & Compute Results
  const handleFinishTest = () => {
    setIsTestFinished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Result Metrics
  const testResults = useMemo(() => {
    if (!currentQuestions.length) return null;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    const weakChapterMap: Record<string, { title: string; count: number; subject: SubjectType }> = {};

    currentQuestions.forEach(q => {
      const isSub = submittedQuestions[q.id];
      if (!isSub) {
        unattemptedCount++;
      } else {
        const isCorr = userSelectedOption[q.id] === q.correctIndex;
        if (isCorr) {
          correctCount++;
        } else {
          incorrectCount++;
          if (!weakChapterMap[q.chapterId]) {
            weakChapterMap[q.chapterId] = {
              title: q.chapterTitle,
              count: 0,
              subject: q.subject
            };
          }
          weakChapterMap[q.chapterId].count++;
        }
      }
    });

    const total = currentQuestions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    return {
      total,
      correctCount,
      incorrectCount,
      unattemptedCount,
      percentage,
      weakChapters: Object.entries(weakChapterMap).map(([id, info]) => ({ id, ...info }))
    };
  }, [currentQuestions, submittedQuestions, userSelectedOption]);

  // Filtered Past Papers
  const filteredPapers = useMemo(() => {
    return pastPapersList.filter(paper => {
      if (subject !== 'both' && paper.subject !== subject) return false;
      if (selectedPaperExamType !== 'all' && paper.examType !== selectedPaperExamType) return false;
      if (selectedPaperYear !== 'all' && paper.year.toString() !== selectedPaperYear) return false;
      if (paperSearch.trim()) {
        const q = paperSearch.toLowerCase();
        return (
          paper.title.toLowerCase().includes(q) ||
          paper.source.toLowerCase().includes(q) ||
          paper.paperSet.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [subject, selectedPaperExamType, selectedPaperYear, paperSearch]);

  const handleOpenPaper = (paper: PastPaper) => {
    setSelectedPaper(paper);
    setPaperAnswers({});
    setPaperSubmittedQuestions({});
    setPaperShowGuidance({});
    setPaperViewTab('questions');

    recordRevisionActivity({
      type: 'past_paper',
      subject: paper.subject,
      title: paper.title,
      subtitle: `${paper.source} • ${paper.paperSet}`,
      targetId: paper.id
    });
  };

  const handleTogglePaperComplete = (paperId: string) => {
    togglePastPaperCompleted(paperId);
  };

  const handlePaperSubmitMcq = (qNum: number, correctOptionText: string, options: string[], chapterId: string, topic: string) => {
    const selectedIdx = paperAnswers[qNum];
    if (selectedIdx === undefined) return;

    setPaperSubmittedQuestions(prev => ({ ...prev, [qNum]: true }));
    const selectedText = options[selectedIdx];
    const isCorrect = selectedText === correctOptionText;

    if (selectedPaper) {
      recordQuestionAttempt({
        chapterId: chapterId || selectedPaper.chaptersTested[0] || 'general',
        subject: selectedPaper.subject,
        chapterTitle: topic || selectedPaper.title,
        chapterNumber: 1,
        topic: topic,
        isCorrect
      });
      if (isCorrect) {
        addPoints(10, `Correct answer in Past Paper: ${selectedPaper.title}`);
      }
      recordStreakActivity();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Breadcrumb / Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <Sparkles className="w-3.5 h-3.5" />
              Practice & Master
            </span>
            <span className="text-xs text-slate-500">KSSM Form 3 Curriculum</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Test Yourself
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Practise authentic past papers and AI-predicted revision questions to identify weak topics and master answering techniques.
          </p>
        </div>

        {onNavigateMarkingScheme && (
          <button
            onClick={onNavigateMarkingScheme}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
          >
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>View Marking Schemes</span>
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. ACTIVE PREDICTED TEST SESSION (In-Progress) */}
      {/* ========================================================================= */}
      {isTestActive && !isTestFinished && currentQuestions.length > 0 && (
        <div className="space-y-6">
          {/* Top Bar: Progress & Exit */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to exit? Your current test progress will be lost.')) {
                    setIsTestActive(false);
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Exit Test
              </button>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                Question {currentIndex + 1} of {currentQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-32 sm:w-48 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
                />
              </div>
              <button
                onClick={handleFinishTest}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
              >
                Finish & View Results
              </button>
            </div>
          </div>

          {/* Active Question Box */}
          {(() => {
            const q = currentQuestions[currentIndex];
            if (!q) return null;
            const isSubmitted = !!submittedQuestions[q.id];
            const selectedOptIndex = userSelectedOption[q.id];
            const isCorrect = isSubmitted && selectedOptIndex === q.correctIndex;
            const guidanceOpen = !!showGuidance[q.id];

            return (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
                {/* Question Metadata Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Q{currentIndex + 1}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase ${
                      q.subject === 'math' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' 
                        : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    }`}>
                      {q.subject === 'math' ? 'Mathematics' : 'Science'}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      Chapter {q.chapterNumber}: {q.topic}
                    </span>
                    {q.learningStandardCode && (
                      <span className="px-2 py-0.5 rounded text-2xs font-mono bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        LS {q.learningStandardCode}
                      </span>
                    )}
                  </div>
                  <span className="text-2xs font-semibold px-2 py-1 rounded bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    AI-Generated Practice
                  </span>
                </div>

                {/* Question Text */}
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                  {sanitizeContent(q.question)}
                </div>

                {/* How to Approach / Answering Guidance (Collapsible before answer) */}
                <div className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 overflow-hidden">
                  <button
                    onClick={() => setShowGuidance(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className="w-full px-4 py-3 flex items-center justify-between text-left text-xs font-bold text-blue-800 dark:text-blue-300 hover:bg-blue-100/50 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      How to Approach / Ways to Answer (Guidance)
                    </span>
                    {guidanceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {guidanceOpen && (
                    <div className="px-4 pb-4 pt-1 border-t border-blue-100 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-200 space-y-1.5">
                      <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Recommended Method Strategy:</p>
                      {q.howToApproach.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="font-bold text-blue-600 shrink-0">•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {q.options.map((optText, optIdx) => {
                    const letter = String.fromCharCode(65 + optIdx);
                    const isSelected = selectedOptIndex === optIdx;
                    const isCorrectOpt = optIdx === q.correctIndex;

                    let btnStyles = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-400";
                    
                    if (isSubmitted) {
                      if (isCorrectOpt) {
                        btnStyles = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500";
                      } else if (isSelected && !isCorrectOpt) {
                        btnStyles = "border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 font-semibold ring-1 ring-rose-500";
                      } else {
                        btnStyles = "border-slate-200 dark:border-slate-800 opacity-60 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400";
                      }
                    } else if (isSelected) {
                      btnStyles = "border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100 ring-2 ring-blue-600 font-semibold";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => setUserSelectedOption(prev => ({ ...prev, [q.id]: optIdx }))}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${btnStyles}`}
                      >
                        <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                          isSubmitted && isCorrectOpt
                            ? 'bg-emerald-600 text-white'
                            : isSubmitted && isSelected && !isCorrectOpt
                            ? 'bg-rose-600 text-white'
                            : isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}>
                          {letter}
                        </span>
                        <div className="flex-1 pt-0.5 text-sm sm:text-base leading-snug">
                          {sanitizeContent(optText)}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Submit / Feedback Area */}
                {!isSubmitted ? (
                  <div className="pt-2 flex justify-end">
                    <button
                      disabled={selectedOptIndex === undefined}
                      onClick={() => handleSubmitQuestionAnswer(q.id)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-colors shadow-xs"
                    >
                      Submit Answer
                    </button>
                  </div>
                ) : (
                  <div className={`p-5 rounded-xl border space-y-3 ${
                    isCorrect 
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800' 
                      : 'bg-rose-50/80 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-base">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span>✓ Correct!</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-base">
                          <XCircle className="w-5 h-5 text-rose-600" />
                          <span>✗ Incorrect</span>
                        </div>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm space-y-2">
                      {!isCorrect && (
                        <div className="text-rose-900 dark:text-rose-200">
                          <span className="font-bold">Your answer: </span>
                          <span>{String.fromCharCode(65 + (selectedOptIndex ?? 0))}. {sanitizeContent(q.options[selectedOptIndex ?? 0] || '')}</span>
                        </div>
                      )}

                      <div className="text-emerald-900 dark:text-emerald-200">
                        <span className="font-bold">Correct answer: </span>
                        <span>{String.fromCharCode(65 + q.correctIndex)}. {sanitizeContent(q.options[q.correctIndex])}</span>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200">
                        <span className="font-bold block mb-1">Explanation & Reasoning:</span>
                        <p className="leading-relaxed">{sanitizeContent(q.explanation)}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {currentIndex < currentQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => prev + 1)}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
                    >
                      Next Question
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleFinishTest}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs"
                    >
                      Finish Test
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Question Grid Navigator */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs">
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
              Question Navigator ({submittedQuestions && Object.keys(submittedQuestions).length}/{currentQuestions.length} answered)
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-2">
              {currentQuestions.map((q, idx) => {
                const isSub = submittedQuestions[q.id];
                const isCorr = isSub && userSelectedOption[q.id] === q.correctIndex;
                const isCurr = idx === currentIndex;

                let tileBg = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                if (isSub) {
                  tileBg = isCorr 
                    ? 'bg-emerald-600 text-white font-bold' 
                    : 'bg-rose-600 text-white font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${tileBg} ${
                      isCurr ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900 font-extrabold' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. TEST FINISHED RESULTS VIEW */}
      {/* ========================================================================= */}
      {isTestActive && isTestFinished && testResults && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Results Scorecard */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs text-center">
            <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-3">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Test Yourself Complete
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Detailed performance analysis across attempted topics
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto my-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-2xs font-semibold text-slate-500 uppercase">Score</div>
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
                  {testResults.correctCount} / {testResults.total}
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-2xs font-semibold text-slate-500 uppercase">Percentage</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {testResults.percentage}%
                </div>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="text-2xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase">Correct</div>
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                  {testResults.correctCount}
                </div>
              </div>
              <div className="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
                <div className="text-2xs font-semibold text-rose-800 dark:text-rose-400 uppercase">Incorrect</div>
                <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">
                  {testResults.incorrectCount}
                </div>
              </div>
            </div>

            {/* Topics to Review / Weak Areas Section */}
            {testResults.weakChapters.length > 0 && (
              <div className="max-w-2xl mx-auto text-left bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 p-5 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Recommended Topics to Review:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-950 dark:text-amber-200">
                  {testResults.weakChapters.map(w => (
                    <li key={w.id} className="flex items-center justify-between py-1 border-b border-amber-200/60 dark:border-amber-800/60 last:border-0">
                      <span className="font-semibold">• {w.title}</span>
                      <span className="px-2 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900 text-amber-900 dark:text-amber-200 font-bold">
                        {w.count} mistake{w.count > 1 ? 's' : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleStartPredictedTest}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Retake New Practice Set
              </button>
              <button
                onClick={() => setIsTestActive(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-colors"
              >
                Back to Test Yourself Menu
              </button>
            </div>
          </div>

          {/* Full Question Answers & Explanations Review */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Full Answers & Explanations Review
            </h3>
            
            <div className="space-y-4">
              {currentQuestions.map((q, idx) => {
                const userAnsIdx = userSelectedOption[q.id];
                const isCorr = userAnsIdx === q.correctIndex;
                const wasAttempted = userAnsIdx !== undefined;

                return (
                  <div 
                    key={q.id}
                    className={`bg-white dark:bg-slate-900 rounded-xl border p-5 shadow-xs space-y-3 ${
                      isCorr 
                        ? 'border-emerald-200 dark:border-emerald-900/60' 
                        : 'border-rose-200 dark:border-rose-900/60'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          isCorr 
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        }`}>
                          Q{idx + 1}: {isCorr ? '✓ Correct' : wasAttempted ? '✗ Incorrect' : 'Unattempted'}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {q.chapterTitle}
                        </span>
                      </div>
                      <button
                        onClick={() => onNavigateChapter(q.chapterId)}
                        className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      >
                        Review Notes →
                      </button>
                    </div>

                    <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {sanitizeContent(q.question)}
                    </div>

                    {/* Choices summary */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, oIdx) => {
                        const isThisCorrect = oIdx === q.correctIndex;
                        const isThisUser = oIdx === userAnsIdx;
                        let borderStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950';

                        if (isThisCorrect) {
                          borderStyle = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isThisUser) {
                          borderStyle = 'border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 font-bold';
                        }

                        return (
                          <div key={oIdx} className={`p-2.5 rounded-lg border flex items-center gap-2 ${borderStyle}`}>
                            <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                            <span>{sanitizeContent(opt)}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg text-xs text-slate-700 dark:text-slate-300 space-y-1.5 border border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-blue-700 dark:text-blue-400 block">
                        Detailed Conceptual Explanation:
                      </span>
                      <p className="leading-relaxed">{sanitizeContent(q.explanation)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ACTIVE PAST PAPER VIEWER (If user is viewing a past paper) */}
      {/* ========================================================================= */}
      {selectedPaper && !isTestActive && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <button
              onClick={() => setSelectedPaper(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Test Yourself Menu
            </button>

            <div className="flex items-center gap-3">
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-800 p-1 bg-slate-100 dark:bg-slate-950">
                <button
                  onClick={() => setPaperViewTab('questions')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    paperViewTab === 'questions'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Questions & Answering
                </button>
                <button
                  onClick={() => setPaperViewTab('rubrics')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    paperViewTab === 'rubrics'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Marking Scheme Rubrics
                </button>
              </div>

              <button
                onClick={() => handleTogglePaperComplete(selectedPaper.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  pastPaperRecords[selectedPaper.id]?.completed
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-300'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {pastPaperRecords[selectedPaper.id]?.completed ? 'Completed' : 'Mark Completed'}
              </button>
            </div>
          </div>

          {/* Paper Header Info */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                {selectedPaper.examType}
              </span>
              <span className="text-xs text-slate-500 font-medium">Year {selectedPaper.year}</span>
              <span className="text-xs text-slate-500">• {selectedPaper.source}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {selectedPaper.title}
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              {selectedPaper.sourceTypeDescription}
            </p>
          </div>

          {/* Paper Sections & Questions */}
          <div className="space-y-6">
            {selectedPaper.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {section.name} — {section.description}
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300">
                    {section.totalMarks} Marks
                  </span>
                </div>

                <div className="space-y-4">
                  {section.questions.map((q) => {
                    const isMcq = !!q.options && q.options.length > 0;
                    const isSub = !!paperSubmittedQuestions[q.number];
                    const selectedIdx = paperAnswers[q.number];
                    const guidanceOpen = !!paperShowGuidance[q.number];

                    return (
                      <div key={q.number} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                              {q.number}
                            </span>
                            <span className="text-xs font-medium text-slate-500">
                              {q.topic}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-slate-500">
                            [{q.marks} Mark{q.marks > 1 ? 's' : ''}]
                          </span>
                        </div>

                        <div className="text-base font-semibold text-slate-900 dark:text-white">
                          {sanitizeContent(q.question)}
                        </div>

                        {/* How to Approach Guidance */}
                        {q.howToApproach && q.howToApproach.length > 0 && (
                          <div className="rounded-lg border border-blue-100 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/30 overflow-hidden text-xs">
                            <button
                              onClick={() => setPaperShowGuidance(prev => ({ ...prev, [q.number]: !prev[q.number] }))}
                              className="w-full px-3 py-2 flex items-center justify-between text-left font-bold text-blue-800 dark:text-blue-300"
                            >
                              <span className="flex items-center gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5" />
                                How to Approach / Ways to Answer
                              </span>
                              {guidanceOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                            {guidanceOpen && (
                              <div className="px-3 pb-3 pt-1 space-y-1 text-slate-700 dark:text-slate-300 border-t border-blue-100 dark:border-blue-900/40">
                                {q.howToApproach.map((st, i) => (
                                  <div key={i}>• {st}</div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* MCQ Options with Interactive Submission */}
                        {isMcq && q.options && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, oIdx) => {
                                const isSelected = selectedIdx === oIdx;
                                const isCorrectOpt = opt === q.answer.finalAnswer;
                                let optClass = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-400";

                                if (isSub) {
                                  if (isCorrectOpt) {
                                    optClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold";
                                  } else if (isSelected && !isCorrectOpt) {
                                    optClass = "border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-200 font-bold";
                                  }
                                } else if (isSelected) {
                                  optClass = "border-blue-600 bg-blue-50 dark:bg-blue-950 text-blue-900 font-bold";
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    disabled={isSub}
                                    onClick={() => setPaperAnswers(prev => ({ ...prev, [q.number]: oIdx }))}
                                    className={`p-3 rounded-lg border text-left text-xs sm:text-sm flex items-center gap-2.5 transition-all ${optClass}`}
                                  >
                                    <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                                    <span>{sanitizeContent(opt)}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {!isSub ? (
                              <div className="pt-2 flex justify-end">
                                <button
                                  disabled={selectedIdx === undefined}
                                  onClick={() => handlePaperSubmitMcq(q.number, q.answer.finalAnswer, q.options || [], q.chapterId, q.topic)}
                                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs rounded-lg transition-colors"
                                >
                                  Submit Answer
                                </button>
                              </div>
                            ) : (
                              <div className={`p-4 rounded-xl border space-y-2 mt-2 ${
                                q.options[selectedIdx] === q.answer.finalAnswer
                                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800'
                                  : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800'
                              }`}>
                                <div className="text-xs font-bold flex items-center gap-2">
                                  {q.options[selectedIdx] === q.answer.finalAnswer ? (
                                    <span className="text-emerald-700 dark:text-emerald-300">✓ Correct!</span>
                                  ) : (
                                    <span className="text-rose-700 dark:text-rose-300">✗ Incorrect. Correct: {q.answer.finalAnswer}</span>
                                  )}
                                </div>
                                {q.answer.explanation && (
                                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {sanitizeContent(q.answer.explanation)}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Subjective Question Marking Scheme toggle or Rubrics Tab */}
                        {(!isMcq || paperViewTab === 'rubrics') && (
                          <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                              Official Marking Scheme & Expected Answer:
                            </div>
                            <div className="text-blue-700 dark:text-blue-400 font-semibold">
                              Expected: {q.answer.finalAnswer}
                            </div>
                            <div className="space-y-1 text-slate-600 dark:text-slate-400">
                              {q.answer.markingScheme.map((item, msIdx) => (
                                <div key={msIdx} className="flex items-start gap-2">
                                  <span className="font-bold text-blue-500">•</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MAIN TEST YOURSELF CONFIGURATION DASHBOARD (When not in test/paper view) */}
      {/* ========================================================================= */}
      {!isTestActive && !selectedPaper && (
        <div className="space-y-8">
          {/* Main Controls: Question Source & Subject Selection */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
            <div>
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                1. Choose Question Source
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setSource('predicted')}
                  className={`p-5 rounded-xl border-2 text-left transition-all relative ${
                    source === 'predicted'
                      ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${source === 'predicted' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Predicted Practice Questions</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        AI-Generated high-yield revision sets covering all chapters with answering guidance.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSource('past_papers')}
                  className={`p-5 rounded-xl border-2 text-left transition-all relative ${
                    source === 'past_papers'
                      ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${source === 'past_papers' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Authentic Past Papers</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Verified Malaysian state trials, MRSM, and cluster school Form 3 examination papers.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Subject Selection */}
            <div>
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                2. Choose Subject
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => handleSubjectChange('math')}
                  className={`p-3.5 rounded-xl border text-center font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    subject === 'math'
                      ? 'border-blue-600 bg-blue-600 text-white shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <Calculator className="w-4 h-4" />
                  Mathematics (9 Chapters)
                </button>

                <button
                  onClick={() => handleSubjectChange('science')}
                  className={`p-3.5 rounded-xl border text-center font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    subject === 'science'
                      ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <Dna className="w-4 h-4" />
                  Science (10 Chapters)
                </button>

                <button
                  onClick={() => handleSubjectChange('both')}
                  className={`p-3.5 rounded-xl border text-center font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    subject === 'both'
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  Mathematics + Science (19 Chapters)
                </button>
              </div>
            </div>

            {/* If Predicted Questions is chosen: Configure Question Count */}
            {source === 'predicted' && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div className="bg-blue-50/80 dark:bg-blue-950/40 p-4 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-blue-950 dark:text-blue-200 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-blue-800 dark:text-blue-300">
                    <Sparkles className="w-4 h-4" />
                    AI-Generated Practice Questions
                  </div>
                  <p>
                    These questions are generated from syllabus topics, common question patterns, and past-paper trends to help you practise likely concepts.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2">
                    Question Count (Minimum {subject === 'both' ? '40 questions covering all 19 chapters' : '20 questions covering all chapters'})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(subject === 'both' ? [40, 50, 75, 100] : [20, 30, 40, 50, 75, 100]).map(num => (
                      <button
                        key={num}
                        onClick={() => setPredictedCount(num)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                          predictedCount === num
                            ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        {num} Questions {num === (subject === 'both' ? 40 : 20) ? '(Full Syllabus Standard)' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleStartPredictedTest}
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Start Test Yourself ({predictedCount} Questions)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* If Past Papers is chosen: List Past Papers */}
          {source === 'past_papers' && (
            <div className="space-y-4">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={paperSearch}
                    onChange={e => setPaperSearch(e.target.value)}
                    placeholder="Search past papers (e.g. MRSM, Selangor)..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={selectedPaperExamType}
                    onChange={e => setSelectedPaperExamType(e.target.value as any)}
                    className="text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                  >
                    <option value="all">All Exam Types</option>
                    <option value="MRSM">MRSM</option>
                    <option value="State">State Trials</option>
                    <option value="School">School & SBP</option>
                  </select>

                  <select
                    value={selectedPaperYear}
                    onChange={e => setSelectedPaperYear(e.target.value)}
                    className="text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                  >
                    <option value="all">All Years</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>

              {/* Papers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPapers.map(paper => (
                  <div
                    key={paper.id}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between hover:border-blue-500 transition-all group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`px-2 py-0.5 rounded text-2xs font-bold uppercase ${
                          paper.subject === 'math'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}>
                          {paper.subject === 'math' ? 'Mathematics' : 'Science'}
                        </span>
                        <span className="text-2xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {paper.year} • {paper.examType}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {paper.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {paper.source} — {paper.sourceTypeDescription}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                        <span>{paper.totalMarks} Marks</span>
                        <span>•</span>
                        <span>{paper.sections.reduce((acc, s) => acc + s.questions.length, 0)} Questions</span>
                        <span>•</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{paper.difficulty}</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-2xs font-semibold text-slate-500">
                        {pastPaperRecords[paper.id]?.completed ? '✓ Completed' : 'Unattempted'}
                      </span>
                      <button
                        onClick={() => handleOpenPaper(paper)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Attempt Paper
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
