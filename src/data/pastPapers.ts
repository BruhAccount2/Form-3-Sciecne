import { PastPaper } from '../types';

export const pastPapersList: PastPaper[] = [
  // ==================== MRSM MATHEMATICS 2025 ====================
  {
    id: 'pp-mrsm-math-2025-p1',
    title: '2025 MRSM Form 3 Mathematics Assessment',
    year: 2025,
    subject: 'math',
    examType: 'MRSM',
    paperSet: 'Paper 1 & Paper 2 Integrated Set',
    source: 'Maktab Rendah Sains MARA (MRSM)',
    sourceTypeDescription: 'MRSM Standardized Form 3 Curriculum Assessment Practice',
    difficulty: 'Hard',
    chaptersTested: ['math-ch1', 'math-ch2', 'math-ch3', 'math-ch5', 'math-ch6', 'math-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 25,
    officialOrPublicNote: 'MRSM Form 3 revision papers align with Malaysian KSSM DSKP standards.',
    externalLink: 'https://www.mara.gov.my',
    sections: [
      {
        name: 'Section A',
        description: 'Multiple Choice Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Simplify the expression (3² × 2⁴)³ ÷ (3⁴ × 2⁶).',
            options: ['3² × 2⁶', '3³ × 2²', '3² × 2⁴', '3⁴ × 2⁴'],
            marks: 1,
            topic: 'Indices (Laws of Indices)',
            chapterId: 'math-ch1',
            answer: {
              finalAnswer: '3² × 2⁶',
              markingScheme: [
                'Expand powers of numerator: (3² × 2⁴)³ = 3⁶ × 2¹².',
                'Divide with common bases: 3^(6 - 4) × 2^(12 - 6) = 3² × 2⁶.'
              ],
              explanation: 'Multiply powers inside brackets by 3: 3^(2×3) × 2^(4×3) = 3⁶ × 2¹². Then divide: 3^(6-4) × 2^(12-6) = 3² × 2⁶.'
            }
          },
          {
            number: 2,
            section: 'Section A',
            question: 'Express 0.0000784 in standard form correct to 2 significant figures.',
            options: ['7.8 × 10⁻⁵', '7.9 × 10⁻⁵', '7.8 × 10⁻⁴', '7.84 × 10⁻⁵'],
            marks: 1,
            topic: 'Standard Form & Significant Figures',
            chapterId: 'math-ch2',
            answer: {
              finalAnswer: '7.8 × 10⁻⁵',
              markingScheme: [
                'First non-zero digit is 7 at position 10⁻⁵: 7.84 × 10⁻⁵.',
                'Round to 2 significant figures: 4 < 5, so 7.8 × 10⁻⁵.'
              ],
              explanation: 'Moving the decimal point 5 places to the right yields 7.84 × 10⁻⁵. Rounding to 2 significant figures keeps the 7 and 8, giving 7.8 × 10⁻⁵.'
            }
          },
          {
            number: 3,
            section: 'Section A',
            question: 'In right-angled triangle PQR where ∠Q = 90°, PR = 25 cm and QR = 24 cm. Find the exact value of cos ∠P.',
            options: ['7/25', '24/25', '7/24', '24/7'],
            marks: 1,
            topic: 'Trigonometric Ratios',
            chapterId: 'math-ch5',
            answer: {
              finalAnswer: '7/25',
              markingScheme: [
                'Find adjacent side PQ using Pythagoras: PQ = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.',
                'Apply cos ∠P = Adjacent / Hypotenuse = PQ / PR = 7 / 25.'
              ],
              explanation: 'The side adjacent to angle P is PQ. By Pythagoras theorem, PQ = 7 cm. Thus, cos ∠P = 7/25.'
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Structured Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 4,
            section: 'Section B',
            question: 'A straight line passing through point A(2, 5) is parallel to the line 4x - 2y = 8. (a) Determine the gradient of the line. (b) State the equation of the line in the form y = mx + c.',
            marks: 4,
            topic: 'Straight Lines (Parallel Gradients)',
            chapterId: 'math-ch9',
            answer: {
              finalAnswer: '(a) m = 2, (b) y = 2x + 1',
              markingScheme: [
                'Rearrange 4x - 2y = 8 to y = 2x - 4 to obtain gradient m = 2 [1 Mark].',
                'Since lines are parallel, required gradient m₁ = m₂ = 2 [1 Mark].',
                'Substitute (2, 5) into y = 2x + c: 5 = 2(2) + c → c = 1 [1 Mark].',
                'Final equation: y = 2x + 1 [1 Mark].'
              ],
              explanation: 'Parallel lines have equal gradients. Rearranging 4x - 2y = 8 gives 2y = 4x - 8 → y = 2x - 4, so gradient is 2. Using point (2, 5), c = 1.'
            }
          }
        ]
      },
      {
        name: 'Section C',
        description: 'HOTS Problem Solving (60 Marks)',
        totalMarks: 60,
        questions: [
          {
            number: 5,
            section: 'Section C',
            question: 'Encik Faris deposited RM 20,000 in Bank A offering compound interest of 4.2% per annum compounded quarterly for 3 years. Bank B offers simple interest of 4.5% per annum for the same duration. Calculate which bank gives higher return and determine the difference in earnings.',
            marks: 6,
            topic: 'Consumer Mathematics (Savings & Interest Comparison)',
            chapterId: 'math-ch3',
            answer: {
              finalAnswer: 'Bank A yields RM 2,674.33; Bank B yields RM 2,700.00. Bank B yields RM 25.67 more.',
              markingScheme: [
                'Bank A (Compound): MV = 20,000 × (1 + 0.042/4)^(4 × 3) = 20,000 × (1.0105)¹² = RM 22,674.33 [2 Marks].',
                'Interest Bank A = 22,674.33 - 20,000 = RM 2,674.33 [1 Mark].',
                'Bank B (Simple): I = 20,000 × 0.045 × 3 = RM 2,700.00 [2 Marks].',
                'Difference = 2,700.00 - 2,674.33 = RM 25.67 in favour of Bank B [1 Mark].'
              ],
              explanation: 'Even though compound interest compounds every 3 months, Bank B has a higher base annual rate of 4.5% versus 4.2%, yielding a higher payout of RM 2,700 over the 3-year term.'
            }
          }
        ]
      }
    ]
  },

  // ==================== MRSM SCIENCE 2025 ====================
  {
    id: 'pp-mrsm-sci-2025-p1',
    title: '2025 MRSM Form 3 Science Assessment',
    year: 2025,
    subject: 'science',
    examType: 'MRSM',
    paperSet: 'Paper 1 & Paper 2 Integrated Set',
    source: 'Maktab Rendah Sains MARA (MRSM)',
    sourceTypeDescription: 'MRSM Form 3 Science Diagnostic & Answering Technique Examination',
    difficulty: 'Hard',
    chaptersTested: ['sci-ch1', 'sci-ch2', 'sci-ch3', 'sci-ch4', 'sci-ch6', 'sci-ch8'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 22,
    officialOrPublicNote: 'Includes high-yield experimental design and analytical questions.',
    externalLink: 'https://www.mara.gov.my',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Which of the following blood transfusions will cause agglutination (clumping of red blood cells)?',
            options: [
              'Donor: Blood Group O → Recipient: Blood Group A',
              'Donor: Blood Group A → Recipient: Blood Group B',
              'Donor: Blood Group B → Recipient: Blood Group AB',
              'Donor: Blood Group O → Recipient: Blood Group AB'
            ],
            marks: 1,
            topic: 'Transportation (ABO Blood Compatibility)',
            chapterId: 'sci-ch3',
            answer: {
              finalAnswer: 'Donor: Blood Group A → Recipient: Blood Group B',
              markingScheme: [
                'Recipient of Blood Group B has Anti-A antibodies in plasma.',
                'Donor Blood Group A has Antigen A on red blood cells.',
                'Anti-A antibodies bind to Antigen A causing agglutination.'
              ],
              explanation: 'Blood Group B plasma contains Anti-A antibodies which attack the Antigen A on donor red blood cells, causing fatal agglutination.'
            }
          },
          {
            number: 2,
            section: 'Section A',
            question: 'Which sequence correctly represents the reactivity of metals with oxygen in descending order?',
            options: [
              'Mg > Al > Zn > Fe > Cu',
              'Cu > Fe > Zn > Al > Mg',
              'Al > Mg > Fe > Zn > Cu',
              'Zn > Mg > Al > Cu > Fe'
            ],
            marks: 1,
            topic: 'Reactivity of Metals',
            chapterId: 'sci-ch4',
            answer: {
              finalAnswer: 'Mg > Al > Zn > Fe > Cu',
              markingScheme: [
                'Reactivity series order: K > Na > Ca > Mg > Al > C > Zn > H > Fe > Sn > Pb > Cu > Ag > Au.'
              ],
              explanation: 'Magnesium reacts most vigorously with oxygen, followed by Aluminium, Zinc, Iron, and Copper.'
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Structured Questions & Experimental Analysis (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 3,
            section: 'Section B',
            question: 'A step-down transformer connected to a 240 V AC supply produces an output of 12 V to power an electric doorbell. If the primary coil has 800 turns: (a) Calculate the number of turns in the secondary coil. (b) Explain why a transformer cannot operate on a 12 V direct current (DC) car battery.',
            marks: 4,
            topic: 'Electricity and Magnetism (Transformers)',
            chapterId: 'sci-ch6',
            answer: {
              finalAnswer: '(a) Ns = 40 turns, (b) DC provides a constant magnetic field (no change in magnetic flux), so no electromagnetic induction occurs.',
              markingScheme: [
                'Apply Vp/Vs = Np/Ns: 240 / 12 = 800 / Ns [1 Mark].',
                'Ns = (12 × 800) / 240 = 40 turns [1 Mark].',
                'Direct current (DC) produces a stationary/constant magnetic field [1 Mark].',
                'Faraday’s law requires a changing magnetic flux across coils to induce voltage [1 Mark].'
              ],
              explanation: 'Transformers require an alternating current to produce a continuously changing magnetic flux in the soft iron core.'
            }
          }
        ]
      },
      {
        name: 'Section C',
        description: 'Essay & Scientific Reasoning (60 Marks)',
        totalMarks: 60,
        questions: [
          {
            number: 4,
            section: 'Section C',
            question: 'Radioisotope Cobalt-60 has a half-life of 5.3 years. (a) Define half-life. (b) An industrial radiotherapy source contains 160 g of Cobalt-60. Calculate the mass of Cobalt-60 remaining after 21.2 years. (c) Justify two safety precautions when storing and handling radioactive waste.',
            marks: 6,
            topic: 'Radioactivity (Half-Life Calculation & Radiation Safety)',
            chapterId: 'sci-ch8',
            answer: {
              finalAnswer: '(a) Time taken for half the radioactive nuclei to decay, (b) 10 g, (c) Thick lead/concrete shielding and robotic handling tongs.',
              markingScheme: [
                '(a) Half-life is the time taken for the number of radioactive nuclei in a sample to decay to half its initial quantity [1 Mark].',
                '(b) Calculate number of half-lives: n = 21.2 / 5.3 = 4 [1 Mark].',
                'Remaining mass = 160 × (1/2)⁴ = 160 / 16 = 10 g [2 Marks].',
                '(c) Store inside thick lead containers to absorb penetrating gamma rays [1 Mark].',
                'Use long remote robotic manipulators/tongs to maintain distance from ionizing radiation [1 Mark].'
              ],
              explanation: 'After 4 half-life cycles, the quantity is reduced to (1/16)th of the initial 160 g, leaving 10 g.'
            }
          }
        ]
      }
    ]
  },

  // ==================== SELANGOR STATE TRIAL MATHEMATICS 2024 ====================
  {
    id: 'pp-selangor-math-2024',
    title: '2024 Selangor State Form 3 Preparatory Examination',
    year: 2024,
    subject: 'math',
    examType: 'State',
    paperSet: 'State Trial Full Paper',
    source: 'Jabatan Pendidikan Negeri Selangor (JPNS)',
    sourceTypeDescription: 'State-Level Form 3 Academic Diagnostic & Moderated Paper',
    difficulty: 'Medium',
    chaptersTested: ['math-ch1', 'math-ch3', 'math-ch4', 'math-ch6', 'math-ch7', 'math-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Widely used across national secondary schools in Selangor for end-of-year assessments.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'A map is drawn to a scale of 1 : 250,000. If the distance between Town X and Town Y on the map is 6 cm, find the actual distance in km.',
            options: ['15 km', '1.5 km', '150 km', '25 km'],
            marks: 1,
            topic: 'Scale Drawings',
            chapterId: 'math-ch4',
            answer: {
              finalAnswer: '15 km',
              markingScheme: [
                'Actual distance = 6 cm × 250,000 = 1,500,000 cm.',
                'Convert cm to km: 1,500,000 / 100,000 = 15 km.'
              ],
              explanation: '6 cm × 250,000 = 1,500,000 cm = 15,000 m = 15 km.'
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Structured Geometry & Angles in Circles (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 2,
            section: 'Section B',
            question: 'In a circle with centre O, arc AB subtends an angle of 74° at the centre. Find the angle subtended by arc AB at the circumference on the major arc.',
            marks: 2,
            topic: 'Angles and Tangents of Circles',
            chapterId: 'math-ch6',
            answer: {
              finalAnswer: '37°',
              markingScheme: [
                'Angle at centre = 2 × Angle at circumference.',
                'Angle at circumference = 74° / 2 = 37° [2 Marks].'
              ],
              explanation: 'The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference.'
            }
          }
        ]
      }
    ]
  },

  // ==================== JOHOR STATE TRIAL SCIENCE 2024 ====================
  {
    id: 'pp-johor-sci-2024',
    title: '2024 Johor State Form 3 Preparatory Examination',
    year: 2024,
    subject: 'science',
    examType: 'State',
    paperSet: 'State Trial Full Paper',
    source: 'Jabatan Pendidikan Negeri Johor (JPNJ)',
    sourceTypeDescription: 'Johor State Moderated Form 3 Science Examination',
    difficulty: 'Medium',
    chaptersTested: ['sci-ch2', 'sci-ch3', 'sci-ch5', 'sci-ch7', 'sci-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Features structured questions on physiology and mechanical work.',
    sections: [
      {
        name: 'Section A',
        description: 'Multiple Choice (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'During human inhalation, what happens to the diaphragm and thoracic air pressure?',
            options: [
              'Diaphragm contracts and flattens; thoracic air pressure decreases.',
              'Diaphragm relaxes and curves up; thoracic air pressure increases.',
              'Diaphragm contracts and flattens; thoracic air pressure increases.',
              'Diaphragm relaxes and curves up; thoracic air pressure decreases.'
            ],
            marks: 1,
            topic: 'Respiration (Breathing Mechanism)',
            chapterId: 'sci-ch2',
            answer: {
              finalAnswer: 'Diaphragm contracts and flattens; thoracic air pressure decreases.',
              markingScheme: [
                'Diaphragm contracts, moving downward and flattening.',
                'Thoracic cavity volume increases, causing air pressure inside lungs to fall below atmospheric pressure.'
              ],
              explanation: 'Inhalation requires increased thoracic volume to lower internal pressure so air rushes into the lungs.'
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Work & Energy Calculations (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 2,
            section: 'Section B',
            question: 'A 2 kg coconut falls from a tree branch 8 m above the ground (g = 10 m/s²). Calculate the velocity of the coconut just before it hits the ground.',
            marks: 3,
            topic: 'Energy and Power (Conservation of Energy)',
            chapterId: 'sci-ch7',
            answer: {
              finalAnswer: 'v = 12.65 m/s (or 4√10 m/s)',
              markingScheme: [
                'Loss in Gravitational Potential Energy = Gain in Kinetic Energy: mgh = 1/2 mv² [1 Mark].',
                'gh = 1/2 v² → v² = 2gh = 2 × 10 × 8 = 160 [1 Mark].',
                'v = √160 ≈ 12.65 m/s [1 Mark].'
              ],
              explanation: 'All initial gravitational potential energy (mgh = 160 J) converts to kinetic energy at ground impact.'
            }
          }
        ]
      }
    ]
  },

  // ==================== PENANG SCHOOL TRIAL MATHEMATICS 2023 ====================
  {
    id: 'pp-penang-math-2023',
    title: '2023 Penang Premier School Mathematics Examination',
    year: 2023,
    subject: 'math',
    examType: 'School',
    paperSet: 'Final Term Paper 1 & 2',
    source: 'Penang High School Examination Syndicate',
    sourceTypeDescription: 'SMK Premier Cluster School Form 3 Standard Examination',
    difficulty: 'Medium',
    chaptersTested: ['math-ch2', 'math-ch5', 'math-ch8', 'math-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Includes locus construction and coordinate geometry problems.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'What is the locus of a point that moves such that its distance from a fixed point P is always 4 cm?',
            options: [
              'A circle with centre P and radius 4 cm',
              'A straight line 4 cm away from P',
              'A pair of parallel lines 4 cm from P',
              'A sphere with radius 4 cm'
            ],
            marks: 1,
            topic: 'Loci in Two Dimensions',
            chapterId: 'math-ch8',
            answer: {
              finalAnswer: 'A circle with centre P and radius 4 cm',
              markingScheme: [
                'The set of points at constant distance r from a fixed point in 2D is a circle of radius r.'
              ],
              explanation: 'In 2D geometry, a point equidistant from a single fixed point traces a circle.'
            }
          }
        ]
      }
    ]
  }
];
