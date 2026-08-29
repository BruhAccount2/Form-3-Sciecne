import React, { useState } from 'react';
import { Chapter } from '../../types';
import { Check, Copy, Printer, CheckCircle2 } from 'lucide-react';

interface AnswersViewProps {
  chapter: Chapter;
}

export const AnswersView: React.FC<AnswersViewProps> = ({ chapter }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = chapter.exercises
      .map(
        ex =>
          `Question ${ex.number} (${ex.difficulty}, ${ex.marks} marks):\n` +
          `Q: ${ex.question}\n` +
          `Answer: ${ex.answer.finalAnswer}\n` +
          (ex.answer.fullWorking ? `Working:\n${ex.answer.fullWorking.join('\n')}\n` : '') +
          `-----------------------------------\n`
      )
      .join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Chapter {chapter.chapterNumber} Solutions & Marking Scheme
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Comprehensive answer key with full marks breakdown for self-evaluation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Solutions!' : 'Copy Answer Key'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 transition"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Sheet</span>
          </button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="space-y-4">
        {chapter.exercises.map((ex) => (
          <div
            key={ex.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-xs font-bold text-white dark:bg-slate-700">
                  {ex.number}
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  Exercise Question {ex.number}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  ({ex.difficulty})
                </span>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {ex.marks} {ex.marks === 1 ? 'mark' : 'marks'}
              </span>
            </div>

            {/* Final Answer */}
            <div className="mt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Final Answer:
              </span>
              <div className="mt-1 rounded-lg bg-emerald-50/50 p-3 text-xs font-semibold text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-200 font-mono-math">
                {ex.answer.finalAnswer}
              </div>
            </div>

            {/* Step by step method */}
            {ex.answer.fullWorking && (
              <div className="mt-3">
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                  Full Working & Marking Points:
                </span>
                <ul className="mt-1 space-y-1 rounded-lg bg-slate-50 p-3 text-xs text-slate-700 dark:bg-slate-950/60 dark:text-slate-300 font-mono text-[11px]">
                  {ex.answer.fullWorking.map((w, wi) => (
                    <li key={wi}>• {w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
