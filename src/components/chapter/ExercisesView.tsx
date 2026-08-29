import React, { useState } from 'react';
import { Chapter, Exercise, Difficulty } from '../../types';
import { ChevronDown, ChevronUp, AlertCircle, Award, CheckCircle, HelpCircle } from 'lucide-react';
import { sanitizeContent } from '../../utils/symbolSanitizer';

interface ExercisesViewProps {
  chapter: Chapter;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({ chapter }) => {
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (id: string) => {
    setOpenAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    chapter.exercises.forEach(ex => {
      all[ex.id] = true;
    });
    setOpenAnswers(all);
  };

  const collapseAll = () => {
    setOpenAnswers({});
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Banner with Instructions and Toggles */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Chapter {chapter.chapterNumber} Exercises
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            KSSM / MRSM format questions categorized by difficulty level. Attempt each question on paper before revealing the answer.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={expandAll}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Expand All Answers
          </button>
          <button
            onClick={collapseAll}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-4">
        {chapter.exercises.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            isOpen={!!openAnswers[ex.id]}
            onToggle={() => toggleAnswer(ex.id)}
          />
        ))}
      </div>

    </div>
  );
};

const ExerciseCard: React.FC<{
  exercise: Exercise;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ exercise, isOpen, onToggle }) => {
  
  const getDifficultyBadge = (d: Difficulty) => {
    switch (d) {
      case 'Basic':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
            🟢 Basic
          </span>
        );
      case 'Intermediate':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
            🟡 Intermediate
          </span>
        );
      case 'Challenging':
      case 'HOTS':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
            🔴 Challenging (HOTS)
          </span>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900 transition-colors">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 dark:border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white dark:bg-blue-500">
            {exercise.number}
          </span>
          {getDifficultyBadge(exercise.difficulty)}
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Award className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>[{exercise.marks} {exercise.marks === 1 ? 'mark' : 'marks'}]</span>
        </div>
      </div>

      {/* Question Text */}
      <div className="mt-3 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
        <p className="whitespace-pre-line">{sanitizeContent(exercise.question)}</p>

        {exercise.subQuestions && exercise.subQuestions.length > 0 && (
          <div className="mt-3 space-y-2 pl-2">
            {exercise.subQuestions.map((sq, i) => (
              <div key={i} className="flex items-start justify-between gap-2 text-xs">
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>{sq.label}</strong> {sanitizeContent(sq.question)}
                </span>
                <span className="shrink-0 text-slate-400 font-mono">[{sq.marks}m]</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Answer Toggle Button */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <button
          onClick={onToggle}
          className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50/60 px-3.5 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-900/60 transition"
        >
          <span>{isOpen ? 'Hide Answer ▲' : 'Show Answer ▼'}</span>
        </button>

        {/* Collapsible Answer & Working */}
        {isOpen && (
          <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20 space-y-3 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">
                Final Answer:
              </span>
              <div className="rounded-lg border border-emerald-200 bg-white p-3 text-xs font-bold text-slate-900 dark:border-emerald-800 dark:bg-slate-950 dark:text-emerald-200 whitespace-pre-line font-mono-math">
                {sanitizeContent(exercise.answer.finalAnswer)}
              </div>
            </div>

            {/* Step by Step Working */}
            {exercise.answer.fullWorking && exercise.answer.fullWorking.length > 0 && (
              <div>
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Step-by-Step Method / Marking Breakdown:
                </span>
                <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 space-y-1.5 font-mono text-[11px]">
                  {exercise.answer.fullWorking.map((step, sIdx) => (
                    <div key={sIdx} className="leading-relaxed">
                      • {sanitizeContent(step)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scientific reasoning if applicable */}
            {exercise.answer.scientificReasoning && (
              <div className="text-xs text-slate-600 dark:text-slate-400">
                <strong>Scientific Concept:</strong> {exercise.answer.scientificReasoning}
              </div>
            )}

            {/* Common Mistake Alert */}
            {exercise.answer.commonMistakeWarning && (
              <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                <span>
                  <strong>Common Exam Trap:</strong> {exercise.answer.commonMistakeWarning}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};
