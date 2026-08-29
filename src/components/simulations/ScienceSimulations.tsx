import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Wind, 
  Flame, 
  Zap, 
  Radio, 
  Sun, 
  Layers, 
  Activity, 
  RotateCcw, 
  Sliders, 
  Sparkles,
  Info,
  CheckCircle2,
  Eye,
  Thermometer,
  Compass,
  Globe
} from 'lucide-react';

// =========================================================================
// 1. STIMULI & RESPONSES SIMULATOR (Science Chapter 1)
// =========================================================================
export const StimuliResponsesSimulator: React.FC = () => {
  const [tropismType, setTropismType] = useState<'phototropism' | 'geotropism' | 'reflex'>('phototropism');
  const [lightPosition, setLightPosition] = useState<'left' | 'top' | 'right'>('right');

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 dark:border-emerald-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Stimuli & Responses Simulator (KSSM Science Chapter 1)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Plant Tropisms & Human Reflex Arc
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setTropismType('phototropism')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-center ${
            tropismType === 'phototropism' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Phototropism (Light)
        </button>
        <button
          onClick={() => setTropismType('geotropism')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-center ${
            tropismType === 'geotropism' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Geotropism (Gravity)
        </button>
        <button
          onClick={() => setTropismType('reflex')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-center ${
            tropismType === 'reflex' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Reflex Arc Pathway
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[240px]">
          {tropismType === 'phototropism' && (
            <div className="text-center space-y-3">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setLightPosition('left')}
                  className={`px-2.5 py-1 text-xs rounded font-bold ${lightPosition === 'left' ? 'bg-amber-500 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}
                >
                  ☀️ Light Left
                </button>
                <button
                  onClick={() => setLightPosition('top')}
                  className={`px-2.5 py-1 text-xs rounded font-bold ${lightPosition === 'top' ? 'bg-amber-500 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}
                >
                  ☀️ Light Top
                </button>
                <button
                  onClick={() => setLightPosition('right')}
                  className={`px-2.5 py-1 text-xs rounded font-bold ${lightPosition === 'right' ? 'bg-amber-500 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}
                >
                  ☀️ Light Right
                </button>
              </div>

              <svg viewBox="0 0 200 140" className="w-44 h-auto">
                {/* Soil & pot */}
                <rect x="60" y="90" width="80" height="40" rx="4" fill="#78350f" />
                {/* Stem bending */}
                {lightPosition === 'right' && (
                  <path d="M 100,90 Q 100,50 140,30" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
                )}
                {lightPosition === 'left' && (
                  <path d="M 100,90 Q 100,50 60,30" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
                )}
                {lightPosition === 'top' && (
                  <path d="M 100,90 L 100,25" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
                )}
              </svg>
            </div>
          )}

          {tropismType === 'geotropism' && (
            <div className="text-center space-y-2">
              <svg viewBox="0 0 220 140" className="w-48 h-auto">
                <rect x="20" y="50" width="80" height="40" fill="#78350f" rx="4" />
                {/* Shoot bends upward (negative geotropism) */}
                <path d="M 100,60 Q 140,60 140,20" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
                <text x="145" y="25" fill="#22c55e" fontSize="9" fontWeight="bold">Shoot (-ve Geotropism)</text>
                {/* Root bends downward (positive geotropism) */}
                <path d="M 100,80 Q 140,80 140,125" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
                <text x="145" y="125" fill="#b45309" fontSize="9" fontWeight="bold">Root (+ve Geotropism)</text>
              </svg>
            </div>
          )}

          {tropismType === 'reflex' && (
            <div className="text-center space-y-2">
              <svg viewBox="0 0 260 140" className="w-56 h-auto">
                {/* Stimulus (Hot object) */}
                <circle cx="30" cy="70" r="14" fill="#ef4444" />
                <text x="30" y="74" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Flame</text>
                {/* Receptor to sensory neurone */}
                <line x1="45" y1="70" x2="100" y2="70" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
                <text x="70" y="62" fill="#3b82f6" fontSize="8" fontWeight="bold" textAnchor="middle">Sensory</text>
                {/* Spinal Cord (Relay neurone) */}
                <rect x="100" y="45" width="60" height="50" rx="8" fill="#8b5cf6" />
                <text x="130" y="73" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Spinal Cord</text>
                {/* Motor neurone to Effector */}
                <line x1="160" y1="70" x2="215" y2="70" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                <text x="190" y="62" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Motor</text>
                {/* Effector Muscle */}
                <rect x="215" y="55" width="35" height="30" rx="4" fill="#f59e0b" />
                <text x="232" y="73" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Muscle</text>
              </svg>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-2 text-xs">
          {tropismType === 'phototropism' && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 space-y-1">
              <span className="font-bold block">Auxin Hormone Action:</span>
              <p>Auxin accumulates on the shaded side of the shoot tip, causing cell elongation on the shaded side, which bends the shoot towards light (Positive Phototropism).</p>
            </div>
          )}

          {tropismType === 'geotropism' && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 space-y-1">
              <span className="font-bold block">Geotropism Direction:</span>
              <p>• Shoots grow away from gravity (Negative Geotropism) to reach sunlight.</p>
              <p>• Roots grow towards gravity (Positive Geotropism) to anchor and absorb water.</p>
            </div>
          )}

          {tropismType === 'reflex' && (
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 text-purple-900 dark:text-purple-200 space-y-1">
              <span className="font-bold block">Reflex Arc Sequence:</span>
              <p className="font-mono">Stimulus → Receptor → Sensory Neurone → Relay Neurone (Spinal Cord) → Motor Neurone → Effector (Muscle contracts instantly without brain delay).</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. RESPIRATION SIMULATOR (Science Chapter 2)
// =========================================================================
export const RespirationSimulator: React.FC = () => {
  const [phase, setPhase] = useState<'inhalation' | 'exhalation'>('inhalation');

  return (
    <div className="rounded-2xl border border-cyan-200 bg-white p-5 dark:border-cyan-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Interactive Respiratory Simulation (KSSM Science Chapter 2)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Inhalation vs Exhalation Biomechanical Model
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPhase('inhalation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              phase === 'inhalation' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Inhalation (Tarik)
          </button>
          <button
            onClick={() => setPhase('exhalation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              phase === 'exhalation' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Exhalation (Hembus)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[240px]">
          <svg viewBox="0 0 280 220" className="w-full max-w-xs h-auto select-none">
            <line x1="140" y1="20" x2="140" y2="70" stroke="#0284c7" strokeWidth="12" strokeLinecap="round" />
            <line x1="140" y1="70" x2="105" y2="100" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />
            <line x1="140" y1="70" x2="175" y2="100" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />

            <ellipse
              cx="95"
              cy="125"
              rx={phase === 'inhalation' ? 44 : 32}
              ry={phase === 'inhalation' ? 52 : 40}
              fill={phase === 'inhalation' ? '#38bdf8' : '#7dd3fc'}
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            <ellipse
              cx="185"
              cy="125"
              rx={phase === 'inhalation' ? 44 : 32}
              ry={phase === 'inhalation' ? 52 : 40}
              fill={phase === 'inhalation' ? '#38bdf8' : '#7dd3fc'}
              stroke="#0284c7"
              strokeWidth="2.5"
            />

            {phase === 'inhalation' ? (
              <path d="M 50,195 Q 140,200 230,195" fill="none" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />
            ) : (
              <path d="M 50,200 Q 140,160 230,200" fill="none" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />
            )}
            <text x="140" y="215" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">
              Diaphragm: {phase === 'inhalation' ? 'Contracts & Flattens' : 'Relaxes & Curves Upward (Dome)'}
            </text>
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900 text-slate-800 dark:text-slate-200 space-y-1.5">
            <span className="font-bold text-cyan-900 dark:text-cyan-300 block text-sm">
              {phase === 'inhalation' ? 'Inhalation Mechanism' : 'Exhalation Mechanism'}
            </span>
            <p>• External Intercostal: <strong>{phase === 'inhalation' ? 'CONTRACTS (Rib cage UP & OUT)' : 'RELAXES (Rib cage DOWN & IN)'}</strong></p>
            <p>• Diaphragm: <strong>{phase === 'inhalation' ? 'Contracts and FLATTENS' : 'Relaxes and DOMES UPWARD'}</strong></p>
            <p>• Thoracic Volume: <strong>{phase === 'inhalation' ? 'INCREASES' : 'DECREASES'}</strong></p>
            <p>• Thoracic Pressure: <strong>{phase === 'inhalation' ? 'DECREASES below atmospheric pressure' : 'INCREASES above atmospheric pressure'}</strong></p>
            <p>• Air Flow: <strong>{phase === 'inhalation' ? 'Forced INTO lungs' : 'Forced OUT of lungs'}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. HEART & CIRCULATION (Science Chapter 3)
// =========================================================================
export const HeartSimulator: React.FC = () => {
  const [bpm, setBpm] = useState<number>(75);
  const [selectedChamber, setSelectedChamber] = useState<string>('lv');
  const [pulse, setPulse] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p);
    }, (60 / bpm) * 500);
    return () => clearInterval(interval);
  }, [bpm]);

  const chamberDetails: Record<string, { name: string; blood: string; description: string }> = {
    ra: {
      name: 'Right Atrium (RA)',
      blood: 'Deoxygenated Blood',
      description: 'Receives deoxygenated blood from the upper and lower body via Vena Cava and passes it to RV.'
    },
    rv: {
      name: 'Right Ventricle (RV)',
      blood: 'Deoxygenated Blood',
      description: 'Pumps deoxygenated blood to the lungs via Pulmonary Artery for oxygenation.'
    },
    la: {
      name: 'Left Atrium (LA)',
      blood: 'Oxygenated Blood',
      description: 'Receives oxygenated blood from lungs via Pulmonary Veins.'
    },
    lv: {
      name: 'Left Ventricle (LV)',
      blood: 'Oxygenated Blood',
      description: 'Has the thickest muscular wall to pump oxygenated blood to the whole body via the Aorta.'
    }
  };

  return (
    <div className="rounded-2xl border border-rose-200 bg-white p-5 dark:border-rose-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Cardiovascular System Simulator (KSSM Science Chapter 3)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Human Heart Chambers & Double Circulation
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
          <Heart className={`h-4 w-4 text-rose-600 ${pulse ? 'scale-125' : 'scale-100'} transition-transform duration-200`} />
          <span>Live Pulse: {bpm} BPM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[240px]">
          <svg viewBox="0 0 280 220" className="w-full max-w-xs h-auto select-none">
            {/* RA */}
            <rect
              x="50"
              y="70"
              width="80"
              height="60"
              rx="10"
              fill={selectedChamber === 'ra' ? '#2563eb' : '#60a5fa'}
              stroke="#1e40af"
              strokeWidth="2"
              className="cursor-pointer"
              onClick={() => setSelectedChamber('ra')}
            />
            <text x="90" y="105" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">RA</text>

            {/* LA */}
            <rect
              x="150"
              y="70"
              width="80"
              height="60"
              rx="10"
              fill={selectedChamber === 'la' ? '#dc2626' : '#f87171'}
              stroke="#991b1b"
              strokeWidth="2"
              className="cursor-pointer"
              onClick={() => setSelectedChamber('la')}
            />
            <text x="190" y="105" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">LA</text>

            {/* RV */}
            <rect
              x="50"
              y="140"
              width="80"
              height="70"
              rx="10"
              fill={selectedChamber === 'rv' ? '#1d4ed8' : '#93c5fd'}
              stroke="#1e40af"
              strokeWidth="2"
              className="cursor-pointer"
              onClick={() => setSelectedChamber('rv')}
            />
            <text x="90" y="180" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">RV</text>

            {/* LV (Thickest wall) */}
            <rect
              x="150"
              y="140"
              width="80"
              height="70"
              rx="10"
              fill={selectedChamber === 'lv' ? '#b91c1c' : '#fca5a5'}
              stroke="#991b1b"
              strokeWidth="4"
              className="cursor-pointer"
              onClick={() => setSelectedChamber('lv')}
            />
            <text x="190" y="180" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">LV (Thick Wall)</text>
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-3">
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs space-y-1.5">
            <span className="font-bold text-rose-900 dark:text-rose-200 block text-sm">
              {chamberDetails[selectedChamber].name}
            </span>
            <div className="font-semibold text-rose-800 dark:text-rose-300">
              Type: {chamberDetails[selectedChamber].blood}
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              {chamberDetails[selectedChamber].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. REACTIVITY OF METALS (Science Chapter 4)
// =========================================================================
export const ReactivitySeriesSimulator: React.FC = () => {
  const [selectedMetal, setSelectedMetal] = useState<string>('Mg');

  const metals: Record<string, { name: string; reactivity: string; oxygenReaction: string; carbonExtraction: boolean }> = {
    K: { name: 'Potassium (K)', reactivity: 'Extremely Vigorous', oxygenReaction: 'Burns intensely with lilac flame', carbonExtraction: false },
    Na: { name: 'Sodium (Na)', reactivity: 'Very Vigorous', oxygenReaction: 'Burns vigorously with yellow flame', carbonExtraction: false },
    Ca: { name: 'Calcium (Ca)', reactivity: 'Vigorous', oxygenReaction: 'Burns with bright red-brick flame', carbonExtraction: false },
    Mg: { name: 'Magnesium (Mg)', reactivity: 'Very Fast', oxygenReaction: 'Burns with dazzling white flame', carbonExtraction: false },
    Al: { name: 'Aluminium (Al)', reactivity: 'Moderate / Protective oxide', oxygenReaction: 'Burns when powdered with white sparks', carbonExtraction: false },
    C: { name: 'Carbon (C) [Reference]', reactivity: 'Non-metal reducing agent', oxygenReaction: 'Burns to form CO₂', carbonExtraction: true },
    Zn: { name: 'Zinc (Zn)', reactivity: 'Moderate', oxygenReaction: 'Burns steadily, yellow when hot, white when cold', carbonExtraction: true },
    Fe: { name: 'Iron (Fe)', reactivity: 'Slow', oxygenReaction: 'Glows brightly with golden sparks', carbonExtraction: true },
    Sn: { name: 'Tin (Sn)', reactivity: 'Slow', oxygenReaction: 'Glows mildly with oxygen', carbonExtraction: true },
    Pb: { name: 'Lead (Pb)', reactivity: 'Very Slow', oxygenReaction: 'Glows faintly with red-orange heat', carbonExtraction: true },
    Cu: { name: 'Copper (Cu)', reactivity: 'No flame / Surface glow', oxygenReaction: 'Surface blackens (Copper(II) oxide)', carbonExtraction: true }
  };

  return (
    <div className="rounded-2xl border border-orange-200 bg-white p-5 dark:border-orange-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Reactivity Series Simulator (KSSM Science Chapter 4)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Reactivity Series of Metals & Extraction by Carbon
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {Object.keys(metals).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedMetal(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedMetal === key
                ? key === 'C' ? 'bg-slate-800 text-white' : 'bg-orange-600 text-white'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {metals[key].name}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900 text-xs space-y-2">
        <span className="text-sm font-bold text-orange-950 dark:text-orange-200 block">
          {metals[selectedMetal].name} Properties
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800 dark:text-slate-200">
          <div>• Reactivity with Oxygen: <strong>{metals[selectedMetal].reactivity}</strong></div>
          <div>• Flame / Glow Observation: <strong>{metals[selectedMetal].oxygenReaction}</strong></div>
          <div className="sm:col-span-2">
            • Extraction Method:{' '}
            <strong>
              {metals[selectedMetal].carbonExtraction
                ? 'Can be extracted by Carbon Reduction (e.g. in Blast Furnace)'
                : 'Must be extracted by Electrolysis of molten ore (Reactivity higher than Carbon)'}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 5. THERMOCHEMISTRY (Science Chapter 5)
// =========================================================================
export const ThermochemistrySimulator: React.FC = () => {
  const [reactionType, setReactionType] = useState<'exothermic' | 'endothermic'>('exothermic');

  return (
    <div className="rounded-2xl border border-red-200 bg-white p-5 dark:border-red-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
            Thermochemistry Simulator (KSSM Science Chapter 5)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Exothermic (Hot Pack) vs Endothermic (Cold Pack) Energy Profiles
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setReactionType('exothermic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              reactionType === 'exothermic' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Exothermic (Heat Released)
          </button>
          <button
            onClick={() => setReactionType('endothermic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              reactionType === 'endothermic' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Endothermic (Heat Absorbed)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[220px]">
          <svg viewBox="0 0 260 160" className="w-full max-w-xs h-auto select-none">
            {/* Axes */}
            <line x1="30" y1="140" x2="240" y2="140" stroke="#64748b" strokeWidth="2" />
            <line x1="30" y1="140" x2="30" y2="20" stroke="#64748b" strokeWidth="2" />
            <text x="35" y="25" fill="#64748b" fontSize="9" fontWeight="bold">Energy (H)</text>

            {reactionType === 'exothermic' ? (
              <g>
                <line x1="40" y1="50" x2="110" y2="50" stroke="#ef4444" strokeWidth="3" />
                <text x="45" y="42" fill="#ef4444" fontSize="9" fontWeight="bold">Reactants</text>
                <path d="M 110,50 Q 140,20 160,110" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="160" y1="110" x2="230" y2="110" stroke="#10b981" strokeWidth="3" />
                <text x="175" y="102" fill="#10b981" fontSize="9" fontWeight="bold">Products</text>
                <line x1="200" y1="50" x2="200" y2="110" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="205" y="80" fill="#ef4444" fontSize="9" fontWeight="bold">-ΔH (Heat Released)</text>
              </g>
            ) : (
              <g>
                <line x1="40" y1="110" x2="110" y2="110" stroke="#3b82f6" strokeWidth="3" />
                <text x="45" y="102" fill="#3b82f6" fontSize="9" fontWeight="bold">Reactants</text>
                <path d="M 110,110 Q 140,20 160,50" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="160" y1="50" x2="230" y2="50" stroke="#10b981" strokeWidth="3" />
                <text x="175" y="42" fill="#10b981" fontSize="9" fontWeight="bold">Products</text>
                <line x1="200" y1="110" x2="200" y2="50" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="205" y="80" fill="#3b82f6" fontSize="9" fontWeight="bold">+ΔH (Heat Absorbed)</text>
              </g>
            )}
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-2 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="font-bold text-slate-900 dark:text-white block">
              {reactionType === 'exothermic' ? 'Exothermic Reaction Summary' : 'Endothermic Reaction Summary'}
            </span>
            <p>• Surrounding Temperature: <strong>{reactionType === 'exothermic' ? 'RISES (Becomes Hot)' : 'DROPS (Becomes Cold)'}</strong></p>
            <p>• Total Energy: <strong>{reactionType === 'exothermic' ? 'Reactants Energy > Products Energy (-ΔH)' : 'Products Energy > Reactants Energy (+ΔH)'}</strong></p>
            <p>• Everyday Application: <strong>{reactionType === 'exothermic' ? 'Instant Hot Pack, Combustion, Neutralisation' : 'Instant Cold Pack (Ammonium Nitrate + Water), Photosynthesis'}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 6. ELECTRICITY & TRANSFORMERS (Science Chapter 6)
// =========================================================================
export const ElectricityTransformerSimulator: React.FC = () => {
  const [np, setNp] = useState<number>(100); // Primary turns
  const [ns, setNs] = useState<number>(400); // Secondary turns
  const [vp, setVp] = useState<number>(240); // Primary Voltage

  const vs = (ns / np) * vp;
  const isStepUp = ns > np;

  return (
    <div className="rounded-2xl border border-yellow-200 bg-white p-5 dark:border-yellow-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
            Transformer Simulator (KSSM Science Chapter 6)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Step-Up vs Step-Down Transformers: Vp/Vs = Np/Ns
          </h3>
        </div>
        <div className="text-xs font-bold px-3 py-1 rounded-lg bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">
          {isStepUp ? 'Step-Up Transformer' : 'Step-Down Transformer'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-6 space-y-3">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Primary Turns (Np):</span>
              <span className="font-bold text-yellow-600 dark:text-yellow-400">{np} turns</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="50"
              value={np}
              onChange={(e) => setNp(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-yellow-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Secondary Turns (Ns):</span>
              <span className="font-bold text-yellow-600 dark:text-yellow-400">{ns} turns</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="50"
              value={ns}
              onChange={(e) => setNs(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-yellow-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Primary Input Voltage (Vp):</span>
              <span className="font-bold text-yellow-600 dark:text-yellow-400">{vp} V</span>
            </div>
            <input
              type="range"
              min="12"
              max="240"
              step="12"
              value={vp}
              onChange={(e) => setVp(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-yellow-600"
            />
          </div>
        </div>

        <div className="lg:col-span-6 p-4 rounded-xl bg-yellow-50/60 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-900 text-xs space-y-2 font-mono">
          <span className="font-bold text-yellow-900 dark:text-yellow-200 block text-sm font-sans">
            Transformer Ratio Output:
          </span>
          <div>• Ns / Np = {ns} / {np} = <strong>{(ns / np).toFixed(2)}</strong></div>
          <div>• Secondary Output Voltage (Vs) = (Ns/Np) × Vp = <strong>{vs.toFixed(1)} V</strong></div>
          <div className="pt-1 font-sans text-slate-700 dark:text-slate-300">
            {isStepUp
              ? '✅ Ns > Np → Output voltage increases (Step-Up used at Power Stations).'
              : '✅ Ns < Np → Output voltage decreases (Step-Down used in Mobile Chargers).'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 7. ENERGY AND POWER (Science Chapter 7)
// =========================================================================
export const EnergyPowerSimulator: React.FC = () => {
  const [mass, setMass] = useState<number>(2); // kg
  const [height, setHeight] = useState<number>(5); // m
  const [velocity, setVelocity] = useState<number>(6); // m/s
  const g = 9.81;

  const ep = mass * g * height;
  const ek = 0.5 * mass * Math.pow(velocity, 2);

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 dark:border-emerald-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Energy & Power Simulator (KSSM Science Chapter 7)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Gravitational Potential (Ep = mgh) & Kinetic Energy (Ek = ½mv²)
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Mass (m): {mass} kg</span>
          <input
            type="range"
            min="1"
            max="10"
            value={mass}
            onChange={(e) => setMass(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600 mt-1"
          />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Height (h): {height} m</span>
          <input
            type="range"
            min="1"
            max="20"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600 mt-1"
          />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Velocity (v): {velocity} m/s</span>
          <input
            type="range"
            min="1"
            max="15"
            value={velocity}
            onChange={(e) => setVelocity(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600 mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs">
          <span className="font-bold text-emerald-900 dark:text-emerald-200 text-sm block">Gravitational Potential Energy (Ep)</span>
          <div className="text-xl font-bold font-mono text-emerald-800 dark:text-emerald-300 mt-1">
            Ep = {ep.toFixed(2)} J
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-1 font-mono">Formula: {mass} kg × 9.81 m/s² × {height} m</p>
        </div>

        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs">
          <span className="font-bold text-blue-900 dark:text-blue-200 text-sm block">Kinetic Energy (Ek)</span>
          <div className="text-xl font-bold font-mono text-blue-800 dark:text-blue-300 mt-1">
            Ek = {ek.toFixed(2)} J
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-1 font-mono">Formula: ½ × {mass} kg × ({velocity} m/s)²</p>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 8. HALF-LIFE DECAY (Science Chapter 8)
// =========================================================================
export const HalfLifeSimulator: React.FC = () => {
  const [halfLifeTime, setHalfLifeTime] = useState<number>(5);
  const [elapsedTime, setElapsedTime] = useState<number>(10);
  const [initialNuclei] = useState<number>(1000);

  const numHalfLives = elapsedTime / halfLifeTime;
  const remainingNuclei = Math.round(initialNuclei * Math.pow(0.5, numHalfLives));
  const percentageRemaining = ((remainingNuclei / initialNuclei) * 100).toFixed(1);

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-5 dark:border-amber-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Interactive Radioactivity Simulator (KSSM Science Chapter 8)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Half-Life (T½) Exponential Radioactive Decay
          </h3>
        </div>
        <div className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
          N = N₀ × (½)ⁿ
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800 min-h-[220px]">
          <div className="text-xs font-bold text-slate-300 mb-2 flex items-center justify-between w-full px-2">
            <span>Chamber ({remainingNuclei} undecayed / {initialNuclei})</span>
            <span className="text-amber-400 font-mono">{percentageRemaining}% Active</span>
          </div>

          <div className="grid grid-cols-10 gap-1.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            {Array.from({ length: 100 }).map((_, idx) => {
              const isDecayed = idx >= (remainingNuclei / initialNuclei) * 100;
              return (
                <div
                  key={idx}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    isDecayed ? 'bg-slate-700 opacity-40' : 'bg-amber-400 shadow-xs shadow-amber-500/50'
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-3">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Half-Life Duration (T½):</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">{halfLifeTime} days</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={halfLifeTime}
              onChange={(e) => setHalfLifeTime(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-amber-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Elapsed Time (t):</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">{elapsedTime} days</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={elapsedTime}
              onChange={(e) => setElapsedTime(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-amber-600"
            />
          </div>

          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs font-mono space-y-1">
            <div>• Half-lives elapsed (n) = {numHalfLives.toFixed(2)}</div>
            <div>• Remaining = {remainingNuclei} nuclei ({percentageRemaining}%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 9. SPACE WEATHER (Science Chapter 9)
// =========================================================================
export const SpaceSolarSimulator: React.FC = () => {
  const [layer, setLayer] = useState<'core' | 'photosphere' | 'chromosphere' | 'corona'>('photosphere');

  const sunLayers: Record<string, { title: string; temp: string; desc: string }> = {
    core: { title: 'Core (Teras Matahari)', temp: '15,000,000 °C', desc: 'Nuclear fusion of Hydrogen into Helium occurs here, producing radiant energy.' },
    photosphere: { title: 'Photosphere (Fotosfera)', temp: '6,000 °C', desc: 'The visible surface layer of the Sun. Contains Sunspots and Granules.' },
    chromosphere: { title: 'Chromosphere (Kromosfera)', temp: '10,000 °C', desc: 'Inner atmosphere layer visible as a red rim during a total solar eclipse. Contains Solar Prominences.' },
    corona: { title: 'Corona (Korona)', temp: '1,500,000 °C', desc: 'Outermost atmosphere layer extending millions of km into space. Origin of Solar Wind and Coronal Mass Ejections (CME).' }
  };

  return (
    <div className="rounded-2xl border border-yellow-200 bg-white p-5 dark:border-yellow-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
            Space Weather Simulator (KSSM Science Chapter 9)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Sun Structure & Solar Activity Impact on Earth
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {Object.keys(sunLayers).map((key) => (
          <button
            key={key}
            onClick={() => setLayer(key as any)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition text-left ${
              layer === key ? 'bg-yellow-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {sunLayers[key].title}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-900 text-xs space-y-2">
        <div className="text-sm font-bold text-yellow-950 dark:text-yellow-200">
          {sunLayers[layer].title} · Temperature: <span className="font-mono text-red-600 dark:text-red-400">{sunLayers[layer].temp}</span>
        </div>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          {sunLayers[layer].desc}
        </p>
      </div>
    </div>
  );
};

// =========================================================================
// 10. SPACE EXPLORATION (Science Chapter 10)
// =========================================================================
export const SpaceExplorationSimulator: React.FC = () => {
  const [model, setModel] = useState<'geocentric' | 'heliocentric'>('heliocentric');

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-5 dark:border-indigo-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Space Exploration Simulator (KSSM Science Chapter 10)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Historical Models of the Solar System
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setModel('geocentric')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              model === 'geocentric' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Geocentric (Ptolemy)
          </button>
          <button
            onClick={() => setModel('heliocentric')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              model === 'heliocentric' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Heliocentric (Copernicus & Kepler)
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-xs space-y-2">
        <span className="font-bold text-indigo-950 dark:text-indigo-200 text-sm block">
          {model === 'geocentric' ? 'Ptolemy & Aristotle Geocentric Model' : 'Copernicus, Galileo & Kepler Heliocentric Model'}
        </span>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          {model === 'geocentric'
            ? 'Earth is placed stationary at the centre of the universe, with the Sun, Moon, and all planets revolving in circular orbits around Earth.'
            : 'The Sun is at the centre of the solar system. Earth and other planets revolve around the Sun in elliptical orbits (Kepler’s First Law).'
          }
        </p>
      </div>
    </div>
  );
};
