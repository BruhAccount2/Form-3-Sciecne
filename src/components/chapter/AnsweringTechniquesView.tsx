import React from 'react';
import { Chapter } from '../../types';
import { Target, CheckCircle2, AlertTriangle, Lightbulb, Compass, Award } from 'lucide-react';
import { sanitizeContent } from '../../utils/symbolSanitizer';

interface AnsweringTechniquesViewProps {
  chapter: Chapter;
}

export const AnsweringTechniquesView: React.FC<AnsweringTechniquesViewProps> = ({ chapter }) => {
  if (!chapter.answeringTechniques || chapter.answeringTechniques.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 dark:text-slate-400">
        Answering techniques are being updated for this chapter.
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
          <Target className="h-4 w-4" />
          <span>KSSM Exam Answering Techniques & Marking Guide</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          How to Score Full Marks in Chapter {chapter.chapterNumber}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Master the exact marking keywords, structured answer templates, and error-avoidance strategies developed from real KSSM exam marking schemes.
        </p>
      </div>

      {/* Techniques List */}
      <div className="space-y-6">
        {chapter.answeringTechniques.map((tech, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900 space-y-5"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {sanitizeContent(tech.category)}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {sanitizeContent(tech.title)}
              </h3>
            </div>

            {/* Essential Keywords & Terminology */}
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                <Award className="h-4 w-4" />
                <span>Mandatory Marking Keywords (Examiners award 1m per keyword):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tech.essentialKeywords.map((kw, kIdx) => (
                  <div
                    key={kIdx}
                    className="flex items-start gap-2 rounded-lg bg-white p-2.5 text-xs text-slate-800 border border-emerald-100 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-snug">{sanitizeContent(kw)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by Step Strategy */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span>Step-by-Step Problem Solving Strategy:</span>
              </div>
              <ol className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                {tech.stepByStepStrategy.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white dark:bg-blue-500">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{sanitizeContent(step)}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Common Errors to Avoid */}
            {tech.commonErrorsToAvoid && tech.commonErrorsToAvoid.length > 0 && (
              <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4 dark:border-rose-900/50 dark:bg-rose-950/30">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-300 mb-2">
                  <AlertTriangle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  <span>Frequent Mistakes & Zero-Mark Traps:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {tech.commonErrorsToAvoid.map((err, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">✗</span>
                      <span className="leading-relaxed">{sanitizeContent(err)}</span>
                    </li>
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
