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
          <div className="space-y-8">
            {chapter.notes.map((section, idx) => (
              <div key={idx} className="space-y-4 border-b border-slate-300 pb-8 last:border-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-bold text-base bg-slate-200 px-2.5 py-1 rounded text-slate-900">
                    {chapter.chapterNumber}.{idx + 1}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div 
                  className="text-[18px] print:text-[18px] leading-relaxed text-slate-900 space-y-3"
                  dangerouslySetInnerHTML={{ __html: sanitizeContent(section.content) }}
                />

                {/* Key Formulas */}
                {section.keyFormulas && section.keyFormulas.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {section.keyFormulas.map((kf, kfIdx) => (
                      <div key={kfIdx} className="p-4 bg-slate-50 border border-slate-300 rounded-xl text-[18px] print:text-[18px] space-y-2">
                        <span className="font-bold text-slate-900 block text-lg">{kf.name}</span>
                        <div className="font-semibold text-blue-950 bg-blue-50 p-3 rounded-lg border border-blue-200 text-[18px]" dangerouslySetInnerHTML={{ __html: sanitizeContent(kf.formulaInWords) }} />
                        {kf.howToUse && kf.howToUse.length > 0 && (
                          <div className="text-slate-800 space-y-1 pt-1">
                            <span className="font-semibold text-slate-900 text-[16px] block">Steps / Method:</span>
                            <ol className="list-decimal list-inside pl-2 space-y-1 text-[17px]">
                              {kf.howToUse.map((step, stIdx) => (
                                <li key={stIdx} dangerouslySetInnerHTML={{ __html: sanitizeContent(step) }} />
                              ))}
                            </ol>
                          </div>
                        )}
                        {kf.wordExample && (
                          <div className="text-slate-800 bg-white p-3 rounded-lg border border-slate-200 text-[17px]">
                            <span className="font-semibold text-slate-900">Example: </span>
                            <span dangerouslySetInnerHTML={{ __html: sanitizeContent(kf.wordExample) }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Definitions */}
                {section.definitions && section.definitions.length > 0 && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-300 text-[18px] print:text-[18px] space-y-2">
                    <span className="font-bold text-slate-900 block text-lg">Key Definitions:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {section.definitions.map((def, dIdx) => (
                        <div key={dIdx} className="text-slate-800 text-[17px]">
                          <strong className="text-slate-900">{def.term}: </strong>
                          <span dangerouslySetInnerHTML={{ __html: sanitizeContent(def.definition) }} />
                        </div>
                      ))}
                    </div>
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
