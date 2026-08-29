import React from 'react';
import { Chapter } from '../types';
import { Printer, X, Download } from 'lucide-react';
import { sanitizeContent } from '../utils/symbolSanitizer';

interface PrintNotesModalProps {
  chapter: Chapter | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PrintNotesModal: React.FC<PrintNotesModalProps> = ({
  chapter,
  isOpen,
  onClose
}) => {
  if (!isOpen || !chapter) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header Toolbar (hidden when printing) */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850 shrink-0 print:hidden">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Printable Notes Preview · Form 3 {chapter.subject === 'science' ? 'Science' : 'Mathematics'}
            </h3>
            <p className="text-xs text-slate-500">
              Clean monochrome paper layout without buttons or navigation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print to Paper / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content Area */}
        <div className="p-8 sm:p-12 overflow-y-auto print:p-0 print:m-0 print:text-black space-y-8 bg-white text-slate-900">
          
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1">
            <div className="text-xs uppercase font-bold tracking-widest text-slate-600">
              KSSM Form 3 {chapter.subject === 'science' ? 'Science' : 'Mathematics'} Revision Notes
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Chapter {chapter.chapterNumber}: {chapter.title}
            </h1>
            <p className="text-xs text-slate-700 max-w-2xl mx-auto italic">
              {chapter.summary}
            </p>
          </div>

          {/* Learning Standards Overview Table */}
          {chapter.learningStandards && (
            <div className="border border-slate-300 rounded-lg p-3 text-xs space-y-1 bg-slate-50">
              <span className="font-bold text-slate-900 block">KSSM DSKP Syllabus Standards Covered:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
                {chapter.learningStandards.map(std => (
                  <div key={std.code}>• <strong>{std.code}</strong>: {std.standard}</div>
                ))}
              </div>
            </div>
          )}

          {/* Structured Note Sections */}
          <div className="space-y-6">
            {chapter.notes.map((section, idx) => (
              <div key={idx} className="space-y-3 border-b border-slate-200 pb-6 last:border-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-sm bg-slate-200 px-2 py-0.5 rounded text-slate-800">
                    {chapter.chapterNumber}.{idx + 1}
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div 
                  className="text-xs leading-relaxed text-slate-800 space-y-2"
                  dangerouslySetInnerHTML={{ __html: sanitizeContent(section.content) }}
                />

                {/* Key Points */}
                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="p-3 bg-slate-100 rounded-lg border-l-4 border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-slate-900 block">Key Summary Points:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {section.keyPoints.map((pt, pIdx) => (
                        <li key={pIdx} dangerouslySetInnerHTML={{ __html: sanitizeContent(pt) }} />
                      ))}
                    </ul>
                  </div>
                )}

                {/* Formula / Rule */}
                {section.formula && (
                  <div className="p-3 border border-slate-300 rounded-lg text-xs bg-slate-50 font-mono">
                    <span className="font-bold font-sans block mb-1">Standard Formula / Rule:</span>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeContent(section.formula) }} />
                  </div>
                )}

                {/* Worked Examples */}
                {section.workedExamples && section.workedExamples.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-slate-900 block">Worked Example:</span>
                    {section.workedExamples.map((ex, exIdx) => (
                      <div key={exIdx} className="p-3 border border-slate-200 rounded-lg text-xs space-y-1">
                        <div className="font-semibold text-slate-900">{ex.question}</div>
                        <div className="text-slate-700 font-mono pl-2 border-l-2 border-slate-300">
                          {ex.solution.map((step, sIdx) => (
                            <div key={sIdx} dangerouslySetInnerHTML={{ __html: sanitizeContent(step) }} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="text-center text-[10px] text-slate-400 pt-4 border-t border-slate-200">
            Form 3 KSSM Revision Guide · Ministry of Education Malaysia DSKP Aligned
          </div>

        </div>

      </div>
    </div>
  );
};
