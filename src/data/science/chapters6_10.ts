import { Chapter } from '../../types';

export const scienceChapters6to10: Chapter[] = [
  {
    id: 'science-ch6',
    subject: 'science',
    chapterNumber: 6,
    title: 'Electricity and Magnetism',
    theme: 'Energy and Sustainability of Life',
    summary: 'High-yield master summary of electricity generation, renewable and non-renewable energy sources, induced current and dynamos, the 6 KSSM power generators, step-up & step-down transformers, the National Grid Network, domestic household wiring & safety devices, and all electrical calculation formulas.',
    notes: [
      {
        title: '6.1 Energy Sources & Electricity Generation',
        content: `Electrical energy is a secondary energy source produced through energy transformations from various primary natural resources.

- **Key Principles:**
  - **Law of Conservation of Energy:** Energy cannot be created or destroyed, but can only be converted from one form to another.
  - Primary energy sources are classified into **Renewable** (naturally replenished) and **Non-renewable** (finite reserves).`,
        tables: [
          {
            caption: 'Comparison of Renewable vs Non-Renewable Energy Sources',
            headers: ['Characteristic / Aspect', 'Renewable Energy Sources', 'Non-Renewable Energy Sources'],
            rows: [
              ['Definition', 'Energy resources that can be continuously replenished naturally and will never run out', 'Energy resources that exist in finite quantities and cannot be replenished once depleted'],
              ['Availability & Supply', 'Unlimited and sustainable over the long term', 'Depleted over time with continuous extraction'],
              ['Environmental Impact', 'Clean energy; minimal carbon emissions; does not cause severe air pollution', 'Combustion releases greenhouse gases (CO₂), acidic gases (SO₂, NO₂), and soot'],
              ['Major Types & Examples', '• **Solar Energy** (Sunlight)\n• **Hydro Energy** (Moving water)\n• **Wind Energy** (Air currents)\n• **Biomass Energy** (Organic matter/waste)\n• **Geothermal Energy** (Earth crust heat)\n• **Wave & Tidal Energy** (Ocean currents)', '• **Fossil Fuels** (Coal, Crude Petroleum, Natural Gas)\n• **Nuclear Fuels** (Uranium-235, Plutonium-239)'],
              ['Examples in Malaysia', '• Solar farms in Kedah & Perak\n• Hydroelectric dams (Bakun, Kenyir, Chenderoh)\n• Biomass from oil palm empty fruit bunches (EFB)', '• Coal power plants (Jimah, Tanjung Bin, Manjung)\n• Natural gas thermal plants (Paka, Lumut)']
            ]
          },
          {
            caption: 'The 6 Main Power Generators / Stations in KSSM Syllabus',
            headers: ['Power Station Type', 'Primary Energy Source', 'Energy Transformation Pathway', 'Working Mechanism / Principle', 'Key Advantages', 'Key Disadvantages'],
            rows: [
              [
                '**1. Thermal Power Station**',
                'Non-renewable (Coal, Petroleum, or Natural Gas)',
                '$$\\text{Chemical} \\rightarrow \\text{Heat} \\rightarrow \\text{Kinetic (Turbine)} \\rightarrow \\text{Electrical}$$',
                'Fuel combustion boils water in a boiler $\\rightarrow$ High-pressure steam spins the turbine $\\rightarrow$ Turbine rotates the generator rotor $\\rightarrow$ Induced electrical current is generated.',
                '• Reliable continuous base-load power\n• High electrical power output',
                '• Emits greenhouse gases (CO₂) causing global warming\n• Acid rain from SO₂ and NO₂ emissions'
              ],
              [
                '**2. Hydroelectric Power Station**',
                'Renewable (Water stored in high reservoirs/dams)',
                '$$\\text{Grav. Potential} \\rightarrow \\text{Kinetic (Water)} \\rightarrow \\text{Kinetic (Turbine)} \\rightarrow \\text{Electrical}$$',
                'Water stored at high elevation flows through a penstock tunnel $\\rightarrow$ High-speed water flow strikes turbine blades $\\rightarrow$ Turbine spins generator rotor to generate electricity.',
                '• Clean, renewable, and zero carbon emissions\n• Low operational costs; water reservoir can be used for irrigation/flood control',
                '• High initial construction cost\n• Flooding large forest areas damages biodiversity and displaces communities'
              ],
              [
                '**3. Solar Power Generation**',
                'Renewable (Solar Radiation / Sunlight)',
                '$$\\text{Solar / Light Energy} \\rightarrow \\text{Electrical Energy}$$',
                'Sunlight strikes semiconductor **photovoltaic (PV) cells** $\\rightarrow$ Photons excite electrons, producing direct current (d.c.) $\\rightarrow$ An inverter converts d.c. to alternating current (a.c.) without spinning turbines.',
                '• Free and abundant sunlight\n• Zero operational emissions and silent operation',
                '• Weather dependent (inefficient during rainy days/night)\n• Requires large surface area for solar panels'
              ],
              [
                '**4. Wind Power Station**',
                'Renewable (Moving air currents / Wind)',
                '$$\\text{Kinetic (Wind)} \\rightarrow \\text{Kinetic (Turbine Blades)} \\rightarrow \\text{Electrical}$$',
                'Kinetic energy of moving wind blows and rotates giant aerofoil turbine blades $\\rightarrow$ Gearbox increases rotational speed $\\rightarrow$ Drives generator rotor to produce electricity.',
                '• Clean, inexhaustible renewable resource\n• Low land footprint per tower',
                '• Unpredictable and intermittent wind speeds\n• Noise pollution and visual impact; threat to migrating birds'
              ],
              [
                '**5. Biomass Power Station**',
                'Renewable (Agricultural waste: palm shells, bagasse, wood chips, animal manure)',
                '$$\\text{Chemical} \\rightarrow \\text{Heat} \\rightarrow \\text{Kinetic (Turbine)} \\rightarrow \\text{Electrical}$$',
                'Combustion of dried biomass waste in an incinerator boils water into high-pressure steam $\\rightarrow$ Steam turns the turbine $\\rightarrow$ Turbine drives generator.',
                '• Reduces agricultural landfill waste\n• Carbon neutral over short biological cycle',
                '• Emits smoke and particulate matter if combustion is incomplete\n• Requires continuous supply of biomass feedstock'
              ],
              [
                '**6. Nuclear Power Station**',
                'Non-renewable (Uranium-235 or Plutonium-239)',
                '$$\\text{Nuclear} \\rightarrow \\text{Heat} \\rightarrow \\text{Kinetic (Turbine)} \\rightarrow \\text{Electrical}$$',
                '**Nuclear fission** in reactor core releases enormous heat $\\rightarrow$ Coolant heats water in steam generator $\\rightarrow$ High-pressure steam turns turbine $\\rightarrow$ Turbine drives generator.',
                '• Massive energy density from small mass of fuel\n• Zero greenhouse gas emissions during operation',
                '• Highly radioactive nuclear waste requires deep geological storage\n• Risk of catastrophic radioactive fallout during accidents'
              ]
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch6-flash1',
            type: 'flashcard',
            title: 'Form 3 Power Generators Quick Recall Card',
            prompt: 'Which 2 power generation systems do NOT rely on boiling water into steam to turn turbines?',
            revealedContent: '1. **Hydroelectric Power Station** (Direct kinetic energy of falling water turns the turbine).\n2. **Solar Photovoltaic Power** (Direct light-to-electricity conversion via PV semiconductor cells without any turbine or generator).'
          }
        ]
      },
      {
        title: '6.2 Induced Current & Electromagnetic Induction',
        content: `**Electromagnetic Induction** is the production of an induced electromotive force (e.m.f.) and induced current in a conductor when there is relative motion that **cuts magnetic flux lines**.

- **Foundational Rules:**
  - **Faraday\'s Law:** The magnitude of induced e.m.f. is directly proportional to the rate of cutting of magnetic flux lines.
  - **Fleming\'s Right-Hand Rule (Dynamo Rule):** Determines the direction of induced current in a moving conductor.`,
        tables: [
          {
            caption: 'Methods of Generating Induced Current and Factors Affecting Magnitude',
            headers: ['Category / Parameter', 'Experimental Setup / Method', 'Scientific Principle / Observation'],
            rows: [
              ['Method 1: Straight Wire in Magnetic Field', 'Moving a straight copper wire quickly downwards across magnetic field lines between North and South poles', 'Conductor cuts magnetic flux lines perpendicularly $\\rightarrow$ Galvanometer pointer deflects showing induced current'],
              ['Method 2: Bar Magnet & Solenoid', 'Pushing a bar magnet into or pulling it out of a stationary solenoid coil', 'Changing magnetic flux linkage inside coil induces current; reversing motion reverses pointer deflection direction'],
              ['Method 3: Rotating Coil (Generator)', 'Rotating a rectangular copper coil between opposite permanent magnetic poles', 'Coil continuously cuts magnetic field lines at changing angles, producing alternating induced current (a.c.)'],
              ['Factor 1: Speed of Relative Motion', 'Moving wire/magnet faster across magnetic field', 'Increases the rate of cutting magnetic flux $\\rightarrow$ Larger induced current'],
              ['Factor 2: Strength of Magnetic Field', 'Using stronger Neodymium magnets', 'Increases magnetic flux density $\\rightarrow$ Larger induced current'],
              ['Factor 3: Number of Turns in Coil', 'Using a solenoid with more wire loops (e.g. 500 turns vs 100 turns)', 'Increases total flux linkage cut per second $\\rightarrow$ Larger induced current']
            ]
          },
          {
            caption: 'Fleming\'s Right-Hand Rule (Dynamo Rule) for Induced Current',
            headers: ['Finger / Part of Right Hand', 'Represents Physical Quantity', 'Direction / Orientation'],
            rows: [
              ['**Thumb**', '**Motion / Force (F)**', 'Direction of conductor movement'],
              ['**First Finger (Forefinger)**', '**Magnetic Field (B)**', 'Direction from North Pole (N) to South Pole (S)'],
              ['**Second Finger (Middle finger)**', '**Induced Current (I)**', 'Direction of induced electric current flow']
            ]
          },
          {
            caption: 'Comparison of Direct Current (d.c.) vs Alternating Current (a.c.)',
            headers: ['Characteristic', 'Direct Current (d.c.)', 'Alternating Current (a.c.)'],
            rows: [
              ['Direction of Current Flow', 'Flows in **one fixed direction** only', 'Flows back and forth, **reversing direction periodically**'],
              ['Cathode Ray Oscilloscope (C.R.O.) Waveform', 'Straight horizontal line above or below zero line', 'Continuous sinusoidal wave (alternating positive and negative crests)'],
              ['Voltage / Current Value', 'Constant steady magnitude over time', 'Magnitude changes continuously between positive and negative peak values'],
              ['Frequency in Malaysia', '**0 Hz** (no frequency)', '**50 Hz** (current direction reverses 100 times per second)'],
              ['Standard Voltage in Malaysia', 'Varies (1.5 V, 9 V, 12 V, 24 V)', '**240 V** (Household mains supply)'],
              ['Common Power Sources', 'Dry cells, alkaline batteries, car lead-acid batteries, solar cells, d.c. dynamos', 'Power station generators, bicycle dynamos, household wall sockets, diesel a.c. generators'],
              ['Transformer Compatibility', '❌ **Cannot** be stepped up or down by transformers (magnetic field is constant)', '✅ **Can** be stepped up and stepped down easily using transformers']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch6-quiz-acdc',
            type: 'quiz',
            title: 'Direct Current vs Alternating Current Mastery Check',
            prompt: 'Why does a transformer NOT work when connected to a 12 V direct current (d.c.) battery?',
            options: [
              { text: 'A 12 V battery produces too much heat in the primary coil.', isCorrect: false, explanation: 'Heat is not the primary reason induction fails.' },
              { text: 'Direct current produces a steady, non-changing magnetic field, so no magnetic flux is cut in the secondary coil.', isCorrect: true, explanation: 'Correct! Transformers require a continuously changing magnetic field (produced only by a.c.) to induce voltage in the secondary coil according to Faraday\'s Law.' },
              { text: 'Direct current cannot pass through copper wires.', isCorrect: false, explanation: 'Copper wires conduct both a.c. and d.c.' }
            ]
          }
        ]
      },
      {
        title: '6.3 Transformers: Working Principle, Turns Ratio & Energy Losses',
        content: `A **Transformer** is a static electrical device that increases (steps up) or decreases (steps down) an alternating voltage based on **mutual electromagnetic induction**.

- **Structure & Working Mechanism:**
  - Consists of two insulated copper coils (**Primary Coil** and **Secondary Coil**) wound around a **laminated soft iron core**.
  - When alternating current (a.c.) flows through the primary coil, it generates a continuously changing magnetic field in the soft iron core.
  - The changing magnetic flux cuts through the secondary coil, inducing an alternating secondary voltage ($V_s$).`,
        tables: [
          {
            caption: 'Comprehensive Comparison between Step-Up and Step-Down Transformers',
            headers: ['Characteristic', 'Step-Up Transformer', 'Step-Down Transformer'],
            rows: [
              ['Secondary Voltage vs Primary Voltage', 'Output voltage is **higher** than input voltage ($V_s > V_p$)', 'Output voltage is **lower** than input voltage ($V_s < V_p$)'],
              ['Turns Ratio ($N_s$ vs $N_p$)', 'Secondary turns exceed primary turns ($N_s > N_p$)', 'Secondary turns are fewer than primary turns ($N_s < N_p$)'],
              ['Output Current vs Input Current', 'Output current is **lower** than input current ($I_s < I_p$)', 'Output current is **higher** than input current ($I_s > I_p$)'],
              ['Primary Coil Wire', 'Thicker copper wire (to carry higher primary current with low resistance)', 'Thinner copper wire'],
              ['Secondary Coil Wire', 'Thinner copper wire', 'Thicker copper wire (to carry higher secondary current without overheating)'],
              ['Primary Locations & Applications', '• Power generating stations (stepping up 11 kV/25 kV to 132 kV - 500 kV)\n• Microwave ovens\n• X-ray machines\n• CRT television tubes', '• Distribution substations (stepping down 132 kV to 33 kV, 11 kV, 415 V, 240 V)\n• Mobile phone chargers (240 V $\\rightarrow$ 5 V)\n• Laptop power adapters\n• Radio and audio equipment']
            ]
          },
          {
            caption: 'The 4 Causes of Energy Loss in Transformers & Prevention Methods',
            headers: ['Cause of Energy Loss', 'Mechanism of Energy Dissipation', 'Prevention / Efficiency Improvement Method'],
            rows: [
              [
                '**1. Resistance of Coils (Joule Heating)**',
                'Electric current flowing through copper windings generates heat due to internal resistance ($P_{\\text{loss}} = I^2 R$).',
                '• Use **thick copper wire** with low electrical resistance.\n• Install cooling fins or circulating transformer oil.'
              ],
              [
                '**2. Eddy Currents in Iron Core**',
                'The changing magnetic flux induces swirling loop currents (**eddy currents**) inside the solid iron core, causing severe resistive heating ($I^2 R$).',
                '• Use a **laminated soft iron core** made of thin iron sheets insulated from each other with varnish to block eddy current loops.'
              ],
              [
                '**3. Hysteresis Loss (Magnetic Core Reversal)**',
                'Continuous magnetisation and demagnetisation of the core in every a.c. cycle dissipates energy as heat.',
                '• Use a **soft iron core** which has high magnetic permeability and is easily magnetised and demagnetised with minimal energy loss.'
              ],
              [
                '**4. Magnetic Flux Leakage**',
                'Not all magnetic flux produced by the primary coil links through the secondary coil, reducing induced voltage.',
                '• Design a **closed-loop iron core**.\n• Wind the **secondary coil directly on top of the primary coil** to ensure maximum flux linkage.'
              ]
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Transformer Voltage-Turns Ratio Formula',
            formulaInWords: 'Primary Voltage ÷ Secondary Voltage = Number of Primary Turns ÷ Number of Secondary Turns',
            formula: 'Vp / Vs = Np / Ns',
            howToUse: [
              '1. Identify given primary voltage (Vp), primary coil turns (Np), and secondary coil turns (Ns).',
              '2. Rearrange the formula: Vs = (Vp × Ns) ÷ Np or Ns = (Vs × Np) ÷ Vp.',
              '3. Verify: If Ns > Np, Vs must be greater than Vp (Step-up); if Ns < Np, Vs must be smaller (Step-down).'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Vp', meaning: 'Primary input voltage in Volts (V).' },
              { symbolOrTerm: 'Vs', meaning: 'Secondary output voltage in Volts (V).' },
              { symbolOrTerm: 'Np', meaning: 'Number of turns in primary coil.' },
              { symbolOrTerm: 'Ns', meaning: 'Number of turns in secondary coil.' }
            ],
            wordExample: 'A transformer has Np = 1000 turns and Ns = 200 turns. If Vp = 240 V, secondary voltage Vs = (240 × 200) ÷ 1000 = 48 V (Step-down).'
          },
          {
            name: 'Power Equation for Ideal (100% Efficient) Transformer',
            formulaInWords: 'Input Power (Primary) = Output Power (Secondary) => Primary Voltage × Primary Current = Secondary Voltage × Secondary Current',
            formula: 'Vp × Ip = Vs × Is',
            howToUse: [
              '1. Calculate primary input power Pin = Vp × Ip.',
              '2. Equate to secondary output power Pout = Vs × Is for an ideal transformer.',
              '3. Calculate unknown secondary current: Is = (Vp × Ip) ÷ Vs.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Ip', meaning: 'Primary input current in Amperes (A).' },
              { symbolOrTerm: 'Is', meaning: 'Secondary output current in Amperes (A).' }
            ],
            wordExample: 'If 240 V at 2 A is stepped up to 2400 V, secondary current Is = (240 × 2) ÷ 2400 = 0.2 A.'
          },
          {
            name: 'Transformer Efficiency Formula',
            formulaInWords: 'Efficiency (%) = [ Output Power (Secondary) ÷ Input Power (Primary) ] × 100% = [ (Vs × Is) ÷ (Vp × Ip) ] × 100%',
            formula: 'Efficiency = (Pout / Pin) × 100% = [(Vs × Is) / (Vp × Ip)] × 100%',
            howToUse: [
              '1. Compute output power Pout = Vs × Is (or in Watts).',
              '2. Compute input power Pin = Vp × Ip (or in Watts).',
              '3. Divide Pout by Pin and multiply by 100%.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Efficiency (%)', meaning: 'Percentage of input power successfully delivered to the output load.' },
              { symbolOrTerm: 'Pout', meaning: 'Output electrical power delivered by secondary coil (W).' },
              { symbolOrTerm: 'Pin', meaning: 'Input electrical power supplied to primary coil (W).' }
            ],
            wordExample: 'If input power is 200 W and output power delivered is 180 W: Efficiency = (180 ÷ 200) × 100% = 90%.'
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch6-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Structure and Electromagnetic Induction in a Transformer',
            description: 'Inspect the laminated soft iron core, primary input AC coil, magnetic flux linkage, and secondary output coil.',
            prompt: 'Click any labelled part below to inspect mutual induction, turns ratio, and step-up vs step-down configurations.',
            diagramData: {
              caption: 'Figure: Laminated soft iron core transformer showing primary and secondary coil induction.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Iron Core Frame Outer -->
                <rect x="120" y="30" width="260" height="180" rx="12" fill="#e2e8f0" stroke="#475569" stroke-width="4" />
                <!-- Iron Core Window (Hollow Center) -->
                <rect x="190" y="70" width="120" height="100" rx="6" fill="#f8fafc" stroke="#475569" stroke-width="3" />
                <!-- Core Lamination lines -->
                <line x1="130" y1="40" x2="370" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
                <line x1="130" y1="200" x2="370" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
                <text x="205" y="125" font-size="10" fill="#64748b" font-weight="bold">Laminated Iron Core</text>

                <!-- Primary Coil (Left) -->
                <rect x="110" y="75" width="20" height="12" rx="3" fill="#f59e0b" stroke="#d97706" />
                <rect x="110" y="95" width="20" height="12" rx="3" fill="#f59e0b" stroke="#d97706" />
                <rect x="110" y="115" width="20" height="12" rx="3" fill="#f59e0b" stroke="#d97706" />
                <rect x="110" y="135" width="20" height="12" rx="3" fill="#f59e0b" stroke="#d97706" />
                <rect x="110" y="155" width="20" height="12" rx="3" fill="#f59e0b" stroke="#d97706" />
                <!-- AC Input wires -->
                <line x1="40" y1="81" x2="110" y2="81" stroke="#d97706" stroke-width="3" />
                <line x1="40" y1="161" x2="110" y2="161" stroke="#d97706" stroke-width="3" />
                <circle cx="35" cy="121" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
                <path d="M 28,121 Q 35,113 35,121 Q 35,129 42,121" fill="none" stroke="#d97706" stroke-width="2" />
                <text x="15" y="150" font-size="10" fill="#b45309" font-weight="bold">AC Input (Vp)</text>
                <text x="75" y="65" font-size="10" fill="#b45309" font-weight="bold">Primary (Np)</text>

                <!-- Secondary Coil (Right) -->
                <rect x="370" y="65" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="80" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="95" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="110" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="125" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="140" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="155" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <rect x="370" y="170" width="20" height="10" rx="2" fill="#3b82f6" stroke="#1d4ed8" />
                <!-- Output wires -->
                <line x1="390" y1="70" x2="460" y2="70" stroke="#1d4ed8" stroke-width="3" />
                <line x1="390" y1="175" x2="460" y2="175" stroke="#1d4ed8" stroke-width="3" />
                <rect x="445" y="105" width="30" height="35" rx="4" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" />
                <text x="450" y="126" font-size="9" fill="#1e40af" font-weight="bold">Load</text>
                <text x="355" y="55" font-size="10" fill="#1d4ed8" font-weight="bold">Secondary (Ns)</text>
                <text x="410" y="200" font-size="10" fill="#1e40af" font-weight="bold">AC Output (Vs)</text>
              </svg>`,
              labels: [
                {
                  id: 'soft-iron-core',
                  name: 'Laminated Soft Iron Core',
                  description: 'Easily magnetised and demagnetised to concentrate alternating magnetic flux between coils. Laminated insulated sheets reduce eddy current heat loss.'
                },
                {
                  id: 'primary-coil',
                  name: 'Primary Coil (Input Vp, Np)',
                  description: 'Receives alternating current which produces a continuously changing magnetic field in the iron core.'
                },
                {
                  id: 'secondary-coil',
                  name: 'Secondary Coil (Output Vs, Ns)',
                  description: 'The changing magnetic flux cuts through secondary turns, inducing an alternating secondary voltage according to Faraday’s Law.'
                },
                {
                  id: 'ratio-rule',
                  name: 'Turns Ratio & Classification',
                  description: 'If Ns > Np, it is a Step-Up Transformer (Vs > Vp). If Ns < Np, it is a Step-Down Transformer (Vs < Vp).'
                }
              ]
            }
          },
          {
            id: 'sc-ch6-calc1',
            type: 'calculator',
            title: 'Interactive Transformer Voltage Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'Vp', label: 'Primary Voltage (Vp)', unit: 'V', defaultValue: 240, step: 10 },
                { name: 'Np', label: 'Primary Turns (Np)', unit: 'turns', defaultValue: 500, step: 50 },
                { name: 'Ns', label: 'Secondary Turns (Ns)', unit: 'turns', defaultValue: 100, step: 10 }
              ],
              calculate: (inputs) => {
                const { Vp, Np, Ns } = inputs;
                const Vs = (Vp * Ns) / Np;
                const type = Vs > Vp ? 'Step-up Transformer' : Vs < Vp ? 'Step-down Transformer' : '1:1 Isolating Transformer';
                return {
                  result: `${Vs.toFixed(1)} V (${type})`,
                  steps: [
                    `Formula: Vs = (Vp × Ns) / Np`,
                    `Vs = (${Vp} V × ${Ns}) / ${Np}`,
                    `Calculated Secondary Voltage Vs = ${Vs.toFixed(1)} V`
                  ]
                };
              }
            }
          }
        ]
      },
      {
        title: '6.4 Energy Distribution & The National Grid Network',
        content: `The **National Grid Network** (*Rangkaian Grid Nasional*) is an interconnected network of high-voltage transmission lines linking power stations across Malaysia to distribution substations and end consumers.

- **Key Grid Objectives:**
  - Continuous, reliable power supply (if one power station fails, others instantly cover demand).
  - Ability to transmit bulk electrical energy efficiently over hundreds of kilometres.`,
        tables: [
          {
            caption: 'Sequential Stages of Electricity Transmission & Voltage Stepping in the National Grid',
            headers: ['Transmission Stage', 'Voltage Level', 'Equipment / Structure', 'Purpose / Destination'],
            rows: [
              ['**Stage 1: Power Station Generation**', '11 kV or 25 kV a.c.', 'Generators in Power Stations (Hydro, Coal, Gas)', 'Generates bulk alternating electric power at medium voltage'],
              ['**Stage 2: Step-up Transformer Station**', 'Stepped UP to **132 kV, 275 kV, or 500 kV**', 'Step-up Transformers at Power Station Switchyard', 'Reduces transmission current ($I = P/V$) to drastically minimize heat energy loss ($I^2 R$) during long-distance transmission'],
              ['**Stage 3: National Grid Transmission Lines**', '132 kV - 500 kV', 'High-voltage Pylons & Overhead Aluminium/Steel Cables', 'Transmits power across states and nationwide grid networks with minimal power dissipation'],
              ['**Stage 4: Main Substation**', 'Stepped DOWN to **33 kV**', 'Step-down Transformer', 'Supplies **Heavy Industrial Zones** (steel mills, smelting plants, chemical manufacturing)'],
              ['**Stage 5: Branch Substation**', 'Stepped DOWN to **11 kV**', 'Step-down Transformer', 'Supplies **Light Industrial Areas**, train networks, and commercial institutions'],
              ['**Stage 6: Distribution Substation**', 'Stepped DOWN to **415 V & 240 V**', 'Local Step-down Transformer Substation', '• **415 V (3-phase a.c.)**: Commercial shopping malls, office towers, large buildings\n• **240 V (1-phase a.c.)**: Residential homes and small retail shops']
            ]
          },
          {
            caption: 'Physics Proof: Why High-Voltage Transmission Minimizes Power Loss',
            headers: ['Parameter / Comparison', 'Transmission at Standard Voltage (240 V)', 'Transmission at High Voltage (132 kV / 132,000 V)', 'Scientific Implication'],
            rows: [
              ['Electric Power Transmitted ($P$)', 'Assume $P = 1,320,000\\text{ W}$ (1.32 MW)', 'Assume $P = 1,320,000\\text{ W}$ (1.32 MW)', 'Same amount of bulk energy is transported'],
              ['Transmission Current ($I = P / V$)', '$I = \\frac{1,320,000}{240} = \\mathbf{5500\\text{ A}}$', '$I = \\frac{1,320,000}{132,000} = \\mathbf{10\\text{ A}}$', 'Stepping up voltage by 550× reduces current by **550 times**'],
              ['Cable Resistance ($R$)', 'Assume cable $R = 2\\;\\Omega$', 'Assume cable $R = 2\\;\\Omega$', 'Same cable characteristics'],
              ['Power Loss as Heat ($P_{\\text{loss}} = I^2 R$)', '$P_{\\text{loss}} = (5500)^2 \\times 2 = \\mathbf{60,500,000\\text{ W}}$\n*(Catastrophic failure; cable melts)*', '$P_{\\text{loss}} = (10)^2 \\times 2 = \\mathbf{200\\text{ W}}$\n*(Extremely low loss; 99.98% efficient)*', 'Power loss is proportional to $I^2$. Reducing current by 550× reduces heat loss by $550^2 = \\mathbf{302,500\\text{ times}}$!']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch6-vid1',
            type: 'video',
            title: 'Visual Masterclass: Transformers & National Grid Electrical Transmission',
            description: 'Understand how alternating current induction works in transformers and why high voltage transmission reduces energy loss.',
            videoData: {
              youtubeId: 'ZjwzpoL1FPE',
              duration: '8:30',
              channelOrSpeaker: 'KSSM Physics & Science Portal',
              videoSummary: 'Comprehensive visual explanation of electromagnetic mutual induction, calculation of turns ratios, and how the National Grid transmits power at 132kV/275kV/500kV.',
              keyLearningPoints: [
                'Why transformers only function with alternating current (a.c.) and not direct current (d.c.)',
                'How stepping up voltage reduces transmission current and heat loss (Power Loss = I²R)',
                'The role of fuse, live, neutral, and earth wires in domestic 3-pin plugs',
                'How to calculate appliance power consumption costs in kWh units'
              ]
            }
          }
        ]
      },
      {
        title: '6.5 Energy Distribution in House, Domestic Wiring & Safety Devices',
        content: `Mains electricity entering Malaysian residential homes is **single-phase 240 V alternating current (a.c.) at 50 Hz**.

- **Safety Architecture:**
  - All domestic appliances and power sockets are connected in **parallel circuits** so each appliance receives full 240 V and operates independently.`,
        tables: [
          {
            caption: 'Sequence of Components in a Domestic Household Electrical Wiring System',
            headers: ['Component Order', 'Device / Component', 'Function & Operation in Household'],
            rows: [
              ['**1st Component**', '**Mains Service Cable & Cut-Out Unit (Main Fuse & Neutral Link)**', 'Carries Live (240 V) and Neutral (0 V) wires from substation. Main fuse (typically 60 A - 100 A) melts to protect incoming cables from massive external surges.'],
              ['**2nd Component**', '**Electric Meter (kWh Meter)**', 'Measures and records total electrical energy consumed by the household in kilowatt-hours (kWh / units) for utility billing.'],
              ['**3rd Component (In Consumer Unit)**', '**Main Switch**', 'A double-pole switch that cuts off both live and neutral supplies simultaneously, disconnecting the entire house for maintenance or emergency.'],
              ['**4th Component (In Consumer Unit)**', '**Residual Current Device (RCD / ELCB)**', 'Earth Leakage / Residual Current breaker that detects any current imbalance between Live and Neutral (>30 mA for power circuits, >100 mA for lighting) and trips instantly within 0.1s to prevent fatal electrocution.'],
              ['**5th Component (In Consumer Unit)**', '**Miniature Circuit Breakers (MCB)**', 'Separate electromagnetic switches protecting individual branch circuits against overcurrent and short circuits:\n• **5 A / 6 A MCB**: For lighting and ceiling fan circuits\n• **16 A / 20 A / 32 A MCB**: For 13 A power sockets, air conditioners, and water heaters.'],
              ['**Final Circuits**', '**Lighting Circuits & Power Socket Ring Circuits**', '• **Lighting circuit**: Connected in parallel with switches on Live wires.\n• **Power socket circuit**: Ring main circuit supplying 240 V to 3-pin wall sockets.']
            ]
          },
          {
            caption: 'Comparison of the 3 Wires in a 3-Pin Plug',
            headers: ['Wire Name', 'Symbol', 'International Colour Code', 'Potential (Voltage)', 'Safety Connection & Working Role'],
            rows: [
              ['**Live Wire**', '**L**', '**Brown** *(old: Red)*', '**240 V**', 'Carries electric current at high potential from mains supply to appliance. **Must be connected to the Fuse and Switch**.'],
              ['**Neutral Wire**', '**N**', '**Blue** *(old: Black)*', '**0 V**', 'Completes the electrical circuit by carrying current back to the substation at zero potential.'],
              ['**Earth Wire**', '**E**', '**Green with Yellow stripes** *(old: Green)*', '**0 V**', 'Safety wire connected directly to the **outer metal casing** of the appliance and into the ground via an earth rod. If a loose live wire touches the metal casing, high fault current flows safely to earth, blowing the fuse immediately.']
            ]
          },
          {
            caption: 'Comparison of Domestic Electrical Safety Devices',
            headers: ['Safety Device', 'Working Principle', 'Primary Hazard Prevented'],
            rows: [
              ['**Fuse (Cartridge / Wire)**', 'Thin wire with low melting point that melts and breaks circuit when current exceeds rated capacity (e.g. 3 A, 5 A, 13 A)', 'Overcurrent, short circuits, electrical fires in appliances'],
              ['**Miniature Circuit Breaker (MCB)**', 'Electromagnetic / bimetallic strip switch that automatically trips to "OFF" when overcurrent occurs; can be manually reset', 'Overloading and short circuits in branch wiring'],
              ['**Residual Current Device (RCD)**', 'Detects difference between Live current and Neutral current ($I_L - I_N > 30\\text{ mA}$); trips within milliseconds', 'Electric shocks, electrocution, and current leakage to earth'],
              ['**Earth Wire & Grounding Rod**', 'Low-resistance conductor path connecting metallic appliance casings to the ground outside the building', 'Dangerous high voltage on exposed metal surfaces'],
              ['**Lightning Conductor**', 'Thick copper strip on roof peaks running down into ground spike', 'Structural fires and high-voltage damage from direct lightning strikes']
            ]
          },
          {
            caption: 'Comparison of 2-Pin Plug vs 3-Pin Plug',
            headers: ['Feature', '2-Pin Plug', '3-Pin Plug'],
            rows: [
              ['Number of Wires', '2 wires (**Live** and **Neutral** only; No Earth wire)', '3 wires (**Live**, **Neutral**, and **Earth**)'],
              ['Appliance Type', '**Double-insulated appliances** (marked with $\\square$ symbol) with non-conductive plastic casings (e.g. phone chargers, hair dryers, blenders, table fans)', 'Appliances with **exposed conductive metal casings** (e.g. electric kettles, refrigerators, irons, washing machines, microwaves)'],
              ['Built-in Fuse', 'No internal fuse in plug (relies on internal adapter circuitry)', 'Contains internal cartridge fuse (usually 13 A) protecting the flexible cord']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch6-diag2',
            type: 'diagram',
            title: 'Interactive Diagram: 3-Pin Plug Anatomy & Wire Connections',
            description: 'Inspect the standard Malaysian 3-pin plug (BS 1363) showing Live (Brown), Neutral (Blue), Earth (Green/Yellow), and cartridge fuse.',
            prompt: 'Click any labelled wire or component below to inspect its voltage, colour code, safety function, and fuse protection.',
            diagramData: {
              caption: 'Figure: Internal wiring and pin layout of a standard domestic 3-pin plug with 13 A cartridge fuse.',
              svgContent: `<svg viewBox="0 0 500 280" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Plug Body Outline -->
                <path d="M 120,50 L 380,50 Q 420,50 420,90 L 420,200 Q 420,240 380,240 L 120,240 Q 80,240 80,200 L 80,90 Q 80,50 120,50 Z" fill="#1e293b" stroke="#0f172a" stroke-width="4" />
                <rect x="95" y="65" width="310" height="160" rx="16" fill="#334155" />

                <!-- Earth Terminal (Top Center) -->
                <rect x="235" y="40" width="30" height="24" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
                <rect x="238" y="70" width="24" height="20" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <circle cx="250" cy="80" r="4" fill="#475569" />
                <text x="220" y="32" font-size="11" fill="#22c55e" font-weight="bold">Earth Pin (E)</text>

                <!-- Neutral Terminal (Bottom Left) -->
                <rect x="130" y="145" width="24" height="30" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
                <rect x="132" y="150" width="20" height="20" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" />
                <circle cx="142" cy="160" r="4" fill="#475569" />
                <text x="90" y="140" font-size="11" fill="#38bdf8" font-weight="bold">Neutral (N)</text>

                <!-- Live Terminal & Cartridge Fuse (Bottom Right) -->
                <rect x="345" y="145" width="24" height="30" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
                <rect x="340" y="115" width="34" height="60" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
                <rect x="343" y="117" width="28" height="8" fill="#d97706" />
                <rect x="343" y="165" width="28" height="8" fill="#d97706" />
                <text x="348" y="148" font-size="9" fill="#92400e" font-weight="bold">13A</text>
                <text x="340" y="105" font-size="11" fill="#f97316" font-weight="bold">Live &amp; Fuse (L)</text>

                <!-- Wires Coming in through Bottom Grip -->
                <!-- Main Black Outer Flex Cable -->
                <rect x="230" y="225" width="40" height="45" rx="4" fill="#0f172a" stroke="#020617" stroke-width="2" />
                <!-- Cable Grip -->
                <rect x="220" y="210" width="60" height="15" rx="3" fill="#64748b" stroke="#334155" stroke-width="1.5" />
                <circle cx="230" cy="217" r="2.5" fill="#e2e8f0" />
                <circle cx="270" cy="217" r="2.5" fill="#e2e8f0" />
                <text x="210" y="265" font-size="9" fill="#94a3b8">Cable Grip</text>

                <!-- Green/Yellow Earth Wire (Longest, runs up to top) -->
                <path d="M 245,210 Q 240,150 250,90" fill="none" stroke="#22c55e" stroke-width="6" stroke-linecap="round" />
                <path d="M 245,210 Q 240,150 250,90" fill="none" stroke="#facc15" stroke-width="6" stroke-dasharray="8,8" stroke-linecap="round" />

                <!-- Blue Neutral Wire (Runs to bottom left) -->
                <path d="M 238,210 Q 180,195 145,165" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round" />

                <!-- Brown Live Wire (Runs to cartridge fuse on right) -->
                <path d="M 262,210 Q 310,195 345,165" fill="none" stroke="#b45309" stroke-width="6" stroke-linecap="round" />
              </svg>`,
              labels: [
                {
                  id: 'live-wire-fuse',
                  name: 'Live Wire (Brown, 240 V) & Cartridge Fuse',
                  description: 'Carries current from mains supply at high potential (240 V). It connects directly to the cartridge fuse (13 A) and appliance switch so interrupting the live wire cuts off dangerous high voltage.'
                },
                {
                  id: 'neutral-wire',
                  name: 'Neutral Wire (Blue, 0 V)',
                  description: 'Completes the electrical circuit by providing a return path to the substation at zero potential (0 V).'
                },
                {
                  id: 'earth-wire',
                  name: 'Earth Wire (Green & Yellow Stripes, 0 V)',
                  description: 'Safety grounding wire connected directly to the outer conductive metal casing. Longest wire inside plug so it remains connected longest if pulled.'
                },
                {
                  id: 'earth-pin',
                  name: 'Earth Pin (Longest & Thickest Pin)',
                  description: 'Physically longer than live/neutral pins so that it opens the safety shutters in wall sockets first and establishes grounding protection before power is connected.'
                },
                {
                  id: 'cable-grip',
                  name: 'Insulated Cable Clamp / Grip',
                  description: 'Tightly clamps the thick outer PVC insulation jacket (not the individual coloured wires) to prevent wires from disconnecting if the cord is accidentally tugged.'
                }
              ]
            }
          },
          {
            id: 'sc-ch6-quiz1',
            type: 'quiz',
            title: 'Fuse Rating Selector Challenge',
            prompt: 'An electric kettle has a power rating of 2400 W, 240 V. The normal operating current is I = P/V = 2400/240 = 10 A. Which standard fuse rating must be chosen?',
            options: [
              { text: '5 A fuse', isCorrect: false, explanation: 'A 5 A fuse will melt immediately upon switching on the kettle.' },
              { text: '10 A fuse', isCorrect: false, explanation: 'A 10 A fuse has no margin for normal slight current fluctuations and will blow prematurely.' },
              { text: '13 A fuse', isCorrect: true, explanation: 'Correct! Standard rule: Fuse rating must be slightly higher than normal operating current (10 A -> 13 A fuse).' },
              { text: '30 A fuse', isCorrect: false, explanation: 'A 30 A fuse is dangerously oversized and will fail to melt during a fault, causing an electrical fire.' }
            ]
          }
        ]
      },
      {
        title: '6.6 Master Formula Cheat Sheet & Cost of Electricity Calculation',
        content: `All quantitative calculations in Chapter 6 can be solved using the master formula set below.

- **Key Units Conversion Reminder:**
  - $1\\text{ kW} = 1000\\text{ W}$
  - $1\\text{ unit of electricity} = 1\\text{ kilowatt-hour (kWh)} = 1\\text{ kW} \\times 1\\text{ hour} = 3.6 \\times 10^6\\text{ J}$.`,
        tables: [
          {
            caption: 'Master Formula Cheat Sheet for Electricity & Magnetism (Form 3)',
            headers: ['Formula Name', 'Symbolic Equation', 'Formula in Words', 'SI Units', 'Application / Purpose'],
            rows: [
              [
                '**1. Ohm\'s Law**',
                '$$V = IR$$',
                'Voltage (V) = Current (A) × Resistance (Ω)',
                'Voltage (V), Current (A), Resistance (Ω)',
                'Calculate voltage, current, or resistance in any simple electrical circuit'
              ],
              [
                '**2. Electrical Power (3 Forms)**',
                '$$P = VI = I^2 R = \\frac{V^2}{R}$$',
                'Power (W) = Voltage (V) × Current (A)',
                'Power in Watts (W)',
                'Determine the rate of electrical energy consumption or heat generation in appliances'
              ],
              [
                '**3. Electrical Energy (Joules)**',
                '$$E = Pt = VIt$$',
                'Energy (J) = Power (W) × Time (seconds)',
                'Energy in Joules (J)',
                'Calculate fundamental physical energy consumed in SI units'
              ],
              [
                '**4. Electrical Energy in Units (kWh)**',
                '$$E (\\text{kWh}) = \\frac{P (\\text{W})}{1000} \\times t (\\text{hours})$$',
                'Energy (kWh) = [ Power in Watts ÷ 1000 ] × Time in Hours',
                'Kilowatt-hours (kWh) = Units',
                'Convert appliance power and operating hours into commercial electricity bill units'
              ],
              [
                '**5. Electricity Bill Cost**',
                '$$\\text{Cost (RM)} = E (\\text{kWh}) \\times \\text{Tariff Rate}$$',
                'Total Cost (RM) = Total kWh Units Consumed × Tariff Rate per Unit',
                'Malaysian Ringgit (RM)',
                'Calculate total cost of monthly household electrical power usage'
              ],
              [
                '**6. Transformer Turns Ratio**',
                '$$\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$$',
                'Primary Voltage ÷ Secondary Voltage = Primary Turns ÷ Secondary Turns',
                'Voltage in Volts (V), Turns (dimensionless)',
                'Calculate output secondary voltage or coil winding requirements in step-up/down transformers'
              ],
              [
                '**7. Ideal Transformer Power**',
                '$$V_p I_p = V_s I_s$$',
                'Primary Voltage × Primary Current = Secondary Voltage × Secondary Current',
                'Power in Watts (W)',
                'Determine secondary current assuming zero energy loss (100% efficiency)'
              ],
              [
                '**8. Transformer Efficiency**',
                '$$\\text{Eff} = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$$',
                'Efficiency (%) = [ Output Secondary Power ÷ Input Primary Power ] × 100%',
                'Percentage (%)',
                'Quantify energy efficiency of non-ideal transformers with real energy losses'
              ],
              [
                '**9. Transmission Cable Power Loss**',
                '$$P_{\\text{loss}} = I^2 R$$',
                'Power Loss (W) = (Transmission Current)² × Cable Resistance (Ω)',
                'Watts (W)',
                'Calculate heat energy lost along National Grid overhead transmission lines'
              ]
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Electrical Energy Consumption in Kilowatt-Hours (Units)',
            formulaInWords: 'Electrical Energy (kWh) = [ Power of Appliance in Watts ÷ 1000 ] × Time in Hours',
            formula: 'E (kWh) = (Power in Watts / 1000) × Time (hours)',
            howToUse: [
              '1. Convert rated power from Watts (W) to Kilowatts (kW) by dividing by 1000.',
              '2. Express appliance usage duration in hours (convert minutes to hours by ÷ 60).',
              '3. Multiply power in kW by hours to determine units (kWh).'
            ],
            variablesExplained: [
              { symbolOrTerm: 'E (kWh)', meaning: 'Energy consumed in kilowatt-hours (units on electricity bill).' },
              { symbolOrTerm: 'Power (W)', meaning: 'Power rating of electrical appliance in Watts.' },
              { symbolOrTerm: 'Time (h)', meaning: 'Operating time in hours.' }
            ],
            wordExample: 'A 1500 W rice cooker used for 2 hours daily: Energy = (1500 ÷ 1000) kW × 2 h = 1.5 kW × 2 h = 3.0 kWh (3 units).'
          },
          {
            name: 'Electricity Cost Calculation Formula',
            formulaInWords: 'Total Cost (RM) = Total Energy Consumed in kWh × Tariff Rate per Unit (RM)',
            formula: 'Cost (RM) = E (kWh) × Tariff Rate',
            howToUse: [
              '1. Calculate total electrical units (kWh) consumed over the billing period.',
              '2. Multiply total units by the unit tariff rate in RM.',
              '3. Add costs across tariff blocks if tiered rates apply.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'Cost (RM)', meaning: 'Total electrical bill charge in Malaysian Ringgit.' },
              { symbolOrTerm: 'Tariff Rate', meaning: 'Cost charged per kWh unit (e.g., RM 0.218 per kWh).' }
            ],
            wordExample: 'If 300 units are consumed at RM 0.25 per unit: Total Cost = 300 × RM 0.25 = RM 75.00.'
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch6-calc2',
            type: 'calculator',
            title: 'TNB Electricity Cost & Energy Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'powerWatts', label: 'Appliance Power (Watts)', unit: 'W', defaultValue: 1500, step: 100 },
                { name: 'hoursPerDay', label: 'Usage per Day', unit: 'hours', defaultValue: 6, step: 1 },
                { name: 'days', label: 'Days in Month', unit: 'days', defaultValue: 30, step: 1 }
              ],
              calculate: (inputs) => {
                const { powerWatts, hoursPerDay, days } = inputs;
                const kw = powerWatts / 1000;
                const totalHours = hoursPerDay * days;
                const totalKwh = kw * totalHours;
                const estimatedCostRM = totalKwh * 0.218; // base tariff
                return {
                  result: `${totalKwh.toFixed(2)} kWh (RM ${estimatedCostRM.toFixed(2)})`,
                  steps: [
                    `Power in kW = ${powerWatts} W / 1000 = ${kw} kW`,
                    `Total Hours = ${hoursPerDay} h/day × ${days} days = ${totalHours} hours`,
                    `Total Energy (kWh) = ${kw} kW × ${totalHours} h = ${totalKwh.toFixed(2)} kWh`,
                    `Cost @ RM 0.218 per kWh = RM ${estimatedCostRM.toFixed(2)}`
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
        id: 'sc6-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'A step-down transformer has 1200 turns in the primary coil and 60 turns in the secondary coil. If the primary input voltage is 240 V, calculate: (a) the secondary output voltage, and (b) the secondary current if the primary current is 0.5 A (assuming an ideal transformer).',
        marks: 4,
        subQuestions: [
          { label: '(a)', question: 'Calculate the secondary output voltage, Vs.', marks: 2 },
          { label: '(b)', question: 'Calculate the secondary current, Is.', marks: 2 }
        ],
        answer: {
          finalAnswer: '(a) Vs = 12 V\n(b) Is = 10 A',
          fullWorking: [
            '(a) Formula: Vp / Vs = Np / Ns => 240 / Vs = 1200 / 60 => Vs = (240 × 60) / 1200 = 12 V',
            '(b) Ideal Transformer Power: Vp × Ip = Vs × Is => 240 × 0.5 = 12 × Is => Is = 120 / 12 = 10 A'
          ]
        }
      },
      {
        id: 'sc6-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'An electric oven rated 3000 W (240 V) and a television rated 200 W are operated for 4 hours daily throughout the 30 days of April. (a) Calculate the suitable fuse rating for the oven plug. (b) Calculate the total electrical energy consumed in kWh. (c) Calculate the total cost if the tariff rate is 24 sen per unit.',
        marks: 5,
        subQuestions: [
          { label: '(a)', question: 'Determine the normal operating current of the oven and select a suitable standard fuse (3A, 5A, 13A, 15A).', marks: 2 },
          { label: '(b)', question: 'Calculate total units (kWh) consumed in April.', marks: 2 },
          { label: '(c)', question: 'Calculate the electricity cost in RM.', marks: 1 }
        ],
        answer: {
          finalAnswer: '(a) Normal current = 12.5 A; Suitable fuse rating = 13 A (or 15 A)\n(b) Total energy = 384 units (kWh)\n(c) Total cost = RM 92.16',
          fullWorking: [
            '(a) I = P / V = 3000 W / 240 V = 12.5 A. Suitable fuse must be slightly higher -> 13 A fuse.',
            '(b) Total Power = 3000 W + 200 W = 3200 W = 3.2 kW. Total hours = 4 h/day × 30 days = 120 h. Energy E = 3.2 kW × 120 h = 384 kWh.',
            '(c) Cost = 384 kWh × RM 0.24 = RM 92.16.'
          ]
        }
      },
      {
        id: 'sc6-ex3',
        number: 3,
        difficulty: 'HOTS',
        question: 'A power station generates 2.4 MW of electricity. The electrical energy is transmitted to a town 50 km away through cables with a total resistance of 5 Ω. (a) Calculate the power loss in the cables if transmitted at 240 V. (b) Calculate the power loss if stepped up to 120 kV. (c) Justify why high-voltage transmission is adopted in the National Grid Network.',
        marks: 5,
        answer: {
          finalAnswer: '(a) At 240 V: Current I = 10,000 A, Power loss = 500,000,000 W (500 MW - impossible/melts cable)\n(b) At 120 kV: Current I = 20 A, Power loss = 2,000 W (2 kW = 0.002 MW)\n(c) Stepping up voltage reduces transmission current by 500 times, which reduces heat loss (P = I²R) by 250,000 times, ensuring over 99.9% transmission efficiency.',
          fullWorking: [
            '(a) Power P = 2,400,000 W. At 240 V: I = P / V = 2,400,000 / 240 = 10,000 A. Power loss Ploss = I²R = (10,000)² × 5 = 500,000,000 W.',
            '(b) At 120 kV (120,000 V): I = P / V = 2,400,000 / 120,000 = 20 A. Power loss Ploss = I²R = (20)² × 5 = 400 × 5 = 2,000 W (2 kW).',
            '(c) Conclude with P_loss = I²R relationship: High voltage reduces I, which drastically minimizes energy loss as heat.'
          ],
          scientificReasoning: 'Heat loss in conductors scales with the square of electric current (I²); thus, doubling voltage halves current and quarters power loss.'
        }
      }
    ],
    mindmap: {
      id: 'm-sc6',
      title: 'Electricity & Magnetism (KSSM Form 3)',
      children: [
        {
          id: 'm-sc6-1',
          title: 'Energy Sources & 6 Generators',
          children: [
            { id: 'm-sc6-1a', title: 'Renewable (Solar, Hydro, Wind, Biomass) vs Non-renewable (Fossil, Nuclear)' },
            { id: 'm-sc6-1b', title: '6 Power Stations: Thermal, Hydro, Solar PV, Wind, Biomass, Nuclear' }
          ]
        },
        {
          id: 'm-sc6-2',
          title: 'Induced Current & Dynamos',
          children: [
            { id: 'm-sc6-2a', title: 'Faraday Law: Relative motion cutting magnetic flux lines induces current' },
            { id: 'm-sc6-2b', title: 'Factors: Magnet strength, relative speed, number of coil turns' },
            { id: 'm-sc6-2c', title: 'Fleming Right Hand Rule: Thumb=Motion, Forefinger=Field, Middle=Induced Current' },
            { id: 'm-sc6-2d', title: 'd.c. (1 direction, 0Hz) vs a.c. (alternating, 50Hz, 240V)' }
          ]
        },
        {
          id: 'm-sc6-3',
          title: 'Transformers & Efficiency',
          children: [
            { id: 'm-sc6-3a', title: 'Step-up (Vs > Vp, Ns > Np) vs Step-down (Vs < Vp, Ns < Np)' },
            { id: 'm-sc6-3b', title: 'Turns Formula: Vp / Vs = Np / Ns | Ideal Power: Vp × Ip = Vs × Is' },
            { id: 'm-sc6-3c', title: '4 Losses: Resistance (Thick Cu wire), Eddy currents (Laminated core), Hysteresis (Soft iron), Flux leak' }
          ]
        },
        {
          id: 'm-sc6-4',
          title: 'National Grid Network',
          children: [
            { id: 'm-sc6-4a', title: 'Transmission: 11kV -> Step-up to 132kV/275kV/500kV (reduces I²R heat loss)' },
            { id: 'm-sc6-4b', title: 'Substations: Heavy Industry (33kV) -> Light (11kV) -> Commercial (415V) -> Residential (240V)' }
          ]
        },
        {
          id: 'm-sc6-5',
          title: 'Domestic Wiring & Safety',
          children: [
            { id: 'm-sc6-5a', title: 'Order: Cut-out fuse -> Meter -> Main Switch -> RCD/ELCB -> MCB -> Parallel circuits' },
            { id: 'm-sc6-5b', title: '3-Pin Plug: Live (Brown, 240V, Fuse), Neutral (Blue, 0V), Earth (Green/Yellow, 0V)' },
            { id: 'm-sc6-5c', title: 'Safety: Fuses (rating slightly > I), MCB, RCD (>30mA earth leakage trip)' }
          ]
        },
        {
          id: 'm-sc6-6',
          title: 'All Formulas & Billing',
          children: [
            { id: 'm-sc6-6a', title: 'V = IR | P = VI = I²R | E = Pt' },
            { id: 'm-sc6-6b', title: 'Energy (kWh) = (Watts / 1000) × Hours' },
            { id: 'm-sc6-6c', title: 'Cost = Units (kWh) × Tariff Rate (RM)' }
          ]
        }
      ]
    },
    experiment: {
      title: 'Investigating the Relationship Between Turns Ratio and Output Voltage in a Transformer',
      aim: 'To study the effect of the ratio of turns of primary and secondary coils on the output voltage of a step-up and step-down transformer.',
      hypothesis: 'When Ns > Np, Vs > Vp (step-up transformer); when Ns < Np, Vs < Vp (step-down transformer).',
      variables: {
        manipulated: 'Number of turns in the secondary coil (Ns).',
        responding: 'Secondary output voltage (Vs).',
        constant: 'Primary voltage (Vp = 2 V a.c.), number of turns in primary coil (Np = 100 turns), laminated soft iron C-cores.'
      },
      apparatusMaterials: ['Laminated soft iron C-cores with clip', 'Insulated copper wire', 'Low voltage a.c. power supply (2 V - 12 V)', 'a.c. Voltmeter'],
      procedure: [
        'Wind Np = 100 turns of copper wire on one side of the soft iron core (primary coil).',
        'Wind Ns = 50 turns on the secondary side (step-down configuration).',
        'Connect primary coil to 2 V a.c. power supply and secondary coil to the a.c. voltmeter.',
        'Switch on power and record the secondary voltage reading Vs.',
        'Repeat the experiment by changing Ns to 200 turns (step-up configuration).'
      ],
      observationTable: {
        headers: ['Primary Turns (Np)', 'Primary Voltage (Vp)', 'Secondary Turns (Ns)', 'Secondary Voltage (Vs)', 'Transformer Type'],
        rows: [
          ['100', '2.0 V', '50', '1.0 V', 'Step-down Transformer (Vs < Vp)'],
          ['100', '2.0 V', '200', '4.0 V', 'Step-up Transformer (Vs > Vp)']
        ]
      },
      resultsAndAnalysis: 'The measured secondary voltage is directly proportional to the turns ratio (Ns / Np) following the formula Vs = (Ns / Np) × Vp.',
      conclusion: 'Hypothesis accepted. The output voltage of a transformer depends directly on the ratio of turns of the secondary coil to the primary coil.',
      safetyPrecautions: [
        'Use ONLY alternating current (a.c.) power supply. Direct current (d.c.) will not produce changing magnetic flux and will overheat the primary coil.',
        'Ensure soft iron C-cores are clamped tightly together with zero air gap to prevent magnetic flux leakage.'
      ],
      commonMistakes: [
        'Connecting primary coil to a d.c. battery. Direct current has zero frequency, generating constant magnetic flux with zero induced voltage in secondary.',
        'Confusing Vp/Vs = Np/Ns with current ratio (current is inversely proportional: Ip/Is = Ns/Np in ideal transformers).'
      ]
    },
    answeringTechniques: [
      {
        category: 'Physics Calculations & Safety Circuits',
        title: 'Mastering Transformer, National Grid, and Household Wiring Questions',
        keyQuestionTypes: [
          'Transformer turns-ratio and current calculations (Vp/Vs = Np/Ns, VpIp = VsIs)',
          'High-voltage transmission power loss proofs (Ploss = I²R)',
          'Selecting proper fuse ratings (Fuse rating slightly > operating current)',
          'Calculating monthly electricity usage and TNB bills (kWh units × tariff)',
          'Role of Live, Neutral, and Earth wires in preventing electric shock'
        ],
        essentialKeywords: [
          'Np/Ns = Vp/Vs',
          'Kilowatt-hour (kWh) = 1 unit of electricity',
          'Divide power in Watts by 1000 before multiplying by hours (kW × h)',
          'Earth wire diverts leakage current to ground, blowing fuse and preventing electric shock',
          'Stepping up voltage reduces transmission current I, drastically minimizing I²R heat loss'
        ],
        stepByStepStrategy: [
          'In Electricity Bill calculations: Step 1: Convert ALL powers from Watts to kW (÷1000). Step 2: Calculate total hours (hours/day × number of days). Step 3: Energy = kW × hours. Step 4: Multiply total units by tariff rate in RM.',
          'For Earth wire questions: Mention that if live wire touches metal casing -> large fault current flows through earth wire to ground -> fuse melts / MCB trips -> user is protected from electric shock.',
          'For High Voltage Transmission: 1. P = VI (constant P, high V -> low I). 2. Ploss = I²R (low I -> minimal heat loss).'
        ],
        commonErrorsToAvoid: [
          'Multiplying Watts directly by hours without dividing by 1000 (forgetting kW conversion).',
          'Choosing a fuse rating that is lower than or equal to the normal operating current.',
          'Stating that transformers increase total electrical energy (transformers cannot create energy; energy is conserved Pin = Pout in ideal systems).'
        ]
      }
    ]
  },
  {
    id: 'science-ch7',
    subject: 'science',
    chapterNumber: 7,
    title: 'Energy and Power',
    theme: 'Energy and Sustainability of Life',
    summary: 'Focuses on work done, power, gravitational and elastic potential energy, kinetic energy, and the Principle of Conservation of Energy in oscillating and falling systems.',
    notes: [
      {
        title: '7.1 Work, Energy and Power',
        content: `Mechanical work is done only when an applied force causes an object to move through a displacement in the exact direction of the force:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Work Done Condition:</span> $W = F \times s$. If there is no displacement ($s = 0$) or if displacement is perpendicular to force, zero work is done ($W = 0\text{ J}$).
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Power:</span> The rate at which mechanical work is done or energy is converted per unit time ($P = W / t$).
3. <span class="text-rose-600 dark:text-rose-400 font-bold">SI Units:</span> Work is measured in Joules ($\text{J} = \text{N m}$), and Power is measured in Watts ($\text{W} = \text{J s}^{-1}$).`,
        tables: [
          {
            caption: 'Differences between Work Done and Power',
            headers: ['Physical Quantity', 'Definition in Words', 'SI Unit & Symbol', 'Key Formula in Words'],
            rows: [
              ['Work Done (W)', 'Energy transferred when a force moves an object through a distance in force direction', 'Joule (J) [1 J = 1 N m]', 'Work = Applied Force (N) × Displacement in Force Direction (m)'],
              ['Power (P)', 'The rate at which work is done or energy is consumed per unit time', 'Watt (W) [1 W = 1 J/s]', 'Power = Work Done (J) ÷ Time Taken (s)']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Work Done',
            formulaInWords: 'Work Done (Joules) = Force (Newtons) × Displacement in Direction of Force (Metres)',
            formula: 'W = F × s',
            howToUse: [
              '1. Identify the applied force in Newtons ($F = m \times g$ for lifting against gravity).',
              '2. Measure the distance moved strictly parallel to the force direction in metres.',
              '3. Multiply force by displacement.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'W (Joules, J)', meaning: 'Total mechanical work done or energy transferred.' },
              { symbolOrTerm: 'F (Newtons, N)', meaning: 'Magnitude of applied force.' },
              { symbolOrTerm: 's (Metres, m)', meaning: 'Displacement in the direction of force.' }
            ],
            wordExample: 'Pushing a box with 50 N force over 4 m of floor: Work done = 50 N × 4 m = 200 Joules.'
          },
          {
            name: 'Power Generated',
            formulaInWords: 'Power (Watts) = Work Done (Joules) ÷ Time Taken (Seconds)',
            formula: 'P = W / t = E / t',
            howToUse: [
              '1. Calculate total work done ($W$) or energy transferred ($E$) in Joules.',
              '2. Measure duration ($t$) in seconds (convert minutes to seconds by multiplying by 60).',
              '3. Divide work done by time.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'P (Watts, W)', meaning: 'Power output in Joules per second.' },
              { symbolOrTerm: 'W (Joules, J)', meaning: 'Work performed.' },
              { symbolOrTerm: 't (Seconds, s)', meaning: 'Time taken to complete the work.' }
            ],
            wordExample: 'Lifting a 200 J load in 4 seconds: Power = 200 J ÷ 4 s = 50 Watts.'
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch7-calc1',
            type: 'calculator',
            title: 'Work and Power Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'force', label: 'Force applied (F)', unit: 'N', defaultValue: 250, step: 10 },
                { name: 'distance', label: 'Distance moved (s)', unit: 'm', defaultValue: 12, step: 1 },
                { name: 'time', label: 'Time taken (t)', unit: 's', defaultValue: 5, step: 1 }
              ],
              calculate: (inputs) => {
                const { force, distance, time } = inputs;
                const work = force * distance;
                const power = work / (time || 1);
                return {
                  result: `Work: ${work} J | Power: ${power.toFixed(1)} W`,
                  steps: [
                    `Work W = F × s = ${force} N × ${distance} m = ${work} J`,
                    `Power P = W / t = ${work} J / ${time} s = ${power.toFixed(1)} W`
                  ]
                };
              }
            }
          }
        ]
      },
      {
        title: '7.2 Kinetic Energy, Potential Energy and Conservation Principle',
        content: `Energy exists in multiple interchangeable mechanical states governed by the Principle of Conservation of Energy:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Gravitational Potential Energy ($E_p$):</span> Energy possessed by an object due to its elevated vertical height above ground: $E_p = mgh$.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Kinetic Energy ($E_k$):</span> Energy possessed by an object due to its motion: $E_k = \frac{1}{2}mv^2$.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Principle of Conservation of Energy:</span> Energy cannot be created or destroyed, only converted from one form to another. In free fall: $\text{Loss in } E_p = \text{Gain in } E_k \implies v = \sqrt{2gh}$.`,
        tables: [
          {
            caption: 'Differences between Gravitational Potential Energy and Kinetic Energy',
            headers: ['Characteristic', 'Gravitational Potential Energy (Ep)', 'Kinetic Energy (Ek)'],
            rows: [
              ['Physical Cause', 'Object is elevated at a vertical height in a gravitational field', 'Object is moving with velocity / speed'],
              ['Formula in Words', 'Mass (kg) × Gravitational Acceleration (g) × Vertical Height (m)', 'Half × Mass (kg) × [ Velocity (m/s) ] squared'],
              ['State at Maximum Height', 'Maximum (Ep is highest when height h is maximum)', 'Zero (Ek = 0 when object momentarily pauses at apex)'],
              ['State at Lowest Ground Point', 'Zero (Ep = 0 when reference height h = 0)', 'Maximum (Ek is highest when object hits ground at max speed)']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Gravitational Potential Energy',
            formulaInWords: 'Gravitational Potential Energy (J) = Mass (kg) × Gravity (10 m/s²) × Vertical Height (m)',
            formula: 'Ep = m × g × h',
            howToUse: [
              '1. Ensure mass ($m$) is in kilograms (kg).',
              '2. Use gravitational acceleration $g = 10\text{ m s}^{-2}$ (or $9.8\text{ m s}^{-2}$).',
              '3. Measure vertical height ($h$) in metres above baseline ground.',
              '4. Multiply mass × gravity × height.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'm', meaning: 'Mass of object in kilograms (kg).' },
              { symbolOrTerm: 'g', meaning: 'Gravitational acceleration (approx. 10 m/s²).' },
              { symbolOrTerm: 'h', meaning: 'Vertical elevation in metres (m).' }
            ],
            wordExample: 'A 2 kg brick lifted 3 m high: Ep = 2 kg × 10 m/s² × 3 m = 60 Joules.'
          },
          {
            name: 'Kinetic Energy',
            formulaInWords: 'Kinetic Energy (J) = 0.5 × Mass (kg) × [ Velocity (m/s) ]²',
            formula: 'Ek = 1/2 × m × v²',
            howToUse: [
              '1. Ensure mass ($m$) is in kilograms.',
              '2. Determine velocity ($v$) in metres per second ($\text{m s}^{-1}$).',
              '3. Square the velocity ($v \times v$).',
              '4. Multiply by mass and divide by 2.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'm', meaning: 'Mass in kg.' },
              { symbolOrTerm: 'v', meaning: 'Speed / velocity in m/s.' }
            ],
            wordExample: 'A 1000 kg car driving at 20 m/s: Ek = 0.5 × 1000 × (20)² = 500 × 400 = 200,000 Joules (200 kJ).'
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch7-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Conservation of Mechanical Energy in an Oscillating Pendulum',
            description: 'Observe how gravitational potential energy (Ep = mgh) and kinetic energy (Ek = 1/2 mv²) continuously interchange during oscillation.',
            prompt: 'Click any labelled position below to inspect height, velocity, and the constant total mechanical energy.',
            diagramData: {
              caption: 'Figure: Simple pendulum oscillating between Position A (maximum height) and Position B (lowest point).',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Ceiling / Pivot Support -->
                <rect x="210" y="15" width="80" height="10" fill="#94a3b8" rx="2" />
                <circle cx="250" cy="25" r="4" fill="#334155" />

                <!-- Left Extreme (Position A) -->
                <line x1="250" y1="25" x2="130" y2="135" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3" />
                <circle cx="130" cy="135" r="14" fill="#f43f5e" stroke="#be123c" stroke-width="2" />
                <text x="80" y="130" font-size="10" fill="#be123c" font-weight="bold">Pos A (Apex)</text>
                <text x="70" y="145" font-size="8" fill="#9f1239">Max Ep, Ek = 0</text>

                <!-- Center Equilibrium (Position B) -->
                <line x1="250" y1="25" x2="250" y2="190" stroke="#0284c7" stroke-width="2.5" />
                <circle cx="250" cy="190" r="14" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
                <text x="220" y="218" font-size="10" fill="#0369a1" font-weight="bold">Pos B (Lowest)</text>
                <text x="212" y="232" font-size="8" fill="#075985">Max Ek, Ep = 0</text>

                <!-- Right Extreme (Position C) -->
                <line x1="250" y1="25" x2="370" y2="135" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3" />
                <circle cx="370" cy="135" r="14" fill="#f43f5e" stroke="#be123c" stroke-width="2" />
                <text x="390" y="130" font-size="10" fill="#be123c" font-weight="bold">Pos C (Apex)</text>
                <text x="390" y="145" font-size="8" fill="#9f1239">Max Ep, Ek = 0</text>

                <!-- Swing Trajectory Arc -->
                <path d="M 130,135 Q 250,210 370,135" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />

                <!-- Height Indicator line -->
                <line x1="100" y1="190" x2="400" y2="190" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2,2" />
                <line x1="100" y1="135" x2="150" y2="135" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2,2" />
                <line x1="110" y1="135" x2="110" y2="190" stroke="#f43f5e" stroke-width="2" />
                <text x="115" y="165" font-size="9" fill="#be123c" font-weight="bold">h (height)</text>
              </svg>`,
              labels: [
                {
                  id: 'apex-positions',
                  name: 'Positions A & C (Maximum Amplitude)',
                  description: 'The pendulum bob momentarily stops (v = 0 m/s), so Kinetic Energy Ek = 0. Gravitational Potential Energy Ep is at its absolute maximum (Ep = mgh).'
                },
                {
                  id: 'lowest-position',
                  name: 'Position B (Equilibrium / Lowest Point)',
                  description: 'Reference height h = 0, so Potential Energy Ep = 0. All potential energy has converted into Kinetic Energy (Ek = 1/2 mv²), reaching maximum speed v = √(2gh).'
                },
                {
                  id: 'conservation-law',
                  name: 'Principle of Conservation of Energy',
                  description: 'In the absence of air resistance, the Total Mechanical Energy (E_total = Ep + Ek) remains perfectly constant throughout every point along the swing arc.'
                }
              ]
            }
          },
          {
            id: 'sc-ch7-vid1',
            type: 'video',
            title: 'Visual Masterclass: Work, Power & Conservation of Mechanical Energy',
            description: 'Learn the core physics principles of work done against gravity, power ratings, and roller coaster energy conversions.',
            videoData: {
              youtubeId: 'w4QFJb9a8vo',
              duration: '8:50',
              channelOrSpeaker: 'KSSM Physics Mastery Hub',
              videoSummary: 'Step-by-step physics calculations solving work done (W = Fs), power output (P = W/t), and demonstrating kinetic-potential energy conversion in falling bodies and pendulums.',
              keyLearningPoints: [
                'Why work is zero if displacement is perpendicular to force',
                'How to convert units to SI (grams to kg, cm to metres, minutes to seconds)',
                'Applying Ep = mgh and Ek = 0.5 mv² to free-fall calculations',
                'How conservation of energy explains roller coaster loop velocities'
              ]
            }
          },
          {
            id: 'sc-ch7-stepper',
            type: 'stepper',
            title: 'Energy Transformation in a Simple Pendulum',
            steps: [
              { title: 'Position A (Maximum Amplitude)', detail: 'Velocity = 0. Maximum Gravitational Potential Energy (Ep = mgh), Kinetic Energy Ek = 0.' },
              { title: 'Position B (Equilibrium Position / Lowest point)', detail: 'Height h = 0. Ep = 0. Maximum Kinetic Energy (Ek = 1/2 mv^2), Maximum Velocity v.' },
              { title: 'Position C (Opposite Maximum Amplitude)', detail: 'Momentarily stops (v = 0). Ek transforms entirely back into maximum Ep.' }
            ]
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc7-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'A student of mass 50 kg climbs a flight of stairs of vertical height 4 m in 10 seconds. Calculate: (a) The work done against gravity ($g = 10\\text{ m s}^{-2}$). (b) The power generated.',
        marks: 3,
        answer: {
          finalAnswer: '(a) Work done = 2000 J\n(b) Power = 200 W',
          fullWorking: [
            'Weight Force F = mg = 50 kg × 10 m/s² = 500 N.',
            'Work done W = F × s = 500 N × 4 m = 2000 J.',
            'Power P = W / t = 2000 J / 10 s = 200 W.'
          ]
        }
      },
      {
        id: 'sc7-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A coconut of mass 1.5 kg drops from a palm tree of height 8 m. Assuming negligible air resistance and $g = 10\\text{ m s}^{-2}$, calculate the speed of the coconut just before it strikes the ground.',
        marks: 3,
        answer: {
          finalAnswer: '12.65 m/s (or 4√10 m/s)',
          fullWorking: [
            'By Principle of Conservation of Energy: Loss in Ep = Gain in Ek.',
            'mgh = 1/2 m v²  =>  v² = 2gh.',
            'v² = 2 × 10 × 8 = 160.',
            'v = √160 ≈ 12.65 m/s.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc7',
      title: 'Energy & Power (Form 3)',
      children: [
        {
          id: 'm-sc7-1',
          title: 'Work and Power',
          children: [
            { id: 'm-sc7-1a', title: 'Work W = F × s (Joules, J)' },
            { id: 'm-sc7-1b', title: 'Power P = W / t (Watts, W)' }
          ]
        },
        {
          id: 'm-sc7-2',
          title: 'Forms of Energy',
          children: [
            { id: 'm-sc7-2a', title: 'Gravitational Ep = mgh' },
            { id: 'm-sc7-2b', title: 'Kinetic Ek = 1/2 mv^2' },
            { id: 'm-sc7-2c', title: 'Elastic Ep = 1/2 kx^2' }
          ]
        },
        {
          id: 'm-sc7-3',
          title: 'Conservation Principle',
          children: [
            { id: 'm-sc7-3a', title: 'Total energy in isolated system is constant' },
            { id: 'm-sc7-3b', title: 'Falling object: mgh = 1/2 mv^2 (v = √2gh)' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Formulas & Unit Conversions',
        title: 'Solving Mechanics & Conservation of Energy Questions',
        keyQuestionTypes: ['Calculating Work and Power from force and vertical heights', 'Velocity from energy conservation', 'Pendulum energy conversion points'],
        essentialKeywords: [
          'Displacement in the DIRECTION of force',
          'Gravitational force F = mg (mass MUST be in kg)',
          'Loss in Gravitational Ep = Gain in Kinetic Ek'
        ],
        stepByStepStrategy: [
          'If mass is given in grams (g), ALWAYS convert to kilograms (kg) by dividing by 1000.',
          'If time is given in minutes, convert to seconds by multiplying by 60 before calculating Power ($P = W/t$).'
        ],
        commonErrorsToAvoid: [
          'Using distance travelled horizontally instead of vertical height when calculating work done against gravity.'
        ]
      }
    ]
  },
  {
    id: 'science-ch8',
    subject: 'science',
    chapterNumber: 8,
    title: 'Radioactivity',
    theme: 'Energy and Sustainability of Life',
    summary: 'Details the history of radioactivity, radioactive decay, alpha/beta/gamma radiation comparison, half-life calculation, background radiation, and ionizing radiation applications.',
    notes: [
      {
        title: '8.1 Discovery and Types of Ionizing Radiation',
        content: `Radioactivity is the spontaneous and random disintegration of an unstable atomic nucleus accompanied by ionizing radiation to achieve nuclear stability:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Alpha Particle ($\alpha$):</span> Helium nucleus ($^4_2\text{He}$) carrying a $+2$ charge; high ionization power, lowest penetrating power (blocked by a sheet of paper).
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Beta Particle ($\beta$):</span> High-speed electron ($^0_{-1}\text{e}$) carrying a $-1$ charge; moderate ionization, medium penetrating power (blocked by 3-5 mm aluminum).
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Gamma Ray ($\gamma$):</span> High-frequency neutral electromagnetic wave; lowest ionization, highest penetrating power (attenuated by thick lead or dense concrete).`,
        tables: [
          {
            caption: 'Differences between Alpha, Beta, and Gamma Radiation',
            headers: ['Property', 'Alpha Radiation (α)', 'Beta Radiation (β)', 'Gamma Ray (γ)'],
            rows: [
              ['Physical Nature', 'Helium nucleus (4/2 He)', 'High-speed electron (0/-1 e)', 'High-frequency electromagnetic wave'],
              ['Electric Charge', '+2 (Positive)', '-1 (Negative)', '0 (Neutral / No charge)'],
              ['Speed of Emission', 'Slow (~10% speed of light)', 'Fast (~90% speed of light)', 'Speed of light (3 × 10⁸ m/s)'],
              ['Ionizing Capability', 'Highest (heavily knocks electrons)', 'Medium', 'Lowest'],
              ['Penetrating Capability', 'Lowest (stopped by thin paper or skin)', 'Medium (stopped by 3-5 mm aluminium)', 'Highest (stopped only by thick lead / concrete)'],
              ['Electric Field Deflection', 'Slightly deflected towards Negative plate', 'Sharply deflected towards Positive plate', 'Undeflected (travels straight ahead)']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch8-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Penetrating Power & Shielding of Alpha, Beta, and Gamma Rays',
            description: 'Compare the relative penetration depth of Alpha (blocked by paper), Beta (blocked by aluminium), and Gamma rays (blocked by thick lead).',
            prompt: 'Click any radiation type below to inspect charge, mass, ionization power, and magnetic/electric deflection.',
            diagramData: {
              caption: 'Figure: Penetrating abilities of Alpha particles, Beta particles, and Gamma rays through barriers.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Radioactive Source (Left) -->
                <rect x="25" y="40" width="40" height="150" fill="#475569" rx="4" />
                <circle cx="45" cy="115" r="12" fill="#f59e0b" stroke="#d97706" stroke-width="2" />
                <text x="37" y="119" font-size="12" fill="#ffffff" font-weight="bold">☢</text>
                <text x="18" y="210" font-size="9" fill="#475569" font-weight="bold">Radioactive Source</text>

                <!-- Barriers -->
                <!-- Paper Sheet (Thin) -->
                <rect x="150" y="30" width="8" height="170" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
                <text x="135" y="218" font-size="10" fill="#475569" font-weight="bold">Paper Sheet</text>

                <!-- Aluminium Plate (3-5mm) -->
                <rect x="270" y="30" width="16" height="170" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
                <text x="250" y="218" font-size="10" fill="#334155" font-weight="bold">Aluminium (5mm)</text>

                <!-- Lead Block (Thick) -->
                <rect x="400" y="30" width="40" height="170" fill="#64748b" stroke="#1e293b" stroke-width="2" />
                <text x="400" y="218" font-size="10" fill="#0f172a" font-weight="bold">Thick Lead</text>

                <!-- Alpha Ray (Red) -->
                <line x1="65" y1="70" x2="150" y2="70" stroke="#ef4444" stroke-width="4" />
                <polygon points="144,66 152,70 144,74" fill="#ef4444" />
                <text x="75" y="62" font-size="10" fill="#dc2626" font-weight="bold">Alpha (α) — Blocked</text>

                <!-- Beta Ray (Blue) -->
                <line x1="65" y1="115" x2="270" y2="115" stroke="#3b82f6" stroke-width="3" stroke-dasharray="6,2" />
                <polygon points="264,111 272,115 264,119" fill="#3b82f6" />
                <text x="75" y="107" font-size="10" fill="#2563eb" font-weight="bold">Beta (β) — Passes Paper, Blocked by Al</text>

                <!-- Gamma Ray (Purple Wave) -->
                <path d="M 65,160 Q 90,150 115,160 T 165,160 T 215,160 T 265,160 T 315,160 T 365,160 T 415,160" fill="none" stroke="#8b5cf6" stroke-width="2.5" />
                <polygon points="412,156 420,160 412,164" fill="#8b5cf6" />
                <text x="75" y="152" font-size="10" fill="#7c3aed" font-weight="bold">Gamma (γ) — High Penetration (Attenuated by Lead)</text>
              </svg>`,
              labels: [
                {
                  id: 'alpha-ray',
                  name: 'Alpha Particle (α, Helium Nucleus ⁴₂He)',
                  description: 'Carries +2 charge, high mass, and the strongest ionizing ability. However, its low speed and large size mean it is stopped completely by a single sheet of paper or outer skin layer.'
                },
                {
                  id: 'beta-ray',
                  name: 'Beta Particle (β, Fast Electron ⁰₋₁e)',
                  description: 'Carries -1 charge, very small mass, and moderate ionizing ability. Easily penetrates paper but is absorbed and stopped by 3-5 mm of aluminium.'
                },
                {
                  id: 'gamma-ray',
                  name: 'Gamma Ray (γ, EM Wave)',
                  description: 'Neutral electromagnetic photon travelling at the speed of light. Weakest ionizing ability but highest penetrating ability, requiring several centimetres of dense lead or concrete to absorb.'
                }
              ]
            }
          },
          {
            id: 'sc-ch8-vid1',
            type: 'video',
            title: 'Visual Masterclass: Radioactivity, Half-Life & Nuclear Safety',
            description: 'Learn the physics of spontaneous nuclear decay, half-life equations, background radiation, and medical radiotherapy.',
            videoData: {
              youtubeId: 'kWbC84s79bY',
              duration: '8:40',
              channelOrSpeaker: 'KSSM Nuclear Science Series',
              videoSummary: 'Explore the difference between alpha, beta, and gamma radiation, calculate half-life decay chains, and understand how Cobalt-60 is used in cancer treatments and Carbon-14 in radiocarbon dating.',
              keyLearningPoints: [
                'Why unstable isotopes undergo spontaneous alpha, beta, or gamma decay',
                'How to use the half-life equation: N = N0 × (1/2)^n',
                'How Geiger-Müller counter detects ionizing radiation',
                'Radiation safety measures: Lead aprons, tongs, and dosimeter badges'
              ]
            }
          },
          {
            id: 'sc-ch8-quiz1',
            type: 'quiz',
            title: 'Penetrating Power Challenge',
            prompt: 'Which radiation can pass through a sheet of paper and thin aluminium but is absorbed by thick lead?',
            options: [
              { text: 'Alpha radiation (α)', isCorrect: false, explanation: 'Alpha is stopped immediately by a single sheet of paper.' },
              { text: 'Beta radiation (β)', isCorrect: false, explanation: 'Beta is stopped by thin aluminium.' },
              { text: 'Gamma ray (γ)', isCorrect: true, explanation: 'Correct! Gamma has very high penetrating power and requires thick lead or concrete to absorb.' }
            ]
          }
        ]
      },
      {
        title: '8.2 Half-Life Calculations and Beneficial Applications',
        content: `The **half-life** ($T_{1/2}$) of a radioisotope is the time required for half of the unstable radioactive nuclei in a sample to decay spontaneously into stable daughter nuclei.

- **Core Principles:**
  - Decay is random and spontaneous (unaffected by temperature, pressure, or chemical bonding).
  - Activity decreases exponentially: $100\\% \\xrightarrow{1\\;T_{1/2}} 50\\% \\xrightarrow{2\\;T_{1/2}} 25\\% \\xrightarrow{3\\;T_{1/2}} 12.5\\% \\xrightarrow{4\\;T_{1/2}} 6.25\\%$.`,
        tables: [
          {
            caption: 'Summary of Key Radioisotopes in KSSM Form 3 Syllabus & Their Specific Applications',
            headers: ['Radioisotope & Symbol', 'Radiation Emitted', 'Field of Use', 'Specific Application & Working Principle'],
            rows: [
              ['**Cobalt-60 ($^{60}_{27}\\text{Co}$)**', 'Gamma rays ($\\gamma$)', '**Medicine / Radiotherapy**', 'Kills cancerous tumor cells in targeted radiotherapy; sterilizes surgical equipment, gloves, and syringes without heat.'],
              ['**Iodine-131 ($^{131}_{53}\\text{I}$)**', 'Beta ($\\beta$) & Gamma ($\\gamma$)', '**Medicine / Endocrinology**', 'Injected as a tracer to diagnose thyroid gland metabolic activity and treat hyperthyroidism or thyroid tumors.'],
              ['**Technetium-99m ($^{99m}_{43}\\text{Tc}$)**', 'Gamma rays ($\\gamma$)', '**Medicine / Diagnostics**', 'Short half-life (6 hours) organ tracer used in medical imaging of bones, brain, heart, and lungs with minimal patient radiation dose.'],
              ['**Phosphorus-32 ($^{32}_{15}\\text{P}$)**', 'Beta particles ($\\beta$)', '**Agriculture**', 'Added to phosphate fertilizers to trace the rate of phosphorus absorption by plant roots and optimize crop yields.'],
              ['**Carbon-14 ($^{14}_{6}\\text{C}$)**', 'Beta particles ($\\beta$)', '**Archaeology / Geology**', '**Radiocarbon dating** to determine the geological age of ancient organic fossils, wood, and archaeological artifacts (half-life = 5,730 years).'],
              ['**Strontium-90 ($^{90}_{38}\\text{Sr}$)**', 'Beta particles ($\\beta$)', '**Industry / Manufacturing**', 'Controls and monitors the thickness of manufactured paper, plastic films, and aluminium sheets in automated rolling mills.'],
              ['**Sodium-24 ($^{24}_{11}\\text{Na}$)**', 'Beta ($\\beta$) & Gamma ($\\gamma$)', '**Engineering / Utilities**', 'Injected into underground water pipes to detect subterranean leakages without excavating the entire pipeline.']
            ]
          },
          {
            caption: 'Radiation Measurement Units, Detection Instruments & Safety Precautions',
            headers: ['Aspect', 'Scientific Unit / Device', 'Description / Function'],
            rows: [
              ['**Radioactivity SI Unit**', '**Becquerel (Bq)**', '1 Bq = 1 nuclear decay disintegration per second ($1\\text{ dps}$). (Old unit: Curie, $\\text{Ci}$).'],
              ['**Absorbed Dose Unit**', '**Gray (Gy)**', 'Measures energy absorbed per unit mass ($1\\text{ Gy} = 1\\text{ J kg}^{-1}$).'],
              ['**Biological Dose Equivalent**', '**Sievert (Sv) / mSv**', 'Quantifies biological risk and tissue damage caused by radiation on the human body.'],
              ['**Radiation Detectors**', '**Geiger-Müller (G-M) Tube, Photographic Badge, Cloud Chamber**', 'G-M tube detects pulses of ionizing current; dosimeter badges record cumulative exposure for nuclear lab personnel.'],
              ['**Safety Handling Rules**', '**Lead Shielding, Robotic Tongs, Biohazard Badges**', 'Store radioisotopes in thick lead containers; handle radioactive sources using long-handled tongs; wear lead aprons and dosimeter badges.']
            ]
          }
        ],
        keyFormulas: [
          {
            name: 'Radioactive Half-Life Decay',
            formulaInWords: 'Remaining Quantity = Initial Quantity ÷ (2 to the power of number of half-lives)',
            formula: 'N = N0 × (1/2)^n',
            howToUse: [
              '1. Calculate the number of elapsed half-lives: n = Total Elapsed Time ÷ Half-Life (T1/2).',
              '2. Halve the initial mass/activity n successive times, or divide by 2^n.',
              '3. State the remaining mass or activity with corresponding units.'
            ],
            variablesExplained: [
              { symbolOrTerm: 'N', meaning: 'Remaining mass or activity after decay.' },
              { symbolOrTerm: 'N0', meaning: 'Initial starting mass or activity before decay.' },
              { symbolOrTerm: 'n', meaning: 'Number of half-lives elapsed (Total Time / T1/2).' },
              { symbolOrTerm: 'T1/2', meaning: 'Duration of one half-life period.' }
            ],
            wordExample: 'A 64 g sample with a half-life of 15 hours after 60 hours: n = 60 ÷ 15 = 4 half-lives. Remaining = 64 ÷ 2⁴ = 64 ÷ 16 = 4 grams.'
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch8-calc1',
            type: 'calculator',
            title: 'Interactive Half-Life Calculator',
            calculatorConfig: {
              inputs: [
                { name: 'initialMass', label: 'Initial Mass', unit: 'g', defaultValue: 80, step: 10 },
                { name: 'halfLife', label: 'Half-life Duration', unit: 'days', defaultValue: 5, step: 1 },
                { name: 'totalDays', label: 'Total Elapsed Time', unit: 'days', defaultValue: 15, step: 1 }
              ],
              calculate: (inputs) => {
                const { initialMass, halfLife, totalDays } = inputs;
                const n = totalDays / (halfLife || 1);
                const remaining = initialMass / Math.pow(2, n);
                return {
                  result: `${remaining.toFixed(2)} g remaining (after ${n.toFixed(1)} half-lives)`,
                  steps: [
                    `Number of half-lives n = Total time / T1/2 = ${totalDays} / ${halfLife} = ${n.toFixed(1)}`,
                    `Remaining fraction = (1/2)^${n.toFixed(1)} = ${(1 / Math.pow(2, n)).toFixed(4)}`,
                    `Remaining Mass = ${initialMass} g × (1/2)^${n.toFixed(1)} = ${remaining.toFixed(2)} g`
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
        id: 'sc8-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State the type of radiation used to monitor the thickness of paper in manufacturing factories, and explain why.',
        marks: 2,
        answer: {
          finalAnswer: 'Beta radiation (β). This is because alpha radiation cannot penetrate paper at all, while gamma radiation penetrates paper completely without any change in intensity. Beta radiation is partially absorbed by paper, allowing detectors to sense minute variations in thickness.',
          fullWorking: [
            'Identify isotope emission: Beta particle.',
            'Explain suitability: Intermediate penetrating power allows sensitive thickness feedback.'
          ]
        }
      },
      {
        id: 'sc8-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A sample of Sodium-24 has an initial mass of 64 g. If its half-life is 15 hours, calculate the mass of Sodium-24 remaining after 60 hours.',
        marks: 3,
        answer: {
          finalAnswer: '4 g',
          fullWorking: [
            'Number of half-lives n = Total time / Half-life = 60 hours / 15 hours = 4 half-lives.',
            'Decay steps: 64 g -> 32 g (1) -> 16 g (2) -> 8 g (3) -> 4 g (4).',
            'Remaining mass = 4 g.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc8',
      title: 'Radioactivity (Form 3)',
      children: [
        {
          id: 'm-sc8-1',
          title: 'Types of Radiations',
          children: [
            { id: 'm-sc8-1a', title: 'Alpha (α): High ionisation, stopped by paper' },
            { id: 'm-sc8-1b', title: 'Beta (β): Medium ionisation, stopped by aluminium' },
            { id: 'm-sc8-1c', title: 'Gamma (γ): Low ionisation, stopped by thick lead' }
          ]
        },
        {
          id: 'm-sc8-2',
          title: 'Half-Life Concept',
          children: [
            { id: 'm-sc8-2a', title: 'Time taken for half the nuclei to disintegrate' },
            { id: 'm-sc8-2b', title: 'Formula: Remaining = Initial × (1/2)^n' }
          ]
        },
        {
          id: 'm-sc8-3',
          title: 'Applications',
          children: [
            { id: 'm-sc8-3a', title: 'Medicine: Co-60 (Cancer), I-131 (Thyroid)' },
            { id: 'm-sc8-3b', title: 'Industry: Beta for paper thickness' },
            { id: 'm-sc8-3c', title: 'Archaeology: Carbon-14 dating' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Nuclear Physics & Half-Life Step Solving',
        title: 'Answering Radiation Deflection & Half-Life Questions',
        keyQuestionTypes: ['Electric/magnetic field deflection diagrams', 'Step-by-step half-life deduction', 'Matching radioisotope to industrial usage'],
        essentialKeywords: [
          'Alpha (+2) attracted to Negative plate (slight deflection due to heavier mass)',
          'Beta (-1) attracted to Positive plate (sharp deflection due to light mass)',
          'Gamma (neutral) travels straight undeflected',
          'T1/2 = Half-life time'
        ],
        stepByStepStrategy: [
          'For half-life problems: Always write out the arrow sequence: Initial -> ÷2 -> ÷2 -> ÷2 to avoid exponent calculation slips.'
        ],
        commonErrorsToAvoid: [
          'Confusing Cobalt-60 (radiotherapy / sterilization) with Carbon-14 (fossil dating).'
        ]
      }
    ]
  },
  {
    id: 'science-ch9',
    subject: 'science',
    chapterNumber: 9,
    title: 'Space Weather',
    theme: 'Earth and Space Exploration',
    summary: 'Covers the Sun structure (photosphere, chromosphere, corona), solar phenomena (prominence, solar flare, sunspots, CME, solar wind), and space weather effects on Earth.',
    notes: [
      {
        title: '9.1 Structure and Phenomena of the Sun',
        content: `The **Sun** is a medium-sized yellow dwarf star powered by continuous hydrogen-to-helium thermonuclear fusion in its core ($15,000,000\\;^\\circ\\text{C}$).

- **Solar Dynamics:**
  - The Sun’s internal energy travels outwards through radiation and convection before reaching the 3 atmospheric layers.
  - Solar magnetic activity fluctuates on a predictable **11-year solar cycle**.`,
        tables: [
          {
            caption: 'Comparison of the 6 Structural Layers of the Sun (Internal & Atmospheric)',
            headers: ['Layer Name', 'Region', 'Approx. Temperature', 'Key Physical Mechanism & Characteristics'],
            rows: [
              ['**1. Thermonuclear Core**', 'Innermost interior', '$\\approx 15,000,000\\;^\\circ\\text{C}$', 'Extreme pressure and heat fuse hydrogen nuclei into helium, producing all solar heat and electromagnetic radiation.'],
              ['**2. Radiative Zone**', 'Middle interior', '$2,000,000 - 7,000,000\\;^\\circ\\text{C}$', 'Energy moves slowly outward in the form of high-energy gamma and X-ray photons over hundreds of thousands of years.'],
              ['**3. Convective Zone**', 'Outer interior', '$\\approx 2,000,000\\;^\\circ\\text{C}$', 'Hot plasma boils and rises to the surface in giant convection cells, cooling before sinking back down.'],
              ['**4. Photosphere**', 'Innermost atmosphere (Surface)', '$\\approx 5,500\\;^\\circ\\text{C}$', '**Visible surface of the Sun** from Earth. Sunspots appear here as cooler dark magnetic patches ($\\approx 4,000\\;^\\circ\\text{C}$).'],
              ['**5. Chromosphere**', 'Middle atmosphere', '$4,000 - 10,000\\;^\\circ\\text{C}$', 'Reddish layer visible only during total solar eclipses or via hydrogen-alpha optical filters.'],
              ['**6. Corona**', 'Outermost atmosphere', '$> 1,500,000\\;^\\circ\\text{C}$', 'Extensive pearly-white crown extending millions of kilometres into space; source of escaping high-speed **solar wind**.']
            ]
          },
          {
            caption: 'Comparison of Major Solar Phenomena & Their Terrestrial Impacts',
            headers: ['Solar Phenomenon', 'Physical Mechanism & Description', 'Duration & Speed', 'Earth / Space Impact'],
            rows: [
              ['**Sunspots (*Tompok Matahari*)**', 'Cooler localized dark patches on the photosphere caused by concentrated magnetic flux tubes inhibiting convection', 'Persists for days to months (11-year cycle)', 'Indicates overall solar activity levels; peak sunspot counts correlate with intense solar storms'],
              ['**Prominence (*Semarak Suria*)**', 'Huge luminous loops of glowing dense plasma anchored to the photosphere and suspended along magnetic field lines', 'Can remain stable for weeks', 'If destabilized, erupts outward into space, feeding massive coronal mass ejections'],
              ['**Solar Flare (*Nyalaan Suria*)**', 'Sudden catastrophic release of stored magnetic energy emitting intense X-rays, UV radiation, and relativistic protons', 'Minutes to hours (travels at speed of light, $c$)', 'Reaches Earth in 8.3 minutes; causes sudden ionospheric disturbances and high-frequency (HF) aviation radio blackouts'],
              ['**Coronal Mass Ejection (CME)**', 'Violent ejection of billions of tons of magnetized solar plasma and magnetic fields into interplanetary space', 'Travels at 300–3,000 km/s (takes 1–3 days to reach Earth)', 'Triggers major **geomagnetic storms**, trips high-voltage electrical grids, damages satellite electronics, and induces brilliant polar auroras'],
              ['**Solar Wind (*Angin Suria*)**', 'Continuous outward stream of high-energy charged particles (protons, electrons) escaping from the corona into space', 'Continuous flow (~400 km/s)', 'Interacts constantly with Earth’s magnetosphere; creates comet tails pointing away from the Sun']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch9-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Internal Structure and Atmospheric Layers of the Sun',
            description: 'Explore the Sun from its thermonuclear core to the radiant Photosphere, Chromosphere, and outermost Corona.',
            prompt: 'Click any labelled layer or solar phenomenon below to inspect its temperature, physical properties, and space weather impact.',
            diagramData: {
              caption: 'Figure: Cross-sectional anatomy of the Sun showing core fusion, convective dynamics, and atmospheric phenomena.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Corona (Outermost pearly halo) -->
                <circle cx="210" cy="120" r="110" fill="#fef08a" opacity="0.35" stroke="#eab308" stroke-dasharray="4,4" />
                <text x="315" y="45" font-size="10" fill="#a16207" font-weight="bold">Corona (~1,500,000°C)</text>

                <!-- Chromosphere (Reddish atmosphere) -->
                <circle cx="210" cy="120" r="90" fill="#fed7aa" stroke="#f97316" stroke-width="2" />
                <text x="285" y="70" font-size="9" fill="#c2410c" font-weight="bold">Chromosphere</text>

                <!-- Photosphere (Visible surface) -->
                <circle cx="210" cy="120" r="75" fill="#fde047" stroke="#ca8a04" stroke-width="2" />
                <text x="245" y="95" font-size="9" fill="#854d0e" font-weight="bold">Photosphere (5,500°C)</text>

                <!-- Convection Zone -->
                <circle cx="210" cy="120" r="58" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
                
                <!-- Radiation Zone -->
                <circle cx="210" cy="120" r="40" fill="#f87171" stroke="#dc2626" stroke-width="1.5" />

                <!-- Thermonuclear Core -->
                <circle cx="210" cy="120" r="22" fill="#ffffff" stroke="#ef4444" stroke-width="2" />
                <text x="198" y="124" font-size="9" fill="#dc2626" font-weight="bold">Core</text>

                <!-- Solar Prominence Loop -->
                <path d="M 125,120 Q 90,60 145,70" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />
                <text x="60" y="55" font-size="10" fill="#dc2626" font-weight="bold">Prominence Loop</text>

                <!-- Sunspot on surface -->
                <circle cx="160" cy="140" r="4" fill="#451a03" />
                <text x="80" y="165" font-size="9" fill="#78350f" font-weight="bold">Sunspot (4000°C)</text>
                <line x1="125" y1="160" x2="155" y2="142" stroke="#78350f" stroke-width="1.5" />

                <!-- Solar Flare Burst -->
                <polygon points="275,140 310,135 295,150 325,155 285,160" fill="#f97316" stroke="#ea580c" />
                <text x="325" y="170" font-size="10" fill="#c2410c" font-weight="bold">Solar Flare &amp; CME</text>
              </svg>`,
              labels: [
                {
                  id: 'sun-core',
                  name: 'Thermonuclear Core (15,000,000 °C)',
                  description: 'Extreme gravitational pressure and temperature sustain hydrogen nuclear fusion into helium, generating the immense light and thermal power of the entire Solar System.'
                },
                {
                  id: 'photosphere',
                  name: 'Photosphere (~5,500 °C)',
                  description: 'The bright visible surface layer of the Sun that emits sunlight. Sunspots appear here as cooler localized dark areas caused by concentrated magnetic flux tubes.'
                },
                {
                  id: 'chromosphere',
                  name: 'Chromosphere (4,000 - 10,000 °C)',
                  description: 'The middle reddish atmospheric layer positioned above the photosphere, visible during solar eclipses when the brighter photosphere is blocked.'
                },
                {
                  id: 'corona',
                  name: 'Corona (> 1,000,000 °C)',
                  description: 'Outermost halo-like plasma crown extending millions of kilometres into space. Emits high-energy solar wind streams into the solar system.'
                },
                {
                  id: 'prominence-flare',
                  name: 'Prominences & Coronal Mass Ejections (CME)',
                  description: 'Prominences are huge loops of anchored plasma. Solar flares and CMEs violently blast high-energy X-rays and billions of tons of magnetized plasma toward Earth, inducing geomagnetic storms and auroras.'
                }
              ]
            }
          },
          {
            id: 'sc-ch9-vid1',
            type: 'video',
            title: 'Visual Masterclass: Sun Structure, Solar Storms & Earth Magnetosphere',
            description: 'Explore thermonuclear fusion inside the Sun, solar flare physics, and how Earth magnetic shield creates polar auroras.',
            videoData: {
              youtubeId: 'b22HKFMIfWo',
              duration: '8:15',
              channelOrSpeaker: 'KSSM Astronomy & Space Science',
              videoSummary: 'Spectacular NASA and solar observatory footage showing sunspot cycles, coronal mass ejections crossing space, and geomagnetic storms impacting modern satellite infrastructure.',
              keyLearningPoints: [
                'The 6 structural layers of the Sun from core to outer corona',
                'Why sunspots follow an 11-year solar activity cycle',
                'How Earth magnetosphere shields the biosphere from lethal cosmic rays',
                'Why collisions of solar plasma with oxygen and nitrogen create green and purple auroras'
              ]
            }
          },
          {
            id: 'sc-ch9-quiz1',
            type: 'quiz',
            title: 'Atmospheric Layers Check',
            prompt: 'Which is the outermost layer of the Sun atmosphere, visible as a pearly white crown during a total solar eclipse?',
            options: [
              { text: 'Photosphere', isCorrect: false, explanation: 'Photosphere is the visible disk surface.' },
              { text: 'Chromosphere', isCorrect: false, explanation: 'Chromosphere is the inner reddish atmospheric layer.' },
              { text: 'Corona', isCorrect: true, explanation: 'Correct! The Corona is the outermost crown-like plasma atmosphere.' }
            ]
          }
        ]
      },
      {
        title: '9.2 Earth Magnetosphere and Space Weather Impacts',
        content: `Space weather encompasses dynamic space environmental conditions driven by solar activity:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Earth Magnetosphere:</span> A teardrop-shaped magnetic barrier deflecting cosmic rays and lethal solar wind particles away from Earth.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Auroras:</span> Spectacular luminous glows near polar skies formed when solar wind particles collide with nitrogen and oxygen gas in the thermosphere.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Technological Disruptions:</span> Severe geomagnetic storms induce ground currents that overload power grids and disrupt satellite navigation and aviation radio communications.`,
        interactiveElements: [
          {
            id: 'sc-ch9-reveal1',
            type: 'reveal',
            title: 'How are Auroras Formed?',
            prompt: 'Click to reveal the physical mechanism of polar auroras.',
            revealedContent: 'When charged particles from the solar wind are funnelled down Earth’s magnetic field lines towards the North and South magnetic poles, they collide with oxygen and nitrogen atoms in the upper thermosphere. This collision excites the gas atoms, which emit beautiful luminous light (green for oxygen, pink/purple for nitrogen) when returning to ground state.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc9-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State the layer of the Sun where sunspots occur, and explain why sunspots appear darker than the rest of the solar surface.',
        marks: 2,
        answer: {
          finalAnswer: 'Sunspots occur on the photosphere. They appear darker because their temperature (around 4000 °C) is significantly cooler than the surrounding photosphere (around 5500 °C) due to intense localized magnetic fields preventing heat convection.',
          fullWorking: [
            'Identify layer: Photosphere.',
            'Explain temperature contrast: Cooler region appears darker against bright background.'
          ]
        }
      },
      {
        id: 'sc9-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'Explain two adverse impacts of a severe Coronal Mass Ejection (CME) reaching Earth.',
        marks: 2,
        answer: {
          finalAnswer: '1. It can induce strong electric currents in long-distance electrical power grids, damaging transformers and causing widespread power outages.\n2. It disrupts satellite electronics and ionospheric radio signals, resulting in GPS navigation inaccuracies and telecommunication blackouts.',
          fullWorking: [
            'Mention power grid / transformer overload (GIC).',
            'Mention satellite navigation / radio signal disruption.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc9',
      title: 'Space Weather (Form 3)',
      children: [
        {
          id: 'm-sc9-1',
          title: 'Structure of the Sun',
          children: [
            { id: 'm-sc9-1a', title: 'Internal: Core (Fusion), Radiation, Convection' },
            { id: 'm-sc9-1b', title: 'Atmosphere: Photosphere (Surface), Chromosphere, Corona (Outer crown)' }
          ]
        },
        {
          id: 'm-sc9-2',
          title: 'Solar Phenomena',
          children: [
            { id: 'm-sc9-2a', title: 'Sunspots (Cooler dark areas, 11-year cycle)' },
            { id: 'm-sc9-2b', title: 'Prominence (Loops), Solar Flare (Radiation blast), CME (Plasma blast)' }
          ]
        },
        {
          id: 'm-sc9-3',
          title: 'Space Weather & Earth',
          children: [
            { id: 'm-sc9-3a', title: 'Magnetosphere: Shield deflecting solar wind' },
            { id: 'm-sc9-3b', title: 'Impacts: Aurora at poles, GPS & power grid disruptions' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Astrophysics & Structured Answering',
        title: 'Mastering Sun Layers and Space Weather Effects',
        keyQuestionTypes: ['Matching solar layers from inside out', 'Explaining magnetosphere function', 'Space weather consequences on modern infrastructure'],
        essentialKeywords: [
          'Core → Radiation zone → Convection zone → Photosphere → Chromosphere → Corona',
          'Earth’s magnetosphere deflects harmful charged cosmic particles',
          'Auroras formed by collisions between charged solar particles and atmospheric gas molecules'
        ],
        stepByStepStrategy: [
          'Memorize layer sequence from inside out: Core -> Radiation -> Convection -> Photosphere (surface) -> Chromosphere -> Corona.'
        ],
        commonErrorsToAvoid: [
          'Stating that the corona is an internal layer (Corona is the outermost solar atmospheric layer).'
        ]
      }
    ]
  },
  {
    id: 'science-ch10',
    subject: 'science',
    chapterNumber: 10,
    title: 'Space Exploration',
    theme: 'Earth and Space Exploration',
    summary: 'Examines the historical development of astronomy (geocentric vs heliocentric models), space exploration milestones, satellites, telescopes, remote sensing technology, and Malaysia space agency contributions.',
    notes: [
      {
        title: '10.1 Historical Development of Solar System Models',
        content: `Human cosmological understanding developed through historical observations and technological revolutions:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Geocentric Model (Ptolemy & Aristotle):</span> Postulated that Earth was stationary at the cosmological center with the Sun, Moon, and planets circling Earth in circular orbits.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Heliocentric Model (Copernicus):</span> Placed the Sun at the center of the solar system with Earth and planets revolving in circular orbits.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Modern Heliocentric Model (Kepler & Galileo):</span> Kepler mathematically proved orbits are elliptical, while Galileo used telescope observations of Venus phases and Jupiter moons as empirical evidence.`,
        tables: [
          {
            caption: 'Differences between Geocentric and Heliocentric Astronomical Models',
            headers: ['Comparative Aspect', 'Geocentric Model', 'Heliocentric Model (Modern)'],
            rows: [
              ['Center of the System', 'Earth is stationary at the center of the universe', 'Sun is situated at the focal center of the solar system'],
              ['Key Proponents / Astronomers', 'Ptolemy and Aristotle (Ancient Greek cosmology)', 'Nicolaus Copernicus, Johannes Kepler, Galileo Galilei'],
              ['Planetary Orbital Shape', 'Assumed perfectly circular orbits with epicycles', 'Elliptical planetary orbits governed by Keplerian laws of motion'],
              ['Observational Validation', 'Based on naked-eye optical perception of Sun rising and setting', 'Confirmed via astronomical telescope (phases of Venus, Jupiter moons)']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch10-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Historical Evolution of Solar System Models (Geocentric vs Heliocentric)',
            description: 'Compare Ptolemy’s Earth-centered Geocentric universe with Copernicus & Kepler’s Sun-centered Heliocentric orbital system.',
            prompt: 'Click either model below to inspect planetary orbits, retrogrades, and astronomical observation milestones.',
            diagramData: {
              caption: 'Figure: Comparison of Ptolemy Geocentric model (Earth-centered) vs Keplerian Modern Heliocentric model (Sun-centered elliptical orbits).',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Divider line -->
                <line x1="250" y1="20" x2="250" y2="220" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4" />

                <!-- Left: Geocentric Model (Ptolemy) -->
                <text x="50" y="30" font-size="12" fill="#be123c" font-weight="bold">Geocentric Model (Ptolemy)</text>
                
                <!-- Earth at Center -->
                <circle cx="125" cy="130" r="16" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
                <text x="110" y="134" font-size="8" fill="#ffffff" font-weight="bold">Earth</text>
                
                <!-- Circular Orbits with Epicycles -->
                <circle cx="125" cy="130" r="45" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
                <circle cx="125" cy="130" r="75" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />

                <!-- Moon / Sun in Orbit around Earth -->
                <circle cx="125" cy="85" r="7" fill="#cbd5e1" stroke="#64748b" />
                <text x="135" y="88" font-size="8" fill="#475569">Moon</text>

                <circle cx="185" cy="130" r="11" fill="#facc15" stroke="#ca8a04" />
                <text x="175" y="152" font-size="8" fill="#854d0e" font-weight="bold">Sun</text>
                <text x="45" y="220" font-size="9" fill="#9f1239">Earth stationary at center</text>

                <!-- Right: Heliocentric Model (Copernicus & Kepler) -->
                <text x="280" y="30" font-size="12" fill="#0284c7" font-weight="bold">Heliocentric Model (Modern)</text>

                <!-- Sun at Center / Focal Point -->
                <circle cx="375" cy="130" r="18" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
                <text x="365" y="134" font-size="8" fill="#713f12" font-weight="bold">Sun</text>

                <!-- Elliptical Orbits around Sun -->
                <ellipse cx="375" cy="130" rx="55" ry="42" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3" />
                <ellipse cx="375" cy="130" rx="90" ry="68" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="3,3" />

                <!-- Earth in Orbit -->
                <circle cx="320" cy="130" r="10" fill="#38bdf8" stroke="#0284c7" />
                <text x="295" y="150" font-size="8" fill="#0369a1" font-weight="bold">Earth</text>

                <!-- Mars in Outer Elliptical Orbit -->
                <circle cx="465" cy="130" r="8" fill="#ef4444" stroke="#b91c1c" />
                <text x="450" y="150" font-size="8" fill="#991b1b" font-weight="bold">Mars</text>
                <text x="285" y="220" font-size="9" fill="#0369a1">Sun at center; Elliptical orbits</text>
              </svg>`,
              labels: [
                {
                  id: 'geocentric-view',
                  name: 'Geocentric Model (Ptolemy & Aristotle)',
                  description: 'Ancient cosmological belief that Earth remained motionless at the cosmological center while the Moon, Sun, and planets revolved around it in complex circular epicycles.'
                },
                {
                  id: 'heliocentric-copernicus',
                  name: 'Heliocentric Model (Nicolaus Copernicus)',
                  description: '16th-century breakthrough placing the Sun at the center of the solar system, with Earth and other planets revolving around the Sun.'
                },
                {
                  id: 'kepler-galileo-modern',
                  name: 'Kepler & Galileo Empirical Confirmation',
                  description: 'Johannes Kepler formulated the 3 Laws of Planetary Motion proving orbits are elliptical rather than circular. Galileo used the astronomical telescope to observe moons orbiting Jupiter and the crescent phases of Venus, disproving geocentrism.'
                }
              ]
            }
          },
          {
            id: 'sc-ch10-vid1',
            type: 'video',
            title: 'Visual Masterclass: Solar System Models, Telescopes & Remote Sensing',
            description: 'Learn the history of astronomical models from Ptolemy to Kepler, space rockets, and satellite remote sensing technology.',
            videoData: {
              youtubeId: 'Z9tP34aV7eA',
              duration: '8:45',
              channelOrSpeaker: 'KSSM Astronomy & Aerospace',
              videoSummary: 'Examine how Copernicus and Galileo revolutionized astrophysics, how rocket launch stages escape Earth gravity, and how Malaysia’s TiungSAT-1 and RazakSAT satellites perform Earth observation.',
              keyLearningPoints: [
                'Comparison of Geocentric (Ptolemy) vs Heliocentric (Copernicus/Kepler) models',
                'Galileo telescope evidence: Moons of Jupiter and Venus phases',
                'Space exploration timeline: Sputnik 1 (1957), Apollo 11 (1969), ISS, James Webb Telescope',
                'Remote sensing applications: Crop management, flood mitigation, and disaster relief'
              ]
            }
          },
          {
            id: 'sc-ch10-quiz1',
            type: 'quiz',
            title: 'Astronomical Model Check',
            prompt: 'Who was the astronomer who proved that planets move in elliptical rather than circular orbits around the Sun?',
            options: [
              { text: 'Ptolemy', isCorrect: false, explanation: 'Ptolemy advocated the geocentric model.' },
              { text: 'Johannes Kepler', isCorrect: true, explanation: 'Correct! Kepler established that planetary orbits are elliptical.' },
              { text: 'Aristotle', isCorrect: false, explanation: 'Aristotle supported geocentric cosmology.' }
            ]
          }
        ]
      },
      {
        title: '10.2 Space Exploration Milestones and Remote Sensing Technology',
        content: `Modern space missions utilize satellites, space telescopes, robotic probes, and **remote sensing technology** to monitor Earth resources and explore the cosmos.

- **Remote Sensing (*Penderiaan Jauh*):**
  - The acquisition of data and physical information about objects or areas on Earth’s surface from a distance using airborne or satellite-borne sensors (without physical contact).`,
        tables: [
          {
            caption: 'Chronological Milestones in Space Exploration & Malaysian Achievements',
            headers: ['Year', 'Mission / Landmark Achievement', 'Significance to Science & Technology'],
            rows: [
              ['**1609**', '**Galileo Galilei’s First Astronomical Telescope**', 'First empirical telescope observations revealing 4 large moons of Jupiter (*Galilean moons*) and lunar craters.'],
              ['**1957**', '**Sputnik 1 (Soviet Union)**', 'First artificial satellite launched into low Earth orbit, initiating the Space Age.'],
              ['**1961**', '**Yuri Gagarin (Vostok 1)**', 'First human to travel into outer space and orbit Earth.'],
              ['**1969**', '**Apollo 11 (Neil Armstrong & Buzz Aldrin)**', 'First crewed lunar landing; humans stepped foot on the Moon (*"One small step for man, one giant leap for mankind"*).'],
              ['**1990**', '**Hubble Space Telescope (HST)**', 'First major optical telescope deployed in Earth orbit above atmospheric distortion, capturing deep-space galaxies.'],
              ['**1996**', '**MEASAT-1 & MEASAT-2**', 'Malaysia’s first commercial communications satellites launched for national broadcasting and telecommunications.'],
              ['**1998**', '**International Space Station (ISS)**', 'Largest multinational modular space laboratory continuously occupied by international astronauts.'],
              ['**2000**', '**TiungSAT-1**', 'Malaysia’s first micro-satellite launched for Earth observation, remote sensing, and environmental monitoring.'],
              ['**2007**', '**Dato’ Dr. Sheikh Muszaphar Shukor (Angkasawan Program)**', 'First Malaysian astronaut launched to the ISS aboard Soyuz TMA-11 to conduct biomedical and crystallization microgravity research.'],
              ['**2009**', '**RazakSAT**', 'Malaysia’s second remote-sensing satellite carrying a high-resolution Near-Equatorial Orbit (NEqO) camera for national land mapping.'],
              ['**2021**', '**James Webb Space Telescope (JWST)**', 'Advanced infrared space observatory positioned at Lagrange Point L2 to observe the earliest formed stars and exoplanet atmospheres.']
            ]
          },
          {
            caption: 'Applications of Remote Sensing Satellite Technology Across 4 Core Sectors in Malaysia',
            headers: ['Sector / Field', 'Satellite Sensor Data Acquired', 'Specific Real-World Applications & Benefits'],
            rows: [
              ['**1. Agriculture**', 'Infrared & multispectral reflection of plant chlorophyll', '• Monitors crop health and detecting early pest/disease outbreaks in oil palm & paddy plantations\n• Evaluates soil moisture distribution and fertilizer optimization'],
              ['**2. Forestry & Environment**', 'Thermal infrared & multispectral land-cover imaging', '• Detects and tracks illegal logging in reserved tropical rainforests\n• Real-time tracking of forest peat fires and haze smoke distribution\n• Measures deforestation rates and mangrove conservation zones'],
              ['**3. Disaster Management**', 'Optical & Synthetic Aperture Radar (SAR) imaging (penetrates clouds)', '• Early flood extent mapping and planning emergency evacuation routes\n• Identifies landslide risk zones during monsoon seasons\n• Monitors coastal erosion and tsunami wave impacts'],
              ['**4. National Defense & Maritime**', 'High-resolution radar and optical surveillance', '• Monitors maritime border security and detects unauthorized vessels in Exclusive Economic Zones (EEZ)\n• Tracks oil spills and marine pollution along the Straits of Malacca']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch10-reveal1',
            type: 'reveal',
            title: 'What is Remote Sensing Technology?',
            prompt: 'Click to reveal how remote sensing satellites collect data without direct physical contact.',
            revealedContent: 'Sensors on satellites detect and measure electromagnetic radiation (visible light, infrared, microwave) reflected or emitted by features on Earth’s surface. Different land features (healthy crops, water bodies, urban roads, burnt forests) reflect unique spectral signatures that computer algorithms process into thematic maps.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc10-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Differentiate between the Geocentric model and the Heliocentric model of the Solar System.',
        marks: 2,
        answer: {
          finalAnswer: 'In the Geocentric model, Earth is at the center with the Sun and planets revolving around it. In the Heliocentric model, the Sun is at the center with Earth and other planets revolving around the Sun in elliptical orbits.',
          fullWorking: ['State center for Geocentric (Earth) and Heliocentric (Sun).']
        }
      },
      {
        id: 'sc10-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'State two practical applications of satellite remote sensing in Malaysia.',
        marks: 2,
        answer: {
          finalAnswer: '1. In agriculture: To monitor crop health and identify disease outbreaks in oil palm plantations.\n2. In disaster management: To detect forest fire hotspots and map flooded residential areas during monsoon seasons.',
          fullWorking: ['Give any two valid domains: agriculture, forestry, disaster management, or urban planning with brief context.']
        }
      }
    ],
    mindmap: {
      id: 'm-sc10',
      title: 'Space Exploration (Form 3)',
      children: [
        {
          id: 'm-sc10-1',
          title: 'Solar System Models',
          children: [
            { id: 'm-sc10-1a', title: 'Geocentric (Ptolemy) - Earth centered' },
            { id: 'm-sc10-1b', title: 'Heliocentric (Copernicus/Kepler) - Sun centered with elliptical orbits' }
          ]
        },
        {
          id: 'm-sc10-2',
          title: 'Exploration Milestones',
          children: [
            { id: 'm-sc10-2a', title: '1957 Sputnik 1, 1961 Yuri Gagarin, 1969 Apollo 11 (Moon)' },
            { id: 'm-sc10-2b', title: '2007: Dr. Sheikh Muszaphar Shukor (Malaysian Angkasawan on ISS)' }
          ]
        },
        {
          id: 'm-sc10-3',
          title: 'Space Technology & Remote Sensing',
          children: [
            { id: 'm-sc10-3a', title: 'Satellites (TiungSAT-1, RazakSAT)' },
            { id: 'm-sc10-3b', title: 'Applications: Agriculture, Flood tracking, Forest monitoring' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'History & Technology Application',
        title: 'Answering Space Technology & Remote Sensing Questions',
        keyQuestionTypes: ['Historical chronological ordering', 'Explaining remote sensing advantages over ground surveys', 'Astronaut contribution recall'],
        essentialKeywords: [
          'Ptolemy (Geocentric: Earth-center) vs Copernicus/Kepler (Heliocentric: Sun-center)',
          'Remote sensing collects data from distance via satellite sensors',
          'Spectral reflectance of vegetation and water'
        ],
        stepByStepStrategy: [
          'For remote sensing questions: State that satellites provide wide-area, real-time repetitive coverage of inaccessible geographical regions.'
        ],
        commonErrorsToAvoid: [
          'Confusing Yuri Gagarin (first human in space) with Neil Armstrong (first human on the Moon).'
        ]
      }
    ]
  }
];
