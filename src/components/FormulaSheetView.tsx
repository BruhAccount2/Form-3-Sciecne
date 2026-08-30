import React, { useState, useMemo } from 'react';
import { FormulaItem, SubjectType } from '../types';
import { formulaeList } from '../data/formulae';
import { isBookmarked, toggleBookmark } from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  Calculator, 
  Search, 
  Copy, 
  Check, 
  Bookmark, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Dna,
  Zap
} from 'lucide-react';

interface FormulaSheetViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const FormulaSheetView: React.FC<FormulaSheetViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<'all' | SubjectType>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCalculatorFormulaId, setActiveCalculatorFormulaId] = useState<string | null>(null);

  // Interactive Quick Calculator state
  const [calcInputs, setCalcInputs] = useState<Record<string, number>>({});

  const filteredFormulae = useMemo(() => {
    return formulaeList.filter(item => {
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.formula.toLowerCase().includes(q) ||
          item.chapterTitle.toLowerCase().includes(q) ||
          item.meaningOfSymbols.some(s => s.symbol.toLowerCase().includes(q) || s.meaning.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, selectedSubject]);

  const handleCopyFormula = (id: string, formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleBookmark = (item: FormulaItem) => {
    toggleBookmark({
      type: 'formula',
      title: item.title,
      subtitle: `${item.subject === 'math' ? 'Math' : 'Science'} Ch ${item.chapterNumber}: ${item.formula}`,
      subject: item.subject,
      targetId: `formula_${item.id}`,
      chapterId: item.chapterId
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
          <button onClick={onNavigateHome} className="hover:underline">Home</button>
          <span>/</span>
          <span>Formula Sheet</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              KSSM Form 3 Formula Sheet & Equations
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1 max-w-2xl text-sm">
              Official Mathematical and Scientific formulae with exact symbol definitions, SI units, worked exam problems, and live calculation tools.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 mb-8 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search formulas by name, variable symbol, or topic..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex rounded-lg border border-slate-200 dark:border-slate-800 p-1 bg-slate-100 dark:bg-slate-950 shrink-0">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedSubject === 'all'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            All Formulae ({formulaeList.length})
          </button>
          <button
            onClick={() => setSelectedSubject('math')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedSubject === 'math'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Math ({formulaeList.filter(f => f.subject === 'math').length})
          </button>
          <button
            onClick={() => setSelectedSubject('science')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedSubject === 'science'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Dna className="w-3.5 h-3.5" />
            Science ({formulaeList.filter(f => f.subject === 'science').length})
          </button>
        </div>
      </div>

      {/* Formulae Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFormulae.map(item => {
          const isFav = isBookmarked(`formula_${item.id}`);

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-2xs font-semibold ${
                        item.subject === 'math'
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                          : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      }`}>
                        {item.subject === 'math' ? 'Mathematics' : 'Science'}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Ch {item.chapterNumber}: {item.chapterTitle}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {sanitizeContent(item.title)}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopyFormula(item.id, item.formula)}
                      title="Copy formula"
                      className="p-1.5 rounded-md text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleToggleBookmark(item)}
                      title={isFav ? 'Remove bookmark' : 'Bookmark formula'}
                      className="p-1.5 rounded-md text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Prominent Formula Display Box */}
                <div className="my-3 p-4 bg-blue-50/60 dark:bg-slate-950 rounded-lg border border-blue-200/80 dark:border-blue-900/50">
                  <div className="font-mono text-base font-bold text-blue-900 dark:text-blue-200 select-all">
                    {sanitizeContent(item.formula)}
                  </div>
                  {item.formulaInWords && (
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 italic">
                      "{sanitizeContent(item.formulaInWords)}"
                    </p>
                  )}
                </div>

                {/* Meaning of Symbols Table */}
                <div className="mb-4">
                  <h3 className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                    Symbol Definitions & SI Units:
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-950/60 rounded-lg p-2.5 border border-slate-200/60 dark:border-slate-800 text-xs space-y-1.5">
                    {item.meaningOfSymbols.map((sym, sIdx) => (
                      <div key={sIdx} className="flex items-baseline justify-between gap-2">
                        <span className="font-mono font-bold text-slate-900 dark:text-slate-100 shrink-0">
                          {sanitizeContent(sym.symbol)}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300 flex-1">
                          {sanitizeContent(sym.meaning)}
                        </span>
                        {sym.unit && (
                          <span className="text-2xs text-slate-400 dark:text-slate-500 font-mono shrink-0">
                            [{sanitizeContent(sym.unit)}]
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Worked Exam Problem */}
                <div className="mb-4 p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700/80 text-xs">
                  <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Worked Exam Question:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-2 font-medium">
                    {sanitizeContent(item.example.question)}
                  </p>
                  <div className="space-y-1 text-slate-600 dark:text-slate-400 pl-2 border-l-2 border-blue-400 dark:border-blue-600">
                    {item.example.stepByStepCalculation.map((step, stIdx) => (
                      <div key={stIdx}>{sanitizeContent(step)}</div>
                    ))}
                  </div>
                  <div className="mt-2 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                    Answer = {sanitizeContent(item.example.finalAnswerWithUnit)}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">KSSM Standard</span>
                <button
                  onClick={() => onNavigateChapter(item.chapterId)}
                  className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Chapter Notes
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
