import React from 'react';
import { Chapter } from '../../types';
import { TrigSimulator, StraightLineSimulator, CircleTheoremsSimulator } from '../simulations/MathSimulations';
import { HeartSimulator, RespirationSimulator, HalfLifeSimulator } from '../simulations/ScienceSimulations';
import { Sparkles, FlaskConical, Calculator, Activity, Compass, Cpu, Layers } from 'lucide-react';

interface SimulationViewProps {
  chapter: Chapter;
}

export const SimulationView: React.FC<SimulationViewProps> = ({ chapter }) => {
  const isMath = chapter.subject === 'math';

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 dark:border-blue-900/50 dark:from-slate-900 dark:to-indigo-950/40">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
          <Sparkles className="h-4 w-4" />
          <span>Interactive KSSM Laboratory & Simulation Suite</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Chapter {chapter.chapterNumber}: {chapter.title} Simulations
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Interact with dynamic variables, geometry angles, chemical dynamics, and physical systems to reinforce your conceptual understanding without passive videos.
        </p>
      </div>

      {/* Chapter-Specific Active Simulation */}
      <div className="space-y-6">
        {/* Math Chapter Simulations */}
        {isMath && chapter.chapterNumber === 5 && <TrigSimulator />}
        {isMath && chapter.chapterNumber === 6 && <CircleTheoremsSimulator />}
        {isMath && chapter.chapterNumber === 9 && <StraightLineSimulator />}

        {/* Science Chapter Simulations */}
        {!isMath && chapter.chapterNumber === 2 && <RespirationSimulator />}
        {!isMath && chapter.chapterNumber === 3 && <HeartSimulator />}
        {!isMath && chapter.chapterNumber === 8 && <HalfLifeSimulator />}

        {/* Fallback Simulation for Other Chapters */}
        {(!isMath && ![2, 3, 8].includes(chapter.chapterNumber)) && (
          <div className="space-y-6">
            <HeartSimulator />
            <RespirationSimulator />
          </div>
        )}

        {(isMath && ![5, 6, 9].includes(chapter.chapterNumber)) && (
          <div className="space-y-6">
            <TrigSimulator />
            <StraightLineSimulator />
          </div>
        )}
      </div>
    </div>
  );
};
