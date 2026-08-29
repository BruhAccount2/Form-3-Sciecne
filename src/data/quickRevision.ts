import { QuickRevisionData } from '../types';

export const quickRevisionDataList: QuickRevisionData[] = [
  // ==================== MATH CHAPTER 1: INDICES ====================
  {
    chapterId: 'math-ch1',
    chapterNumber: 1,
    chapterTitle: 'Indices',
    subject: 'math',
    targetDurationMinutes: 8,
    keyDefinitions: [
      { term: 'Base & Index', definition: 'In aⁿ, a is the repeated base and n is the exponent indicating how many times a is multiplied by itself.' },
      { term: 'Zero Index', definition: 'Any non-zero real number or algebraic base raised to power 0 equals 1 (a⁰ = 1, a ≠ 0).' }
    ],
    keyFacts: [
      'Multiplication with same base: add indices (aᵐ × aⁿ = aᵐ⁺ⁿ).',
      'Division with same base: subtract indices (aᵐ ÷ aⁿ = aᵐ⁻ⁿ).',
      'Power of a power: multiply indices ((aᵐ)ⁿ = aᵐⁿ).',
      'Fractional powers represent roots: a^(1/n) = ⁿ√a and a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ).'
    ],
    formulae: [
      'aᵐ × aⁿ = aᵐ⁺ⁿ',
      'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
      '(aᵐ)ⁿ = aᵐⁿ',
      'a⁰ = 1',
      'a⁻ⁿ = 1 / aⁿ',
      'a^(m/n) = (ⁿ√a)ᵐ'
    ],
    importantPoints: [
      'Indices laws apply ONLY when bases are identical.',
      'Negative base inside brackets (-2)⁴ = +16; without brackets -2⁴ = -(2⁴) = -16.'
    ],
    commonMistakes: [
      {
        mistake: 'Writing 2³ × 3² = 6⁵',
        correction: '2³ × 3² = 8 × 9 = 72 (cannot add powers because bases 2 and 3 are different).',
        why: 'Laws of indices only permit adding powers when the base is strictly identical.'
      },
      {
        mistake: 'Writing (a + b)² = a² + b²',
        correction: '(a + b)² = a² + 2ab + b²',
        why: 'Powers do not distribute over addition or subtraction.'
      }
    ],
    rapidFireQuestions: [
      {
        id: 'q-math-1-1',
        question: 'What is the value of 5⁰ + 2⁻¹?',
        options: ['1.5', '0.5', '1', '2.5'],
        correctIndex: 0,
        explanation: '5⁰ = 1 and 2⁻¹ = 1/2 = 0.5. Total = 1 + 0.5 = 1.5.',
        topic: 'Zero & Negative Indices'
      },
      {
        id: 'q-math-1-2',
        question: 'Simplify (x³)² × x⁴.',
        options: ['x¹⁰', 'x⁹', 'x²⁴', 'x¹⁴'],
        correctIndex: 0,
        explanation: '(x³)² = x^(3×2) = x⁶. Then x⁶ × x⁴ = x^(6+4) = x¹⁰.',
        topic: 'Laws of Indices'
      },
      {
        id: 'q-math-1-3',
        question: 'Evaluate 16^(3/4).',
        options: ['8', '4', '12', '64'],
        correctIndex: 0,
        explanation: '⁴√16 = 2. Then 2³ = 8.',
        topic: 'Fractional Indices'
      }
    ]
  },

  // ==================== MATH CHAPTER 2: STANDARD FORM ====================
  {
    chapterId: 'math-ch2',
    chapterNumber: 2,
    chapterTitle: 'Standard Form',
    subject: 'math',
    targetDurationMinutes: 7,
    keyDefinitions: [
      { term: 'Significant Figures', definition: 'Digits in a measurement that carry precision, starting from the first non-zero digit.' },
      { term: 'Standard Form', definition: 'Format A × 10ⁿ where 1 ≤ A < 10 and n is an integer.' }
    ],
    keyFacts: [
      'Leading zeros (e.g. 0.003) are never significant.',
      'Zeros between non-zero digits are always significant (e.g. 4005 has 4 s.f.).',
      'For numbers ≥ 10, index n is positive; for numbers < 1, index n is negative.'
    ],
    formulae: [
      'Standard Form: A × 10ⁿ (1 ≤ A < 10, n ∈ ℤ)'
    ],
    importantPoints: [
      'Always ensure the coefficient A is strictly between 1 and 9.999... (never 0.35 × 10⁴ or 35 × 10²).'
    ],
    commonMistakes: [
      {
        mistake: 'Counting 0.0052 as having 4 significant figures.',
        correction: '0.0052 has only 2 significant figures (5 and 2).',
        why: 'Leading zeros before the first non-zero digit are place-holders, not significant figures.'
      }
    ],
    rapidFireQuestions: [
      {
        id: 'q-math-2-1',
        question: 'How many significant figures are in 0.03040?',
        options: ['4', '5', '3', '2'],
        correctIndex: 0,
        explanation: 'Leading zeros do not count. The digits 3, 0, 4, 0 (4 digits) are significant.',
        topic: 'Significant Figures'
      },
      {
        id: 'q-math-2-2',
        question: 'Express 425,000 in standard form.',
        options: ['4.25 × 10⁵', '42.5 × 10⁴', '4.25 × 10⁶', '0.425 × 10⁶'],
        correctIndex: 0,
        explanation: 'Move decimal 5 places left: 4.25 × 10⁵.',
        topic: 'Standard Form'
      }
    ]
  },

  // ==================== MATH CHAPTER 3: CONSUMER MATH ====================
  {
    chapterId: 'math-ch3',
    chapterNumber: 3,
    chapterTitle: 'Consumer Mathematics: Savings and Investments, Credit and Debt',
    subject: 'math',
    targetDurationMinutes: 10,
    keyDefinitions: [
      { term: 'Compound Interest', definition: 'Interest calculated on both initial principal and accumulated previous interest: MV = P(1 + r/n)^(nt).' },
      { term: 'Return on Investment (ROI)', definition: 'ROI = (Total Return / Initial Capital) × 100%.' }
    ],
    keyFacts: [
      'Simple Interest: I = Prt. Principal does not grow during the term.',
      'Higher compounding frequency (monthly n=12 vs annual n=1) yields higher maturity value.',
      'Flat rate loan: Interest is calculated on the full original loan amount for the whole period.'
    ],
    formulae: [
      'I = Prt',
      'MV = P(1 + r/n)^(nt)',
      'ROI = (Total Return / Initial Capital) × 100%',
      'Monthly Instalment = Total Loan Amount / Total Months'
    ],
    importantPoints: [
      'Time t must always be converted to years (e.g. 6 months = 0.5 year).'
    ],
    commonMistakes: [
      {
        mistake: 'Using t = 6 instead of t = 0.5 for a 6-month term.',
        correction: 'Divide months by 12: t = 6/12 = 0.5 year.',
        why: 'Annual interest rates (per annum) require time in years.'
      }
    ],
    rapidFireQuestions: [
      {
        id: 'q-math-3-1',
        question: 'Calculate simple interest on RM 5,000 at 4% p.a. for 6 months.',
        options: ['RM 100', 'RM 200', 'RM 50', 'RM 120'],
        correctIndex: 0,
        explanation: 'I = 5000 × 0.04 × (6/12) = 5000 × 0.04 × 0.5 = RM 100.',
        topic: 'Simple Interest'
      }
    ]
  },

  // ==================== SCIENCE CHAPTER 1: STIMULI & RESPONSES ====================
  {
    chapterId: 'sci-ch1',
    chapterNumber: 1,
    chapterTitle: 'Stimuli and Responses',
    subject: 'science',
    targetDurationMinutes: 8,
    keyDefinitions: [
      { term: 'Reflex Arc', definition: 'The rapid, automatic neural pathway linking receptor, sensory neurone, spinal cord relay neurone, motor neurone, and effector.' },
      { term: 'Stereoscopic Vision', definition: 'Vision using two eyes at the front of the head with overlapping fields, enabling 3D depth and distance estimation.' }
    ],
    keyFacts: [
      'CNS consists of Brain and Spinal Cord. PNS consists of 12 pairs of cranial nerves and 31 pairs of spinal nerves.',
      'Involuntary actions (heartbeat, digestion) are controlled automatically by the medulla oblongata or spinal cord.',
      'Plant phototropism: Shoot tip auxins accumulate on the shaded side, stimulating cell elongation towards light.'
    ],
    formulae: [
      'Stimulus → Receptor → Sensory Neurone → Relay Neurone (CNS) → Motor Neurone → Effector → Response'
    ],
    importantPoints: [
      'Voluntary actions involve conscious cerebral cortex control; involuntary reflex actions bypass conscious brain thought.'
    ],
    commonMistakes: [
      {
        mistake: 'Thinking motor neurone transmits impulses from receptor to spinal cord.',
        correction: 'Sensory neurone goes from receptor to CNS; Motor neurone goes from CNS to effector.',
        why: 'Sensory = in to CNS; Motor = out to muscle effector.'
      }
    ],
    rapidFireQuestions: [
      {
        id: 'q-sci-1-1',
        question: 'Which part of the human brain coordinates balance and muscle movement?',
        options: ['Cerebellum', 'Cerebrum', 'Medulla Oblongata', 'Hypothalamus'],
        correctIndex: 0,
        explanation: 'The cerebellum controls body balance and fine muscular coordination.',
        topic: 'Nervous System'
      },
      {
        id: 'q-sci-1-2',
        question: 'Which visual adaptation allows predatory animals like tigers to gauge distance accurately?',
        options: ['Stereoscopic vision', 'Monocular vision', 'Nocturnal vision', 'Wide field of view'],
        correctIndex: 0,
        explanation: 'Stereoscopic vision uses frontal overlapping fields for 3D depth perception.',
        topic: 'Sensory Adaptation'
      }
    ]
  },

  // ==================== SCIENCE CHAPTER 6: ELECTRICITY & MAGNETISM ====================
  {
    chapterId: 'sci-ch6',
    chapterNumber: 6,
    chapterTitle: 'Electricity and Magnetism',
    subject: 'science',
    targetDurationMinutes: 9,
    keyDefinitions: [
      { term: 'Transformer', definition: 'A voltage-modulating device operating on electromagnetic mutual induction using alternating current.' },
      { term: 'National Grid', definition: 'High-voltage interconnected electrical transmission network (132 kV - 500 kV).' }
    ],
    keyFacts: [
      'Step-up transformer: Ns > Np → Vs > Vp and Is < Ip.',
      'Step-down transformer: Ns < Np → Vs < Vp and Is > Ip.',
      'High voltage transmission minimizes heat loss in cables (Power Loss = I²R).',
      'Transformers do NOT work with DC because DC produces a steady, unchanging magnetic field.'
    ],
    formulae: [
      'Vp / Vs = Np / Ns = Is / Ip',
      'Power P = V × I',
      'Energy E (kWh) = (Power in W × Time in h) / 1000'
    ],
    importantPoints: [
      'Household mains in Malaysia is 240 V AC at 50 Hz.'
    ],
    commonMistakes: [
      {
        mistake: 'Assuming a transformer can step up DC voltage from a battery.',
        correction: 'Transformers only operate on AC (alternating current).',
        why: 'Induction requires continuous change in magnetic flux, which steady DC cannot provide.'
      }
    ],
    rapidFireQuestions: [
      {
        id: 'q-sci-6-1',
        question: 'A step-up transformer has Np = 100 and Ns = 500. If input voltage is 20 V, what is output voltage?',
        options: ['100 V', '4 V', '50 V', '200 V'],
        correctIndex: 0,
        explanation: 'Vs = Vp × (Ns / Np) = 20 × (500 / 100) = 20 × 5 = 100 V.',
        topic: 'Transformers'
      }
    ]
  },

  // ==================== SCIENCE CHAPTER 8: RADIOACTIVITY ====================
  {
    chapterId: 'sci-ch8',
    chapterNumber: 8,
    chapterTitle: 'Radioactivity',
    subject: 'science',
    targetDurationMinutes: 8,
    keyDefinitions: [
      { term: 'Half-Life (T½)', definition: 'Time required for half the unstable radioactive nuclei in a sample to decay.' },
      { term: 'Ionizing Radiation', definition: 'Alpha (⁴₂He), Beta (⁰₋₁e), and Gamma (γ) emissions that remove electrons from atoms.' }
    ],
    keyFacts: [
      'Alpha has highest ionizing power and lowest penetration (stopped by paper).',
      'Gamma has lowest ionizing power and highest penetration (stopped by lead/thick concrete).',
      'Half-life decay formula: Remaining N = N₀ × (1/2)ⁿ where n = time / T½.'
    ],
    formulae: [
      'N = N₀ × (½)ⁿ (n = t / T½)'
    ],
    importantPoints: [
      'Half-life is constant for a specific isotope and unaffected by temperature, pressure, or chemical state.'
    ],
    commonMistakes: [
      {
        mistake: 'Believing heating a radioactive substance speeds up its half-life decay.',
        correction: 'Radioactive decay is a spontaneous nuclear phenomenon completely independent of physical or chemical conditions.',
        why: 'Decay originates inside the atomic nucleus, unaffected by electron thermal collisions.'
      }
    ],
    rapidFireQuestions: [
      {
        id: 'q-sci-8-1',
        question: 'If a 120 g radioactive isotope has a half-life of 5 days, how much remains after 15 days?',
        options: ['15 g', '30 g', '7.5 g', '60 g'],
        correctIndex: 0,
        explanation: 'n = 15 / 5 = 3 half-lives. Remaining = 120 × (1/2)³ = 120 / 8 = 15 g.',
        topic: 'Half-Life Calculation'
      }
    ]
  }
];
