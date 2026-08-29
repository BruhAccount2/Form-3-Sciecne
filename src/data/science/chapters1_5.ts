import { Chapter } from '../../types';

export const scienceChapters1to5: Chapter[] = [
  {
    id: 'science-ch1',
    subject: 'science',
    chapterNumber: 1,
    title: 'Stimuli and Responses',
    theme: 'Maintenance and Continuity of Life',
    summary: 'Explores the human nervous system, sensory organs, plant tropisms & nastic movements, stereoscopic vs monocular vision, stereophonic hearing, hearing ranges of organisms, and specialized animal sensory receptors.',
    notes: [
      {
        title: '1.1 Human Nervous System',
        content: `The human nervous system is an essential control and coordination network allowing the body to detect and react rapidly to stimuli.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Central Nervous System (CNS):</span> Comprises the **Brain** (cerebrum, cerebellum, medulla oblongata) and **Spinal Cord**.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Peripheral Nervous System (PNS):</span> Comprises **12 pairs of cranial nerves** (connecting brain to head and sensory organs) and **31 pairs of spinal nerves** (connecting spinal cord to the rest of the body).
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Voluntary Pathway:</span> *Stimulus → Receptor → Sensory neurone → Cerebrum (brain) → Motor neurone → Effector → Response*.
4. <span class="text-rose-600 dark:text-rose-400 font-bold">Reflex Arc Pathway:</span> *Stimulus → Pain receptor → Sensory neurone → Relay neurone in spinal cord → Motor neurone → Effector muscle (contracts) → Instant withdrawal*.`,
        tables: [
          {
            caption: 'Differences between Voluntary, Involuntary, and Reflex Actions',
            headers: ['Characteristic', 'Voluntary Action', 'Involuntary Action', 'Reflex Action'],
            rows: [
              ['Conscious Control', 'Under voluntary, conscious control', 'Automatic without conscious will', 'Instantaneous, automatic survival reflex'],
              ['Controlling Centre', 'Cerebrum (Cerebral cortex)', 'Medulla oblongata / Hypothalamus', 'Spinal cord (and brainstem)'],
              ['Speed of Reaction', 'Moderate (requires decision processing)', 'Continuous & rhythmic', 'Extremely fast to prevent bodily injury'],
              ['Classic Examples', 'Writing notes, kicking a ball, reading', 'Heartbeat, peristalsis in intestines, breathing rate', 'Knee-jerk reflex, touching a hot stove withdrawal']
            ]
          }
        ],
        definitions: [
          { term: 'Stimulus', definition: 'A change in the environment that evokes a response in an organism.' },
          { term: 'Receptor', definition: 'Specialized sensory cells that detect specific stimuli.' },
          { term: 'Effector', definition: 'A muscle or gland that carries out the physical response.' }
        ],
        interactiveElements: [
          {
            id: 'sc-ch1-quiz1',
            type: 'quiz',
            title: 'Test Yourself: Reflex Arc Pathway',
            prompt: 'Which component in the reflex arc transmits impulses directly from the sensory neurone to the motor neurone inside the spinal cord?',
            options: [
              { text: 'Cerebrum', isCorrect: false, explanation: 'The cerebrum controls voluntary actions, not rapid spinal reflex arcs.' },
              { text: 'Relay neurone (Interneurone)', isCorrect: true, explanation: 'Correct! The relay neurone in the gray matter of the spinal cord bridges the sensory neurone to the motor neurone.' },
              { text: 'Effector muscle', isCorrect: false, explanation: 'The effector muscle receives impulse from the motor neurone to produce response.' },
              { text: 'Sensory receptor', isCorrect: false, explanation: 'Sensory receptors detect the stimulus at the beginning of the pathway.' }
            ]
          }
        ]
      },
      {
        title: '1.2 Human Sensory Organs and Mechanisms',
        content: `Humans possess five sensory organs: Eye (Sight), Ear (Hearing), Nose (Smell), Tongue (Taste), and Skin (Touch).

- **The Eye & Vision:**
  - Light passes through: <span class="text-rose-600 dark:text-rose-400 font-bold">Cornea → Aqueous humour → Pupil → Crystalline Lens → Vitreous humour → Retina</span>.
  - Photoreceptors on the retina:
    * **Rod cells**: Sensitive to light intensity (dim light), cannot distinguish colours.
    * **Cone cells**: Sensitive to colour (Red, Green, Blue) in bright light conditions.
  - Focus mechanism: Controlled by **ciliary muscles** and **suspensory ligaments** (Accommodation).

- **The Ear & Hearing:**
  - Sound pathway: <span class="text-rose-600 dark:text-rose-400 font-bold">Pinna → Ear canal → Eardrum (vibrates) → Ossicles (Malleus, Incus, Stapes amplify vibrations) → Oval window → Cochlea (fluid waves trigger nerve impulses) → Auditory nerve → Brain</span>.
  - **Eustachian tube**: Balances air pressure on both sides of the eardrum.
  - **Semicircular canals**: Responsible for maintaining body balance (not hearing).

- **Limitations of Senses & Optical Illusions:**
  - **Blind spot**: Area on retina lacking photoreceptors where the optic nerve exits.
  - **Short-sightedness (Myopia)**: Eyeball too long or lens too thick; corrected with <span class="text-rose-600 dark:text-rose-400 font-bold">concave lens</span>.
  - **Long-sightedness (Hypermetropia)**: Eyeball too short or lens too thin; corrected with <span class="text-rose-600 dark:text-rose-400 font-bold">convex lens</span>.
  - **Astigmatism**: Irregular curvature of cornea/lens; corrected with <span class="text-rose-600 dark:text-rose-400 font-bold">cylindrical lens</span>.`,
        tables: [
          {
            headers: ['Vision Defect', 'Cause', 'Focus of Image', 'Corrective Lens'],
            rows: [
              ['Short-sightedness (Myopia)', 'Lens too thick or eyeball too long', 'In front of the retina', 'Concave lens (diverging)'],
              ['Long-sightedness (Hypermetropia)', 'Lens too thin or eyeball too short', 'Behind the retina', 'Convex lens (converging)'],
              ['Astigmatism', 'Non-uniform curvature of cornea/lens', 'Multiple focal points', 'Cylindrical lens']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch1-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Structure of the Human Eye and Light Pathway',
            description: 'Explore the key anatomical structures of the human eye and their specific physiological functions in vision.',
            prompt: 'Click any labelled part below to inspect its role in refracting light and transmitting impulses to the brain.',
            diagramData: {
              caption: 'Figure: Cross-section of the human eye showing light refraction from Cornea to Retina.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Sclera & Outer Eyeball -->
                <circle cx="270" cy="120" r="100" fill="#f8fafc" stroke="#64748b" stroke-width="4" />
                <!-- Choroid & Retina -->
                <circle cx="270" cy="120" r="92" fill="#eff6ff" stroke="#e11d48" stroke-width="3" stroke-dasharray="290 80" stroke-dashoffset="40" />
                <!-- Cornea -->
                <path d="M 175,70 A 55,55 0 0,0 175,170" fill="none" stroke="#0284c7" stroke-width="5" />
                <!-- Iris -->
                <line x1="195" y1="70" x2="195" y2="100" stroke="#047857" stroke-width="6" stroke-linecap="round" />
                <line x1="195" y1="140" x2="195" y2="170" stroke="#047857" stroke-width="6" stroke-linecap="round" />
                <!-- Pupil Gap Indicator -->
                <rect x="190" y="102" width="10" height="36" fill="rgba(15,23,42,0.1)" stroke="#0f172a" stroke-dasharray="2,2" />
                <!-- Crystalline Lens -->
                <ellipse cx="215" cy="120" rx="14" ry="38" fill="#bae6fd" stroke="#0284c7" stroke-width="3" opacity="0.9" />
                <!-- Ciliary body & Suspensory ligaments -->
                <circle cx="215" cy="74" r="5" fill="#f59e0b" />
                <line x1="215" y1="79" x2="215" y2="84" stroke="#f59e0b" stroke-width="2" />
                <circle cx="215" cy="166" r="5" fill="#f59e0b" />
                <line x1="215" y1="161" x2="215" y2="156" stroke="#f59e0b" stroke-width="2" />
                <!-- Optic Nerve Exit -->
                <path d="M 365,105 L 430,95 L 430,145 L 365,135 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
                <!-- Yellow Spot (Fovea) -->
                <circle cx="362" cy="120" r="4" fill="#eab308" />
                <!-- Light ray indicator -->
                <line x1="80" y1="120" x2="170" y2="120" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />
                <polygon points="168,116 178,120 168,124" fill="#f59e0b" />
                <text x="75" y="112" font-size="11" fill="#d97706" font-weight="bold">Light Ray</text>
                <!-- Labels in diagram -->
                <text x="140" y="55" font-size="10" fill="#0284c7" font-weight="bold">Cornea</text>
                <text x="175" y="35" font-size="10" fill="#047857" font-weight="bold">Iris &amp; Pupil</text>
                <text x="225" y="65" font-size="10" fill="#0284c7" font-weight="bold">Lens</text>
                <text x="310" y="50" font-size="10" fill="#e11d48" font-weight="bold">Retina</text>
                <text x="380" y="85" font-size="10" fill="#475569" font-weight="bold">Optic Nerve</text>
              </svg>`,
              labels: [
                {
                  id: 'cornea',
                  name: 'Cornea',
                  description: 'Transparent, curved outer layer that refracts and focuses light rays into the eye, providing about two-thirds of the eye’s optical power.'
                },
                {
                  id: 'iris-pupil',
                  name: 'Iris & Pupil',
                  description: 'The colored muscular Iris controls the size of the central opening (Pupil), regulating the amount of light entering under bright vs dim conditions.'
                },
                {
                  id: 'lens',
                  name: 'Crystalline Lens',
                  description: 'A transparent, biconvex flexible disc that fine-tunes the focusing of light rays onto the retina for objects at varying distances (Accommodation).'
                },
                {
                  id: 'ciliary',
                  name: 'Ciliary Muscle & Ligaments',
                  description: 'Contracts or relaxes to change the thickness and curvature of the eye lens: contracts for near vision (thicker lens), relaxes for distant vision (thinner lens).'
                },
                {
                  id: 'retina',
                  name: 'Retina (Photoreceptors)',
                  description: 'Inner sensory lining containing millions of Rod cells (detect light intensity in dim light) and Cone cells (detect red, green, and blue colors in bright light).'
                },
                {
                  id: 'fovea',
                  name: 'Yellow Spot (Fovea Centralis)',
                  description: 'Small depression on retina densely packed with cone photoreceptors where the sharpest and most detailed image is focused.'
                },
                {
                  id: 'blindspot',
                  name: 'Blind Spot & Optic Nerve',
                  description: 'Point where the optic nerve exits to the brain; completely lacks photoreceptor cells. Transmits electrical nerve impulses to the brain for visual interpretation.'
                }
              ]
            }
          },
          {
            id: 'sc-ch1-vid1',
            type: 'simulation',
            title: 'Visual Masterclass: Human Eye Accommodation & Vision Defects',
            description: 'Understand the optical focusing mechanism of the human eye and how concave and convex lenses correct myopia and hypermetropia.',
            simulationData: {
              summary: 'This video demonstrates how ciliary muscles adjust the lens curvature for near and distant vision, and visually illustrates why light rays focus in front of the retina in short-sightedness.',
              keyPoints: [
                'How ciliary muscles contract to thicken the lens when viewing nearby objects',
                'Why myopia causes distant light rays to converge in front of the retina',
                'How diverging concave lenses correct short-sightedness',
                'The differences between rod and cone cells in dim vs bright light'
              ]
            }
          },
          {
            id: 'sc-ch1-reveal1',
            type: 'reveal',
            title: 'Interactive Lens Correction Checker',
            prompt: 'Click below to reveal why concave lenses correct short-sightedness in exam explanations.',
            revealedContent: 'In short-sightedness, light rays from distant objects converge prematurely in front of the retina. A concave lens diverges the parallel light rays slightly before entering the eye, shifting the focal point exactly onto the retina for sharp vision.'
          }
        ]
      },
      {
        title: '1.3 Stimuli and Responses in Plants',
        content: `Plants respond to directional environmental stimuli through **Tropisms** (growth responses) and non-directional stimuli through **Nastic Movements**.

- **Types of Tropism:**
  - **Phototropism**: Response to light (Shoots show <span class="text-rose-600 dark:text-rose-400 font-bold">positive phototropism</span>; roots show <span class="text-rose-600 dark:text-rose-400 font-bold">negative phototropism</span>). Auxin accumulates on shaded side causing cells to elongate faster.
  - **Geotropism (Gravitropism)**: Response to gravity (Roots show positive geotropism; shoots show negative geotropism).
  - **Hydrotropism**: Response to water (Roots show positive hydrotropism to absorb water and mineral salts).
  - **Thigmotropism**: Response to touch/contact (Tendrils of climbing plants coil around supports).

- **Nastic Movements:**
  - Rapid, reversible movements independent of the direction of stimulus (e.g., *Mimosa pudica* leaves folding upon touch for defense / thigmonastic movement).`,
        interactiveElements: [
          {
            id: 'sc-ch1-stepper',
            type: 'stepper',
            title: 'Auxin Distribution in Phototropism',
            steps: [
              { title: '1. Unidirectional Light', detail: 'Light shines on a seedling from one side (e.g. right side).' },
              { title: '2. Auxin Migration', detail: 'The plant growth hormone (auxin) synthesized at shoot tip migrates to the darker, shaded side.' },
              { title: '3. Cell Elongation', detail: 'Higher auxin concentration on the shaded side causes cells there to elongate faster than the illuminated side.' },
              { title: '4. Positive Bending', detail: 'The differential growth rate forces the shoot tip to bend towards the light source.' }
            ]
          }
        ]
      },
      {
        title: '1.4 Importance of Responses to Stimuli in Other Animals',
        content: `Animals possess specialized sensory adaptations tailored for survival, predation, navigation, and predator evasion in diverse ecological niches.

- **1. Stereoscopic Vision vs Monocular Vision:**
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Stereoscopic Vision (3D Binocular Vision):</span>
    * Both eyes located at the **front of the head**.
    * Creates a large **overlapping field of vision** where both eyes view the same object simultaneously.
    * Generates a **three-dimensional (3D)** image with precise **depth, distance, and speed perception**.
    * Typical of **predators** (e.g., humans, tigers, lions, eagles, owls, cats) to accurately estimate distance when hunting prey.
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Monocular Vision (Panoramic 2D Vision):</span>
    * Eyes located on the **opposite sides of the head**.
    * Provides a very **wide panoramic field of vision** (almost 360°) with minimal or no visual overlap.
    * Produces a **two-dimensional (2D)** image with limited depth perception.
    * Typical of **prey animals** (e.g., deer, rabbits, pigeons, zebra, cows, horses, fish) to detect predators approaching from almost any angle.

- **2. Stereophonic Hearing (Binaural Hearing):**
  - Hearing that utilizes **both ears simultaneously**.
  - The brain calculates tiny differences in:
    1. **Time of arrival** (sound reaches the nearer ear a fraction of a millisecond earlier).
    2. **Sound intensity/loudness** (sound is louder in the ear facing the source).
  - This allows humans and animals to pinpoint the **exact direction, location, and distance** of sound sources (e.g., an owl locating prey in total darkness, a deer detecting a stalking predator).

- **3. Hearing Range of Various Organisms:**
  - Hearing frequencies are measured in **Hertz (Hz)** (vibrations per second):
    * **Infrasound (< 20 Hz):** Very low frequencies utilized by large animals like elephants for long-distance seismic/acoustic communication through the ground.
    * **Ultrasound (> 20,000 Hz):** High frequencies utilized by bats and marine mammals for **echolocation** (emitting sound pulses and detecting returning echoes to navigate and locate prey).

- **4. Specialized Sensory Organs in Other Animals:**
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Lateral Line in Fish:</span> Sensory line running along the flank detecting minute water vibrations, currents, and pressure changes for schooling and obstacle avoidance.
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Electroreceptors (Ampullae of Lorenzini in Sharks):</span> Detects weak bio-electric fields emitted by muscle contractions of prey hidden beneath seabed sand.
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Jacobson's Organ (Vomeronasal Organ in Snakes):</span> Located on the roof of the mouth; the snake's flickering forked tongue catches airborne scent chemicals and transfers them to the organ for scent tracking.
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Compound Eyes in Insects:</span> Composed of thousands of individual lenses (ommatidia) offering high sensitivity to rapid motion in almost 360°.
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Whiskers (Vibrissae in Cats/Rats):</span> Sensitive tactile mechanoreceptors detecting air currents and physical obstacles in darkness.
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Pheromones & Antennae in Insects:</span> Sensitive chemoreceptors on antennae detect chemical pheromones over kilometers for mating and trail-following.`,
        tables: [
          {
            caption: 'Differences between Stereoscopic Vision and Monocular Vision',
            headers: ['Characteristic', 'Stereoscopic Vision', 'Monocular Vision'],
            rows: [
              ['Position of Eyes', 'In front of the head', 'At the sides of the head'],
              ['Field of Vision', 'Narrower field of vision (~180°)', 'Very wide / Panoramic field of vision (~360°)'],
              ['Overlapping Visual Field', 'Large overlapping visual field', 'Small or no overlapping visual field'],
              ['Image Perception', 'Three-dimensional (3D) visual perception', 'Two-dimensional (2D) visual perception'],
              ['Depth & Distance Estimation', 'Accurate depth, distance, and speed estimation', 'Poor depth and distance estimation'],
              ['Primary Function & Advantage', 'Precise distance estimation to catch prey', 'Wide visual coverage to detect predators rapidly'],
              ['Organism Type & Examples', 'Predators: Human, Tiger, Lion, Eagle, Owl, Cat', 'Prey: Deer, Rabbit, Pigeon, Zebra, Cow, Horse']
            ]
          },
          {
            caption: 'Hearing Range (Frequency in Hz) of Various Living Organisms',
            headers: ['Organism', 'Hearing Frequency Range (Hz)', 'Acoustic Classification & Ecological Role'],
            rows: [
              ['Elephant', '16 Hz – 12,000 Hz', 'Infrasound (<20 Hz); long-distance low-frequency communication'],
              ['Human', '20 Hz – 20,000 Hz', 'Standard audible sound range'],
              ['Dog', '67 Hz – 45,000 Hz', 'Detects high-frequency dog whistles and predator sounds'],
              ['Cat', '45 Hz – 64,000 Hz', 'High ultrasonic sensitivity to detect rodent squeaks'],
              ['Frog', '50 Hz – 10,000 Hz', 'Adapted to species-specific mating calls'],
              ['Bird', '1,000 Hz – 4,000 Hz', 'Tuned to vocal songs and territorial calls'],
              ['Fish', '50 Hz – 2,000 Hz', 'Low-frequency water vibration detection'],
              ['Bat', '2,000 Hz – 110,000 Hz', 'Ultrasound (>20,000 Hz); echolocation for night hunting'],
              ['Dolphin / Porpoise', '150 Hz – 150,000 Hz', 'High-frequency echolocation and underwater communication']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch1-diag2',
            type: 'diagram',
            title: 'Interactive Diagram: Stereoscopic vs Monocular Vision Fields & Stereophonic Hearing',
            description: 'Compare the overlapping binocular field of vision in predators vs the wide panoramic field in prey, alongside dual-ear stereophonic sound localization.',
            prompt: 'Click any visual zone or auditory receiver below to inspect visual overlap, 3D perception, and sound localization mechanics.',
            diagramData: {
              caption: 'Figure: Comparison of predator stereoscopic vision, prey monocular vision, and stereophonic hearing mechanics.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Panel 1: Stereoscopic Vision (Predator) -->
                <rect x="15" y="15" width="150" height="210" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" />
                <text x="25" y="35" font-size="10" fill="#991b1b" font-weight="bold">Stereoscopic (Predator)</text>
                
                <!-- Predator Head -->
                <circle cx="90" cy="180" r="22" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
                <circle cx="82" cy="168" r="4" fill="#0f172a" />
                <circle cx="98" cy="168" r="4" fill="#0f172a" />
                <text x="75" y="185" font-size="8" fill="#9a3412">Eyes Front</text>

                <!-- Visual Field (Narrow, Large Overlap) -->
                <path d="M 82,168 L 30,55 L 115,55 Z" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" />
                <path d="M 98,168 L 65,55 L 150,55 Z" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" />
                <!-- Overlap shaded darker -->
                <path d="M 90,168 L 65,55 L 115,55 Z" fill="rgba(220, 38, 38, 0.5)" />
                <text x="65" y="90" font-size="8" fill="#7f1d1d" font-weight="bold">3D Overlap</text>
                <text x="28" y="215" font-size="8" fill="#b91c1c">Accurate Depth (Hunting)</text>

                <!-- Panel 2: Monocular Vision (Prey) -->
                <rect x="175" y="15" width="150" height="210" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5" />
                <text x="190" y="35" font-size="10" fill="#166534" font-weight="bold">Monocular (Prey)</text>

                <!-- Prey Head -->
                <ellipse cx="250" cy="160" rx="20" ry="24" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
                <circle cx="230" cy="160" r="4" fill="#0f172a" />
                <circle cx="270" cy="160" r="4" fill="#0f172a" />
                <text x="235" y="163" font-size="7" fill="#334155">Eyes Side</text>

                <!-- Wide 360 deg Fields -->
                <path d="M 230,160 L 180,65 L 180,210 Z" fill="rgba(34, 197, 94, 0.25)" stroke="#22c55e" />
                <path d="M 270,160 L 320,65 L 320,210 Z" fill="rgba(34, 197, 94, 0.25)" stroke="#22c55e" />
                <text x="205" y="100" font-size="8" fill="#14532d" font-weight="bold">~360° Field</text>
                <text x="185" y="215" font-size="8" fill="#15803d">Wide Alert (No Blindspot)</text>

                <!-- Panel 3: Stereophonic Hearing -->
                <rect x="335" y="15" width="150" height="210" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
                <text x="345" y="35" font-size="10" fill="#1e40af" font-weight="bold">Stereophonic Hearing</text>

                <!-- Human Head with 2 Ears -->
                <circle cx="410" cy="140" r="22" fill="#fde68a" stroke="#d97706" stroke-width="2" />
                <ellipse cx="387" cy="140" rx="4" ry="7" fill="#f59e0b" />
                <ellipse cx="433" cy="140" rx="4" ry="7" fill="#f59e0b" />
                <text x="398" y="143" font-size="7" fill="#78350f">Ear L &amp; R</text>

                <!-- Sound Source at Top Right -->
                <circle cx="455" cy="65" r="8" fill="#ef4444" />
                <text x="440" y="55" font-size="8" fill="#dc2626" font-weight="bold">Sound 🔊</text>

                <!-- Sound Waves arriving with delta t -->
                <path d="M 450,75 Q 440,105 435,133" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3" />
                <path d="M 450,75 Q 410,95 389,135" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="3,3" />
                <text x="345" y="105" font-size="7" fill="#1d4ed8">Time delta (Δt)</text>
                <text x="345" y="117" font-size="7" fill="#1d4ed8">Intensity delta (ΔI)</text>
                <text x="342" y="215" font-size="8" fill="#1d4ed8">Locates Source Direction</text>
              </svg>`,
              labels: [
                {
                  id: 'stereoscopic-vision',
                  name: 'Stereoscopic Vision (Predators)',
                  description: 'Eyes in front of head provide large overlapping visual field (3D binocular vision) enabling accurate distance and depth calculation when hunting prey.'
                },
                {
                  id: 'monocular-vision',
                  name: 'Monocular Vision (Prey)',
                  description: 'Eyes on the sides of the head provide almost 360° panoramic field of view with 2D vision, allowing prey animals to quickly detect predators approaching from behind.'
                },
                {
                  id: 'stereophonic-hearing',
                  name: 'Stereophonic Hearing (Binaural Sound Localization)',
                  description: 'Using both ears simultaneously detects differences in arrival time (Δt) and loudness (ΔI) between left and right ears, enabling instant location of sound direction.'
                },
                {
                  id: 'echolocation',
                  name: 'Echolocation in Bats & Dolphins',
                  description: 'High-frequency ultrasound pulses (>20,000 Hz) bounce off obstacles and prey; returning echoes allow 3D acoustic mapping in complete darkness or murky water.'
                }
              ]
            }
          },
          {
            id: 'sc-ch1-quiz2',
            type: 'quiz',
            title: 'Vision and Sensory Organs Check',
            prompt: 'Why do herbivores such as rabbits and deer possess monocular vision with eyes on the sides of their heads?',
            options: [
              { text: 'To provide 3D perception to judge distance accurately when leaping', isCorrect: false, explanation: '3D depth perception is provided by stereoscopic vision with eyes in front.' },
              { text: 'To give a wide panoramic field of view to detect predators from all angles', isCorrect: true, explanation: 'Correct! Monocular vision covers almost 360° around the animal to spot approaching predators.' },
              { text: 'To focus on high-frequency sound waves in the environment', isCorrect: false, explanation: 'Vision detects light, not sound waves.' }
            ]
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc1-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State the difference between voluntary and involuntary actions in terms of the controlling centre in the human nervous system.',
        marks: 2,
        answer: {
          finalAnswer: 'Voluntary actions are controlled by the cerebrum, whereas involuntary actions are controlled by the medulla oblongata.',
          fullWorking: [
            '1. Identify voluntary control centre: Cerebrum (conscious decisions).',
            '2. Identify involuntary control centre: Medulla oblongata (unconscious autonomic functions).',
            '3. Formulate comparative sentence using contrasting conjunction.'
          ],
          scientificReasoning: 'Voluntary actions involve conscious thought processed in cerebral cortex, while autonomic vital life functions are governed by the brainstem/medulla oblongata.'
        }
      },
      {
        id: 'sc1-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A student cannot see distant words on the whiteboard clearly but can read a textbook comfortably. (a) Name this eye defect. (b) Explain why the image forms incorrectly. (c) State the corrective lens required.',
        marks: 3,
        subQuestions: [
          { label: '(a)', question: 'Name this eye defect.', marks: 1 },
          { label: '(b)', question: 'Explain the cause and image position.', marks: 1 },
          { label: '(c)', question: 'State the lens used to correct this condition.', marks: 1 }
        ],
        answer: {
          finalAnswer: '(a) Short-sightedness (Myopia)\n(b) The eye lens is too thick or the eyeball is too long, causing light rays to focus in front of the retina.\n(c) Concave lens.',
          fullWorking: [
            'Recognize inability to focus on distant objects = Myopia.',
            'State physiological cause: refractive power too strong or axial length too long -> focus in front of retina.',
            'Diverging concave lens spreads rays before entering cornea.'
          ],
          commonMistakeWarning: 'Do not just say "the person cannot see". You must state "the image is focused IN FRONT of the retina".'
        }
      },
      {
        id: 'sc1-ex3',
        number: 3,
        difficulty: 'HOTS',
        question: 'An experiment is conducted where seedlings are placed horizontally in the dark. Explain why the shoot bends upwards while the root bends downwards after three days.',
        marks: 4,
        answer: {
          finalAnswer: 'Due to gravity, auxin accumulates at the lower side of both shoot and root. In the shoot, high auxin concentration stimulates cell elongation on the lower side, causing it to bend upwards (negative geotropism). In the root, high auxin concentration inhibits cell elongation on the lower side, so the upper side elongates faster, causing the root to bend downwards (positive geotropism).',
          fullWorking: [
            'Step 1: State the accumulation of auxin at the bottom side due to gravity.',
            'Step 2: Contrast the effect of high auxin concentration on shoots (stimulatory) vs roots (inhibitory).',
            'Step 3: Relate differential cell elongation to the resulting bending direction for both parts.'
          ],
          scientificReasoning: 'Plant tissues have different sensitivity thresholds to auxin; shoot cells require higher concentrations to accelerate elongation, whereas root elongation is suppressed by identical auxin levels.'
        }
      },
      {
        id: 'sc1-ex4',
        number: 4,
        difficulty: 'Intermediate',
        question: 'Compare stereoscopic vision with monocular vision in terms of (a) eye position, (b) visual overlap, and (c) ecological advantage.',
        marks: 3,
        answer: {
          finalAnswer: '(a) Stereoscopic vision has eyes located in front of the head, whereas monocular vision has eyes on the sides of the head.\n(b) Stereoscopic vision has a large overlapping visual field (3D perception), while monocular vision has little to no visual overlap (2D panoramic view).\n(c) Stereoscopic vision allows predators to judge distance and depth accurately to catch prey, while monocular vision gives prey a wide ~360° field of view to detect predators quickly.',
          fullWorking: [
            '1. State anatomical position (front vs sides).',
            '2. Compare overlapping field (large 3D overlap vs wide panoramic 2D field).',
            '3. Give adaptive advantages (accurate hunting distance vs rapid predator detection).'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc1',
      title: 'Stimuli and Responses (Form 3)',
      children: [
        {
          id: 'm-sc1-1',
          title: 'Human Nervous System',
          children: [
            { id: 'm-sc1-1a', title: 'Central (Brain & Spinal Cord)' },
            { id: 'm-sc1-1b', title: 'Peripheral (Cranial & Spinal Nerves)' },
            { id: 'm-sc1-1c', title: 'Actions: Voluntary (Cerebrum), Involuntary (Medulla), Reflex (Spinal Cord)' }
          ]
        },
        {
          id: 'm-sc1-2',
          title: 'Sense Organs & Vision/Hearing',
          children: [
            { id: 'm-sc1-2a', title: 'Eye: Cornea → Pupil → Lens → Retina (Rods/Cones)' },
            { id: 'm-sc1-2b', title: 'Defects: Myopia (Concave), Hypermetropia (Convex), Astigmatism (Cylindrical)' },
            { id: 'm-sc1-2c', title: 'Ear: Pinna → Eardrum → Ossicles → Cochlea → Auditory nerve' }
          ]
        },
        {
          id: 'm-sc1-3',
          title: 'Responses in Plants',
          children: [
            { id: 'm-sc1-3a', title: 'Tropisms (Directional): Photo-, Geo-, Hydro-, Thigmo-' },
            { id: 'm-sc1-3b', title: 'Nastic Movements (Non-directional, Rapid e.g. Mimosa)' }
          ]
        },
        {
          id: 'm-sc1-4',
          title: 'Responses in Other Animals',
          children: [
            { id: 'm-sc1-4a', title: 'Vision: Stereoscopic (Front, 3D, Predators) vs Monocular (Sides, 2D Panoramic, Prey)' },
            { id: 'm-sc1-4b', title: 'Stereophonic Hearing: Locates sound source via time & loudness differences' },
            { id: 'm-sc1-4c', title: 'Frequencies: Infrasound (Elephant), Audible (Human 20-20k Hz), Ultrasound (Bat/Dolphin)' },
            { id: 'm-sc1-4d', title: 'Sensory Receptors: Lateral line (Fish), Electroreceptors (Shark), Jacobson organ (Snake)' }
          ]
        }
      ]
    },
    experiment: {
      title: 'Investigating Phototropism and Geotropism in Seedlings',
      aim: 'To determine the directional growth response of shoots and roots towards light and gravity.',
      hypothesis: 'Plant shoots show positive phototropism and negative geotropism, while plant roots show positive geotropism.',
      variables: {
        manipulated: 'Direction of light source / orientation of seedlings.',
        responding: 'Direction of growth of shoot and root tips.',
        constant: 'Type of seedlings (green bean), moisture/water availability, ambient temperature.'
      },
      apparatusMaterials: ['Germinating green bean seedlings', 'Moist cotton wool', 'Opaque box with a single side aperture', 'Petri dishes', 'Plasticine'],
      procedure: [
        'Place three germinating green bean seedlings with straight radicles in a petri dish on moist cotton wool.',
        'Place Set A in an opaque box with a hole on one side (unidirectional light).',
        'Place Set B horizontally inside a dark box (gravitational stimulus only, no light).',
        'Leave both apparatus setups in the laboratory for 3 days, maintaining moisture.',
        'Observe and record the direction of curvature of shoot and root tips.'
      ],
      observationTable: {
        headers: ['Setup', 'Condition', 'Growth of Shoot Tip', 'Growth of Root Tip'],
        rows: [
          ['Set A', 'Unidirectional light from side hole', 'Bends towards the light hole', 'Grows downwards away from light'],
          ['Set B', 'Horizontal placement in complete darkness', 'Bends upwards against gravity', 'Bends downwards towards gravity']
        ]
      },
      resultsAndAnalysis: 'Shoot tips exhibited positive phototropism by curving directly toward the light aperture. In darkness, roots curved downward exhibiting positive geotropism, while shoots curved upward exhibiting negative geotropism.',
      conclusion: 'Hypothesis is accepted. Shoots show positive phototropism and negative geotropism; roots show positive geotropism.',
      safetyPrecautions: ['Ensure cotton wool is kept uniformly damp without flooding to prevent seed decay.', 'Handle seedlings gently with forceps to avoid damaging tender apical meristems.'],
      commonMistakes: ['Confusing negative geotropism of the shoot with phototropism when testing in the dark. Always specify the absence of light in gravity controls.']
    },
    answeringTechniques: [
      {
        category: 'Structured Questions',
        title: 'Answering Reflex Arc and Sensory Defect Questions',
        keyQuestionTypes: ['Pathway tracing (Receptor to Effector)', 'Explaining eye defect causes and lens correction', 'Plant auxin distribution reasoning'],
        essentialKeywords: [
          'Receptor → Sensory neurone → Relay neurone → Motor neurone → Effector',
          'In front of retina vs Behind retina',
          'Concave lens (diverges light) vs Convex lens (converges light)',
          'Auxin concentration higher on shaded/lower side'
        ],
        stepByStepStrategy: [
          'For eye defects: 1. State condition name -> 2. State physical cause (eyeball length / lens curvature) -> 3. State where image forms relative to retina -> 4. State corrective lens type.',
          'For tropisms: Always mention the hormone "Auxin", identify which side has higher accumulation, and explicitly state whether cell elongation is stimulated or inhibited.'
        ],
        commonErrorsToAvoid: [
          'Writing "convex lens" for short-sightedness (fatal error - convex is for long-sightedness).',
          'Forgetting that root cell elongation is INHIBITED by high auxin levels.'
        ],
        markSchemeInsights: [
          'Examiners award 1 mark for specifying the exact lens type and 1 mark for mentioning that it focuses light "onto the retina".'
        ],
        educationalReferences: [
          { title: 'KSSM Science Form 3 Chapter 1 Full Revision Video', type: 'Interactive Guide' },
          { title: 'MRSM State Paper Scoring Guide: Stimuli and Responses', type: 'Exam Paper Technique' }
        ]
      }
    ]
  },
  {
    id: 'science-ch2',
    subject: 'science',
    chapterNumber: 2,
    title: 'Respiration',
    theme: 'Maintenance and Continuity of Life',
    summary: 'Comprehensive coverage of the human respiratory system, breathing mechanisms, gas exchange in alveoli, respiratory health & diseases, animal adaptations (frog, fish, insect), and gaseous exchange in plants (stomata, guard cell osmosis, compensation point, and pollution impacts).',
    notes: [
      {
        title: '2.1 Human Respiratory System & Breathing Mechanism',
        content: `The human respiratory system facilitates gas exchange by delivering oxygen for aerobic cellular respiration and expelling carbon dioxide.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Pathway of Inhaled Air:</span> *Nasal cavity → Pharynx → Larynx → Trachea → Bronchus → Bronchiole → Alveoli*.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Inhalation Action:</span> External intercostal muscles contract, internal intercostal muscles relax, ribcage moves upwards and outwards, diaphragm contracts and flattens downwards, thoracic cavity volume increases, lung air pressure drops below atmospheric pressure, sucking atmospheric air inside.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Exhalation Action:</span> External intercostals relax, internal intercostals contract (during forced exhalation), ribcage moves downwards and inwards, diaphragm relaxes and curves upward (dome-shaped), thoracic cavity volume decreases, lung air pressure rises above atmospheric pressure, forcing air out.`,
        tables: [
          {
            caption: 'Differences between Inhalation and Exhalation Mechanisms',
            headers: ['Anatomical Component', 'Inhalation (Breathing In)', 'Exhalation (Breathing Out)'],
            rows: [
              ['External Intercostal Muscles', 'Contract (tighten)', 'Relax'],
              ['Internal Intercostal Muscles', 'Relax', 'Contract (during forced exhalation)'],
              ['Movement of Ribcage', 'Moves upwards and outwards', 'Moves downwards and inwards'],
              ['Diaphragm Shape', 'Contracts and flattens downwards', 'Relaxes and curves upwards (dome-shaped)'],
              ['Volume of Thoracic Cavity', 'Increases', 'Decreases'],
              ['Air Pressure in Lungs', 'Decreases below atmospheric pressure', 'Increases above atmospheric pressure'],
              ['Direction of Air Flow', 'Air rushes into lungs from outside', 'Air is expelled out of lungs']
            ]
          },
          {
            caption: 'Comparison between Human Respiratory System and the Bell Jar Model',
            headers: ['Part of Bell Jar Model', 'Corresponding Human Respiratory Structure', 'Function / Analogy'],
            rows: [
              ['Glass Y-tube', 'Trachea and Bronchi', 'Passageway for airflow into two lung branches'],
              ['Balloons', 'Lungs', 'Expand and deflate due to pressure differentials'],
              ['Glass Bell Jar', 'Ribcage / Thoracic Cavity Wall', 'Rigid enclosure maintaining airtight space'],
              ['Rubber Sheet at Base', 'Diaphragm', 'Pushed down to increase volume / Pushed up to decrease volume'],
              ['Limitation of Model', 'Bell jar cannot move', 'Unlike human ribcage, glass jar cannot expand outwards']
            ]
          },
          {
            caption: 'Differences in Gas Composition between Inhaled Air and Exhaled Air',
            headers: ['Gas / Factor', 'Inhaled Air (Atmospheric)', 'Exhaled Air (Expired)', 'Scientific Explanation'],
            rows: [
              ['Oxygen (O₂)', 'Approx. 21%', 'Approx. 16%', 'Diffuses into blood capillaries in alveoli for cellular respiration'],
              ['Carbon Dioxide (CO₂)', 'Approx. 0.04%', 'Approx. 4%', 'Produced as cellular metabolic waste and expelled'],
              ['Nitrogen (N₂)', 'Approx. 78%', 'Approx. 78%', 'Inert gas not utilized in human metabolic respiration'],
              ['Water Vapour', 'Variable / Lower', 'Saturated (100% humid)', 'Evaporates from moist alveolar membrane linings'],
              ['Temperature', 'Ambient room temperature', 'Warm (Body temperature ~37°C)', 'Absorbs heat from warm blood capillary beds']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch2-quiz1',
            type: 'quiz',
            title: 'Breathing Mechanism Check',
            prompt: 'During inhalation, what happens to the diaphragm and thoracic cavity volume?',
            options: [
              { text: 'Diaphragm curves upward, thoracic volume decreases', isCorrect: false, explanation: 'This describes exhalation.' },
              { text: 'Diaphragm flattens, thoracic cavity volume increases', isCorrect: true, explanation: 'Correct! Diaphragm contraction causes flattening, which enlarges the thoracic cavity and lowers air pressure.' },
              { text: 'Diaphragm flattens, thoracic volume decreases', isCorrect: false, explanation: 'Flattening expands the thoracic space, increasing volume.' }
            ]
          }
        ]
      },
      {
        title: '2.2 Gas Exchange in the Alveolus & Cellular Respiration',
        content: `Gas exchange takes place between the alveoli and blood capillaries through simple <span class="text-rose-600 dark:text-rose-400 font-bold">diffusion</span> driven by concentration / partial pressure gradients.

- **4 Key Structural Adaptations of Alveolus:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Large total surface area</span>: Millions of spherical alveoli provide massive surface-area-to-volume ratio (~100 m² in human lungs).
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Very thin wall (one cell thick)</span>: Epithelial alveolar walls and endothelial capillary walls are each single-celled (squamous), minimizing diffusion distance to <1 µm.
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Moist inner surface</span>: Allows oxygen gas molecules from inhaled air to dissolve into aqueous solution before diffusing across cell membranes.
  4. <span class="text-rose-600 dark:text-rose-400 font-bold">Dense network of blood capillaries</span>: Continuous blood flow rapidly carries away oxygenated blood, maintaining a steep concentration gradient between blood and alveolar air.

- **Transport of Oxygen in Blood:**
  - Oxygen combines reversibly with <span class="text-rose-600 dark:text-rose-400 font-bold">haemoglobin</span> in red blood cells to form <span class="text-rose-600 dark:text-rose-400 font-bold">oxyhaemoglobin</span>:
    * $\\text{Haemoglobin} + \\text{Oxygen} \\rightleftharpoons \\text{Oxyhaemoglobin}$ (Bright red in oxygenated blood)
  - In oxygen-poor body tissues with high metabolic activity, oxyhaemoglobin dissociates to release free oxygen:
    * $\\text{Glucose} + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy (ATP)}$
  - Carbon dioxide produced in cells diffuses into blood capillaries and is transported mainly as **hydrogen carbonate ions (bicarbonate)** in plasma and carbaminohaemoglobin to alveoli to be exhaled.`,
        interactiveElements: [
          {
            id: 'sc-ch2-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Alveolus Microstructure & Gas Exchange with Capillary',
            description: 'Observe the cross-section of an alveolus showing how oxygen and carbon dioxide diffuse across the one-cell thick moist membrane and into red blood cells.',
            prompt: 'Click any labelled element below to study its role in maintaining efficient gaseous exchange.',
            diagramData: {
              caption: 'Figure: Cross-section of human alveolus surrounded by blood capillaries showing O2 and CO2 diffusion.',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Alveolar Air Sac Background -->
                <circle cx="160" cy="120" r="85" fill="#f0fdf4" stroke="#16a34a" stroke-width="3" stroke-dasharray="4 2" />
                <text x="110" y="80" font-size="12" fill="#15803d" font-weight="bold">Alveolar Air Sac</text>
                <text x="105" y="96" font-size="10" fill="#166534">(High O₂, Low CO₂)</text>
                
                <!-- Alveolar Wall (One cell thick) -->
                <circle cx="160" cy="120" r="80" fill="none" stroke="#22c55e" stroke-width="4" />
                <!-- Thin Moisture Layer -->
                <circle cx="160" cy="120" r="76" fill="none" stroke="#38bdf8" stroke-width="2" />
                
                <!-- Blood Capillary U-Loop -->
                <path d="M 280,30 C 240,60 240,180 280,210 L 330,210 C 290,180 290,60 330,30 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="3" />
                
                <!-- Red Blood Cells (Deoxygenated to Oxygenated) -->
                <ellipse cx="295" cy="50" rx="14" ry="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" />
                <text x="286" y="53" font-size="8" fill="#ffffff" font-weight="bold">Hb</text>
                <ellipse cx="270" cy="120" rx="14" ry="10" fill="#a855f7" stroke="#7e22ce" stroke-width="2" />
                <ellipse cx="295" cy="190" rx="14" ry="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2" />
                <text x="280" y="193" font-size="8" fill="#ffffff" font-weight="bold">HbO₈</text>

                <!-- Diffusion Arrows -->
                <line x1="175" y1="115" x2="245" y2="115" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
                <polygon points="243,111 253,115 243,119" fill="#ef4444" />
                <text x="180" y="108" font-size="11" fill="#dc2626" font-weight="bold">O₂ Diffusion</text>

                <line x1="245" y1="140" x2="175" y2="140" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
                <polygon points="177,136 167,140 177,144" fill="#3b82f6" />
                <text x="180" y="154" font-size="11" fill="#2563eb" font-weight="bold">CO₂ Diffusion</text>

                <!-- Capillary Labels -->
                <text x="340" y="55" font-size="10" fill="#2563eb" font-weight="bold">From Pulmonary Artery</text>
                <text x="340" y="68" font-size="9" fill="#64748b">(Deoxygenated Blood)</text>
                
                <text x="340" y="195" font-size="10" fill="#dc2626" font-weight="bold">To Pulmonary Vein</text>
                <text x="340" y="208" font-size="9" fill="#64748b">(Oxygenated Blood)</text>
              </svg>`,
              labels: [
                {
                  id: 'one-cell-wall',
                  name: 'One-Cell Thick Wall',
                  description: 'Both the alveolar epithelial wall and capillary endothelial wall are only 1 cell thick (squamous epithelium), offering a minimal diffusion path of less than 1 micrometer.'
                },
                {
                  id: 'moist-lining',
                  name: 'Moist Inner Lining',
                  description: 'A thin aqueous fluid coating that allows oxygen gas from inhaled air to dissolve into solution before diffusing across biological cellular membranes.'
                },
                {
                  id: 'rbc-haemoglobin',
                  name: 'Red Blood Cells (Hb + O₂)',
                  description: 'Deoxygenated blood arriving from pulmonary arteries contains haemoglobin that rapidly binds dissolved oxygen to produce bright red oxyhaemoglobin.'
                },
                {
                  id: 'co2-release',
                  name: 'Carbon Dioxide Diffusion',
                  description: 'Higher partial pressure of CO₂ in blood plasma compared to alveolar air causes CO₂ to diffuse out across the gradient into the alveolar lumen to be exhaled.'
                }
              ]
            }
          },
          {
            id: 'sc-ch2-reveal2',
            type: 'reveal',
            title: 'Exam Key Factor: Why is Moisture Crucial in Alveoli?',
            prompt: 'Click to see why examiners insist on stating "moisture enables oxygen to dissolve".',
            revealedContent: 'Gases cannot diffuse directly across biological lipid bilayer membranes in dry gaseous state. Oxygen must first dissolve in the moist fluid lining the alveolar surface to diffuse efficiently into blood capillary plasma.'
          }
        ]
      },
      {
        title: '2.3 Health of the Human Respiratory System & Respiratory Diseases',
        content: `The human respiratory system is vulnerable to airborne pollutants, toxic chemical vapours, particulate matter, and carcinogenic compounds.

- **Major Harmful Substances:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Carbon Monoxide (CO):</span> Odourless, colourless toxic gas from incomplete combustion and vehicle exhaust. Binds with haemoglobin with ~200× greater affinity than oxygen to form **carboxyhaemoglobin**, severely reducing blood oxygen transport and causing asphyxiation/fatigue.
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Cigarette Tar:</span> Brown sticky chemical residue that coats the respiratory tract, paralyses and destroys epithelial cilia (preventing expulsion of dust and mucus), and contains carcinogenic substances that mutate DNA, inducing **lung cancer**.
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Nicotine:</span> Addictive alkaloid stimulant in tobacco that triggers adrenaline release, elevates blood pressure, constricts coronary arteries, and causes blood clotting (thrombosis).
  4. <span class="text-rose-600 dark:text-rose-400 font-bold">Sulphur Dioxide (SO₂) & Nitrogen Dioxide (NO₂):</span> Pungent acidic gases produced by power plants and vehicle emissions. Dissolve in respiratory moisture to form acids that irritate bronchus walls and trigger asthma attacks and bronchitis.
  5. <span class="text-rose-600 dark:text-rose-400 font-bold">Haze & Particulate Matter (PM2.5 / Dust):</span> Microscopic solid particles that penetrate deep into alveoli, causing chronic inflammation, reduced lung capacity, and allergic reactions.`,
        tables: [
          {
            caption: 'Summary of Major Respiratory Diseases, Causes, and Symptoms',
            headers: ['Respiratory Disease', 'Primary Causes', 'Pathological Impact on Lungs', 'Common Symptoms'],
            rows: [
              ['Asthma', 'Dust, pollen, smoke, cold air, allergens', 'Bronchiole walls become inflamed, swollen, and constricted with excessive mucus production', 'Wheezing, shortness of breath, tight chest, chronic coughing'],
              ['Chronic Bronchitis', 'Cigarette tar, industrial dust, acidic fumes', 'Persistent inflammation of bronchi lining; cilia paralysed so mucus accumulates', 'Persistent cough producing thick yellow/green phlegm, breathlessness'],
              ['Emphysema', 'Heavy smoking, severe air pollution', 'Alveolar walls are damaged and break down, merging into large irregular air sacs, drastically reducing surface area', 'Severe shortness of breath, chronic fatigue, inability to perform light exercise'],
              ['Lung Cancer', 'Carcinogens in cigarette tar, radon, asbestos', 'Uncontrolled abnormal mitotic cell division in lung tissue forming malignant tumours', 'Coughing up blood (haemoptysis), persistent chest pain, unexplained weight loss']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch2-vid1',
            type: 'simulation',
            title: 'Visual Masterclass: Alveolar Gas Diffusion & Respiratory Mechanics',
            description: 'Watch an animated demonstration of thoracic pressure changes driving airflow and how harmful pollutants destroy lung tissue.',
            simulationData: {
              summary: 'Explore the step-by-step mechanism of external intercostal and diaphragm contractions, followed by microscopic diffusion and the destructive effects of tar and emphysema.',
              keyPoints: [
                'How diaphragm flattening lowers intra-alveolar pressure below atmospheric pressure',
                'Why oxygen diffuses from higher partial pressure in alveoli to lower partial pressure in blood',
                'The role of haemoglobin in transporting oxygen as oxyhaemoglobin',
                'How tar and cigarette smoke destroy alveolar surface area (Emphysema)'
              ]
            }
          }
        ]
      },
      {
        title: '2.4 Adaptations in Respiratory Systems of Other Animals',
        content: `Different living organisms possess distinct anatomical structures adapted to extract oxygen from air or aquatic environments:

1. <span class="text-rose-600 dark:text-rose-400 font-bold">Amphibians (e.g. Frog):</span>
   - **Moist Outer Skin:** When in water or resting, cutaneous respiration occurs across thin, moist outer skin richly supplied with blood capillaries. Mucus glands keep skin continuously moist so atmospheric oxygen dissolves and diffuses into capillaries.
   - **Simple Sac-like Lungs:** Used when active on land. Frogs lack a diaphragm and ribcage; they gulp air using a **buccopharyngeal pumping mechanism** through their mouth cavity.

2. <span class="text-rose-600 dark:text-rose-400 font-bold">Fish (Aquatic Organisms):</span>
   - **Gills:** Comprise gill arches, gill filaments, and microscopic leaf-like **lamellae** with extremely thin walls (1-cell thick) and dense capillary beds.
   - Water enters through the mouth and is forced across gill filaments when the opercular flap opens.
   - **Countercurrent exchange:** Blood flows in the opposite direction to water flow across lamellae, maximizing oxygen absorption efficiency from water (~80% extraction).

3. <span class="text-rose-600 dark:text-rose-400 font-bold">Insects (e.g. Grasshopper, Cockroach):</span>
   - **Tracheal System:** Does NOT depend on blood for gas transport (insect haemolymph contains no haemoglobin).
   - Air enters through **spiracles** (valved pores along thorax and abdomen) into rigid branching **trachea** reinforced with chitin rings.
   - Trachea branch into microscopic **tracheoles** filled with fluid at tips, which touch every body cell directly for immediate gas diffusion.`,
        tables: [
          {
            caption: 'Differences between Respiratory Adaptations in Various Organisms',
            headers: ['Organism', 'Respiratory Organ', 'Exchange Surface Adaptation', 'Role of Circulatory Blood System'],
            rows: [
              ['Human', 'Lungs & Alveoli', 'One-cell thick, moist spherical alveoli with dense capillary network', 'Transports oxygen via haemoglobin in red blood cells'],
              ['Frog (Amphibian)', 'Moist Skin & Simple Lungs', 'Mucus-secreting glands keep skin permanently moist for cutaneous diffusion', 'Transports dissolved gases via bloodstream'],
              ['Fish (Aquatic)', 'Gills (Filaments & Lamellae)', 'Thin lamellae membranes bathed in continuous water flow', 'Countercurrent blood flow absorbs dissolved oxygen'],
              ['Insect (Grasshopper)', 'Tracheal System (Spiracles & Tracheoles)', 'Tracheole fluid at ends allows direct diffusion into cells', 'Blood does NOT transport gases (direct air-to-cell diffusion)']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch2-flashcard',
            type: 'flashcard',
            title: 'Respiratory Structure Comparison Flashcard',
            prompt: 'Match: Insect vs Fish vs Human vs Frog respiratory organs',
            revealedContent: '• Insect: Spiracles & Tracheal system (Tracheoles touch cells directly; blood does NOT carry gases)\n• Fish: Gills (Filaments & Lamellae, Countercurrent exchange)\n• Human: Lungs & Alveoli (Hb in RBCs)\n• Frog: Moist skin (Cutaneous) & Simple lungs'
          }
        ]
      },
      {
        title: '2.5 Gaseous Exchange in Plants: Stomata, Guard Cells & Compensation Point',
        content: `Like animals, plants require oxygen for cellular respiration continuously (day and night). During the day in the presence of light, plants also undergo **photosynthesis**, which consumes carbon dioxide and produces oxygen.

- **Structures for Gaseous Exchange in Plants:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Stomata (singular: Stoma) on Leaves:</span> Microscopic pores located predominantly on the lower epidermis of leaves, each bordered by two specialized kidney-shaped **guard cells** containing chloroplasts.
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Lenticels on Woody Stems & Bark:</span> Loosely packed, unsuberized spongy cork cells on mature woody stems and roots that allow gases to diffuse freely.
  3. <span class="text-rose-600 dark:text-rose-400 font-bold">Root Hairs in Soil:</span> Absorb dissolved oxygen trapped between soil particles through thin epidermal cell walls for root cell respiration.

- **Mechanism of Opening and Closing of Stomata by Guard Cells:**
  - **In the Presence of Light (Daytime):**
    1. Guard cells carry out photosynthesis and generate **glucose**.
    2. Potassium ions ($K^+$) and glucose accumulation increase the **osmotic pressure (lower water potential)** inside guard cells.
    3. Water molecules from surrounding epidermal cells enter the guard cells by <span class="text-rose-600 dark:text-rose-400 font-bold">osmosis</span>.
    4. Guard cells become **turgid and swollen**.
    5. Because the **inner cell wall is thick and less elastic** while the **outer cell wall is thin and stretchy**, the guard cells bend and curve outwards, causing the <span class="text-rose-600 dark:text-rose-400 font-bold">stoma to OPEN</span>.
    6. Carbon dioxide diffuses into the leaf mesophyll for photosynthesis, and excess oxygen diffuses out.
  - **In Darkness (Nighttime) or Water Stress (Hot / Drought):**
    1. Photosynthesis stops, glucose is converted to insoluble starch, and $K^+$ ions leave guard cells.
    2. Osmotic pressure in guard cells drops (water potential increases).
    3. Water leaves guard cells by **osmosis** into epidermal cells.
    4. Guard cells become **flaccid (limp)**.
    5. The guard cells straighten and the <span class="text-rose-600 dark:text-rose-400 font-bold">stoma CLOSES</span>, preventing excessive water loss via transpiration.

- **The Compensation Point (Titik Pampasan):**
  - <span class="text-rose-600 dark:text-rose-400 font-bold">Definition:</span> The specific light intensity at which the **Rate of Photosynthesis is exactly equal to the Rate of Cellular Respiration**.
  - **At the Compensation Point:**
    * $\\text{Rate of } \\text{CO}_2 \\text{ uptake for photosynthesis} = \\text{Rate of } \\text{CO}_2 \\text{ release from respiration}$
    * $\\text{Rate of } \\text{O}_2 \\text{ production} = \\text{Rate of } \\text{O}_2 \\text{ consumption}$
    * **Net gaseous exchange between plant and atmosphere is ZERO.**
    * No net glucose accumulation occurs.
  - **Below Compensation Point (Dim light / Dawn / Dusk / Night):**
    * Rate of respiration > Rate of photosynthesis.
    * Net intake of $\\text{O}_2$ from air and net release of $\\text{CO}_2$.
  - **Above Compensation Point (Bright Sunlight / Midday):**
    * Rate of photosynthesis > Rate of respiration.
    * Net intake of $\\text{CO}_2$ from air and net release of $\\text{O}_2$.
    * Excess glucose synthesized is converted to starch and stored in fruits, tubers, stems, and used for active growth.

- **Effects of Environmental Pollution on Plant Respiration & Photosynthesis:**
  1. <span class="text-rose-600 dark:text-rose-400 font-bold">Haze, Soot & Dust Particulates:</span> Settle on leaf surfaces and physically clog stomatal apertures. This restricts $\\text{CO}_2$ and $\\text{O}_2$ diffusion and blocks sunlight from reaching chloroplasts, severely decreasing photosynthetic rate.
  2. <span class="text-rose-600 dark:text-rose-400 font-bold">Acid Rain ($\\text{H}_2\\text{SO}_4$ & $\\text{HNO}_3$):</span> Destroys the waxy protective leaf cuticle, damages guard cell membranes, and causes leaching of vital minerals (like magnesium needed for chlorophyll synthesis) from soil.`,
        tables: [
          {
            caption: 'Comparison between Cellular Respiration and Photosynthesis in Plants',
            headers: ['Characteristic', 'Cellular Respiration in Plants', 'Photosynthesis in Plants'],
            rows: [
              ['Site / Organelle', 'Mitochondria (all living plant cells)', 'Chloroplasts containing chlorophyll (green cells only)'],
              ['Timing', 'Occurs continuously 24 hours (day and night)', 'Occurs ONLY during the day in the presence of light'],
              ['Gas Consumed', 'Oxygen (O₂)', 'Carbon Dioxide (CO₂)'],
              ['Gas Released', 'Carbon Dioxide (CO₂)', 'Oxygen (O₂)'],
              ['Energy Conversion', 'Releases chemical energy (ATP) by breaking glucose', 'Traps light energy and stores it as chemical energy in glucose'],
              ['Word Equation', 'Glucose + Oxygen → Carbon Dioxide + Water + Energy', 'Carbon Dioxide + Water + Light → Glucose + Oxygen'],
              ['Dry Mass Effect', 'Decreases plant biomass / dry mass', 'Increases plant biomass / dry mass']
            ]
          },
          {
            caption: 'Differences in Guard Cell Anatomy & State during Stoma Opening vs Closing',
            headers: ['Condition / Factor', 'Daytime (Bright Light)', 'Nighttime / Severe Heat Stress'],
            rows: [
              ['Guard Cell Osmotic Pressure', 'High (due to glucose & K⁺ accumulation)', 'Low (loss of solutes, starch formation)'],
              ['Direction of Water Osmosis', 'Water enters guard cells from surrounding cells', 'Water leaves guard cells into surrounding cells'],
              ['Turgidity of Guard Cells', 'Turgid and swollen', 'Flaccid (limp and relaxed)'],
              ['Curvature of Guard Cells', 'Thick inner wall resists; thin outer wall bulges out → curves open', 'Inner walls collapse against each other → straightens'],
              ['Stomatal Pore Condition', 'Open (Allows CO₂ uptake & O₂ release)', 'Closed (Prevents wilting & excessive transpiration)']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch2-diag2',
            type: 'diagram',
            title: 'Interactive Diagram: Stoma Microscopic Anatomy (Turgid vs Flaccid) & Compensation Point Curve',
            description: 'Explore the anatomical differences between an open stoma (turgid guard cells) and a closed stoma (flaccid guard cells), and observe how light intensity determines the compensation point.',
            prompt: 'Click the tabs and labels below to inspect guard cell wall thickness, chloroplasts, and gas exchange dynamics at different light intensities.',
            diagramData: {
              caption: 'Figure: (Left) Open vs Closed Stoma Guard Cell Anatomy; (Right) 24-hour Compensation Point Graph.',
              svgContent: `<svg viewBox="0 0 540 260" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Left Panel: OPEN STOMA (Turgid) -->
                <rect x="10" y="10" width="250" height="240" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
                <text x="25" y="32" font-size="12" fill="#15803d" font-weight="bold">OPEN STOMA (Day / Turgid)</text>
                
                <!-- Open Guard Cells -->
                <!-- Left Guard Cell (Curved Out) -->
                <path d="M 90,60 C 50,90 50,170 90,200 C 70,160 70,100 90,60 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5" />
                <!-- Thick Inner Wall Left -->
                <path d="M 90,60 C 70,100 70,160 90,200" fill="none" stroke="#14532d" stroke-width="5" stroke-linecap="round" />
                <!-- Right Guard Cell (Curved Out) -->
                <path d="M 115,60 C 155,90 155,170 115,200 C 135,160 135,100 115,60 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5" />
                <!-- Thick Inner Wall Right -->
                <path d="M 115,60 C 135,100 135,160 115,200" fill="none" stroke="#14532d" stroke-width="5" stroke-linecap="round" />
                
                <!-- Stomatal Pore Gap -->
                <ellipse cx="102" cy="130" rx="12" ry="35" fill="#dcfce7" stroke="#16a34a" stroke-dasharray="2 2" />
                <text x="75" y="135" font-size="10" fill="#166534" font-weight="bold">Stomatal Pore</text>
                
                <!-- Chloroplast Dots inside Guard Cells -->
                <circle cx="70" cy="100" r="3" fill="#15803d" />
                <circle cx="65" cy="130" r="3" fill="#15803d" />
                <circle cx="70" cy="160" r="3" fill="#15803d" />
                <circle cx="135" cy="100" r="3" fill="#15803d" />
                <circle cx="140" cy="130" r="3" fill="#15803d" />
                <circle cx="135" cy="160" r="3" fill="#15803d" />

                <!-- Gas Arrows for Open Stoma -->
                <!-- CO2 In -->
                <line x1="102" y1="35" x2="102" y2="85" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" />
                <polygon points="98,82 102,92 106,82" fill="#2563eb" />
                <text x="110" y="55" font-size="9" fill="#1d4ed8" font-weight="bold">CO₂ IN</text>

                <!-- O2 & H2O Out -->
                <line x1="102" y1="175" x2="102" y2="225" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" />
                <polygon points="98,222 102,232 106,222" fill="#dc2626" />
                <text x="110" y="222" font-size="9" fill="#dc2626" font-weight="bold">O₂ / H₂O OUT</text>

                <!-- Labels Left -->
                <text x="25" y="220" font-size="9" fill="#166534">Thick inner wall</text>
                <text x="25" y="235" font-size="9" fill="#166534">Thin outer wall</text>

                <!-- Right Panel: COMPENSATION POINT GRAPH -->
                <rect x="275" y="10" width="255" height="240" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
                <text x="290" y="32" font-size="12" fill="#0f172a" font-weight="bold">Compensation Point Graph</text>
                
                <!-- Graph Axes -->
                <line x1="310" y1="140" x2="510" y2="140" stroke="#64748b" stroke-width="2" /> <!-- Zero Line -->
                <line x1="310" y1="45" x2="310" y2="230" stroke="#64748b" stroke-width="2" /> <!-- Y Axis -->
                
                <!-- Axis Labels -->
                <text x="315" y="55" font-size="9" fill="#059669" font-weight="bold">+ Net CO₂ Uptake (Photosynthesis)</text>
                <text x="315" y="225" font-size="9" fill="#dc2626" font-weight="bold">- Net CO₂ Output (Respiration)</text>
                <text x="430" y="135" font-size="9" fill="#64748b">Light Intensity →</text>
                
                <!-- Compensation Curve -->
                <path d="M 310,210 C 350,200 370,165 395,140 C 430,105 460,85 510,80" fill="none" stroke="#2563eb" stroke-width="3.5" />
                
                <!-- Compensation Point Intercept -->
                <circle cx="395" cy="140" r="5" fill="#f59e0b" stroke="#b45309" stroke-width="2" />
                <line x1="395" y1="140" x2="395" y2="180" stroke="#f59e0b" stroke-dasharray="3 2" stroke-width="1.5" />
                <text x="350" y="170" font-size="10" fill="#b45309" font-weight="bold">Compensation</text>
                <text x="370" y="183" font-size="9" fill="#b45309" font-weight="bold">Point</text>
                <text x="345" y="196" font-size="8" fill="#78350f">(Rate Photosyn = Rate Resp)</text>
                <text x="375" y="125" font-size="9" fill="#0284c7" font-weight="bold">Net Gas = 0</text>
              </svg>`,
              labels: [
                {
                  id: 'guard-cell-thick-wall',
                  name: 'Differential Wall Thickness',
                  description: 'The inner cell wall facing the stomatal pore is notably thicker and less elastic than the thin, stretchy outer cell wall. When turgid, the outer wall stretches outward more, pulling the inner wall with it and opening the pore.'
                },
                {
                  id: 'guard-cell-chloroplast',
                  name: 'Chloroplasts in Guard Cells',
                  description: 'Unlike surrounding epidermal cells which lack chloroplasts, guard cells possess active chloroplasts to carry out photosynthesis, generating glucose that triggers osmotic water influx.'
                },
                {
                  id: 'compensation-point-def',
                  name: 'Compensation Point (Titik Pampasan)',
                  description: 'The exact light intensity where rate of photosynthesis equals rate of cellular respiration. Net exchange of carbon dioxide and oxygen with the surrounding air is exactly zero.'
                },
                {
                  id: 'above-compensation-point',
                  name: 'Above Compensation Point',
                  description: 'At higher light intensities (bright sunshine), photosynthetic rate exceeds respiration rate. Carbon dioxide is absorbed from air, oxygen is released, and excess glucose accumulates as starch for growth.'
                }
              ]
            }
          },
          {
            id: 'sc-ch2-stepper1',
            type: 'stepper',
            title: 'Step-by-Step Guard Cell Osmotic Opening Mechanism',
            steps: [
              {
                title: 'Step 1: Light Triggers Photosynthesis',
                detail: 'Daylight strikes chlorophyll in guard cells. Guard cells perform photosynthesis, generating glucose and accumulating potassium ions (K+).'
              },
              {
                title: 'Step 2: Osmotic Pressure Rises',
                detail: 'The increased concentration of glucose and K+ ions lowers the water potential (increases osmotic pressure) inside the guard cell sap.'
              },
              {
                title: 'Step 3: Water Enters by Osmosis',
                detail: 'Water molecules from adjacent epidermal cells diffuse into the guard cells across semi-permeable membranes via osmosis.'
              },
              {
                title: 'Step 4: Guard Cells Become Turgid & Curve',
                detail: 'As internal turgor pressure rises, the thin outer wall expands more than the thick, rigid inner wall. This pulls the inner walls apart.'
              },
              {
                title: 'Step 5: Stoma Opens for Gaseous Exchange',
                detail: 'The pore opens completely, allowing atmospheric CO2 to diffuse into spongy mesophyll for photosynthesis while O2 and water vapour exit.'
              }
            ]
          },
          {
            id: 'sc-ch2-quiz2',
            type: 'quiz',
            title: 'Plant Gas Exchange & Compensation Point Check',
            prompt: 'What is true when a green plant is exactly at its compensation point?',
            options: [
              { text: 'Photosynthesis stops completely and only respiration occurs.', isCorrect: false, explanation: 'Photosynthesis continues actively at a rate matching respiration.' },
              { text: 'The rate of photosynthesis equals the rate of respiration, with zero net gas exchange.', isCorrect: true, explanation: 'Correct! At the compensation point, all CO2 produced in respiration is consumed in photosynthesis, and all O2 generated in photosynthesis is utilized in respiration.' },
              { text: 'The plant absorbs maximum carbon dioxide from the atmosphere.', isCorrect: false, explanation: 'Net CO2 absorption is zero at the compensation point.' }
            ]
          },
          {
            id: 'sc-ch2-reveal3',
            type: 'reveal',
            title: 'Exam Key Concept: What happens to a plant kept continuously at its compensation point?',
            prompt: 'Click to discover why a plant cannot survive indefinitely at its compensation point.',
            revealedContent: 'If a plant remains continuously at its compensation point, all glucose produced by photosynthesis is immediately consumed by cellular respiration. No surplus glucose/starch is available for cellular growth, repair, flower/fruit production, or storage. Over time, the plant will fail to grow and eventually die.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc2-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State two structural adaptations of the human alveolus that make it efficient for gas exchange.',
        marks: 2,
        answer: {
          finalAnswer: '1. The alveolar wall is only one cell thick (thin wall) to provide a short diffusion distance.\n2. The inner surface of the alveolus is lined with a layer of moisture to allow oxygen gas to dissolve before diffusing.',
          fullWorking: [
            'Recall 4 standard adaptations: One cell thick, large surface area, moist surface, dense capillary network.',
            'State any two clearly with their exact physiological explanations.'
          ]
        }
      },
      {
        id: 'sc2-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'Explain why a heavy smoker becomes easily fatigued and breathless during physical exercise compared to a non-smoker.',
        marks: 3,
        answer: {
          finalAnswer: 'Cigarette smoke contains carbon monoxide, which binds irreversibly with haemoglobin to form carboxyhaemoglobin, reducing the oxygen-carrying capacity of blood. Additionally, tar and pollutants damage and destroy alveolar walls (emphysema), reducing the total surface area for diffusion. This leads to insufficient oxygen delivery to muscle cells for cellular respiration, causing rapid fatigue and breathlessness.',
          fullWorking: [
            'Point 1: Mention carbon monoxide and formation of carboxyhaemoglobin.',
            'Point 2: State reduction in oxygen transported to active tissues.',
            'Point 3: Relate to insufficient ATP energy generation in muscle cells and alveolar damage.'
          ],
          scientificReasoning: 'Carboxyhaemoglobin has a binding affinity >200x stronger than oxyhaemoglobin, drastically starving active myocytes of required aerobic substrate.'
        }
      },
      {
        id: 'sc2-ex3',
        number: 3,
        difficulty: 'Challenging',
        question: 'Compare the transport of respiratory gases in the human circulatory system with that in the insect tracheal system.',
        marks: 4,
        answer: {
          finalAnswer: 'In humans, oxygen is absorbed into the blood and transported bound to haemoglobin in red blood cells through a closed circulatory network to reach body tissues. In contrast, insects do not use blood or circulatory fluid (haemolymph) to transport respiratory gases; oxygen enters through spiracles, travels through branching trachea and microscopic tracheoles, and diffuses directly into body cells.',
          fullWorking: [
            'State human mechanism (involves blood, haemoglobin, capillaries, double circulation).',
            'State insect mechanism (tracheal system, spiracles, direct diffusion without haemolymph gas transport).',
            'Highlight key distinction (dependence on blood vs direct air delivery).'
          ]
        }
      },
      {
        id: 'sc2-ex4',
        number: 4,
        difficulty: 'HOTS',
        question: 'A potted plant is placed in a sealed glass chamber under varying light intensities from dawn to dusk. (a) Define "compensation point". (b) Explain why stomata close on a hot, windy afternoon. (c) Explain what happens to the net exchange of carbon dioxide when light intensity rises above the compensation point.',
        marks: 4,
        subQuestions: [
          { label: '(a)', question: 'Define the compensation point in plants.', marks: 1 },
          { label: '(b)', question: 'Explain the biological reason and mechanism for stomata closing during hot, windy conditions.', marks: 2 },
          { label: '(c)', question: 'State the direction of net carbon dioxide movement above the compensation point and explain its importance to the plant.', marks: 1 }
        ],
        answer: {
          finalAnswer: '(a) The compensation point is the light intensity at which the rate of photosynthesis equals the rate of cellular respiration.\n(b) On a hot, windy afternoon, high transpiration rates cause water loss. Guard cells lose water by osmosis, become flaccid, and cause the stomata to close. This prevents excessive water loss and wilting.\n(c) Above the compensation point, the rate of photosynthesis exceeds respiration, resulting in a net uptake of carbon dioxide from the air to produce excess glucose for plant growth and starch storage.',
          fullWorking: [
            '1. State definition: Rate of photosynthesis = Rate of respiration.',
            '2. Explain guard cell flaccidity due to osmosis to conserve water during heat stress.',
            '3. Relate high light intensity to net CO2 uptake and net biomass accumulation.'
          ],
          scientificReasoning: 'Stomatal closure is an evolutionary trade-off: conserving water prevents desiccation at the expense of temporarily pausing photosynthetic carbon fixation.'
        }
      }
    ],
    mindmap: {
      id: 'm-sc2',
      title: 'Respiration (Form 3)',
      children: [
        {
          id: 'm-sc2-1',
          title: 'Human Breathing Mechanism',
          children: [
            { id: 'm-sc2-1a', title: 'Pathway: Nasal → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → Alveoli' },
            { id: 'm-sc2-1b', title: 'Inhalation: Diaphragm flattens, Ribcage up & out, Thoracic volume ↑, Pressure ↓' },
            { id: 'm-sc2-1c', title: 'Exhalation: Diaphragm dome-shaped, Ribcage down & in, Thoracic volume ↓, Pressure ↑' },
            { id: 'm-sc2-1d', title: 'Bell Jar Model: Y-tube = Trachea/Bronchi, Balloons = Lungs, Rubber sheet = Diaphragm' }
          ]
        },
        {
          id: 'm-sc2-2',
          title: 'Alveoli & Gas Exchange',
          children: [
            { id: 'm-sc2-2a', title: '4 Adaptations: 1-cell thick, moist lining, large surface area, dense capillary bed' },
            { id: 'm-sc2-2b', title: 'Transport: Hb + O₂ ⇌ Oxyhaemoglobin (Bright red in oxygenated blood)' },
            { id: 'm-sc2-2c', title: 'Cellular Respiration: Glucose + O₂ → CO₂ + H₂O + ATP Energy' }
          ]
        },
        {
          id: 'm-sc2-3',
          title: 'Respiratory Health & Diseases',
          children: [
            { id: 'm-sc2-3a', title: 'Harmful: CO (Carboxyhaemoglobin), Tar (Cancer & cilia damage), Nicotine, SO₂/NO₂, Haze/PM2.5' },
            { id: 'm-sc2-3b', title: 'Diseases: Asthma (constricted bronchioles), Bronchitis (inflammation), Emphysema (alveoli breakdown), Lung Cancer' }
          ]
        },
        {
          id: 'm-sc2-4',
          title: 'Adaptations in Other Animals',
          children: [
            { id: 'm-sc2-4a', title: 'Frog: Thin moist skin (cutaneous) + Simple sac-like lungs (buccopharyngeal)' },
            { id: 'm-sc2-4b', title: 'Fish: Gills (filaments & lamellae, countercurrent flow exchange)' },
            { id: 'm-sc2-4c', title: 'Insect: Tracheal system (spiracles, trachea, tracheoles touch cells directly; no blood transport)' }
          ]
        },
        {
          id: 'm-sc2-5',
          title: 'Gaseous Exchange in Plants',
          children: [
            { id: 'm-sc2-5a', title: 'Structures: Stomata (leaves), Lenticels (woody bark), Root hairs (soil)' },
            { id: 'm-sc2-5b', title: 'Guard Cell Osmosis: Glucose/K⁺ ↑ → Osmosis in → Turgid → Thick inner wall curves → Stoma OPENS' },
            { id: 'm-sc2-5c', title: 'Darkness/Drought: Osmosis out → Flaccid → Stoma CLOSES to prevent transpiration' },
            { id: 'm-sc2-5d', title: 'Compensation Point: Rate Photosynthesis = Rate Respiration (Net gas exchange = 0)' },
            { id: 'm-sc2-5e', title: 'Pollution: Haze/dust clogs stomata, acid rain destroys leaf cuticles' }
          ]
        }
      ]
    },
    experiment: {
      title: 'Investigating the Effects of Cigarette Smoke on Temperature and pH of Water/Cotton Wool',
      aim: 'To study the effect of cigarette smoke on cotton wool colour and the temperature of inhaled air.',
      hypothesis: 'Cigarette smoke turns white cotton wool yellowish-brown and increases air temperature while making indicator solution acidic.',
      variables: {
        manipulated: 'Presence of cigarette smoke (lit cigarette vs unlit control).',
        responding: 'Colour change of cotton wool, reading of thermometer, colour of universal indicator solution.',
        constant: 'Volume of indicator solution, suction pump flow rate, type of glass apparatus.'
      },
      apparatusMaterials: ['U-tube or conical flask setup', 'Thermometer', 'Suction pump', 'White cotton wool', 'Universal indicator solution', 'Cigarette and lighter', 'Rubber tubing'],
      procedure: [
        'Assemble the cigarette smoking model with cotton wool in the first tube, a thermometer, and a flask of universal indicator solution connected to a suction pump.',
        'Record the initial temperature and green colour (neutral pH 7) of the universal indicator.',
        'Light the cigarette and switch on the suction pump to draw smoke through the apparatus.',
        'After the cigarette has burned, observe the colour of the cotton wool, record final temperature, and observe indicator colour change.'
      ],
      observationTable: {
        headers: ['Component', 'Initial State', 'Final State with Smoke', 'Inference'],
        rows: [
          ['Cotton wool', 'Clean white', 'Yellowish-brown sticky stain', 'Tar deposition from smoke'],
          ['Thermometer', '28 °C (Room temp)', '34 °C (Increased)', 'Hot gaseous particulate emission'],
          ['Universal Indicator', 'Green (pH 7)', 'Yellow / Orange (pH 4 - 5)', 'Acidic gases (SO2, NO2) present']
        ]
      },
      resultsAndAnalysis: 'The cotton wool turned brownish-yellow due to tar residue. The thermometer registered an increase in temperature, and the universal indicator turned acidic, demonstrating the presence of acidic toxic gases in cigarette smoke.',
      conclusion: 'Hypothesis accepted. Cigarette smoke deposits tar, increases temperature, and releases acidic pollutants.',
      safetyPrecautions: ['Conduct the experiment inside a fume cupboard or well-ventilated open area to prevent inhalation of harmful second-hand smoke.'],
      commonMistakes: ['Forgetting to explain what the cotton wool represents (it represents the human lung tissues/alveoli coated with sticky tar).']
    },
    answeringTechniques: [
      {
        category: 'Experimental Analysis',
        title: 'Mastering Model Lungs (Bell Jar Model), Alveoli Adaptations & Plant Compensation Point',
        keyQuestionTypes: [
          'Bell jar model vs human respiratory structure analogies',
          'Describing 4 alveoli adaptations with precise explanations',
          'Guard cell turgidity & osmotic opening mechanism',
          'Compensation point graph interpretation and gas exchange shifts'
        ],
        essentialKeywords: [
          'Bell jar = Ribcage / Thoracic wall',
          'Glass Y-tube = Trachea and Bronchi',
          'Balloons = Lungs',
          'Rubber sheet = Diaphragm',
          'One cell thick = Short diffusion distance',
          'Moist wall = Enables oxygen gas to dissolve',
          'Turgid guard cells = Stoma opens',
          'Flaccid guard cells = Stoma closes',
          'Compensation point = Rate of photosynthesis equals rate of respiration (Net gas exchange = 0)'
        ],
        stepByStepStrategy: [
          'In Bell Jar questions: When rubber sheet is pulled down -> volume inside bell jar increases -> pressure decreases -> higher atmospheric pressure forces air into balloons -> balloons inflate.',
          'For Guard Cell Osmosis: 1. State glucose production in light -> 2. Water potential drops in guard cells -> 3. Water enters via osmosis -> 4. Guard cells become turgid -> 5. Thick inner wall pulls outward -> Stoma opens.',
          'For Compensation Point: Explain that below the point, respiration dominates (net CO2 output); at the point, net exchange is zero; above the point, photosynthesis dominates (net CO2 uptake and starch storage).'
        ],
        commonErrorsToAvoid: [
          'Never say the rubber sheet represents the lungs (rubber sheet represents the DIAPHRAGM; balloons represent the lungs).',
          'Never confuse turgid (swollen, open) with flaccid (limp, closed).',
          'Never write that plants do not respire during the day (cellular respiration occurs continuously 24 hours a day in all living plant cells).'
        ],
        markSchemeInsights: [
          'For 3-mark breathing questions, 1 mark is strictly reserved for stating the change in thoracic cavity volume, 1 mark for the resulting pressure change, and 1 mark for the air movement direction.',
          'For plant gas exchange questions, examiners deduct marks if you fail to mention "osmosis" when describing guard cell swelling.'
        ]
      }
    ]
  },
  {
    id: 'science-ch3',
    subject: 'science',
    chapterNumber: 3,
    title: 'Transportation',
    theme: 'Maintenance and Continuity of Life',
    summary: 'Covers the human circulatory system, heart structure, blood vessels, blood groups & compatibility, lymphatic system, and transport in plants (transpiration, xylem, phloem).',
    notes: [
      {
        title: '3.1 Transport System in Organisms & Human Circulatory System',
        content: `Complex multicellular organisms require a specialized double circulatory system because their Total Surface Area to Volume (TSA/V) ratio is too small for simple diffusion.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Four Heart Chambers:</span> Right atrium and right ventricle pump deoxygenated blood to the lungs (pulmonary circuit); left atrium and left ventricle pump oxygenated blood to the rest of the body (systemic circuit).
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Left Ventricle Wall Thickness:</span> Significantly thicker and more muscular to generate immense systolic pressure required to propel blood throughout the entire systemic body network.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Valves Function:</span> Tricuspid, bicuspid, and semilunar valves ensure blood flows strictly in ONE direction, preventing backflow during cardiac cycles.`,
        tables: [
          {
            caption: 'Differences between Arteries, Veins, and Capillaries',
            headers: ['Characteristic', 'Artery', 'Vein', 'Capillary'],
            rows: [
              ['Wall Thickness & Structure', 'Thick, highly muscular and elastic', 'Thin wall with small muscular layer', 'One-cell thick endothelial wall'],
              ['Lumen Diameter', 'Narrow / Small lumen', 'Wide / Large lumen', 'Microscopic lumen (single RBC width)'],
              ['Internal Valves', 'Absent (except semilunar valves at base)', 'Present throughout length to prevent backflow', 'Absent'],
              ['Blood Pressure & Flow', 'High pressure, pulsating with heartbeats', 'Low pressure, smooth steady flow', 'Decreasing pressure, slow velocity for diffusion'],
              ['Direction of Blood Flow', 'Carries blood AWAY from the heart', 'Carries blood TOWARDS the heart', 'Connects arterioles to venules in tissues'],
              ['Oxygenation Level', 'Oxygenated (Exception: Pulmonary Artery)', 'Deoxygenated (Exception: Pulmonary Vein)', 'Changes from oxygenated to deoxygenated']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch3-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Internal Structure of the Human Heart & Blood Flow',
            description: 'Inspect the 4 chambers, major blood vessels (Aorta, Vena Cava, Pulmonary Artery, Pulmonary Vein), and atrioventricular valves.',
            prompt: 'Click any labelled part below to inspect its direction of blood flow, oxygenation state, and muscle wall adaptation.',
            diagramData: {
              caption: 'Figure: Longitudinal cross-section of the human heart showing systemic and pulmonary circulation chambers.',
              svgContent: `<svg viewBox="0 0 500 250" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Heart Outer Contour -->
                <path d="M 250,50 C 210,10 130,20 130,100 C 130,170 230,225 250,235 C 270,225 370,170 370,100 C 370,20 290,10 250,50 Z" fill="#fff1f2" stroke="#e11d48" stroke-width="4" />
                
                <!-- Septum (Central Wall) -->
                <path d="M 244,70 L 244,228 L 256,228 L 256,70 Z" fill="#fda4af" stroke="#e11d48" stroke-width="2" />
                
                <!-- Right Side (Deoxygenated - Blue Tint) -->
                <rect x="150" y="70" width="85" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" />
                <text x="160" y="100" font-size="10" fill="#1d4ed8" font-weight="bold">Right Atrium</text>
                
                <rect x="150" y="130" width="85" height="65" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="2" />
                <text x="155" y="165" font-size="10" fill="#1e40af" font-weight="bold">Right Ventricle</text>
                
                <!-- Left Side (Oxygenated - Red Tint) -->
                <rect x="265" y="70" width="85" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2" />
                <text x="278" y="100" font-size="10" fill="#b91c1c" font-weight="bold">Left Atrium</text>
                
                <rect x="265" y="130" width="85" height="65" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="4" />
                <text x="272" y="165" font-size="10" fill="#991b1b" font-weight="bold">Left Ventricle</text>
                <text x="270" y="180" font-size="8" fill="#dc2626" font-style="italic">(Thickest Wall)</text>

                <!-- Major Vessels Top -->
                <!-- Superior Vena Cava -->
                <path d="M 160,30 L 160,70" stroke="#3b82f6" stroke-width="8" stroke-linecap="round" />
                <polygon points="156,60 160,70 164,60" fill="#1e40af" />
                <!-- Pulmonary Artery -->
                <path d="M 210,130 L 210,20 L 190,20" stroke="#60a5fa" stroke-width="6" fill="none" />
                <polygon points="195,16 185,20 195,24" fill="#2563eb" />
                <!-- Aorta -->
                <path d="M 290,130 L 290,15 L 320,15" stroke="#ef4444" stroke-width="8" fill="none" />
                <polygon points="315,11 325,15 315,19" fill="#b91c1c" />
                <!-- Pulmonary Vein -->
                <path d="M 340,35 L 340,70" stroke="#f87171" stroke-width="7" stroke-linecap="round" />
                <polygon points="336,60 340,70 344,60" fill="#b91c1c" />

                <!-- External labels -->
                <text x="65" y="45" font-size="9" fill="#1d4ed8" font-weight="bold">Vena Cava</text>
                <text x="180" y="12" font-size="9" fill="#2563eb" font-weight="bold">Pulmonary Artery</text>
                <text x="315" y="12" font-size="9" fill="#b91c1c" font-weight="bold">Aorta (to Body)</text>
                <text x="365" y="45" font-size="9" fill="#dc2626" font-weight="bold">Pulmonary Vein</text>
              </svg>`,
              labels: [
                {
                  id: 'left-ventricle',
                  name: 'Left Ventricle (Thick Wall)',
                  description: 'Has the thickest muscular wall in the entire heart to generate maximum contractile force to propel oxygenated blood via the Aorta to all organs in systemic circulation.'
                },
                {
                  id: 'right-ventricle',
                  name: 'Right Ventricle',
                  description: 'Has a thinner muscular wall than the left ventricle because it only pumps deoxygenated blood a short distance to the nearby lungs via the Pulmonary Artery.'
                },
                {
                  id: 'valves',
                  name: 'Valves (Tricuspid & Bicuspid)',
                  description: 'Atrioventricular valves prevent the backflow of blood from ventricles back into atria when the ventricles contract during ventricular systole.'
                },
                {
                  id: 'aorta-vessels',
                  name: 'Aorta & Vena Cava',
                  description: 'The Aorta is the largest artery carrying oxygenated blood under high pressure from the left ventricle. Vena Cava returns deoxygenated blood from the body to the right atrium.'
                },
                {
                  id: 'septum',
                  name: 'Muscular Septum',
                  description: 'Central muscular dividing wall that completely separates deoxygenated blood on the right side from oxygenated blood on the left side, preventing mixing.'
                }
              ]
            }
          },
          {
            id: 'sc-ch3-vid1',
            type: 'simulation',
            title: 'Visual Masterclass: Double Circulation & Heart Cardiac Cycle',
            description: 'Watch the synchronized pumping action of the atria, ventricles, and heart valves, alongside plant vascular transport.',
            simulationData: {
              summary: 'Comprehensive visual walkthrough of the pulmonary and systemic circulatory loops, heart valve mechanics (lub-dub sound), and the ABO blood grouping rules.',
              keyPoints: [
                'Why mammalian double circulation maintains high systemic blood pressure',
                'How the tricuspid and bicuspid (mitral) valves prevent regurgitation',
                'Why the left ventricular myocardium is 3x thicker than the right',
                'How xylem transports water upward via transpiration pull and root pressure'
              ]
            }
          },
          {
            id: 'sc-ch3-reveal1',
            type: 'reveal',
            title: 'Why is the Left Ventricle Wall Thickest?',
            prompt: 'Click to reveal the official KSSM exam answer structure.',
            revealedContent: 'The left ventricle has the thickest muscular wall because it needs to generate higher muscular contraction force to pump oxygenated blood over long distances to all vital organs across the entire systemic circulation against high vascular resistance.'
          }
        ]
      },
      {
        title: '3.2 Blood Groups (ABO System) and Blood Transfusions',
        content: `Human blood is classified under the ABO and Rhesus systems based on specific surface antigens and plasma antibodies.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Antigen-Antibody Principle:</span> Red blood cell membranes contain agglutinogens (antigens A or B), while plasma contains agglutinins (antibodies anti-A or anti-B).
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Universal Donor:</span> Blood group O has no RBC surface antigens, allowing it to be donated to all ABO groups in emergencies.
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Universal Recipient:</span> Blood group AB has no plasma antibodies, allowing it to safely receive RBCs from all ABO groups.
4. <span class="text-rose-600 dark:text-rose-400 font-bold">Agglutination Hazard:</span> Incompatible transfusions cause severe clumping of erythrocytes, blocking capillaries and triggering acute renal failure.`,
        tables: [
          {
            caption: 'Differences between ABO Blood Groups and Transfusion Compatibility',
            headers: ['Blood Group', 'Antigen on RBC', 'Antibody in Plasma', 'Compatible Recipients (Can Donate To)', 'Compatible Donors (Can Receive From)'],
            rows: [
              ['Group A', 'Antigen A', 'Anti-B antibody', 'Group A, Group AB', 'Group A, Group O'],
              ['Group B', 'Antigen B', 'Anti-A antibody', 'Group B, Group AB', 'Group B, Group O'],
              ['Group AB', 'Antigen A and Antigen B', 'None (No antibodies)', 'Group AB only', 'Group A, B, AB, O (Universal Recipient)'],
              ['Group O', 'None (No antigens)', 'Anti-A and Anti-B antibodies', 'Group A, B, AB, O (Universal Donor)', 'Group O only']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch3-calc',
            type: 'quiz',
            title: 'Blood Compatibility Check',
            prompt: 'A patient with Blood Group B needs an emergency blood transfusion. Which donor blood group(s) are safe?',
            options: [
              { text: 'Group A and Group AB', isCorrect: false, explanation: 'Group A and AB have Antigen A, which will react with Anti-A in patient B plasma.' },
              { text: 'Group B and Group O', isCorrect: true, explanation: 'Correct! Group B donor has no foreign antigens, and Group O has no antigens on RBCs.' },
              { text: 'Group AB only', isCorrect: false, explanation: 'Group AB has Antigen A, causing immediate agglutination.' }
            ]
          }
        ]
      },
      {
        title: '3.3 Transport in Plants: Transpiration, Xylem and Phloem',
        content: `Plants rely on specialized vascular bundles for continuous transport of water, mineral ions, and photosynthetic sugars:
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Transpiration Mechanism:</span> Water evaporation through stomata creates negative pressure potential, driving transpiration pull aided by cohesion and adhesion forces.
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Translocation in Phloem:</span> Active transport of manufactured sucrose and amino acids from photosynthetic source leaves to metabolic sinks (roots, fruits, buds).
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Four Environmental Factors:</span> Transpiration rate increases with higher temperature, brighter light intensity, and faster wind speed, but DECREASES with higher relative air humidity.`,
        tables: [
          {
            caption: 'Differences between Xylem and Phloem Vascular Tissues',
            headers: ['Feature', 'Xylem Tissue', 'Phloem Tissue'],
            rows: [
              ['Substances Transported', 'Water and dissolved inorganic mineral salts', 'Manufactured organic food (sucrose, amino acids)'],
              ['Direction of Transport', 'Unidirectional: Strictly upwards from roots to leaves', 'Bidirectional: Both upwards and downwards to all plant tissues'],
              ['Cell Nature & Wall', 'Dead, hollow cells reinforced with waterproof lignin', 'Living cells with sieve tubes and companion cells (no lignin)'],
              ['Physiological Process', 'Transpiration pull, capillary action, and root pressure', 'Active translocation process requiring ATP energy'],
              ['Location in Stem Cross-Section', 'Inner layer of vascular bundle', 'Outer layer of vascular bundle (under bark)']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch3-stepper',
            type: 'stepper',
            title: 'Transpiration Pull Mechanism',
            steps: [
              { title: '1. Water Evaporation', detail: 'Water evaporates from mesophyll cells into air spaces and exits through open stomata.' },
              { title: '2. Water Potential Gradient', detail: 'Loss of water creates a lower water potential in leaf cells compared to xylem vessels.' },
              { title: '3. Transpiration Pull', detail: 'Water is drawn continuously upward through xylem due to cohesive forces (water-water) and adhesive forces (water-xylem wall).' },
              { title: '4. Root Absorption', detail: 'Water enters root hairs from soil by osmosis to replace the pulled water column.' }
            ]
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc3-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'Name the blood vessel that carries oxygenated blood from the lungs back to the left atrium of the heart.',
        marks: 1,
        answer: {
          finalAnswer: 'Pulmonary vein',
          fullWorking: ['Pulmonary vein is the only vein carrying oxygenated blood back from lungs into left atrium.']
        }
      },
      {
        id: 'sc3-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A complete ring of bark (including the phloem layer) is removed from the stem of a plant (ringing experiment). Predict and explain what will happen to the stem above the ring after several weeks.',
        marks: 3,
        answer: {
          finalAnswer: 'The stem above the cut ring will become swollen. This is because phloem vessels are removed, preventing the translocation of manufactured food (sucrose/carbohydrates) from leaves down to roots. The accumulated food substances cause tissue swelling above the ring.',
          fullWorking: [
            'Observation: Swelling of upper stem tissue.',
            'Tissue removed: Phloem tissue.',
            'Explanation: Translocation of photosynthetic products is blocked, leading to localized nutrient accumulation.'
          ]
        }
      },
      {
        id: 'sc3-ex3',
        number: 3,
        difficulty: 'Challenging',
        question: 'Explain why the rate of transpiration decreases significantly when relative air humidity is high on a rainy day.',
        marks: 3,
        answer: {
          finalAnswer: 'When relative air humidity is high, the surrounding air contains a high concentration of water vapour. This decreases the water vapour concentration gradient between the internal air spaces of the leaf and the surrounding atmosphere. As a result, the rate of water vapour diffusion out through the stomata is reduced.',
          fullWorking: [
            'State environmental condition: High ambient water vapour concentration.',
            'State gradient impact: Shallower diffusion gradient across stomatal pores.',
            'Conclude: Reduced rate of transpiration diffusion.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc3',
      title: 'Transportation (Form 3)',
      children: [
        {
          id: 'm-sc3-1',
          title: 'Human Heart & Vessels',
          children: [
            { id: 'm-sc3-1a', title: 'Heart: 4 Chambers, Thickest Left Ventricle, Semilunar Valves' },
            { id: 'm-sc3-1b', title: 'Arteries (High pressure away), Veins (Valves towards heart), Capillaries (1-cell thick)' }
          ]
        },
        {
          id: 'm-sc3-2',
          title: 'Blood Groups & Compatibility',
          children: [
            { id: 'm-sc3-2a', title: 'A, B, AB (Universal Recipient), O (Universal Donor)' },
            { id: 'm-sc3-2b', title: 'Agglutination: Antigen-Antibody clumping reaction' }
          ]
        },
        {
          id: 'm-sc3-3',
          title: 'Transport in Plants',
          children: [
            { id: 'm-sc3-3a', title: 'Xylem: Water & Minerals upwards (Transpiration pull)' },
            { id: 'm-sc3-3b', title: 'Phloem: Sucrose downwards/all parts (Translocation)' },
            { id: 'm-sc3-3c', title: 'Factors: Light (+), Temp (+), Wind (+), Humidity (-)' }
          ]
        }
      ]
    },
    experiment: {
      title: 'Investigating the Effect of Air Movement on the Rate of Transpiration Using a Potometer',
      aim: 'To study the relationship between air speed/wind and the rate of transpiration in leafy shoots.',
      hypothesis: 'Higher air speed increases the rate of transpiration of a leafy shoot.',
      variables: {
        manipulated: 'Speed of air movement (electric fan switched off, low speed, high speed).',
        responding: 'Distance moved by the air bubble in the capillary tube in 5 minutes (rate of water absorption).',
        constant: 'Type and size of leafy shoot, surrounding light intensity and room temperature.'
      },
      apparatusMaterials: ['Potometer (capillary tube with reservoir and ruler)', 'Fresh leafy shoot (Hibiscus / Balsam)', 'Electric fan', 'Stopwatch', 'Beaker with water and red dye', 'Vaseline/Petroleum jelly'],
      procedure: [
        'Cut the stem of a fresh leafy shoot underwater to prevent air bubbles from entering xylem vessels.',
        'Insert the shoot tightly into the rubber stopper of the potometer and seal with vaseline.',
        'Introduce a single air bubble into the capillary tube.',
        'Measure the distance moved by the air bubble in 5 minutes under still air (fan OFF).',
        'Repeat the measurement with the fan set at low speed, and then at high speed, resetting the bubble each time.'
      ],
      observationTable: {
        headers: ['Condition', 'Fan Speed', 'Distance Moved by Bubble in 5 min (cm)', 'Rate of Transpiration (cm/min)'],
        rows: [
          ['Still air', 'Fan OFF', '2.0 cm', '0.40 cm/min'],
          ['Moderate breeze', 'Fan Low Speed', '5.5 cm', '1.10 cm/min'],
          ['Strong wind', 'Fan High Speed', '9.0 cm', '1.80 cm/min']
        ]
      },
      resultsAndAnalysis: 'As the fan speed increased, the air bubble moved further across the capillary tube per unit time. Moving air rapidly sweeps away saturated water vapour layers from around the stomatal pores, maintaining a steep diffusion gradient.',
      conclusion: 'Hypothesis is accepted. As air movement increases, the rate of transpiration increases.',
      safetyPrecautions: ['Cut plant stem strictly underwater to preserve the continuous water column inside xylem vessels.', 'Ensure all joints are sealed airtight with petroleum jelly.'],
      commonMistakes: ['Not sealing the potometer joints with vaseline, allowing air leaks that invalidate bubble movement readings.']
    },
    answeringTechniques: [
      {
        category: 'Structured & Data Response',
        title: 'Answering Heart Circulation and Transpiration Factors',
        keyQuestionTypes: ['Heart diagram labeling and flow tracking', 'Blood transfusion compatibility grids', 'Graph interpretation of transpiration factors'],
        essentialKeywords: [
          'Deoxygenated blood: Vena Cava → Right Atrium → Right Ventricle → Pulmonary Artery → Lungs',
          'Oxygenated blood: Pulmonary Vein → Left Atrium → Left Ventricle → Aorta → Body',
          'Left ventricle wall has thickest myocardium to overcome systemic vascular resistance',
          'Concentration gradient of water vapour'
        ],
        stepByStepStrategy: [
          'For blood donation questions: Check the RECIPIENT’s antibodies and DONOR’s antigens. Clumping occurs if recipient antibody attacks donor antigen.',
          'For transpiration graphs: Identify the independent variable on the x-axis. Note that only Relative Humidity has an inverse (downward) correlation curve.'
        ],
        commonErrorsToAvoid: [
          'Mixing up Left and Right on heart diagrams (Remember: Left side is drawn on the right side of the paper as viewed from patient perspective).',
          'Confusing xylem and phloem transport directions.'
        ]
      }
    ]
  },
  {
    id: 'science-ch4',
    subject: 'science',
    chapterNumber: 4,
    title: 'Reactivity of Metals',
    theme: 'Exploration of Elements in Nature',
    summary: 'Examines natural minerals, the reactivity series of metals towards oxygen, carbon and hydrogen, and the industrial extraction of metals using blast furnaces.',
    notes: [
      {
        title: '4.1 Minerals and the Reactivity Series of Metals',
        content: `Minerals are naturally occurring solid elements or chemical compounds found in the Earth's crust.
- **Types of Minerals:**
  - **Free elements:** Unreactive metals such as **Gold (Au), Silver (Ag), Platinum (Pt)**.
  - **Natural compounds:** Combinations of metal elements with non-metals (e.g., oxides, carbonates, sulphides, silicates):
    * Bauxite: $\\text{Aluminium oxide}$
    * Haematite: $\\text{Iron(III) oxide}$
    * Galena: $\\text{Lead(II) sulphide}$
    * Limestone / Marble / Calcite: $\\text{Calcium carbonate}$

- **The Reactivity Series of Metals:**
  Metals are arranged in descending order of their reactivity towards **oxygen**:
  <span class="text-rose-600 dark:text-rose-400 font-bold">Potassium (K) > Sodium (Na) > Calcium (Ca) > Magnesium (Mg) > Aluminium (Al) > [Carbon (C)] > Zinc (Zn) > [Hydrogen (H)] > Iron (Fe) > Tin (Sn) > Lead (Pb) > Copper (Cu) > Mercury (Hg) > Silver (Ag) > Gold (Au)</span>.

- **Position of Carbon and Hydrogen in the Series:**
  - **Carbon (C)** is positioned between <span class="text-rose-600 dark:text-rose-400 font-bold">Aluminium and Zinc</span>.
    * Metals *below Carbon* (Zn, Fe, Sn, Pb, Cu) can be extracted from their ores by **reduction with carbon (coke)**.
    * Metals *above Carbon* (K, Na, Ca, Mg, Al) are too reactive and must be extracted via **electrolysis of molten ores**.
  - **Hydrogen (H)** is positioned between <span class="text-rose-600 dark:text-rose-400 font-bold">Zinc and Iron</span>.`,
        tables: [
          {
            headers: ['Metal', 'Symbol', 'Reaction with Oxygen', 'Extraction Method'],
            rows: [
              ['Potassium', 'K', 'Burns extremely vigorously with bright lilac flame', 'Electrolysis of molten ore'],
              ['Sodium', 'Na', 'Burns very vigorously with bright yellow flame', 'Electrolysis of molten ore'],
              ['Calcium', 'Ca', 'Burns vigorously with brick-red flame', 'Electrolysis of molten ore'],
              ['Magnesium', 'Mg', 'Burns brilliantly with blinding white flame', 'Electrolysis of molten ore'],
              ['Aluminium', 'Al', 'Burns brightly when powdered', 'Electrolysis of molten ore'],
              ['[Carbon]', 'C', '— Non-metal reference point —', '—'],
              ['Zinc', 'Zn', 'Burns moderately; yellow when hot, white when cold', 'Reduction by Carbon (Smelting)'],
              ['Iron', 'Fe', 'Glows brightly with yellow sparks', 'Reduction by Carbon (Blast Furnace)'],
              ['Tin', 'Sn', 'Glows moderately with dull red glow', 'Reduction by Carbon'],
              ['Lead', 'Pb', 'Glows faintly', 'Reduction by Carbon'],
              ['Copper', 'Cu', 'Surface turns black without burning', 'Heating with Carbon or Direct Roasting'],
              ['Gold / Silver', 'Au / Ag', 'No reaction with oxygen', 'Direct physical extraction (panning)']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch4-quiz1',
            type: 'quiz',
            title: 'Metal Extraction Method Identifier',
            prompt: 'Can Iron(III) oxide be reduced to molten iron by heating with carbon in a blast furnace?',
            options: [
              { text: 'Yes, because Iron is less reactive than Carbon.', isCorrect: true, explanation: 'Correct! Iron lies below carbon in the reactivity series, so carbon can remove oxygen from iron oxide.' },
              { text: 'No, because Iron is more reactive than Carbon.', isCorrect: false, explanation: 'Incorrect. Carbon is higher than Iron in the reactivity series.' },
              { text: 'No, iron requires electrolysis.', isCorrect: false, explanation: 'Only metals above carbon (K, Na, Ca, Mg, Al) require electrolysis.' }
            ]
          }
        ]
      },
      {
        title: '4.2 Industrial Extraction of Iron and Tin in a Blast Furnace',
        content: `Iron is industrially extracted from haematite ($\\text{Fe}_2\\text{O}_3$) in a **Blast Furnace**.

- **Raw Materials Fed from the Top:**
  1. **Haematite / Iron ore** ($\\text{Fe}_2\\text{O}_3$)
  2. **Coke / Carbon** ($\\text{C}$) — Fuel and reducing agent
  3. **Limestone** ($\\text{CaCO}_3$) — Removes acidic impurities (silica/sand)

- **Chemical Reactions inside the Furnace:**
  1. Combustion of coke produces carbon dioxide:
     * $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$
  2. Carbon dioxide reacts with unburnt coke to produce <span class="text-rose-600 dark:text-rose-400 font-bold">carbon monoxide</span> (primary reducing agent):
     * $\\text{CO}_2 + \\text{C} \\rightarrow 2\\text{CO}$
  3. Carbon monoxide reduces iron(III) oxide to molten iron:
     * $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe (molten)} + 3\\text{CO}_2$
  4. Limestone decomposes into calcium oxide and removes silica impurities to form <span class="text-rose-600 dark:text-rose-400 font-bold">slag ($\\text{CaSiO}_3$)</span>:
     * $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$
     * $\\text{CaO} + \\text{SiO}_2 \\rightarrow \\text{CaSiO}_3 \\text{ (molten slag)}$

- **Layer Separation:**
  - Molten iron is denser and sinks to the very bottom tap.
  - Molten slag is less dense and floats on top of molten iron, preventing the re-oxidation of molten iron.`,
        interactiveElements: [
          {
            id: 'sc-ch4-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Industrial Blast Furnace Cross-Section',
            description: 'Inspect the raw material charging hopper, high-temperature combustion zone, reduction reaction zone, and layer separation of molten iron and slag.',
            prompt: 'Click any labelled part below to inspect temperature zones, chemical equations, and molten product tapping.',
            diagramData: {
              caption: 'Figure: Cross-section of industrial blast furnace showing continuous extraction of iron.',
              svgContent: `<svg viewBox="0 0 500 260" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- Furnace Body -->
                <path d="M 200,40 L 160,110 L 150,190 L 170,230 L 330,230 L 350,190 L 340,110 L 300,40 Z" fill="#f8fafc" stroke="#475569" stroke-width="4" />
                
                <!-- Raw Material Infeed Top -->
                <rect x="220" y="15" width="60" height="25" rx="4" fill="#64748b" />
                <text x="226" y="32" font-size="9" fill="#ffffff" font-weight="bold">Ore+Coke</text>
                
                <!-- Reduction Zone (Upper Mid) -->
                <rect x="180" y="70" width="140" height="40" rx="4" fill="#fed7aa" stroke="#f97316" stroke-width="1.5" />
                <text x="195" y="86" font-size="9" fill="#9a3412" font-weight="bold">Reduction Zone (500-800°C)</text>
                <text x="192" y="100" font-size="8" fill="#c2410c">Fe₂O₃ + 3CO → 2Fe + 3CO₂</text>
                
                <!-- Hot Blast Tuyeres -->
                <line x1="100" y1="180" x2="150" y2="180" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
                <line x1="400" y1="180" x2="350" y2="180" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
                <text x="75" y="172" font-size="9" fill="#dc2626" font-weight="bold">Hot Air In</text>
                <text x="365" y="172" font-size="9" fill="#dc2626" font-weight="bold">Hot Air In</text>

                <!-- Combustion Zone (Lower Mid) -->
                <rect x="165" y="145" width="170" height="35" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
                <text x="175" y="160" font-size="9" fill="#b91c1c" font-weight="bold">Combustion (1500-1900°C)</text>
                <text x="195" y="172" font-size="8" fill="#dc2626">C + O₂ → CO₂ / CO</text>

                <!-- Molten Slag Layer (Floating, Less Dense) -->
                <rect x="160" y="195" width="180" height="15" fill="#fef08a" stroke="#ca8a04" stroke-width="1" />
                <text x="210" y="206" font-size="9" fill="#854d0e" font-weight="bold">Molten Slag (CaSiO₃)</text>
                <line x1="340" y1="202" x2="420" y2="202" stroke="#ca8a04" stroke-width="3" stroke-linecap="round" />
                <text x="365" y="197" font-size="8" fill="#854d0e" font-weight="bold">Slag Tap</text>

                <!-- Molten Iron Layer (Bottom, Denser) -->
                <rect x="170" y="210" width="160" height="18" fill="#f87171" stroke="#dc2626" stroke-width="1" />
                <text x="212" y="223" font-size="9" fill="#7f1d1d" font-weight="bold">Molten Iron (Fe)</text>
                <line x1="170" y1="220" x2="100" y2="220" stroke="#dc2626" stroke-width="3" stroke-linecap="round" />
                <text x="65" y="216" font-size="8" fill="#991b1b" font-weight="bold">Iron Tap</text>
              </svg>`,
              labels: [
                {
                  id: 'feed-materials',
                  name: 'Raw Material Feed (Top)',
                  description: 'Iron ore (Haematite Fe₂O₃), Coke (Carbon), and Limestone (CaCO₃) are loaded continuously into the furnace via double-bell hoppers.'
                },
                {
                  id: 'reduction-zone',
                  name: 'Reduction Zone (500 - 800 °C)',
                  description: 'Carbon monoxide gas (CO) reduces Haematite down to spongy solid iron: Fe₂O₃ + 3CO → 2Fe + 3CO₂.'
                },
                {
                  id: 'combustion-tuyeres',
                  name: 'Combustion Zone & Tuyeres (1900 °C)',
                  description: 'Preheated blast of oxygen-enriched air enters via nozzles (tuyeres), burning coke vigorously to produce CO₂ and intense thermal energy: C + O₂ → CO₂.'
                },
                {
                  id: 'slag-layer',
                  name: 'Molten Slag Layer (CaSiO₃)',
                  description: 'Limestone decomposes to CaO and binds with acidic silica sand impurities to produce molten calcium silicate. Being less dense than iron, it floats on top and shields iron from re-oxidation.'
                },
                {
                  id: 'molten-iron',
                  name: 'Molten Iron Tap (Bottom)',
                  description: 'Dense liquid pig iron trickles down to collect at the furnace hearth and is tapped periodically for steel manufacturing.'
                }
              ]
            }
          },
          {
            id: 'sc-ch4-vid1',
            type: 'simulation',
            title: 'Visual Masterclass: Reactivity Series & Blast Furnace Iron Extraction',
            description: 'Watch the industrial smelting process inside a blast furnace and understand displacement rules based on the reactivity series.',
            simulationData: {
              summary: 'Detailed step-by-step chemical walkthrough of raw material reactions, thermal decomposition of limestone, and why carbon reduces iron but cannot reduce aluminium.',
              keyPoints: [
                'Why carbon is positioned between aluminium and zinc in the reactivity series',
                'How carbon monoxide acts as the principal reducing agent in blast furnaces',
                'The role of limestone in forming molten slag to remove silica impurities',
                'Why molten slag floats above molten iron due to lower density'
              ]
            }
          },
          {
            id: 'sc-ch4-reveal1',
            type: 'reveal',
            title: 'Crucial Role of Slag in the Blast Furnace',
            prompt: 'Click to reveal two important functions of molten slag.',
            revealedContent: '1. Removes silica (sand) impurities as molten calcium silicate.\n2. Because slag is less dense than molten iron, it forms a protective liquid blanket on top, preventing freshly reduced hot molten iron from re-reacting with incoming oxygen.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc4-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State the mnemonic order or rank of the following metals in order of decreasing reactivity: Aluminium, Lead, Potassium, Zinc, Iron.',
        marks: 2,
        answer: {
          finalAnswer: 'Potassium > Aluminium > Zinc > Iron > Lead',
          fullWorking: ['Use standard KSSM reactivity order: K > Na > Ca > Mg > Al > [C] > Zn > [H] > Fe > Sn > Pb > Cu > Ag > Au.']
        }
      },
      {
        id: 'sc4-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'A mixture of magnesium oxide powder and carbon powder is heated strongly in a crucible. Will any reaction occur? Explain your answer.',
        marks: 2,
        answer: {
          finalAnswer: 'No reaction will occur. This is because Magnesium is more reactive than Carbon in the reactivity series of metals; therefore, carbon is unable to reduce or remove oxygen from magnesium oxide.',
          fullWorking: [
            'Compare reactivity: Mg is higher than C.',
            'State reducing capability: C cannot reduce oxides of metals above it.',
            'State outcome: No reaction / no displacement occurs.'
          ]
        }
      },
      {
        id: 'sc4-ex3',
        number: 3,
        difficulty: 'HOTS',
        question: 'In a blast furnace, state the specific role of limestone (calcium carbonate) and write a word equation for the formation of slag.',
        marks: 3,
        answer: {
          finalAnswer: 'Limestone removes acidic impurities such as silica/sand. When heated, limestone decomposes into calcium oxide, which reacts with silica to form molten slag (calcium silicate).\nWord Equation: Calcium oxide + Silicon dioxide (Silica) → Calcium silicate (Slag)',
          fullWorking: [
            'State purpose: Impurity removal (fluxing agent).',
            'Explain thermal decomposition: CaCO3 → CaO + CO2.',
            'State slag reaction: CaO + SiO2 → CaSiO3.'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc4',
      title: 'Reactivity of Metals (Form 3)',
      children: [
        {
          id: 'm-sc4-1',
          title: 'Reactivity Series',
          children: [
            { id: 'm-sc4-1a', title: 'K > Na > Ca > Mg > Al > [C] > Zn > [H] > Fe > Sn > Pb > Cu > Ag > Au' },
            { id: 'm-sc4-1b', title: 'Reactions with Oxygen: K/Na (explosive/bright) down to Cu/Ag (dull/unreactive)' }
          ]
        },
        {
          id: 'm-sc4-2',
          title: 'Extraction Principles',
          children: [
            { id: 'm-sc4-2a', title: 'Above Carbon: Electrolysis of molten ore' },
            { id: 'm-sc4-2b', title: 'Below Carbon: Reduction by Coke (Carbon / CO)' },
            { id: 'm-sc4-2c', title: 'Unreactive (Au/Ag): Native physical separation' }
          ]
        },
        {
          id: 'm-sc4-3',
          title: 'Blast Furnace Operations',
          children: [
            { id: 'm-sc4-3a', title: 'Fe2O3 + 3CO → 2Fe + 3CO2' },
            { id: 'm-sc4-3b', title: 'Limestone (CaCO3) forms Slag (CaSiO3) on top of denser molten iron' }
          ]
        }
      ]
    },
    answeringTechniques: [
      {
        category: 'Chemical Principles & Industrial Metallurgy',
        title: 'Predicting Displacement & Blast Furnace Questions',
        keyQuestionTypes: ['Displacement reactions between metal and metal oxide', 'Position of Carbon & Hydrogen in reactivity series', 'Blast furnace chemical equations'],
        essentialKeywords: [
          'More reactive metal displaces less reactive metal from its oxide',
          'Carbon position: Between Aluminium and Zinc',
          'Hydrogen position: Between Zinc and Iron',
          'Reducing agent: Carbon / Carbon monoxide',
          'Density difference: Slag floats on molten iron'
        ],
        stepByStepStrategy: [
          'For displacement tests (Metal X + Metal Y Oxide): Check series. If Metal X is higher than Metal Y -> reaction occurs (glows, colour change). If Metal X is lower than Metal Y -> no reaction.',
          'Always name the reducing agent as "Carbon monoxide" for blast furnace iron reduction, because CO is the primary gaseous reducer at high temperatures.'
        ],
        commonErrorsToAvoid: [
          'Stating that Aluminium can be extracted by heating with carbon (Al is ABOVE carbon; it MUST be extracted via electrolysis).',
          'Saying slag sinks beneath iron (Slag is LESS DENSE, so it floats).'
        ]
      }
    ]
  },
  {
    id: 'science-ch5',
    subject: 'science',
    chapterNumber: 5,
    title: 'Thermochemistry',
    theme: 'Exploration of Elements in Nature',
    summary: 'Explores endothermic and exothermic reactions, energy level diagrams, and their practical applications such as instant hot packs and instant cold packs.',
    notes: [
      {
        title: '5.1 Endothermic and Exothermic Reactions',
        content: `All chemical processes involve energy exchanges where chemical bond changes result in heat being liberated or absorbed from the surroundings.
1. <span class="text-rose-600 dark:text-rose-400 font-bold">Exothermic Reactions:</span> Chemical processes that release heat energy into the surrounding environment, causing the ambient temperature to rise ($\Delta T > 0$).
2. <span class="text-rose-600 dark:text-rose-400 font-bold">Endothermic Reactions:</span> Chemical processes that absorb thermal energy from the surrounding environment, causing the ambient temperature to drop ($\Delta T < 0$).
3. <span class="text-rose-600 dark:text-rose-400 font-bold">Therapeutic Pack Applications:</span> Instant hot packs use anhydrous calcium chloride dissolving exothermically to relax muscles; instant cold packs use solid ammonium nitrate dissolving endothermically to reduce swelling.`,
        tables: [
          {
            caption: 'Differences between Exothermic and Endothermic Reactions',
            headers: ['Characteristic', 'Exothermic Reaction', 'Endothermic Reaction'],
            rows: [
              ['Heat Energy Flow', 'Released outward to the surroundings', 'Absorbed inward from the surroundings'],
              ['Surroundings Temperature', 'Increases (Thermometer reading rises)', 'Decreases (Thermometer reading falls)'],
              ['Chemical Bond Energetics', 'Energy released during bond formation > Energy absorbed during bond breaking', 'Energy absorbed during bond breaking > Energy released during bond formation'],
              ['Total Chemical Energy Content', 'Total energy of Reactants > Total energy of Products', 'Total energy of Products > Total energy of Reactants'],
              ['Sensory / Container Feel', 'Beaker feels warm or hot to the touch', 'Beaker feels cold or icy to the touch'],
              ['Common Laboratory Examples', 'Combustion, acid-alkali neutralisation, dissolving NaOH, respiration', 'Thermal decomposition of CaCO₃, photosynthesis, dissolving NH₄Cl / NH₄NO₃']
            ]
          }
        ],
        interactiveElements: [
          {
            id: 'sc-ch5-diag1',
            type: 'diagram',
            title: 'Interactive Diagram: Energy Profile of Exothermic vs Endothermic Reactions',
            description: 'Compare enthalpy level changes, activation energy barriers, and overall net heat change (ΔH) for exothermic and endothermic reactions.',
            prompt: 'Click any labelled part below to inspect reactants vs products energy levels and bond energy rules.',
            diagramData: {
              caption: 'Figure: Enthalpy profile comparison showing heat release (Exothermic) vs heat absorption (Endothermic).',
              svgContent: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <!-- EXOTHERMIC PANEL (LEFT) -->
                <rect x="20" y="20" width="220" height="200" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5" />
                <text x="50" y="42" font-size="12" fill="#be123c" font-weight="bold">Exothermic (Heat Released)</text>
                <!-- Axes -->
                <line x1="45" y1="190" x2="220" y2="190" stroke="#94a3b8" stroke-width="2" />
                <line x1="45" y1="190" x2="45" y2="55" stroke="#94a3b8" stroke-width="2" />
                <text x="35" y="65" font-size="8" fill="#64748b" transform="rotate(-90 35,65)">Energy (H)</text>
                <!-- Energy Curve -->
                <!-- Reactants line -->
                <line x1="55" y1="100" x2="95" y2="100" stroke="#0284c7" stroke-width="3" />
                <text x="55" y="93" font-size="9" fill="#0369a1" font-weight="bold">Reactants</text>
                <!-- Activation hump -->
                <path d="M 95,100 Q 125,55 155,150" fill="none" stroke="#e11d48" stroke-width="2.5" />
                <!-- Products line -->
                <line x1="155" y1="150" x2="205" y2="150" stroke="#16a34a" stroke-width="3" />
                <text x="160" y="165" font-size="9" fill="#15803d" font-weight="bold">Products</text>
                <!-- Delta H arrow -->
                <line x1="185" y1="100" x2="185" y2="150" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,2" />
                <polygon points="181,142 185,150 189,142" fill="#e11d48" />
                <text x="140" y="125" font-size="9" fill="#be123c" font-weight="bold">ΔH &lt; 0</text>

                <!-- ENDOTHERMIC PANEL (RIGHT) -->
                <rect x="260" y="20" width="220" height="200" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
                <text x="290" y="42" font-size="12" fill="#1d4ed8" font-weight="bold">Endothermic (Heat Absorbed)</text>
                <!-- Axes -->
                <line x1="285" y1="190" x2="460" y2="190" stroke="#94a3b8" stroke-width="2" />
                <line x1="285" y1="190" x2="285" y2="55" stroke="#94a3b8" stroke-width="2" />
                <!-- Energy Curve -->
                <!-- Reactants line -->
                <line x1="295" y1="150" x2="335" y2="150" stroke="#0284c7" stroke-width="3" />
                <text x="295" y="165" font-size="9" fill="#0369a1" font-weight="bold">Reactants</text>
                <!-- Activation hump -->
                <path d="M 335,150 Q 365,65 395,95" fill="none" stroke="#2563eb" stroke-width="2.5" />
                <!-- Products line -->
                <line x1="395" y1="95" x2="445" y2="95" stroke="#16a34a" stroke-width="3" />
                <text x="400" y="88" font-size="9" fill="#15803d" font-weight="bold">Products</text>
                <!-- Delta H arrow -->
                <line x1="425" y1="150" x2="425" y2="95" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,2" />
                <polygon points="421,103 425,95 429,103" fill="#2563eb" />
                <text x="380" y="125" font-size="9" fill="#1d4ed8" font-weight="bold">ΔH &gt; 0</text>
              </svg>`,
              labels: [
                {
                  id: 'exothermic-profile',
                  name: 'Exothermic (ΔH < 0, Heat Released)',
                  description: 'Total chemical energy of reactants is higher than products. Excess bond energy is released outward as heat, causing the surroundings temperature to rise.'
                },
                {
                  id: 'endothermic-profile',
                  name: 'Endothermic (ΔH > 0, Heat Absorbed)',
                  description: 'Total chemical energy of products is higher than reactants. Heat energy is absorbed from the surroundings into chemical bonds, causing surroundings temperature to drop.'
                },
                {
                  id: 'activation-barrier',
                  name: 'Activation Energy Barrier (Ea)',
                  description: 'The minimum energy required to break existing chemical bonds in reactants before new product bonds can form.'
                },
                {
                  id: 'bond-rules',
                  name: 'Bond Breaking vs Bond Forming',
                  description: 'Bond breaking is always endothermic (absorbs energy). Bond formation is always exothermic (releases energy).'
                }
              ]
            }
          },
          {
            id: 'sc-ch5-vid1',
            type: 'simulation',
            title: 'Visual Masterclass: Thermochemistry & Practical Pack Chemistry',
            description: 'Learn the energy dynamics of exothermic combustion, endothermic dissolution, and the engineering of instant therapy packs.',
            simulationData: {
              summary: 'Clear experimental demonstrations measuring temperature changes with polystyrene cup calorimeters, and explaining why hot packs use CaCl2 while cold packs use NH4NO3.',
              keyPoints: [
                'Why polystyrene cups are used to minimize heat exchange with the surroundings',
                'How to calculate enthalpy change: ΔH = H_products - H_reactants',
                'Why hot packs dilate blood vessels to soothe muscle cramps',
                'Why cold packs constrict blood vessels to reduce swelling and acute sports injuries'
              ]
            }
          },
          {
            id: 'sc-ch5-quiz1',
            type: 'quiz',
            title: 'Identify Reaction Type',
            prompt: 'When solid ammonium chloride is dissolved in a beaker of water at 28 °C, the temperature drops to 21 °C. What type of reaction is this?',
            options: [
              { text: 'Exothermic reaction', isCorrect: false, explanation: 'Exothermic reactions cause temperature to increase.' },
              { text: 'Endothermic reaction', isCorrect: true, explanation: 'Correct! The drop in temperature indicates heat was absorbed from the water (surroundings).' }
            ]
          },
          {
            id: 'sc-ch5-reveal1',
            type: 'reveal',
            title: 'Instant Hot Pack vs Cold Pack Chemistry',
            prompt: 'Click to reveal the chemicals used inside instant packs.',
            revealedContent: '• Instant Hot Pack: Contains anhydrous calcium chloride (CaCl2) or magnesium sulphate and a bag of water. When squeezed, dissolving releases heat (exothermic reaction) to relieve muscle spasms.\n• Instant Cold Pack: Contains solid ammonium nitrate (NH4NO3) and water. Squeezing causes endothermic dissolving, absorbing heat to reduce swelling and sprains.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'sc5-ex1',
        number: 1,
        difficulty: 'Basic',
        question: 'State whether the process of photosynthesis is an exothermic or endothermic reaction. Explain your reason.',
        marks: 2,
        answer: {
          finalAnswer: 'Photosynthesis is an endothermic reaction because green plants absorb light and heat energy from the sun to synthesize glucose.',
          fullWorking: ['Identify absorption of solar energy = Endothermic.']
        }
      },
      {
        id: 'sc5-ex2',
        number: 2,
        difficulty: 'Intermediate',
        question: 'An athlete suffers a muscle cramp during a sprint. (a) Suggest whether a hot pack or cold pack should be applied to relieve the cramp. (b) Explain the thermochemical principle of the pack used.',
        marks: 3,
        answer: {
          finalAnswer: '(a) An instant hot pack.\n(b) The hot pack contains chemicals (such as anhydrous calcium chloride and water) that undergo an exothermic reaction when mixed. This releases heat energy to the surroundings, dilating blood vessels and increasing blood circulation to relax the cramped muscle.',
          fullWorking: [
            'Select hot pack for muscle cramp relaxation.',
            'Identify reaction as exothermic (heat released).',
            'Explain biological effect (increased blood flow / relaxation).'
          ]
        }
      }
    ],
    mindmap: {
      id: 'm-sc5',
      title: 'Thermochemistry (Form 3)',
      children: [
        {
          id: 'm-sc5-1',
          title: 'Exothermic Reactions',
          children: [
            { id: 'm-sc5-1a', title: 'Releases heat to surroundings (Temp increases)' },
            { id: 'm-sc5-1b', title: 'Examples: Combustion, Neutralisation, Respiration, Hot packs (CaCl2)' }
          ]
        },
        {
          id: 'm-sc5-2',
          title: 'Endothermic Reactions',
          children: [
            { id: 'm-sc5-2a', title: 'Absorbs heat from surroundings (Temp decreases)' },
            { id: 'm-sc5-2b', title: 'Examples: Thermal decomposition, Photosynthesis, Cold packs (NH4NO3)' }
          ]
        }
      ]
    },
    experiment: {
      title: 'Comparing Exothermic and Endothermic Reactions Using Dissolution of Solids',
      aim: 'To identify exothermic and endothermic reactions by measuring temperature changes during chemical dissolution.',
      hypothesis: 'Dissolving sodium hydroxide in water is an exothermic reaction (temperature rises), while dissolving ammonium chloride in water is an endothermic reaction (temperature drops).',
      variables: {
        manipulated: 'Type of solid dissolved (Sodium hydroxide pellets vs Ammonium chloride powder).',
        responding: 'Final temperature / change in temperature of the solution.',
        constant: 'Volume of distilled water (50 cm³), polystyrene cup container.'
      },
      apparatusMaterials: ['Polystyrene cups with lids', 'Thermometer (0 - 100 °C)', 'Measuring cylinder (50 cm³)', 'Spatula', 'Distilled water', 'Solid sodium hydroxide (NaOH)', 'Solid ammonium chloride (NH4Cl)'],
      procedure: [
        'Pour 50 cm³ of distilled water into a polystyrene cup.',
        'Measure and record the initial temperature of the water.',
        'Add one spatula of sodium hydroxide pellets into the cup, stir gently with the thermometer, and record the highest temperature reached.',
        'Repeat the steps using a fresh cup with 50 cm³ of distilled water and add one spatula of ammonium chloride powder, recording the lowest temperature reached.'
      ],
      observationTable: {
        headers: ['Solid Added', 'Initial Temp (°C)', 'Final Temp (°C)', 'Change (ΔT)', 'Type of Reaction'],
        rows: [
          ['Sodium Hydroxide (NaOH)', '28.0 °C', '36.5 °C', '+8.5 °C (Increase)', 'Exothermic Reaction'],
          ['Ammonium Chloride (NH4Cl)', '28.0 °C', '22.0 °C', '-6.0 °C (Decrease)', 'Endothermic Reaction']
        ]
      },
      resultsAndAnalysis: 'The dissolution of NaOH caused a positive temperature change, releasing thermal energy to the solution. The dissolution of NH4Cl caused a negative temperature change, absorbing thermal energy from the solution.',
      conclusion: 'Hypothesis accepted. Dissolving NaOH is exothermic; dissolving NH4Cl is endothermic.',
      safetyPrecautions: ['Use a polystyrene cup because it is a good heat insulator, preventing heat exchange with the surrounding air.', 'NaOH is caustic; handle with spatula and avoid skin contact.'],
      commonMistakes: ['Using a glass beaker instead of an insulated polystyrene cup, leading to significant heat loss errors.']
    },
    answeringTechniques: [
      {
        category: 'Thermochemical Calculations & Concept Questions',
        title: 'Mastering Thermochemical Energy Questions and Pack Applications',
        keyQuestionTypes: ['Classifying exothermic vs endothermic processes', 'Energy level diagram interpretation', 'Designing instant hot/cold packs'],
        essentialKeywords: [
          'Heat released to surroundings -> Temperature increases -> Exothermic',
          'Heat absorbed from surroundings -> Temperature decreases -> Endothermic',
          'Bond breaking is endothermic; bond forming is exothermic',
          'Polystyrene cup acts as heat insulator'
        ],
        stepByStepStrategy: [
          'Whenever given a table of temperatures: Calculate $\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$. If $\\Delta T > 0 \\rightarrow$ Exothermic. If $\\Delta T < 0 \\rightarrow$ Endothermic.',
          'In energy level diagrams: If the products line is lower than reactants, heat is given off (Exothermic). If products line is higher, heat is taken in (Endothermic).'
        ],
        commonErrorsToAvoid: [
          'Writing that temperature increases in endothermic reactions (Remember: Endo absorbs heat from surrounding, so surrounding temperature DROPS).'
        ]
      }
    ]
  }
];
