import { Chapter } from '../../types';

export const mathChapters6to9: Chapter[] = [
  {
    id: 'math-ch6',
    subject: 'math',
    chapterNumber: 6,
    title: 'Angles and Tangents of Circles',
    theme: 'Measurement and Geometry',
    summary: 'Master circle theorems: angle at centre is twice angle at circumference, angles in the same segment, angle in a semicircle (90°), cyclic quadrilaterals, tangents to a circle, and alternate segment theorem.',
    notes: [
      {
        title: '6.1 Angle Properties Subtended by Arcs in a Circle',
        content: `1. <span class="text-rose-600 dark:text-rose-400 font-bold">Angle at Centre Theorem:</span> The angle subtended by an arc at the centre of a circle is EXACTLY TWICE the angle subtended by the same arc at the circumference: $\\angle AOB = 2 \\times \\angle APB$.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Angles in the Same Segment:</span> All angles subtended at the circumference by the same arc (or arcs of identical length) are strictly EQUAL: $\\angle APB = \\angle AQB$.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Angle in a Semicircle:</span> Any angle subtended at the circumference by a diameter line is ALWAYS a right angle ($90^\\circ$).`,
        tables: [
          {
            caption: 'Differences between Arc and Chord Angle Theorems',
            headers: ['Circle Angle Theorem', 'Geometric Condition', 'Mathematical Relationship in Words', 'Quick Sketch Rule'],
            rows: [
              ['Angle at Centre vs Circumference', 'Same arc subtending angles at centre and circumference', 'Angle at Centre = 2 × Angle at Circumference', 'Arrowhead shape (centre angle is double pointy tip)'],
              ['Angles in Same Segment', 'Same arc subtending multiple angles on circumference', 'Circumference angles are all equal', 'Butterfly or bow-tie shape'],
              ['Angle in a Semicircle', 'Angle subtended across diameter', 'Angle opposite diameter is 90°', 'Triangle inscribed in half circle']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Angle at Centre Theorem',
            formulaInWords: 'Angle at Circle Centre = 2 × Angle at Circumference (from same arc)',
            formula: '∠AOB = 2 × ∠APB',
            howToUse: [
              '1. Trace the two boundary points of the arc along the circle circumference.',
              '2. Check that one angle goes to the centre point O and the other goes to the circumference.',
              '3. Multiply the circumference angle by 2 to get the centre angle (or divide centre angle by 2 to get circumference angle).'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Centre Angle (∠AOB)', meaning: 'Angle with vertex at the exact centre of circle.' },
              { symbolOrTerm: 'Circumference Angle (∠APB)', meaning: 'Angle with vertex touching the circumference.' }
            ],
            wordExample: 'If an arc makes a 35° angle at the circumference: Angle at centre = 2 × 35° = 70°.'
          },
          {
            name: 'Angle in Semicircle Theorem',
            formulaInWords: 'Angle Inscribed in Semicircle = 90° (Right Angle)',
            formula: '∠APB = 90° (when AB is circle diameter)',
            howToUse: [
              '1. Identify whether a straight line through the centre is a diameter.',
              '2. Look for any triangle built on this diameter touching the circumference.',
              '3. Mark the vertex angle touching the circumference as 90°.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Diameter (AB)', meaning: 'Straight line passing through centre connecting opposite sides.' }
            ],
            wordExample: 'In a triangle inscribed in a circle with the diameter as hypotenuse, the angle facing the diameter is always 90°.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch6-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Circle Theorems & Tangent Properties',
            description: 'Inspect angle at centre (2θ), angle at circumference (θ), angle in semicircle (90°), and cyclic quadrilateral opposite angles (A + C = 180°).',
            prompt: 'Click any circle geometry feature below to inspect theorem proofs, angle relationships, and alternate segment rules.',
            diagramData: {
              caption: 'Figure: Geometric anatomy of circle angle theorems and cyclic quadrilateral angles.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Left Circle: Angle at Centre = 2 × Circumference -->
                <circle cx="120" cy="120" r="85" fill="#f8fafc" stroke="#334155" stroke-width="2" />
                
                <!-- Centre O -->
                <circle cx="120" cy="120" r="4" fill="#0f172a" />
                <text x="125" y="115" font-size="11" fill="#0f172a" font-weight="bold">O</text>

                <!-- Arc AB -->
                <line x1="60" y1="180" x2="120" y2="120" stroke="#3b82f6" stroke-width="2" />
                <line x1="180" y1="180" x2="120" y2="120" stroke="#3b82f6" stroke-width="2" />
                <text x="110" y="145" font-size="13" fill="#1d4ed8" font-weight="bold">2θ</text>

                <!-- Circumference angle P -->
                <line x1="60" y1="180" x2="120" y2="35" stroke="#ef4444" stroke-width="2" />
                <line x1="180" y1="180" x2="120" y2="35" stroke="#ef4444" stroke-width="2" />
                <text x="115" y="55" font-size="13" fill="#b91c1c" font-weight="bold">θ</text>

                <text x="50" y="200" font-size="11" fill="#0f172a" font-weight="bold">A</text>
                <text x="185" y="200" font-size="11" fill="#0f172a" font-weight="bold">B</text>
                <text x="115" y="28" font-size="11" fill="#0f172a" font-weight="bold">P</text>

                <!-- Right Circle: Cyclic Quad & Tangents -->
                <circle cx="360" cy="120" r="85" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
                
                <!-- Quadrilateral ABCD -->
                <polygon points="310,70 410,60 430,160 300,170" fill="#dcfce7" stroke="#15803d" stroke-width="2" />
                <text x="295" y="65" font-size="11" fill="#14532d" font-weight="bold">A</text>
                <text x="420" y="55" font-size="11" fill="#14532d" font-weight="bold">B</text>
                <text x="440" y="170" font-size="11" fill="#14532d" font-weight="bold">C</text>
                <text x="285" y="180" font-size="11" fill="#14532d" font-weight="bold">D</text>

                <text x="320" y="90" font-size="11" fill="#15803d" font-weight="bold">x</text>
                <text x="400" y="155" font-size="11" fill="#15803d" font-weight="bold">180°-x</text>

                <text x="280" y="225" font-size="11" fill="#166534" font-weight="bold">Opposite Angles: A + C = 180°</text>
              </svg>`,
              labels: [
                {
                  id: 'angle-centre',
                  name: 'Angle at Centre Theorem (∠AOB = 2 × ∠APB)',
                  description: 'The angle subtended by an arc at the centre O is exactly double the angle subtended by the same arc at any point P on the circumference.'
                },
                {
                  id: 'semicircle-angle',
                  name: 'Angle in a Semicircle (90°)',
                  description: 'When the chord subtending the angle is a diameter passing through the centre, the angle at the circumference is always 90°.'
                },
                {
                  id: 'cyclic-quad',
                  name: 'Cyclic Quadrilateral Theorem',
                  description: 'For any 4-sided polygon inscribed in a circle, opposite interior angles sum to 180° (∠A + ∠C = 180°, ∠B + ∠D = 180°).'
                },
                {
                  id: 'tangent-properties',
                  name: 'Tangent to Circle Properties',
                  description: 'A radius meets a tangent at 90°. Two tangents drawn from the same external point T are equal in length (TA = TB).'
                }
              ]
            }
          },
          {
            id: 'math-ch6-vid1',
            type: 'video',
            title: 'Visual Masterclass: Angles, Chords, Cyclic Quads & Tangents of Circles',
            description: 'Comprehensive guide covering angle at centre (2x), angles in same segment, cyclic quadrilaterals, and alternate segment theorem.',
            videoData: {
              youtubeId: 'q83F2fWvH8Y',
              duration: '9:40',
              channelOrSpeaker: 'KSSM Circle Geometry Series',
              videoSummary: 'Step-by-step video solving PT3 and SPM circle geometry questions: identifying isosceles triangles with radii, alternate segment theorem, and two tangents from an external point.',
              keyLearningPoints: [
                'How to spot the "Arrowhead" (centre = 2 × circumference) and "Bow-tie" (same segment)',
                'Angle in a semicircle is always 90° opposite the diameter',
                'Cyclic quad: Opposite angles sum to 180°, exterior angle equals opposite interior angle',
                'Alternate segment theorem: angle between tangent and chord equals opposite inscribed angle'
              ]
            }
          },
          {
            id: 'math-ch6-quiz1',
            type: 'quiz',
            title: 'Circle Angle Theorem Check',
            prompt: 'In a circle with centre O, if ∠APB at the circumference is 38°, what is the angle ∠AOB at the centre subtended by the same arc?',
            options: [
              { text: '19°', isCorrect: false, explanation: 'Angle at centre is TWICE, not half.' },
              { text: '76°', isCorrect: true, explanation: 'Correct! Angle at centre = 2 × 38° = 76°.' },
              { text: '38°', isCorrect: false, explanation: 'Angle at centre is double the circumference angle.' }
            ]
          }
        ]
      },
      {
        title: '6.2 Cyclic Quadrilaterals & Tangents to a Circle',
        content: `- **Cyclic Quadrilateral Properties:**
  A 4-sided polygon whose 4 vertices all touch the circumference of a circle.
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Opposite angles are supplementary:</span>
     $$\\angle A + \\angle C = 180^\\circ \\quad \\text{and} \\quad \\angle B + \\angle D = 180^\\circ$$
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Exterior angle equals the opposite interior angle.</span>

- **Properties of Tangents to a Circle:**
  A tangent is a straight line that touches the circle at only one point (point of contact).
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Radius is perpendicular to the tangent at point of contact:</span> $\\angle OPT = 90^\\circ$.
  2. Two tangents drawn from an external point $T$ to touch points $A$ and $B$:
     * $TA = TB$ (Equal tangent lengths)
     * $\\angle OTA = \\angle OTB$
     * $\\angle AOB + \\angle ATB = 180^\\circ$
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Alternate Segment Theorem:</span>
     The angle between a tangent and a chord through the point of contact equals the angle in the alternate segment subtended by that chord.`,
        interactiveElements: [
          {
            id: 'math-ch6-reveal1',
            type: 'reveal',
            title: 'Alternate Segment Theorem Explained',
            prompt: 'Click to reveal how to quickly spot alternate segment angles in exam questions.',
            revealedContent: 'Look at the triangular chord touching the tangent line. The angle between the tangent and one side of the triangle is equal to the internal vertex angle that faces that chord on the opposite side.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm6-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'ABCD is a cyclic quadrilateral. If angle ABC = 85° and angle BCD = 110°, find the values of angle ADC and angle DAB.',
        marks: 2,
        answer: {
          finalAnswer: '∠ADC = 95°, ∠DAB = 70°',
          fullWorking: [
            'In a cyclic quadrilateral, opposite angles sum to 180°:',
            '∠ADC = 180° - ∠ABC = 180° - 85° = 95°',
            '∠DAB = 180° - ∠BCD = 180° - 110° = 70°'
          ]
        }
      },
      {
        id: 'm6-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'TA and TB are tangents from external point T to a circle with centre O. If angle ATB = 46°, calculate the value of angle OAB.',
        marks: 3,
        answer: {
          finalAnswer: '23°',
          fullWorking: [
            'In quadrilateral AOBT, ∠OAT = 90° and ∠OBT = 90°.',
            '∠AOB = 180° - ∠ATB = 180° - 46° = 134°.',
            'Triangle OAB is an isosceles triangle because OA = OB (radii).',
            '∠OAB = (180° - 134°) / 2 = 46° / 2 = 23°.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math6',
      title: 'Angles & Tangents of Circles',
      children: [
        {
          id: 'm-m6-1',
          title: 'Arc & Segment Theorems',
          children: [
            { id: 'm-m6-1a', title: 'Angle at Centre = 2 × Angle at Circumference' },
            { id: 'm-m6-1b', title: 'Angle in Semicircle = 90°' },
            { id: 'm-m6-1c', title: 'Angles in same segment are equal' }
          ]
        },
        {
          id: 'm-m6-2',
          title: 'Cyclic Quadrilaterals',
          children: [
            { id: 'm-m6-2a', title: 'Opposite angles sum to 180°' },
            { id: 'm-m6-2b', title: 'Exterior angle = Opposite interior angle' }
          ]
        },
        {
          id: 'm-m6-3',
          title: 'Tangents',
          children: [
            { id: 'm-m6-3a', title: 'Radius ⊥ Tangent (90° at point of contact)' },
            { id: 'm-m6-3b', title: 'Tangents from external point are equal length' },
            { id: 'm-m6-3c', title: 'Alternate Segment Theorem' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Geometric Deductions',
        title: 'Solving Circle Geometry & Tangent Questions',
        keyQuestionTypes: ['Finding unknown angles using multiple circle theorems', 'Tangents from external points forming isosceles triangles and right angles', 'Cyclic quadrilateral angle deductions'],
        essentialKeywords: [
          'State reason: (Angle at centre = 2 × circum / Opposite angles of cyclic quad sum to 180°)',
          'Identify isosceles triangles formed by circle radii (OA = OB)',
          'Radius meets tangent at exactly 90°'
        ],
        stepByStepStrategy: [
          'Mark all radii with equal tick marks to immediately spot hidden isosceles triangles.',
          'If a diameter is present, look for the right angle (90°) subtended at the circumference.'
        ],
        commonErrorsToAvoid: [
          'Assuming a quadrilateral is cyclic when its vertices do not all lie on the circumference.'
        ]
      }
    ]
  },
  {
    id: 'math-ch7',
    subject: 'math',
    chapterNumber: 7,
    title: 'Plans and Elevations',
    theme: 'Measurement and Geometry',
    summary: 'Master orthogonal projections, normal to a plane, drawing the Plan (top view), Front Elevation, and Side Elevation to actual scale using the 45° reflection fourth quadrant method.',
    notes: [
      {
        title: '7.1 Orthogonal Projections and Views',
        content: `Orthogonal projection represents 3-dimensional objects on 2-dimensional planes through perpendicular rays of sight:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Plan (Top View):</span> The view projected vertically downward onto a horizontal plane.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Front Elevation:</span> The view projected horizontally from the front onto a vertical plane.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Side Elevation:</span> The view projected horizontally from the side onto a vertical plane.
4. <span class="text-rose-600 dark:text-rose-400 font-bold">Line Conventions:</span> Continuous solid lines for visible edges; dashed broken lines for hidden/concealed edges; thin solid lines for 45° projection guide lines.`,
        tables: [
          {
            caption: 'Differences between Technical Drawing Line Types',
            headers: ['Line Type & Style', 'Visual Appearance', 'Specific Geometric Function in Orthogonal Drawings'],
            rows: [
              ['Thick Solid Line', 'Continuous unbroken line (——)', 'Represents visible outer boundaries and exposed physical edges'],
              ['Dashed / Broken Line', 'Evenly spaced dashes (- - -)', 'Represents hidden or obstructed internal edges blocked from the line of sight'],
              ['Thin Construction Line', 'Light, faint pencil line', 'Forms the 45° reflection axis and projection transfer guides across quadrants']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Orthogonal Scale Ratio',
            formulaInWords: 'Scale Ratio = Length on Drawing : Actual Physical Length',
            formula: 'Scale = Drawing Length : Actual Length (1 : n)',
            howToUse: [
              '1. Measure or note the actual dimension of the 3D solid edge in centimetres.',
              '2. For full-scale (1 : 1) drawings required in PT3/KSSM, draw with exact physical measurements (±1 mm tolerance).',
              '3. Verify all vertical heights on Front Elevation equal corresponding heights on Side Elevation.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Drawing Length', meaning: 'The length drawn on paper using a ruler.' },
              { symbolOrTerm: 'Actual Length', meaning: 'The true measurement of the physical 3D object.' }
            ],
            wordExample: 'For a prism with length 6 cm drawn at full scale 1:1, the line on paper is drawn exactly 6.0 cm long.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch7-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: 4-Quadrant Orthogonal Projections (Plan, Front & Side Elevations)',
            description: 'Inspect quadrant placement: Front Elevation, Side Elevation, Plan (top view), and 45° projection guide lines.',
            prompt: 'Click each quadrant view to inspect projection directions, line thickness standards, and 45° reflection alignment.',
            diagramData: {
              caption: 'Figure: Standard 4-quadrant layout for orthogonal technical drawings with 45° reflection line.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- 4 Quadrants Grid -->
                <line x1="250" y1="20" x2="250" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
                <line x1="30" y1="120" x2="470" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />

                <!-- Quadrant II: Side Elevation (Top-Left) -->
                <rect x="70" y="35" width="120" height="70" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
                <text x="80" y="65" font-size="12" fill="#1d4ed8" font-weight="bold">Side Elevation</text>
                <text x="80" y="85" font-size="9" fill="#2563eb">Height = 5 cm, Width = 4 cm</text>
                <text x="40" y="32" font-size="10" fill="#64748b" font-weight="bold">Quadrant II</text>

                <!-- Quadrant I: Front Elevation (Top-Right) -->
                <rect x="290" y="35" width="140" height="70" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
                <text x="300" y="65" font-size="12" fill="#15803d" font-weight="bold">Front Elevation</text>
                <text x="300" y="85" font-size="9" fill="#166534">Height = 5 cm, Length = 6 cm</text>
                <text x="420" y="32" font-size="10" fill="#64748b" font-weight="bold">Quadrant I</text>

                <!-- Quadrant III: 45° Projection Line (Bottom-Left) -->
                <line x1="70" y1="140" x2="230" y2="210" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3" />
                <text x="80" y="165" font-size="11" fill="#be123c" font-weight="bold">45° Reflection Line</text>
                <text x="80" y="185" font-size="8" fill="#9f1239">Transfers width to side elevation</text>
                <text x="40" y="225" font-size="10" fill="#64748b" font-weight="bold">Quadrant III</text>

                <!-- Quadrant IV: Plan (Bottom-Right) -->
                <rect x="290" y="135" width="140" height="75" rx="4" fill="#faf5ff" stroke="#a855f7" stroke-width="2" />
                <text x="310" y="165" font-size="12" fill="#6b21a8" font-weight="bold">Plan (Top View)</text>
                <text x="310" y="185" font-size="9" fill="#7e22ce">Width = 4 cm, Length = 6 cm</text>
                <text x="420" y="225" font-size="10" fill="#64748b" font-weight="bold">Quadrant IV</text>
              </svg>`,
              labels: [
                {
                  id: 'plan-view',
                  name: 'Plan (Top View on Horizontal Plane)',
                  description: 'The Plan represents the solid viewed directly from above. Its length aligns vertically with the Front Elevation.'
                },
                {
                  id: 'front-elevation',
                  name: 'Front Elevation (Vertical Plane Front)',
                  description: 'Viewed horizontally from the front (Direction X). Its vertical height aligns horizontally with the Side Elevation.'
                },
                {
                  id: 'side-elevation',
                  name: 'Side Elevation (Vertical Plane Side)',
                  description: 'Viewed horizontally from the side (Direction Y). Dimensions correspond to the width transferred via the 45° line and height.'
                },
                {
                  id: '45-reflection',
                  name: '45° Reflection Guide Line',
                  description: 'Used in the empty quadrant to project horizontal widths from the Plan across into the Side Elevation accurately.'
                }
              ]
            }
          },
          {
            id: 'math-ch7-vid1',
            type: 'video',
            title: 'Visual Masterclass: Plans and Elevations Orthogonal Projections',
            description: 'Master drawing Plan (top view), Front Elevation, Side Elevation to full scale (1:1), and constructing hidden dashed lines accurately.',
            videoData: {
              youtubeId: 'b5b4L-9P3h8',
              duration: '8:55',
              channelOrSpeaker: 'KSSM Technical Drawing Series',
              videoSummary: 'Comprehensive tutorial on drawing orthogonal projections for composite solids, aligning quadrants with a 45° line, and earning full method and accuracy marks.',
              keyLearningPoints: [
                'How to set up the 4 quadrants based on the viewing direction (from left vs from right)',
                'Differentiating continuous solid lines (visible) and dashed lines (hidden)',
                'Aligning heights horizontally and lengths vertically',
                'Drawing to exact 1:1 full scale (±1 mm exam tolerance)'
              ]
            }
          },
          {
            id: 'math-ch7-quiz1',
            type: 'quiz',
            title: 'Line Convention Check',
            prompt: 'When drawing a side elevation of a composite prism with a hollow cylindrical hole inside, how should the hidden boundaries of the cylinder be drawn?',
            options: [
              { text: 'Solid thick line', isCorrect: false, explanation: 'Solid lines are only for visible surface edges.' },
              { text: 'Dashed (broken) line', isCorrect: true, explanation: 'Correct! Dashed lines represent hidden internal edges.' },
              { text: 'Omitted completely', isCorrect: false, explanation: 'All edges must be represented.' }
            ]
          }
        ]
      },
      {
        title: '7.2 The 4-Quadrant Orthogonal Drawing Setup',
        content: `Standard KSSM exam orthogonal drawing layout follows strict quadrant projection rules:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">When viewing Side Elevation from Left:</span> Quadrant II (Top-Left) = Side Elevation, Quadrant I (Top-Right) = Front Elevation, Quadrant IV (Bottom-Right) = Plan, Quadrant III (Bottom-Left) = 45° reflection guide line.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">When viewing Side Elevation from Right:</span> Quadrant II (Top-Left) = Front Elevation, Quadrant I (Top-Right) = Side Elevation, Quadrant III (Bottom-Left) = Plan, Quadrant IV (Bottom-Right) = 45° reflection guide line.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Alignment Rule:</span> Plan sits directly below Front Elevation vertically; Side Elevation aligns horizontally with Front Elevation.`,
        interactiveElements: [
          {
            id: 'math-ch7-reveal1',
            type: 'reveal',
            title: 'Full Marks Criteria for Plans & Elevations',
            prompt: 'Click to see what examiners look for to award full marks.',
            revealedContent: '1. Correct shape and correct continuous solid vs dashed lines.\n2. Accurate dimensions (within ±1 mm tolerance).\n3. Alignment: Front elevation must vertically align with Plan, and horizontally align with Side elevation via 45° line.\n4. Clean corners with no gaps or overlapping extensions.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm7-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State the difference between solid lines and dashed lines when drawing the plan and elevations of a 3D solid.',
        marks: 2,
        answer: {
          finalAnswer: 'Solid lines represent visible edges viewed directly from that direction, whereas dashed lines represent hidden edges that are obstructed from direct view.',
          fullWorking: ['Differentiate visible (solid) vs hidden (dashed) features.']
        }
      },
      {
        id: 'm7-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A right prism has a rectangular base ABCD of length 6 cm and width 4 cm on a horizontal plane. The vertical height of the prism is 5 cm. State the dimensions of: (a) The Plan (b) The Front Elevation viewed parallel to AB.',
        marks: 2,
        answer: {
          finalAnswer: '(a) Plan: 6 cm by 4 cm rectangle\n(b) Front Elevation: 6 cm by 5 cm rectangle',
          fullWorking: [
            'Plan is top view: Dimensions are length (6 cm) × width (4 cm).',
            'Front elevation is viewed facing AB (6 cm): Dimensions are width AB (6 cm) × vertical height (5 cm).'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math7',
      title: 'Plans and Elevations (Form 3)',
      children: [
        {
          id: 'm-m7-1',
          title: 'Three Views',
          children: [
            { id: 'm-m7-1a', title: 'Plan (Top view on horizontal plane)' },
            { id: 'm-m7-1b', title: 'Front Elevation (Vertical plane front)' },
            { id: 'm-m7-1c', title: 'Side Elevation (Vertical plane side)' }
          ]
        },
        {
          id: 'm-m7-2',
          title: 'Drawing Rules',
          children: [
            { id: 'm-m7-2a', title: 'Solid lines for visible edges' },
            { id: 'm-m7-2b', title: 'Dashed lines for hidden edges' },
            { id: 'm-m7-2c', title: '45° line quadrant alignment' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Technical Drawing & Scale Accuracy',
        title: 'Mastering Plans & Elevations in Exam Papers',
        keyQuestionTypes: ['Drawing Plan to full scale', 'Drawing Front and Side Elevations with hidden lines', 'Synthesizing 3D volume from 2D orthogonal plans'],
        essentialKeywords: [
          'Full scale (1 : 1) - accurate measurements with ruler',
          'Dashed lines for hidden edges (crucial for marks)',
          'All corners must meet precisely without gaps or overshoot'
        ],
        stepByStepStrategy: [
          'Always use a sharp pencil and 30 cm transparent ruler.',
          'Verify that width of Front Elevation matches width of Plan, and height of Front Elevation matches height of Side Elevation.'
        ],
        commonErrorsToAvoid: [
          'Drawing a visible edge as a dashed line or omitting dashed lines for concealed internal cuts.',
          'Not drawing to full scale 1:1.'
        ]
      }
    ]
  },
  {
    id: 'math-ch8',
    subject: 'math',
    chapterNumber: 8,
    title: 'Loci in Two Dimensions',
    theme: 'Measurement and Geometry',
    summary: 'Explore the concept of a 2D locus and master the 5 standard geometric loci: equidistant from a fixed point, equidistant from two points, equidistant from a line, equidistant from parallel lines, and equidistant from two intersecting lines.',
    notes: [
      {
        title: '8.1 The 5 Fundamental Geometric Loci in 2D',
        content: `A locus is the exact path or set of points in a two-dimensional plane that satisfies a given geometric condition:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Locus 1 (From One Fixed Point):</span> Set of all points at a fixed radius distance $r$ forms a complete circle centered at that point.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Locus 2 (Equidistant from Two Points):</span> Points equidistant from points $A$ and $B$ form the perpendicular bisector line of segment $AB$.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Locus 3 (Constant Distance from a Line):</span> Points at constant distance $d$ from line $AB$ form two parallel lines on either side of $AB$.
4. <span class="text-rose-600 dark:text-rose-400 font-bold">Locus 4 (Equidistant from Two Parallel Lines):</span> Points form a single straight line parallel to both lines, positioned exactly halfway between them.
5. <span class="text-rose-600 dark:text-rose-400 font-bold">Locus 5 (Equidistant from Two Intersecting Lines):</span> Points form the angle bisector dividing the angle between the two lines equally into two halves.`,
        tables: [
          {
            caption: 'Differences between the 5 Standard 2D Geometric Loci',
            headers: ['Geometric Condition', 'Resulting Locus Shape', 'Required Construction Instrument & Method'],
            rows: [
              ['Fixed distance r from 1 fixed point P', 'Circle with centre P and radius r', 'Compass set to radius length r, placed at point P'],
              ['Equidistant from 2 fixed points A and B', 'Perpendicular bisector of segment AB', 'Compass drawing intersecting arcs from A and B with radius > 1/2 AB'],
              ['Fixed distance d from a straight line AB', 'Pair of parallel straight lines on both sides', 'Ruler and set square measuring perpendicular distance d'],
              ['Equidistant from 2 parallel lines L₁ and L₂', 'Single parallel line exactly in the middle', 'Ruler bisecting perpendicular distance between lines'],
              ['Equidistant from 2 intersecting lines AB and BC', 'Angle bisector of ∠ABC', 'Compass swinging arcs from vertex B across both arms, then intersecting arcs']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Radius Distance Locus Rule',
            formulaInWords: 'Distance from Centre = Radius ( Constant r )',
            formula: 'Distance(P, Point) = r',
            howToUse: [
              '1. Identify the single fixed central point.',
              '2. Measure the specified radius distance r with a ruler.',
              '3. Place compass point at the centre and draw a full circle or specified arc.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'P', meaning: 'The fixed central reference point.' },
              { symbolOrTerm: 'r', meaning: 'The constant fixed radius distance.' }
            ],
            wordExample: 'Points at a constant distance of 4 cm from point O form a circle with centre O and radius 4 cm.'
          },
          {
            name: 'Perpendicular Bisector Locus Rule',
            formulaInWords: 'Distance to Point A = Distance to Point B',
            formula: 'Distance(Point, A) = Distance(Point, B)',
            howToUse: [
              '1. Set compass width to more than half the length of line segment AB.',
              '2. Draw arcs above and below AB from point A.',
              '3. Draw intersecting arcs from point B without altering compass width.',
              '4. Join arc intersections with a straight line.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'A and B', meaning: 'The two fixed reference endpoints.' }
            ],
            wordExample: 'Points equidistant from posts A and B lie on the straight perpendicular bisector dividing AB into two equal 90° halves.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch8-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: The 5 Standard 2D Geometric Loci & Intersections',
            description: 'Inspect the 5 geometric loci: circle from a point, perpendicular bisector, parallel equidistant lines, mid-line between parallels, and angle bisector.',
            prompt: 'Click any locus type below to inspect the geometric condition, compass construction rules, and intersection points.',
            diagramData: {
              caption: 'Figure: Overview of the 5 fundamental 2D geometric loci conditions.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Locus 1: Circle from point P -->
                <circle cx="80" cy="70" r="40" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3" />
                <circle cx="80" cy="70" r="4" fill="#1e40af" />
                <text x="75" y="65" font-size="10" fill="#1e40af" font-weight="bold">P</text>
                <text x="35" y="125" font-size="10" fill="#1d4ed8" font-weight="bold">1. Point: Circle</text>

                <!-- Locus 2: Perp Bisector of AB -->
                <line x1="180" y1="70" x2="260" y2="70" stroke="#475569" stroke-width="2" />
                <circle cx="180" cy="70" r="3" fill="#0f172a" />
                <circle cx="260" cy="70" r="3" fill="#0f172a" />
                <text x="175" y="60" font-size="9" fill="#0f172a">A</text>
                <text x="255" y="60" font-size="9" fill="#0f172a">B</text>
                <line x1="220" y1="30" x2="220" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4" />
                <text x="160" y="125" font-size="10" fill="#b91c1c" font-weight="bold">2. 2 Points: Perp Bisector</text>

                <!-- Locus 3: Parallel distance d -->
                <line x1="330" y1="70" x2="450" y2="70" stroke="#0f172a" stroke-width="2" />
                <line x1="330" y1="45" x2="450" y2="45" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3" />
                <line x1="330" y1="95" x2="450" y2="95" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3" />
                <text x="325" y="125" font-size="10" fill="#15803d" font-weight="bold">3. Line: 2 Parallel Lines</text>

                <!-- Locus 5: Angle Bisector (Bottom) -->
                <line x1="160" y1="210" x2="260" y2="210" stroke="#475569" stroke-width="2" />
                <line x1="160" y1="210" x2="230" y2="150" stroke="#475569" stroke-width="2" />
                <line x1="160" y1="210" x2="250" y2="180" stroke="#9333ea" stroke-width="2" stroke-dasharray="4,4" />
                <text x="145" y="215" font-size="10" fill="#0f172a" font-weight="bold">B</text>
                <text x="170" y="235" font-size="10" fill="#7e22ce" font-weight="bold">5. 2 Lines: Angle Bisector</text>
              </svg>`,
              labels: [
                {
                  id: 'locus-1',
                  name: 'Locus 1: Fixed Distance from a Single Point',
                  description: 'Forms a complete circle of radius r centered at that point. Example: Points 3 cm from point P.'
                },
                {
                  id: 'locus-2',
                  name: 'Locus 2: Equidistant from Two Fixed Points',
                  description: 'Forms the perpendicular bisector of the line segment joining the two points. Constructed by drawing intersecting arcs from A and B.'
                },
                {
                  id: 'locus-3',
                  name: 'Locus 3: Constant Distance from a Straight Line',
                  description: 'Forms a pair of parallel straight lines, each at distance d on either side of the given line.'
                },
                {
                  id: 'locus-5',
                  name: 'Locus 5: Equidistant from Two Intersecting Lines',
                  description: 'Forms the angle bisector of the angle formed between the two intersecting straight lines.'
                }
              ]
            }
          },
          {
            id: 'math-ch8-vid1',
            type: 'video',
            title: 'Visual Masterclass: The 5 Standard 2D Loci & Intersection Points',
            description: 'Learn step-by-step compass constructions for all 5 loci types and accurately finding intersection points ⊗ in composite shapes.',
            videoData: {
              youtubeId: 'p3kY7V9Q6uY',
              duration: '8:40',
              channelOrSpeaker: 'KSSM Geometric Constructions Lab',
              videoSummary: 'Step-by-step video demonstrating compass techniques for constructing perpendicular bisectors, angle bisectors, and marking multi-condition intersection points.',
              keyLearningPoints: [
                'How to distinguish equidistant from 2 points (perp bisector) vs 2 lines (angle bisector)',
                'Leaving all pencil and compass construction arcs intact for full marks',
                'Drawing circles for fixed distance from a point',
                'Marking intersection coordinates with ⊗ symbol'
              ]
            }
          },
          {
            id: 'math-ch8-quiz1',
            type: 'quiz',
            title: 'Identify the Locus Type',
            prompt: 'Which locus describes points that are always equidistant from lines AB and BC in triangle ABC?',
            options: [
              { text: 'The perpendicular bisector of AC', isCorrect: false, explanation: 'That is equidistant from points A and C.' },
              { text: 'The angle bisector of ∠ABC', isCorrect: true, explanation: 'Correct! Lines AB and BC intersect at point B, so points equidistant from both lines form the angle bisector of ∠ABC.' },
              { text: 'A circle with centre B', isCorrect: false, explanation: 'A circle gives constant distance from point B, not equidistant from two lines.' }
            ]
          }
        ]
      },
      {
        title: '8.2 Determining the Intersection of Two Loci',
        content: `Standard exam multi-step locus problems require locating points meeting two simultaneous geometric conditions:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Construct Locus X:</span> Accurately construct the first locus using geometric tools (keeping construction arcs intact).
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Construct Locus Y:</span> Accurately construct the second locus on the same diagram.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Mark Intersections:</span> Mark all valid intersection points within the diagram boundaries using the symbol ⊗ or •.`,
        interactiveElements: [
          {
            id: 'math-ch8-reveal1',
            type: 'reveal',
            title: 'Exam Construction Checklist',
            prompt: 'Click to reveal standard construction arcs required for full marks.',
            revealedContent: 'Always leave all compass construction arcs visible! Do not erase the arc intersections when constructing perpendicular bisectors or angle bisectors. Erasing construction arcs results in lost method marks.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm8-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Describe the shape of the locus of a point that moves such that its distance from a fixed point O is always 4 cm.',
        marks: 1,
        answer: {
          finalAnswer: 'A circle with centre O and a radius of 4 cm.',
          fullWorking: ['Equidistant from a single fixed point = Circle with that radius.']
        }
      },
      {
        id: 'm8-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'ABCD is a square with sides of 6 cm. Locus X is the locus of a point moving such that it is equidistant from side AB and side AD. Locus Y is the locus of a point 4 cm from point A. (a) Describe Locus X geometrically. (b) Determine the number of intersection points between Locus X and Locus Y inside the square.',
        marks: 3,
        answer: {
          finalAnswer: '(a) Locus X is the diagonal line AC (the angle bisector of ∠DAB).\n(b) Exactly 1 intersection point inside the square.',
          fullWorking: [
            'Locus X: Lines AB and AD meet at A at 90°. The angle bisector is the diagonal line AC (at 45°).',
            'Locus Y: Arc of a circle with centre A and radius 4 cm.',
            'Inside square ABCD, the circular arc of radius 4 cm crosses diagonal AC at exactly one point (since diagonal length AC = √(6² + 6²) = √72 ≈ 8.49 cm, and 4 cm < 8.49 cm).'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math8',
      title: 'Loci in Two Dimensions',
      children: [
        {
          id: 'm-m8-1',
          title: 'The 5 Standard Loci',
          children: [
            { id: 'm-m8-1a', title: 'From 1 point: Circle' },
            { id: 'm-m8-1b', title: 'From 2 points: Perpendicular bisector' },
            { id: 'm-m8-1c', title: 'From 1 line: Two parallel lines' },
            { id: 'm-m8-1d', title: 'From 2 parallel lines: Mid-parallel line' },
            { id: 'm-m8-1e', title: 'From 2 intersecting lines: Angle bisector' }
          ]
        },
        {
          id: 'm-m8-2',
          title: 'Intersection of Loci',
          children: [
            { id: 'm-m8-2a', title: 'Construct Locus 1 & Locus 2' },
            { id: 'm-m8-2b', title: 'Mark intersections with ⊗' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Compass Construction & Reasoning',
        title: 'Mastering 2D Loci Construction in Exams',
        keyQuestionTypes: ['Constructing perpendicular bisectors and angle bisectors', 'Locating intersection points satisfying two constraints', 'Grid-based locus shading'],
        essentialKeywords: [
          'Equidistant from points A and B = Perpendicular bisector of AB',
          'Equidistant from lines AB and BC = Angle bisector of ∠ABC',
          'Leave all construction arcs clearly visible'
        ],
        stepByStepStrategy: [
          'Read whether the question says "equidistant from two POINTS" (perpendicular bisector) or "equidistant from two LINES" (angle bisector). This is the #1 student confusion.',
          'Mark the final intersection point clearly with the requested symbol ($\\\\otimes$).'
        ],
        commonErrorsToAvoid: [
          'Confusing perpendicular bisector of a line with angle bisector of an angle.'
        ]
      }
    ]
  },
  {
    id: 'math-ch9',
    subject: 'math',
    chapterNumber: 9,
    title: 'Straight Lines',
    theme: 'Relationship and Algebra',
    summary: 'Master gradient of a straight line, equation of a straight line y = mx + c, intercept form x/a + y/b = 1, parallel lines condition (m1 = m2), and determining intersection points of two straight lines.',
    notes: [
      {
        title: '9.1 Gradient of a Straight Line (m)',
        content: `The gradient ($m$) represents the steepness and vertical rate of change of a straight line.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Two-Point Method:</span> Calculated as the vertical change (rise) divided by horizontal change (run) between any two points $(x_1, y_1)$ and $(x_2, y_2)$.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Intercepts Method:</span> Calculated with a negative ratio of $y$-intercept over $x$-intercept: $m = -\\frac{y\\text{-intercept}}{x\\text{-intercept}}$.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Slope Direction:</span> Positive gradient rises to the right, negative gradient falls to the right, zero gradient is horizontal, and undefined gradient is vertical.`,
        tables: [
          {
            caption: 'Differences between Types of Line Gradients',
            headers: ['Gradient Value (m)', 'Geometric Orientation', 'Word Description', 'Example Equation'],
            rows: [
              ['Positive (m > 0)', 'Slants upwards to the right (↗)', 'Value of y increases as x increases', 'y = 2x + 1'],
              ['Negative (m < 0)', 'Slants downwards to the right (↘)', 'Value of y decreases as x increases', 'y = -3x + 5'],
              ['Zero (m = 0)', 'Completely horizontal (—)', 'No change in y as x varies', 'y = 4'],
              ['Undefined (m = ∞)', 'Completely vertical (|)', 'Vertical line with no horizontal run (dx = 0)', 'x = 3']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Gradient from Two Coordinates',
            formulaInWords: 'Gradient = ( Second y-value − First y-value ) ÷ ( Second x-value − First x-value )',
            formula: 'm = (y2 - y1) / (x2 - x1)',
            howToUse: [
              '1. Label the coordinates of point 1 as $(x_1, y_1)$ and point 2 as $(x_2, y_2)$.',
              '2. Subtract $y_1$ from $y_2$ to find the vertical rise (numerator).',
              '3. Subtract $x_1$ from $x_2$ in the SAME order to find horizontal run (denominator).',
              '4. Divide vertical rise by horizontal run and simplify.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Vertical Rise (y2 − y1)', meaning: 'Net vertical elevation difference.' },
              { symbolOrTerm: 'Horizontal Run (x2 − x1)', meaning: 'Net horizontal distance travelled.' },
              { symbolOrTerm: 'Gradient (m)', meaning: 'The steepness value.' }
            ],
            wordExample: 'For points (2, 3) and (6, 11): Vertical rise = 11 − 3 = 8. Horizontal run = 6 − 2 = 4. Gradient m = 8 ÷ 4 = 2.'
          },
          {
            name: 'Gradient from Intercepts',
            formulaInWords: 'Gradient = − ( y-intercept ) ÷ ( x-intercept )',
            formula: 'm = - (b / a)',
            howToUse: [
              '1. Identify the $y$-intercept ($b$) where the line crosses the vertical y-axis.',
              '2. Identify the $x$-intercept ($a$) where the line crosses the horizontal x-axis.',
              '3. Place a negative sign in front of the fraction of $y$-intercept over $x$-intercept.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'y-intercept (b)', meaning: 'Distance from origin along y-axis.' },
              { symbolOrTerm: 'x-intercept (a)', meaning: 'Distance from origin along x-axis.' }
            ],
            wordExample: 'If a line crosses the y-axis at 6 and x-axis at 3: Gradient = − (6 ÷ 3) = −2.'
          },
          {
            name: 'Gradient-Intercept Line Equation',
            formulaInWords: 'y-value = ( Gradient × x-value ) + y-intercept',
            formula: 'y = mx + c',
            howToUse: [
              '1. Determine the gradient ($m$).',
              '2. Determine the y-intercept ($c$).',
              '3. Assemble the equation as $y = mx + c$.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'm', meaning: 'Gradient / slope of line.' },
              { symbolOrTerm: 'c', meaning: 'y-intercept where line crosses vertical axis.' }
            ],
            wordExample: 'For gradient 3 and y-intercept -4, the line equation is y = 3x − 4.'
          }
        ],
        interactiveElements: [
          {
            id: 'math-ch9-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Straight Line Gradient (m) & Intercepts (y = mx + c, x/a + y/b = 1)',
            description: 'Inspect positive gradient (↗), negative gradient (↘), parallel lines (m₁ = m₂), and intercepts (a, 0) and (0, b).',
            prompt: 'Click any coordinate or line equation parameter below to inspect gradient slope calculations, parallel line conditions, and intercept forms.',
            diagramData: {
              caption: 'Figure: Geometric relationship between straight line gradient m, y-intercept c, and x-intercept a.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Axes -->
                <line x1="60" y1="210" x2="440" y2="210" stroke="#334155" stroke-width="2" />
                <line x1="120" y1="230" x2="120" y2="30" stroke="#334155" stroke-width="2" />
                <text x="445" y="215" font-size="12" fill="#334155" font-weight="bold">x</text>
                <text x="115" y="25" font-size="12" fill="#334155" font-weight="bold">y</text>
                <text x="105" y="225" font-size="10" fill="#64748b">O(0,0)</text>

                <!-- Line 1: y = 2x + 2 (Positive gradient) -->
                <line x1="80" y1="230" x2="220" y2="50" stroke="#2563eb" stroke-width="2.5" />
                <circle cx="120" cy="170" r="4" fill="#1d4ed8" />
                <text x="130" y="175" font-size="10" fill="#1d4ed8" font-weight="bold">(0, c) y-intercept</text>
                <circle cx="95" cy="210" r="4" fill="#1d4ed8" />
                <text x="60" y="200" font-size="9" fill="#1d4ed8">x-intercept</text>
                <text x="160" y="70" font-size="11" fill="#1d4ed8" font-weight="bold">y = m₁x + c₁ (m₁ > 0)</text>

                <!-- Line 2: Parallel Line y = 2x - 4 -->
                <line x1="180" y1="230" x2="320" y2="50" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="4,4" />
                <text x="260" y="90" font-size="11" fill="#0284c7" font-weight="bold">Parallel: m₂ = m₁</text>

                <!-- Line 3: Negative Gradient -->
                <line x1="300" y1="50" x2="440" y2="210" stroke="#e11d48" stroke-width="2.5" />
                <text x="360" y="130" font-size="11" fill="#be123c" font-weight="bold">m &lt; 0 (Falling)</text>
              </svg>`,
              labels: [
                {
                  id: 'gradient-m',
                  name: 'Gradient (m = rise / run)',
                  description: 'Calculated as m = (y₂ - y₁) / (x₂ - x₁) or from intercepts as m = - (y-intercept / x-intercept). Positive slopes rise ↗, negative slopes fall ↘.'
                },
                {
                  id: 'intercept-form',
                  name: 'Intercept Form (x/a + y/b = 1)',
                  description: 'Where a is the x-intercept coordinate (a, 0) and b is the y-intercept coordinate (0, b).'
                },
                {
                  id: 'parallel-condition',
                  name: 'Parallel Lines Condition (m₁ = m₂)',
                  description: 'Two lines are parallel if and only if they have identical gradients. Their equations will have the same coefficient of x when written as y = mx + c.'
                }
              ]
            }
          },
          {
            id: 'math-ch9-vid1',
            type: 'video',
            title: 'Visual Masterclass: Gradient, Straight Line Equations & Parallel Lines',
            description: 'Master calculating gradients from two points and intercepts, converting to y = mx + c, and solving simultaneous line intersections.',
            videoData: {
              youtubeId: 'b9k1A3z4M8g',
              duration: '9:05',
              channelOrSpeaker: 'KSSM Coordinate Geometry Series',
              videoSummary: 'Step-by-step video solving PT3 and SPM coordinate geometry problems: converting ax + by = c to gradient-intercept form, parallel line equations through a point, and perpendicular bisector lines.',
              keyLearningPoints: [
                'How to rearrange general equation ax + by = c into y = mx + c to isolate gradient m',
                'Why gradient from intercepts has a negative sign: m = - (b / a)',
                'Finding parallel line equations passing through a specified point (x₁, y₁)',
                'Finding intersection points by solving simultaneous linear equations'
              ]
            }
          },
          {
            id: 'math-ch9-calc1',
            type: 'calculator',
            title: 'Gradient & Straight Line Equation Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'x1', label: 'Point 1 x₁', unit: '', defaultValue: 2, step: 1 },
                { name: 'y1', label: 'Point 1 y₁', unit: '', defaultValue: 3, step: 1 },
                { name: 'x2', label: 'Point 2 x₂', unit: '', defaultValue: 6, step: 1 },
                { name: 'y2', label: 'Point 2 y₂', unit: '', defaultValue: 11, step: 1 }
              ],
              calculate: (inputs) => {
                const { x1, y1, x2, y2 } = inputs;
                const dx = x2 - x1;
                const dy = y2 - y1;
                if (dx === 0) {
                  return {
                    result: `x = ${x1} (Vertical line, gradient undefined)`,
                    steps: [`dx = 0, line is vertical: x = ${x1}`]
                  };
                }
                const m = dy / dx;
                const c = y1 - m * x1;
                const sign = c >= 0 ? `+ ${c.toFixed(2)}` : `- ${Math.abs(c).toFixed(2)}`;
                return {
                  result: `y = ${m.toFixed(2)}x ${sign} (Gradient m = ${m.toFixed(2)})`,
                  steps: [
                    `Gradient m = (y₂ - y₁) / (x₂ - x₁) = (${y2} - ${y1}) / (${x2} - ${x1}) = ${dy} / ${dx} = ${m.toFixed(2)}`,
                    `Substitute point (${x1}, ${y1}) into y = mx + c: ${y1} = (${m.toFixed(2)})(${x1}) + c`,
                    `y-intercept c = ${y1} - ${m * x1} = ${c.toFixed(2)}`,
                    `Equation: y = ${m.toFixed(2)}x ${sign}`
                  ]
                };
              }
            }
          }
        ]
      },
      {
        title: '9.2 Equations of Straight Lines and Parallel Lines',
        content: `- **Forms of Straight Line Equation:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Gradient-Intercept Form:</span>
     $$y = mx + c$$
     where $m$ is gradient and $c$ is $y$-intercept.
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Intercept Form:</span>
     $$\\frac{x}{a} + \\frac{y}{b} = 1$$
     where $a$ is $x$-intercept and $b$ is $y$-intercept.
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">General Form:</span>
     $$ax + by = c$$

- **Parallel Lines Condition:**
  Two non-vertical straight lines $L_1$ and $L_2$ are parallel if and only if their <span class="text-rose-600 dark:text-rose-400 font-bold">gradients are equal</span>:
  $$m_1 = m_2$$

- **Intersection of Two Straight Lines:**
  The point of intersection $(x, y)$ of two straight lines is found by solving their equations simultaneously (using **substitution** or **elimination** method).`,
        interactiveElements: [
          {
            id: 'math-ch9-quiz1',
            type: 'quiz',
            title: 'Parallel Line Gradient Check',
            prompt: 'Which of the following straight lines is parallel to 2y = 6x - 8?',
            options: [
              { text: 'y = 2x + 5', isCorrect: false, explanation: 'The gradient of 2y = 6x - 8 is y = 3x - 4 (m = 3).' },
              { text: 'y = 3x + 10', isCorrect: true, explanation: 'Correct! 2y = 6x - 8 simplifies to y = 3x - 4 with gradient m = 3. A parallel line must also have m = 3.' },
              { text: 'y = -3x + 4', isCorrect: false, explanation: 'Gradients must be equal in sign and value (m = 3).' }
            ]
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'm9-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Find the gradient of the straight line passing through points P(3, -2) and Q(7, 6).',
        marks: 2,
        answer: {
          finalAnswer: 'm = 2',
          fullWorking: [
            'm = (y2 - y1) / (x2 - x1)',
            'm = (6 - (-2)) / (7 - 3) = (6 + 2) / 4 = 8 / 4 = 2.'
          ]
        }
      },
      {
        id: 'm9-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'Find the equation of a straight line that is parallel to the line 3x + y = 7 and passes through the point (4, 2).',
        marks: 3,
        answer: {
          finalAnswer: 'y = -3x + 14',
          fullWorking: [
            'Rewrite 3x + y = 7 into y = mx + c form: y = -3x + 7.',
            'Gradient m = -3. Since lines are parallel, m = -3.',
            'Substitute m = -3 and point (4, 2) into y = mx + c:',
            '2 = -3(4) + c  =>  2 = -12 + c  =>  c = 14.',
            'Equation is y = -3x + 14.'
          ]
        }
      },
      {
        id: 'm9-ex3',
        number: 3,
        difficulty: 'HOTS',
        question: 'The straight line x/4 + y/6 = 1 intersects the x-axis at point P and the y-axis at point Q. (a) State the coordinates of P and Q. (b) Find the equation of the straight line perpendicular bisector of PQ.',
        marks: 4,
        answer: {
          finalAnswer: '(a) P(4, 0) and Q(0, 6)\n(b) y = 2/3 x + 5/3 (or 2x - 3y + 5 = 0)',
          fullWorking: [
            '(a) From intercept form x/a + y/b = 1: x-intercept a = 4, y-intercept b = 6. Thus P(4, 0) and Q(0, 6).',
            '(b) Midpoint of PQ = ((4 + 0)/2, (0 + 6)/2) = (2, 3).',
            'Gradient of PQ = (6 - 0) / (0 - 4) = 6 / -4 = -3/2.',
            'Perpendicular gradient m_perp = -1 / (-3/2) = 2/3.',
            'Equation through (2, 3): y - 3 = 2/3 (x - 2) => y = 2/3 x - 4/3 + 3 = 2/3 x + 5/3.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-math9',
      title: 'Straight Lines (Form 3)',
      children: [
        {
          id: 'm-m9-1',
          title: 'Gradient (m)',
          children: [
            { id: 'm-m9-1a', title: 'm = (y2 - y1) / (x2 - x1)' },
            { id: 'm-m9-1b', title: 'm = - (y-intercept) / (x-intercept)' }
          ]
        },
        {
          id: 'm-m9-2',
          title: 'Line Equations',
          children: [
            { id: 'm-m9-2a', title: 'Gradient form: y = mx + c' },
            { id: 'm-m9-2b', title: 'Intercept form: x/a + y/b = 1' }
          ]
        },
        {
          id: 'm-m9-3',
          title: 'Parallel & Intersection',
          children: [
            { id: 'm-m9-3a', title: 'Parallel lines: m1 = m2' },
            { id: 'm-m9-3b', title: 'Intersection: Solve simultaneous equations' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Coordinate Geometry & Straight Line Solving',
        title: 'Mastering Straight Line Algebra in Exams',
        keyQuestionTypes: ['Finding line equation given a point and parallel line', 'Finding intercepts from general form', 'Simultaneous intersection coordinates'],
        essentialKeywords: [
          'Express in y = mx + c first to find gradient m',
          'Parallel lines have identical gradients: m1 = m2',
          'Negative sign in intercept gradient formula: m = - (y-intercept / x-intercept)'
        ],
        stepByStepStrategy: [
          'If given an equation like $2x + 3y = 6$, divide through by coefficient of y: $3y = -2x + 6 \\implies y = -\\frac{2}{3}x + 2$, giving $m = -\\frac{2}{3}$ and $c = 2$.'
        ],
        commonErrorsToAvoid: [
          'Reading gradient directly from $ax + by = c$ as $a$ without rearranging to $y = mx + c$ (actual gradient is $-a/b$).',
          'Forgetting the negative sign in $m = - \\frac{y\\text{-intercept}}{x\\text{-intercept}}$.'
        ]
      }
    ]
  }
];
