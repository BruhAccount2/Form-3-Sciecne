import React, { useState } from 'react';
import { Chapter, LearningStandardCoverage } from '../../types';
import { 
  CheckCircle2, 
  X, 
  Award, 
  BookOpen, 
  FileCheck, 
  Search, 
  AlertCircle,
  Layers,
  Sparkles
} from 'lucide-react';

interface LearningStandardsAuditModalProps {
  chapter: Chapter;
  isOpen: boolean;
  onClose: () => void;
}

export const LearningStandardsAuditModal: React.FC<LearningStandardsAuditModalProps> = ({
  chapter,
  isOpen,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Official KSSM DSKP Syllabus Audit
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white">
                  KSSM Coverage: {coveragePercentage}%
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Chapter {chapter.chapterNumber}: {chapter.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search & Audit Summary Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search standard code or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              Audited Standards: <strong>{completeCount} / {totalCount} Completed</strong>
            </span>
          </div>
        </div>

        {/* Standards Table */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filteredStandards.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              No learning standards match your search term.
            </div>
          ) : (
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="py-2.5 px-3 w-16">DSKP</th>
                    <th className="py-2.5 px-3">Learning Standard (Standard Pembelajaran)</th>
                    <th className="py-2.5 px-2 text-center w-20">Notes</th>
                    <th className="py-2.5 px-2 text-center w-20">Exercises</th>
                    <th className="py-2.5 px-2 text-center w-20">Answers</th>
                    <th className="py-2.5 px-3 text-center w-24">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  {filteredStandards.map((std, idx) => {
                    const isFullyCovered = std.notesCoverage && std.exerciseCoverage && std.answerCoverage;
                    return (
                      <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-mono font-bold text-blue-600 dark:text-blue-400">
                          {std.code}
                        </td>
                        <td className="py-2.5 px-3 text-slate-800 dark:text-slate-200 leading-snug">
                          {std.standard}
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          {std.notesCoverage ? (
                            <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold">
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                          ) : (
                            <span className="text-slate-300">○</span>
                          )}
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          {std.exerciseCoverage ? (
                            <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold">
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                          ) : (
                            <span className="text-slate-300">○</span>
                          )}
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          {std.answerCoverage ? (
                            <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold">
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                          ) : (
                            <span className="text-slate-300">○</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {isFullyCovered ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                              ✓ 100%
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                              In Progress
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 flex items-center justify-between text-xs text-slate-500">
          <span>Source: Kementerian Pendidikan Malaysia (KPM) Form 3 DSKP</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 font-semibold dark:bg-slate-100 dark:text-slate-900"
          >
            Close Matrix
          </button>
        </div>

      </div>
    </div>
  );
};
