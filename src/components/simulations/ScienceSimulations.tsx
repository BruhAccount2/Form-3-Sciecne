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
  CheckCircle2
} from 'lucide-react';

// 1. Heart & Double Circulatory System Simulator (Science Chapter 3)
export const HeartSimulator: React.FC = () => {
  const [bpm, setBpm] = useState<number>(75);
  const [selectedChamber, setSelectedChamber] = useState<string>('lv');
  const [pulse, setPulse] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, (60 / bpm) * 500);
    return () => clearInterval(interval);
  }, [bpm]);

  const chamberDetails: Record<string, { name: string; blood: string; description: string; destination: string }> = {
    ra: {
      name: 'Right Atrium (RA)',
      blood: 'Deoxygenated Blood (Low O₂, High CO₂)',
      description: 'Receives deoxygenated blood from the upper and lower body via Superior and Inferior Vena Cava.',
      destination: 'Pumps blood down through the Tricuspid Valve into Right Ventricle.'
    },
    rv: {
      name: 'Right Ventricle (RV)',
      blood: 'Deoxygenated Blood',
      description: 'Pumps deoxygenated blood to the lungs through the Semilunar Valve and Pulmonary Artery for oxygenation.',
      destination: 'Lungs (Pulmonary circulation).'
    },
    la: {
      name: 'Left Atrium (LA)',
      blood: 'Oxygenated Blood (High O₂, Low CO₂)',
      description: 'Receives freshly oxygenated blood from the lungs via the Pulmonary Veins.',
      destination: 'Pumps blood down through the Bicuspid (Mitral) Valve into Left Ventricle.'
    },
    lv: {
      name: 'Left Ventricle (LV)',
      blood: 'Oxygenated Blood',
      description: 'Has the thickest muscular wall in the heart to generate high hydrostatic pressure required to pump blood to the entire body via the Aorta.',
      destination: 'Systemic Circulation (Whole Body) via Aorta.'
    }
  };

  return (
    <div className="rounded-2xl border border-rose-200 bg-white p-5 dark:border-rose-900/60 dark:bg-slate-900 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Interactive Cardiovascular Simulation (KSSM Science Chapter 3)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Human Heart Chambers, Valves & Double Circulation
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
          <Heart className={`h-4 w-4 text-rose-600 ${pulse ? 'scale-125' : 'scale-100'} transition-transform duration-200`} />
          <span>Live Pulse: {bpm} BPM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Interactive Heart Anatomy */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[280px]">
          <svg viewBox="0 0 300 260" className="w-full max-w-xs h-auto select-none">
            {/* Vena Cava / Aorta trunks */}
            <path d="M 80,30 L 80,90" stroke="#3b82f6" strokeWidth="20" strokeLinecap="round" />
            <text x="50" y="25" fill="#3b82f6" fontSize="9" fontWeight="bold">Vena Cava</text>

            <path d="M 150,20 C 150,50 180,60 210,90" fill="none" stroke="#ef4444" strokeWidth="22" strokeLinecap="round" />
            <text x="175" y="20" fill="#ef4444" fontSize="9" fontWeight="bold">Aorta</text>

            {/* Left & Right Atria and Ventricles */}
            {/* RA */}
            <rect
              x="60"
              y="90"
              width="80"
              height="60"
              rx="12"
              fill={selectedChamber === 'ra' ? '#2563eb' : '#60a5fa'}
              stroke="#1e40af"
              strokeWidth="2"
              className="cursor-pointer transition hover:opacity-90"
              onClick={() => setSelectedChamber('ra')}
            />
            <text x="100" y="125" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Right Atrium
            </text>

            {/* LA */}
            <rect
              x="160"
              y="90"
              width="80"
              height="60"
              rx="12"
              fill={selectedChamber === 'la' ? '#dc2626' : '#f87171'}
              stroke="#991b1b"
              strokeWidth="2"
              className="cursor-pointer transition hover:opacity-90"
              onClick={() => setSelectedChamber('la')}
            />
            <text x="200" y="125" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Left Atrium
            </text>

            {/* RV */}
            <rect
              x="60"
              y="160"
              width="80"
              height="80"
              rx="12"
              fill={selectedChamber === 'rv' ? '#1d4ed8' : '#3b82f6'}
              stroke="#1e3a8a"
              strokeWidth="2"
              className="cursor-pointer transition hover:opacity-90"
              onClick={() => setSelectedChamber('rv')}
            />
            <text x="100" y="205" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Right Ventricle
            </text>

            {/* LV (Thick muscle) */}
            <rect
              x="160"
              y="160"
              width="80"
              height="80"
              rx="12"
              fill={selectedChamber === 'lv' ? '#b91c1c' : '#ef4444'}
              stroke="#7f1d1d"
              strokeWidth="5"
              className="cursor-pointer transition hover:opacity-90"
              onClick={() => setSelectedChamber('lv')}
            />
            <text x="200" y="200" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Left Ventricle
            </text>
            <text x="200" y="215" fill="#fef2f2" fontSize="8" fontWeight="bold" textAnchor="middle">
              (Thickest Muscle)
            </text>

            {/* Septum */}
            <line x1="150" y1="90" x2="150" y2="240" stroke="#334155" strokeWidth="8" />
            <text x="150" y="255" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">
              Septum
            </text>
          </svg>
        </div>

        {/* Chamber Details & Interactive BPM Slider */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Simulate Heart Rate (BPM):</span>
              <span className="text-rose-600 dark:text-rose-400 font-bold">{bpm} beats/min</span>
            </div>
            <input
              type="range"
              min="50"
              max="140"
              value={bpm}
              onChange={(e) => setBpm(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-rose-600"
            />
          </div>

          {/* Active Chamber Card */}
          <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/60 dark:border-rose-900/40 dark:bg-rose-950/30 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-rose-950 dark:text-rose-200 text-sm">
                {chamberDetails[selectedChamber].name}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-rose-600 border border-rose-200 dark:border-rose-900">
                {chamberDetails[selectedChamber].blood}
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {chamberDetails[selectedChamber].description}
            </p>
            <div className="pt-2 border-t border-rose-200/60 dark:border-rose-900/60 flex items-start gap-1.5 text-rose-900 dark:text-rose-300 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-rose-600 shrink-0" />
              <span><strong>Pumping Target:</strong> {chamberDetails[selectedChamber].destination}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Respiration Inhalation & Exhalation Simulator (Science Chapter 2)
export const RespirationSimulator: React.FC = () => {
  const [phase, setPhase] = useState<'inhalation' | 'exhalation'>('inhalation');

  return (
    <div className="rounded-2xl border border-cyan-200 bg-white p-5 dark:border-cyan-900/60 dark:bg-slate-900 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Interactive Respiratory Biomechanics (KSSM Science Chapter 2)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Breathing Mechanism: Inhalation vs Exhalation
          </h3>
        </div>

        {/* Phase Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            onClick={() => setPhase('inhalation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              phase === 'inhalation'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Inhalation (Tarik Nafas)
          </button>
          <button
            onClick={() => setPhase('exhalation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              phase === 'exhalation'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Exhalation (Hembus Nafas)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Lungs & Diaphragm Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[260px]">
          <svg viewBox="0 0 280 240" className="w-full max-w-xs h-auto select-none">
            {/* Trachea */}
            <line x1="140" y1="20" x2="140" y2="70" stroke="#0284c7" strokeWidth="12" strokeLinecap="round" />
            <line x1="140" y1="70" x2="105" y2="105" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />
            <line x1="140" y1="70" x2="175" y2="105" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />

            {/* Air flow arrows */}
            {phase === 'inhalation' ? (
              <path d="M 140,25 L 140,65" stroke="#ffffff" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="4 2" />
            ) : (
              <path d="M 140,65 L 140,25" stroke="#ffffff" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="4 2" />
            )}

            {/* Lungs */}
            {/* Left Lung */}
            <ellipse
              cx="95"
              cy="135"
              rx={phase === 'inhalation' ? 45 : 32}
              ry={phase === 'inhalation' ? 55 : 42}
              fill={phase === 'inhalation' ? '#38bdf8' : '#7dd3fc'}
              stroke="#0284c7"
              strokeWidth="2.5"
              className="transition-all duration-300"
            />
            {/* Right Lung */}
            <ellipse
              cx="185"
              cy="135"
              rx={phase === 'inhalation' ? 45 : 32}
              ry={phase === 'inhalation' ? 55 : 42}
              fill={phase === 'inhalation' ? '#38bdf8' : '#7dd3fc'}
              stroke="#0284c7"
              strokeWidth="2.5"
              className="transition-all duration-300"
            />

            {/* Diaphragm */}
            {phase === 'inhalation' ? (
              // Flattened diaphragm
              <path
                d="M 50,205 Q 140,210 230,205"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="8"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            ) : (
              // Domed/curved upward diaphragm
              <path
                d="M 50,210 Q 140,165 230,210"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="8"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            )}
            <text x="140" y="230" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">
              Diaphragm: {phase === 'inhalation' ? 'Contracts & Flattens Downward' : 'Relaxes & Curves Upward (Dome)'}
            </text>
          </svg>
        </div>

        {/* Biomechanical Changes Matrix */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl border border-cyan-100 bg-cyan-50/60 dark:border-cyan-900/40 dark:bg-cyan-950/30 text-xs space-y-2.5">
            <span className="font-bold text-cyan-950 dark:text-cyan-200 block text-sm">
              {phase === 'inhalation' ? 'Inhalation Mechanism (Tarik Nafas)' : 'Exhalation Mechanism (Hembus Nafas)'}
            </span>

            <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <span className="font-bold text-cyan-600 dark:text-cyan-400">• External Intercostal:</span>
                <span>{phase === 'inhalation' ? 'CONTRACTS (Rib cage moves UP & OUT)' : 'RELAXES (Rib cage moves DOWN & IN)'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-cyan-600 dark:text-cyan-400">• Diaphragm Muscle:</span>
                <span>{phase === 'inhalation' ? 'CONTRACTS and FLATTENS downwards' : 'RELAXES and CURVES upwards (dome-shaped)'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-cyan-600 dark:text-cyan-400">• Thoracic Volume:</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-300">{phase === 'inhalation' ? 'INCREASES' : 'DECREASES'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-cyan-600 dark:text-cyan-400">• Thoracic Air Pressure:</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-300">{phase === 'inhalation' ? 'DECREASES (Below atmospheric pressure)' : 'INCREASES (Higher than atmospheric pressure)'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-cyan-600 dark:text-cyan-400">• Air Movement:</span>
                <span>{phase === 'inhalation' ? 'Higher atmospheric pressure forces air INTO lungs' : 'High pressure inside lungs forces air OUT'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Radioactive Half-Life Decay Simulator (Science Chapter 8)
export const HalfLifeSimulator: React.FC = () => {
  const [halfLifeTime, setHalfLifeTime] = useState<number>(5); // years/days
  const [elapsedTime, setElapsedTime] = useState<number>(10);
  const [initialNuclei, setInitialNuclei] = useState<number>(1000);

  const numHalfLives = elapsedTime / halfLifeTime;
  const remainingNuclei = Math.round(initialNuclei * Math.pow(0.5, numHalfLives));
  const percentageRemaining = ((remainingNuclei / initialNuclei) * 100).toFixed(1);

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-5 dark:border-amber-900/60 dark:bg-slate-900 shadow-sm space-y-5">
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
        {/* Interactive Nuclei Particle Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800 min-h-[260px]">
          <div className="text-xs font-bold text-slate-300 mb-2 flex items-center justify-between w-full px-2">
            <span>Radioactive Nuclei Chamber ({remainingNuclei} undecayed / {initialNuclei})</span>
            <span className="text-amber-400 font-mono">{percentageRemaining}% Active</span>
          </div>

          <div className="grid grid-cols-10 gap-1.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            {Array.from({ length: 100 }).map((_, idx) => {
              const isDecayed = idx >= (remainingNuclei / initialNuclei) * 100;
              return (
                <div
                  key={idx}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    isDecayed
                      ? 'bg-slate-700 opacity-40'
                      : 'bg-amber-400 shadow-sm shadow-amber-500/50'
                  }`}
                  title={isDecayed ? 'Decayed Stable Daughter Nucleus' : 'Active Radioactive Parent Nucleus'}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span>Active Parent (Undecayed)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span>Decayed Stable Daughter</span>
            </div>
          </div>
        </div>

        {/* Sliders & Numerical Calculation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                <span>Half-Life Duration (T½):</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">{halfLifeTime} days</span>
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
                <span className="text-amber-600 dark:text-amber-400 font-bold">{elapsedTime} days</span>
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
          </div>

          {/* Mathematical Step-by-Step Box */}
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs space-y-2 font-mono">
            <span className="font-bold text-amber-900 dark:text-amber-200 block font-sans">
              Calculation Breakdown:
            </span>
            <div className="text-slate-800 dark:text-slate-200 space-y-1">
              <div>• Number of Half-Lives (n) = t / T½ = {elapsedTime} / {halfLifeTime} = <strong>{numHalfLives.toFixed(2)}</strong></div>
              <div>• Remaining Fraction = (½)^{numHalfLives.toFixed(2)} = <strong>{(Math.pow(0.5, numHalfLives)).toFixed(4)}</strong></div>
              <div>• Remaining Nuclei = {initialNuclei} × {(Math.pow(0.5, numHalfLives)).toFixed(4)} = <strong className="text-amber-600 dark:text-amber-400 text-sm font-sans">{remainingNuclei} nuclei</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
