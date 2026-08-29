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
  CheckCircle2,
  Percent,
  Move
} from 'lucide-react';

// =========================================================================
// 1. INDICES CALCULATOR & LAWS OF INDICES SIMULATOR (Chapter 1)
// =========================================================================
export const IndicesSimulator: React.FC = () => {
  const [base, setBase] = useState<number>(2);
  const [m, setM] = useState<number>(3);
  const [n, setN] = useState<number>(2);
  const [activeLaw, setActiveLaw] = useState<'mult' | 'div' | 'pow' | 'neg' | 'frac'>('mult');

  const powM = Math.pow(base, m);
  const powN = Math.pow(base, n);
  const multRes = Math.pow(base, m + n);
  const divRes = Math.pow(base, m - n);
  const powerOfPowerRes = Math.pow(base, m * n);

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-5 dark:border-blue-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Interactive Indices & Law Explorer (KSSM Chapter 1)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Laws of Indices & Repeated Multiplication
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <Calculator className="h-4 w-4" />
          <span>Interactive Algebra Engine</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <button
          onClick={() => setActiveLaw('mult')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeLaw === 'mult' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          aᵐ × aⁿ = aᵐ⁺ⁿ
        </button>
        <button
          onClick={() => setActiveLaw('div')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeLaw === 'div' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          aᵐ ÷ aⁿ = aᵐ⁻ⁿ
        </button>
        <button
          onClick={() => setActiveLaw('pow')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeLaw === 'pow' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          (aᵐ)ⁿ = aᵐⁿ
        </button>
        <button
          onClick={() => setActiveLaw('neg')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeLaw === 'neg' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          a⁻ⁿ = 1/aⁿ
        </button>
        <button
          onClick={() => setActiveLaw('frac')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeLaw === 'frac' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          a^(m/n) = ⁿ√(aᵐ)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Base (a):</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{base}</span>
            </div>
            <input
              type="range"
              min="2"
              max="10"
              value={base}
              onChange={(e) => setBase(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Exponent m:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{m}</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={m}
              onChange={(e) => setM(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Exponent n:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{n}</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={n}
              onChange={(e) => setN(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
            />
          </div>
        </div>

        <div className="lg:col-span-6 p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Step-by-Step Law Calculation:
          </span>

          {activeLaw === 'mult' && (
            <div className="space-y-2 text-sm">
              <div className="font-mono font-bold text-blue-600 dark:text-blue-400">
                {base}<sup>{m}</sup> × {base}<sup>{n}</sup> = {base}<sup>{m} + {n}</sup> = {base}<sup>{m + n}</sup>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Expanded: ({Array(m).fill(base).join(' × ')}) × ({Array(n).fill(base).join(' × ')})
              </p>
              <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                Live Value = {multRes.toLocaleString()}
              </div>
            </div>
          )}

          {activeLaw === 'div' && (
            <div className="space-y-2 text-sm">
              <div className="font-mono font-bold text-blue-600 dark:text-blue-400">
                {base}<sup>{m}</sup> ÷ {base}<sup>{n}</sup> = {base}<sup>{m} - {n}</sup> = {base}<sup>{m - n}</sup>
              </div>
              <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                Live Value = {divRes.toFixed(4)}
              </div>
            </div>
          )}

          {activeLaw === 'pow' && (
            <div className="space-y-2 text-sm">
              <div className="font-mono font-bold text-blue-600 dark:text-blue-400">
                ({base}<sup>{m}</sup>)<sup>{n}</sup> = {base}<sup>{m} × {n}</sup> = {base}<sup>{m * n}</sup>
              </div>
              <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                Live Value = {powerOfPowerRes.toLocaleString()}
              </div>
            </div>
          )}

          {activeLaw === 'neg' && (
            <div className="space-y-2 text-sm">
              <div className="font-mono font-bold text-blue-600 dark:text-blue-400">
                {base}<sup>-{n}</sup> = 1 / ({base}<sup>{n}</sup>) = 1 / {powN}
              </div>
              <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                Live Value = {(1 / powN).toFixed(6)}
              </div>
            </div>
          )}

          {activeLaw === 'frac' && (
            <div className="space-y-2 text-sm">
              <div className="font-mono font-bold text-blue-600 dark:text-blue-400">
                {base}<sup>({m}/{n})</sup> = <sup>{n}</sup>√({base}<sup>{m}</sup>)
              </div>
              <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                Live Value = {Math.pow(base, m / n).toFixed(4)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. STANDARD FORM & SIGNIFICANT FIGURES (Chapter 2)
// =========================================================================
export const StandardFormSimulator: React.FC = () => {
  const [numInput, setNumInput] = useState<number>(450000);
  const [sigFigs, setSigFigs] = useState<number>(3);

  const toStandardForm = (val: number) => {
    if (val === 0) return { a: 0, n: 0, str: '0' };
    const exp = Math.floor(Math.log10(Math.abs(val)));
    const a = val / Math.pow(10, exp);
    return {
      a: Number(a.toFixed(sigFigs - 1)),
      n: exp,
      str: `${Number(a.toFixed(sigFigs - 1))} × 10${exp !== 0 ? (exp > 0 ? `⁺${exp}` : `⁻${Math.abs(exp)}`) : '⁰'}`
    };
  };

  const std = toStandardForm(numInput);

  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-5 dark:border-blue-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Interactive Standard Form Simulator (KSSM Chapter 2)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Ordinary Number ↔ Standard Form (A × 10ⁿ, 1 ≤ A &lt; 10)
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Enter Any Number or Slide Value:
            </label>
            <input
              type="number"
              value={numInput}
              onChange={(e) => setNumInput(parseFloat(e.target.value) || 0)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-mono dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Quick Presets:</span>
            {[0.00345, 0.082, 45000, 7800000].map((preset) => (
              <button
                key={preset}
                onClick={() => setNumInput(preset)}
                className="px-2.5 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 font-mono font-bold"
              >
                {preset}
              </button>
            ))}
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Significant Figures to Round Off:</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">{sigFigs} s.f.</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={sigFigs}
              onChange={(e) => setSigFigs(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-blue-600"
            />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 dark:bg-blue-950/40 dark:border-blue-900 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
            Standard Form Representation
          </span>
          <div className="text-2xl font-extrabold font-mono text-blue-900 dark:text-blue-200">
            {std.a} × 10<sup>{std.n}</sup>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <p>• Condition: 1 ≤ A &lt; 10 (Here, A = <strong>{std.a}</strong>)</p>
            <p>• Power n = <strong>{std.n}</strong> ({std.n >= 0 ? `Decimal moved ${std.n} places left` : `Decimal moved ${Math.abs(std.n)} places right`})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. CONSUMER MATHEMATICS: INTEREST & LOANS (Chapter 3)
// =========================================================================
export const ConsumerMathSimulator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(4.5); // %
  const [years, setYears] = useState<number>(5);
  const [compoundFreq, setCompoundFreq] = useState<number>(12); // monthly

  // Simple Interest: I = Prt
  const simpleInterest = principal * (rate / 100) * years;
  const simpleTotal = principal + simpleInterest;

  // Compound Interest: MV = P(1 + r/n)^(nt)
  const r = rate / 100;
  const maturedValue = principal * Math.pow(1 + r / compoundFreq, compoundFreq * years);
  const compoundInterest = maturedValue - principal;

  // Monthly loan instalment flat rate: A = P + Prt, Instalment = A / (t * 12)
  const monthlyInstalment = simpleTotal / (years * 12);

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 dark:border-emerald-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Consumer Mathematics Simulator (KSSM Chapter 3)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Simple Interest, Compound Interest & Loan Monthly Instalments
          </h3>
        </div>
        <div className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          MV = P(1 + r/n)ⁿᵗ
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Principal Deposit / Loan (P):</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">RM {principal.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Annual Interest Rate (r):</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{rate}% per annum</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Time Period (t):</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{years} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Compounding Frequency (n times a year):
            </label>
            <select
              value={compoundFreq}
              onChange={(e) => setCompoundFreq(parseInt(e.target.value))}
              className="w-full rounded-lg border border-slate-300 p-2 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value={1}>Compounded Annually (n = 1)</option>
              <option value={2}>Compounded Semi-Annually (n = 2)</option>
              <option value={4}>Compounded Quarterly (n = 4)</option>
              <option value={12}>Compounded Monthly (n = 12)</option>
            </select>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-3">
          <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 dark:border-emerald-900/60 dark:bg-emerald-950/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
              1. Simple Interest (I = Prt)
            </span>
            <div className="text-lg font-bold text-emerald-900 dark:text-emerald-200 mt-1">
              Interest: RM {simpleInterest.toFixed(2)} | Total: RM {simpleTotal.toFixed(2)}
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/60 dark:border-blue-900/60 dark:bg-blue-950/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 block">
              2. Compound Interest (Matured Value MV)
            </span>
            <div className="text-lg font-bold text-blue-900 dark:text-blue-200 mt-1">
              Matured Value: RM {maturedValue.toFixed(2)}
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5">
              Compound Interest earned: RM {compoundInterest.toFixed(2)} (+RM {(compoundInterest - simpleInterest).toFixed(2)} vs simple interest)
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60 dark:border-amber-900/60 dark:bg-amber-950/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
              3. Flat Rate Loan Monthly Instalment
            </span>
            <div className="text-lg font-bold text-amber-900 dark:text-amber-200 mt-1">
              RM {monthlyInstalment.toFixed(2)} / month
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
              Total payment over {years * 12} months = RM {simpleTotal.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. SCALE DRAWINGS (Chapter 4)
// =========================================================================
export const ScaleDrawingSimulator: React.FC = () => {
  const [scaleN, setScaleN] = useState<number>(2); // 1 : n or 1 : 1/n
  const [mode, setMode] = useState<'reduction' | 'enlargement'>('reduction');

  const actualWidth = 100;
  const actualHeight = 60;
  const scaleFactor = mode === 'reduction' ? 1 / scaleN : scaleN;
  const drawingWidth = actualWidth * scaleFactor;
  const drawingHeight = actualHeight * scaleFactor;

  return (
    <div className="rounded-2xl border border-purple-200 bg-white p-5 dark:border-purple-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Interactive Scale Drawing Explorer (KSSM Chapter 4)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Scale Ratio 1 : n (Enlargement & Reduction)
          </h3>
        </div>
        <div className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Scale = 1 : {mode === 'reduction' ? scaleN : `(1/${scaleN})`}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setMode('reduction')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                mode === 'reduction' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              Reduction (n &gt; 1, e.g. 1 : {scaleN})
            </button>
            <button
              onClick={() => setMode('enlargement')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                mode === 'enlargement' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              Enlargement (n &lt; 1, e.g. 1 : 1/{scaleN})
            </button>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Scale Factor n:</span>
              <span className="font-bold text-purple-600 dark:text-purple-400">{scaleN}</span>
            </div>
            <input
              type="range"
              min="2"
              max="5"
              value={scaleN}
              onChange={(e) => setScaleN(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-purple-600"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 text-xs space-y-1">
            <p className="font-bold text-purple-900 dark:text-purple-200">Scale Interpretation:</p>
            <p className="text-purple-800 dark:text-purple-300">
              Every 1 cm in the drawing represents {mode === 'reduction' ? `${scaleN} cm in actual object` : `${(1 / scaleN).toFixed(2)} cm in actual object`}.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[220px]">
          <svg viewBox="0 0 300 160" className="w-full max-w-xs h-auto select-none">
            {/* Actual object box */}
            <rect x="20" y="30" width="100" height="60" fill="rgba(147, 51, 234, 0.15)" stroke="#9333ea" strokeWidth="2" />
            <text x="70" y="65" fill="#9333ea" fontSize="10" fontWeight="bold" textAnchor="middle">
              Actual Object (100×60)
            </text>

            {/* Drawing box */}
            <rect x="150" y="30" width={drawingWidth} height={drawingHeight} fill="rgba(59, 130, 246, 0.2)" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 3" />
            <text x={150 + drawingWidth / 2} y={30 + drawingHeight / 2 + 3} fill="#2563eb" fontSize="9" fontWeight="bold" textAnchor="middle">
              Drawing ({drawingWidth.toFixed(0)}×{drawingHeight.toFixed(0)})
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 5. TRIGONOMETRY (Chapter 5)
// =========================================================================
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
    <div className="rounded-2xl border border-blue-200 bg-white p-5 dark:border-blue-900/60 dark:bg-slate-900 shadow-xs space-y-5">
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
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[260px]">
          <svg viewBox="0 0 320 220" className="w-full max-w-sm h-auto select-none">
            {(() => {
              const startX = 40;
              const startY = 180;
              const scale = 14;
              const endX = startX + adjacent * scale;
              const topY = startY - opposite * scale;

              return (
                <g>
                  <polygon
                    points={`${startX},${startY} ${endX},${startY} ${endX},${topY}`}
                    fill="rgba(59, 130, 246, 0.12)"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points={`${endX - 12},${startY} ${endX - 12},${startY - 12} ${endX},${startY - 12}`}
                    fill="none"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <text x={(startX + endX) / 2} y={startY + 18} textAnchor="middle" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">
                    Adjacent (A) = {adjacent.toFixed(2)} cm
                  </text>
                  <text x={endX + 8} y={(startY + topY) / 2} fill="#16a34a" fontSize="11" fontWeight="bold" dominantBaseline="middle">
                    Opposite (O) = {opposite.toFixed(2)} cm
                  </text>
                  <text x={(startX + endX) / 2 - 14} y={(startY + topY) / 2 - 8} fill="#2563eb" fontSize="11" fontWeight="bold">
                    Hypotenuse (H) = {hypotenuse} cm
                  </text>
                  <circle cx={startX} cy={startY} r="3.5" fill="#ef4444" />
                  <circle cx={endX} cy={startY} r="3.5" fill="#475569" />
                  <circle cx={endX} cy={topY} r="3.5" fill="#2563eb" />
                </g>
              );
            })()}
          </svg>
        </div>

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
          </div>

          <div className="space-y-2 pt-2">
            <div className="p-2.5 rounded-lg border border-blue-100 bg-blue-50/70 dark:border-blue-900/40 dark:bg-blue-950/30 flex items-center justify-between text-xs font-mono font-bold">
              <span>sin({angle}°) = O/H = {sinVal}</span>
            </div>
            <div className="p-2.5 rounded-lg border border-emerald-100 bg-emerald-50/70 dark:border-emerald-900/40 dark:bg-emerald-950/30 flex items-center justify-between text-xs font-mono font-bold">
              <span>cos({angle}°) = A/H = {cosVal}</span>
            </div>
            <div className="p-2.5 rounded-lg border border-amber-100 bg-amber-50/70 dark:border-amber-900/40 dark:bg-amber-950/30 flex items-center justify-between text-xs font-mono font-bold">
              <span>tan({angle}°) = O/A = {tanVal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 6. CIRCLE THEOREMS (Chapter 6)
// =========================================================================
export const CircleTheoremsSimulator: React.FC = () => {
  const [activeTheorem, setActiveTheorem] = useState<'centre' | 'semicircle' | 'cyclic' | 'tangent'>('centre');
  const [angleCircumference, setAngleCircumference] = useState<number>(38);
  const angleCentre = angleCircumference * 2;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 dark:border-emerald-900/60 dark:bg-slate-900 shadow-xs space-y-5">
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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveTheorem('centre')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'centre' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          1. Angle at Centre (2θ)
        </button>
        <button
          onClick={() => setActiveTheorem('semicircle')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'semicircle' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          2. Semicircle Angle (90°)
        </button>
        <button
          onClick={() => setActiveTheorem('cyclic')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'cyclic' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          3. Cyclic Quad (180°)
        </button>
        <button
          onClick={() => setActiveTheorem('tangent')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
            activeTheorem === 'tangent' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          4. Tangent & Radius (90°)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[240px]">
          <svg viewBox="0 0 280 220" className="w-full max-w-xs h-auto select-none">
            <circle cx="140" cy="110" r="85" fill="#ffffff" stroke="#047857" strokeWidth="2.5" className="dark:fill-slate-900" />
            <circle cx="140" cy="110" r="4" fill="#047857" />
            <text x="145" y="105" fill="#047857" fontSize="11" fontWeight="bold">O</text>

            {activeTheorem === 'centre' && (
              <g>
                <line x1="75" y1="170" x2="140" y2="110" stroke="#059669" strokeWidth="2" />
                <line x1="205" y1="170" x2="140" y2="110" stroke="#059669" strokeWidth="2" />
                <text x="130" y="135" fill="#059669" fontSize="12" fontWeight="bold">{angleCentre}° (2θ)</text>
                <line x1="75" y1="170" x2="140" y2="25" stroke="#dc2626" strokeWidth="2" />
                <line x1="205" y1="170" x2="140" y2="25" stroke="#dc2626" strokeWidth="2" />
                <text x="132" y="48" fill="#dc2626" fontSize="12" fontWeight="bold">{angleCircumference}° (θ)</text>
              </g>
            )}

            {activeTheorem === 'semicircle' && (
              <g>
                <line x1="55" y1="110" x2="225" y2="110" stroke="#2563eb" strokeWidth="3" />
                <line x1="55" y1="110" x2="160" y2="30" stroke="#ef4444" strokeWidth="2" />
                <line x1="225" y1="110" x2="160" y2="30" stroke="#ef4444" strokeWidth="2" />
                <text x="165" y="28" fill="#ef4444" fontSize="11" fontWeight="bold">90°</text>
              </g>
            )}

            {activeTheorem === 'cyclic' && (
              <g>
                <polygon points="80,55 190,40 215,155 90,170" fill="rgba(16, 185, 129, 0.15)" stroke="#059669" strokeWidth="2" />
                <text x="70" y="50" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">85°</text>
                <text x="220" y="165" fill="#0f172a" className="dark:fill-slate-200" fontSize="11" fontWeight="bold">95° (Sum=180°)</text>
              </g>
            )}

            {activeTheorem === 'tangent' && (
              <g>
                <line x1="40" y1="195" x2="240" y2="195" stroke="#f59e0b" strokeWidth="3" />
                <line x1="140" y1="110" x2="140" y2="195" stroke="#059669" strokeWidth="2" strokeDasharray="3 3" />
                <polyline points="140,185 150,185 150,195" fill="none" stroke="#dc2626" strokeWidth="1.5" />
                <text x="155" y="185" fill="#dc2626" fontSize="10" fontWeight="bold">90°</text>
              </g>
            )}
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-3 text-xs">
          {activeTheorem === 'centre' && (
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Angle at Circumference (θ): {angleCircumference}°</span>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={angleCircumference}
                  onChange={(e) => setAngleCircumference(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-emerald-600 mt-1"
                />
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 font-bold text-emerald-900 dark:text-emerald-200">
                Angle at Centre = 2 × {angleCircumference}° = {angleCentre}°
              </div>
            </div>
          )}

          {activeTheorem === 'semicircle' && (
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200">
              Angle subtended in a semicircle by the diameter is always <strong>90°</strong>.
            </div>
          )}

          {activeTheorem === 'cyclic' && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200">
              Sum of opposite interior angles in a cyclic quadrilateral = <strong>180°</strong>.
            </div>
          )}

          {activeTheorem === 'tangent' && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200">
              The tangent is always perpendicular (<strong>90°</strong>) to the radius at the point of contact.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 7. PLANS AND ELEVATIONS (Chapter 7)
// =========================================================================
export const PlansElevationsSimulator: React.FC = () => {
  const [view, setView] = useState<'3d' | 'plan' | 'elevationX' | 'elevationY'>('3d');

  return (
    <div className="rounded-2xl border border-teal-200 bg-white p-5 dark:border-teal-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Interactive Orthogonal Projections Simulator (KSSM Chapter 7)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            3D Solid: Plan (Top), Front Elevation (X) & Side Elevation (Y)
          </h3>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setView('3d')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            view === '3d' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Isometric 3D Solid
        </button>
        <button
          onClick={() => setView('plan')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            view === 'plan' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Plan (View from Top)
        </button>
        <button
          onClick={() => setView('elevationX')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            view === 'elevationX' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Front Elevation X
        </button>
        <button
          onClick={() => setView('elevationY')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            view === 'elevationY' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Side Elevation Y
        </button>
      </div>

      <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 flex flex-col items-center justify-center min-h-[220px]">
        {view === '3d' && (
          <div className="text-center space-y-2">
            <svg viewBox="0 0 240 160" className="w-48 h-auto">
              <polygon points="120,30 190,65 190,125 120,90" fill="#0d9488" stroke="#0f766e" strokeWidth="2" opacity="0.8" />
              <polygon points="120,30 50,65 50,125 120,90" fill="#14b8a6" stroke="#0f766e" strokeWidth="2" opacity="0.9" />
              <polygon points="120,30 190,65 120,100 50,65" fill="#2dd4bf" stroke="#0f766e" strokeWidth="2" />
            </svg>
            <p className="text-xs text-slate-600 dark:text-slate-400">Prism with triangular cross-section (5 cm × 4 cm × 6 cm)</p>
          </div>
        )}

        {view === 'plan' && (
          <div className="text-center space-y-2">
            <svg viewBox="0 0 200 120" className="w-40 h-auto">
              <rect x="40" y="20" width="120" height="80" fill="rgba(45, 212, 191, 0.3)" stroke="#0d9488" strokeWidth="2" />
              <line x1="100" y1="20" x2="100" y2="100" stroke="#0d9488" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
            <p className="text-xs font-bold text-teal-800 dark:text-teal-300">Plan Projection on Horizontal Plane</p>
          </div>
        )}

        {view === 'elevationX' && (
          <div className="text-center space-y-2">
            <svg viewBox="0 0 200 120" className="w-40 h-auto">
              <polygon points="100,20 160,100 40,100" fill="rgba(20, 184, 166, 0.4)" stroke="#0f766e" strokeWidth="2" />
            </svg>
            <p className="text-xs font-bold text-teal-800 dark:text-teal-300">Front Elevation X on Vertical Plane</p>
          </div>
        )}

        {view === 'elevationY' && (
          <div className="text-center space-y-2">
            <svg viewBox="0 0 200 120" className="w-40 h-auto">
              <rect x="50" y="30" width="100" height="70" fill="rgba(13, 148, 136, 0.4)" stroke="#0f766e" strokeWidth="2" />
            </svg>
            <p className="text-xs font-bold text-teal-800 dark:text-teal-300">Side Elevation Y on Vertical Plane</p>
          </div>
        )}
      </div>
    </div>
  );
};

// =========================================================================
// 8. LOCI IN TWO DIMENSIONS (Chapter 8)
// =========================================================================
export const LociSimulator: React.FC = () => {
  const [locusType, setLocusType] = useState<'point' | 'line' | 'twoPoints' | 'twoLines'>('point');
  const [distance, setDistance] = useState<number>(40);

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-5 dark:border-amber-900/60 dark:bg-slate-900 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Interactive Loci in 2D Simulator (KSSM Chapter 8)
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Geometric Locus Conditions & Constructions
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setLocusType('point')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-left ${
            locusType === 'point' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          1. Fixed Point (Circle)
        </button>
        <button
          onClick={() => setLocusType('twoPoints')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-left ${
            locusType === 'twoPoints' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          2. Two Points (Perpendicular Bisector)
        </button>
        <button
          onClick={() => setLocusType('line')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-left ${
            locusType === 'line' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          3. Straight Line (Parallel Pair)
        </button>
        <button
          onClick={() => setLocusType('twoLines')}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition text-left ${
            locusType === 'twoLines' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          4. Intersecting Lines (Angle Bisector)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 min-h-[220px]">
          <svg viewBox="0 0 280 200" className="w-full max-w-xs h-auto select-none">
            {locusType === 'point' && (
              <g>
                <circle cx="140" cy="100" r="4" fill="#ef4444" />
                <text x="145" y="95" fill="#ef4444" fontSize="11" fontWeight="bold">Point O</text>
                <circle cx="140" cy="100" r={distance} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
                <line x1="140" y1="100" x2={140 + distance} y2="100" stroke="#f59e0b" strokeWidth="1.5" />
                <text x={140 + distance / 2} y="95" fill="#f59e0b" fontSize="10" fontWeight="bold">{distance} px</text>
              </g>
            )}

            {locusType === 'twoPoints' && (
              <g>
                <circle cx="70" cy="100" r="4" fill="#3b82f6" />
                <text x="65" y="90" fill="#3b82f6" fontSize="11" fontWeight="bold">A</text>
                <circle cx="210" cy="100" r="4" fill="#3b82f6" />
                <text x="215" y="90" fill="#3b82f6" fontSize="11" fontWeight="bold">B</text>
                <line x1="70" y1="100" x2="210" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="140" y1="20" x2="140" y2="180" stroke="#f59e0b" strokeWidth="2.5" />
                <text x="145" y="40" fill="#f59e0b" fontSize="10" fontWeight="bold">Perpendicular Bisector</text>
              </g>
            )}

            {locusType === 'line' && (
              <g>
                <line x1="30" y1="100" x2="250" y2="100" stroke="#475569" strokeWidth="2.5" />
                <text x="35" y="95" fill="#475569" fontSize="10" fontWeight="bold">Line AB</text>
                <line x1="30" y1={100 - distance} x2="250" y2={100 - distance} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="30" y1={100 + distance} x2="250" y2={100 + distance} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                <text x="140" y={100 - distance - 5} fill="#f59e0b" fontSize="9" fontWeight="bold">Parallel Locus 1</text>
                <text x="140" y={100 + distance + 15} fill="#f59e0b" fontSize="9" fontWeight="bold">Parallel Locus 2</text>
              </g>
            )}

            {locusType === 'twoLines' && (
              <g>
                <line x1="40" y1="40" x2="240" y2="160" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="160" x2="240" y2="40" stroke="#475569" strokeWidth="2" />
                <line x1="140" y1="10" x2="140" y2="190" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="20" y1="100" x2="260" y2="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                <text x="145" y="30" fill="#f59e0b" fontSize="9" fontWeight="bold">Angle Bisector</text>
              </g>
            )}
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-3">
          {locusType === 'point' && (
            <div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Distance Radius: {distance} px</span>
              <input
                type="range"
                min="20"
                max="75"
                value={distance}
                onChange={(e) => setDistance(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-amber-600 mt-1"
              />
            </div>
          )}
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200">
            {locusType === 'point' && 'The locus of points at a constant distance from a fixed point is a CIRCLE.'}
            {locusType === 'twoPoints' && 'The locus of points equidistant from two fixed points is the PERPENDICULAR BISECTOR of the line joining them.'}
            {locusType === 'line' && 'The locus of points at a constant distance from a straight line is a PAIR OF PARALLEL LINES on either side.'}
            {locusType === 'twoLines' && 'The locus of points equidistant from two intersecting straight lines is the ANGLE BISECTOR.'}
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 9. STRAIGHT LINE EQUATION (Chapter 9)
// =========================================================================
export const StraightLineSimulator: React.FC = () => {
  const [gradient, setGradient] = useState<number>(2); // m
  const [yIntercept, setYIntercept] = useState<number>(-1); // c

  const xIntercept = gradient !== 0 ? (-yIntercept / gradient).toFixed(2) : 'Undefined';

  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-5 dark:border-indigo-900/60 dark:bg-slate-900 shadow-xs space-y-5">
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
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950 border border-slate-800 min-h-[260px]">
          <svg viewBox="-140 -140 280 280" className="w-full max-w-xs h-auto select-none">
            {[-100, -60, -20, 20, 60, 100].map((coord) => (
              <React.Fragment key={coord}>
                <line x1="-130" y1={coord} x2="130" y2={coord} stroke="#1e293b" strokeWidth="1" />
                <line x1={coord} y1="-130" x2={coord} y2="130" stroke="#1e293b" strokeWidth="1" />
              </React.Fragment>
            ))}

            <line x1="-130" y1="0" x2="130" y2="0" stroke="#64748b" strokeWidth="2" />
            <line x1="0" y1="-130" x2="0" y2="130" stroke="#64748b" strokeWidth="2" />

            {(() => {
              const x1 = -6;
              const y1 = gradient * x1 + yIntercept;
              const x2 = 6;
              const y2 = gradient * x2 + yIntercept;
              const scale = 20;

              return (
                <g>
                  <line
                    x1={x1 * scale}
                    y1={-y1 * scale}
                    x2={x2 * scale}
                    y2={-y2 * scale}
                    stroke="#818cf8"
                    strokeWidth="3"
                  />
                  <circle cx="0" cy={-yIntercept * scale} r="4.5" fill="#34d399" />
                  <text x="8" y={-yIntercept * scale + 4} fill="#34d399" fontSize="10" fontWeight="bold">
                    (0, {yIntercept})
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>Gradient (m):</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">{gradient}</span>
            </div>
            <input
              type="range"
              min="-5"
              max="5"
              step="1"
              value={gradient}
              onChange={(e) => setGradient(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-indigo-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>y-intercept (c):</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">{yIntercept}</span>
            </div>
            <input
              type="range"
              min="-4"
              max="4"
              step="1"
              value={yIntercept}
              onChange={(e) => setYIntercept(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-indigo-600"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Gradient (m):</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">{gradient}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">y-intercept (c):</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">{yIntercept}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">x-intercept (-c/m):</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">{xIntercept}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
