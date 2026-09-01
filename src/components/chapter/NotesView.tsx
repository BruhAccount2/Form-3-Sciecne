import React, { useState, useEffect, useRef } from 'react';
import { Chapter, NoteSection, InteractiveElement, DiagramLabel } from '../../types';
import { sanitizeContent } from '../../utils/symbolSanitizer';
import { 
  Sparkles, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  XCircle,
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
  FastForward,
  Award
} from 'lucide-react';
import { McqFeedback } from '../McqFeedback';
import { ImageViewerModal } from '../ImageViewerModal';
import { ChapterEndTest } from './ChapterEndTest';
import { getChapterQuizRecord } from '../../utils/storage';

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
  const quizRecord = getChapterQuizRecord(chapter.id);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTest = () => {
    const el = document.getElementById('chapter-end-test');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Title Header with Accent Bar */}
      <div className="mb-8 border-b border-gray-100 dark:border-slate-800 pb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 block mb-1">
              {chapter.subject === 'science' ? 'Form 3 Science' : 'Form 3 Mathematics'} • {sanitizeContent(chapter.theme)}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white mb-2">
              Chapter {chapter.chapterNumber}: {sanitizeContent(chapter.title)}
            </h2>
            <div className="h-1 w-20 bg-[#2563EB] dark:bg-blue-500 rounded-full mb-3"></div>
            <p className="text-sm text-[#334155] dark:text-slate-300 leading-relaxed max-w-3xl">
              {sanitizeContent(chapter.summary)}
            </p>
          </div>

          {quizRecord?.passed ? (
            <div className="self-start shrink-0 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>Mastered ({quizRecord.score}/15)</span>
            </div>
          ) : (
            <button
              id="scroll-to-chapter-test-btn"
              onClick={handleScrollToTest}
              className="self-start shrink-0 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-blue-200 bg-blue-50/50 text-blue-700 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300 transition cursor-pointer"
            >
              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Chapter Test (≥10 to complete)</span>
            </button>
          )}
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

      {/* Chapter-End 15-Question Assessment Test */}
      <ChapterEndTest 
        chapter={chapter}
        isCompleted={isCompleted}
        onToggleComplete={onToggleComplete}
        onScrollToTop={handleScrollToTop}
      />

      {/* Completion Banner */}
      {quizRecord?.passed ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-emerald-200 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/40">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 shrink-0">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Chapter Mastered! Score: {quizRecord.score}/15 ({quizRecord.grade})
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                You have satisfied the KSSM mastery requirement for Chapter {chapter.chapterNumber}.
              </p>
            </div>
          </div>

          <button
            onClick={handleScrollToTest}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition cursor-pointer"
          >
            <span>Review / Retake Test</span>
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/40">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-[#2563EB] dark:bg-blue-950 dark:text-blue-400 shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] dark:text-white">
                Ready to Complete Chapter {chapter.chapterNumber}?
              </h4>
              <p className="text-xs text-gray-600 dark:text-slate-400">
                Pass the 15-question Chapter Test above with at least 10/15 to earn mastery and mark this chapter complete.
              </p>
            </div>
          </div>

          <button
            onClick={handleScrollToTest}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#2563EB] text-white hover:bg-blue-700 dark:bg-blue-600 transition shadow-xs cursor-pointer"
          >
            <span>Take Chapter Test</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

    </div>
  );
};

const formatRichText = (raw: string): string => {
  if (!raw) return '';
  const sanitized = sanitizeContent(raw);
  return sanitized
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
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
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
    const correctOptIdx = element.options?.findIndex(o => o.isCorrect) ?? -1;
    const correctOpt = correctOptIdx >= 0 && element.options ? element.options[correctOptIdx] : null;
    const chosenOpt = selectedOption !== null && element.options ? element.options[selectedOption] : null;

    return (
      <div className="rounded-xl border border-blue-200/80 bg-white dark:bg-slate-900 dark:border-slate-800 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <HelpCircle className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">
              {element.title}
            </span>
          </div>
          <span className="text-2xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
            Interactive Checkpoint
          </span>
        </div>

        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
          {element.prompt}
        </p>

        <div className="space-y-2.5">
          {element.options?.map((opt, oIdx) => {
            const isChosen = selectedOption === oIdx;
            const letter = String.fromCharCode(65 + oIdx);

            let classes = 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50';

            if (!isSubmitted) {
              if (isChosen) {
                classes = 'border-blue-600 bg-blue-50/80 text-blue-950 dark:bg-blue-950/60 dark:text-blue-100 ring-2 ring-blue-500 font-semibold';
              }
            } else {
              if (opt.isCorrect) {
                classes = 'border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
              } else if (isChosen) {
                classes = 'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/60 dark:text-rose-200 ring-1 ring-rose-500';
              } else {
                classes = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-500';
              }
            }

            return (
              <button
                key={oIdx}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(oIdx)}
                className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${classes}`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-xs shrink-0 mt-0.5">
                    {letter}.
                  </span>
                  <span>{opt.text}</span>
                </div>
                {isSubmitted && opt.isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                {isSubmitted && isChosen && !opt.isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Action button */}
        {!isSubmitted ? (
          <div className="pt-2 flex justify-end">
            <button
              disabled={selectedOption === null}
              onClick={() => setIsSubmitted(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 transition cursor-pointer"
            >
              <span>Submit Answer</span>
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            {correctOpt && chosenOpt && (
              <McqFeedback
                isCorrect={Boolean(chosenOpt.isCorrect)}
                selectedOptionLetter={String.fromCharCode(65 + (selectedOption ?? 0))}
                selectedOptionText={chosenOpt.text}
                correctOptionLetter={String.fromCharCode(65 + correctOptIdx)}
                correctOptionText={correctOpt.text}
                explanation={chosenOpt.explanation || correctOpt.explanation || 'Review the chapter notes above to reinforce this concept.'}
              />
            )}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedOption(null);
                  setIsSubmitted(false);
                }}
                className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-2xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Try Again</span>
              </button>
            </div>
          </div>
        )}
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

  if (element.type === 'image' && element.imageData) {
    const idata = element.imageData;
    return (
      <ImageWidget title={element.title} description={element.description} idata={idata} prompt={element.prompt} />
    );
  }

  if (element.type === 'simulation' && element.simulationData) {
    const sdata = element.simulationData;
    return (
      <InteractiveSimulationWidget title={element.title} description={element.description} sdata={sdata} />
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
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <div className="rounded-xl border border-indigo-100 bg-white p-4 dark:border-indigo-900/60 dark:bg-slate-900 shadow-sm">
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

        {data.svgContent && (
          <button
            onClick={() => setIsViewerOpen(true)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Inspect Diagram Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {prompt && (
        <p className="text-xs font-medium text-indigo-900 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/40 px-3 py-1.5 rounded-lg mb-3">
          💡 {prompt}
        </p>
      )}

      {/* SVG Diagram Canvas Area */}
      {data.svgContent && (
        <div className="relative overflow-hidden rounded-lg border border-gray-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 p-3 flex flex-col items-center justify-center min-h-[220px]">
          <div 
            onClick={() => setIsViewerOpen(true)}
            className="w-full flex justify-center items-center select-none cursor-pointer hover:opacity-95 transition"
            dangerouslySetInnerHTML={{ __html: data.svgContent }} 
          />
          <button
            onClick={() => setIsViewerOpen(true)}
            className="mt-2 text-2xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Maximize2 className="w-3 h-3" />
            Click diagram to expand & zoom
          </button>
          {data.caption && (
            <span className="text-[11px] text-gray-400 dark:text-slate-500 mt-1 text-center italic">
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
                  Concept Guide
                </span>
              </div>
              <p className="text-xs text-indigo-950 dark:text-indigo-100 leading-relaxed">
                {activeLabel.description}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modal Inspector */}
      {data.svgContent && (
        <ImageViewerModal
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
          title={title}
          subtitle={description || 'Detailed Diagram Inspection'}
          svgContent={data.svgContent}
        />
      )}
    </div>
  );
};

const InteractiveSimulationWidget: React.FC<{
  title: string;
  description?: string;
  sdata: NonNullable<InteractiveElement['simulationData']>;
}> = ({ title, description, sdata }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkedPoints, setCheckedPoints] = useState<Record<number, boolean>>({});

  const points = sdata.keyPoints || [
    'Understand the fundamental concept, definition, and scientific principles.',
    'Trace step-by-step mechanisms, changes in variables, and dynamic reactions.',
    'Apply formulas and quantitative relationships with standard SI units.',
    'Master exact KSSM marking keywords and avoid common examination pitfalls.'
  ];

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-5 dark:border-indigo-900/60 dark:bg-slate-900 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Interactive Visual Masterclass & Conceptual Simulator
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 text-xs font-bold">
          <Sparkles className="h-4 w-4" />
          <span>Interactive Model</span>
        </div>
      </div>

      {description && (
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      )}

      {/* Summary Box */}
      {sdata.summary && (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
          {sdata.summary}
        </div>
      )}

      {/* Interactive Comprehension Checklist */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Key Syllabus Checkpoints:
          </span>
          <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
            {Object.values(checkedPoints).filter(Boolean).length} / {points.length} Mastered
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {points.map((pt, pIdx) => {
            const isChecked = !!checkedPoints[pIdx];
            return (
              <button
                key={pIdx}
                onClick={() => setCheckedPoints(prev => ({ ...prev, [pIdx]: !prev[pIdx] }))}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl text-left text-xs transition border ${
                  isChecked
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800/60 dark:text-emerald-100 font-medium'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
                }`}
              >
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded mt-0.5 border ${
                  isChecked
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-300 dark:border-slate-600 bg-transparent'
                }`}>
                  {isChecked && <Check className="h-3 w-3" />}
                </span>
                <span className="leading-snug">{pt}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ImageWidget: React.FC<{
  title: string;
  description?: string;
  prompt?: string;
  idata: NonNullable<InteractiveElement['imageData']>;
}> = ({ title, description, prompt, idata }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <div className="rounded-xl border border-sky-100 bg-white p-4 dark:border-sky-900/50 dark:bg-slate-900 shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
            <ImageIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-bold text-[#0F172A] dark:text-white">
            {title}
          </span>
        </div>

        {(idata.svgContent || idata.url) && (
          <button
            onClick={() => setIsViewerOpen(true)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Inspect Image Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {description && (
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          {description}
        </p>
      )}

      {idata.svgContent ? (
        <div 
          onClick={() => setIsViewerOpen(true)}
          className="rounded-lg border border-gray-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 p-3 flex flex-col items-center justify-center cursor-pointer hover:opacity-95 transition"
        >
          <div dangerouslySetInnerHTML={{ __html: idata.svgContent }} />
          <span className="mt-2 text-2xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
            <Maximize2 className="w-3 h-3" />
            Click diagram to expand & zoom
          </span>
        </div>
      ) : idata.url ? (
        <div 
          onClick={() => setIsViewerOpen(true)}
          className="rounded-lg overflow-hidden border border-gray-100 dark:border-slate-800 cursor-pointer"
        >
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

      {/* Modal Inspector */}
      {(idata.svgContent || idata.url) && (
        <ImageViewerModal
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
          title={title}
          subtitle={description || 'Detailed Visual Inspection'}
          svgContent={idata.svgContent}
          imageSrc={idata.url}
        />
      )}
    </div>
  );
};

