import React, { useState } from 'react';
import { Chapter, Experiment } from '../../types';
import { FlaskConical, ShieldAlert, CheckCircle2, FileText, AlertTriangle, Eye, Layers } from 'lucide-react';
import { sanitizeContent } from '../../utils/symbolSanitizer';

interface ExperimentViewProps {
  chapter: Chapter;
}

export const ExperimentView: React.FC<ExperimentViewProps> = ({ chapter }) => {
  const [selectedExpIdx, setSelectedExpIdx] = useState(0);

  const experimentList: Experiment[] = chapter.experiments && chapter.experiments.length > 0
    ? chapter.experiments
    : chapter.experiment
      ? [chapter.experiment]
      : [];

  if (experimentList.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900 animate-fadeIn">
        <FlaskConical className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-700" />
        <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">
          No Required Laboratory Experiments for this Topic
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          This chapter focuses primarily on theoretical concepts, problem solving, or descriptive models according to the KSSM syllabus.
        </p>
      </div>
    );
  }

  const exp = experimentList[selectedExpIdx] || experimentList[0];
  const apparatusItems = exp.apparatus || exp.apparatusMaterials || [];
  const observationData = exp.observations || exp.observationTable;
  const precautionsList = exp.precautions || exp.safetyPrecautions || [];

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Experiment Selector if multiple experiments in this chapter */}
      {experimentList.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {experimentList.map((e, idx) => (
            <button
              key={e.id || idx}
              onClick={() => setSelectedExpIdx(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                selectedExpIdx === idx
                  ? 'bg-blue-600 text-white shadow-xs dark:bg-blue-500'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
              }`}
            >
              <FlaskConical className="h-3.5 w-3.5" />
              <span>Experiment {idx + 1}: {e.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Experiment Report Layout */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900 space-y-6">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <FlaskConical className="h-4 w-4" />
            <span>KSSM Form 3 Practical Science Lab Report</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {sanitizeContent(exp.title)}
          </h2>
        </div>

        {/* Aim & Hypothesis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/50 dark:bg-blue-950/30">
            <span className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider block mb-1">
              1. Aim of Experiment:
            </span>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              {sanitizeContent(exp.aim)}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block mb-1">
              2. Scientific Hypothesis:
            </span>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              {sanitizeContent(exp.hypothesis)}
            </p>
          </div>
        </div>

        {/* The 3 Experimental Variables */}
        {exp.variables && (
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4.5 dark:border-slate-800 dark:bg-slate-950/60">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-3">
              3. Scientific Variables (Crucial for Paper 3 / Exam Scoring):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                  Manipulated Variable (MV)
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {sanitizeContent(exp.variables.manipulated)}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                  Responding Variable (RV)
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {sanitizeContent(exp.variables.responding)}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 block mb-0.5">
                  Constant Variable (CV)
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {sanitizeContent(exp.variables.constant)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Apparatus and Materials */}
        {apparatusItems.length > 0 && (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
              4. Apparatus & Materials Required:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {apparatusItems.map((item, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                >
                  {sanitizeContent(item)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Step by step procedure */}
        {exp.procedure && exp.procedure.length > 0 && (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
              5. Step-by-Step Procedure:
            </span>
            <ol className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/80">
              {exp.procedure.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-[10px] text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {sIdx + 1}
                  </span>
                  <span className="leading-relaxed">{sanitizeContent(step)}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Observations Table if provided */}
        {observationData && (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>6. Observation Table:</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-100 font-bold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                  <tr>
                    {observationData.headers.map((h, hi) => (
                      <th key={hi} className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-700">
                        {sanitizeContent(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {observationData.rows.map((row, ri) => (
                    <tr key={ri} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2.5">
                          {sanitizeContent(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Conclusion and Safety Warnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {exp.conclusion && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>7. Scientific Conclusion:</span>
              </div>
              <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {sanitizeContent(exp.conclusion)}
              </p>
            </div>
          )}

          {precautionsList.length > 0 && (
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">
                <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Safety & Accuracy Precautions:</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                {precautionsList.map((prec, pi) => (
                  <li key={pi}>• {sanitizeContent(prec)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
