import { FormulaItem } from '../types';

export const formulaeList: FormulaItem[] = [
  // ==================== MATHEMATICS FORMULAE ====================
  {
    id: 'form-math-indices-mult-div',
    title: 'Multiplication & Division Laws of Indices',
    subject: 'math',
    chapterId: 'math-ch1',
    chapterNumber: 1,
    chapterTitle: 'Indices',
    formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ  |  aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
    formulaInWords: 'When multiplying numbers with the same base, add their powers. When dividing numbers with the same base, subtract the divisor power from the dividend power.',
    meaningOfSymbols: [
      { symbol: 'a', meaning: 'Base number (a ≠ 0)', unit: 'Dimensionless' },
      { symbol: 'm', meaning: 'First index/exponent', unit: 'Integer / Real number' },
      { symbol: 'n', meaning: 'Second index/exponent', unit: 'Integer / Real number' }
    ],
    units: ['Dimensionless numbers / algebraic variables'],
    example: {
      question: 'Simplify the algebraic expression (3p⁴ × 4p³) ÷ (6p²).',
      given: 'Terms with base p: 3p⁴, 4p³, 6p²',
      stepByStepCalculation: [
        'Step 1: Multiply numerical coefficients: 3 × 4 = 12.',
        'Step 2: Add indices for multiplication: p⁴ × p³ = p^(4 + 3) = p⁷.',
        'Step 3: Combine numerator: 12p⁷.',
        'Step 4: Divide numerical coefficient: 12 ÷ 6 = 2.',
        'Step 5: Subtract denominator index: p⁷ ÷ p² = p^(7 - 2) = p⁵.'
      ],
      finalAnswerWithUnit: '2p⁵'
    },
    notes: 'Base "a" must be identical. You cannot add powers of different bases (e.g. 2³ × 3² cannot be simplified by adding indices).'
  },
  {
    id: 'form-math-indices-fractional-zero-neg',
    title: 'Negative, Zero and Fractional Index Laws',
    subject: 'math',
    chapterId: 'math-ch1',
    chapterNumber: 1,
    chapterTitle: 'Indices',
    formula: 'a⁰ = 1  |  a⁻ⁿ = 1 / aⁿ  |  a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ',
    formulaInWords: 'Any non-zero base to power zero equals 1. A negative power equals the reciprocal of the positive power. A fractional power represents the nth root raised to the mth power.',
    meaningOfSymbols: [
      { symbol: 'a', meaning: 'Base (a ≠ 0)', unit: 'Real number' },
      { symbol: 'n', meaning: 'Root index (denominator)', unit: 'Positive integer' },
      { symbol: 'm', meaning: 'Power index (numerator)', unit: 'Integer' }
    ],
    units: ['Dimensionless numbers'],
    example: {
      question: 'Evaluate 64^(-2/3) without using a calculator.',
      given: 'Base = 64, Index = -2/3',
      stepByStepCalculation: [
        'Step 1: Convert negative power to reciprocal: 64^(-2/3) = 1 / 64^(2/3).',
        'Step 2: Take the cube root of 64: ³√64 = 4 (since 4³ = 64).',
        'Step 3: Square the resulting value: 4² = 16.',
        'Step 4: Combine into final fraction: 1 / 16.'
      ],
      finalAnswerWithUnit: '1/16'
    }
  },
  {
    id: 'form-math-standard-form',
    title: 'Standard Form (Scientific Notation)',
    subject: 'math',
    chapterId: 'math-ch2',
    chapterNumber: 2,
    chapterTitle: 'Standard Form',
    formula: 'A × 10ⁿ  (where 1 ≤ A < 10, n ∈ ℤ)',
    formulaInWords: 'A number written as a single non-zero digit before the decimal point, multiplied by 10 raised to an integer power.',
    meaningOfSymbols: [
      { symbol: 'A', meaning: 'Single digit coefficient such that 1 ≤ A < 10', unit: 'Decimal number' },
      { symbol: 'n', meaning: 'Power of 10 representing magnitude shift', unit: 'Integer (..., -2, -1, 0, 1, 2, ...)' }
    ],
    units: ['Standard SI units depending on quantity'],
    example: {
      question: 'Calculate (4.8 × 10⁶) ÷ (1.2 × 10⁻²) and state the answer in standard form.',
      given: 'Numerator = 4.8 × 10⁶, Denominator = 1.2 × 10⁻²',
      stepByStepCalculation: [
        'Step 1: Divide coefficients: 4.8 ÷ 1.2 = 4.0.',
        'Step 2: Subtract indices: 10⁶ ÷ 10⁻² = 10^(6 - (-2)) = 10^(6 + 2) = 10⁸.',
        'Step 3: Combine: 4.0 × 10⁸.',
        'Step 4: Check that 1 ≤ 4.0 < 10 (satisfied).'
      ],
      finalAnswerWithUnit: '4.0 × 10⁸'
    }
  },
  {
    id: 'form-math-simple-interest',
    title: 'Simple Interest Formula',
    subject: 'math',
    chapterId: 'math-ch3',
    chapterNumber: 3,
    chapterTitle: 'Consumer Mathematics: Savings and Investments, Credit and Debt',
    formula: 'I = P × r × t  |  Total Amount A = P + I = P(1 + rt)',
    formulaInWords: 'Simple Interest equals Principal multiplied by Annual Interest Rate multiplied by Time in years.',
    meaningOfSymbols: [
      { symbol: 'I', meaning: 'Total simple interest earned or paid', unit: 'RM (Ringgit Malaysia)' },
      { symbol: 'P', meaning: 'Principal (initial sum deposited or borrowed)', unit: 'RM' },
      { symbol: 'r', meaning: 'Annual interest rate expressed as a decimal (e.g. 5% = 0.05)', unit: 'per annum (decimal)' },
      { symbol: 't', meaning: 'Time duration of deposit or loan in years', unit: 'years' }
    ],
    units: ['Currency: RM', 'Time: years'],
    example: {
      question: 'Encik Razak deposits RM 8,000 into a fixed deposit account offering 3.5% simple interest per annum for 9 months. Calculate total interest.',
      given: 'P = RM 8,000, r = 3.5% = 0.035, t = 9/12 year = 0.75 year',
      stepByStepCalculation: [
        'Step 1: Convert months to years: t = 9 / 12 = 0.75 year.',
        'Step 2: Apply formula: I = P × r × t.',
        'Step 3: Compute: I = 8,000 × 0.035 × 0.75.',
        'Step 4: I = RM 210.00.'
      ],
      finalAnswerWithUnit: 'RM 210.00'
    }
  },
  {
    id: 'form-math-compound-interest',
    title: 'Compound Interest Maturity Value',
    subject: 'math',
    chapterId: 'math-ch3',
    chapterNumber: 3,
    chapterTitle: 'Consumer Mathematics: Savings and Investments, Credit and Debt',
    formula: 'MV = P (1 + r/n)^(nt)',
    formulaInWords: 'Maturity Value equals Principal multiplied by (1 plus rate divided by compounding frequency) all raised to the power of (compounding frequency times years).',
    meaningOfSymbols: [
      { symbol: 'MV', meaning: 'Maturity Value (total accumulated savings)', unit: 'RM' },
      { symbol: 'P', meaning: 'Principal invested', unit: 'RM' },
      { symbol: 'r', meaning: 'Annual interest rate as a decimal', unit: 'per annum' },
      { symbol: 'n', meaning: 'Compounding frequency per year (Monthly: n=12, Quarterly: n=4, Semi-annual: n=2)', unit: 'times/year' },
      { symbol: 't', meaning: 'Time in years', unit: 'years' }
    ],
    units: ['RM'],
    example: {
      question: 'Puan Siti invests RM 15,000 in a savings account with an annual interest rate of 4% compounded semi-annually for 3 years. Find the maturity value.',
      given: 'P = RM 15,000, r = 0.04, n = 2, t = 3',
      stepByStepCalculation: [
        'Step 1: Calculate periodic rate: r/n = 0.04 / 2 = 0.02.',
        'Step 2: Calculate total compounding periods: nt = 2 × 3 = 6.',
        'Step 3: Calculate base: 1 + 0.02 = 1.02.',
        'Step 4: Raise to power: (1.02)⁶ ≈ 1.126162.',
        'Step 5: Multiply by principal: MV = 15,000 × 1.126162 = RM 16,892.44.'
      ],
      finalAnswerWithUnit: 'RM 16,892.44'
    }
  },
  {
    id: 'form-math-scale-drawings',
    title: 'Scale Drawing Ratio',
    subject: 'math',
    chapterId: 'math-ch4',
    chapterNumber: 4,
    chapterTitle: 'Scale Drawings',
    formula: 'Scale = Length of Drawing : Length of Actual Object = 1 : n  (where n = Actual Length / Drawing Length)',
    formulaInWords: 'Scale ratio represents 1 unit on the drawing to n units on the real object in the exact same measurement unit.',
    meaningOfSymbols: [
      { symbol: '1', meaning: 'Measurement on the scale drawing', unit: 'cm or mm' },
      { symbol: 'n', meaning: 'Actual physical measurement in equivalent units', unit: 'Same unit as drawing' }
    ],
    units: ['Ratio (dimensionless)'],
    example: {
      question: 'A highway of length 12 km is represented on a state map by a line segment of 4 cm. State the scale of the map in the form 1 : n.',
      given: 'Drawing length = 4 cm, Actual length = 12 km',
      stepByStepCalculation: [
        'Step 1: Convert actual length to cm: 12 km = 12 × 1000 m = 12,000 m = 1,200,000 cm.',
        'Step 2: Set up ratio: 4 cm : 1,200,000 cm.',
        'Step 3: Divide both sides by 4 to normalize drawing to 1: 4/4 : 1,200,000/4 = 1 : 300,000.'
      ],
      finalAnswerWithUnit: '1 : 300,000'
    }
  },
  {
    id: 'form-math-trigonometry-soh-cah-toa',
    title: 'Trigonometric Ratios (SOH CAH TOA)',
    subject: 'math',
    chapterId: 'math-ch5',
    chapterNumber: 5,
    chapterTitle: 'Trigonometric Ratios',
    formula: 'sin θ = Opp / Hyp  |  cos θ = Adj / Hyp  |  tan θ = Opp / Adj = sin θ / cos θ',
    formulaInWords: 'Sine is Opposite over Hypotenuse. Cosine is Adjacent over Hypotenuse. Tangent is Opposite over Adjacent.',
    meaningOfSymbols: [
      { symbol: 'θ', meaning: 'Acute angle in a right-angled triangle', unit: 'degrees (°)' },
      { symbol: 'Opp', meaning: 'Length of side opposite to angle θ', unit: 'cm / m' },
      { symbol: 'Adj', meaning: 'Length of side adjacent (next) to angle θ', unit: 'cm / m' },
      { symbol: 'Hyp', meaning: 'Hypotenuse (longest side opposite to 90° angle)', unit: 'cm / m' }
    ],
    units: ['Dimensionless ratio'],
    example: {
      question: 'In a right-angled triangle ABC (∠B = 90°), AB = 8 cm and BC = 6 cm. Find hypotenuse AC and evaluate tan ∠BAC.',
      given: 'Opposite to ∠BAC = BC = 6 cm, Adjacent to ∠BAC = AB = 8 cm',
      stepByStepCalculation: [
        'Step 1: Find hypotenuse AC by Pythagoras theorem: AC = √(8² + 6²) = √(64 + 36) = √100 = 10 cm.',
        'Step 2: Apply tangent definition: tan ∠BAC = Opposite / Adjacent.',
        'Step 3: Compute ratio: tan ∠BAC = 6 / 8 = 3/4 = 0.75.'
      ],
      finalAnswerWithUnit: '0.75 (or 3/4)'
    }
  },
  {
    id: 'form-math-gradient',
    title: 'Gradient of a Straight Line (m)',
    subject: 'math',
    chapterId: 'math-ch9',
    chapterNumber: 9,
    chapterTitle: 'Straight Lines',
    formula: 'm = (y₂ - y₁) / (x₂ - x₁) = -(y-intercept) / (x-intercept)',
    formulaInWords: 'Gradient is the vertical rise divided by the horizontal run between two points, or negative y-intercept divided by x-intercept.',
    meaningOfSymbols: [
      { symbol: 'm', meaning: 'Gradient (slope) of the straight line', unit: 'Dimensionless' },
      { symbol: '(x₁, y₁)', meaning: 'Coordinates of first point', unit: 'Coordinate plane' },
      { symbol: '(x₂, y₂)', meaning: 'Coordinates of second point', unit: 'Coordinate plane' }
    ],
    units: ['Dimensionless / rate of change'],
    example: {
      question: 'A straight line has an x-intercept of 4 and passes through (2, 6). Find the gradient and equation of the line.',
      given: 'Point 1 = (4, 0), Point 2 = (2, 6)',
      stepByStepCalculation: [
        'Step 1: Apply gradient formula: m = (6 - 0) / (2 - 4) = 6 / (-2) = -3.',
        'Step 2: Substitute m = -3 and point (4, 0) into y = mx + c: 0 = -3(4) + c → c = 12.',
        'Step 3: Formulate equation: y = -3x + 12.'
      ],
      finalAnswerWithUnit: 'Gradient m = -3, Equation: y = -3x + 12'
    }
  },

  // ==================== SCIENCE FORMULAE ====================
  {
    id: 'form-sci-transformer',
    title: 'Ideal Transformer Equation',
    subject: 'science',
    chapterId: 'sci-ch6',
    chapterNumber: 6,
    chapterTitle: 'Electricity and Magnetism',
    formula: 'Vp / Vs = Np / Ns = Is / Ip',
    formulaInWords: 'Primary Voltage over Secondary Voltage equals Primary Turns over Secondary Turns equals Secondary Current over Primary Current.',
    meaningOfSymbols: [
      { symbol: 'Vp', meaning: 'Primary (input) voltage', unit: 'Volt (V)' },
      { symbol: 'Vs', meaning: 'Secondary (output) voltage', unit: 'Volt (V)' },
      { symbol: 'Np', meaning: 'Number of turns in primary coil', unit: 'turns' },
      { symbol: 'Ns', meaning: 'Number of turns in secondary coil', unit: 'turns' },
      { symbol: 'Ip', meaning: 'Primary current', unit: 'Ampere (A)' },
      { symbol: 'Is', meaning: 'Secondary current', unit: 'Ampere (A)' }
    ],
    units: ['Voltage in V', 'Current in A', 'Turns (integer)'],
    example: {
      question: 'A step-down transformer connected to a 240 V mains supply has 1,200 turns in the primary coil and 60 turns in the secondary coil. Calculate output voltage Vs.',
      given: 'Vp = 240 V, Np = 1,200, Ns = 60',
      stepByStepCalculation: [
        'Step 1: Apply ratio formula: Vs = Vp × (Ns / Np).',
        'Step 2: Substitute knowns: Vs = 240 × (60 / 1200).',
        'Step 3: Simplify fraction: 60 / 1200 = 1 / 20 = 0.05.',
        'Step 4: Compute: Vs = 240 × 0.05 = 12 V.'
      ],
      finalAnswerWithUnit: '12 V'
    }
  },
  {
    id: 'form-sci-electrical-energy-bill',
    title: 'Electrical Energy Consumption & Tariff Billing',
    subject: 'science',
    chapterId: 'sci-ch6',
    chapterNumber: 6,
    chapterTitle: 'Electricity and Magnetism',
    formula: 'Energy E (kWh) = (Power in Watts × Time in hours) / 1000 = Power in kW × Time in hours',
    formulaInWords: 'Energy consumed in kilowatt-hours (units) equals appliance power in kilowatts multiplied by usage time in hours.',
    meaningOfSymbols: [
      { symbol: 'E', meaning: 'Electrical energy consumed (1 unit = 1 kWh)', unit: 'Kilowatt-hour (kWh)' },
      { symbol: 'P', meaning: 'Electric power rating of appliance', unit: 'Watt (W) or Kilowatt (kW)' },
      { symbol: 't', meaning: 'Total operating time', unit: 'Hours (h)' }
    ],
    units: ['kWh (units)', 'kW', 'hours'],
    example: {
      question: 'An air conditioner rated at 1,500 W is switched on for 8 hours daily for 30 days. If electricity costs RM 0.20 per unit, calculate total monthly cost.',
      given: 'P = 1500 W = 1.5 kW, t = 8 h/day × 30 days = 240 h, Rate = RM 0.20/kWh',
      stepByStepCalculation: [
        'Step 1: Calculate total kWh: E = 1.5 kW × 240 h = 360 kWh.',
        'Step 2: Multiply by tariff rate: Total Cost = 360 units × RM 0.20.',
        'Step 3: Compute: RM 72.00.'
      ],
      finalAnswerWithUnit: 'RM 72.00'
    }
  },
  {
    id: 'form-sci-work-and-power',
    title: 'Work Done and Power Output',
    subject: 'science',
    chapterId: 'sci-ch7',
    chapterNumber: 7,
    chapterTitle: 'Energy and Power',
    formula: 'Work W = F × s  |  Power P = W / t = E / t',
    formulaInWords: 'Work done equals Force multiplied by Displacement in the direction of the force. Power equals Work done divided by Time taken.',
    meaningOfSymbols: [
      { symbol: 'W', meaning: 'Work done', unit: 'Joule (J = N·m)' },
      { symbol: 'F', meaning: 'Applied force', unit: 'Newton (N)' },
      { symbol: 's', meaning: 'Displacement along line of action of force', unit: 'Metre (m)' },
      { symbol: 'P', meaning: 'Power output', unit: 'Watt (W = J/s)' },
      { symbol: 't', meaning: 'Time taken to perform the work', unit: 'Second (s)' }
    ],
    units: ['Work in Joules (J)', 'Power in Watts (W)', 'Force in N', 'Distance in m', 'Time in s'],
    example: {
      question: 'A crane lifts a 500 kg concrete block vertically upward to a height of 12 m in 15 seconds (assume g = 10 m/s²). Calculate work done and power.',
      given: 'm = 500 kg, g = 10 m/s², F = mg = 500 × 10 = 5000 N, s = 12 m, t = 15 s',
      stepByStepCalculation: [
        'Step 1: Calculate lifting force: F = mg = 500 × 10 = 5,000 N.',
        'Step 2: Calculate work done: W = F × s = 5,000 N × 12 m = 60,000 J.',
        'Step 3: Calculate power output: P = W / t = 60,000 J / 15 s = 4,000 W = 4 kW.'
      ],
      finalAnswerWithUnit: 'Work = 60,000 J (60 kJ), Power = 4,000 W (4 kW)'
    }
  },
  {
    id: 'form-sci-gravitational-potential-energy',
    title: 'Gravitational Potential Energy (Ep)',
    subject: 'science',
    chapterId: 'sci-ch7',
    chapterNumber: 7,
    chapterTitle: 'Energy and Power',
    formula: 'Ep = m × g × h',
    formulaInWords: 'Gravitational Potential Energy equals Mass multiplied by Gravitational Acceleration multiplied by Vertical Height above reference level.',
    meaningOfSymbols: [
      { symbol: 'Ep', meaning: 'Gravitational Potential Energy', unit: 'Joule (J)' },
      { symbol: 'm', meaning: 'Mass of object', unit: 'Kilogram (kg)' },
      { symbol: 'g', meaning: 'Gravitational acceleration (standard g = 10 m/s² or 9.81 m/s²)', unit: 'm/s² or N/kg' },
      { symbol: 'h', meaning: 'Vertical height above reference ground', unit: 'Metre (m)' }
    ],
    units: ['Joule (J)', 'kg', 'm/s²', 'm'],
    example: {
      question: 'Calculate the gravitational potential energy of a 3 kg rock resting on a cliff 25 m above sea level (g = 10 m/s²).',
      given: 'm = 3 kg, g = 10 m/s², h = 25 m',
      stepByStepCalculation: [
        'Step 1: Apply formula: Ep = mgh.',
        'Step 2: Substitute values: Ep = 3 × 10 × 25.',
        'Step 3: Compute: Ep = 750 J.'
      ],
      finalAnswerWithUnit: '750 J'
    }
  },
  {
    id: 'form-sci-kinetic-energy',
    title: 'Kinetic Energy (Ek)',
    subject: 'science',
    chapterId: 'sci-ch7',
    chapterNumber: 7,
    chapterTitle: 'Energy and Power',
    formula: 'Ek = ½ × m × v²',
    formulaInWords: 'Kinetic Energy equals one-half multiplied by Mass multiplied by Velocity squared.',
    meaningOfSymbols: [
      { symbol: 'Ek', meaning: 'Kinetic Energy of moving body', unit: 'Joule (J)' },
      { symbol: 'm', meaning: 'Mass of object', unit: 'Kilogram (kg)' },
      { symbol: 'v', meaning: 'Linear velocity/speed', unit: 'Metre per second (m/s)' }
    ],
    units: ['Joule (J)', 'kg', 'm/s'],
    example: {
      question: 'A 1,200 kg car travels on a highway at a steady speed of 20 m/s (72 km/h). Find its kinetic energy.',
      given: 'm = 1,200 kg, v = 20 m/s',
      stepByStepCalculation: [
        'Step 1: Square the velocity: v² = 20² = 400 m²/s².',
        'Step 2: Multiply by mass and half: Ek = 0.5 × 1,200 × 400.',
        'Step 3: Compute: Ek = 600 × 400 = 240,000 J = 240 kJ.'
      ],
      finalAnswerWithUnit: '240,000 J (240 kJ)'
    }
  },
  {
    id: 'form-sci-half-life',
    title: 'Radioactive Decay Half-Life Law',
    subject: 'science',
    chapterId: 'sci-ch8',
    chapterNumber: 8,
    chapterTitle: 'Radioactivity',
    formula: 'N = N₀ × (½)ⁿ   where n = Elapsed Time (t) / Half-life (T½)',
    formulaInWords: 'Remaining quantity or activity equals initial quantity multiplied by (1/2) raised to the number of elapsed half-life periods.',
    meaningOfSymbols: [
      { symbol: 'N', meaning: 'Remaining mass or activity at time t', unit: 'g, mg, Bq (Becquerel), or counts/min' },
      { symbol: 'N₀', meaning: 'Initial original mass or activity at t = 0', unit: 'Same unit as N' },
      { symbol: 'n', meaning: 'Number of half-lives elapsed (n = t / T½)', unit: 'Dimensionless' },
      { symbol: 'T½', meaning: 'Half-life duration of the radioisotope', unit: 'seconds, hours, days, years' }
    ],
    units: ['Mass (g), Activity (Bq), Time'],
    example: {
      question: 'Phosphorus-32 has a half-life of 14 days. If a laboratory begins with 64 mg of P-32, determine the remaining mass after 56 days.',
      given: 'N₀ = 64 mg, T½ = 14 days, t = 56 days',
      stepByStepCalculation: [
        'Step 1: Calculate number of elapsed half-lives: n = t / T½ = 56 / 14 = 4 half-lives.',
        'Step 2: Apply formula: N = 64 × (½)⁴.',
        'Step 3: Compute (½)⁴ = 1/16.',
        'Step 4: N = 64 × (1/16) = 4 mg.'
      ],
      finalAnswerWithUnit: '4 mg'
    }
  }
];
