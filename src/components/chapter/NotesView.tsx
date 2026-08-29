import React, { useState, useEffect, useRef } from 'react';
import { Chapter, NoteSection, InteractiveElement, DiagramLabel } from '../../types';
import { 
  Sparkles, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  ChevronDown, 
  BookOpen, 
  Play, 
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Video as VideoIcon, 
  Layers, 
  Eye, 
  Info, 
  ExternalLink, 
  Maximize2, 
  Film, 
  Image as ImageIcon,
  Clock,
  ChevronRight,
  Tv,
  Radio,
  Search,
  BookCheck,
  FastForward
} from 'lucide-react';

interface NotesViewProps {
  chapter: Chapter;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  chapter,
  isCompleted,
  onToggleComplete
}) => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Title Header with Accent Bar */}
      <div className="mb-8 border-b border-gray-100 dark:border-slate-800 pb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 block mb-1">
              {chapter.subject === 'science' ? 'Form 3 Science' : 'Form 3 Mathematics'} • {chapter.theme}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white mb-2">
              Chapter {chapter.chapterNumber}: {chapter.title}
            </h2>
            <div className="h-1 w-20 bg-[#2563EB] dark:bg-blue-500 rounded-full mb-3"></div>
            <p className="text-sm text-[#334155] dark:text-slate-300 leading-relaxed max-w-3xl">
              {chapter.summary}
            </p>
          </div>

          <button
            id="mark-completed-btn"
            onClick={onToggleComplete}
            className={`self-start shrink-0 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
              isCompleted
                ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                : 'border border-gray-200 bg-white text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>{isCompleted ? 'Completed ✓' : 'Mark Done'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Notice Tip */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg dark:bg-amber-950/30 dark:border-amber-500">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-yellow-800 dark:text-yellow-300 uppercase block mb-0.5">Interactive Revision Tip</span>
            <p className="text-yellow-700 dark:text-yellow-400">
              Review the structured concepts below. Test your understanding with the interactive checkpoints, formula boxes, and definitions.
            </p>
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-10">
        {chapter.notes.map((section, idx) => (
          <NoteSectionCard key={idx} section={section} />
        ))}
      </div>

      {/* Completion Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-[#2563EB] dark:bg-blue-950 dark:text-blue-400 shrink-0">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] dark:text-white">
              Finished reviewing this chapter's notes?
            </h4>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Practice exam questions or test your memory with the concept mindmap.
            </p>
          </div>
        </div>

        <button
          onClick={onToggleComplete}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            isCompleted
              ? 'bg-emerald-600 text-white'
              : 'bg-[#2563EB] text-white hover:bg-blue-700 dark:bg-blue-500'
          }`}
        >
          <Check className="h-4 w-4" />
          <span>{isCompleted ? 'Marked as Done' : 'Complete Topic'}</span>
        </button>
      </div>

    </div>
  );
};

const formatRichText = (raw: string): string => {
  if (!raw) return '';
  return raw
    // LaTeX fractions and symbols
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\approx/g, '≈')
    .replace(/\\mathbf\{([^}]+)\}/g, '<strong>$1</strong>')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\;\\Omega/g, ' Ω')
    // Display Math $$...$$
    .replace(/\$\$([^$]+)\$\$/g, '<div class="my-1 px-2.5 py-1 rounded bg-blue-50/80 dark:bg-blue-950/40 text-[#1E3A8A] dark:text-blue-300 font-mono font-bold text-[11px] border border-blue-200 dark:border-blue-900 inline-block">$1</div>')
    // Inline Math $...$
    .replace(/\$([^$]+)\$/g, '<span class="px-1.5 py-0.5 rounded bg-blue-50/60 dark:bg-blue-950/30 text-[#1E3A8A] dark:text-blue-300 font-mono font-semibold text-[11px]">$1</span>')
    // Markdown bold **...**
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-red-600 dark:text-rose-400">$1</strong>')
    // Markdown italic *...*
    .replace(/\*([^*]+)\*/g, '<em class="italic text-slate-700 dark:text-slate-300">$1</em>')
    // Multi-line breaks and bullet points
    .replace(/\n• /g, '<br /><span class="inline-block mr-1 text-[#2563EB] dark:text-blue-400">•</span>')
    .replace(/\n- /g, '<br /><span class="inline-block mr-1 text-[#2563EB] dark:text-blue-400">•</span>')
    .replace(/\n/g, '<br />');
};

const NoteSectionCard: React.FC<{ section: NoteSection }> = ({ section }) => {
  return (
    <article className="space-y-5">
      {/* Section Heading with Blue Pill Bar */}
      <h3 className="text-xl font-bold text-[#0F172A] dark:text-slate-100 mt-8 mb-3 flex items-center gap-2.5">
        <span className="w-1.5 h-6 bg-[#2563EB] dark:bg-blue-500 rounded-full inline-block shrink-0"></span>
        <span>{section.title}</span>
      </h3>

      {/* Render formatted content with structured numbered items and highlighted keywords */}
      <div className="text-sm text-[#334155] dark:text-slate-300 leading-relaxed">
        <FormattedContent content={section.content} />
      </div>

      {/* Tables (especially for Differences & Comparisons) */}
      {section.tables && section.tables.map((table, tIdx) => {
        const isComparison = 
          table.caption?.toLowerCase().includes('difference') || 
          table.caption?.toLowerCase().includes('comparison') ||
          table.caption?.toLowerCase().includes('vs') ||
          table.headers.some(h => h.toLowerCase().includes('difference') || h.toLowerCase().includes('feature') || h.toLowerCase().includes('criteria') || h.toLowerCase().includes('vs'));

        return (
          <div key={tIdx} className="my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900">
            <div className="bg-gray-50 dark:bg-slate-800/80 px-4 py-2.5 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  isComparison 
                    ? 'bg-blue-100 text-[#2563EB] dark:bg-blue-950 dark:text-blue-300' 
                    : 'bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-slate-300'
                }`}>
                  {isComparison ? 'Comparison & Differences Table' : 'Summary Table'}
                </span>
                {table.caption && (
                  <span className="text-xs font-semibold text-[#0F172A] dark:text-slate-200">
                    {table.caption}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-gray-400 dark:text-slate-500 hidden sm:inline">
                {table.rows.length} rows
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#334155] dark:text-slate-300">
                <thead className="bg-gray-100/70 text-[#0F172A] font-bold dark:bg-slate-800 dark:text-slate-100 border-b border-gray-200 dark:border-slate-700">
                  <tr>
                    {table.headers.map((h, hi) => (
                      <th key={hi} className="px-4 py-3 font-bold whitespace-nowrap">
                        <div dangerouslySetInnerHTML={{ __html: formatRichText(h) }} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {table.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white dark:bg-slate-900 hover:bg-blue-50/40 dark:hover:bg-slate-800/50' : 'bg-gray-50/50 dark:bg-slate-900/50 hover:bg-blue-50/40 dark:hover:bg-slate-800/50'}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={`px-4 py-3 leading-relaxed ${ci === 0 ? 'font-semibold text-[#0F172A] dark:text-slate-200' : ''}`}>
                          <div 
                            dangerouslySetInnerHTML={{
                              __html: formatRichText(cell)
                            }} 
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {/* Key Formulas — Clear Plain-English Word Formulations without Cryptic Symbols */}
      {section.keyFormulas && section.keyFormulas.length > 0 && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-blue-400">
            <Calculator className="h-4 w-4" />
            <span>Essential Word Formulas & Calculation Rules:</span>
          </div>

          <div className="space-y-4">
            {section.keyFormulas.map((kf, i) => (
              <div key={i} className="rounded-xl border border-blue-200 bg-white shadow-2xs overflow-hidden dark:border-blue-900/70 dark:bg-slate-900">
                {/* Formula Header */}
                <div className="bg-blue-50/90 dark:bg-blue-950/50 px-4 py-2.5 border-b border-blue-100 dark:border-blue-900/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] dark:text-white">
                    {kf.name}
                  </span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-100 text-[#2563EB] dark:bg-blue-900 dark:text-blue-300">
                    Word Formula
                  </span>
                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  {/* Big Readable Word Formula Box */}
                  <div className="rounded-lg border-2 border-blue-300/80 bg-blue-50/50 p-4 text-center dark:border-blue-800 dark:bg-blue-950/30">
                    <span className="text-[11px] font-semibold text-gray-500 dark:text-slate-400 block mb-1 uppercase tracking-wider">
                      Formula in Words
                    </span>
                    <div className="text-sm sm:text-base font-extrabold text-[#1E3A8A] dark:text-blue-300 leading-snug">
                      {kf.formulaInWords || kf.formula}
                    </div>
                    {kf.formula && kf.formulaInWords && (
                      <div className="mt-2 text-xs font-mono text-gray-500 dark:text-slate-400">
                        Short notation: {kf.formula}
                      </div>
                    )}
                  </div>

                  {/* How to calculate in numbered steps */}
                  {kf.howToUse && kf.howToUse.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 block">
                        How to calculate (Step-by-Step):
                      </span>
                      <div className="space-y-1 text-xs text-gray-700 dark:text-slate-300">
                        {kf.howToUse.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-[#2563EB] dark:bg-blue-950 dark:text-blue-300">
                              {sIdx + 1}
                            </span>
                            <span className="pt-0.5 leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Variable Explanations in Plain Words */}
                  {kf.variablesExplained && kf.variablesExplained.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 block">
                        Meaning of each term:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {kf.variablesExplained.map((v, vIdx) => {
                          const termLabel = v.term || v.symbolOrTerm || '';
                          const expLabel = v.explanation || v.meaning || '';
                          return (
                            <div key={vIdx} className="p-2.5 rounded-lg border border-gray-100 bg-gray-50/70 text-xs dark:border-slate-800 dark:bg-slate-950">
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="font-bold text-[#0F172A] dark:text-slate-100">{termLabel}</span>
                                {v.unit && (
                                  <span className="text-[10px] font-mono text-[#2563EB] dark:text-blue-400">
                                    Unit: {v.unit}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-600 dark:text-slate-400 leading-normal">
                                {expLabel}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Word Example */}
                  {kf.wordExample && (
                    <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/60 text-xs dark:border-emerald-900/60 dark:bg-emerald-950/20">
                      <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                        💡 Step-by-Step Worked Example:
                      </span>
                      <p className="text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium">
                        {kf.wordExample}
                      </p>
                    </div>
                  )}

                  {kf.note && !kf.wordExample && (
                    <p className="text-xs text-gray-500 dark:text-slate-400 italic">
                      Note: {kf.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Definitions Grid */}
      {section.definitions && section.definitions.length > 0 && (
        <div className="mt-6 space-y-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
            Syllabus Definitions:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {section.definitions.map((def, i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50 dark:border-slate-800 dark:bg-slate-900">
                <span className="text-xs font-bold text-[#0F172A] dark:text-slate-100 block mb-1">
                  {def.term}
                </span>
                <p className="text-xs text-gray-600 dark:text-slate-300 leading-normal">
                  {def.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Elements */}
      {section.interactiveElements && section.interactiveElements.length > 0 && (
        <div className="mt-6 space-y-3 pt-3 border-t border-gray-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Learning Checkpoint:</span>
          </div>

          {section.interactiveElements.map((el) => (
            <InteractiveWidget key={el.id} element={el} />
          ))}
        </div>
      )}

    </article>
  );
};

const FormattedContent: React.FC<{ content: string }> = ({ content }) => {
  // Process lines into blocks, checking for numbered items '1. ...', '2. ...'
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { num: string; text: string }[] = [];
  let inBulletList = false;
  let currentBullets: string[] = [];

  const flushNumberedList = (key: string) => {
    if (currentList.length > 0) {
      elements.push(
        <div key={key} className="my-3 space-y-2 pl-1">
          {currentList.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-xs font-bold text-[#2563EB] border border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900">
                {item.num}
              </span>
              <div 
                className="pt-0.5 leading-relaxed text-xs sm:text-sm text-[#334155] dark:text-slate-300 flex-1"
                dangerouslySetInnerHTML={{
                  __html: formatRichText(item.text)
                }}
              />
            </div>
          ))}
        </div>
      );
      currentList = [];
    }
  };

  const flushBulletList = (key: string) => {
    if (currentBullets.length > 0) {
      elements.push(
        <ul key={key} className="my-2 space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-[#334155] dark:text-slate-300">
          {currentBullets.map((bullet, idx) => (
            <li 
              key={idx}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: formatRichText(bullet)
              }}
            />
          ))}
        </ul>
      );
      currentBullets = [];
      inBulletList = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Check for numbered list item: "1. (Stuff)", "2. (Stuff)", etc.
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numberedMatch) {
      flushBulletList(`bullets-${index}`);
      currentList.push({ num: numberedMatch[1], text: numberedMatch[2] });
      return;
    }

    // If it's a bullet point: "- ..." or "* ..."
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushNumberedList(`numlist-${index}`);
      inBulletList = true;
      currentBullets.push(trimmed.substring(2));
      return;
    }

    // Sub-bullet point: "  * ..."
    if (trimmed.startsWith('◦ ') || trimmed.startsWith('• ')) {
      flushNumberedList(`numlist-${index}`);
      inBulletList = true;
      currentBullets.push(trimmed.substring(2));
      return;
    }

    // Otherwise standard paragraph or empty line
    if (!trimmed) {
      flushNumberedList(`numlist-${index}`);
      flushBulletList(`bullets-${index}`);
      return;
    }

    // Flush any ongoing lists
    flushNumberedList(`numlist-${index}`);
    flushBulletList(`bullets-${index}`);

    // If line has strong section sub-title like "- **Structure:**"
    elements.push(
      <p 
        key={`p-${index}`} 
        className="my-2 text-xs sm:text-sm leading-relaxed text-[#334155] dark:text-slate-300"
        dangerouslySetInnerHTML={{
          __html: formatRichText(trimmed)
        }}
      />
    );
  });

  flushNumberedList('final-numlist');
  flushBulletList('final-bullets');

  return <div className="space-y-1">{elements}</div>;
};

const InteractiveWidget: React.FC<{ element: InteractiveElement }> = ({ element }) => {
  const [revealed, setRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Calculator state
  const [calcInputs, setCalcInputs] = useState<Record<string, number>>(() => {
    if (!element.calculatorConfig) return {};
    const initial: Record<string, number> = {};
    element.calculatorConfig.inputs.forEach(i => {
      initial[i.name] = i.defaultValue;
    });
    return initial;
  });

  if (element.type === 'reveal' || element.type === 'flashcard') {
    return (
      <details className="group bg-white border border-gray-200 rounded-lg overflow-hidden dark:bg-slate-900 dark:border-slate-800 transition-colors">
        <summary className="list-none px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
          <div>
            <span className="text-xs font-semibold text-[#0F172A] dark:text-slate-100 block">
              {element.title}
            </span>
            {element.prompt && (
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                {element.prompt}
              </p>
            )}
          </div>
          <svg className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-5 pb-4 text-xs text-gray-600 dark:text-slate-300 border-t border-gray-100 dark:border-slate-800 pt-3 leading-relaxed">
          {element.revealedContent}
        </div>
      </details>
    );
  }

  if (element.type === 'quiz') {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 mb-1.5">
          <HelpCircle className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
          <span className="text-xs font-bold text-[#0F172A] dark:text-white">
            {element.title}
          </span>
        </div>
        <p className="text-xs font-medium text-gray-700 dark:text-slate-300 mb-3">
          {element.prompt}
        </p>

        <div className="space-y-2">
          {element.options?.map((opt, oIdx) => {
            const isChosen = selectedOption === oIdx;
            return (
              <button
                key={oIdx}
                onClick={() => setSelectedOption(oIdx)}
                className={`w-full text-left p-2.5 rounded-md border text-xs transition ${
                  isChosen
                    ? opt.isCorrect
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-600 dark:bg-emerald-950 dark:text-emerald-200 font-semibold'
                      : 'border-rose-500 bg-rose-50 text-rose-900 dark:border-rose-600 dark:bg-rose-950 dark:text-rose-200'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span>{opt.text}</span>
                  {isChosen && (
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded">
                      {opt.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  )}
                </div>
                {isChosen && (
                  <p className="mt-1.5 text-[11px] font-normal opacity-90">
                    {opt.explanation}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (element.type === 'stepper' && element.steps) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-[#0F172A] dark:text-white">
            {element.title}
          </span>
          <span className="text-[11px] font-medium text-gray-500 dark:text-slate-400">
            Step {currentStep + 1} of {element.steps.length}
          </span>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950">
          <span className="text-xs font-bold text-[#2563EB] dark:text-blue-400 block mb-1">
            {element.steps[currentStep].title}
          </span>
          <p className="text-xs text-gray-700 dark:text-slate-300 leading-relaxed">
            {element.steps[currentStep].detail}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-2.5 py-1 rounded border border-gray-200 bg-white text-xs font-medium text-gray-600 disabled:opacity-40 hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            Previous
          </button>
          <button
            disabled={currentStep === element.steps.length - 1}
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-3 py-1 rounded bg-[#2563EB] text-xs font-semibold text-white disabled:opacity-40 hover:bg-blue-700 dark:bg-blue-500"
          >
            Next Step →
          </button>
        </div>
      </div>
    );
  }

  if (element.type === 'calculator' && element.calculatorConfig) {
    const output = element.calculatorConfig.calculate(calcInputs);
    return (
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/60 dark:bg-blue-950/30">
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
          <span className="text-xs font-bold text-[#0F172A] dark:text-white">
            {element.title}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {element.calculatorConfig.inputs.map((inp) => (
            <div key={inp.name} className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600 dark:text-slate-300 flex justify-between">
                <span>{inp.label}</span>
                <span className="text-[#2563EB] dark:text-blue-400 font-bold">{calcInputs[inp.name]} {inp.unit}</span>
              </label>
              <input
                type="number"
                step={inp.step || 1}
                value={calcInputs[inp.name] || 0}
                onChange={(e) => {
                  const val = parseFloat(e.target.value) || 0;
                  setCalcInputs(prev => ({ ...prev, [inp.name]: val }));
                }}
                className="w-full rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-blue-200 bg-white p-3 dark:border-blue-900 dark:bg-slate-900">
          <span className="text-[11px] font-semibold text-gray-500 dark:text-slate-400 block mb-0.5">
            Calculated Result:
          </span>
          <div className="text-sm font-bold text-[#2563EB] dark:text-blue-300 font-mono">
            {output.result}
          </div>
          {output.steps && output.steps.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-100 dark:border-slate-800 space-y-0.5">
              {output.steps.map((st, i) => (
                <div key={i} className="text-[11px] text-gray-600 dark:text-slate-400 font-mono">
                  • {st}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (element.type === 'diagram' && element.diagramData) {
    const data = element.diagramData;
    return (
      <DiagramWidget title={element.title} description={element.description} data={data} prompt={element.prompt} />
    );
  }

  if (element.type === 'video' && element.videoData) {
    const vdata = element.videoData;
    return (
      <VideoWidget title={element.title} description={element.description} vdata={vdata} />
    );
  }

  if (element.type === 'image' && element.imageData) {
    const idata = element.imageData;
    return (
      <ImageWidget title={element.title} description={element.description} idata={idata} prompt={element.prompt} />
    );
  }

  return null;
};

const DiagramWidget: React.FC<{
  title: string;
  description?: string;
  prompt?: string;
  data: NonNullable<InteractiveElement['diagramData']>;
}> = ({ title, description, prompt, data }) => {
  const [activeLabel, setActiveLabel] = useState<DiagramLabel | null>(
    data.labels && data.labels.length > 0 ? data.labels[0] : null
  );
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-indigo-100 bg-white p-4 dark:border-indigo-900/60 dark:bg-slate-900 shadow-sm transition-all">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-bold text-[#0F172A] dark:text-white">
              {title}
            </span>
          </div>
          {description && (
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-[11px] font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 p-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
          title="Toggle Expanded View"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{isExpanded ? 'Compact' : 'Expand'}</span>
        </button>
      </div>

      {prompt && (
        <p className="text-xs font-medium text-indigo-900 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/40 px-3 py-1.5 rounded-lg mb-3">
          💡 {prompt}
        </p>
      )}

      {/* SVG Diagram Canvas Area */}
      {data.svgContent && (
        <div className={`relative overflow-hidden rounded-lg border border-gray-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 p-3 flex flex-col items-center justify-center transition-all ${
          isExpanded ? 'min-h-[380px]' : 'min-h-[220px]'
        }`}>
          <div 
            className="w-full flex justify-center items-center select-none"
            dangerouslySetInnerHTML={{ __html: data.svgContent }}
          />
          {data.caption && (
            <span className="text-[11px] text-gray-400 dark:text-slate-500 mt-2 text-center italic">
              {data.caption}
            </span>
          )}
        </div>
      )}

      {/* Interactive Labels & Anatomy Explorer */}
      {data.labels && data.labels.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
              Interactive Parts & Functions (Click to Inspect):
            </span>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
              {data.labels.length} labelled elements
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {data.labels.map((lbl) => {
              const isSelected = activeLabel?.id === lbl.id;
              return (
                <button
                  key={lbl.id}
                  onClick={() => setActiveLabel(lbl)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300 dark:ring-indigo-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {lbl.name}
                </button>
              );
            })}
          </div>

          {activeLabel && (
            <div className="p-3.5 rounded-lg border border-indigo-200 bg-indigo-50/70 dark:border-indigo-900/60 dark:bg-indigo-950/30 animate-fadeIn">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                  {activeLabel.name}
                </span>
                <span className="text-[10px] uppercase font-bold text-indigo-500 dark:text-indigo-400">
                  Textbook Concept
                </span>
              </div>
              <p className="text-xs text-indigo-950 dark:text-indigo-100 leading-relaxed">
                {activeLabel.description}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const VideoWidget: React.FC<{
  title: string;
  description?: string;
  vdata: NonNullable<InteractiveElement['videoData']>;
}> = ({ title, description, vdata }) => {
  const [mode, setMode] = useState<'simulation' | 'youtube'>('simulation');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [checkedPoints, setCheckedPoints] = useState<Record<number, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate 4 structured visual scenes based on the key learning points
  const scenes = React.useMemo(() => {
    const points = vdata.keyLearningPoints || [
      'Core biological/physical mechanism and definition',
      'Step-by-step reaction dynamics or mathematical proof',
      'Real-world applications and experimental controls',
      'SPM/PT3 exam answering techniques and marking traps'
    ];
    
    return [
      {
        tag: 'Scene 1: Fundamentals',
        title: 'Core Concept & Principles',
        summary: vdata.videoSummary || 'Understanding the primary mechanism and foundational principles of this topic.',
        keyPoint: points[0] || 'Understand the primary anatomical or physical relationship.'
      },
      {
        tag: 'Scene 2: Detailed Mechanism',
        title: 'Anatomical / Mathematical Deep-Dive',
        summary: 'Observe the dynamic interaction between components and how changes in parameters affect the system.',
        keyPoint: points[1] || 'Identify changes in pressure, current, energy or coordinates.'
      },
      {
        tag: 'Scene 3: Real Applications',
        title: 'Practical Scenarios & Calculations',
        summary: 'Applying the formulas, equations, or scientific laws to solve exam problems accurately.',
        keyPoint: points[2] || 'Apply the relevant scientific formula with correct SI units.'
      },
      {
        tag: 'Scene 4: Exam Mastery',
        title: 'SPM / PT3 Marking Scheme & Pitfalls',
        summary: 'Master the exact scoring keywords and avoid common student misconceptions.',
        keyPoint: points[3] || 'Avoid common mistakes such as unit omission or misidentifying terms.'
      }
    ];
  }, [vdata]);

  // Auto-advance scene during simulation playback
  useEffect(() => {
    if (isPlaying && mode === 'simulation') {
      const intervalDuration = Math.round(4000 / playbackSpeed);
      timerRef.current = setTimeout(() => {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
      }, intervalDuration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentScene, playbackSpeed, mode, scenes.length]);

  // Speech Narration handling
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const currentText = `${scenes[currentScene].title}. ${scenes[currentScene].summary}. Key takeaway: ${scenes[currentScene].keyPoint}`;
      const utterance = new SpeechSynthesisUtterance(currentText);
      utterance.rate = playbackSpeed;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const togglePoint = (idx: number) => {
    setCheckedPoints(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `KSSM Form 3 Science ${title}`
  )}`;

  const directYoutubeUrl = vdata.youtubeId
    ? `https://www.youtube.com/watch?v=${vdata.youtubeId}`
    : youtubeSearchUrl;

  return (
    <div className="rounded-2xl border border-rose-200/80 bg-white p-4 sm:p-5 dark:border-rose-900/40 dark:bg-slate-900 shadow-md overflow-hidden">
      {/* Header with Title and Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-sm">
              <Film className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {title}
            </span>
          </div>
          {description && (
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-slate-800/80 rounded-xl self-start sm:self-auto text-xs font-semibold">
          <button
            onClick={() => {
              setMode('simulation');
              setIsPlaying(true);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              mode === 'simulation'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => {
              setMode('youtube');
              setIsPlaying(false);
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              setIsSpeaking(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              mode === 'youtube'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            <Tv className="h-3.5 w-3.5" />
            <span>YouTube Stream</span>
          </button>
        </div>
      </div>

      {/* VIEWPORT 1: INTERACTIVE ANIMATED SIMULATION MASTERCLASS (Always Available) */}
      {mode === 'simulation' ? (
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border border-slate-800 shadow-inner">
            {/* Top Bar inside simulation viewport */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 backdrop-blur border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  <Radio className="h-2.5 w-2.5 animate-pulse text-rose-400" />
                  {scenes[currentScene].tag}
                </span>
                <span className="text-xs font-semibold text-slate-200 hidden sm:inline">
                  {scenes[currentScene].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Speech Narration Button */}
                <button
                  onClick={toggleSpeech}
                  className={`flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md transition-all ${
                    isSpeaking 
                      ? 'bg-rose-500 text-white animate-pulse' 
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                  title="Listen to voice narration"
                >
                  {isSpeaking ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                  <span>{isSpeaking ? 'Narrating...' : 'Voice'}</span>
                </button>

                {/* Speed Toggle */}
                <button
                  onClick={() => setPlaybackSpeed(s => (s === 1 ? 1.25 : s === 1.25 ? 1.5 : 1))}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300"
                  title="Change playback speed"
                >
                  {playbackSpeed}x
                </button>
              </div>
            </div>

            {/* Visual Canvas Area */}
            <div className="p-6 sm:p-8 min-h-[220px] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  Mastery Stage {currentScene + 1} of {scenes.length}
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight">
                  {scenes[currentScene].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {scenes[currentScene].summary}
                </p>
              </div>

              {/* Dynamic Highlight Card */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 backdrop-blur flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-rose-300 block mb-0.5">
                    Crucial Syllabus Takeaway:
                  </span>
                  <p className="text-xs font-medium text-slate-100 leading-snug">
                    {scenes[currentScene].keyPoint}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Controls & Timeline Scrubber */}
            <div className="px-4 py-3 bg-slate-950/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Scene Buttons */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                {scenes.map((sc, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setCurrentScene(sIdx)}
                    className={`flex-1 sm:flex-none px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      currentScene === sIdx
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    Stage {sIdx + 1}
                  </button>
                ))}
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => setCurrentScene(0)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                  title="Rewind to start"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-white" />
                      <span>Auto Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setCurrentScene((prev) => (prev + 1) % scenes.length)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                  title="Next Stage"
                >
                  <FastForward className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* VIEWPORT 2: YOUTUBE OFFICIAL STREAM WITH FAIL-SAFE DIRECT BUTTONS */
        <div className="space-y-3">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md group">
            {vdata.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${vdata.youtubeId}?rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
                <Film className="h-12 w-12 text-rose-400 mb-3" />
                <h4 className="text-sm sm:text-base font-bold mb-1">
                  Full KSSM Video Lesson
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mb-4">
                  Watch official KSSM Science teacher lessons and walkthroughs directly on YouTube.
                </p>
                <a
                  href={directYoutubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Launch Lesson on YouTube (New Tab)</span>
                </a>
              </div>
            )}
          </div>

          {/* Direct YouTube Link Fallback Bar */}
          <div className="p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-xs text-rose-950 dark:text-rose-200">
              <Info className="h-4 w-4 text-rose-600 shrink-0" />
              <span>
                If YouTube iframe says &quot;Video unavailable&quot; due to browser permissions, open directly:
              </span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={directYoutubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Open in YouTube ↗</span>
              </a>
              <a
                href={youtubeSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200 hover:bg-gray-50 text-xs font-semibold transition-all"
              >
                <Search className="h-3.5 w-3.5" />
                <span>Search DidikTV</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Key Takeaways Checklist */}
      {vdata.keyLearningPoints && vdata.keyLearningPoints.length > 0 && (
        <div className="mt-4 p-4 rounded-xl border border-gray-100 bg-gray-50/90 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-slate-300 flex items-center gap-1.5">
              <BookCheck className="h-4 w-4 text-rose-600 dark:text-rose-400" />
              Interactive Comprehension Checklist:
            </span>
            <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400">
              {Object.values(checkedPoints).filter(Boolean).length} / {vdata.keyLearningPoints.length} Mastered
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {vdata.keyLearningPoints.map((point, pIdx) => {
              const isChecked = !!checkedPoints[pIdx];
              return (
                <button
                  key={pIdx}
                  onClick={() => togglePoint(pIdx)}
                  className={`flex items-start gap-2 p-2 rounded-lg text-left text-xs transition-all border ${
                    isChecked
                      ? 'bg-rose-50 border-rose-200 text-rose-950 dark:bg-rose-950/40 dark:border-rose-800/60 dark:text-rose-100 font-medium'
                      : 'bg-white border-gray-200/80 text-gray-700 hover:border-rose-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
                  }`}
                >
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded mt-0.5 border ${
                    isChecked 
                      ? 'bg-rose-600 border-rose-600 text-white' 
                      : 'border-gray-300 dark:border-slate-600 bg-transparent'
                  }`}>
                    {isChecked && <Check className="h-3 w-3" />}
                  </span>
                  <span className="leading-snug">{point}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const ImageWidget: React.FC<{
  title: string;
  description?: string;
  prompt?: string;
  idata: NonNullable<InteractiveElement['imageData']>;
}> = ({ title, description, prompt, idata }) => {
  return (
    <div className="rounded-xl border border-sky-100 bg-white p-4 dark:border-sky-900/50 dark:bg-slate-900 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
          <ImageIcon className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-bold text-[#0F172A] dark:text-white">
          {title}
        </span>
      </div>

      {description && (
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          {description}
        </p>
      )}

      {idata.svgContent ? (
        <div 
          className="rounded-lg border border-gray-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 p-3 flex justify-center"
          dangerouslySetInnerHTML={{ __html: idata.svgContent }}
        />
      ) : idata.url ? (
        <div className="rounded-lg overflow-hidden border border-gray-100 dark:border-slate-800">
          <img src={idata.url} alt={idata.alt || title} className="w-full object-cover max-h-80" />
        </div>
      ) : null}

      {idata.caption && (
        <p className="text-[11px] text-gray-400 dark:text-slate-500 mt-2 text-center italic">
          {idata.caption}
        </p>
      )}

      {idata.details && (
        <div className="mt-3 p-3 rounded-lg border border-sky-200 bg-sky-50/60 dark:border-sky-900/50 dark:bg-sky-950/20 text-xs text-sky-950 dark:text-sky-200">
          {idata.details}
        </div>
      )}
    </div>
  );
};

