import React, { useState } from 'react';
import { QuickRevisionData, SubjectType } from '../types';
import { quickRevisionDataList } from '../data/quickRevision';
import { recordQuestionAttempt, recordRevisionActivity } from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  Zap, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface QuickRevisionViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const QuickRevisionView: React.FC<QuickRevisionViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(quickRevisionDataList[0]?.chapterId || 'math-ch1');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const currentModule = quickRevisionDataList.find(q => q.chapterId === selectedChapterId) || quickRevisionDataList[0];

  const handleSelectOption = (questionId: string, optionIndex: number, correctIndex: number, topic: string) => {
    if (showResults[questionId]) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setShowResults(prev => ({ ...prev, [questionId]: true }));

    const isCorrect = optionIndex === correctIndex;
    if (currentModule) {
      recordQuestionAttempt({
        chapterId: currentModule.chapterId,
        subject: currentModule.subject,
        chapterTitle: currentModule.chapterTitle,
        chapterNumber: currentModule.chapterNumber,
        topic,
        isCorrect
      });
      recordRevisionActivity({
        type: 'quick_revision',
        subject: currentModule.subject,
        title: `Quick Revision: ${currentModule.chapterTitle}`,
        subtitle: `Chapter ${currentModule.chapterNumber} Rapid Review`,
        chapterId: currentModule.chapterId
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
          <button onClick={onNavigateHome} className="hover:underline">Home</button>
          <span>/</span>
          <span>Quick Revision</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <Zap className="w-8 h-8 text-amber-500" />
          5–10 Minute Rapid Chapter Revision
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1 max-w-2xl text-sm">
          High-yield chapter summaries, critical definitions, common exam pitfalls, and rapid-fire checkpoint quizzes.
        </p>
      </div>

      {/* Chapter Selection Pills */}
      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {quickRevisionDataList.map(mod => {
            const isSelected = mod.chapterId === selectedChapterId;
            return (
              <button
                key={mod.chapterId}
                onClick={() => {
                  setSelectedChapterId(mod.chapterId);
                  setUserAnswers({});
                  setShowResults({});
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${mod.subject === 'math' ? 'bg-indigo-400' : 'bg-emerald-400'}`} />
                {mod.subject === 'math' ? 'Math' : 'Sci'} Ch {mod.chapterNumber}: {mod.chapterTitle}
              </button>
            );
          })}
        </div>
      </div>

      {currentModule && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Columns: Summary & Pitfalls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Overview Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Chapter {currentModule.chapterNumber} • {currentModule.subject === 'math' ? 'Mathematics' : 'Science'}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {currentModule.chapterTitle}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80">
                  <Clock className="w-3.5 h-3.5" />
                  ~{currentModule.targetDurationMinutes} mins
                </span>
              </div>

              {/* Key Definitions */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Key Definitions to Memorize:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentModule.keyDefinitions.map((def, dIdx) => (
                    <div key={dIdx} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">
                        {sanitizeContent(def.term)}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {sanitizeContent(def.definition)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Facts */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  High-Yield Core Facts:
                </h3>
                <div className="space-y-2">
                  {currentModule.keyFacts.map((fact, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{sanitizeContent(fact)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Essential Formulae */}
              {currentModule.formulae.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Essential Formulae:
                  </h3>
                  <div className="p-3.5 bg-blue-50/50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-900/50 font-mono text-xs text-blue-900 dark:text-blue-200 space-y-1">
                    {currentModule.formulae.map((form, formIdx) => (
                      <div key={formIdx} className="font-semibold">• {sanitizeContent(form)}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Common Traps & Misconceptions */}
            {currentModule.commonMistakes.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-rose-200 dark:border-rose-950/60 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 text-rose-700 dark:text-rose-400 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5" />
                  Common Student Pitfalls & Exam Misconceptions
                </div>
                <div className="space-y-4">
                  {currentModule.commonMistakes.map((mistake, mIdx) => (
                    <div key={mIdx} className="p-4 bg-rose-50/60 dark:bg-rose-950/20 rounded-lg border border-rose-100 dark:border-rose-900/40 text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 text-rose-800 dark:text-rose-300 font-semibold">
                        <XCircle className="w-4 h-4 shrink-0" />
                        Common Mistake: {sanitizeContent(mistake.mistake)}
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-semibold">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        Correction: {sanitizeContent(mistake.correction)}
                      </div>
                      <p className="text-2xs text-slate-600 dark:text-slate-400 pl-5 italic">
                        Why: {sanitizeContent(mistake.why)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Rapid-Fire Quiz & Navigation */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Rapid Checkpoint Quiz
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Test your retention right now. Instant answers & explanations.
              </p>

              <div className="space-y-6">
                {currentModule.rapidFireQuestions.map((q, qIdx) => {
                  const isAnswered = showResults[q.id];
                  const chosenOption = userAnswers[q.id];
                  const isCorrect = chosenOption === q.correctIndex;

                  return (
                    <div key={q.id} className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-3">
                      <div className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                        {qIdx + 1}. {sanitizeContent(q.question)}
                      </div>

                      <div className="space-y-1.5">
                        {q.options.map((opt, optIdx) => {
                          const isThisChosen = chosenOption === optIdx;
                          const isThisCorrect = optIdx === q.correctIndex;

                          let btnClasses = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300';
                          if (isAnswered) {
                            if (isThisCorrect) {
                              btnClasses = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-bold';
                            } else if (isThisChosen && !isCorrect) {
                              btnClasses = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-200';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isAnswered}
                              onClick={() => handleSelectOption(q.id, optIdx, q.correctIndex, q.topic)}
                              className={`w-full text-left p-2.5 rounded-lg border text-2xs transition-all flex items-center justify-between ${btnClasses}`}
                            >
                              <span>{String.fromCharCode(65 + optIdx)}. {sanitizeContent(opt)}</span>
                              {isAnswered && isThisCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                              {isAnswered && isThisChosen && !isCorrect && <XCircle className="w-3.5 h-3.5 text-rose-600" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div className="pt-2 text-2xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-2.5 rounded-md border border-slate-200 dark:border-slate-800">
                          <span className="font-semibold block text-slate-900 dark:text-slate-200 mb-0.5">
                            Explanation:
                          </span>
                          {sanitizeContent(q.explanation)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigateChapter(currentModule.chapterId)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  Study Full Chapter Notes
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
