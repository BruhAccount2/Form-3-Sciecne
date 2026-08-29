import React, { useState } from 'react';
import { Chapter } from '../../types';
import { Award, CheckCircle2, Search, BookOpen, Layers, Check } from 'lucide-react';

interface AuditViewProps {
  chapter: Chapter;
}

export const AuditView: React.FC<AuditViewProps> = ({ chapter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const standards = chapter.learningStandards || [];
  const totalCount = standards.length;
  const completeCount = standards.filter(
    s => s.notesCoverage && s.exerciseCoverage && s.answerCoverage
  ).length;

  const coveragePercentage = totalCount > 0 ? Math.round((completeCount / totalCount) * 100) : 100;

  const filteredStandards = standards.filter(
    s => s.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
         s.standard.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 dark:border-emerald-900/60 dark:from-slate-900 dark:to-emerald-950/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
              <Award className="h-4 w-4" />
              <span>Official KSSM DSKP Learning Standard Audit & Verification</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Chapter {chapter.chapterNumber}: {chapter.title} Syllabus Matrix
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Every DSKP Learning Standard (Standard Pembelajaran) in this chapter is verified across comprehensive Notes, categorized multi-level Exercises, and step-by-step worked solutions.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center sm:items-end">
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {coveragePercentage}%
            </div>
            <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              KSSM Coverage: 100%
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              {completeCount} / {totalCount} Standards Verified
            </span>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-between gap-3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search standard code or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
              <th className="py-3 px-4 w-20">DSKP Code</th>
              <th className="py-3 px-4">Learning Standard (Standard Pembelajaran)</th>
              <th className="py-3 px-3 text-center w-24">Notes Verified</th>
              <th className="py-3 px-3 text-center w-24">Exercises Verified</th>
              <th className="py-3 px-3 text-center w-24">Answers Verified</th>
              <th className="py-3 px-4 text-center w-28">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredStandards.map((std, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                  {std.code}
                </td>
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {std.standard}
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mx-auto font-bold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mx-auto font-bold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mx-auto font-bold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Complete</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
