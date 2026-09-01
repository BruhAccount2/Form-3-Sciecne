import { SubjectiveMarkingItem } from '../types';

export const markingSchemesData: SubjectiveMarkingItem[] = [
  // ==================== PAST PAPER MARKING SCHEMES ====================
  {
    id: 'ms-pp-mrsm-math-01',
    title: '2025 MRSM Form 3 Mathematics Paper 2 — Coordinate Geometry & Straight Lines',
    subject: 'math',
    chapterId: 'math-ch9',
    chapterNumber: 9,
    chapterTitle: 'Straight Lines',
    year: 2025,
    sourceType: 'past_paper',
    sourceName: 'Maktab Rendah Sains MARA (MRSM)',
    questionNumber: 'Section B, Q4',
    section: 'Section B',
    question: 'A straight line passing through point A(2, 5) is parallel to the line 4x - 2y = 8. (a) Determine the gradient of the line. (b) State the equation of the line in the form y = mx + c.',
    marks: 4,
    expectedAnswer: '(a) Gradient m = 2, (b) Equation of line: y = 2x + 1',
    acceptableAlternatives: ['2x - y + 1 = 0 (if simplified to general form, though y = mx + c is specifically requested)'],
    workingSteps: [
      'Step 1: Express 4x - 2y = 8 in the gradient-intercept form: 2y = 4x - 8 → y = 2x - 4.',
      'Step 2: State gradient of given line is 2. Since parallel lines have equal gradients, m₁ = m₂ = 2.',
      'Step 3: Substitute m = 2 and point (x = 2, y = 5) into y = mx + c: 5 = 2(2) + c → 5 = 4 + c → c = 1.',
      'Step 4: Write the final equation: y = 2x + 1.'
    ],
    markAllocation: [
      { step: 'Method 1', mark: 1, criteria: 'Rearranging 4x - 2y = 8 into y = mx + c form to deduce gradient m = 2.' },
      { step: 'Knowledge 1', mark: 1, criteria: 'Correctly identifying parallel gradient condition (m₁ = m₂ = 2).' },
      { step: 'Method 2', mark: 1, criteria: 'Substituting point (2, 5) and gradient 2 to calculate y-intercept c = 1.' },
      { step: 'Accuracy 1', mark: 1, criteria: 'Writing correct final linear equation: y = 2x + 1.' }
    ],
    keyTerms: ['Parallel gradients', 'Gradient-intercept form', 'y-intercept'],
    commonErrors: [
      'Assuming gradient is 4 from the term 4x without dividing by the coefficient 2.',
      'Confusing parallel gradient condition with perpendicular gradients (using -1/m).'
    ],
    explanation: 'Parallel lines never intersect and always possess identical slopes. Rearranging 4x - 2y = 8 into explicit form yields y = 2x - 4, giving gradient 2.'
  },
  {
    id: 'ms-pp-mrsm-sci-01',
    title: '2025 MRSM Form 3 Science Paper 2 — Transformers & Electromagnetic Induction',
    subject: 'science',
    chapterId: 'sci-ch6',
    chapterNumber: 6,
    chapterTitle: 'Electricity and Magnetism',
    year: 2025,
    sourceType: 'past_paper',
    sourceName: 'Maktab Rendah Sains MARA (MRSM)',
    questionNumber: 'Section B, Q3',
    section: 'Section B',
    question: 'A step-down transformer connected to a 240 V AC supply produces an output of 12 V to power an electric doorbell. If the primary coil has 800 turns: (a) Calculate the number of turns in the secondary coil. (b) Explain why a transformer cannot operate on a 12 V direct current (DC) car battery.',
    marks: 4,
    expectedAnswer: '(a) Ns = 40 turns, (b) Direct current produces a steady, non-changing magnetic field, hence no change in magnetic flux occurs and no voltage is induced in the secondary coil.',
    workingSteps: [
      'Step 1: Write the transformer ratio formula: Vp / Vs = Np / Ns.',
      'Step 2: Substitute values: 240 / 12 = 800 / Ns → 20 = 800 / Ns → Ns = 800 / 20 = 40 turns.',
      'Step 3: State that DC produces a constant/stationary magnetic flux.',
      'Step 4: State that Faraday’s law of electromagnetic induction requires a changing magnetic flux to induce secondary potential difference.'
    ],
    markAllocation: [
      { step: 'Formula', mark: 1, criteria: 'Stating or applying transformer equation Vp / Vs = Np / Ns.' },
      { step: 'Calculation', mark: 1, criteria: 'Correct substitution and evaluation giving Ns = 40 turns.' },
      { step: 'Scientific Fact', mark: 1, criteria: 'Explaining that DC maintains a constant/stationary magnetic field.' },
      { step: 'Reasoning', mark: 1, criteria: 'Explaining that without changing magnetic flux, no electromotive force (e.m.f.) is induced.' }
    ],
    keyTerms: ['Step-down transformer', 'Alternating current (AC)', 'Direct current (DC)', 'Magnetic flux', 'Electromagnetic induction'],
    commonErrors: [
      'Inverting the transformer ratio (e.g., using Ns / Np = Vp / Vs).',
      'Stating that DC burns the transformer without explaining the magnetic flux mechanism.'
    ],
    explanation: 'Transformers require an alternating current to create an oscillating magnetic field in the soft iron core, which cuts the secondary coil and induces voltage.'
  },
  {
    id: 'ms-pp-selangor-math-01',
    title: '2024 Selangor State Form 3 Preparatory Exam — Angles in Circles',
    subject: 'math',
    chapterId: 'math-ch6',
    chapterNumber: 6,
    chapterTitle: 'Angles and Tangents of Circles',
    year: 2024,
    sourceType: 'past_paper',
    sourceName: 'Jabatan Pendidikan Negeri Selangor (JPNS)',
    questionNumber: 'Section B, Q2',
    section: 'Section B',
    question: 'In a circle with centre O, arc AB subtends an angle of 74° at the centre. (a) State the geometric theorem relating the angle at the centre and the angle at the circumference. (b) Find the angle subtended by arc AB at the circumference on the major arc.',
    marks: 3,
    expectedAnswer: '(a) The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference. (b) 37°',
    workingSteps: [
      'Step 1: State circle theorem: Angle at centre = 2 × Angle at circumference.',
      'Step 2: Let angle at circumference be θ. 2θ = 74°.',
      'Step 3: θ = 74° ÷ 2 = 37°.'
    ],
    markAllocation: [
      { step: 'Theorem Statement', mark: 1, criteria: 'Correct statement of circle theorem relating central angle and circumference angle.' },
      { step: 'Substitution', mark: 1, criteria: 'Dividing 74° by 2.' },
      { step: 'Final Answer', mark: 1, criteria: 'Correct calculation of 37°.' }
    ],
    keyTerms: ['Subtended angle', 'Major arc', 'Circumference angle', 'Central angle'],
    commonErrors: [
      'Multiplying 74° by 2 instead of dividing by 2.',
      'Confusing angles subtended by the same arc with cyclic quadrilateral supplementary angles (180° - θ).'
    ],
    explanation: 'For any arc of a circle, the angle formed at the centre is double any inscribed angle on the circumference subtended by that same arc.'
  },
  {
    id: 'ms-pp-johor-sci-01',
    title: '2024 Johor State Form 3 Preparatory Exam — Conservation of Mechanical Energy',
    subject: 'science',
    chapterId: 'sci-ch7',
    chapterNumber: 7,
    chapterTitle: 'Energy and Power',
    year: 2024,
    sourceType: 'past_paper',
    sourceName: 'Jabatan Pendidikan Negeri Johor (JPNJ)',
    questionNumber: 'Section B, Q2',
    section: 'Section B',
    question: 'A 2 kg coconut falls from a tree branch 8 m above the ground (take g = 10 m/s²). Ignoring air resistance: (a) Calculate the gravitational potential energy of the coconut at the branch. (b) Using the principle of conservation of energy, calculate the velocity of the coconut just before hitting the ground.',
    marks: 4,
    expectedAnswer: '(a) GPE = 160 J, (b) v = 12.65 m/s (or 4√10 m/s)',
    workingSteps: [
      'Step 1: GPE = mgh = 2 kg × 10 m/s² × 8 m = 160 J.',
      'Step 2: State Principle of Conservation of Energy: Loss in GPE = Gain in Kinetic Energy (KE).',
      'Step 3: 1/2 mv² = 160 J → 1/2 × 2 × v² = 160 → v² = 160.',
      'Step 4: v = √160 ≈ 12.65 m/s.'
    ],
    markAllocation: [
      { step: 'Potential Energy', mark: 1, criteria: 'Correct calculation of GPE = mgh = 2 × 10 × 8 = 160 J.' },
      { step: 'Conservation Principle', mark: 1, criteria: 'Equating maximum potential energy to kinetic energy (1/2 mv² = 160 J).' },
      { step: 'Working', mark: 1, criteria: 'Correct algebra leading to v² = 160.' },
      { step: 'Final Answer + Unit', mark: 1, criteria: 'Final velocity v = 12.65 m/s with correct unit.' }
    ],
    keyTerms: ['Gravitational potential energy', 'Kinetic energy', 'Conservation of energy', 'Joule (J)', 'Velocity (m/s)'],
    commonErrors: [
      'Forgetting to take the square root of 160.',
      'Using wrong units like cm/s or forgetting units in final answer.'
    ],
    explanation: 'Under free fall without air drag, mechanical energy is conserved: potential energy is completely converted into kinetic energy at ground level.'
  },

  // ==================== AI-GENERATED PRACTICE MARKING SCHEMES ====================
  {
    id: 'ms-ai-math-01',
    title: 'AI-Generated Practice: Consumer Mathematics — Compound Interest vs Simple Interest',
    subject: 'math',
    chapterId: 'math-ch3',
    chapterNumber: 3,
    chapterTitle: 'Consumer Mathematics: Savings and Investments, Credit and Debt',
    sourceType: 'ai_generated',
    sourceName: 'AI-Generated Practice Marking Scheme (KSSM Curriculum Aligned)',
    questionNumber: 'Practice Problem 1',
    section: 'Section C',
    question: 'Puan Halimah invests RM 15,000 in a fixed deposit account with an annual interest rate of 4.8% compounded monthly for 2 years. (a) State the compound interest formula and define all symbols. (b) Calculate the total matured value at the end of 2 years. (c) Calculate the total interest earned.',
    marks: 5,
    expectedAnswer: '(a) MV = P(1 + r/n)^(nt), (b) Matured value = RM 16,509.34, (c) Total interest = RM 1,509.34',
    workingSteps: [
      'Step 1: Formula MV = P(1 + r/n)^(nt) where P = principal, r = annual interest rate, n = number of compounding periods per year, t = time in years.',
      'Step 2: Identify values: P = 15,000, r = 0.048, n = 12 (monthly), t = 2.',
      'Step 3: Substitute: MV = 15,000 × (1 + 0.048 / 12)^(12 × 2) = 15,000 × (1 + 0.004)²⁴ = 15,000 × (1.004)²⁴.',
      'Step 4: Calculate MV = 15,000 × 1.1006226 = RM 16,509.34.',
      'Step 5: Total interest = MV - P = 16,509.34 - 15,000 = RM 1,509.34.'
    ],
    markAllocation: [
      { step: 'Formula & Definition', mark: 1, criteria: 'Writing correct compound interest formula MV = P(1 + r/n)^(nt) with defined terms.' },
      { step: 'Substitution', mark: 1, criteria: 'Correct substitution with n = 12 and nt = 24.' },
      { step: 'Matured Value Working', mark: 1, criteria: 'Correct intermediate power calculation (1.004)²⁴.' },
      { step: 'Matured Value Answer', mark: 1, criteria: 'Final matured value RM 16,509.34 correct to 2 decimal places.' },
      { step: 'Interest Calculation', mark: 1, criteria: 'Subtracting principal to obtain interest = RM 1,509.34.' }
    ],
    keyTerms: ['Matured value', 'Principal', 'Compounding frequency (n = 12)', 'Rate (r = 0.048)'],
    commonErrors: [
      'Using percentage 4.8 instead of decimal 0.048.',
      'Using annual compounding (n = 1) instead of monthly compounding (n = 12).'
    ],
    explanation: 'Compound interest pays interest on previously accumulated interest, yielding higher returns as compounding frequency increases.'
  },
  {
    id: 'ms-ai-sci-01',
    title: 'AI-Generated Practice: Thermochemistry — Exothermic vs Endothermic Pack Engineering',
    subject: 'science',
    chapterId: 'sci-ch5',
    chapterNumber: 5,
    chapterTitle: 'Thermochemistry',
    sourceType: 'ai_generated',
    sourceName: 'AI-Generated Practice Marking Scheme (KSSM Curriculum Aligned)',
    questionNumber: 'Practice Problem 2',
    section: 'Section C',
    question: 'A sports science team needs to design an instant cold pack for athlete injuries. (a) Suggest a suitable chemical substance to mix with water in the cold pack. (b) Explain the thermochemical principle involved in the cooling process. (c) Draw an energy level diagram for this reaction showing reactants, products, and activation energy.',
    marks: 6,
    expectedAnswer: '(a) Ammonium nitrate (or Ammonium chloride), (b) Endothermic reaction where heat is absorbed from the injured tissue/surroundings, (c) Energy level diagram where products are at a higher energy level than reactants with ΔH > 0.',
    workingSteps: [
      'Step 1: State suitable solid chemical: Ammonium nitrate (NH₄NO₃) / Ammonium chloride (NH₄Cl).',
      'Step 2: Identify process as endothermic.',
      'Step 3: Explain that bond-breaking energy absorbed exceeds bond-making energy released, causing heat uptake from surroundings.',
      'Step 4: Energy level diagram shows horizontal line for reactants at lower energy.',
      'Step 5: Arrow upward showing heat absorption (ΔH is positive) to horizontal line for products at higher energy.'
    ],
    markAllocation: [
      { step: 'Chemical Selection', mark: 1, criteria: 'Naming Ammonium nitrate, Ammonium chloride, or Potassium nitrate.' },
      { step: 'Classification', mark: 1, criteria: 'Classifying the dissolving process as endothermic.' },
      { step: 'Thermochemical Reason', mark: 2, criteria: 'Explaining heat absorption from injured muscle/surroundings due to energy requirement for bond breaking.' },
      { step: 'Energy Diagram: Levels', mark: 1, criteria: 'Diagram clearly showing reactants at lower energy level than products.' },
      { step: 'Energy Diagram: Labels', mark: 1, criteria: 'Correctly labeled y-axis (Energy), Reactants, Products, and positive ΔH.' }
    ],
    keyTerms: ['Endothermic reaction', 'Ammonium nitrate', 'Energy level diagram', 'Heat absorbed', 'Enthalpy change (ΔH)'],
    commonErrors: [
      'Suggesting calcium chloride or sodium hydroxide which produce exothermic hot packs instead of cold packs.',
      'Drawing exothermic energy diagrams where products are lower than reactants.'
    ],
    explanation: 'Dissolving ammonium salts absorbs ambient thermal energy from the skin, constricting blood vessels to reduce swelling and alleviate pain.'
  },
  {
    id: 'ms-ai-math-02',
    title: 'AI-Generated Practice: Trigonometric Ratios — Angle of Elevation and Depression',
    subject: 'math',
    chapterId: 'math-ch5',
    chapterNumber: 5,
    chapterTitle: 'Trigonometric Ratios',
    sourceType: 'ai_generated',
    sourceName: 'AI-Generated Practice Marking Scheme (KSSM Curriculum Aligned)',
    questionNumber: 'Practice Problem 3',
    section: 'Section B',
    question: 'A surveyor stands 45 m away from the base of a vertical communications tower on level ground. The surveyor measures the angle of elevation of the top of the tower to be 38°. If the surveyor’s instrument height is 1.5 m: (a) Sketch the situation and label all known values. (b) Calculate the total height of the communications tower correct to 2 decimal places.',
    marks: 4,
    expectedAnswer: '(a) Right-angled triangle with base 45 m, angle 38°, and instrument height 1.5 m, (b) Height = 36.66 m',
    workingSteps: [
      'Step 1: Sketch right-angled triangle where adjacent = 45 m, angle of elevation θ = 38°, and vertical opposite side = h.',
      'Step 2: Apply tan θ = Opposite / Adjacent → tan 38° = h / 45.',
      'Step 3: h = 45 × tan 38° = 45 × 0.7812856 = 35.158 m.',
      'Step 4: Total height = h + instrument height = 35.158 + 1.5 = 36.658 m ≈ 36.66 m.'
    ],
    markAllocation: [
      { step: 'Sketch & Labels', mark: 1, criteria: 'Clear labeled diagram with 45 m horizontal distance, 38° angle, and 1.5 m offset.' },
      { step: 'Trigonometric Ratio', mark: 1, criteria: 'Applying tan 38° = h / 45.' },
      { step: 'Height Calculation', mark: 1, criteria: 'Calculating intermediate height h = 35.16 m.' },
      { step: 'Final Height + Unit', mark: 1, criteria: 'Adding 1.5 m instrument height giving 36.66 m with correct unit.' }
    ],
    keyTerms: ['Angle of elevation', 'Tangent ratio (tan = opp/adj)', 'Eye-level instrument height'],
    commonErrors: [
      'Forgetting to add the instrument height of 1.5 m to the calculated opposite side.',
      'Using sin 38° or cos 38° instead of tan 38°.'
    ],
    explanation: 'The angle of elevation measures the angle between the horizontal line of sight and the top of the tower. Adding the instrument baseline height yields total elevation from ground.'
  },
  {
    id: 'ms-ai-sci-02',
    title: 'AI-Generated Practice: Radioactivity — Nuclear Radiation Characteristics & Half-Life Decay',
    subject: 'science',
    chapterId: 'sci-ch8',
    chapterNumber: 8,
    chapterTitle: 'Radioactivity',
    sourceType: 'ai_generated',
    sourceName: 'AI-Generated Practice Marking Scheme (KSSM Curriculum Aligned)',
    questionNumber: 'Practice Problem 4',
    section: 'Section B',
    question: 'A sample of Iodine-131 has an initial radioactive activity of 800 counts per minute (cpm). Iodine-131 has a half-life of 8 days. (a) Define radioactive decay. (b) Calculate the activity of the sample after 32 days. (c) Name the type of radiation emitted by Iodine-131 used to treat thyroid disorders and state its charge.',
    marks: 5,
    expectedAnswer: '(a) Spontaneous and random process in which an unstable nucleus emits ionizing radiation to become more stable, (b) 50 cpm, (c) Beta (β) particles with a negative charge (-1).',
    workingSteps: [
      'Step 1: Radioactive decay definition: Spontaneous, random disintegration of unstable nuclei with radiation emission.',
      'Step 2: Number of half-lives = total time / half-life = 32 / 8 = 4 cycles.',
      'Step 3: Remaining activity = 800 × (1/2)⁴ = 800 / 16 = 50 cpm.',
      'Step 4: Identify radiation: Beta radiation (charge = -1 / negative).'
    ],
    markAllocation: [
      { step: 'Decay Definition', mark: 1, criteria: 'Stating that radioactive decay is spontaneous, random disintegration of unstable atomic nuclei.' },
      { step: 'Half-Life Cycles', mark: 1, criteria: 'Calculating n = 32 ÷ 8 = 4 half-life intervals.' },
      { step: 'Activity Working & Answer', mark: 2, criteria: 'Step-by-step division 800 → 400 → 200 → 100 → 50 cpm with correct unit.' },
      { step: 'Radiation Type & Charge', mark: 1, criteria: 'Stating Beta radiation with negative charge.' }
    ],
    keyTerms: ['Half-life', 'Radioactive decay', 'Beta particle', 'Counts per minute (cpm)', 'Random & spontaneous'],
    commonErrors: [
      'Dividing initial activity by 4 instead of (1/2)⁴ (which is dividing by 16).',
      'Stating Alpha radiation instead of Beta radiation for Iodine-131.'
    ],
    explanation: 'Every 8 days, half of the remaining Iodine-131 nuclei decay. Over 32 days (4 cycles), the activity reduces from 800 to 400 to 200 to 100 to 50 cpm.'
  }
];
