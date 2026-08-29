import React from 'react';
import { Chapter } from '../../types';
import { 
  IndicesSimulator,
  StandardFormSimulator,
  ConsumerMathSimulator,
  ScaleDrawingSimulator,
  TrigSimulator,
  CircleTheoremsSimulator,
  PlansElevationsSimulator,
  LociSimulator,
  StraightLineSimulator 
} from '../simulations/MathSimulations';
import { 
  StimuliResponsesSimulator,
  RespirationSimulator,
  HeartSimulator,
  ReactivitySeriesSimulator,
  ThermochemistrySimulator,
  ElectricityTransformerSimulator,
  EnergyPowerSimulator,
  HalfLifeSimulator,
  SpaceSolarSimulator,
  SpaceExplorationSimulator 
} from '../simulations/ScienceSimulations';
import { Sparkles, FlaskConical } from 'lucide-react';

interface SimulationViewProps {
  chapter: Chapter;
}

export const SimulationView: React.FC<SimulationViewProps> = ({ chapter }) => {
  const isMath = chapter.subject === 'math';
  const chNum = chapter.chapterNumber;

  const renderSimulation = () => {
    if (isMath) {
      switch (chNum) {
        case 1: return <IndicesSimulator />;
        case 2: return <StandardFormSimulator />;
        case 3: return <ConsumerMathSimulator />;
        case 4: return <ScaleDrawingSimulator />;
        case 5: return <TrigSimulator />;
        case 6: return <CircleTheoremsSimulator />;
        case 7: return <PlansElevationsSimulator />;
        case 8: return <LociSimulator />;
        case 9: return <StraightLineSimulator />;
        default:
          return (
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 text-center space-y-2">
              <FlaskConical className="h-8 w-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                🧪 No interactive simulation available for this topic yet.
              </p>
              <p className="text-xs text-slate-500">
                Explore the Notes and Exercises in the other tabs for comprehensive coverage.
              </p>
            </div>
          );
      }
    } else {
      switch (chNum) {
        case 1: return <StimuliResponsesSimulator />;
        case 2: return <RespirationSimulator />;
        case 3: return <HeartSimulator />;
        case 4: return <ReactivitySeriesSimulator />;
        case 5: return <ThermochemistrySimulator />;
        case 6: return <ElectricityTransformerSimulator />;
        case 7: return <EnergyPowerSimulator />;
        case 8: return <HalfLifeSimulator />;
        case 9: return <SpaceSolarSimulator />;
        case 10: return <SpaceExplorationSimulator />;
        default:
          return (
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 text-center space-y-2">
              <FlaskConical className="h-8 w-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                🧪 No interactive simulation available for this topic yet.
              </p>
            </div>
          );
      }
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 dark:border-blue-900/50 dark:from-slate-900 dark:to-indigo-950/40">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
          <Sparkles className="h-4 w-4" />
          <span>Interactive Conceptual Simulator</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Chapter {chapter.chapterNumber}: {chapter.title} Interactive Lab
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Manipulate variables and observe real-time mathematical calculations, geometric properties, or scientific mechanisms.
        </p>
      </div>

      {/* Chapter-Specific Active Simulation */}
      <div>
        {renderSimulation()}
      </div>
    </div>
  );
};
