import React, { useState } from 'react';
import { 
  Compass, 
  RotateCw, 
  Layers, 
  Sliders, 
  Activity, 
  TrendingUp, 
  Maximize2, 
  Box, 
  Grid, 
  CircleDot, 
  Sparkles,
  Calculator,
  CheckCircle2
} from 'lucide-react';

// 1. Trigonometric Ratios Explorer (Chapter 5)
export const TrigSimulator: React.FC = () => {
  const [angle, setAngle] = useState<number>(35); // 1° to 85°
  const [hypotenuse, setHypotenuse] = useState<number>(10);

  const rad = (angle * Math.PI) / 180;
  const opposite = hypotenuse * Math.sin(rad);
  const adjacent = hypotenuse * Math.cos(rad);

  const sinVal = Math.sin(rad).toFixed(4);
  const cosVal = Math.cos(rad).toFixed(4);
  const tanVal = Math.tan(rad).toFixed(4);

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-5 dark:border-blue-900/60 dark:bg-slate-900 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Interactive Trigonometry Explorer (KSSM Chapter 5)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Sine, Cosine & Tangent in Right-Angled Triangles
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <Compass className="h-4 w-4" />
          <span>Live Triangle Canvas</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[260px]">
          <svg viewBox="0 0 320 220" className="w-full max-w-sm h-auto select-none">
            {/* Grid background */}
            <defs>
              <pattern id="trigGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" className="dark:stroke-slate-800" />
              </pattern>
            </defs>
            <rect width="320" height="220" fill="url(#trigGrid)" rx="8" />

            {/* Triangle Coordinates */}
            {(() => {
              const startX = 40;
              const startY = 180;
              const scale = 14;
              const endX = startX + adjacent * scale;
              const topY = startY - opposite * scale;

              return (
                <g>
                  {/* Filled triangle */}
                  <polygon
                    points={`${startX},${startY} ${endX},${startY} ${endX},${topY}`}
                    fill="rgba(59, 130, 246, 0.12)"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Right angle marker */}
                  <polyline
                    points={`${endX - 12},${startY} ${endX - 12},${startY - 12} ${endX},${startY - 12}`}
                    fill="none"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />

                  {/* Angle arc */}
                  <path
                    d={`M ${startX + 28},${startY} A 28,28 0 0,0 ${startX + 28 * Math.cos(rad)},${startY - 28 * Math.sin(rad)}`}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />
                  <text x={startX + 34} y={startY - 6} fill="#ef4444" fontSize="12" fontWeight="bold">
                    {angle}° (θ)
                  </text>

                  {/* Labels */}
                  {/* Adjacent side */}
                  <text x={(startX + endX) / 2} y={startY + 18} textAnchor="middle" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">
                    Adjacent (A) = {adjacent.toFixed(2)} cm
                  </text>

                  {/* Opposite side */}
                  <text x={endX + 8} y={(startY + topY) / 2} fill="#16a34a" fontSize="11" fontWeight="bold" dominantBaseline="middle">
                    Opposite (O) = {opposite.toFixed(2)} cm
                  </text>

                  {/* Hypotenuse */}
                  <text
                    x={(startX + endX) / 2 - 14}
                    y={(startY + topY) / 2 - 8}
                    fill="#2563eb"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Hypotenuse (H) = {hypotenuse} cm
                  </text>

                  {/* Vertices */}
                  <circle cx={startX} cy={startY} r="3.5" fill="#ef4444" />
                  <circle cx={endX} cy={startY} r="3.5" fill="#475569" />
                  <circle cx={endX} cy={topY} r="3.5" fill="#2563eb" />
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Controls and Live Calculations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                <span>Acute Angle (θ):</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{angle}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="85"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                <span>Hypotenuse Length (H):</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{hypotenuse} cm</span>
              </div>
              <input
                type="range"
                min="5"
                max="15"
                value={hypotenuse}
                onChange={(e) => setHypotenuse(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
              />
            </div>

            {/* Quick Angle Presets */}
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Presets:</span>
              {[30, 45, 60].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAngle(preset)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                    angle === preset
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {preset}°
                </button>
              ))}
            </div>
          </div>

          {/* Live Trigonometric Formula Cards */}
          <div className="space-y-2 pt-2">
            <div className="p-2.5 rounded-lg border border-blue-100 bg-blue-50/70 dark:border-blue-900/40 dark:bg-blue-950/30 flex items-center justify-between text-xs">
              <span className="font-bold text-blue-900 dark:text-blue-300 font-mono">
                sin({angle}°) = O / H = {opposite.toFixed(2)} / {hypotenuse}
              </span>
              <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm font-mono">
                = {sinVal}
              </span>
            </div>

            <div className="p-2.5 rounded-lg border border-emerald-100 bg-emerald-50/70 dark:border-emerald-900/40 dark:bg-emerald-950/30 flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 font-mono">
                cos({angle}°) = A / H = {adjacent.toFixed(2)} / {hypotenuse}
              </span>
              <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm font-mono">
                = {cosVal}
              </span>
            </div>

            <div className="p-2.5 rounded-lg border border-amber-100 bg-amber-50/70 dark:border-amber-900/40 dark:bg-amber-950/30 flex items-center justify-between text-xs">
              <span className="font-bold text-amber-900 dark:text-amber-300 font-mono">
                tan({angle}°) = O / A = {opposite.toFixed(2)} / {adjacent.toFixed(2)}
              </span>
              <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm font-mono">
                = {tanVal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Straight Line Equation Grapher (Chapter 9)
export const StraightLineSimulator: React.FC = () => {
  const [gradient, setGradient] = useState<number>(2); // m
  const [yIntercept, setYIntercept] = useState<number>(-1); // c

  const xIntercept = gradient !== 0 ? (-yIntercept / gradient).toFixed(2) : 'Undefined (Parallel to x-axis)';

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-5 dark:border-indigo-900/60 dark:bg-slate-900 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Interactive Coordinate Geometry Simulator (KSSM Chapter 9)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Straight Line Analyzer: y = mx + c
          </h3>
        </div>
        <div className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          y = {gradient}x {yIntercept >= 0 ? `+ ${yIntercept}` : `- ${Math.abs(yIntercept)}`}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Cartesian Coordinate Plane */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950 border border-slate-800 min-h-[280px]">
          <svg viewBox="-140 -140 280 280" className="w-full max-w-xs h-auto select-none">
            {/* Grid lines */}
            {[-100, -60, -20, 20, 60, 100].map((coord) => (
              <React.Fragment key={coord}>
                <line x1="-130" y1={coord} x2="130" y2={coord} stroke="#1e293b" strokeWidth="1" />
                <line x1={coord} y1="-130" x2={coord} y2="130" stroke="#1e293b" strokeWidth="1" />
              </React.Fragment>
            ))}

            {/* X and Y Axes */}
            <line x1="-130" y1="0" x2="130" y2="0" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="-130" x2="0" y2="130" stroke="#64748b" strokeWidth="2" />

            <text x="120" y="-8" fill="#94a3b8" fontSize="10" fontWeight="bold">x</text>
            <text x="8" y="-120" fill="#94a3b8" fontSize="10" fontWeight="bold">y</text>

            {/* Plot straight line */}
            {/* Scale: 20px = 1 unit */}
            {(() => {
              const x1 = -6;
              const y1 = gradient * x1 + yIntercept;
              const x2 = 6;
              const y2 = gradient * x2 + yIntercept;

              const svgX1 = x1 * 20;
              const svgY1 = -y1 * 20;
              const svgX2 = x2 * 20;
              const svgY2 = -y2 * 20;

              return (
                <g>
                  {/* Dynamic Straight Line */}
                  <line
                    x1={svgX1}
                    y1={svgY1}
                    x2={svgX2}
                    y2={svgY2}
                    stroke="#6366f1"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Y-Intercept dot */}
                  <circle cx="0" cy={-yIntercept * 20} r="5" fill="#f43f5e" />
                  <text x="8" y={-yIntercept * 20 - 6} fill="#f43f5e" fontSize="10" fontWeight="bold">
                    (0, {yIntercept})
                  </text>

                  {/* X-Intercept dot if not infinite */}
                  {gradient !== 0 && (
                    <>
                      <circle cx={(-yIntercept / gradient) * 20} cy="0" r="5" fill="#10b981" />
                      <text x={(-yIntercept / gradient) * 20 - 15} y="18" fill="#10b981" fontSize="10" fontWeight="bold">
                        ({xIntercept}, 0)
                      </text>
                    </>
                  )}
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Sliders & Parameters */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                <span>Gradient (m = slope):</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold font-mono">{gradient}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={gradient}
                onChange={(e) => setGradient(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-indigo-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                <span>y-intercept (c):</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold font-mono">{yIntercept}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={yIntercept}
                onChange={(e) => setYIntercept(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-indigo-600"
              />
            </div>
          </div>

          {/* Properties Summary */}
          <div className="space-y-2 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Slope Orientation:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {gradient > 0 ? '↗ Slants Upwards (Positive)' : gradient < 0 ? '↘ Slants Downwards (Negative)' : '→ Horizontal Line (m = 0)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">x-intercept (-c/m):</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">{xIntercept}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Parallel Line Rule:</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">m₁ = m₂ = {gradient}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Circle Theorems Simulator (Chapter 6)
export const CircleTheoremsSimulator: React.FC = () => {
  const [activeTheorem, setActiveTheorem] = useState<'centre' | 'semicircle' | 'cyclic' | 'tangent'>('centre');
  const [angleCircumference, setAngleCircumference] = useState<number>(38);

  const angleCentre = angleCircumference * 2;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 dark:border-emerald-900/60 dark:bg-slate-900 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Interactive Circle Theorems Simulator (KSSM Chapter 6)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Angles and Tangents of Circles
          </h3>
        </div>
      </div>

      {/* Theorem Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveTheorem('centre')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'centre'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          1. Angle at Centre (2θ)
        </button>
        <button
          onClick={() => setActiveTheorem('semicircle')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'semicircle'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          2. Semicircle Angle (90°)
        </button>
        <button
          onClick={() => setActiveTheorem('cyclic')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'cyclic'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          3. Cyclic Quad (180°)
        </button>
        <button
          onClick={() => setActiveTheorem('tangent')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'tangent'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          4. Tangent & Radius (90°)
        </button>
      </div>

      {/* Theorem Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[260px]">
          <svg viewBox="0 0 280 240" className="w-full max-w-xs h-auto select-none">
            {/* Main Circle */}
            <circle cx="140" cy="120" r="90" fill="#ffffff" stroke="#047857" strokeWidth="2.5" className="dark:fill-slate-900" />
            <circle cx="140" cy="120" r="4" fill="#047857" />
            <text x="145" y="115" fill="#047857" fontSize="11" fontWeight="bold">O</text>

            {activeTheorem === 'centre' && (
              <g>
                {/* Arc lines to centre */}
                <line x1="75" y1="180" x2="140" y2="120" stroke="#059669" strokeWidth="2" />
                <line x1="205" y1="180" x2="140" y2="120" stroke="#059669" strokeWidth="2" />
                <text x="130" y="145" fill="#059669" fontSize="12" fontWeight="bold">{angleCentre}° (2θ)</text>

                {/* Arc lines to circumference */}
                <line x1="75" y1="180" x2="140" y2="30" stroke="#dc2626" strokeWidth="2" />
                <line x1="205" y1="180" x2="140" y2="30" stroke="#dc2626" strokeWidth="2" />
                <text x="132" y="55" fill="#dc2626" fontSize="12" fontWeight="bold">{angleCircumference}° (θ)</text>

                <text x="65" y="195" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">A</text>
                <text x="210" y="195" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">B</text>
                <text x="135" y="24" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">P</text>
              </g>
            )}

            {activeTheorem === 'semicircle' && (
              <g>
                {/* Diameter */}
                <line x1="50" y1="120" x2="230" y2="120" stroke="#2563eb" strokeWidth="3" />
                <text x="35" y="125" fill="#2563eb" fontSize="11" fontWeight="bold">A</text>
                <text x="235" y="125" fill="#2563eb" fontSize="11" fontWeight="bold">B</text>

                {/* Triangle to circumference */}
                <line x1="50" y1="120" x2="160" y2="35" stroke="#ef4444" strokeWidth="2" />
                <line x1="230" y1="120" x2="160" y2="35" stroke="#ef4444" strokeWidth="2" />
                <circle cx="160" cy="35" r="4" fill="#ef4444" />
                <text x="165" y="32" fill="#ef4444" fontSize="11" fontWeight="bold">P (90°)</text>

                {/* 90 deg marker */}
                <rect x="155" y="45" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" transform="rotate(35 160 45)" />
              </g>
            )}

            {activeTheorem === 'cyclic' && (
              <g>
                <polygon points="80,60 190,45 220,165 90,180" fill="rgba(16, 185, 129, 0.15)" stroke="#059669" strokeWidth="2" />
                <text x="70" y="55" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">A (85°)</text>
                <text x="195" y="40" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">B (110°)</text>
                <text x="225" y="175" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">C (95°)</text>
                <text x="75" y="195" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">D (70°)</text>
              </g>
            )}

            {activeTheorem === 'tangent' && (
              <g>
                {/* Tangent line at bottom */}
                <line x1="40" y1="210" x2="240" y2="210" stroke="#f59e0b" strokeWidth="3" />
                <text x="130" y="228" fill="#f59e0b" fontSize="11" fontWeight="bold">Tangent Line</text>

                {/* Radius to point of contact */}
                <line x1="140" y1="120" x2="140" y2="210" stroke="#059669" strokeWidth="2" strokeDasharray="3 3" />
                <text x="145" y="165" fill="#059669" fontSize="11" fontWeight="bold">Radius</text>

                {/* 90° Box */}
                <polyline points="140,200 150,200 150,210" fill="none" stroke="#dc2626" strokeWidth="1.5" />
                <text x="155" y="200" fill="#dc2626" fontSize="10" fontWeight="bold">90°</text>
              </g>
            )}
          </svg>
        </div>

        {/* Explanations & Controls */}
        <div className="lg:col-span-5 space-y-4">
          {activeTheorem === 'centre' && (
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Circumference Angle (θ):</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{angleCircumference}°</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={angleCircumference}
                  onChange={(e) => setAngleCircumference(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs space-y-1.5">
                <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                  Theorem Rule:
                </span>
                <p className="text-emerald-800 dark:text-emerald-300">
                  Angle at centre = 2 × {angleCircumference}° = <strong>{angleCentre}°</strong>
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Subtended by the same arc AB.
                </p>
              </div>
            </div>
          )}

          {activeTheorem === 'semicircle' && (
            <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs space-y-1.5">
              <span className="font-bold text-blue-900 dark:text-blue-200 block">
                Angle in a Semicircle Theorem:
              </span>
              <p className="text-blue-800 dark:text-blue-300">
                Any angle inscribed in a semicircle subtended by a diameter is ALWAYS <strong>90°</strong> (Right Angle).
              </p>
            </div>
          )}

          {activeTheorem === 'cyclic' && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block">
                Cyclic Quadrilateral Opposite Angles:
              </span>
              <p className="text-emerald-800 dark:text-emerald-300 font-mono">
                • ∠A + ∠C = 85° + 95° = 180°<br />
                • ∠B + ∠D = 110° + 70° = 180°
              </p>
            </div>
          )}

          {activeTheorem === 'tangent' && (
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs space-y-1.5">
              <span className="font-bold text-amber-900 dark:text-amber-200 block">
                Radius-Tangent Perpendicularity:
              </span>
              <p className="text-amber-800 dark:text-amber-300">
                The tangent to a circle at any point is always perpendicular (<strong>90°</strong>) to the radius passing through the point of contact.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
