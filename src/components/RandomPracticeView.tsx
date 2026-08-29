import React, { useState } from 'react';
import { SubjectType, ExamQuestionItem, Difficulty } from '../types';
import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { recordQuestionAttempt, recordRevisionActivity } from '../utils/storage';
import { 
  Shuffle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  Dna, 
  Calculator,
  Award,
  BookOpen
} from 'lucide-react';

interface RandomPracticeViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const RandomPracticeView: React.FC<RandomPracticeViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [subjectChoice, setSubjectChoice] = useState<'both' | SubjectType>('both');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isStarted, setIsStarted] = useState(false);
  const [questions, setQuestions] = useState<ExamQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const startPractice = () => {
    const pool: ExamQuestionItem[] = [];

    if (subjectChoice === 'both' || subjectChoice === 'math') {
      mathChapters.forEach(ch => {
        ch.exercises.forEach(ex => {
          pool.push({
            id: `rand-math-${ch.id}-${ex.id}`,
            subject: 'math',
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            topic: `Math Ch ${ch.chapterNumber}: ${ch.title}`,
            question: ex.question,
            options: [
              ex.answer.finalAnswer,
              'Option B (Alternative form)',
              'Option C (Inverse value)',
              'Option D (Common distractor)'
            ],
            correctIndex: 0,
            explanation: ex.answer.scientificReasoning || ex.answer.fullWorking?.join(' ') || 'Standard step-by-step mathematical deduction.',
            marks: ex.marks || 2,
            difficulty: ex.difficulty
          });
        });
      });
    }

    if (subjectChoice === 'both' || subjectChoice === 'science') {
      scienceChapters.forEach(ch => {
        ch.exercises.forEach(ex => {
          pool.push({
            id: `rand-sci-${ch.id}-${ex.id}`,
            subject: 'science',
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            topic: `Science Ch ${ch.chapterNumber}: ${ch.title}`,
            question: ex.question,
            options: [
              ex.answer.finalAnswer,
              'Option B (Alternative effect)',
              'Option C (Opposite reaction)',
              'Option D (Secondary factor)'
            ],
            correctIndex: 0,
            explanation: ex.answer.scientificReasoning || 'Scientific rationale based on KSSM Form 3 Learning Standards.',
            marks: ex.marks || 2,
            difficulty: ex.difficulty
          });
        });
      });
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, questionCount);
    // Shuffle options for each question so correct option isn't always A
    shuffled.forEach(q => {
      const origCorrect = q.options[q.correctIndex];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      q.correctIndex = shuffledOptions.indexOf(origCorrect);
      q.options = shuffledOptions;
    });

    setQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setIsStarted(true);
    setIsCompleted(false);

    recordRevisionActivity({
      type: 'random_practice',
      subject: subjectChoice === 'both' ? 'math' : subjectChoice,
      title: 'Random Practice Session',
      subtitle: `${questionCount} Questions (${subjectChoice.toUpperCase()})`
    });
  };

  const handleSelectOption = (optIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [currentIndex]: optIndex }));
    const currentQ = questions[currentIndex];
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

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) score++;
    });
    return score;
  };

  const currentQ = questions[currentIndex];
  const isAnswered = userAnswers[currentIndex] !== undefined;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
          <button onClick={onNavigateHome} className="hover:underline">Home</button>
          <span>/</span>
          <span>Random Practice</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <Shuffle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          Customizable Random Practice
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
          Generate quick randomized revision quizzes tailored to your selected subject and question length.
        </p>
      </div>

      {!isStarted ? (
        /* Configuration Screen */
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Configure Your Practice Set
          </h2>

          {/* Subject choice */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Select Subject:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'both', label: 'Math & Science', icon: Shuffle },
                { id: 'math', label: 'Mathematics Only', icon: Calculator },
                { id: 'science', label: 'Science Only', icon: Dna }
              ].map(sub => {
                const Icon = sub.icon;
                const isSelected = subjectChoice === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSubjectChoice(sub.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs">{sub.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Count */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Number of Questions:
            </label>
            <div className="flex gap-3">
              {[5, 10, 20, 30].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    questionCount === cnt
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {cnt} Questions
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={startPractice}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              Start Practice Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : !isCompleted ? (
        /* In-Quiz Question View */
        currentQ && (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span className={`px-2 py-0.5 rounded-full text-2xs font-semibold ${
                currentQ.subject === 'math' ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {currentQ.chapterTitle}
              </span>
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

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

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                Previous
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  disabled={!isAnswered}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold disabled:opacity-40 flex items-center gap-1.5"
                >
                  Next
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  disabled={!isAnswered}
                  onClick={() => setIsCompleted(true)}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold disabled:opacity-40"
                >
                  Finish Practice
                </button>
              )}
            </div>
          </div>
        )
      ) : (
        /* Results View */
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Practice Complete!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              You scored {calculateScore()} / {questions.length} ({Math.round((calculateScore() / questions.length) * 100)}%).
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setIsStarted(false);
                setIsCompleted(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <RotateCcw className="w-4 h-4" />
              Configure New Set
            </button>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
            >
              Return Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
