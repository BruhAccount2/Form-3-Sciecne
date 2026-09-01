import { PastPaper } from '../types';

export const pastPapersList: PastPaper[] = [
  // ==================== 1. MRSM MATHEMATICS 2025 ====================
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
            howToApproach: [
              '1. Identify the power of a product rule: (a^m × b^n)^p = a^(mp) × b^(np).',
              '2. Multiply powers inside brackets by 3: 3^(2×3) × 2^(4×3) = 3⁶ × 2¹².',
              '3. Divide like bases by subtracting indices: 3^(6-4) × 2^(12-6).',
              '4. Simplify the final index powers.'
            ],
            answer: {
              finalAnswer: '3² × 2⁶',
              markingScheme: [
                'Expand powers of numerator: (3² × 2⁴)³ = 3⁶ × 2¹² [1 Mark].',
                'Divide with common bases: 3^(6 - 4) × 2^(12 - 6) = 3² × 2⁶ [1 Mark].'
              ],
              explanation: 'Multiply exponents inside brackets: 3^(2×3) × 2^(4×3) = 3⁶ × 2¹². Divide by (3⁴ × 2⁶): 3^(6-4) × 2^(12-6) = 3² × 2⁶.',
              whyIncorrect: {
                '3³ × 2²': 'Incorrect subtraction of powers in the exponent calculation.',
                '3² × 2⁴': 'Failed to expand 2^(4×3) = 2¹² before dividing by 2⁶.',
                '3⁴ × 2⁴': 'Used wrong index law operations on brackets.'
              }
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
            howToApproach: [
              '1. Count decimal shifts until the first non-zero digit is reached.',
              '2. Shift 5 decimal places right to obtain 7.84 × 10⁻⁵.',
              '3. Round 7.84 to 2 significant figures by checking the third digit (4 < 5).'
            ],
            answer: {
              finalAnswer: '7.8 × 10⁻⁵',
              markingScheme: [
                'First non-zero digit is 7 at position 10⁻⁵: 7.84 × 10⁻⁵.',
                'Round to 2 significant figures: 4 < 5, so 7.8 × 10⁻⁵.'
              ],
              explanation: 'Moving the decimal point 5 places to the right gives 7.84 × 10⁻⁵. Rounding to 2 s.f. gives 7.8 × 10⁻⁵.',
              whyIncorrect: {
                '7.9 × 10⁻⁵': 'Rounded up incorrectly even though the third digit is 4.',
                '7.8 × 10⁻⁴': 'Counted 4 decimal places instead of 5 places.',
                '7.84 × 10⁻⁵': 'Has 3 significant figures, but question asked for 2 s.f.'
              }
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
            howToApproach: [
              '1. Recall Pythagoras theorem: PQ² + QR² = PR².',
              '2. Calculate side PQ: PQ = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.',
              '3. Apply cos ∠P = Adjacent side / Hypotenuse = PQ / PR.'
            ],
            answer: {
              finalAnswer: '7/25',
              markingScheme: [
                'Find adjacent side PQ using Pythagoras: PQ = √(25² - 24²) = 7 cm [1 Mark].',
                'Apply cos ∠P = Adjacent / Hypotenuse = PQ / PR = 7 / 25 [1 Mark].'
              ],
              explanation: 'The side adjacent to ∠P is PQ = 7 cm and the hypotenuse is PR = 25 cm. Thus, cos ∠P = 7/25.',
              whyIncorrect: {
                '24/25': 'This represents sin ∠P (Opposite / Hypotenuse), not cos ∠P.',
                '7/24': 'This represents tan ∠R, which is Adjacent to P over Opposite to P.',
                '24/7': 'This represents tan ∠P (Opposite / Adjacent).'
              }
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
                'Rearrange 4x - 2y = 8 to 2y = 4x - 8 → y = 2x - 4 to obtain gradient m = 2 [1 Mark].',
                'State that parallel lines have equal gradients: m₁ = m₂ = 2 [1 Mark].',
                'Substitute (2, 5) into y = 2x + c: 5 = 2(2) + c → c = 1 [1 Mark].',
                'Final equation: y = 2x + 1 [1 Mark].'
              ],
              explanation: 'Parallel lines share identical gradients. Gradient m = 2. Using y - y₁ = m(x - x₁), y - 5 = 2(x - 2) → y = 2x + 1.'
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
              finalAnswer: 'Bank B gives RM 25.67 higher return than Bank A.',
              markingScheme: [
                'Bank A (Compound): MV = 20,000 × (1 + 0.042/4)^(4 × 3) = 20,000 × (1.0105)¹² = RM 22,674.33 [2 Marks].',
                'Interest Bank A = 22,674.33 - 20,000 = RM 2,674.33 [1 Mark].',
                'Bank B (Simple): I = P × r × t = 20,000 × 0.045 × 3 = RM 2,700.00 [2 Marks].',
                'Difference = 2,700.00 - 2,674.33 = RM 25.67 in favour of Bank B [1 Mark].'
              ],
              explanation: 'Simple interest at 4.5% produces RM 2,700.00 interest, whereas quarterly compounded 4.2% produces RM 2,674.33. Bank B yields RM 25.67 more.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 2. MRSM SCIENCE 2025 ====================
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
              'Donor: Blood Group A → Recipient: Blood Group B',
              'Donor: Blood Group O → Recipient: Blood Group A',
              'Donor: Blood Group B → Recipient: Blood Group AB',
              'Donor: Blood Group O → Recipient: Blood Group AB'
            ],
            marks: 1,
            topic: 'Transportation (ABO Blood Compatibility)',
            chapterId: 'sci-ch3',
            howToApproach: [
              '1. Recall that recipients produce antibodies against foreign antigens.',
              '2. Blood Group B plasma contains Anti-A antibodies.',
              '3. Donor Blood Group A has Antigen A on its red blood cells.',
              '4. When Anti-A antibodies react with Antigen A, agglutination occurs.'
            ],
            answer: {
              finalAnswer: 'Donor: Blood Group A → Recipient: Blood Group B',
              markingScheme: [
                'Recipient of Blood Group B has Anti-A antibodies in plasma [1 Mark].',
                'Donor Blood Group A has Antigen A on red blood cells [1 Mark].',
                'Anti-A antibodies bind to Antigen A causing agglutination [1 Mark].'
              ],
              explanation: 'Blood Group B plasma contains Anti-A antibodies which attack Antigen A on donor red blood cells, causing fatal agglutination.',
              whyIncorrect: {
                'Donor: Blood Group O → Recipient: Blood Group A': 'Blood Group O has no A or B antigens (universal donor) and will not trigger Anti-B antibodies.',
                'Donor: Blood Group B → Recipient: Blood Group AB': 'Blood Group AB plasma has neither Anti-A nor Anti-B antibodies (universal recipient).',
                'Donor: Blood Group O → Recipient: Blood Group AB': 'Safe because O lacks surface antigens and AB has no plasma antibodies.'
              }
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
            howToApproach: [
              '1. Recall the mnemonic for the metal reactivity series (K, Na, Ca, Mg, Al, C, Zn, H, Fe, Sn, Pb, Cu, Hg, Ag, Au).',
              '2. Identify relative positions: Magnesium is more reactive than Aluminium, which is more reactive than Zinc, Iron, and Copper.'
            ],
            answer: {
              finalAnswer: 'Mg > Al > Zn > Fe > Cu',
              markingScheme: [
                'Reactivity series order: K > Na > Ca > Mg > Al > C > Zn > H > Fe > Sn > Pb > Cu > Ag > Au.'
              ],
              explanation: 'Magnesium reacts most vigorously with oxygen, followed by Aluminium, Zinc, Iron, and Copper.',
              whyIncorrect: {
                'Cu > Fe > Zn > Al > Mg': 'This is ascending (reverse) order from least to most reactive.',
                'Al > Mg > Fe > Zn > Cu': 'Magnesium is more reactive than Aluminium due to lower ionization energy.',
                'Zn > Mg > Al > Cu > Fe': 'Zinc is less reactive than Magnesium and Aluminium.'
              }
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
                'Formula: Vp / Vs = Np / Ns [1 Mark].',
                'Substitution & calculation: 240 / 12 = 800 / Ns → Ns = 40 turns [1 Mark].',
                'Explanation: DC produces a constant/stationary magnetic field without changing magnetic flux [1 Mark].',
                'Induced voltage requires changing magnetic flux across coils based on Faraday’s Law [1 Mark].'
              ],
              explanation: 'Transformers rely on electromagnetic induction driven by alternating current creating oscillating magnetic flux in the core.'
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
                '(b) Calculate number of half-life cycles: n = 21.2 / 5.3 = 4 [1 Mark].',
                'Remaining mass: 160 × (1/2)⁴ = 160 / 16 = 10 g [2 Marks].',
                '(c) Precaution 1: Shield storage with thick lead or concrete to absorb penetrating gamma rays [1 Mark].',
                'Precaution 2: Use remote robotic arms or long tongs to maximize distance from ionizing radiation [1 Mark].'
              ],
              explanation: 'After 4 half-lives, the initial quantity reduces by a factor of 16 (160 g ÷ 16 = 10 g).'
            }
          }
        ]
      }
    ]
  },

  // ==================== 3. SELANGOR STATE TRIAL MATHEMATICS 2024 ====================
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
            howToApproach: [
              '1. Scale 1 : 250,000 means 1 cm on the map represents 250,000 cm in reality.',
              '2. Multiply map distance: 6 cm × 250,000 = 1,500,000 cm.',
              '3. Convert cm to km: divide by 100,000 (100 cm/m × 1,000 m/km).'
            ],
            answer: {
              finalAnswer: '15 km',
              markingScheme: [
                'Actual distance = 6 cm × 250,000 = 1,500,000 cm [1 Mark].',
                'Convert to km: 1,500,000 ÷ 100,000 = 15 km [1 Mark].'
              ],
              explanation: '6 cm × 250,000 = 1,500,000 cm = 15,000 m = 15 km.',
              whyIncorrect: {
                '1.5 km': 'Divided by 1,000,000 instead of 100,000.',
                '150 km': 'Multiplied by an extra factor of 10 during conversion.',
                '25 km': 'Used 250,000 ÷ 10,000 without multiplying by 6 cm.'
              }
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
                'Theorem: Angle at centre is twice angle at circumference subtended by same arc [1 Mark].',
                'Angle at circumference = 74° ÷ 2 = 37° [1 Mark].'
              ],
              explanation: 'The angle subtended by an arc at the centre is twice the angle subtended by the same arc at the circumference.'
            }
          }
        ]
      },
      {
        name: 'Section C',
        description: 'Plans and Elevations & Problem Solving (60 Marks)',
        totalMarks: 60,
        questions: [
          {
            number: 3,
            section: 'Section C',
            question: 'A prism has a uniform cross-section in the shape of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm. The length of the prism is 12 cm. (a) Draw the full-scale orthogonal projection on a vertical plane parallel to the cross section. (b) Calculate the total volume of the prism.',
            marks: 5,
            topic: 'Plans and Elevations (Orthogonal Projections)',
            chapterId: 'math-ch7',
            answer: {
              finalAnswer: '(a) Trapezium with top 6 cm, bottom 10 cm, height 4 cm, (b) Volume = 384 cm³',
              markingScheme: [
                '(a) Correct trapezium shape with labeled dimensions: parallel sides 6 cm & 10 cm, height 4 cm [2 Marks].',
                '(b) Cross-sectional area = 1/2 × (6 + 10) × 4 = 32 cm² [1 Mark].',
                'Volume = Cross-sectional area × length = 32 × 12 = 384 cm³ [2 Marks].'
              ],
              explanation: 'The orthogonal projection on a vertical plane parallel to the cross-section is the true shape and size of the trapezium.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 4. JOHOR STATE TRIAL SCIENCE 2024 ====================
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
    officialOrPublicNote: 'Features structured questions on human physiology, thermochemistry, and mechanical work.',
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
            howToApproach: [
              '1. Recall Boyle’s Law in breathing: Inhalation expands chest volume.',
              '2. Expanding thoracic volume decreases internal lung pressure below atmospheric pressure.',
              '3. Diaphragm must contract and flatten downwards to increase volume.'
            ],
            answer: {
              finalAnswer: 'Diaphragm contracts and flattens; thoracic air pressure decreases.',
              markingScheme: [
                'Diaphragm contracts, moving downward and flattening.',
                'Thoracic cavity volume increases, causing air pressure inside lungs to fall below atmospheric pressure.'
              ],
              explanation: 'Inhalation requires increased thoracic volume to lower internal pressure so air rushes into the lungs.',
              whyIncorrect: {
                'Diaphragm relaxes and curves up; thoracic air pressure increases.': 'Describes exhalation, not inhalation.',
                'Diaphragm contracts and flattens; thoracic air pressure increases.': 'Contradicts physics: increased volume lowers air pressure.',
                'Diaphragm relaxes and curves up; thoracic air pressure decreases.': 'Relaxing the diaphragm reduces volume and increases pressure.'
              }
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
                'Formula / Principle of Conservation of Energy: mgh = 1/2 mv² [1 Mark].',
                'Substitution: gh = 1/2 v² → v² = 2gh = 2 × 10 × 8 = 160 [1 Mark].',
                'Final answer: v = √160 ≈ 12.65 m/s [1 Mark].'
              ],
              explanation: 'All initial gravitational potential energy converts to kinetic energy at ground impact: v = √(2gh) = √160 ≈ 12.65 m/s.'
            }
          }
        ]
      },
      {
        name: 'Section C',
        description: 'Thermochemistry & Energy Changes (60 Marks)',
        totalMarks: 60,
        questions: [
          {
            number: 3,
            section: 'Section C',
            question: 'When ammonium chloride crystals dissolve in water, the beaker feels cold to the touch and the thermometer drops from 28°C to 21°C. (a) Classify this chemical reaction as exothermic or endothermic. (b) Explain the temperature change in terms of bond breaking and bond formation energy.',
            marks: 5,
            topic: 'Thermochemistry (Endothermic Reactions)',
            chapterId: 'sci-ch5',
            answer: {
              finalAnswer: '(a) Endothermic reaction, (b) Heat absorbed to break crystal bonds is greater than heat released during hydration.',
              markingScheme: [
                '(a) Endothermic reaction [1 Mark].',
                '(b) Heat energy is absorbed from the surroundings during the reaction [1 Mark].',
                'Energy absorbed to break solute-solute and solvent-solvent bonds is greater than energy released during new bond formation [2 Marks].',
                'This absorption causes the thermal energy of the solution to drop, lowering temperature [1 Mark].'
              ],
              explanation: 'Endothermic processes absorb thermal energy from surrounding water, resulting in a measurable temperature drop.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 5. PENANG CLUSTER SCHOOL MATHEMATICS 2023 ====================
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
              'A perpendicular bisector through P'
            ],
            marks: 1,
            topic: 'Loci in Two Dimensions',
            chapterId: 'math-ch8',
            howToApproach: [
              '1. Recall locus definition: The path traced by a moving point under a given constraint.',
              '2. Constraint: Constant distance from one single fixed point.',
              '3. In a 2D plane, all points equidistant from a single point form a circle.'
            ],
            answer: {
              finalAnswer: 'A circle with centre P and radius 4 cm',
              markingScheme: [
                'The set of points at constant distance r from a fixed point in 2D is a circle of radius r [1 Mark].'
              ],
              explanation: 'In 2D geometry, a point maintaining a fixed distance from a single point traces a circle.',
              whyIncorrect: {
                'A straight line 4 cm away from P': 'Describes points at a constant distance from a line, not a single point.',
                'A pair of parallel lines 4 cm from P': 'Describes locus of points at constant distance from a line on both sides.',
                'A perpendicular bisector through P': 'Describes locus of points equidistant from two distinct points.'
              }
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Trigonometry & Tangents (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 2,
            section: 'Section B',
            question: 'Given tan θ = 3/4 and θ is an acute angle in a right-angled triangle. (a) Find the hypotenuse length if the opposite side is 6 cm. (b) Find the value of sin θ + cos θ.',
            marks: 4,
            topic: 'Trigonometric Ratios (Acute Angles)',
            chapterId: 'math-ch5',
            answer: {
              finalAnswer: '(a) Hypotenuse = 10 cm, (b) 7/5 (or 1.4)',
              markingScheme: [
                'Opposite / Adjacent = 3/4 → 6 / Adjacent = 3/4 → Adjacent = 8 cm [1 Mark].',
                'Hypotenuse = √(6² + 8²) = √(36 + 64) = 10 cm [1 Mark].',
                'sin θ = 6/10 = 3/5 and cos θ = 8/10 = 4/5 [1 Mark].',
                'sin θ + cos θ = 3/5 + 4/5 = 7/5 [1 Mark].'
              ],
              explanation: 'Using the 3-4-5 base ratio scaled by 2 (6-8-10 triangle), sin θ = 3/5 and cos θ = 4/5, yielding 7/5.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 6. PERAK STATE TRIAL SCIENCE 2024 ====================
  {
    id: 'pp-perak-sci-2024',
    title: '2024 Perak State Form 3 Science Diagnostic Assessment',
    year: 2024,
    subject: 'science',
    examType: 'State',
    paperSet: 'State Diagnostic Full Paper',
    source: 'Jabatan Pendidikan Negeri Perak (JPN Perak)',
    sourceTypeDescription: 'State-Level Form 3 Academic Diagnostic & Performance Paper',
    difficulty: 'Medium',
    chaptersTested: ['sci-ch1', 'sci-ch3', 'sci-ch6', 'sci-ch10'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Official Perak state educational syndicate diagnostic paper.',
    sections: [
      {
        name: 'Section A',
        description: 'Multiple Choice (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'What is the function of the fuse in a 3-pin domestic electrical plug?',
            options: [
              'Melts and breaks the circuit when the current exceeds its safety rating',
              'Steps down the voltage from 240 V to 12 V',
              'Connects the metal appliance casing directly to Earth',
              'Measures the electrical power consumed in kilowatt-hours'
            ],
            marks: 1,
            topic: 'Electricity and Magnetism (Electrical Safety)',
            chapterId: 'sci-ch6',
            howToApproach: [
              '1. Identify the role of safety devices in domestic plugs.',
              '2. A fuse contains a thin wire with a low melting point.',
              '3. Excessive current causes heating (I²R), melting the fuse wire to prevent fire.'
            ],
            answer: {
              finalAnswer: 'Melts and breaks the circuit when the current exceeds its safety rating',
              markingScheme: [
                'Fuse wire has a low melting point and melts during current overloads to disconnect live power [1 Mark].'
              ],
              explanation: 'A fuse is an electrical safety component designed to melt and open the circuit when current exceeds its rating.',
              whyIncorrect: {
                'Steps down the voltage from 240 V to 12 V': 'That is the function of a step-down transformer.',
                'Connects the metal appliance casing directly to Earth': 'That is the function of the Earth wire.',
                'Measures the electrical power consumed in kilowatt-hours': 'That is the function of the electricity meter (Joule meter).'
              }
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Space Exploration & Astronomical Calculations (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 2,
            section: 'Section B',
            question: 'An astronomical telescope uses a convex objective lens with focal length fo = 120 cm and an eyepiece lens with focal length fe = 5 cm in normal adjustment. (a) Calculate the linear distance between the two lenses. (b) Calculate the magnifying power of the telescope.',
            marks: 4,
            topic: 'Space Exploration (Telescope Optics)',
            chapterId: 'sci-ch10',
            answer: {
              finalAnswer: '(a) Distance = 125 cm, (b) Magnification = 24×',
              markingScheme: [
                'Distance between lenses in normal adjustment: d = fo + fe [1 Mark].',
                'd = 120 + 5 = 125 cm [1 Mark].',
                'Linear Magnification formula: M = fo / fe [1 Mark].',
                'M = 120 / 5 = 24 [1 Mark].'
              ],
              explanation: 'In normal adjustment for astronomical telescopes, lens separation is fo + fe = 125 cm, and angular magnification is fo / fe = 24.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 7. KEDAH STATE TRIAL MATHEMATICS 2024 ====================
  {
    id: 'pp-kedah-math-2024',
    title: '2024 Kedah State Form 3 Mathematics Assessment',
    year: 2024,
    subject: 'math',
    examType: 'State',
    paperSet: 'State Assessment Paper',
    source: 'Jabatan Pendidikan Negeri Kedah (JPN Kedah)',
    sourceTypeDescription: 'Kedah State Moderated Standardized Form 3 Examination',
    difficulty: 'Medium',
    chaptersTested: ['math-ch1', 'math-ch3', 'math-ch5', 'math-ch7'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 22,
    officialOrPublicNote: 'Kedah state examination board paper focusing on algebra and geometric reasoning.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Solve the index equation 2^(3x - 1) = 32.',
            options: ['x = 2', 'x = 3', 'x = 1', 'x = 4'],
            marks: 1,
            topic: 'Indices (Equating Indices)',
            chapterId: 'math-ch1',
            howToApproach: [
              '1. Express both sides with the same prime base.',
              '2. 32 can be written as 2⁵.',
              '3. Equate exponents: 3x - 1 = 5.',
              '4. Solve for x: 3x = 6 → x = 2.'
            ],
            answer: {
              finalAnswer: 'x = 2',
              markingScheme: [
                'Express 32 as base 2: 2^(3x - 1) = 2⁵ [1 Mark].',
                'Equate exponents: 3x - 1 = 5 → 3x = 6 → x = 2 [1 Mark].'
              ],
              explanation: 'Since bases are equal (base 2), 3x - 1 = 5, yielding 3x = 6 and x = 2.',
              whyIncorrect: {
                'x = 3': 'Calculated 3x - 1 = 8 instead of 5.',
                'x = 1': 'Subtracted 1 from 5 instead of adding 1.',
                'x = 4': 'Confused 2⁵ with 2⁶.'
              }
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Consumer Mathematics (Credit Cards & ROI) (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 2,
            section: 'Section B',
            question: 'Puan Siti bought a shoplot for RM 300,000. She paid a 10% down payment and received RM 2,000 monthly rental. After 5 years, she sold the shoplot for RM 420,000. Total expenses incurred were RM 18,000. Calculate her Return on Investment (ROI) percentage based on total cost.',
            marks: 5,
            topic: 'Consumer Mathematics (Return on Investment - ROI)',
            chapterId: 'math-ch3',
            answer: {
              finalAnswer: 'ROI = 74.0%',
              markingScheme: [
                'Total rental income = RM 2,000 × 12 × 5 = RM 120,000 [1 Mark].',
                'Capital gain = RM 420,000 - RM 300,000 = RM 120,000 [1 Mark].',
                'Net return = Total rental + Capital gain - Expenses = 120,000 + 120,000 - 18,000 = RM 222,000 [1 Mark].',
                'ROI = (Net Return / Initial Investment) × 100% = (222,000 / 300,000) × 100% [1 Mark].',
                'Final ROI = 74.0% [1 Mark].'
              ],
              explanation: 'Total return is RM 222,000 over an initial asset cost of RM 300,000, giving 74.0% ROI.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 8. TERENGGANU STATE TRIAL SCIENCE 2023 ====================
  {
    id: 'pp-terengganu-sci-2023',
    title: '2023 Terengganu State Form 3 Science Preparatory Paper',
    year: 2023,
    subject: 'science',
    examType: 'State',
    paperSet: 'State Trial Full Paper',
    source: 'Jabatan Pendidikan Negeri Terengganu (JPNT)',
    sourceTypeDescription: 'Terengganu State Standard Examination Paper',
    difficulty: 'Medium',
    chaptersTested: ['sci-ch1', 'sci-ch4', 'sci-ch5', 'sci-ch8'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Recognized for comprehensive questions on human nervous systems and extraction of metals.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Which of the following is an example of an involuntary action controlled by the medulla oblongata?',
            options: [
              'Peristalsis in the digestive tract',
              'Writing an essay in an examination',
              'Kicking a football during a penalty',
              'Withdrawing hand immediately upon touching a hot iron'
            ],
            marks: 1,
            topic: 'Stimuli and Responses (Nervous System)',
            chapterId: 'sci-ch1',
            howToApproach: [
              '1. Distinguish between voluntary, involuntary, and reflex actions.',
              '2. Voluntary actions are controlled consciously by the cerebrum.',
              '3. Reflex actions (like hand withdrawal) are controlled by the spinal cord.',
              '4. Automatic internal biological processes (heartbeat, peristalsis) are involuntary actions controlled by medulla oblongata.'
            ],
            answer: {
              finalAnswer: 'Peristalsis in the digestive tract',
              markingScheme: [
                'Medulla oblongata controls vital involuntary actions such as peristalsis, heartbeat, and breathing [1 Mark].'
              ],
              explanation: 'Peristalsis is an involuntary rhythmic muscle contraction controlled automatically by the medulla oblongata without conscious thought.',
              whyIncorrect: {
                'Writing an essay in an examination': 'Voluntary action controlled consciously by the cerebrum.',
                'Kicking a football during a penalty': 'Voluntary motor action directed by cerebrum.',
                'Withdrawing hand immediately upon touching a hot iron': 'Somatic spinal reflex action controlled through spinal cord reflex arc.'
              }
            }
          }
        ]
      },
      {
        name: 'Section B',
        description: 'Extraction of Iron in Blast Furnace (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 2,
            section: 'Section B',
            question: 'In a blast furnace used for iron extraction: (a) State the role of carbon monoxide (CO). (b) Write the balanced word equation for the reduction of iron(III) oxide by carbon monoxide.',
            marks: 3,
            topic: 'Reactivity of Metals (Extraction of Iron)',
            chapterId: 'sci-ch4',
            answer: {
              finalAnswer: '(a) Reducing agent, (b) Iron(III) oxide + Carbon monoxide → Iron + Carbon dioxide',
              markingScheme: [
                '(a) Carbon monoxide acts as a reducing agent to remove oxygen from iron ore [1 Mark].',
                '(b) Reactants: Iron(III) oxide + Carbon monoxide [1 Mark].',
                'Products: Iron + Carbon dioxide [1 Mark].'
              ],
              explanation: 'Carbon monoxide reduces hematite (Fe₂O₃) into molten iron and carbon dioxide gas.'
            }
          }
        ]
      }
    ]
  },

  // ==================== 9. MELAKA STATE TRIAL MATHEMATICS 2023 ====================
  {
    id: 'pp-melaka-math-2023',
    title: '2023 Melaka State Form 3 Mathematics Examination',
    year: 2023,
    subject: 'math',
    examType: 'State',
    paperSet: 'State Moderated Paper',
    source: 'Jabatan Pendidikan Negeri Melaka (JPN Melaka)',
    sourceTypeDescription: 'Melaka State Form 3 Common Academic Paper',
    difficulty: 'Medium',
    chaptersTested: ['math-ch4', 'math-ch6', 'math-ch8', 'math-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Official Melaka State trial paper adhering strictly to Form 3 DSKP requirements.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Find the x-intercept and y-intercept of the straight line 3x + 4y = 24.',
            options: [
              'x-intercept = 8, y-intercept = 6',
              'x-intercept = 6, y-intercept = 8',
              'x-intercept = 4, y-intercept = 3',
              'x-intercept = -8, y-intercept = -6'
            ],
            marks: 1,
            topic: 'Straight Lines (Intercepts)',
            chapterId: 'math-ch9',
            howToApproach: [
              '1. To find x-intercept, set y = 0: 3x + 4(0) = 24 → 3x = 24 → x = 8.',
              '2. To find y-intercept, set x = 0: 3(0) + 4y = 24 → 4y = 24 → y = 6.'
            ],
            answer: {
              finalAnswer: 'x-intercept = 8, y-intercept = 6',
              markingScheme: [
                'Set y = 0 for x-intercept: 3x = 24 → x = 8 [1 Mark].',
                'Set x = 0 for y-intercept: 4y = 24 → y = 6 [1 Mark].'
              ],
              explanation: 'Setting y = 0 gives x = 8. Setting x = 0 gives y = 6.',
              whyIncorrect: {
                'x-intercept = 6, y-intercept = 8': 'Swapped the x and y coefficient divisions.',
                'x-intercept = 4, y-intercept = 3': 'Divided coefficients by 1 instead of calculating intercept with 24.',
                'x-intercept = -8, y-intercept = -6': 'Incorrect negative sign manipulation.'
              }
            }
          }
        ]
      }
    ]
  },

  // ==================== 10. SBP SCIENCE ASSESSMENT 2024 ====================
  {
    id: 'pp-sbp-sci-2024',
    title: '2024 SBP Form 3 Science Diagnostic Paper',
    year: 2024,
    subject: 'science',
    examType: 'School',
    paperSet: 'SBP National Standard Set',
    source: 'Bahagian Pengurusan Sekolah Berasrama Penuh (BPSBP)',
    sourceTypeDescription: 'Fully Residential Schools (SBP) Form 3 Academic Diagnostic Examination',
    difficulty: 'Hard',
    chaptersTested: ['sci-ch2', 'sci-ch3', 'sci-ch7', 'sci-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 22,
    officialOrPublicNote: 'SBP papers emphasize high-order thinking skills and quantitative data interpretation.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Which of the following blood vessels carries oxygenated blood under high pressure away from the heart?',
            options: [
              'Aorta',
              'Pulmonary artery',
              'Vena cava',
              'Pulmonary vein'
            ],
            marks: 1,
            topic: 'Transportation (Blood Vessels)',
            chapterId: 'sci-ch3',
            howToApproach: [
              '1. Arteries carry blood away from the heart under high pumping pressure.',
              '2. The Aorta receives oxygenated blood from the left ventricle to distribute to the entire body.',
              '3. Pulmonary artery carries deoxygenated blood to lungs.'
            ],
            answer: {
              finalAnswer: 'Aorta',
              markingScheme: [
                'The Aorta is the largest systemic artery, carrying oxygenated blood pumped at high pressure from the left ventricle [1 Mark].'
              ],
              explanation: 'The aorta carries oxygenated blood under high pressure to all systemic body organs.',
              whyIncorrect: {
                'Pulmonary artery': 'Carries deoxygenated blood to the lungs.',
                'Vena cava': 'Carries deoxygenated blood under low pressure towards the heart.',
                'Pulmonary vein': 'Carries oxygenated blood under low pressure towards the left atrium.'
              }
            }
          }
        ]
      }
    ]
  },

  // ==================== 11. SABAH STATE TRIAL MATHEMATICS 2024 ====================
  {
    id: 'pp-sabah-math-2024',
    title: '2024 Sabah State Form 3 Mathematics Examination',
    year: 2024,
    subject: 'math',
    examType: 'State',
    paperSet: 'State Diagnostic Assessment',
    source: 'Jabatan Pendidikan Negeri Sabah (JPNSabah)',
    sourceTypeDescription: 'Sabah State Form 3 Standard Examination Paper',
    difficulty: 'Medium',
    chaptersTested: ['math-ch2', 'math-ch4', 'math-ch5', 'math-ch8'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Comprehensive state-moderated examination paper from Sabah State Syndicate.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'The scale of a floor plan is 1 : 50. The dimensions of a rectangular bedroom on the plan are 8 cm by 6 cm. Find the actual area of the bedroom in m².',
            options: ['12 m²', '1.2 m²', '24 m²', '120 m²'],
            marks: 1,
            topic: 'Scale Drawings (Area Calculations)',
            chapterId: 'math-ch4',
            howToApproach: [
              '1. Scale is 1 : 50.',
              '2. Actual length = 8 cm × 50 = 400 cm = 4 m.',
              '3. Actual width = 6 cm × 50 = 300 cm = 3 m.',
              '4. Actual Area = 4 m × 3 m = 12 m².'
            ],
            answer: {
              finalAnswer: '12 m²',
              markingScheme: [
                'Actual dimensions: Length = 400 cm = 4 m, Width = 300 cm = 3 m [1 Mark].',
                'Actual Area = 4 m × 3 m = 12 m² [1 Mark].'
              ],
              explanation: '8 cm × 50 = 4 m, 6 cm × 50 = 3 m. Actual Area = 4 × 3 = 12 m².',
              whyIncorrect: {
                '1.2 m²': 'Divided by an extra factor of 10 in unit conversions.',
                '24 m²': 'Multiplied by an extra factor of 2.',
                '120 m²': 'Calculated area directly in cm² and converted using wrong factor 100 instead of 10,000.'
              }
            }
          }
        ]
      }
    ]
  },

  // ==================== 12. PAHANG STATE TRIAL SCIENCE 2023 ====================
  {
    id: 'pp-pahang-sci-2023',
    title: '2023 Pahang State Form 3 Science Diagnostic Paper',
    year: 2023,
    subject: 'science',
    examType: 'State',
    paperSet: 'State Diagnostic Full Paper',
    source: 'Jabatan Pendidikan Negeri Pahang (JPN Pahang)',
    sourceTypeDescription: 'Pahang State Moderated Form 3 Science Examination',
    difficulty: 'Medium',
    chaptersTested: ['sci-ch5', 'sci-ch6', 'sci-ch7', 'sci-ch9'],
    durationMinutes: 120,
    totalMarks: 100,
    questionsCount: 20,
    officialOrPublicNote: 'Official diagnostic assessment from the Pahang State Education Syndicate.',
    sections: [
      {
        name: 'Section A',
        description: 'Objective Questions (20 Marks)',
        totalMarks: 20,
        questions: [
          {
            number: 1,
            section: 'Section A',
            question: 'Which of the following describes the Sunspot cycle and its primary effect on Earth?',
            options: [
              'An 11-year cycle of magnetic activity that causes geomagnetic storms and auroras',
              'A 365-day solar orbit causing changes in planetary tides',
              'A monthly solar flare cycle altering atmospheric oxygen levels',
              'A 24-hour solar rotation that regulates the greenhouse effect'
            ],
            marks: 1,
            topic: 'Space Weather (Solar Phenomena)',
            chapterId: 'sci-ch9',
            howToApproach: [
              '1. Recall that sunspot activity rises and falls over an 11-year solar cycle.',
              '2. Coronal mass ejections and high sunspot activity release charged solar wind particles.',
              '3. These particles interact with Earth’s magnetosphere to cause auroras and geomagnetic storms.'
            ],
            answer: {
              finalAnswer: 'An 11-year cycle of magnetic activity that causes geomagnetic storms and auroras',
              markingScheme: [
                'Sunspot cycle occurs approximately every 11 years, releasing solar plasma that triggers geomagnetic storms and auroras in polar atmospheres [1 Mark].'
              ],
              explanation: 'The sunspot cycle is an 11-year solar magnetic cycle that triggers geomagnetic storms, disrupting satellites and producing auroras.',
              whyIncorrect: {
                'A 365-day solar orbit causing changes in planetary tides': 'Earth orbits the Sun in 365 days; sunspots are solar surface magnetic features.',
                'A monthly solar flare cycle altering atmospheric oxygen levels': 'Solar flares do not occur on a monthly cycle nor deplete atmospheric oxygen.',
                'A 24-hour solar rotation that regulates the greenhouse effect': 'Earth rotates in 24 hours, not the Sun.'
              }
            }
          }
        ]
      }
    ]
  }
];
