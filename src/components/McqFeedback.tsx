import React from 'react';
import { CheckCircle2, XCircle, Zap, BookOpen, Sparkles } from 'lucide-react';
import { sanitizeContent } from '../utils/symbolSanitizer';

export interface McqFeedbackProps {
  isCorrect: boolean;
  selectedOptionText?: string;
  selectedOptionLetter?: string;
  correctOptionText: string;
  correctOptionLetter: string;
  explanation: string;
  topic?: string;
  learningStandard?: string;
  onReviseTopic?: () => void;
}

export const McqFeedback: React.FC<McqFeedbackProps> = ({
  isCorrect,
  selectedOptionText,
  selectedOptionLetter,
  correctOptionText,
  correctOptionLetter,
  explanation,
  topic,
  learningStandard,
  onReviseTopic
}) => {
  return (
    <div
      className={`p-5 rounded-xl border transition-all text-xs space-y-3 ${
        isCorrect
          ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200'
          : 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/70 text-slate-800 dark:text-slate-200'
      }`}
    >
      {/* Header status bar */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-bold text-sm">
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-emerald-700 dark:text-emerald-300 font-extrabold text-base">
                ✓ Correct!
              </span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
              <span className="text-rose-700 dark:text-rose-300 font-extrabold text-base">
                ✗ Incorrect
              </span>
            </>
          )}
        </div>

        {(topic || learningStandard) && (
          <div className="flex items-center gap-1.5 text-2xs font-semibold text-slate-500 dark:text-slate-400">
            {learningStandard && (
              <span className="bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 font-mono">
                DSKP {learningStandard}
              </span>
            )}
            {topic && <span className="hidden sm:inline font-medium">• {topic}</span>}
          </div>
        )}
      </div>

      {/* Answer comparison */}
      <div className="space-y-1.5 pt-1">
        {isCorrect ? (
          <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
            The answer is <span className="font-bold underline">{correctOptionLetter}. {sanitizeContent(correctOptionText)}</span>. Good job!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {selectedOptionLetter && selectedOptionText && (
              <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-lg border border-rose-200 dark:border-rose-900/60">
                <span className="text-2xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-0.5">
                  Your Answer:
                </span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {selectedOptionLetter}. {sanitizeContent(selectedOptionText)}
                </span>
              </div>
            )}
            <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-lg border border-emerald-300 dark:border-emerald-800/80">
              <span className="text-2xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
                Correct Answer:
              </span>
              <span className="font-bold text-emerald-900 dark:text-emerald-100">
                {correctOptionLetter}. {sanitizeContent(correctOptionText)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Pedagogical "Why?" Section */}
      <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800/70 space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900 dark:text-white">
          <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Why? (Syllabus Concept & Full Working)</span>
        </div>
        <div 
          className="text-slate-700 dark:text-slate-300 leading-relaxed pl-5 font-normal text-xs"
          dangerouslySetInnerHTML={{ __html: sanitizeContent(explanation) }}
        />
      </div>

      {/* Revise Topic Action if incorrect */}
      {!isCorrect && onReviseTopic && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onReviseTopic}
            className="inline-flex items-center gap-1 text-2xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <BookOpen className="w-3 h-3" />
            Revise relevant notes section →
          </button>
        </div>
      )}
    </div>
  );
};
