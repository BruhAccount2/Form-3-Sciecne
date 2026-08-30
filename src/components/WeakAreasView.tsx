import React, { useState, useEffect } from 'react';
import { WeakAreaRecord } from '../types';
import { getWeakAreas, clearWeakArea } from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  RotateCcw, 
  Dna, 
  Calculator,
  Layers,
  Sparkles,
  TrendingDown
} from 'lucide-react';

interface WeakAreasViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const WeakAreasView: React.FC<WeakAreasViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [weakAreas, setWeakAreas] = useState<WeakAreaRecord[]>([]);

  useEffect(() => {
    setWeakAreas(getWeakAreas());
  }, []);

  const handleClear = (chapterId: string) => {
    clearWeakArea(chapterId);
    setWeakAreas(getWeakAreas());
  };

  const highPriority = weakAreas.filter(w => w.priority === 'high');
  const mediumPriority = weakAreas.filter(w => w.priority === 'medium');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
            <button onClick={onNavigateHome} className="hover:underline">Home</button>
            <span>/</span>
            <span>Weak Areas Tracker</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-rose-500" />
            Personalized Weak Area & Mistake Tracker
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            Automatically tracks topics and question types where you made mistakes, with targeted review shortcuts.
          </p>
        </div>
      </div>

      {weakAreas.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">No Weak Areas Identified!</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
            As you practice quizzes, quick revision questions, and exam simulations, any mistakes will appear here for targeted improvement.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weakAreas.map(item => {
              const accuracy = Math.max(0, Math.round(((item.totalAttempted - item.wrongCount) / Math.max(1, item.totalAttempted)) * 100));
              return (
                <div
                  key={item.chapterId}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-2xs font-semibold ${
                        item.subject === 'math'
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                          : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}>
                        {item.subject === 'math' ? 'Mathematics' : 'Science'} Ch {item.chapterNumber}
                      </span>
                      <span className={`text-2xs font-bold px-2 py-0.5 rounded-full ${
                        item.priority === 'high'
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {accuracy}% Accuracy ({item.priority.toUpperCase()} Priority)
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Chapter {item.chapterNumber}: {sanitizeContent(item.chapterTitle)}
                    </h3>
                    
                    {item.missedTopics && item.missedTopics.length > 0 && (
                      <div className="mt-2 space-y-1">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Needs review on:</span>
                        <div className="flex flex-wrap gap-1">
                          {item.missedTopics.map((topic, tIdx) => (
                            <span key={tIdx} className="text-[10px] bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900/60">
                              {sanitizeContent(topic)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-slate-500 mt-2">
                      {item.wrongCount} mistake{item.wrongCount > 1 ? 's' : ''} recorded in {item.totalAttempted} attempt{item.totalAttempted > 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => handleClear(item.chapterId)}
                      className="text-2xs text-slate-400 hover:text-emerald-600 font-medium"
                    >
                      Mark Mastered
                    </button>

                    <button
                      onClick={() => onNavigateChapter(item.chapterId)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Revise Chapter
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
