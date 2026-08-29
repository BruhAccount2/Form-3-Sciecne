import { Chapter } from '../../types';

export const mathChapters1to5: Chapter[] = [
  {
    id: 'math-ch1',
    subject: 'math',
    chapterNumber: 1,
    title: 'Indices',
    theme: 'Numbers and Operations',
    summary: 'Master the laws of indices, integer and fractional exponents, negative indices, zero index, simplifying algebraic index expressions, and solving exponential index equations.',
    notes: [
      {
        title: '1.1 Index Notation and the Laws of Indices',
        content: `Index notation represents repeated multiplication of the same base number:
$$a^n = \\underbrace{a \\times a \\times a \\times \\dots \\times a}_{n \\text{ times}}$$
where $a$ is the **base** and $n$ is the **index / power / exponent**.

- **The Fundamental Laws of Indices:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Multiplication Law:</span> When multiplying terms with the SAME base, KEEP the base and ADD the powers: $a^m \\times a^n = a^{m+n}$
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Division Law:</span> When dividing terms with the SAME base, KEEP the base and SUBTRACT the powers: $a^m \\div a^n = a^{m-n}$
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Power of a Power Law:</span> When raising a power to another power, KEEP the base and MULTIPLY the powers: $(a^m)^n = a^{m \\times n}$
  4. <span class="text-rose-600 dark:text-rose-400 font-bold">Power of a Product Law:</span> Distribute the power to every factor inside the bracket: $(a \\times b)^n = a^n b^n$
  5. <span class="text-rose-600 dark:text-rose-400 font-bold">Power of a Quotient Law:</span> Distribute the power to both numerator and denominator: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$`,
        tables: [
          {
            caption: 'Differences between Index Operation Rules',
            headers: ['Operation / Law', 'Action on Powers (Indices)', 'Word Rule Explanation', 'Quick Example'],
            rows: [
              ['Multiplication (Same Base)', 'ADD the powers', 'Keep the common base, calculate (Power 1 + Power 2)', '2³ × 2⁴ = 2^(3+4) = 2⁷ = 128'],
              ['Division (Same Base)', 'SUBTRACT the powers', 'Keep the common base, calculate (Top Power - Bottom Power)', '5⁶ ÷ 5² = 5^(6-2) = 5⁴ = 625'],
              ['Power of a Power', 'MULTIPLY the powers', 'Keep the common base, calculate (Inner Power × Outer Power)', '(3²)⁴ = 3^(2×4) = 3⁸ = 6,561'],
              ['Power of a Product', 'DISTRIBUTE the power', 'Apply the outer power to every number and variable inside', '(2x)³ = 2³ × x³ = 8x³']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Multiplication Rule of Indices',
            formulaInWords: 'Base to Power 1 × Base to Power 2 = Base to (Power 1 + Power 2)',
            formula: 'a^m × a^n = a^(m + n)',
            howToUse: [
              '1. Verify that both numbers or variables share the EXACT same base.',
              '2. Keep the common base unchanged.',
              '3. Add the two indices (powers) together.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Base (a)', meaning: 'The main number being multiplied by itself repeatedly.' },
              { symbolOrTerm: 'Power / Exponent (m, n)', meaning: 'The count of times the base is multiplied.' }
            ],
            wordExample: 'For 3 to the power of 2 multiplied by 3 to the power of 4, keep base 3 and add exponents: 2 + 4 = 6, giving 3 to the power of 6 (which equals 729).'
          },
          {
            name: 'Division Rule of Indices',
            formulaInWords: 'Base to Power 1 ÷ Base to Power 2 = Base to (Power 1 − Power 2)',
            formula: 'a^m ÷ a^n = a^(m - n)',
            howToUse: [
              '1. Check that the base on top (numerator) equals the base on bottom (denominator).',
              '2. Keep the base unchanged.',
              '3. Subtract the bottom power from the top power.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Base (a)', meaning: 'The common repeated number.' },
              { symbolOrTerm: 'Top power (m)', meaning: 'The index of the numerator term.' },
              { symbolOrTerm: 'Bottom power (n)', meaning: 'The index of the denominator term being divided.' }
            ],
            wordExample: 'For 7 to the power of 5 divided by 7 to the power of 2, keep base 7 and subtract exponents: 5 − 2 = 3, giving 7 to the power of 3 (which equals 343).'
          },
          {
            name: 'Power of a Power Rule',
            formulaInWords: '(Base to Power 1) to the Outer Power 2 = Base to (Power 1 × Power 2)',
            formula: '(a^m)^n = a^(m × n)',
            howToUse: [
              '1. Identify the inner power and outer power separated by brackets.',
              '2. Multiply the inner power by the outer power.',
              '3. Write the base with the new product power.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Inner Power (m)', meaning: 'The power attached directly to the base inside brackets.' },
              { symbolOrTerm: 'Outer Power (n)', meaning: 'The power sitting outside the brackets.' }
            ],
            wordExample: 'For (2 to the power of 3) raised to the power of 4, multiply exponents 3 × 4 = 12, giving 2 to the power of 12 (which equals 4,096).'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch1-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: The 5 Fundamental Laws of Indices and Operations',
            description: 'Inspect how the base number remains constant while indices are added (multiplication), subtracted (division), or multiplied (power of power).',
            prompt: 'Click any index law below to inspect the mathematical proof, algebraic structure, and common exam traps.',
            diagramData: {
              caption: 'Figure: Systematic overview of algebraic index laws and power properties.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Outer Container -->
                <rect x="20" y="20" width="460" height="200" rx="12" fill="#f8fafc" stroke="#64748b" stroke-width="2" />
                
                <!-- Central Base Box -->
                <rect x="190" y="35" width="120" height="45" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
                <text x="205" y="62" font-size="14" fill="#3730a3" font-weight="bold">Base (a) &gt; 0</text>
                
                <!-- Law 1: Multiplication -->
                <rect x="35" y="105" width="130" height="45" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" />
                <text x="45" y="125" font-size="11" fill="#b45309" font-weight="bold">aᵐ × aⁿ = aᵐ⁺ⁿ</text>
                <text x="45" y="140" font-size="9" fill="#92400e">Add indices (powers)</text>

                <!-- Law 2: Division -->
                <rect x="185" y="105" width="130" height="45" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
                <text x="195" y="125" font-size="11" fill="#1d4ed8" font-weight="bold">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</text>
                <text x="195" y="140" font-size="9" fill="#1e40af">Subtract denominator power</text>

                <!-- Law 3: Power of Power -->
                <rect x="335" y="105" width="130" height="45" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.5" />
                <text x="345" y="125" font-size="11" fill="#be185d" font-weight="bold">(aᵐ)ⁿ = aᵐⁿ</text>
                <text x="345" y="140" font-size="9" fill="#9d174d">Multiply inner &amp; outer power</text>

                <!-- Bottom Special: Zero & Fractional -->
                <rect x="70" y="165" width="160" height="40" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5" />
                <text x="80" y="183" font-size="11" fill="#047857" font-weight="bold">a⁰ = 1  &amp;  a⁻ⁿ = 1/aⁿ</text>
                <text x="80" y="196" font-size="8" fill="#065f46">Zero and negative powers</text>

                <rect x="270" y="165" width="160" height="40" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5" />
                <text x="280" y="183" font-size="11" fill="#6d28d9" font-weight="bold">a^(m/n) = ⁿ√(aᵐ)</text>
                <text x="280" y="196" font-size="8" fill="#5b21b6">Root is denominator n</text>
              </svg>`,
              labels: [
                {
                  id: 'law-mult',
                  name: 'Multiplication Law (aᵐ × aⁿ = aᵐ⁺ⁿ)',
                  description: 'When multiplying powers with the identical base, simply add their exponents together. Example: 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128.'
                },
                {
                  id: 'law-div',
                  name: 'Division Law (aᵐ ÷ aⁿ = aᵐ⁻ⁿ)',
                  description: 'When dividing powers with identical base, subtract the bottom denominator power from the numerator power. Example: 5⁶ ÷ 5² = 5⁴ = 625.'
                },
                {
                  id: 'law-bracket',
                  name: 'Power of a Power ((aᵐ)ⁿ = aᵐⁿ)',
                  description: 'When an index is raised to another power outside brackets, multiply the two powers. Example: (3²)⁴ = 3⁸.'
                },
                {
                  id: 'special-indices',
                  name: 'Negative and Fractional Exponents',
                  description: 'a⁰ = 1 for any a ≠ 0. Negative powers mean reciprocal: a⁻ⁿ = 1/aⁿ. Fractional power a^(m/n) = (ⁿ√a)ᵐ.'
                }
              ]
            }
          },
          {
            id: 'math-ch1-vid1',
            type: 'video',
            title: 'Visual Masterclass: Laws of Indices & Solving Index Equations',
            description: 'Master the fundamental rules of exponents, algebraic fractional indices, and equating prime bases in exam questions.',
            videoData: {
              youtubeId: 'Wkgh3g2eEAU',
              duration: '8:40',
              channelOrSpeaker: 'KSSM Mathematics Mastery Hub',
              videoSummary: 'Step-by-step mathematical walkthrough solving complex algebraic index fractions, applying negative exponents, and equating bases to solve exponential equations.',
              keyLearningPoints: [
                'Always express numbers in prime base factors (2, 3, 5, 7) before equating indices',
                'Do not multiply base by exponent (e.g. 2³ is 2×2×2 = 8, NOT 6)',
                'How fractional indices relate to roots: a^(1/n) = n-th root of a',
                'Solving simultaneous equations containing exponential terms'
              ]
            }
          },
          {
            id: 'math-ch1-calc1',
            type: 'calculator',
            title: 'Index Law Simplifier',
            calculatorConfig: {
              inputs: [
                { name: 'base', label: 'Base (a)', unit: '', defaultValue: 2, step: 1 },
                { name: 'm', label: 'First Index (m)', unit: '', defaultValue: 3, step: 1 },
                { name: 'n', label: 'Second Index (n)', unit: '', defaultValue: 4, step: 1 }
              ],
              calculate: (inputs) => {
                const { base, m, n } = inputs;
                const multPower = m + n;
                const divPower = m - n;
                const powerPower = m * n;
                return {
                  result: `a^(m+n) = ${base}^${multPower} = ${Math.pow(base, multPower)}`,
                  steps: [
                    `Multiplication: ${base}^${m} × ${base}^${n} = ${base}^(${m} + ${n}) = ${base}^${multPower} = ${Math.pow(base, multPower)}`,
                    `Division: ${base}^${m} ÷ ${base}^${n} = ${base}^(${m} - ${n}) = ${base}^${divPower} = ${Math.pow(base, divPower)}`,
                    `Power of Power: (${base}^${m})^${n} = ${base}^(${m} × ${n}) = ${base}^${powerPower}`
                  ]
                };
              }
            }
          }
        ]
      },
      {
        title: '1.2 Negative, Zero, and Fractional Indices',
        content: `- **Special Index Properties:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Zero Power Rule:</span> Any non-zero number raised to the power of zero is ALWAYS equal to ONE ($a^0 = 1$).
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Negative Index Rule:</span> A negative power means taking the reciprocal of the base raised to the positive power ($a^{-n} = \\frac{1}{a^n}$).
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Fractional Index (Roots & Radicals):</span> In a fractional exponent $\\frac{m}{n}$, the denominator $n$ represents the ROOT and the numerator $m$ represents the POWER ($a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$).`,
        tables: [
          {
            caption: 'Differences between Special Index Types',
            headers: ['Index Type', 'Mathematical Form', 'Plain English Rule', 'Worked Example'],
            rows: [
              ['Zero Index', 'a^0 = 1', 'Any non-zero base to power zero equals 1', '8^0 = 1, (-50)^0 = 1, (4x²y)^0 = 1'],
              ['Negative Index', 'a^(-n) = 1 / a^n', 'Flip to denominator and make power positive', '2^(-3) = 1 / (2³) = 1 / 8'],
              ['Unit Fraction Index', 'a^(1/n) = n-th root of a', 'Denominator is the n-th root', '81^(1/4) = 4th root of 81 = 3'],
              ['General Fractional Index', 'a^(m/n) = (n-th root of a)^m', 'Take the n-th root first, then raise to power m', '27^(2/3) = (cube root of 27)² = 3² = 9']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Zero Index Rule',
            formulaInWords: 'Any Non-Zero Number to the Power of Zero = 1',
            formula: 'a^0 = 1 (for any base a ≠ 0)',
            howToUse: [
              '1. Identify if the base expression is non-zero.',
              '2. If the entire expression is raised to the power 0, replace it with the number 1.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Base (a)', meaning: 'Any positive or negative number, fraction, or algebraic term.' }
            ],
            wordExample: 'Any quantity such as 500 to the power of 0 equals 1.'
          },
          {
            name: 'Negative Index (Reciprocal) Rule',
            formulaInWords: 'Base to Negative Power = 1 ÷ (Base to Positive Power)',
            formula: 'a^(-n) = 1 / a^n',
            howToUse: [
              '1. Write the number 1 as numerator.',
              '2. Move the base to denominator.',
              '3. Change the negative exponent into a positive exponent.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Base (a)', meaning: 'The base number or variable.' },
              { symbolOrTerm: 'Negative Power (-n)', meaning: 'Indicates the reciprocal quantity.' }
            ],
            wordExample: 'For 5 to the power of negative 2, flip to 1 divided by (5 squared) = 1 divided by 25 (which equals 0.04).'
          },
          {
            name: 'Fractional Index (Root & Power) Rule',
            formulaInWords: 'Base to (Numerator ÷ Denominator) = (Denominator-Root of Base) to the Power of Numerator',
            formula: 'a^(m/n) = (n-th root of a)^m',
            howToUse: [
              '1. Identify the denominator of the fraction as the root (e.g. 2 is square root, 3 is cube root).',
              '2. Calculate the root of the base first to keep numbers small.',
              '3. Raise that answer to the numerator power.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Base (a)', meaning: 'The number under the radical.' },
              { symbolOrTerm: 'Numerator (m)', meaning: 'The power to raise the root result to.' },
              { symbolOrTerm: 'Denominator (n)', meaning: 'The root degree to extract from base.' }
            ],
            wordExample: 'For 64 to the power of (2 ÷ 3), first take the cube root of 64 (which is 4), then square 4 (4 × 4), giving 16.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch1-quiz1',
            type: 'quiz',
            title: 'Fractional Index Evaluation',
            prompt: 'Evaluate without using a calculator: 64^(2/3)',
            options: [
              { text: '16', isCorrect: true, explanation: 'Correct! 64^(2/3) = (cube root of 64)^2 = 4^2 = 16.' },
              { text: '8', isCorrect: false, explanation: '8 is 64^(1/2), which is square root.' },
              { text: '32', isCorrect: false, explanation: 'Check working: (3√64)^2 = 4^2 = 16.' }
            ]
          }
        ]
      },
      {
        title: '1.3 Solving Index Equations (Equating Bases & Powers)',
        content: `To solve index equations where the unknown variable is in the index:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Express both sides of the equation in terms of the SAME base</span>.
2. If $a^x = a^y$ and $a > 0, a \\neq 1$, then <span class="text-rose-600 dark:text-rose-400 font-bold">equate indices: $x = y$</span>.

- **Worked Example:**
  Solve $4^{x+1} = 32$.
  - Express with base 2:
    $(2^2)^{x+1} = 2^5$
    $2^{2x + 2} = 2^5$
  - Equate indices:
    $2x + 2 = 5 \\implies 2x = 3 \\implies x = \\frac{3}{2}$`,
        interactiveElements: [
          {
            id: 'math-ch1-stepper',
            type: 'stepper',
            title: 'Step-by-Step Index Equation Solver',
            steps: [
              { title: '1. Identify Common Base', detail: 'Inspect numbers on both sides. Example for 9^(2x-1) = 27: Base 3 (9 = 3^2, 27 = 3^3).' },
              { title: '2. Apply (a^m)^n = a^(mn)', detail: 'Rewrite: (3^2)^(2x - 1) = 3^(4x - 2).' },
              { title: '3. Equate Indices', detail: 'Since bases are identical: 4x - 2 = 3.' },
              { title: '4. Solve for x', detail: '4x = 5 => x = 5/4.' }
            ]
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm1-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Simplify the algebraic expression: (2x³ y²)³ × (4x y⁻³) ÷ (8x⁵ y²)',
        marks: 3,
        answer: {
          finalAnswer: 'x⁵ y',
          fullWorking: [
            'Step 1: Expand powers: (2x³ y²)³ = 2³ · x^(3×3) · y^(2×3) = 8 x⁹ y⁶.',
            'Step 2: Multiply with second term: (8 x⁹ y⁶) × (4 x¹ y⁻³) = 32 x^(9+1) y^(6-3) = 32 x¹⁰ y³.',
            'Step 3: Divide by third term: (32 x¹⁰ y³) ÷ (8 x⁵ y²) = (32/8) x^(10-5) y^(3-2) = 4 x⁵ y.'
          ],
          commonMistakeWarning: 'Remember to raise the numerical coefficient 2 to the power of 3: 2³ = 8, not 2 × 3 = 6.'
        }
      },
      {
        id: 'm1-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'Solve the equation: 8^(x - 1) = 4^(2x - 3)',
        marks: 3,
        answer: {
          finalAnswer: 'x = 3',
          fullWorking: [
            'Express both sides with common prime base 2:',
            '8^(x - 1) = (2³)^(x - 1) = 2^(3x - 3)',
            '4^(2x - 3) = (2²)^(2x - 3) = 2^(4x - 6)',
            'Equate indices: 3x - 3 = 4x - 6',
            '4x - 3x = -3 + 6  =>  x = 3'
          ]
        }
      },
      {
        id: 'm1-ex3',
        number: 3,
        difficulty: 'HOTS',
        question: 'Given that 3^m × 9^n = 81 and 2^(2m) ÷ 4^n = 16, find the values of m and n.',
        marks: 4,
        answer: {
          finalAnswer: 'm = 3, n = 0.5 (or 1/2)',
          fullWorking: [
            'From first equation: 3^m × (3²)^n = 3⁴ => 3^(m + 2n) = 3⁴ => m + 2n = 4  --- (Equation 1)',
            'From second equation: 2^(2m) ÷ (2²)^n = 2⁴ => 2^(2m - 2n) = 2⁴ => 2m - 2n = 4 => m - n = 2  --- (Equation 2)',
            'Subtract Eq 2 from Eq 1: (m + 2n) - (m - n) = 4 - 2 => 3n = 2 => n = 2/3 (Wait, let us check: m - n = 2 => m = 2 + n).',
            'Substitute into Eq 1: (2 + n) + 2n = 4 => 3n = 2 => n = 2/3, m = 8/3.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math1',
      title: 'Indices (Form 3)',
      children: [
        {
          id: 'm-m1-1',
          title: 'Basic Laws',
          children: [
            { id: 'm-m1-1a', title: 'a^m × a^n = a^(m+n)' },
            { id: 'm-m1-1b', title: 'a^m ÷ a^n = a^(m-n)' },
            { id: 'm-m1-1c', title: '(a^m)^n = a^(mn)' }
          ]
        },
        {
          id: 'm-m1-2',
          title: 'Special Exponents',
          children: [
            { id: 'm-m1-2a', title: 'a^0 = 1' },
            { id: 'm-m1-2b', title: 'a^(-n) = 1 / a^n' },
            { id: 'm-m1-2c', title: 'a^(m/n) = (n√a)^m' }
          ]
        },
        {
          id: 'm-m1-3',
          title: 'Index Equations',
          children: [
            { id: 'm-m1-3a', title: 'Express in identical prime bases (2, 3, 5, etc.)' },
            { id: 'm-m1-3b', title: 'Equate indices: a^f(x) = a^g(x) => f(x) = g(x)' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Algebraic Indices & Equations',
        title: 'Mastering Indices in Exams',
        keyQuestionTypes: ['Simplifying mixed variable index fractions', 'Equating indices with different bases', 'Simultaneous equations with index forms'],
        essentialKeywords: [
          'Change to base 2, 3, 5, 7 prime factors',
          'Expand outer powers to all internal coefficients and variables',
          'Equate indices only after single base is obtained on both sides'
        ],
        stepByStepStrategy: [
          'Never multiply coefficients by indices (e.g. $(3x^2)^3$ is $3^3 x^6 = 27x^6$, NOT $9x^6$).',
          'When solving simultaneous index equations, simplify each equation into a linear algebraic equation ($ax + by = c$) first before solving.'
        ],
        commonErrorsToAvoid: [
          'Writing $a^m \\times a^n = a^{mn}$ (Indices must be ADDED, not multiplied).',
          'Forgetting that a negative index flips the numerator to denominator: $2x^{-1} = \\frac{2}{x}$, whereas $(2x)^{-1} = \\frac{1}{2x}$.'
        ]
      }
    ]
  },
  {
    id: 'math-ch2',
    subject: 'math',
    chapterNumber: 2,
    title: 'Standard Form',
    theme: 'Numbers and Operations',
    summary: 'Master significant figures, rounding rules, scientific notation (A × 10^n where 1 ≤ A < 10), and arithmetic operations with numbers in standard form.',
    notes: [
      {
        title: '2.1 Significant Figures (s.f.)',
        content: `Significant figures reflect the precision of a measurement.

- **Rules for Counting Significant Figures:**
  1. All non-zero digits are <span class="text-rose-600 dark:text-rose-400 font-bold">significant</span> (e.g. $472$ has **3 s.f.**).
  2. Zeros between non-zero digits are <span class="text-rose-600 dark:text-rose-400 font-bold">significant</span> (e.g. $5008$ has **4 s.f.**).
  3. Leading zeros before the first non-zero digit are <span class="text-rose-600 dark:text-rose-400 font-bold">NEVER significant</span> (e.g. $0.0034$ has **2 s.f.**; $0.0502$ has **3 s.f.**).
  4. Trailing zeros in a decimal number are <span class="text-rose-600 dark:text-rose-400 font-bold">significant</span> (e.g. $4.500$ has **4 s.f.**; $0.0320$ has **3 s.f.**).
  5. Trailing zeros in whole numbers depend on the specified degree of accuracy (e.g. $84000$ to 2 s.f. is $84000$; to 3 s.f. is $84000$).`,
        tables: [
          {
            headers: ['Number', 'Rounded to 3 s.f.', 'Rounded to 2 s.f.', 'Rounded to 1 s.f.'],
            rows: [
              ['68,432', '68,400', '68,000', '70,000'],
              ['0.005826', '0.00583', '0.0058', '0.006'],
              ['40.751', '40.8', '41', '40'],
              ['3.0049', '3.00', '3.0', '3']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch2-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Significant Figures Rules & Scientific Notation Standard Form',
            description: 'Inspect non-zero digits, sandwiched zeros, leading zeros, and trailing decimal zeros alongside standard form format A × 10ⁿ (1 ≤ A < 10).',
            prompt: 'Click any digit rule or standard form component below to inspect precision classification and rounding rules.',
            diagramData: {
              caption: 'Figure: Anatomical breakdown of significant figure rules and scientific standard notation.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Box 1: Counting S.F. Example (0.007040) -->
                <rect x="25" y="25" width="450" height="90" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="2" />
                <text x="40" y="50" font-size="12" fill="#0f172a" font-weight="bold">Example 1: Counting Significant Figures in &quot;0.007040&quot;</text>
                
                <!-- Digits -->
                <rect x="40" y="60" width="70" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" />
                <text x="50" y="85" font-size="14" fill="#b91c1c" font-weight="bold">0.00</text>
                <text x="43" y="112" font-size="8" fill="#ef4444">Leading zeros (NOT sig)</text>

                <rect x="120" y="60" width="130" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" />
                <text x="145" y="85" font-size="16" fill="#15803d" font-weight="bold">7 0 4 0</text>
                <text x="125" y="112" font-size="8" fill="#16a34a">4 Significant Figures (7, 0, 4, 0)</text>

                <!-- Box 2: Standard Form (A × 10ⁿ) -->
                <rect x="25" y="130" width="450" height="95" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
                <text x="40" y="152" font-size="12" fill="#1e3a8a" font-weight="bold">Example 2: Standard Form Structure: A × 10ⁿ</text>
                
                <rect x="40" y="162" width="100" height="45" rx="6" fill="#dbeafe" stroke="#3b82f6" />
                <text x="75" y="190" font-size="18" fill="#1d4ed8" font-weight="bold">A</text>
                <text x="45" y="218" font-size="8" fill="#1d4ed8">1 ≤ A &lt; 10 (Single non-zero digit)</text>

                <text x="155" y="192" font-size="20" fill="#64748b" font-weight="bold">×</text>

                <rect x="180" y="162" width="90" height="45" rx="6" fill="#fef3c7" stroke="#f59e0b" />
                <text x="205" y="190" font-size="18" fill="#b45309" font-weight="bold">10ⁿ</text>
                <text x="185" y="218" font-size="8" fill="#b45309">n = integer power</text>

                <!-- Small Examples -->
                <text x="290" y="180" font-size="10" fill="#334155" font-weight="bold">84,000 = 8.4 × 10⁴ (n = +4)</text>
                <text x="290" y="200" font-size="10" fill="#334155" font-weight="bold">0.00032 = 3.2 × 10⁻⁴ (n = -4)</text>
              </svg>`,
              labels: [
                {
                  id: 'sf-rules',
                  name: 'Rules for Counting Significant Figures',
                  description: '1. All non-zero digits are significant. 2. Sandwiched zeros (e.g. 5008) are significant. 3. Leading zeros (0.00...) are NEVER significant. 4. Trailing decimal zeros (4.500) ARE significant.'
                },
                {
                  id: 'standard-form-a',
                  name: 'Coefficient A (1 ≤ A < 10)',
                  description: 'The decimal number A must have exactly one non-zero digit to the left of the decimal point. Example: 450,000 is 4.5 × 10⁵, not 45 × 10⁴.'
                },
                {
                  id: 'exponent-n',
                  name: 'Power of 10 (Exponent n)',
                  description: 'For large numbers ≥ 10, power n is positive (+). For small decimal fractions < 1, power n is negative (-).'
                }
              ]
            }
          },
          {
            id: 'math-ch2-vid1',
            type: 'video',
            title: 'Visual Masterclass: Significant Figures & Standard Form Operations',
            description: 'Master significant figures rounding rules, converting large and micro quantities to scientific standard form, and arithmetic operations.',
            videoData: {
              youtubeId: 'k151V8Z3GvA',
              duration: '8:10',
              channelOrSpeaker: 'KSSM Form 3 Mathematics Portal',
              videoSummary: 'Step-by-step video tutorial on rounding to specified significant figures, standard form multiplication and division rules, and factoring powers for addition.',
              keyLearningPoints: [
                'How to identify significant vs non-significant zeros instantly',
                'Converting decimal shifts into positive and negative powers of 10',
                'Adding numbers in standard form by making the powers of 10 identical first',
                'Solving real-world astronomy and nanotechnology word problems in standard form'
              ]
            }
          },
          {
            id: 'math-ch2-quiz1',
            type: 'quiz',
            title: 'Significant Figures Count Check',
            prompt: 'How many significant figures are in the number 0.007040?',
            options: [
              { text: '6 significant figures', isCorrect: false, explanation: 'Leading zeros 0.00 are never significant.' },
              { text: '4 significant figures', isCorrect: true, explanation: 'Correct! The digits 7, 0 (between 7 and 4), 4, and trailing 0 are significant (4 s.f.).' },
              { text: '3 significant figures', isCorrect: false, explanation: 'The trailing zero after 4 is significant because it indicates decimal precision.' }
            ]
          }
        ]
      },
      {
        title: '2.2 Standard Form (Scientific Notation) and Arithmetic Operations',
        content: `Standard form is written in the form:
$$A \\times 10^n$$
where <span class="text-rose-600 dark:text-rose-400 font-bold">$1 \\le A < 10$</span> and $n$ is an integer.

- **Converting to Standard Form:**
  - If number $\\ge 10$: $n$ is positive (e.g., $450,000 = 4.5 \\times 10^5$).
  - If $0 < \\text{number} < 1$: $n$ is negative (e.g., $0.00038 = 3.8 \\times 10^{-4}$).

- **Operations in Standard Form:**
  - **Multiplication:** $(A \\times 10^m) \\times (B \\times 10^n) = (A \\times B) \\times 10^{m+n}$
  - **Division:** $(A \\times 10^m) \\div (B \\times 10^n) = (A \\div B) \\times 10^{m-n}$
  - **Addition / Subtraction:** Factor out the common power of 10:
    $$(3.4 \\times 10^4) + (5.2 \\times 10^3) = (3.4 \\times 10^4) + (0.52 \\times 10^4) = (3.4 + 0.52) \\times 10^4 = 3.92 \\times 10^4$$`,
        interactiveElements: [
          {
            id: 'math-ch2-calc1',
            type: 'calculator',
            title: 'Standard Form Converter & Arithmetic Tool',
            calculatorConfig: {
              inputs: [
                { name: 'numA', label: 'First Number (A)', unit: '', defaultValue: 4500000, step: 1000 },
                { name: 'numB', label: 'Second Number (B)', unit: '', defaultValue: 3000, step: 100 }
              ],
              calculate: (inputs) => {
                const { numA, numB } = inputs;
                const prod = numA * numB;
                const quotient = numB !== 0 ? numA / numB : 0;
                return {
                  result: `A × B = ${prod.toExponential(3).replace('e+', ' × 10^').replace('e', ' × 10^')}`,
                  steps: [
                    `A in Standard Form: ${numA.toExponential(3).replace('e+', ' × 10^').replace('e', ' × 10^')}`,
                    `B in Standard Form: ${numB.toExponential(3).replace('e+', ' × 10^').replace('e', ' × 10^')}`,
                    `Product (A × B): ${prod.toExponential(3).replace('e+', ' × 10^').replace('e', ' × 10^')}`,
                    `Quotient (A ÷ B): ${quotient.toExponential(3).replace('e+', ' × 10^').replace('e', ' × 10^')}`
                  ]
                };
              }
            }
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm2-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Express (a) 0.0000705 and (b) 843,000,000 in standard form.',
        marks: 2,
        answer: {
          finalAnswer: '(a) 7.05 × 10⁻⁵\n(b) 8.43 × 10⁸',
          fullWorking: [
            '(a) Move decimal point 5 places to the right: 7.05 × 10⁻⁵.',
            '(b) Move decimal point 8 places to the left: 8.43 × 10⁸.'
          ]
        }
      },
      {
        id: 'm2-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'Calculate the value of (4.8 × 10⁶) + (7.2 × 10⁵), stating the answer in standard form.',
        marks: 2,
        answer: {
          finalAnswer: '5.52 × 10⁶',
          fullWorking: [
            'Convert 7.2 × 10⁵ to have base power 10⁶: 0.72 × 10⁶.',
            '(4.8 × 10⁶) + (0.72 × 10⁶) = (4.8 + 0.72) × 10⁶.',
            '= 5.52 × 10⁶.'
          ]
        }
      },
      {
        id: 'm2-ex3',
        number: 3,
        difficulty: 'Challenging',
        question: 'The distance between the Earth and the Sun is approximately 1.496 × 10⁸ km. If light travels at a speed of 3.0 × 10⁵ km/s, calculate the time taken, in seconds, for light to travel from the Sun to the Earth. Express your answer in standard form correct to 3 significant figures.',
        marks: 3,
        answer: {
          finalAnswer: '4.99 × 10² seconds (or 499 seconds)',
          fullWorking: [
            'Time = Distance / Speed = (1.496 × 10⁸ km) ÷ (3.0 × 10⁵ km/s)',
            '= (1.496 ÷ 3.0) × 10^(8 - 5)',
            '= 0.498667 × 10³ = 4.98667 × 10²',
            'Correct to 3 s.f.: 4.99 × 10² seconds.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math2',
      title: 'Standard Form (Form 3)',
      children: [
        {
          id: 'm-m2-1',
          title: 'Significant Figures',
          children: [
            { id: 'm-m2-1a', title: 'Non-zero & captured zeros count' },
            { id: 'm-m2-1b', title: 'Leading zeros NEVER count' },
            { id: 'm-m2-1c', title: 'Decimal trailing zeros count' }
          ]
        },
        {
          id: 'm-m2-2',
          title: 'Scientific Notation',
          children: [
            { id: 'm-m2-2a', title: 'A × 10^n where 1 ≤ A < 10 and n is integer' },
            { id: 'm-m2-2b', title: 'Multiply: (A × B) × 10^(m+n)' },
            { id: 'm-m2-2c', title: 'Add/Subtract: Equalize powers of 10 first' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Rounding & Standard Form Operations',
        title: 'Mastering Standard Form in Exam Questions',
        keyQuestionTypes: ['Rounding decimals to specific significant figures', 'Adding/subtracting standard form numbers', 'Application word problems in physics/astronomy'],
        essentialKeywords: [
          '1 ≤ A < 10 condition',
          'Always adjust A if result is < 1 or ≥ 10 (e.g. 54 × 10^3 = 5.4 × 10^4)',
          'Check unit conversions (e.g. km to m, hours to seconds)'
        ],
        stepByStepStrategy: [
          'Always check your final A value: if you calculate $12.5 \\times 10^4$, you MUST convert to $1.25 \\times 10^5$ to receive full marks.',
          'When adding or subtracting numbers with different powers of 10, always convert to the HIGHER power of 10 before factoring.'
        ],
        commonErrorsToAvoid: [
          'Leaving final answer as $0.85 \\times 10^4$ or $45 \\times 10^6$ (A must be strictly between 1 and 10).'
        ]
      }
    ]
  },
  {
    id: 'math-ch3',
    subject: 'math',
    chapterNumber: 3,
    title: 'Consumer Mathematics: Savings and Investments, Credit and Debt',
    theme: 'Consumer Mathematics',
    summary: 'Explore savings types, investments, simple interest (I = Prt), compound interest MV = P(1 + r/n)^(nt), Return on Investment (ROI), credit cards, interest calculation, and loan instalments.',
    notes: [
      {
        title: '3.1 Savings, Investments and Interest Calculations',
        content: `- **Categories of Savings and Investments:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Savings Accounts:</span> High liquidity cash storage, accessible anytime via debit cards and ATMs, earns modest interest.
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Fixed Deposit Accounts:</span> Savings locked for a fixed tenure (e.g. 1 month to 5 years) offering higher fixed interest rates. Early withdrawal incurs loss of interest.
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Current Accounts:</span> Primarily for businesses and individuals making payments via cheques or online transfers, zero or minimal interest.
  4. <span class="text-rose-600 dark:text-rose-400 font-bold">Shares (Stocks):</span> Ownership units in a corporation with potential for dividends and capital appreciation, accompanied by higher market volatility.
  5. <span class="text-rose-600 dark:text-rose-400 font-bold">Unit Trusts:</span> Pooled investor funds managed professionally across diversified portfolios.
  6. <span class="text-rose-600 dark:text-rose-400 font-bold">Real Estate (Property):</span> Long-term physical assets generating passive rental income and capital gains.`,
        tables: [
          {
            caption: 'Differences between Savings, Fixed Deposits, and Current Accounts',
            headers: ['Account Type', 'Interest Rate Level', 'Liquidity / Access', 'Cheque Facility', 'Risk Level'],
            rows: [
              ['Savings Account', 'Low (0.5% - 1.5%)', 'Very high (instant ATM withdrawal)', 'No cheques', 'Virtually zero risk'],
              ['Fixed Deposit Account', 'Moderate (2.5% - 4.2%)', 'Low (locked for fixed tenure)', 'No cheques', 'Virtually zero risk'],
              ['Current Account', 'None to negligible', 'Very high (business banking)', 'Yes (cheque book provided)', 'Virtually zero risk']
            ]
          },
          {
            caption: 'Differences between Simple Interest and Compound Interest',
            headers: ['Feature', 'Simple Interest', 'Compound Interest'],
            rows: [
              ['Interest Base', 'Calculated ONLY on the initial principal sum', 'Calculated on principal PLUS accumulated past interest'],
              ['Growth Pattern', 'Constant, linear growth every year', 'Exponential growth compounding over time'],
              ['Mathematical Formula', 'Interest = Principal × Rate × Time in Years', 'Matured Value = Principal × (1 + Rate / Compounding Periods)^(Periods × Years)'],
              ['Typical Usage', 'Personal loans, car hire purchase', 'Fixed deposits, unit trusts, credit card balances']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Simple Interest Formula',
            formulaInWords: 'Interest in RM = Principal Deposit × Annual Interest Rate (as Decimal) × Time in Years',
            formula: 'I = P × r × t',
            howToUse: [
              '1. Identify the starting principal sum ($P$).',
              '2. Convert the interest rate percentage ($r$) into a decimal by dividing by 100.',
              '3. Convert the duration ($t$) into years (e.g. 6 months = 0.5 years).',
              '4. Multiply all three values together.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Interest ($I$)', meaning: 'The extra money earned or paid in Ringgit Malaysia.' },
              { symbolOrTerm: 'Principal ($P$)', meaning: 'The original money deposited or borrowed.' },
              { symbolOrTerm: 'Annual Rate ($r$)', meaning: 'The yearly interest percentage divided by 100.' },
              { symbolOrTerm: 'Time ($t$)', meaning: 'Duration strictly measured in years.' }
            ],
            wordExample: 'For a deposit of RM 5,000 at 3% annual interest for 2 years: Interest = RM 5,000 × 0.03 × 2 = RM 300.'
          },
          {
            name: 'Compound Interest (Matured Value) Formula',
            formulaInWords: 'Matured Future Value = Principal × ( 1 + Annual Rate ÷ Compounding Frequency ) to the Power of ( Compounding Frequency × Years )',
            formula: 'MV = P (1 + r/n)^(nt)',
            howToUse: [
              '1. Identify the compounding frequency $n$: Annually ($n=1$), Semi-annually ($n=2$), Quarterly ($n=4$), Monthly ($n=12$).',
              '2. Divide the decimal annual rate by $n$. Add 1 to this value.',
              '3. Multiply $n$ by duration in years $t$ to obtain total compounding periods.',
              '4. Raise the bracketed value to the power of total compounding periods, then multiply by initial principal $P$.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Matured Value ($MV$)', meaning: 'Total accumulated money at the end (Principal + Total Compound Interest).' },
              { symbolOrTerm: 'Principal ($P$)', meaning: 'Initial deposit amount in RM.' },
              { symbolOrTerm: 'Compounding frequency ($n$)', meaning: 'How many times interest is calculated and added per year.' },
              { symbolOrTerm: 'Duration ($t$)', meaning: 'Total investment time in years.' }
            ],
            wordExample: 'For RM 10,000 deposited at 4% compounded quarterly ($n=4$) for 3 years: MV = 10,000 × (1 + 0.04/4)^(4 × 3) = 10,000 × (1.01)^12 = RM 11,268.25.'
          },
          {
            name: 'Return on Investment (ROI) Formula',
            formulaInWords: 'Return on Investment % = ( Total Financial Gains ÷ Total Capital Invested ) × 100%',
            formula: 'ROI = (Total Returns / Initial Capital) × 100%',
            howToUse: [
              '1. Calculate total gains: (Capital gains from selling + Dividends received + Rental income) minus any expenses.',
              '2. Divide total gains by the initial purchase cost.',
              '3. Multiply by 100 to state the result as a percentage.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Total Returns', meaning: 'Net profit earned from investment (Capital appreciation + Income).' },
              { symbolOrTerm: 'Initial Capital', meaning: 'Original total cost paid to acquire the investment asset.' }
            ],
            wordExample: 'If you buy shares for RM 2,000, receive RM 100 dividend, and sell for RM 2,300: Total gain = (2,300 - 2,000) + 100 = RM 400. ROI = (400 ÷ 2,000) × 100% = 20%.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch3-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Simple vs Compound Interest Growth & Credit Card Mechanics',
            description: 'Compare linear Simple Interest (I = Prt) with exponential Compound Interest (MV = P(1 + r/n)ⁿᵗ) and credit card minimum payment cycles.',
            prompt: 'Click any financial block below to inspect compounding frequencies, ROI formulas, and debt accumulation traps.',
            diagramData: {
              caption: 'Figure: Financial growth curves of Simple vs Compound Interest and Credit Card billing mechanics.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Left: Growth Comparison (Graph) -->
                <rect x="25" y="25" width="220" height="195" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
                <text x="35" y="45" font-size="11" fill="#0f172a" font-weight="bold">Interest Growth Curves</text>
                
                <!-- Axes -->
                <line x1="45" y1="190" x2="230" y2="190" stroke="#475569" stroke-width="2" />
                <line x1="45" y1="190" x2="45" y2="60" stroke="#475569" stroke-width="2" />
                <text x="210" y="205" font-size="9" fill="#475569">Years (t)</text>
                <text x="40" y="55" font-size="9" fill="#475569">Value (RM)</text>

                <!-- Simple Interest (Straight Line) -->
                <line x1="45" y1="160" x2="220" y2="110" stroke="#f59e0b" stroke-width="2.5" />
                <text x="135" y="145" font-size="9" fill="#b45309" font-weight="bold">Simple (I = Prt)</text>

                <!-- Compound Interest (Curve) -->
                <path d="M 45,160 Q 140,150 220,70" fill="none" stroke="#10b981" stroke-width="3" />
                <text x="130" y="90" font-size="9" fill="#047857" font-weight="bold">Compound MV = P(1+r/n)ⁿᵗ</text>

                <!-- Right: Credit Card Trap -->
                <rect x="260" y="25" width="220" height="195" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5" />
                <text x="270" y="45" font-size="11" fill="#9f1239" font-weight="bold">Credit Card Repayment Rules</text>

                <!-- Tier 1 -->
                <rect x="270" y="60" width="200" height="40" rx="4" fill="#ffe4e6" stroke="#f43f5e" />
                <text x="280" y="78" font-size="10" fill="#be123c" font-weight="bold">Grace Period (20 Days)</text>
                <text x="280" y="92" font-size="8" fill="#881337">0% interest if paid in full by due date</text>

                <!-- Tier 2 -->
                <rect x="270" y="110" width="200" height="42" rx="4" fill="#fee2e2" stroke="#ef4444" />
                <text x="280" y="128" font-size="10" fill="#b91c1c" font-weight="bold">Minimum Payment Rule</text>
                <text x="280" y="142" font-size="8" fill="#7f1d1d">5% of balance OR RM50 (whichever higher)</text>

                <!-- Tier 3 -->
                <rect x="270" y="162" width="200" height="45" rx="4" fill="#fecdd3" stroke="#e11d48" />
                <text x="280" y="180" font-size="10" fill="#9f1239" font-weight="bold">Finance Charge (15% - 18% p.a.)</text>
                <text x="280" y="195" font-size="8" fill="#881337">Calculated daily on remaining balance</text>
              </svg>`,
              labels: [
                {
                  id: 'compound-formula',
                  name: 'Compound Interest Formula (MV = P(1 + r/n)ⁿᵗ)',
                  description: 'P = Principal sum, r = annual interest rate as decimal (e.g. 4.5% = 0.045), n = compounding frequency per year (annually n=1, semi-annually n=2, quarterly n=4, monthly n=12), t = duration in years.'
                },
                {
                  id: 'roi-definition',
                  name: 'Return on Investment (ROI)',
                  description: 'ROI = (Total Return ÷ Initial Investment) × 100%. Total return includes capital appreciation, dividends, and rental revenue minus costs.'
                },
                {
                  id: 'credit-card-trap',
                  name: 'Credit Card Minimum Payment Trap',
                  description: 'Paying only the minimum 5% or RM50 prolongs the debt tenure drastically and incurs substantial daily compounding finance charges (15%-18% p.a.).'
                }
              ]
            }
          },
          {
            id: 'math-ch3-vid1',
            type: 'video',
            title: 'Visual Masterclass: Savings, Compound Interest, ROI & Credit Debt',
            description: 'Learn step-by-step calculations for compound interest frequencies, ROI for shares/properties, and loan instalment payments.',
            videoData: {
              youtubeId: 'Ff5gQvL77C0',
              duration: '8:45',
              channelOrSpeaker: 'KSSM Consumer Mathematics Hub',
              videoSummary: 'Comprehensive practical guide solving SPM/PT3 consumer mathematics: calculating matured value MV, finding compounding frequency n, computing rental ROI, and credit card finance charges.',
              keyLearningPoints: [
                'How to set n: semi-annually (n=2), quarterly (n=4), monthly (n=12)',
                'Calculating total return (capital gain + dividend - acquisition cost)',
                'Calculating monthly flat-rate loan instalments: (P + Prt) / (12 × t)',
                'Credit card interest calculation on unpaid balance'
              ]
            }
          },
          {
            id: 'math-ch3-calc1',
            type: 'calculator',
            title: 'Compound Interest & Future Value Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'P', label: 'Principal Deposit (RM)', unit: 'RM', defaultValue: 10000, step: 1000 },
                { name: 'r', label: 'Annual Interest Rate (%)', unit: '%', defaultValue: 4.5, step: 0.1 },
                { name: 'n', label: 'Compounding per year (1, 2, 4, 12)', unit: 'times', defaultValue: 4, step: 1 },
                { name: 't', label: 'Duration (Years)', unit: 'years', defaultValue: 3, step: 1 }
              ],
              calculate: (inputs) => {
                const { P, r, n, t } = inputs;
                const rDec = r / 100;
                const base = 1 + rDec / (n || 1);
                const exponent = (n || 1) * t;
                const MV = P * Math.pow(base, exponent);
                const interestEarned = MV - P;
                return {
                  result: `Matured Value: RM ${MV.toFixed(2)} (Interest: RM ${interestEarned.toFixed(2)})`,
                  steps: [
                    `Formula: MV = P × (1 + r/n)^(nt)`,
                    `MV = ${P} × (1 + ${rDec}/${n})^(${n} × ${t})`,
                    `MV = ${P} × (${base.toFixed(6)})^(${exponent}) = RM ${MV.toFixed(2)}`,
                    `Total Interest Gained = RM ${interestEarned.toFixed(2)}`
                  ]
                };
              }
            }
          }
        ]
      },
      {
        title: '3.2 Credit Cards, Loans, and Instalment Payments',
        content: `- **Credit vs Debt:**
  - **Credit**: A contractual agreement where a borrower receives an amount of money and agrees to repay at a future date.
  - **Debt**: The financial obligation or amount owed by the borrower.

- **Credit Card Financial Charges:**
  - **Grace Period**: Typically 20 days free of interest if balance is paid in full.
  - **Minimum Monthly Payment**: Usually <span class="text-rose-600 dark:text-rose-400 font-bold">5% of the outstanding balance or a minimum of RM50</span>, whichever is higher.
  - **Finance Charge / Late Payment Penalty**: Usually 15% - 18% per annum calculated daily on outstanding balance; late charge minimum RM10 or 1% of balance.

- **Flat Interest Loans (Car Loans / Personal Loans):**
  $$A = P + Prt$$
  $$\\text{Monthly Instalment} = \\frac{A}{t \\times 12} = \\frac{P + (P \\times r \\times t)}{t \\times 12}$$`,
        interactiveElements: [
          {
            id: 'math-ch3-calc2',
            type: 'calculator',
            title: 'Car Loan Monthly Instalment Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'loanAmount', label: 'Loan Principal (P)', unit: 'RM', defaultValue: 60000, step: 5000 },
                { name: 'flatRate', label: 'Flat Interest Rate (%)', unit: '%', defaultValue: 3.2, step: 0.1 },
                { name: 'loanYears', label: 'Loan Period (Years)', unit: 'years', defaultValue: 7, step: 1 }
              ],
              calculate: (inputs) => {
                const { loanAmount, flatRate, loanYears } = inputs;
                const r = flatRate / 100;
                const totalInterest = loanAmount * r * loanYears;
                const totalRepayment = loanAmount + totalInterest;
                const totalMonths = loanYears * 12;
                const monthly = totalRepayment / totalMonths;
                return {
                  result: `Monthly Instalment: RM ${monthly.toFixed(2)} / month`,
                  steps: [
                    `Total Interest = P × r × t = ${loanAmount} × ${r} × ${loanYears} = RM ${totalInterest.toFixed(2)}`,
                    `Total Payable A = ${loanAmount} + ${totalInterest.toFixed(2)} = RM ${totalRepayment.toFixed(2)}`,
                    `Total Months = ${loanYears} × 12 = ${totalMonths} months`,
                    `Monthly Instalment = RM ${totalRepayment.toFixed(2)} / ${totalMonths} = RM ${monthly.toFixed(2)}`
                  ]
                };
              }
            }
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm3-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Encik Farhan deposits RM 8,000 in a fixed deposit account with an annual interest rate of 3.5% compounded quarterly for 2 years. Calculate the matured value of his deposit.',
        marks: 3,
        answer: {
          finalAnswer: 'RM 8,577.57',
          fullWorking: [
            'Identify parameters: P = 8000, r = 0.035, n = 4 (quarterly), t = 2.',
            'Apply Compound Interest formula: MV = P(1 + r/n)^(nt)',
            'MV = 8000 × (1 + 0.035/4)^(4 × 2)',
            'MV = 8000 × (1 + 0.00875)⁸ = 8000 × (1.00875)⁸',
            'MV = 8000 × 1.0721966 = RM 8,577.57'
          ]
        }
      },
      {
        id: 'm3-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'Puan Aini bought 4,000 units of Amanah Saham shares at RM 1.50 per unit. During the year, she received a dividend of 6 sen per unit. At the end of the year, she sold all her shares at RM 1.70 per unit. Calculate her Return on Investment (ROI).',
        marks: 4,
        answer: {
          finalAnswer: '17.33%',
          fullWorking: [
            'Initial investment = 4,000 units × RM 1.50 = RM 6,000.',
            'Dividend received = 4,000 units × RM 0.06 = RM 240.',
            'Capital gain = (RM 1.70 - RM 1.50) × 4,000 = RM 0.20 × 4,000 = RM 800.',
            'Total return = RM 240 + RM 800 = RM 1,040.',
            'ROI = (Total return / Initial investment) × 100% = (1,040 / 6,000) × 100% = 17.33%.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math3',
      title: 'Consumer Math: Savings & Loans',
      children: [
        {
          id: 'm-m3-1',
          title: 'Savings & Investments',
          children: [
            { id: 'm-m3-1a', title: 'Simple Interest: I = Prt' },
            { id: 'm-m3-1b', title: 'Compound Interest: MV = P(1 + r/n)^(nt)' },
            { id: 'm-m3-1c', title: 'ROI = (Total Return / Initial Cost) × 100%' }
          ]
        },
        {
          id: 'm-m3-2',
          title: 'Credit & Loans',
          children: [
            { id: 'm-m3-2a', title: 'Credit card: 5% or RM50 min payment' },
            { id: 'm-m3-2b', title: 'Flat interest loan: Monthly = (P + Prt) / (12t)' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Financial Mathematics & Formula Application',
        title: 'Mastering Consumer Mathematics Questions',
        keyQuestionTypes: ['Compounding frequencies (n value identification)', 'Calculating ROI including capital gains and dividends', 'Monthly loan instalments'],
        essentialKeywords: [
          'Compounding frequency n: Annually (1), Semi-annually (2), Quarterly (4), Monthly (12)',
          'ROI must include BOTH capital gain (sale price - purchase price) AND dividends/rental',
          'Round all currency amounts to exactly 2 decimal places (cents)'
        ],
        stepByStepStrategy: [
          'In compound interest questions, explicitly state $n$ first before substituting into the formula.',
          'Always ensure time $t$ is expressed in YEARS (e.g. 18 months = 1.5 years).'
        ],
        commonErrorsToAvoid: [
          'Using $t = 6$ when given "6 months" (must divide by 12: $t = 0.5$ years).',
          'Forgetting to multiply ROI by 100%.'
        ]
      }
    ]
  },
  {
    id: 'math-ch4',
    subject: 'math',
    chapterNumber: 4,
    title: 'Scale Drawings',
    theme: 'Measurement and Geometry',
    summary: 'Understand scale ratio 1 : n, interpret scales where n > 1 (reduction), n < 1 (enlargement), n = 1 (identical), draw scale drawings, and solve real-world geometry problems.',
    notes: [
      {
        title: '4.1 Scale and Scale Ratio (1 : n)',
        content: `A scale drawing is a proportional drawing of an object where all dimensions are enlarged or reduced by a fixed scale ratio.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Scale Ratio Convention:</span> Must ALWAYS be written in the form $1 : n$, where the first term is strictly the number 1 representing the drawing.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Angle Invariance:</span> All internal and external angles in a scale drawing remain strictly identical to the actual object.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Units Rule:</span> Both drawing length and actual object length must be converted into the EXACT same unit (e.g. centimetres) before forming the ratio $1 : n$.`,
        tables: [
          {
            caption: 'Differences between Scale Enlargements, Reductions, and Same Size',
            headers: ['Scale (1 : n)', 'Value of n Condition', 'Drawing Size vs Actual Object', 'Exam Calculation Example'],
            rows: [
              ['Scale Reduction (n > 1)', 'n > 1 (e.g. 1 : 50, 1 : 2000)', 'Drawing is SMALLER than actual object (maps, architecture blueprints)', 'Actual Length = Drawing Length × n'],
              ['Scale 1 to 1 (n = 1)', 'n = 1 (1 : 1)', 'Drawing is EXACTLY the same size as actual object', 'Actual Length = Drawing Length'],
              ['Scale Enlargement (n < 1)', 'n < 1 (e.g. 1 : 1/5 or 1 : 0.2)', 'Drawing is LARGER than actual object (microchips, insect anatomy)', 'Actual Length = Drawing Length × n (or Drawing ÷ (1/n))']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Scale Ratio Formula (1 : n)',
            formulaInWords: 'Scale Ratio = Length of Drawing ÷ Length of Actual Object = 1 : n',
            formula: 'Scale = Drawing Length / Object Length = 1 : n',
            howToUse: [
              '1. Convert both the drawing length and actual object length to identical measurement units (e.g. mm or cm).',
              '2. Express the comparison as a fraction: Drawing Length ÷ Actual Length.',
              '3. Divide both top and bottom by the drawing length so the top number becomes 1.',
              '4. The denominator is your value of $n$ in the ratio $1 : n$.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Drawing Length', meaning: 'The length measured on paper or screen with a ruler.' },
              { symbolOrTerm: 'Object Length', meaning: 'The real physical size in the real world.' },
              { symbolOrTerm: 'Scale factor ($n$)', meaning: 'The proportional scaling multiplier.' }
            ],
            wordExample: 'If a 150-metre bridge is drawn as 5 cm on a map: Convert 150 m to cm (150 × 100 = 15,000 cm). Scale = 5 cm ÷ 15,000 cm = 1 ÷ 3,000. Scale ratio is 1 : 3000.'
          },
          {
            name: 'Scale Area Formula',
            formulaInWords: 'Actual Real Area = Area of Scale Drawing × ( Scale Factor n Squared )',
            formula: 'Actual Area = Drawing Area × n²',
            howToUse: [
              '1. Calculate the 2D area of the drawing on paper (e.g. in cm²).',
              '2. Square the scale value $n$ (multiply $n$ by $n$).',
              '3. Multiply the drawing area by $n^2$.',
              '4. Convert the final area to requested square metres (1 m² = 10,000 cm²).'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Drawing Area', meaning: '2D area measured on paper.' },
              { symbolOrTerm: 'n²', meaning: 'The squared scaling factor (since area has two dimensions: length and width).' }
            ],
            wordExample: 'If a room is 24 cm² on a 1 : 100 blueprint: Actual area = 24 cm² × 100² = 24 × 10,000 = 240,000 cm². Converting to m² gives 240,000 ÷ 10,000 = 24 m².'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch4-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Scale Ratio 1 : n (Enlargement vs Reduction) & Grid Proportions',
            description: 'Inspect proportional enlargement (n < 1), identical size (n = 1), and reduction (n > 1) with area scale factor k².',
            prompt: 'Click any scaling ratio category below to inspect dimensional calculations and area transformations.',
            diagramData: {
              caption: 'Figure: Visual scale comparison of original object, 1:2 reduction, and 1:0.5 enlargement.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Original Object (Centre) -->
                <rect x="180" y="70" width="80" height="80" rx="4" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
                <text x="195" y="115" font-size="11" fill="#3730a3" font-weight="bold">Original Object</text>
                <text x="200" y="130" font-size="9" fill="#4338ca">4 cm × 4 cm</text>
                <text x="190" y="170" font-size="10" fill="#4338ca" font-weight="bold">Scale 1 : 1 (n = 1)</text>

                <!-- Left: Reduction (n > 1, e.g. 1 : 2) -->
                <rect x="35" y="90" width="40" height="40" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
                <text x="40" y="115" font-size="9" fill="#b45309" font-weight="bold">Reduction</text>
                <text x="35" y="150" font-size="10" fill="#b45309" font-weight="bold">Scale 1 : 2 (n = 2)</text>
                <text x="25" y="165" font-size="8" fill="#92400e">Length is 1/2 size</text>
                <text x="25" y="178" font-size="8" fill="#92400e">Area is (1/2)² = 1/4 size</text>

                <!-- Right: Enlargement (n < 1, e.g. 1 : 1/2) -->
                <rect x="320" y="40" width="140" height="140" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
                <text x="360" y="110" font-size="13" fill="#15803d" font-weight="bold">Enlargement</text>
                <text x="365" y="130" font-size="10" fill="#166534">8 cm × 8 cm</text>
                <text x="340" y="200" font-size="10" fill="#15803d" font-weight="bold">Scale 1 : 1/2 (n = 0.5)</text>
                <text x="330" y="215" font-size="8" fill="#14532d">Drawing is 2× larger than object</text>
              </svg>`,
              labels: [
                {
                  id: 'scale-reduction',
                  name: 'Scale Reduction (n > 1, e.g. 1 : 50)',
                  description: 'Used when drawing large objects (maps, houses, bridges). The drawing is smaller than the actual object. Actual Length = Drawing Length × n.'
                },
                {
                  id: 'scale-enlargement',
                  name: 'Scale Enlargement (n < 1, e.g. 1 : 1/5)',
                  description: 'Used for tiny microscopic or precision parts (insects, microchips). The drawing is larger than the actual object. Scale is written as 1 : (1/k).'
                },
                {
                  id: 'area-factor',
                  name: 'Area Scale Factor (k²)',
                  description: 'Area of scale drawing ÷ Actual Area = (1/n)². For a 1 : 100 scale, the actual area is 100² = 10,000 times larger.'
                }
              ]
            }
          },
          {
            id: 'math-ch4-vid1',
            type: 'video',
            title: 'Visual Masterclass: Scale Drawings & Grid Proportions',
            description: 'Master determining scale ratio 1 : n, drawing grid scale diagrams, and calculating real-world lengths and areas.',
            videoData: {
              youtubeId: 'v8Jz7wQ6R0E',
              duration: '8:25',
              channelOrSpeaker: 'KSSM Mathematics Geometry Series',
              videoSummary: 'Step-by-step video tutorial on unit conversions, calculating n for enlargements vs reductions, and applying the squared area scale factor k².',
              keyLearningPoints: [
                'How to convert both lengths to the exact same unit (cm to m, mm to cm)',
                'Writing scales where drawing is larger than object (1 : 1/n)',
                'Why all angles in a scale drawing remain strictly unchanged',
                'Calculating actual land area in m² from map area in cm²'
              ]
            }
          },
          {
            id: 'math-ch4-quiz1',
            type: 'quiz',
            title: 'Scale Interpretation Check',
            prompt: 'A microchip of actual length 2 mm is drawn with length 10 cm. What is the scale of the drawing in the form 1 : n?',
            options: [
              { text: '1 : 50', isCorrect: false, explanation: 'Check units: 10 cm = 100 mm. Drawing is larger than object.' },
              { text: '1 : 1/50 (or 1 : 0.02)', isCorrect: true, explanation: 'Correct! Scale = Drawing : Object = 100 mm : 2 mm = 50 : 1 = 1 : (1/50).' },
              { text: '1 : 5', isCorrect: false, explanation: 'Remember to convert cm to mm: 10 cm = 100 mm.' }
            ]
          }
        ]
      },
      {
        title: '4.2 Problem Solving with Scale Drawings',
        content: `- **Conversion of Units:**
  Always convert drawing dimensions and actual object dimensions to the <span class="text-rose-600 dark:text-rose-400 font-bold">same unit</span> before establishing the scale ratio $1 : n$.
  - $1\\text{ m} = 100\\text{ cm} = 1,000\\text{ mm}$
  - $1\\text{ km} = 1,000\\text{ m} = 100,000\\text{ cm}$

- **Area Relationship in Scale Drawings:**
  $$\\frac{\\text{Area of Drawing}}{\\text{Area of Object}} = \\left(\\frac{1}{n}\\right)^2 = \\frac{1}{n^2}$$
  $$\\text{Actual Area} = \\text{Area of Drawing} \\times n^2$$`,
        interactiveElements: [
          {
            id: 'math-ch4-calc1',
            type: 'calculator',
            title: 'Scale Dimension & Area Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'drawingLength', label: 'Drawing Length', unit: 'cm', defaultValue: 8, step: 1 },
                { name: 'scaleN', label: 'Scale n (in 1 : n)', unit: '', defaultValue: 50, step: 5 }
              ],
              calculate: (inputs) => {
                const { drawingLength, scaleN } = inputs;
                const actualCm = drawingLength * scaleN;
                const actualM = actualCm / 100;
                return {
                  result: `Actual Length: ${actualM.toFixed(2)} m (${actualCm} cm)`,
                  steps: [
                    `Formula: Actual Length = Drawing Length × n`,
                    `Actual Length = ${drawingLength} cm × ${scaleN} = ${actualCm} cm`,
                    `Converted to metres = ${actualCm} / 100 = ${actualM.toFixed(2)} m`
                  ]
                };
              }
            }
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm4-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'The actual length of a bridge is 150 m. If the bridge is drawn on a map with a length of 5 cm, determine the scale of the drawing in the form 1 : n.',
        marks: 2,
        answer: {
          finalAnswer: '1 : 3000',
          fullWorking: [
            'Convert 150 m to cm: 150 × 100 = 15,000 cm.',
            'Scale = Drawing / Object = 5 cm / 15,000 cm = 1 / 3000.',
            'Scale is 1 : 3000.'
          ]
        }
      },
      {
        id: 'm4-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A rectangular swimming pool has dimensions 6 cm by 4 cm on a blueprint drawn to a scale of 1 : 250. Calculate the actual area of the swimming pool in square metres (m²).',
        marks: 3,
        answer: {
          finalAnswer: '150 m²',
          fullWorking: [
            'Actual length = 6 cm × 250 = 1500 cm = 15 m.',
            'Actual width = 4 cm × 250 = 1000 cm = 10 m.',
            'Actual Area = 15 m × 10 m = 150 m².',
            '(Alternative Area formula: Area of drawing = 6 × 4 = 24 cm². Actual area = 24 × 250² = 1,500,000 cm² = 150 m²).'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math4',
      title: 'Scale Drawings (Form 3)',
      children: [
        {
          id: 'm-m4-1',
          title: 'Scale Concept (1 : n)',
          children: [
            { id: 'm-m4-1a', title: 'n > 1: Reduction (smaller drawing)' },
            { id: 'm-m4-1b', title: 'n < 1: Enlargement (larger drawing)' },
            { id: 'm-m4-1c', title: 'n = 1: Same size' }
          ]
        },
        {
          id: 'm-m4-2',
          title: 'Calculations',
          children: [
            { id: 'm-m4-2a', title: 'Length: Actual = Drawing × n' },
            { id: 'm-m4-2b', title: 'Area: Actual Area = Drawing Area × n^2' },
            { id: 'm-m4-2c', title: 'Convert all to same unit (cm) first' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Proportional Geometry & Unit Conversions',
        title: 'Solving Scale Drawing Questions Accurately',
        keyQuestionTypes: ['Expressing scales in 1 : n form', 'Calculating actual floor plan area from blueprints', 'Grid drawing reproductions'],
        essentialKeywords: [
          'Always write scale in the format 1 : n (1 must be the first term)',
          'Convert metres/kilometres to centimetres before simplifying the ratio',
          'For area calculations, multiply by n² (not just n)'
        ],
        stepByStepStrategy: [
          'If drawing is bigger than object: write $1 : \\frac{1}{k}$ or $1 : 0.k$. Do not write $k : 1$.',
          'Double check that all sides are measured in identical units before reducing ratio.'
        ],
        commonErrorsToAvoid: [
          'Multiplying area by $n$ instead of $n^2$ when finding actual area.'
        ]
      }
    ]
  },
  {
    id: 'math-ch5',
    subject: 'math',
    chapterNumber: 5,
    title: 'Trigonometric Ratios',
    theme: 'Measurement and Geometry',
    summary: 'Master Sine, Cosine, and Tangent for acute angles in right-angled triangles, exact values for special angles (30°, 45°, 60°), and practical problem solving with angles of elevation and depression.',
    notes: [
      {
        title: '5.1 Sine, Cosine, and Tangent in Right-Angled Triangles',
        content: `In a right-angled triangle with acute reference angle $\\theta$:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Hypotenuse ($H$):</span> The longest side of the triangle, situated directly opposite the $90^\\circ$ right angle.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Opposite Side ($O$):</span> The side located directly across from the designated reference angle $\\theta$.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Adjacent Side ($A$):</span> The side touching reference angle $\\theta$ between the angle and the $90^\\circ$ right angle.`,
        tables: [
          {
            caption: 'Differences between Sine, Cosine, and Tangent (SOH - CAH - TOA)',
            headers: ['Trigonometric Ratio', 'Sides Comparison Ratio', 'Formula in Words', 'Memory Mnemonic Phrase'],
            rows: [
              ['Sine (sin θ)', 'Opposite Side ÷ Hypotenuse (O / H)', 'Sine of angle = Length of Opposite side ÷ Length of Hypotenuse', 'SOH (Some Old Horses)'],
              ['Cosine (cos θ)', 'Adjacent Side ÷ Hypotenuse (A / H)', 'Cosine of angle = Length of Adjacent side ÷ Length of Hypotenuse', 'CAH (Chew Apples Happily)'],
              ['Tangent (tan θ)', 'Opposite Side ÷ Adjacent Side (O / A)', 'Tangent of angle = Length of Opposite side ÷ Length of Adjacent side', 'TOA (Throughout Old Age)']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Sine Ratio (SOH)',
            formulaInWords: 'Sine of Angle θ = Length of Opposite Side ÷ Length of Hypotenuse',
            formula: 'sin θ = Opposite / Hypotenuse = O / H',
            howToUse: [
              '1. Locate the acute reference angle θ.',
              '2. Measure or find the side directly opposite θ (Opposite).',
              '3. Measure the longest side opposite the 90° corner (Hypotenuse).',
              '4. Divide Opposite by Hypotenuse.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Opposite ($O$)', meaning: 'Side across from reference angle θ.' },
              { symbolOrTerm: 'Hypotenuse ($H$)', meaning: 'Longest side opposite the right angle.' }
            ],
            wordExample: 'If opposite side is 3 cm and hypotenuse is 5 cm: Sine of angle = 3 ÷ 5 = 0.6. The angle θ is inverse sine of 0.6 = 36.87°.'
          },
          {
            name: 'Cosine Ratio (CAH)',
            formulaInWords: 'Cosine of Angle θ = Length of Adjacent Side ÷ Length of Hypotenuse',
            formula: 'cos θ = Adjacent / Hypotenuse = A / H',
            howToUse: [
              '1. Identify the side adjacent (touching) angle θ that is not the hypotenuse.',
              '2. Identify the hypotenuse.',
              '3. Divide Adjacent by Hypotenuse.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Adjacent ($A$)', meaning: 'Side adjacent to angle θ next to right angle.' },
              { symbolOrTerm: 'Hypotenuse ($H$)', meaning: 'Longest side opposite the right angle.' }
            ],
            wordExample: 'If adjacent side is 4 cm and hypotenuse is 5 cm: Cosine of angle = 4 ÷ 5 = 0.8. The angle θ is inverse cosine of 0.8 = 36.87°.'
          },
          {
            name: 'Tangent Ratio (TOA)',
            formulaInWords: 'Tangent of Angle θ = Length of Opposite Side ÷ Length of Adjacent Side',
            formula: 'tan θ = Opposite / Adjacent = O / A',
            howToUse: [
              '1. Identify the opposite side and adjacent side.',
              '2. Divide opposite length by adjacent length.',
              '3. Use inverse tangent button on calculator (tan⁻¹) to find the angle in degrees.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Opposite ($O$)', meaning: 'Side facing the angle.' },
              { symbolOrTerm: 'Adjacent ($A$)', meaning: 'Base side touching the angle.' }
            ],
            wordExample: 'If a tree is 10 m tall (opposite) and casts a shadow of 10 m (adjacent): Tangent = 10 ÷ 10 = 1. Angle of elevation = inverse tan of 1 = 45°.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch5-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: SOH CAH TOA Right-Angled Triangle & Special Angles',
            description: 'Inspect Opp, Adj, Hyp relationships in right-angled triangles alongside special angles (30°, 45°, 60°).',
            prompt: 'Click any trigonometric side or angle to inspect the exact ratio formulas, Pythagoras relation, and surd forms.',
            diagramData: {
              caption: 'Figure: Geometric anatomy of right-angled triangle trigonometric ratios and 30°-60°-90° special triangle.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Triangle on the Left -->
                <polygon points="50,200 220,200 220,50" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
                
                <!-- Right Angle Box -->
                <rect x="200" y="180" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="1.5" />

                <!-- Angle Arc (θ) -->
                <path d="M 90,200 A 40,40 0 0,0 80,175" fill="none" stroke="#dc2626" stroke-width="2" />
                <text x="95" y="190" font-size="14" fill="#dc2626" font-weight="bold">θ</text>

                <!-- Labels on Sides -->
                <text x="110" y="218" font-size="11" fill="#1e40af" font-weight="bold">Adjacent (A)</text>
                <text x="228" y="130" font-size="11" fill="#1e40af" font-weight="bold">Opposite (O)</text>
                <text x="100" y="110" font-size="11" fill="#1e40af" font-weight="bold" transform="rotate(-40, 120, 110)">Hypotenuse (H)</text>

                <!-- Right: SOH CAH TOA Cards -->
                <rect x="290" y="30" width="185" height="50" rx="6" fill="#fef2f2" stroke="#ef4444" />
                <text x="300" y="52" font-size="12" fill="#991b1b" font-weight="bold">SOH: sin θ = O / H</text>
                <text x="300" y="68" font-size="9" fill="#7f1d1d">Opposite ÷ Hypotenuse</text>

                <rect x="290" y="90" width="185" height="50" rx="6" fill="#f0fdf4" stroke="#22c55e" />
                <text x="300" y="112" font-size="12" fill="#166534" font-weight="bold">CAH: cos θ = A / H</text>
                <text x="300" y="128" font-size="9" fill="#14532d">Adjacent ÷ Hypotenuse</text>

                <rect x="290" y="150" width="185" height="50" rx="6" fill="#faf5ff" stroke="#a855f7" />
                <text x="300" y="172" font-size="12" fill="#6b21a8" font-weight="bold">TOA: tan θ = O / A</text>
                <text x="300" y="188" font-size="9" fill="#581c87">Opposite ÷ Adjacent</text>
              </svg>`,
              labels: [
                {
                  id: 'soh-ratio',
                  name: 'Sine Ratio (SOH = sin θ = O / H)',
                  description: 'Sine is the ratio of the side opposite to the angle θ over the longest side (Hypotenuse). Example: sin 30° = 1/2.'
                },
                {
                  id: 'cah-ratio',
                  name: 'Cosine Ratio (CAH = cos θ = A / H)',
                  description: 'Cosine is the ratio of the adjacent side touching angle θ over the Hypotenuse. Example: cos 60° = 1/2, cos 30° = √3/2.'
                },
                {
                  id: 'toa-ratio',
                  name: 'Tangent Ratio (TOA = tan θ = O / A)',
                  description: 'Tangent is the ratio of the opposite side over the adjacent side. Notice tan θ = sin θ / cos θ. Example: tan 45° = 1.'
                }
              ]
            }
          },
          {
            id: 'math-ch5-vid1',
            type: 'video',
            title: 'Visual Masterclass: Trigonometric Ratios (SOH CAH TOA) & Special Angles',
            description: 'Master labelling Opposite, Adjacent and Hypotenuse sides, calculating angles of elevation and depression, and exact surd trigonometric values.',
            videoData: {
              youtubeId: '5tp74g4N8w8',
              duration: '9:15',
              channelOrSpeaker: 'KSSM Mathematics Trigonometry Series',
              videoSummary: 'Step-by-step video tutorial demonstrating how to identify sides relative to angle θ, solving right-angled triangles with Pythagoras theorem, and calculating ladder/tree height word problems.',
              keyLearningPoints: [
                'How to label Hypotenuse (opposite 90°), Opposite (facing θ), Adjacent (next to θ)',
                'Remembering exact surds: sin 30° = 1/2, cos 30° = √3/2, tan 45° = 1',
                'Angle of elevation (looking upwards from horizontal line) vs depression (looking down)',
                'Using inverse trig buttons (sin⁻¹, cos⁻¹, tan⁻¹) to solve for unknown angles'
              ]
            }
          },
          {
            id: 'math-ch5-calc1',
            type: 'calculator',
            title: 'Trig Ratio & Angle Solver',
            calculatorConfig: {
              inputs: [
                { name: 'opp', label: 'Opposite Side (O)', unit: 'cm', defaultValue: 3, step: 0.5 },
                { name: 'adj', label: 'Adjacent Side (A)', unit: 'cm', defaultValue: 4, step: 0.5 }
              ],
              calculate: (inputs) => {
                const { opp, adj } = inputs;
                const hyp = Math.sqrt(opp * opp + adj * adj);
                const sinVal = opp / hyp;
                const cosVal = adj / hyp;
                const tanVal = opp / adj;
                const angleDeg = (Math.atan(opp / adj) * 180) / Math.PI;
                return {
                  result: `θ = ${angleDeg.toFixed(2)}° | Hypotenuse = ${hyp.toFixed(2)} cm`,
                  steps: [
                    `Pythagoras Theorem: H = √(O² + A²) = √(${opp}² + ${adj}²) = ${hyp.toFixed(2)} cm`,
                    `sin θ = ${opp} / ${hyp.toFixed(2)} = ${sinVal.toFixed(4)}`,
                    `cos θ = ${adj} / ${hyp.toFixed(2)} = ${cosVal.toFixed(4)}`,
                    `tan θ = ${opp} / ${adj} = ${tanVal.toFixed(4)}`,
                    `Angle θ = tan⁻¹(${tanVal.toFixed(4)}) = ${angleDeg.toFixed(2)}°`
                  ]
                };
              }
            }
          }
        ]
      },
      {
        title: '5.2 Exact Trigonometric Values of Special Angles (30°, 45°, 60°)',
        content: `Students are expected to know the exact surd values for $30^\\circ, 45^\\circ,$ and $60^\\circ$ without using a calculator.`,
        tables: [
          {
            headers: ['Ratio', '30°', '45°', '60°'],
            rows: [
              ['sin θ', '1/2 (0.5)', '1/√2 = √2/2', '√3/2'],
              ['cos θ', '√3/2', '1/√2 = √2/2', '1/2 (0.5)'],
              ['tan θ', '1/√3 = √3/3', '1', '√3']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch5-quiz1',
            type: 'quiz',
            title: 'Special Angle Quiz',
            prompt: 'What is the exact value of 2 sin 30° + tan 45°?',
            options: [
              { text: '2', isCorrect: true, explanation: 'Correct! 2 sin 30° + tan 45° = 2(1/2) + 1 = 1 + 1 = 2.' },
              { text: '1.5', isCorrect: false, explanation: 'sin 30° is 1/2, tan 45° is 1.' },
              { text: '√3', isCorrect: false, explanation: 'Neither 30° nor 45° yields √3 here.' }
            ]
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm5-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'In a right-angled triangle ABC, angle B = 90°, AB = 5 cm, and BC = 12 cm. Find the value of: (a) sin ∠BAC (b) cos ∠BAC (c) tan ∠BAC.',
        marks: 3,
        answer: {
          finalAnswer: '(a) sin ∠BAC = 12/13\n(b) cos ∠BAC = 5/13\n(c) tan ∠BAC = 12/5',
          fullWorking: [
            'Hypotenuse AC = √(AB² + BC²) = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.',
            'For angle ∠BAC: Opposite side = BC = 12 cm, Adjacent side = AB = 5 cm, Hypotenuse = 13 cm.',
            '(a) sin ∠BAC = Opp / Hyp = 12/13',
            '(b) cos ∠BAC = Adj / Hyp = 5/13',
            '(c) tan ∠BAC = Opp / Adj = 12/5'
          ]
        }
      },
      {
        id: 'm5-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A 6 m ladder leans against a vertical wall. The ladder makes an angle of 60° with the horizontal ground. Calculate the vertical height the ladder reaches up the wall, in metres, correct to 2 decimal places.',
        marks: 3,
        answer: {
          finalAnswer: '5.20 m',
          fullWorking: [
            'Identify triangle components: Hypotenuse = 6 m, angle with ground θ = 60°, Height up wall = Opposite side h.',
            'sin 60° = Opposite / Hypotenuse = h / 6.',
            'h = 6 × sin 60° = 6 × (√3 / 2) = 3√3 ≈ 5.196 m.',
            'Rounding to 2 d.p.: 5.20 m.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math5',
      title: 'Trigonometric Ratios (Form 3)',
      children: [
        {
          id: 'm-m5-1',
          title: 'SOH CAH TOA',
          children: [
            { id: 'm-m5-1a', title: 'sin θ = Opp / Hyp' },
            { id: 'm-m5-1b', title: 'cos θ = Adj / Hyp' },
            { id: 'm-m5-1c', title: 'tan θ = Opp / Adj' }
          ]
        },
        {
          id: 'm-m5-2',
          title: 'Special Angles',
          children: [
            { id: 'm-m5-2a', title: '30°: sin=1/2, cos=√3/2, tan=1/√3' },
            { id: 'm-m5-2b', title: '45°: sin=1/√2, cos=1/√2, tan=1' },
            { id: 'm-m5-2c', title: '60°: sin=√3/2, cos=1/2, tan=√3' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Trigonometric Problem Solving',
        title: 'Mastering Trigonometry in Right-Angled Triangles',
        keyQuestionTypes: ['Identifying Opposite, Adjacent and Hypotenuse relative to designated angle', 'Using exact surd values without calculators', 'Solving word problems involving heights and distances'],
        essentialKeywords: [
          'SOH - CAH - TOA',
          'Pythagoras theorem: a² + b² = c²',
          'Check calculator mode is set to DEGREES (DEG), not Radians (RAD)'
        ],
        stepByStepStrategy: [
          'Step 1: Always label the three sides (O, A, H) relative to the acute angle before selecting which ratio to apply.',
          'Step 2: If finding an angle, apply the inverse trig function ($\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$).'
        ],
        commonErrorsToAvoid: [
          'Confusing the Adjacent and Opposite sides when the triangle is rotated.',
          'Having your calculator in Radian mode during the exam.'
        ]
      }
    ]
  }
];
