import { ChapterMCQ } from './quizUtils';

export const scienceChapterQuizBank: ChapterMCQ[] = [
  // ==================== SCIENCE CHAPTER 1: STIMULI AND RESPONSES (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-1-1',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.1.1',
    topic: 'Human Nervous System Components',
    difficulty: 'Easy',
    question: 'The Central Nervous System (CNS) in humans consists of the:',
    options: ['Brain and spinal cord', 'Cranial nerves and spinal nerves', 'Heart and blood vessels', 'Sensory organs only'],
    correctIndex: 0,
    explanation: 'The CNS consists strictly of the brain and spinal cord. Cranial and spinal nerves form the Peripheral Nervous System (PNS).'
  },
  {
    id: 'mcq-sci-1-2',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.1.2',
    topic: 'Voluntary vs Involuntary Actions',
    difficulty: 'Easy',
    question: 'Which of the following actions is an example of an involuntary action controlled by the medulla oblongata?',
    options: ['Peristalsis in the oesophagus', 'Writing notes in class', 'Kicking a football', 'Singing a song'],
    correctIndex: 0,
    explanation: 'Involuntary actions like peristalsis, heartbeat, and breathing occur automatically without conscious will and are coordinated by the medulla oblongata.'
  },
  {
    id: 'mcq-sci-1-3',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.2.1',
    topic: 'Structure of the Eye (Photoreceptors)',
    difficulty: 'Easy',
    question: 'Which structure in the human eye contains rod and cone photoreceptor cells that detect light and colour?',
    options: ['Retina', 'Cornea', 'Iris', 'Pupil'],
    correctIndex: 0,
    explanation: 'The retina is the inner light-sensitive layer containing rods (for dim light vision) and cones (for bright light and colour vision).'
  },
  {
    id: 'mcq-sci-1-4',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.2.2',
    topic: 'Mechanism of Hearing',
    difficulty: 'Easy',
    question: 'Which part of the inner ear contains hair cells that convert sound vibrations into nerve impulses?',
    options: ['Cochlea', 'Eardrum (tympanic membrane)', 'Ossicles (ear bones)', 'Eustachian tube'],
    correctIndex: 0,
    explanation: 'The cochlea contains fluid and microscopic hair sensory cells that translate mechanical vibrations into electrical nerve impulses sent along the auditory nerve.'
  },
  {
    id: 'mcq-sci-1-5',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.3.1',
    topic: 'Plant Tropisms (Phototropism)',
    difficulty: 'Easy',
    question: 'Plant shoots growing towards a unilateral light source exhibit:',
    options: ['Positive phototropism', 'Negative phototropism', 'Positive geotropism', 'Thigmotropism'],
    correctIndex: 0,
    explanation: 'Shoots bending towards light show positive phototropism, allowing leaves to absorb maximum sunlight for photosynthesis.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-1-6',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.1.2',
    topic: 'Reflex Arc Pathway',
    difficulty: 'Medium',
    question: 'What is the correct impulse pathway when a person accidentally touches a hot object?',
    options: [
      'Receptor → Sensory neurone → Relay neurone in spinal cord → Motor neurone → Effector',
      'Effector → Motor neurone → Brain → Sensory neurone → Receptor',
      'Receptor → Motor neurone → Spinal cord → Sensory neurone → Effector',
      'Receptor → Relay neurone → Sensory neurone → Motor neurone → Brain'
    ],
    correctIndex: 0,
    explanation: 'The reflex arc bypasses the conscious brain for speed: Receptor → Sensory neurone → Relay neurone in spinal cord → Motor neurone → Effector (muscle).'
  },
  {
    id: 'mcq-sci-1-7',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.2.3',
    topic: 'Correcting Short-Sightedness (Myopia)',
    difficulty: 'Medium',
    question: 'Short-sightedness (myopia) is caused by an eyeball that is too long or a lens that is too thick, focusing images in front of the retina. It is corrected using:',
    options: ['Concave lenses', 'Convex lenses', 'Cylindrical lenses', 'Bifocal flat glass'],
    correctIndex: 0,
    explanation: 'Concave lenses diverge incoming light rays slightly before entering the eye so that the image focuses sharply on the retina.'
  },
  {
    id: 'mcq-sci-1-8',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.2.4',
    topic: 'Skin Receptor Density & Sensitivity',
    difficulty: 'Medium',
    question: 'Why are fingertips significantly more sensitive to touch than the back of the hand or elbows?',
    options: [
      'Fingertips have a higher density of touch receptors and a thinner epidermis',
      'Fingertips have thicker adipose fat layers',
      'Fingertips lack pain receptors',
      'Fingertips are closer to the central nervous system'
    ],
    correctIndex: 0,
    explanation: 'Areas with dense tactile receptors and thin epidermis (fingertips, lips) have high spatial resolution and sensitivity.'
  },
  {
    id: 'mcq-sci-1-9',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.3.2',
    topic: 'Nastic Movements in Plants',
    difficulty: 'Medium',
    question: 'How do nastic movements (such as the closing of Mimosa pudica leaves upon touch) differ from tropisms?',
    options: [
      'Nastic movements are non-directional responses to stimuli and occur rapidly due to turgor pressure changes',
      'Nastic movements are slow growth responses directed toward the stimulus',
      'Nastic movements only occur in roots',
      'Nastic movements are irreversible permanent cellular growth'
    ],
    correctIndex: 0,
    explanation: 'Tropisms are directional, slow growth responses (auxin-mediated), whereas nastic movements are non-directional, reversible, and rapid turgor responses.'
  },
  {
    id: 'mcq-sci-1-10',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.4.1',
    topic: 'Stereoscopic vs Monocular Vision',
    difficulty: 'Medium',
    question: 'Which of the following is a major advantage of stereoscopic (binocular) vision in predatory animals like eagles and tigers?',
    options: [
      'Provides accurate three-dimensional depth perception and distance estimation',
      'Provides a wide 360-degree panoramic field of view to spot predators',
      'Allows both eyes to focus independently on two different moving objects',
      'Does not require overlapping visual fields'
    ],
    correctIndex: 0,
    explanation: 'Stereoscopic vision combines overlapping visual fields from both forward-facing eyes to provide accurate 3D depth and distance estimation.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-1-11',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.3.1',
    topic: 'Auxin Distribution in Geotropism',
    difficulty: 'Hard',
    question: 'In a horizontally placed seedling, gravity causes auxins to accumulate on the lower side of both shoot and root. Why does the shoot bend upwards while the root bends downwards?',
    options: [
      'High auxin concentration stimulates cell elongation in shoots but inhibits cell elongation in roots',
      'Auxin breaks down cells in roots while multiplying cells in shoots',
      'Shoots have no auxin receptors',
      'Roots are positively phototropic'
    ],
    correctIndex: 0,
    explanation: 'Roots are far more sensitive to auxin than shoots; high auxin on the lower root side inhibits elongation (upper cells grow faster → bends down), whereas in shoots it stimulates elongation (lower cells grow faster → bends up).'
  },
  {
    id: 'mcq-sci-1-12',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.2.3',
    topic: 'Astigmatism Defect and Correction',
    difficulty: 'Hard',
    question: 'A patient experiences uneven blurring of objects in horizontal and vertical planes simultaneously. What is the eye defect and its corrective lens?',
    options: [
      'Astigmatism, corrected with cylindrical lenses',
      'Hyperopia, corrected with convex lenses',
      'Presbyopia, corrected with bifocal lenses',
      'Cataract, corrected with concave lenses'
    ],
    correctIndex: 0,
    explanation: 'Astigmatism is caused by irregular curvature of the cornea or lens, causing rays to focus at different points. It is corrected using cylindrical lenses.'
  },
  {
    id: 'mcq-sci-1-13',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.2.2',
    topic: 'Eustachian Tube Function',
    difficulty: 'Hard',
    question: 'During rapid altitude changes on an airplane, swallowing or yawning relieves ear discomfort because the Eustachian tube:',
    options: [
      'Equalises air pressure on both sides of the tympanic membrane (eardrum)',
      'Drains excess perilymph from the semicircular canals',
      'Prevents sound waves from damaging the ossicles',
      'Increases blood flow to the auditory nerve'
    ],
    correctIndex: 0,
    explanation: 'The Eustachian tube connects the middle ear to the pharynx, opening during swallowing/yawning to balance pressure between the external atmosphere and the middle ear cavity.'
  },
  {
    id: 'mcq-sci-1-14',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.4.2',
    topic: 'Stereophonic Hearing Mechanism',
    difficulty: 'Hard',
    question: 'How does stereophonic hearing enable humans and animals to pinpoint the exact spatial origin of a sound?',
    options: [
      'The brain compares subtle differences in arrival time and sound intensity between the two ears',
      'One ear hears high frequencies while the other hears low frequencies',
      'Sound vibrations travel directly through cranial bones to the cerebellum',
      'The semicircular canals determine sound wave frequency'
    ],
    correctIndex: 0,
    explanation: 'The brain detects microsecond differences in the arrival time and intensity of sound waves between the left and right ears to triangulate sound direction.'
  },
  {
    id: 'mcq-sci-1-15',
    chapterId: 'science-ch1',
    chapterNumber: 1,
    subject: 'science',
    learningStandardCode: '1.4.3',
    topic: 'Sensory Adaptation in Animals (Echolocation & Lateral Lines)',
    difficulty: 'Hard',
    question: 'Which sensory adaptation is correctly matched with its mechanism in animals?',
    options: [
      'Fish lateral line: detects subtle water vibrations, currents, and pressure waves',
      'Bat echolocation: detects infrared heat radiation from prey',
      'Pit viper facial pit: emits high frequency ultrasonic clicks',
      'Electric eel: detects magnetic fields of the Earth for navigation only'
    ],
    correctIndex: 0,
    explanation: 'The lateral line system in fish consists of neuromast receptors that detect minute mechanical vibrations and pressure changes in surrounding water.'
  },

  // ==================== SCIENCE CHAPTER 2: RESPIRATION (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-2-1',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.1.1',
    topic: 'Human Respiratory Pathway',
    difficulty: 'Easy',
    question: 'What is the correct sequence of air passage during human inhalation?',
    options: [
      'Nostrils → Pharynx → Larynx → Trachea → Bronchus → Bronchiole → Alveolus',
      'Nostrils → Trachea → Larynx → Pharynx → Alveolus → Bronchiole',
      'Nostrils → Bronchus → Trachea → Bronchiole → Alveolus',
      'Nostrils → Larynx → Pharynx → Bronchiole → Bronchus → Alveolus'
    ],
    correctIndex: 0,
    explanation: 'Air passes from nostrils → pharynx → larynx → trachea → bronchi → bronchioles → alveoli where gaseous exchange occurs.'
  },
  {
    id: 'mcq-sci-2-2',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.1.2',
    topic: 'Breathing Mechanism (Inhalation)',
    difficulty: 'Easy',
    question: 'During human inhalation, what happens to the diaphragm and ribcage?',
    options: [
      'Diaphragm contracts and flattens; external intercostal muscles contract moving ribcage upwards and outwards',
      'Diaphragm relaxes and curves up; ribcage moves downwards and inwards',
      'Diaphragm contracts and curves up; ribcage moves downwards and outwards',
      'Diaphragm relaxes and flattens; ribcage remains stationary'
    ],
    correctIndex: 0,
    explanation: 'During inhalation, the diaphragm contracts and flattens, and the ribcage moves up and out, enlarging the thoracic volume and lowering internal air pressure.'
  },
  {
    id: 'mcq-sci-2-3',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.2.1',
    topic: 'Alveoli Adaptations for Gas Exchange',
    difficulty: 'Easy',
    question: 'Which of the following is an adaptation of alveoli for efficient gas exchange?',
    options: [
      'One-cell thick moist wall surrounded by a dense network of blood capillaries',
      'Thick muscular walls lined with cartilage rings',
      'Completely dry surface to prevent gas absorption',
      'Small surface area to concentrate oxygen'
    ],
    correctIndex: 0,
    explanation: 'Alveoli have a massive surface area, moist surfaces (dissolves gases), one-cell thick walls (short diffusion path), and dense capillaries.'
  },
  {
    id: 'mcq-sci-2-4',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.3.1',
    topic: 'Harmful Substances in Cigarette Smoke',
    difficulty: 'Easy',
    question: 'Which component of cigarette smoke binds irreversibly with haemoglobin to form carboxyhaemoglobin, drastically reducing oxygen transport?',
    options: ['Carbon monoxide', 'Nicotine', 'Tar', 'Sulphur dioxide'],
    correctIndex: 0,
    explanation: 'Carbon monoxide has ~200 times higher affinity for haemoglobin than oxygen, forming carboxyhaemoglobin and depriving body tissues of oxygen.'
  },
  {
    id: 'mcq-sci-2-5',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.4.1',
    topic: 'Insect Respiratory Structure',
    difficulty: 'Easy',
    question: 'Insects like grasshoppers breathe through tiny breathing pores called spiracles leading into a branching system of:',
    options: ['Tracheoles and tracheae', 'Gill filaments and lamellae', 'Moist skin capillaries', 'Alveoli and bronchi'],
    correctIndex: 0,
    explanation: 'Insects breathe via a tracheal system: spiracles → trachea → moist tracheoles that directly deliver oxygen to body cells without blood involvement.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-2-6',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.1.2',
    topic: 'Thoracic Pressure & Volume Relationship',
    difficulty: 'Medium',
    question: 'During exhalation, thoracic volume decreases. How does this facilitate the movement of air out of the lungs?',
    options: [
      'Thoracic air pressure rises above atmospheric pressure, forcing air out',
      'Thoracic air pressure drops below atmospheric pressure, sucking air out',
      'Lungs contract actively using skeletal muscle fibers',
      'Atmospheric pressure pushes air into the pleural cavity'
    ],
    correctIndex: 0,
    explanation: 'Decreased volume increases intra-pulmonary pressure (Boyle’s Law) above external atmospheric pressure, forcing air out along the pressure gradient.'
  },
  {
    id: 'mcq-sci-2-7',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.2.2',
    topic: 'Gas Exchange Chemistry in Blood',
    difficulty: 'Medium',
    question: 'In blood capillaries surrounding alveoli, oxygen combines reversibly with haemoglobin in red blood cells to form:',
    options: ['Oxyhaemoglobin', 'Carboxyhaemoglobin', 'Carbaminohaemoglobin', 'Hydrogen carbonate ions'],
    correctIndex: 0,
    explanation: 'In high partial pressure of oxygen (lungs): Haemoglobin + Oxygen ⇌ Oxyhaemoglobin (bright red).'
  },
  {
    id: 'mcq-sci-2-8',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.3.2',
    topic: 'Emphysema Pathophysiology',
    difficulty: 'Medium',
    question: 'How does long-term exposure to toxic smoke lead to the respiratory disease emphysema?',
    options: [
      'Destruction and breakdown of alveolar walls, reducing the total surface area for gas exchange',
      'Bacterial infection causing fluid buildup inside the pleural cavity',
      'Spasmodic contraction of bronchioles due to allergic response',
      'Excessive calcification of the diaphragm muscle'
    ],
    correctIndex: 0,
    explanation: 'Emphysema is characterized by irreversible destruction of alveolar septa, creating enlarged air spaces with severely diminished surface area for diffusion.'
  },
  {
    id: 'mcq-sci-2-9',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.4.1',
    topic: 'Fish Gaseous Exchange Adaptations',
    difficulty: 'Medium',
    question: 'Which adaptation of fish gills ensures maximum extraction of dissolved oxygen from water?',
    options: [
      'Countercurrent flow where blood and water flow in opposite directions across thin lamellae',
      'Concurrent flow where water and blood flow in the same direction',
      'Thick chitinous covering on gill filaments',
      'Active pumping of blood into the opercular cavity'
    ],
    correctIndex: 0,
    explanation: 'Countercurrent exchange maintains a continuous concentration gradient of oxygen along the entire length of the capillary bed in gill lamellae.'
  },
  {
    id: 'mcq-sci-2-10',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.5.1',
    topic: 'Plant Gas Exchange (Stomata Regulation)',
    difficulty: 'Medium',
    question: 'During the daytime in bright sunlight, guard cells become turgid and curve outward because:',
    options: [
      'Photosynthesis produces glucose, causing water to enter guard cells by osmosis',
      'Water leaves guard cells by osmosis, causing them to shrink',
      'Stomata close to conserve carbon dioxide',
      'Guard cells lose potassium ions to surrounding epidermal cells'
    ],
    correctIndex: 0,
    explanation: 'In light, guard cells produce glucose and accumulate potassium, lowering their water potential. Water enters by osmosis, making them turgid; their thicker inner walls cause them to curve open.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-2-11',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.2.2',
    topic: 'Internal Respiration / Cellular Tissue Exchange',
    difficulty: 'Hard',
    question: 'When oxyhaemoglobin reaches actively respiring muscle tissues with low oxygen partial pressure and high carbon dioxide concentrations, what occurs?',
    options: [
      'Oxyhaemoglobin dissociates to release oxygen into tissue fluid; CO₂ diffuses into blood mainly as HCO₃⁻',
      'Haemoglobin permanently binds CO₂ to form carboxyhaemoglobin',
      'Oxygen diffuses out by active transport against its concentration gradient',
      'Red blood cells burst to release oxygen into the interstitial spaces'
    ],
    correctIndex: 0,
    explanation: 'In respiring cells, low pO₂ and high pCO₂ (Bohr effect) trigger oxyhaemoglobin to dissociate and release O₂. CO₂ diffuses into blood and is transported as bicarbonate (HCO₃⁻), carbaminohaemoglobin, and dissolved gas.'
  },
  {
    id: 'mcq-sci-2-12',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.3.2',
    topic: 'Acid Rain & Respiratory Health',
    difficulty: 'Hard',
    question: 'Gases such as sulphur dioxide (SO₂) and nitrogen dioxide (NO₂) from vehicular emissions react with atmospheric moisture to produce acid rain. What effect do these acidic aerosols have on the human respiratory tract?',
    options: [
      'They irritate mucous membranes, paralyze cilia, and trigger severe inflammation/bronchospasm',
      'They stimulate the rapid multiplication of healthy ciliated epithelial cells',
      'They increase surfactant production inside the alveoli',
      'They convert haemoglobin into myoglobin in the trachea'
    ],
    correctIndex: 0,
    explanation: 'Acidic gases destroy and paralyze airway cilia, preventing mucus clearance and inducing chronic bronchitis and asthma exacerbations.'
  },
  {
    id: 'mcq-sci-2-13',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.4.1',
    topic: 'Amphibian Dual Respiratory System',
    difficulty: 'Hard',
    question: 'How do frogs carry out gas exchange while hibernating underwater compared to active terrestrial breathing?',
    options: [
      'Underwater: solely through thin, moist skin capillaries (cutaneous respiration); Land: skin and buccal-lung pumping',
      'Underwater: through internal gill filaments; Land: solely through tracheoles',
      'Underwater: through air sacs; Land: negative pressure thoracic aspiration',
      'Frogs do not respire when submerged underwater'
    ],
    correctIndex: 0,
    explanation: 'Submerged frogs rely entirely on cutaneous respiration across moist, vascularized skin. On land, they supplement with positive-pressure buccal cavity pumping into simple sac-like lungs.'
  },
  {
    id: 'mcq-sci-2-14',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.5.2',
    topic: 'Lenticels vs Stomata in Woody Stems',
    difficulty: 'Hard',
    question: 'How does gaseous exchange occur in the mature woody stems and roots of large trees where impermeable cork bark prevents stomata formation?',
    options: [
      'Through lenticels (loosely packed nonsuberized cork cells forming permanent raised pores)',
      'Through xylem vessels via capillary action',
      'Through phloem sieve tubes during translocation',
      'Woody stems do not require oxygen for cellular respiration'
    ],
    correctIndex: 0,
    explanation: 'Lenticels are raised porous openings in woody periderm that provide continuous pathways for gas exchange to underlying living bark and cambium tissues.'
  },
  {
    id: 'mcq-sci-2-15',
    chapterId: 'science-ch2',
    chapterNumber: 2,
    subject: 'science',
    learningStandardCode: '2.1.2',
    topic: 'Bell Jar Respiratory Model Limitations',
    difficulty: 'Hard',
    question: 'In the classic bell-jar and rubber sheet lung demonstration model, what is a key limitation compared to actual human breathing?',
    options: [
      'The glass bell jar cannot expand or move upwards and outwards like the human ribcage',
      'The balloons cannot inflate with air',
      'The Y-tube does not split into two branches',
      'Air pressure cannot change inside the glass jar'
    ],
    correctIndex: 0,
    explanation: 'The glass bell jar is rigid and fixed, demonstrating only diaphragmatic movement while failing to model intercostal muscle action and ribcage elevation.'
  },

  // ==================== SCIENCE CHAPTER 3: TRANSPORTATION (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-3-1',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.1.1',
    topic: 'Human Heart Chambers',
    difficulty: 'Easy',
    question: 'Which chamber of the human heart has the thickest muscular wall because it pumps oxygenated blood to the entire body through the aorta?',
    options: ['Left ventricle', 'Right ventricle', 'Left atrium', 'Right atrium'],
    correctIndex: 0,
    explanation: 'The left ventricle has the thickest myocardium to generate high hydrostatic pressure required to circulate blood throughout systemic circulation.'
  },
  {
    id: 'mcq-sci-3-2',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.1.2',
    topic: 'Blood Vessels (Arteries vs Veins vs Capillaries)',
    difficulty: 'Easy',
    question: 'Which type of blood vessel contains semi-lunar valves to prevent the backflow of blood under low pressure?',
    options: ['Veins', 'Arteries', 'Capillaries', 'Arterioles'],
    correctIndex: 0,
    explanation: 'Veins carry blood back to the heart under low pressure and have valves to ensure unidirectional flow against gravity.'
  },
  {
    id: 'mcq-sci-3-3',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.2.1',
    topic: 'Blood Components Functions',
    difficulty: 'Easy',
    question: 'Which blood component contains no nucleus, is biconcave in shape, and contains haemoglobin for oxygen transport?',
    options: ['Red blood cells (Erythrocytes)', 'White blood cells (Leucocytes)', 'Platelets (Thrombocytes)', 'Blood plasma'],
    correctIndex: 0,
    explanation: 'Erythrocytes (red blood cells) lose their nucleus to maximize haemoglobin storage and have a biconcave disc shape to increase surface area-to-volume ratio.'
  },
  {
    id: 'mcq-sci-3-4',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.3.1',
    topic: 'ABO Blood Compatibility',
    difficulty: 'Easy',
    question: 'Which ABO blood group is known as the "universal recipient" because its plasma contains neither Anti-A nor Anti-B antibodies?',
    options: ['Group AB', 'Group O', 'Group A', 'Group B'],
    correctIndex: 0,
    explanation: 'Group AB red blood cells have both A and B antigens, so their plasma contains no Anti-A or Anti-B antibodies, making them universal recipients.'
  },
  {
    id: 'mcq-sci-3-5',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.4.1',
    topic: 'Plant Vascular Tissues',
    difficulty: 'Easy',
    question: 'In flowering plants, xylem tissue is responsible for transporting:',
    options: [
      'Water and dissolved mineral salts from roots to leaves',
      'Sucrose and amino acids from leaves to roots',
      'Glucose produced during photosynthesis to flower petals only',
      'Hormones from fruit to soil'
    ],
    correctIndex: 0,
    explanation: 'Xylem conducts water and mineral salts unidirectionally from roots to aerial parts. Phloem transports organic nutrients (sucrose/amino acids).'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-3-6',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.1.3',
    topic: 'Double Circulatory System (Pulmonary vs Systemic)',
    difficulty: 'Medium',
    question: 'What is the correct pathway of pulmonary circulation in the human body?',
    options: [
      'Right ventricle → Pulmonary artery → Lungs → Pulmonary vein → Left atrium',
      'Left ventricle → Aorta → Body tissues → Vena cava → Right atrium',
      'Right atrium → Pulmonary vein → Lungs → Pulmonary artery → Left ventricle',
      'Left atrium → Pulmonary artery → Lungs → Vena cava → Right ventricle'
    ],
    correctIndex: 0,
    explanation: 'Pulmonary circulation: Deoxygenated blood leaves Right Ventricle via Pulmonary Artery → Lungs (oxygenated) → Pulmonary Vein → Left Atrium.'
  },
  {
    id: 'mcq-sci-3-7',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.2.2',
    topic: 'Blood Clotting Mechanism',
    difficulty: 'Medium',
    question: 'When a blood vessel is damaged, platelets trigger an enzyme cascade that converts soluble fibrinogen into:',
    options: [
      'Insoluble fibrin mesh that traps red blood cells to form a clot',
      'Soluble prothrombin',
      'Vitamin K antibodies',
      'Calcium ions'
    ],
    correctIndex: 0,
    explanation: 'Thrombin catalyzes the conversion of soluble plasma fibrinogen into insoluble insoluble fibrin threads that weave a mesh to trap platelets and erythrocytes.'
  },
  {
    id: 'mcq-sci-3-8',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.3.2',
    topic: 'Rhesus Factor (Rh incompatibility)',
    difficulty: 'Medium',
    question: 'An Rh-negative mother carrying a second Rh-positive fetus is at risk of erythroblastosis fetalis because:',
    options: [
      'Anti-D antibodies produced during the first pregnancy cross the placenta and destroy fetal red blood cells',
      'The fetus produces antibodies that attack the mother’s heart',
      'Rh antigens cross into maternal milk causing immediate agglutination',
      'The mother lacks ABO blood antigens'
    ],
    correctIndex: 0,
    explanation: 'Sensitization in the 1st pregnancy creates maternal IgG Anti-D antibodies that can cross the placenta in subsequent Rh+ pregnancies, lysing fetal RBCs.'
  },
  {
    id: 'mcq-sci-3-9',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.4.2',
    topic: 'Transpiration Stream Factors',
    difficulty: 'Medium',
    question: 'Which combination of environmental conditions produces the HIGHEST rate of transpiration in plants?',
    options: [
      'High temperature, bright sunlight, strong wind, and low relative humidity',
      'Low temperature, darkness, still air, and high relative humidity',
      'High humidity, low light, and no air movement',
      'Cold temperature, high humidity, and high wind'
    ],
    correctIndex: 0,
    explanation: 'High temp (increases evaporation), light (opens stomata), wind (removes moist boundary layer), and dry air (steep vapor gradient) maximize transpiration.'
  },
  {
    id: 'mcq-sci-3-10',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.4.3',
    topic: 'Girdling / Ringing Experiment in Plants',
    difficulty: 'Medium',
    question: 'In a ringing experiment where a ring of bark (phloem) is removed from a woody stem while xylem remains intact, what happens after several weeks?',
    options: [
      'The stem swells above the ring due to accumulated sucrose/translocated food, while the plant below starves slowly',
      'The plant dies immediately within 24 hours from severe dehydration',
      'The leaves wilt immediately because water cannot reach them',
      'The stem swells below the ring because food travels upward only'
    ],
    correctIndex: 0,
    explanation: 'Phloem removal blocks downward translocation of photosynthetic sugars, causing carbohydrates to accumulate and swell the stem tissue above the cut.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-3-11',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.4.2',
    topic: 'Forces Driving Transpiration Pull (Cohesion-Tension)',
    difficulty: 'Hard',
    question: 'What physical forces allow a continuous, unbroken column of water to rise over 50 metres up tall tropical rainforest trees against gravity?',
    options: [
      'Transpiration pull combined with cohesion (water-water hydrogen bonding) and adhesion (water-xylem wall attraction)',
      'Active osmotic pumping by root cortex cells alone',
      'Positive air pressure pushing water upwards from the soil atmosphere',
      'Capillary action inside phloem sieve tubes'
    ],
    correctIndex: 0,
    explanation: 'Evaporation at stomata creates negative pressure (transpiration pull). High cohesive forces prevent cavitation (column breakage) and adhesion to hydrophilic xylem walls supports the weight.'
  },
  {
    id: 'mcq-sci-3-12',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.1.4',
    topic: 'Comparative Circulatory Systems in Vertebrates',
    difficulty: 'Hard',
    question: 'How does the single circulatory system of a fish differ functionally from the double circulatory system of mammals?',
    options: [
      'In fish, blood passes through the two-chambered heart only once per complete circuit, resulting in low systemic blood pressure',
      'Fish have a 4-chambered heart with complete separation of oxygenated and deoxygenated blood',
      'Mammalian blood mixes deoxygenated and oxygenated blood in a single ventricle',
      'Fish hearts have higher pumping pressure than mammalian left ventricles'
    ],
    correctIndex: 0,
    explanation: 'Fish have 1 atrium and 1 ventricle. Blood flows: Heart → Gills (capillary resistance drops pressure) → Body tissues → Heart, yielding low systemic pressure.'
  },
  {
    id: 'mcq-sci-3-13',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.1.2',
    topic: 'Coronary Artery Atherosclerosis Pathophysiology',
    difficulty: 'Hard',
    question: 'Atherosclerosis in coronary arteries leads to angina and myocardial infarction (heart attack) because:',
    options: [
      'Plaque deposits (cholesterol/fat) narrow arterial lumen and form thrombi, starving heart muscle of oxygen and nutrients',
      'Excess calcium prevents heart valves from closing',
      'Red blood cells become rigid and puncture the aorta',
      'The pericardial sac fills with stomach acid'
    ],
    correctIndex: 0,
    explanation: 'Lipid and fibrous plaque build-up obstructs coronary arteries, inducing ischaemia (oxygen deficiency) in myocardial tissues.'
  },
  {
    id: 'mcq-sci-3-14',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.4.2',
    topic: 'Guttation vs Transpiration Mechanism',
    difficulty: 'Hard',
    question: 'Guttation is the exudation of water droplets along leaf margins (hydathodes). When does guttation occur and what causes it?',
    options: [
      'At night under high soil moisture and 100% humidity, driven by root pressure when transpiration is negligible',
      'At midday under bright sunlight, driven by high transpiration rates',
      'During drought periods to eliminate excess mineral salts',
      'When phloem sieve tubes rupture under osmotic stress'
    ],
    correctIndex: 0,
    explanation: 'When humidity is high (transpiration suppressed) and soil is moist, active root ion uptake generates root pressure, pushing xylem sap out through specialized hydathodes.'
  },
  {
    id: 'mcq-sci-3-15',
    chapterId: 'science-ch3',
    chapterNumber: 3,
    subject: 'science',
    learningStandardCode: '3.3.1',
    topic: 'Blood Transfusion Agglutination Reaction',
    difficulty: 'Hard',
    question: 'What catastrophic reaction happens if a patient with Blood Group B is mistakenly transfused with Blood Group A donor blood?',
    options: [
      'The recipient’s Anti-A plasma antibodies bind to donor A antigens, causing mass agglutination and haemolysis',
      'The donor’s red blood cells convert into white blood cells',
      'The recipient’s blood becomes acidic and coagulates the vena cava',
      'Nothing occurs because group A and group B share identical Rh factors'
    ],
    correctIndex: 0,
    explanation: 'Group B recipient has Anti-A antibodies in plasma. These antibodies immediately bind the A-antigens on transfused donor RBCs, clumping them and causing severe renal failure and shock.'
  },

  // ==================== SCIENCE CHAPTER 4: REACTIVITY OF METALS (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-4-1',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.1.1',
    topic: 'Natural Minerals Classification',
    difficulty: 'Easy',
    question: 'Which of the following is an example of an uncombined natural element found free in the Earth’s crust?',
    options: ['Gold (Aurum)', 'Bauxite (Aluminium oxide)', 'Haematite (Iron oxide)', 'Galena (Lead sulphide)'],
    correctIndex: 0,
    explanation: 'Gold, platinum, and silver are unreactive noble metals that exist as free native elements rather than combined mineral ores.'
  },
  {
    id: 'mcq-sci-4-2',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.1.2',
    topic: 'Common Mineral Names and Chemical Compounds',
    difficulty: 'Easy',
    question: 'The mineral bauxite is the primary commercial ore used for extracting which metal?',
    options: ['Aluminium', 'Iron', 'Tin', 'Copper'],
    correctIndex: 0,
    explanation: 'Bauxite is hydrated aluminium oxide (Al₂O₃·2H₂O), the principal ore for aluminium smelting.'
  },
  {
    id: 'mcq-sci-4-3',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.1',
    topic: 'Metal Reaction with Oxygen',
    difficulty: 'Easy',
    question: 'When magnesium ribbon burns in air with a dazzling white flame, the product formed is:',
    options: ['Magnesium oxide (white solid powder)', 'Magnesium carbonate', 'Magnesium chloride', 'Magnesium hydroxide solution'],
    correctIndex: 0,
    explanation: '2Mg + O₂ → 2MgO. Magnesium burns vigorously with a brilliant white flame to produce white magnesium oxide ash.'
  },
  {
    id: 'mcq-sci-4-4',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.2',
    topic: 'Reactivity Series Position of Carbon',
    difficulty: 'Easy',
    question: 'In the Reactivity Series of Metals, Carbon is located between which two metals?',
    options: ['Aluminium and Zinc', 'Potassium and Sodium', 'Iron and Lead', 'Copper and Silver'],
    correctIndex: 0,
    explanation: 'K > Na > Ca > Mg > Al > [CARBON] > Zn > [HYDROGEN] > Fe > Sn > Pb > Cu > Hg > Ag > Au.'
  },
  {
    id: 'mcq-sci-4-5',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.3.1',
    topic: 'Blast Furnace Extraction of Iron',
    difficulty: 'Easy',
    question: 'In a blast furnace, what is the role of limestone (calcium carbonate, CaCO₃)?',
    options: [
      'To react with silica impurities (sand) to form molten slag (calcium silicate)',
      'To act as the main reducing agent',
      'To provide heat by burning with oxygen',
      'To prevent iron from melting'
    ],
    correctIndex: 0,
    explanation: 'Limestone decomposes to CaO which reacts with acidic silica (SiO₂) impurities: CaO + SiO₂ → CaSiO₃ (molten slag floats on molten iron).'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-4-6',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.1',
    topic: 'Metal Reactivity Order with Oxygen',
    difficulty: 'Medium',
    question: 'Which of the following lists metals in order of DECREASING reactivity towards oxygen?',
    options: [
      'Magnesium > Zinc > Iron > Lead > Copper',
      'Copper > Lead > Iron > Zinc > Magnesium',
      'Zinc > Magnesium > Copper > Iron > Lead',
      'Iron > Zinc > Magnesium > Lead > Copper'
    ],
    correctIndex: 0,
    explanation: 'Reactivity decreases from Mg (burns vigorously) > Zn (burns brightly) > Fe (glows brightly) > Pb (glows dimly) > Cu (glows faintly).'
  },
  {
    id: 'mcq-sci-4-7',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.2',
    topic: 'Reduction of Metal Oxides by Carbon',
    difficulty: 'Medium',
    question: 'Which metal oxide CANNOT be reduced by heating with carbon powder?',
    options: ['Aluminium oxide (Al₂O₃)', 'Zinc oxide (ZnO)', 'Iron(III) oxide (Fe₂O₃)', 'Lead(II) oxide (PbO)'],
    correctIndex: 0,
    explanation: 'Aluminium is more reactive than carbon; carbon cannot remove oxygen from aluminium oxide. (Aluminium is extracted by electrolysis).'
  },
  {
    id: 'mcq-sci-4-8',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.2',
    topic: 'Reduction of Metal Oxides by Hydrogen',
    difficulty: 'Medium',
    question: 'Hydrogen gas (H₂) can reduce copper(II) oxide to copper metal because:',
    options: [
      'Hydrogen is more reactive than copper in the reactivity series',
      'Copper is more reactive than hydrogen',
      'Hydrogen acts as an oxidizing agent',
      'Copper oxide is unstable at room temperature'
    ],
    correctIndex: 0,
    explanation: 'Hydrogen is positioned above copper in the reactivity series (Zn > H > Fe > Pb > Cu), so H₂ reduces CuO: CuO + H₂ → Cu + H₂O.'
  },
  {
    id: 'mcq-sci-4-9',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.3.1',
    topic: 'Chemical Reactions inside Blast Furnace',
    difficulty: 'Medium',
    question: 'What is the primary chemical reducing agent that reduces iron(III) oxide to molten iron in the blast furnace?',
    options: ['Carbon monoxide (CO)', 'Carbon dioxide (CO₂)', 'Calcium silicate (CaSiO₃)', 'Oxygen gas (O₂)'],
    correctIndex: 0,
    explanation: 'Coke burns to CO₂, which reacts with more coke to produce carbon monoxide gas: CO₂ + C → 2CO. CO then reduces iron ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂.'
  },
  {
    id: 'mcq-sci-4-10',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.3.2',
    topic: 'Environmental Impact of Mining',
    difficulty: 'Medium',
    question: 'Which of the following is a major environmental issue associated with unsystematic open-cast bauxite and iron mining?',
    options: [
      'Soil erosion, red sludge runoff contaminating water sources, and deforestation',
      'Excessive depletion of atmospheric argon gas',
      'Sudden increase in global oxygen levels',
      'Solidification of ocean currents'
    ],
    correctIndex: 0,
    explanation: 'Uncontrolled mining exposes topsoil, triggers heavy siltation/erosion, releases toxic heavy metals into river systems, and destroys biodiversity.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-4-11',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.2',
    topic: 'Thermite Reaction Mechanism',
    difficulty: 'Hard',
    question: 'In the exothermic thermite reaction used to weld railway tracks, aluminium powder reacts violently with iron(III) oxide. Why does this reaction occur?',
    options: [
      'Aluminium is more reactive than iron and has a higher affinity for oxygen, displacing iron and releasing immense heat',
      'Iron is more reactive and donates electrons to aluminium',
      'Carbon powder acts as a catalyst in the mixture',
      'Aluminium decomposes into molten iron'
    ],
    correctIndex: 0,
    explanation: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe + Heat. Aluminium has a much stronger affinity for oxygen than iron, releasing temperatures over 2500°C that produce molten iron.'
  },
  {
    id: 'mcq-sci-4-12',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.3.1',
    topic: 'Electrolytic Extraction vs Smelting Selection',
    difficulty: 'Hard',
    question: 'Why must potassium, sodium, calcium, magnesium, and aluminium be extracted exclusively by electrolysis of their molten compounds rather than carbon reduction?',
    options: [
      'They form exceptionally stable ionic bonds with oxygen and have higher reactivity than carbon',
      'They have low melting points below 0°C',
      'They do not react with chlorine gas',
      'Electrolysis is cheaper than heating with coke'
    ],
    correctIndex: 0,
    explanation: 'Metals above carbon in the reactivity series have higher affinity for oxygen than carbon does. Only powerful electrical energy during molten electrolysis can force electron gain.'
  },
  {
    id: 'mcq-sci-4-13',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.2.2',
    topic: 'Hydrogen Reduction Experiment Safety Precaution',
    difficulty: 'Hard',
    question: 'When reducing copper(II) oxide with dry hydrogen gas in a combustion tube, why must hydrogen gas flow through the apparatus for several minutes BEFORE heating?',
    options: [
      'To flush out all atmospheric air/oxygen and prevent an explosive mixture when heated',
      'To cool down the combustion tube',
      'To dissolve the copper oxide beforehand',
      'To increase the air pressure inside the tube'
    ],
    correctIndex: 0,
    explanation: 'A mixture of hydrogen and oxygen/air is explosive when ignited. Purging ensures only pure hydrogen gas remains inside the tube before heating.'
  },
  {
    id: 'mcq-sci-4-14',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.1.2',
    topic: 'Thermal Decomposition of Carbonates',
    difficulty: 'Hard',
    question: 'When calcium carbonate (calcite/limestone) is heated strongly in a crucible, it decomposes into:',
    options: [
      'Calcium oxide (quicklime) and carbon dioxide gas which turns limewater cloudy',
      'Calcium metal and carbon monoxide gas',
      'Calcium hydroxide and oxygen gas',
      'Calcium carbide'
    ],
    correctIndex: 0,
    explanation: 'CaCO₃(s) + Heat → CaO(s) + CO₂(g). The released carbon dioxide precipitates insoluble calcium carbonate when bubbled through Ca(OH)₂ limewater.'
  },
  {
    id: 'mcq-sci-4-15',
    chapterId: 'science-ch4',
    chapterNumber: 4,
    subject: 'science',
    learningStandardCode: '4.3.2',
    topic: 'Green Mining & Sustainable Mineral Extraction',
    difficulty: 'Hard',
    question: 'Which metallurgical strategy represents a sustainable approach to mitigate the depletion of natural mineral reserves?',
    options: [
      'Urban mining: intensive recycling of secondary metals from electronic e-waste and scrap alloys',
      'Deep sea ocean floor blasting without environmental impact assessments',
      'Banning the use of all metallic elements in civil infrastructure',
      'Burning low-grade ores in open-pit incinerators'
    ],
    correctIndex: 0,
    explanation: 'Urban mining recovers precious and industrial metals from discarded electronics and vehicles, consuming up to 95% less energy than virgin ore smelting.'
  },

  // ==================== SCIENCE CHAPTER 5: THERMOCHEMISTRY (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-5-1',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.1',
    topic: 'Exothermic Reaction Characteristics',
    difficulty: 'Easy',
    question: 'An exothermic chemical reaction is defined as a reaction that:',
    options: [
      'Releases heat energy to the surroundings, causing the surrounding temperature to rise',
      'Absorbs heat energy from the surroundings, causing surrounding temperature to drop',
      'Requires electrical current to proceed without temperature change',
      'Takes place only at absolute zero'
    ],
    correctIndex: 0,
    explanation: 'Exothermic reactions release thermal energy to the surrounding environment (ΔH is negative), causing temperature to increase.'
  },
  {
    id: 'mcq-sci-5-2',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.1',
    topic: 'Endothermic Reaction Characteristics',
    difficulty: 'Easy',
    question: 'An endothermic reaction is characterised by:',
    options: [
      'Absorption of heat from the surroundings, causing the container/thermometer reading to drop',
      'Release of intense heat and light',
      'A sharp increase in water temperature',
      'Combustion of fuels'
    ],
    correctIndex: 0,
    explanation: 'Endothermic reactions take in heat energy from their surroundings, leading to a measurable temperature decrease.'
  },
  {
    id: 'mcq-sci-5-3',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Examples of Exothermic Processes',
    difficulty: 'Easy',
    question: 'Which of the following processes is an example of an exothermic reaction?',
    options: ['Neutralisation between acid and alkali', 'Photosynthesis in green plants', 'Dissolving ammonium chloride in water', 'Thermal decomposition of limestone'],
    correctIndex: 0,
    explanation: 'Acid-base neutralisation is always exothermic, releasing heat. Photosynthesis and ammonium salt dissolution are endothermic.'
  },
  {
    id: 'mcq-sci-5-4',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.3',
    topic: 'Everyday Applications of Thermochemistry (Cold Pack)',
    difficulty: 'Easy',
    question: 'An instant cold pack used by sports trainers contains water and which chemical that absorbs heat upon dissolving?',
    options: ['Ammonium nitrate (or ammonium chloride)', 'Calcium chloride', 'Sodium hydroxide', 'Magnesium sulphate'],
    correctIndex: 0,
    explanation: 'The dissolution of ammonium nitrate is highly endothermic, absorbing heat and rapidly cooling the pack to treat sprains.'
  },
  {
    id: 'mcq-sci-5-5',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.3',
    topic: 'Everyday Applications (Hot Pack)',
    difficulty: 'Easy',
    question: 'Instant hot packs generate heat through an exothermic reaction involving the dissolution of:',
    options: ['Anhydrous calcium chloride (or iron oxidation)', 'Ammonium chloride', 'Sodium hydrogen carbonate with citric acid', 'Potassium nitrate'],
    correctIndex: 0,
    explanation: 'Dissolving anhydrous CaCl₂ in water releases significant hydration energy (exothermic), rapidly warming the hot pack.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-5-6',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Energy Profile Diagram (Exothermic)',
    difficulty: 'Medium',
    question: 'In an energy level profile diagram for an EXOTHERMIC reaction:',
    options: [
      'The total energy of the reactants is higher than the total energy of the products',
      'The total energy of the products is higher than the reactants',
      'Reactants and products have identical energy levels',
      'The energy difference is absorbed from light rays'
    ],
    correctIndex: 0,
    explanation: 'In exothermic reactions, reactants have higher internal enthalpy than products. The surplus energy is released as heat (ΔH < 0).'
  },
  {
    id: 'mcq-sci-5-7',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Energy Profile Diagram (Endothermic)',
    difficulty: 'Medium',
    question: 'In an energy level profile diagram for an ENDOTHERMIC reaction:',
    options: [
      'The total energy of the products is higher than the total energy of the reactants',
      'The total energy of reactants is higher than products',
      'Activation energy is zero',
      'Heat is released to the surrounding air'
    ],
    correctIndex: 0,
    explanation: 'In endothermic reactions, products have higher energy content than reactants because heat was absorbed from the surroundings (ΔH > 0).'
  },
  {
    id: 'mcq-sci-5-8',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Bond Breaking vs Bond Making',
    difficulty: 'Medium',
    question: 'In terms of chemical bonds, why is a chemical reaction exothermic overall?',
    options: [
      'More energy is released when new bonds form in products than is absorbed to break bonds in reactants',
      'More energy is absorbed to break bonds than is released during bond formation',
      'Bond breaking releases immense energy while bond forming consumes energy',
      'No chemical bonds are broken or formed'
    ],
    correctIndex: 0,
    explanation: 'Bond breaking is always endothermic; bond making is always exothermic. When energy released in bond formation > energy absorbed in bond breaking, the net reaction is exothermic.'
  },
  {
    id: 'mcq-sci-5-9',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.1',
    topic: 'Interpreting Temperature Change Data',
    difficulty: 'Medium',
    question: 'A student mixes 50 cm³ of dilute hydrochloric acid (28°C) with 50 cm³ of sodium hydroxide solution (28°C). The maximum temperature reached is 35°C. What can be deduced?',
    options: [
      'The reaction is exothermic with a temperature rise of 7°C',
      'The reaction is endothermic with a temperature rise of 7°C',
      'The solution absorbed heat from the thermometer',
      'The reaction produced cold gas'
    ],
    correctIndex: 0,
    explanation: 'Initial temp = 28°C, final temp = 35°C (ΔT = +7°C). An increase in temperature confirms heat was released to the solution (exothermic).'
  },
  {
    id: 'mcq-sci-5-10',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.3',
    topic: 'Biological Energy Transformations',
    difficulty: 'Medium',
    question: 'Cellular respiration is classified as an exothermic process because:',
    options: [
      'Glucose oxidation releases ATP chemical energy and thermal heat to maintain mammalian body temperature',
      'It converts heat into solar energy',
      'It cools the internal organs of animals',
      'It absorbs carbon dioxide from blood'
    ],
    correctIndex: 0,
    explanation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy. Cellular respiration releases heat and ATP, functioning as a primary exothermic metabolic pathway.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-5-11',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Enthalpy Calculation Concept',
    difficulty: 'Hard',
    question: 'If the heat of neutralisation between strong acid and strong alkali is -57 kJ/mol, what does the negative sign (-) signify?',
    options: [
      '57 kJ of thermal energy is liberated to the surroundings for every 1 mole of water formed',
      '57 kJ of thermal energy must be supplied to start the reaction',
      'The final temperature of the mixture drops below 0°C',
      'The products have 57 kJ more potential energy than the reactants'
    ],
    correctIndex: 0,
    explanation: 'In thermochemical equations, a negative enthalpy change (ΔH < 0) denotes an exothermic reaction where heat is released from the chemical system into surroundings.'
  },
  {
    id: 'mcq-sci-5-12',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Calorimeter Experimental Error Minimisation',
    difficulty: 'Hard',
    question: 'In a school thermochemistry experiment to determine heat of reaction, why are polystyrene cups used instead of glass beakers?',
    options: [
      'Polystyrene is an excellent thermal insulator with negligible heat capacity, minimising heat loss to surroundings',
      'Polystyrene reacts chemically with acids to speed up reaction',
      'Glass dissolves in sodium hydroxide',
      'Polystyrene absorbs heat quickly from the thermometer'
    ],
    correctIndex: 0,
    explanation: 'Polystyrene has low thermal conductivity and low specific heat capacity, preventing heat dissipation to the atmosphere.'
  },
  {
    id: 'mcq-sci-5-13',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.3',
    topic: 'Self-Heating Can Technology',
    difficulty: 'Hard',
    question: 'Emergency self-heating beverage cans use a water pouch separated from quicklime (calcium oxide, CaO). When punctured, the reaction that heats the coffee is:',
    options: [
      'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Immense heat (exothermic hydration of quicklime)',
      'CaCO₃(s) + H₂O(l) → CaO + CO₂ (endothermic decomposition)',
      'NH₄NO₃(s) + H₂O(l) → NH₄⁺ + NO₃⁻ (endothermic cooling)',
      'Fe + O₂ → Fe₂O₃ (slow rusting)'
    ],
    correctIndex: 0,
    explanation: 'Hydration of calcium oxide (quicklime) to slaked lime is a violently exothermic reaction releasing up to 65 kJ/mol of heat instantly.'
  },
  {
    id: 'mcq-sci-5-14',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.2',
    topic: 'Photosynthesis Thermochemical Classification',
    difficulty: 'Hard',
    question: 'Photosynthesis (6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂) is an endothermic process because:',
    options: [
      'Chlorophyll traps radiant photon energy from sunlight to synthesize high-energy covalent bonds in glucose',
      'It releases large amounts of heat into the atmosphere',
      'The leaf temperature increases by 20°C during photosynthesis',
      'It breaks down glucose molecules to release energy'
    ],
    correctIndex: 0,
    explanation: 'Photosynthesis stores incoming light energy as chemical potential energy in glucose molecules, representing an endothermic biochemical reaction.'
  },
  {
    id: 'mcq-sci-5-15',
    chapterId: 'science-ch5',
    chapterNumber: 5,
    subject: 'science',
    learningStandardCode: '5.1.3',
    topic: 'Heat of Combustion and Fuel Efficiency',
    difficulty: 'Hard',
    question: 'Fuel A has a heat of combustion of 48 kJ/g and Fuel B has 24 kJ/g. Which fuel is more efficient for rocket propulsion and why?',
    options: [
      'Fuel A because it releases twice as much thermal energy per gram of payload mass burned',
      'Fuel B because it generates less heat to prevent rocket overheating',
      'Fuel B because it burns at a higher speed',
      'Both have identical energy densities'
    ],
    correctIndex: 0,
    explanation: 'High energy density (energy per unit mass) is crucial in aviation and rocketry: Fuel A provides twice the energy output per kg of onboard fuel weight.'
  },

  // ==================== SCIENCE CHAPTER 6: ELECTRICITY AND MAGNETISM (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-6-1',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.1.1',
    topic: 'Renewable vs Non-Renewable Energy Sources',
    difficulty: 'Easy',
    question: 'Which of the following is classified as a renewable energy source for electricity generation in Malaysia?',
    options: ['Hydroelectric power', 'Coal', 'Natural gas', 'Petroleum (diesel)'],
    correctIndex: 0,
    explanation: 'Hydroelectric energy harnesses the natural water cycle and is naturally replenished, unlike fossil fuels (coal, gas, petroleum) which are finite.'
  },
  {
    id: 'mcq-sci-6-2',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.1.2',
    topic: 'Electromagnetic Induction Generator Principle',
    difficulty: 'Easy',
    question: 'An electric generator produces induced current when:',
    options: [
      'A coil of wire cuts across magnetic field lines in a rotating magnetic field',
      'A stationary magnet is placed next to a stationary coil',
      'Electric current is supplied from an external chemical battery',
      'An insulator is heated'
    ],
    correctIndex: 0,
    explanation: 'By Faraday’s Law, induced electromotive force (e.m.f.) is produced whenever there is relative motion cutting magnetic flux lines between a conductor and magnet.'
  },
  {
    id: 'mcq-sci-6-3',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.2.1',
    topic: 'Transformer Working Principle',
    difficulty: 'Easy',
    question: 'What type of electric current is REQUIRED for a transformer to function continuously?',
    options: ['Alternating current (a.c.)', 'Direct current (d.c.) from a 9V battery', 'Static electricity', 'Solar direct current'],
    correctIndex: 0,
    explanation: 'Transformers require changing magnetic flux generated by alternating current (a.c.) to induce a voltage in the secondary coil. Steady d.c. produces zero induction.'
  },
  {
    id: 'mcq-sci-6-4',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.2.2',
    topic: 'Step-Up vs Step-Down Transformers',
    difficulty: 'Easy',
    question: 'A step-down transformer has:',
    options: [
      'More turns in the primary coil than the secondary coil (Np > Ns)',
      'More turns in the secondary coil than primary coil (Ns > Np)',
      'Equal number of turns in both coils',
      'No secondary coil'
    ],
    correctIndex: 0,
    explanation: 'In a step-down transformer, Vp/Vs = Np/Ns > 1, so Np > Ns, which reduces the output secondary voltage.'
  },
  {
    id: 'mcq-sci-6-5',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.4.1',
    topic: 'Home Electrical Safety (Earth Wire)',
    difficulty: 'Easy',
    question: 'In a 3-pin plug, what is the safety function of the green/yellow striped Earth wire?',
    options: [
      'To safely channel leakage current to the ground if a live fault touches the metal casing of an appliance',
      'To supply 240V current from the power grid',
      'To complete the return electrical circuit to the substation',
      'To measure electric energy usage'
    ],
    correctIndex: 0,
    explanation: 'The earth wire connects the appliance’s metal chassis to the ground. If a loose live wire contacts the chassis, current surges safely into the earth, blowing the fuse and preventing electrocution.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-6-6',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.2.2',
    topic: 'Transformer Voltage Formula Calculation',
    difficulty: 'Medium',
    question: 'A transformer has 500 turns in the primary coil and 100 turns in the secondary coil. If the input primary voltage is 240 V a.c., what is the output secondary voltage?',
    options: ['48 V', '1200 V', '24 V', '100 V'],
    correctIndex: 0,
    explanation: 'Vp / Vs = Np / Ns → 240 / Vs = 500 / 100 = 5 → Vs = 240 / 5 = 48 V.'
  },
  {
    id: 'mcq-sci-6-7',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.3.1',
    topic: 'High Voltage Power Grid Transmission',
    difficulty: 'Medium',
    question: 'Why is electrical energy transmitted through the National Grid network at extremely high voltages (e.g. 132 kV - 500 kV)?',
    options: [
      'To reduce current in cables, thereby minimizing energy lost as heat (P_loss = I²R)',
      'To increase electrical resistance in the cables',
      'To allow electricity to travel faster through copper wires',
      'Because household appliances require 132 kV'
    ],
    correctIndex: 0,
    explanation: 'Transmitting at high voltage steps down current (I = P/V). Since power loss in cables is proportional to current squared (P = I²R), lowering current drastically reduces thermal transmission loss.'
  },
  {
    id: 'mcq-sci-6-8',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.4.2',
    topic: 'Cost of Electrical Energy Consumption',
    difficulty: 'Medium',
    question: 'An electric heater rated at 2 kW is used for 5 hours daily for 30 days. If the electricity tariff is RM 0.20 per unit (kWh), calculate the total cost for 30 days.',
    options: ['RM 60.00', 'RM 30.00', 'RM 20.00', 'RM 12.00'],
    correctIndex: 0,
    explanation: 'Energy = Power (kW) × Time (hours) = 2 kW × (5 × 30 h) = 2 × 150 = 300 kWh (units). Cost = 300 units × RM 0.20 = RM 60.00.'
  },
  {
    id: 'mcq-sci-6-9',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.4.1',
    topic: 'Fuse Rating Selection',
    difficulty: 'Medium',
    question: 'An electric kettle is rated 240 V, 1800 W. Which fuse rating is the MOST suitable to install in its 3-pin plug?',
    options: ['10 A', '5 A', '8 A', '13 A (10A is closest suitable without nuisance tripping)'],
    correctIndex: 0,
    explanation: 'Operating current I = P / V = 1800 / 240 = 7.5 A. A fuse rating must be slightly higher than the operating current (10 A fuse is ideal).'
  },
  {
    id: 'mcq-sci-6-10',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.3.2',
    topic: 'Home Consumer Unit (MCB and ELCB/RCCB)',
    difficulty: 'Medium',
    question: 'What is the specific function of a Residual Current Circuit Breaker (RCCB / ELCB) in a household distribution box?',
    options: [
      'To trip immediately when it detects a current imbalance between live and neutral wires (current leakage to earth)',
      'To step up voltage during lightning storms',
      'To record the total units of electricity consumed',
      'To convert alternating current into direct current'
    ],
    correctIndex: 0,
    explanation: 'The RCCB detects minute differences between outgoing live current and returning neutral current (indicating leakage/shock) and cuts power within milliseconds.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-6-11',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.2.3',
    topic: 'Transformer Power Efficiency & Current Ratio',
    difficulty: 'Hard',
    question: 'An ideal 100% efficient step-up transformer converts 12 V input to 240 V output. If the input primary current is 10 A, what is the output secondary current?',
    options: ['0.5 A', '200 A', '2 A', '5 A'],
    correctIndex: 0,
    explanation: 'Power in = Power out → Vp × Ip = Vs × Is → 12 × 10 = 240 × Is → 120 = 240 × Is → Is = 120 / 240 = 0.5 A.'
  },
  {
    id: 'mcq-sci-6-12',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.2.3',
    topic: 'Transformer Core Design (Eddy Current Losses)',
    difficulty: 'Hard',
    question: 'Why is the soft iron core of an electrical transformer laminated into thin sheets insulated with lacquer rather than made of a single solid iron block?',
    options: [
      'To increase electrical resistance against swirling eddy currents, minimising thermal energy loss',
      'To make the transformer lighter and cheaper',
      'To convert alternating magnetic flux into permanent magnetism',
      'To prevent the primary coil from touching the secondary coil'
    ],
    correctIndex: 0,
    explanation: 'Alternating magnetic fields induce circular eddy currents inside solid cores, causing severe I²R overheating. Lamination interrupts eddy current loops, greatly reducing losses.'
  },
  {
    id: 'mcq-sci-6-13',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.1.3',
    topic: 'Cathode Ray Oscilloscope (C.R.O.) Trace Interpretation',
    difficulty: 'Hard',
    question: 'A C.R.O. with Y-gain set to 2 V/div and time-base set to 5 ms/div displays a sinusoidal a.c. wave with peak-to-peak height of 6 divisions and 1 complete cycle spanning 4 horizontal divisions. What are the peak voltage (Vp) and frequency (f)?',
    options: [
      'Vp = 6 V, Frequency = 50 Hz',
      'Vp = 12 V, Frequency = 20 Hz',
      'Vp = 6 V, Frequency = 25 Hz',
      'Vp = 3 V, Frequency = 100 Hz'
    ],
    correctIndex: 0,
    explanation: 'Peak-to-peak = 6 div → Peak amplitude = 3 div × 2 V/div = 6 V. Period T = 4 div × 5 ms/div = 20 ms = 0.02 s. Frequency f = 1 / T = 1 / 0.02 = 50 Hz.'
  },
  {
    id: 'mcq-sci-6-14',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.3.1',
    topic: 'Three-Phase Transmission System',
    difficulty: 'Hard',
    question: 'In industrial power distribution, why is 3-phase a.c. electrical supply preferred over single-phase supply for heavy machinery and factories?',
    options: [
      'It delivers smoother, continuous rotational torque to heavy induction motors and higher total power with smaller wire gauge',
      'It uses zero neutral wires and produces d.c. voltage',
      'It operates at 1.5 V to avoid electric shock',
      'Single-phase electricity cannot power electric lights'
    ],
    correctIndex: 0,
    explanation: '3-phase power provides 3 overlapping sinusoidal phases 120° apart, generating constant rotating magnetic fields ideal for industrial motors without pulsation.'
  },
  {
    id: 'mcq-sci-6-15',
    chapterId: 'science-ch6',
    chapterNumber: 6,
    subject: 'science',
    learningStandardCode: '6.4.3',
    topic: 'Energy Efficiency Star Rating Calculations',
    difficulty: 'Hard',
    question: 'An old refrigerator consumes 800 kWh annually. A new 5-star energy efficient inverter model consumes 350 kWh annually. If electricity costs RM 0.40/kWh, what is the annual financial saving?',
    options: ['RM 180.00', 'RM 320.00', 'RM 140.00', 'RM 220.00'],
    correctIndex: 0,
    explanation: 'Energy saved = 800 - 350 = 450 kWh. Annual financial saving = 450 kWh × RM 0.40 = RM 180.00.'
  },

  // ==================== SCIENCE CHAPTER 7: ENERGY AND POWER (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-7-1',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.1.1',
    topic: 'Work Done Definition and Formula',
    difficulty: 'Easy',
    question: 'In physics, Work Done (W) is defined as the product of Force (F) and displacement (s) in the direction of the force. Its S.I. unit is the:',
    options: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'],
    correctIndex: 0,
    explanation: 'Work Done = Force (N) × Displacement (m) = N·m = Joule (J).'
  },
  {
    id: 'mcq-sci-7-2',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.1.1',
    topic: 'Zero Work Done Condition',
    difficulty: 'Easy',
    question: 'In which of the following scenarios is ZERO mechanical work done on the object in the scientific sense?',
    options: [
      'A student pushes firmly against a rigid brick wall that does not move',
      'A weightlifter lifts a 50 kg barbell from floor to overhead',
      'A crane hoists a concrete block up 10 metres',
      'A boy kicks a football across a grass field'
    ],
    correctIndex: 0,
    explanation: 'Work = Force × Displacement. If displacement s = 0 (the wall does not move), W = F × 0 = 0 Joules.'
  },
  {
    id: 'mcq-sci-7-3',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.1.2',
    topic: 'Power Definition and Formula',
    difficulty: 'Easy',
    question: 'Power (P) is defined as the rate of doing work (P = W / t). The S.I. unit of power is the:',
    options: ['Watt (W) or J/s', 'Joule (J)', 'Newton per second (N/s)', 'Kilogram metre per second'],
    correctIndex: 0,
    explanation: 'Power = Work Done / Time = Joules / second = Watt (W).'
  },
  {
    id: 'mcq-sci-7-4',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.2.1',
    topic: 'Gravitational Potential Energy Formula',
    difficulty: 'Easy',
    question: 'What is the formula for calculating Gravitational Potential Energy (GPE)?',
    options: ['GPE = mgh', 'GPE = 1/2 mv²', 'GPE = 1/2 kx²', 'GPE = Fs / t'],
    correctIndex: 0,
    explanation: 'Gravitational Potential Energy GPE = mass (m) × gravitational acceleration (g) × height (h).'
  },
  {
    id: 'mcq-sci-7-5',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.2.1',
    topic: 'Kinetic Energy Formula',
    difficulty: 'Easy',
    question: 'What is the formula for calculating Kinetic Energy (KE) of a moving object?',
    options: ['KE = 1/2 mv²', 'KE = mgh', 'KE = mv', 'KE = F × d'],
    correctIndex: 0,
    explanation: 'Kinetic Energy KE = 1/2 × mass (m) × velocity squared (v²).'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-7-6',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.1.1',
    topic: 'Work Done Lifting an Object',
    difficulty: 'Medium',
    question: 'A worker lifts a box of mass 15 kg vertically upwards through a height of 2 m (take g = 10 m/s²). Calculate the work done.',
    options: ['300 J', '30 J', '150 J', '600 J'],
    correctIndex: 0,
    explanation: 'Force F = mg = 15 × 10 = 150 N. Work W = F × s = 150 × 2 = 300 J.'
  },
  {
    id: 'mcq-sci-7-7',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.1.2',
    topic: 'Power of a Motor Calculation',
    difficulty: 'Medium',
    question: 'An electric motor does 6000 J of work in 20 seconds. What is the power output of the motor?',
    options: ['300 W', '120 W', '120 000 W', '30 W'],
    correctIndex: 0,
    explanation: 'P = W / t = 6000 J / 20 s = 300 W.'
  },
  {
    id: 'mcq-sci-7-8',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.2.1',
    topic: 'Kinetic Energy Calculation',
    difficulty: 'Medium',
    question: 'A car of mass 1000 kg travels at a constant velocity of 20 m/s. What is its kinetic energy?',
    options: ['200 000 J (200 kJ)', '20 000 J', '400 000 J', '10 000 J'],
    correctIndex: 0,
    explanation: 'KE = 1/2 mv² = 1/2 × 1000 × (20)² = 500 × 400 = 200 000 J = 200 kJ.'
  },
  {
    id: 'mcq-sci-7-9',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.2.2',
    topic: 'Elastic Potential Energy Formula and Calculation',
    difficulty: 'Medium',
    question: 'A spring with spring constant k = 200 N/m is compressed by 0.1 m. What is the elastic potential energy stored (EPE = 1/2 kx²)?',
    options: ['1.0 J', '20 J', '2.0 J', '10 J'],
    correctIndex: 0,
    explanation: 'EPE = 1/2 kx² = 1/2 × 200 × (0.1)² = 100 × 0.01 = 1.0 J.'
  },
  {
    id: 'mcq-sci-7-10',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.3.1',
    topic: 'Principle of Conservation of Energy',
    difficulty: 'Medium',
    question: 'The Principle of Conservation of Energy states that:',
    options: [
      'Energy cannot be created or destroyed, but can only change from one form to another',
      'The total kinetic energy of the universe is always decreasing',
      'Energy is always conserved as thermal heat only',
      'Potential energy equals mass times velocity'
    ],
    correctIndex: 0,
    explanation: 'Energy is invariant in a closed system; it transforms between kinetic, potential, thermal, and chemical forms without net loss or creation.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-7-11',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.3.1',
    topic: 'Free Fall Velocity from Conservation of Energy',
    difficulty: 'Hard',
    question: 'A stone of mass 2 kg is dropped from the top of a 20 m high cliff (g = 10 m/s², ignore air resistance). What is its velocity just before hitting the ground?',
    options: ['20 m/s', '40 m/s', '14.14 m/s', '10 m/s'],
    correctIndex: 0,
    explanation: 'Loss in GPE = Gain in KE → mgh = 1/2 mv² → gh = 1/2 v² → v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s.'
  },
  {
    id: 'mcq-sci-7-12',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.3.2',
    topic: 'Oscillating Simple Pendulum Energy Conversion',
    difficulty: 'Hard',
    question: 'At which point in the oscillation of a simple pendulum is its kinetic energy at a MAXIMUM and gravitational potential energy at a MINIMUM?',
    options: [
      'At the lowest equilibrium position (centre point of swing)',
      'At the highest point of maximum displacement on the left',
      'At the highest point of maximum displacement on the right',
      'Kinetic energy is constant throughout the swing'
    ],
    correctIndex: 0,
    explanation: 'At the lowest point, all GPE has converted to maximum KE (speed is highest). At maximum amplitude ends, speed is zero (max GPE).'
  },
  {
    id: 'mcq-sci-7-13',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.1.2',
    topic: 'Stairs Climbing Human Power Calculation',
    difficulty: 'Hard',
    question: 'A student of mass 60 kg runs up a flight of stairs of vertical height 5 m in 4 seconds (g = 10 m/s²). What is his mechanical power generated?',
    options: ['750 W', '3000 W', '120 W', '600 W'],
    correctIndex: 0,
    explanation: 'Work Done W = mgh = 60 × 10 × 5 = 3000 J. Power P = W / t = 3000 J / 4 s = 750 W.'
  },
  {
    id: 'mcq-sci-7-14',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.3.1',
    topic: 'Roller Coaster Loop-the-Loop Mechanics',
    difficulty: 'Hard',
    question: 'A roller coaster car of mass 500 kg starts from rest at height 45 m. Neglecting friction, what is its speed when it reaches the top of a 25 m high loop?',
    options: ['20 m/s', '30 m/s', '10 m/s', '15 m/s'],
    correctIndex: 0,
    explanation: 'Height difference Δh = 45 - 25 = 20 m. Loss in GPE = Gain in KE → mg(Δh) = 1/2 mv² → v = √(2gΔh) = √(2 × 10 × 20) = √400 = 20 m/s.'
  },
  {
    id: 'mcq-sci-7-15',
    chapterId: 'science-ch7',
    chapterNumber: 7,
    subject: 'science',
    learningStandardCode: '7.3.2',
    topic: 'Energy Dissipation in Non-Conservative Systems',
    difficulty: 'Hard',
    question: 'A moving trolley with 500 J of initial kinetic energy slides across a rough floor and comes to a complete stop. What happened to the 500 J of energy?',
    options: [
      'It converted into thermal heat in the floor/wheels and sound energy due to frictional work',
      'The energy was completely destroyed',
      'It converted into gravitational potential energy',
      'It was absorbed as chemical nuclear energy'
    ],
    correctIndex: 0,
    explanation: 'Friction does work opposing motion, converting mechanical kinetic energy into dissipated thermal and acoustic energy in the surrounding environment.'
  },

  // ==================== SCIENCE CHAPTER 8: RADIOACTIVITY (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-8-1',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.1',
    topic: 'Discovery of Radioactivity Pioneers',
    difficulty: 'Easy',
    question: 'Which French scientist first discovered natural radioactivity in uranium salts in 1896?',
    options: ['Antoine Henri Becquerel', 'Marie Curie', 'Wilhelm Röntgen', 'Ernest Rutherford'],
    correctIndex: 0,
    explanation: 'Henri Becquerel accidentally discovered radioactivity when uranium crystals exposed wrapped photographic plates in the dark.'
  },
  {
    id: 'mcq-sci-8-2',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.1',
    topic: 'S.I. Unit of Radioactivity',
    difficulty: 'Easy',
    question: 'The S.I. unit of radioactivity (1 nuclear decay per second) is the:',
    options: ['Becquerel (Bq)', 'Curie (Ci)', 'Sievert (Sv)', 'Gray (Gy)'],
    correctIndex: 0,
    explanation: '1 Becquerel (Bq) = 1 nuclear decay/disintegration per second.'
  },
  {
    id: 'mcq-sci-8-3',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.2',
    topic: 'Types of Radioactive Radiation',
    difficulty: 'Easy',
    question: 'An alpha (α) particle consists of:',
    options: ['A helium nucleus containing 2 protons and 2 neutrons', 'A fast-moving high-energy electron', 'High-frequency electromagnetic waves', 'A single uncharged neutron'],
    correctIndex: 0,
    explanation: 'An alpha particle is identical to a helium-4 nucleus (⁴₂He) with a +2 positive charge.'
  },
  {
    id: 'mcq-sci-8-4',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.2',
    topic: 'Penetrating Power of Radioactive Rays',
    difficulty: 'Easy',
    question: 'Which type of radioactive radiation has the HIGHEST penetrating power and can only be blocked by thick lead or dense concrete?',
    options: ['Gamma (γ) ray', 'Alpha (α) particle', 'Beta (β) particle', 'X-ray beam'],
    correctIndex: 0,
    explanation: 'Gamma rays are high-energy electromagnetic waves without charge or mass, giving them extreme penetrating ability.'
  },
  {
    id: 'mcq-sci-8-5',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.3.1',
    topic: 'Medical Applications of Radioisotopes',
    difficulty: 'Easy',
    question: 'Which radioisotope is widely used in radiotherapy to destroy cancerous tumor cells and sterilise medical equipment?',
    options: ['Cobalt-60', 'Carbon-14', 'Phosphorus-32', 'Sodium-24'],
    correctIndex: 0,
    explanation: 'Cobalt-60 emits powerful gamma radiation used in teletherapy cancer treatments and surgical instrument irradiation.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-8-6',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.2',
    topic: 'Ionising Power Comparison',
    difficulty: 'Medium',
    question: 'Why do alpha (α) particles have the STRONGEST ionising power compared to beta and gamma radiation?',
    options: [
      'They have large mass and +2 charge, allowing them to easily knock orbital electrons off atoms',
      'They travel at the speed of light',
      'They have zero mass and negative charge',
      'They pass through lead sheets easily'
    ],
    correctIndex: 0,
    explanation: 'Alpha particles are heavy and carry a double positive charge, creating dense tracks of ionization as they collide with air molecules.'
  },
  {
    id: 'mcq-sci-8-7',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.3',
    topic: 'Half-Life Calculation (Single Interval)',
    difficulty: 'Medium',
    question: 'A radioactive sample has an initial activity of 800 Bq and a half-life of 6 hours. What is its activity after 18 hours?',
    options: ['100 Bq', '200 Bq', '50 Bq', '400 Bq'],
    correctIndex: 0,
    explanation: 'Number of half-lives n = 18 / 6 = 3. Activity: 800 → 400 (6h) → 200 (12h) → 100 Bq (18h).'
  },
  {
    id: 'mcq-sci-8-8',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.2.1',
    topic: 'Atomic Structure and Nuclide Notation',
    difficulty: 'Medium',
    question: 'A nuclide of Carbon is represented as ¹⁴₆C. How many protons, neutrons, and electrons are in this neutral atom?',
    options: ['6 protons, 8 neutrons, 6 electrons', '6 protons, 14 neutrons, 6 electrons', '8 protons, 6 neutrons, 8 electrons', '14 protons, 6 neutrons, 14 electrons'],
    correctIndex: 0,
    explanation: 'Atomic number Z = 6 (6 protons, 6 electrons). Mass number A = 14. Neutrons = A - Z = 14 - 6 = 8 neutrons.'
  },
  {
    id: 'mcq-sci-8-9',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.3.1',
    topic: 'Agricultural Application of Radioisotopes',
    difficulty: 'Medium',
    question: 'Phosphorus-32 (P-32) radioisotope is applied to soil in agricultural research to:',
    options: [
      'Track the rate of fertilizer uptake and metabolic absorption in plant roots and stems',
      'Sterilize male insects to prevent crop infestation',
      'Determine the archaeological age of fossilised wood',
      'Induce giant fruit mutations'
    ],
    correctIndex: 0,
    explanation: 'P-32 is a beta emitter used as a radiotracer to map nutrient movement and optimize fertilizer distribution.'
  },
  {
    id: 'mcq-sci-8-10',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.4.1',
    topic: 'Background Radiation Sources',
    difficulty: 'Medium',
    question: 'Which of the following is a NATURAL source of background radiation that humans are continuously exposed to?',
    options: [
      'Cosmic rays from deep space and radon gas released from rocks/soil',
      'Nuclear weapon fallout',
      'X-ray machines in dental clinics',
      'Nuclear reactor waste'
    ],
    correctIndex: 0,
    explanation: 'Natural background radiation originates from cosmic rays, radon gas, terrestrial minerals (uranium/thorium), and internal potassium-40 in food.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-8-11',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.1.3',
    topic: 'Half-Life Graph Deduction & Mass Calculation',
    difficulty: 'Hard',
    question: 'A 64 g sample of radioactive Iodine-131 has a half-life of 8 days. What mass of Iodine-131 remains undecayed after 32 days?',
    options: ['4 g', '8 g', '2 g', '16 g'],
    correctIndex: 0,
    explanation: 'Number of half-lives = 32 / 8 = 4 half-lives. 64g → 32g → 16g → 8g → 4g.'
  },
  {
    id: 'mcq-sci-8-12',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.2.2',
    topic: 'Nuclear Decay Equation Balancing (Alpha Decay)',
    difficulty: 'Hard',
    question: 'A Radium-226 nucleus (²²⁶₈₈Ra) undergoes alpha decay. What is the daughter nuclide formed?',
    options: ['²²²₈₆Rn (Radon-222)', '²²⁶₈₉Ac (Actinium-226)', '²²²₈₉Ac', '²³⁰₉₀Th'],
    correctIndex: 0,
    explanation: 'Alpha decay emits ⁴₂He: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He. Mass number decreases by 4 (226 - 4 = 222) and proton number decreases by 2 (88 - 2 = 86).'
  },
  {
    id: 'mcq-sci-8-13',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.2.2',
    topic: 'Beta Decay Mechanism',
    difficulty: 'Hard',
    question: 'During beta-minus (β⁻) decay, what change occurs inside the unstable parent nucleus?',
    options: [
      'A neutron transforms into a proton, emitting a high-speed electron (beta particle) and antineutrino',
      'A proton transforms into a neutron',
      'The nucleus splits into two equal fragments',
      'Two protons and two neutrons are ejected together'
    ],
    correctIndex: 0,
    explanation: 'In beta decay: ¹₀n → ¹₁p + ⁰₋₁e. A neutron becomes a proton, increasing the atomic number by +1 while mass number remains constant.'
  },
  {
    id: 'mcq-sci-8-14',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.3.1',
    topic: 'Carbon-14 Dating Principle',
    difficulty: 'Hard',
    question: 'How does Carbon-14 radiocarbon dating determine the age of ancient organic wood or bone artifacts?',
    options: [
      'Living organisms maintain a constant C-14 to C-12 ratio; after death, C-14 decays with a half-life of 5730 years without replenishment',
      'C-14 accumulates in dead bones from surrounding soil',
      'Gamma rays convert C-12 into C-14 after burial',
      'The artifact’s mass increases proportionally with time'
    ],
    correctIndex: 0,
    explanation: 'Living organisms assimilate C-14 via respiration/photosynthesis. Upon death, C-14 intake stops, and remaining C-14 decays steadily (t½ = 5,730 years).'
  },
  {
    id: 'mcq-sci-8-15',
    chapterId: 'science-ch8',
    chapterNumber: 8,
    subject: 'science',
    learningStandardCode: '8.4.2',
    topic: 'Radiation Protection Principles (ALARA)',
    difficulty: 'Hard',
    question: 'In industrial radioprotection, the ALARA safety principle minimizes worker radiation dose through which three fundamental measures?',
    options: [
      'Minimizing exposure time, maximizing distance from source, and using proper shielding (Lead/Concrete)',
      'Wearing cotton lab coats, drinking milk, and working in sunlight',
      'Storing radioisotopes in open glass containers with ventilation',
      'Increasing source temperature and neutralizing with acid'
    ],
    correctIndex: 0,
    explanation: 'ALARA (As Low As Reasonably Achievable) relies strictly on Time reduction, Distance increase (inverse square law), and heavy Shielding.'
  },

  // ==================== SCIENCE CHAPTER 9: SPACE WEATHER (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-9-1',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.1',
    topic: 'Layers of the Sun (Atmosphere)',
    difficulty: 'Easy',
    question: 'Which outermost layer of the Sun’s atmosphere extends millions of kilometres into space and is only visible during a total solar eclipse as a white crown?',
    options: ['Corona', 'Chromosphere', 'Photosphere', 'Core'],
    correctIndex: 0,
    explanation: 'The corona is the Sun’s low-density, super-heated outermost atmospheric layer visible as a pearly halo during total solar eclipses.'
  },
  {
    id: 'mcq-sci-9-2',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.1',
    topic: 'Photosphere Features (Sunspots)',
    difficulty: 'Easy',
    question: 'Sunspots appear as dark patches on the Sun’s photosphere because they are:',
    options: [
      'Relatively cooler regions (~4000 K) caused by intense magnetic field concentrations that inhibit convection',
      'Holes in the Sun where nuclear fusion has stopped',
      'Solid rocky asteroids that crashed into the Sun',
      'Clouds of ice floating on the surface'
    ],
    correctIndex: 0,
    explanation: 'Sunspots are cooler (~4000 K) than the surrounding photosphere (~6000 K) due to localized magnetic flux suppressing convective heat transport.'
  },
  {
    id: 'mcq-sci-9-3',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.2',
    topic: 'Solar Wind Definition',
    difficulty: 'Easy',
    question: 'Solar wind consists of a continuous stream of:',
    options: [
      'High-energy charged plasma particles (protons and electrons) ejected into the Solar System',
      'Oxygen and nitrogen atmospheric gas clouds',
      'Sound waves propagating through space',
      'Dust particles from comets'
    ],
    correctIndex: 0,
    explanation: 'Solar wind is a steady supersonic stream of magnetized plasma (protons, alpha particles, electrons) flowing outward from the solar corona.'
  },
  {
    id: 'mcq-sci-9-4',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.1',
    topic: 'Earth’s Magnetosphere Shield',
    difficulty: 'Easy',
    question: 'The primary role of the Earth’s magnetosphere is to:',
    options: [
      'Deflect harmful solar wind and cosmic radiation away from Earth’s surface',
      'Attract asteroids to burn up in the atmosphere',
      'Generate gravitational pull to keep the Moon in orbit',
      'Trap heat to maintain global warming'
    ],
    correctIndex: 0,
    explanation: 'The geomagnetic field deflects charged plasma from solar wind, preventing atmospheric erosion and lethal radiation exposure.'
  },
  {
    id: 'mcq-sci-9-5',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.2',
    topic: 'Aurora Phenomena',
    difficulty: 'Easy',
    question: 'The breathtaking light displays (Aurora Borealis and Aurora Australis) seen near the Earth’s polar skies are caused by:',
    options: [
      'Collisions between solar wind charged particles and atmospheric gas atoms (oxygen and nitrogen)',
      'Reflections of sunlight off Arctic ice sheets',
      'Moonlight passing through ozone crystals',
      'Volcanic ash burning in the upper stratosphere'
    ],
    correctIndex: 0,
    explanation: 'Solar plasma funneled along magnetic field lines into polar thermospheres excites atmospheric oxygen (green/red) and nitrogen (blue/purple) atoms.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-9-6',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.1',
    topic: 'Prominences vs Solar Flares',
    difficulty: 'Medium',
    question: 'How does a solar prominence differ from a solar flare?',
    options: [
      'A prominence is a huge, looping loop of dense plasma anchored in the photosphere, while a solar flare is a sudden explosive flash releasing intense X-rays',
      'A prominence is cold water vapour, while a flare is burning coal',
      'Prominences only occur on the Moon',
      'Solar flares last for hundreds of years continuously'
    ],
    correctIndex: 0,
    explanation: 'Prominences are stable magnetic arches of glowing plasma lasting days/weeks. Solar flares are sudden, brief energetic explosions of radiation across the electromagnetic spectrum.'
  },
  {
    id: 'mcq-sci-9-7',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.2',
    topic: 'Coronal Mass Ejection (CME) Impact',
    difficulty: 'Medium',
    question: 'A Coronal Mass Ejection (CME) reaching Earth can trigger severe geomagnetic storms that disrupt:',
    options: [
      'Telecommunication satellites, GPS navigation accuracy, and high-voltage power transmission grids',
      'Underground geothermal magma flow',
      'Earth’s ocean tides and lunar phases',
      'Domestic water piping systems'
    ],
    correctIndex: 0,
    explanation: 'CMEs distort Earth’s magnetosphere, inducing Geomagnetically Induced Currents (GIC) that trip power transformers, blind GPS receivers, and damage satellite electronics.'
  },
  {
    id: 'mcq-sci-9-8',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.1',
    topic: '11-Year Solar Cycle',
    difficulty: 'Medium',
    question: 'The periodic cycle of solar activity (solar minimum to solar maximum) repeats approximately every:',
    options: ['11 years', '365 days', '28 days', '100 years'],
    correctIndex: 0,
    explanation: 'The solar magnetic cycle waxes and wanes over an 11-year period, during which sunspot count, solar flares, and CME frequency peak at solar maximum.'
  },
  {
    id: 'mcq-sci-9-9',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.1',
    topic: 'Van Allen Radiation Belts',
    difficulty: 'Medium',
    question: 'What are the Van Allen radiation belts located within the Earth’s magnetosphere?',
    options: [
      'Two doughnut-shaped zones of high-energy charged particles trapped by Earth’s magnetic field',
      'Rings of rocky debris similar to Saturn’s rings',
      'Thick ozone layers blocking greenhouse gases',
      'Clouds of frozen meteorites'
    ],
    correctIndex: 0,
    explanation: 'The Van Allen belts are concentric toroidal zones where Earth’s magnetic dipole traps energetic electrons and protons.'
  },
  {
    id: 'mcq-sci-9-10',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.2',
    topic: 'Space Weather Forecasting Satellites',
    difficulty: 'Medium',
    question: 'Space weather observatories (such as SOHO, SDO, and DSCOVR) are positioned at the Sun-Earth Lagrange Point 1 (L1) because:',
    options: [
      'L1 provides an uninterrupted 24/7 view of the Sun and provides early warning of approaching solar storms ~30 to 60 minutes before Earth impact',
      'L1 has zero gravity so satellites do not consume fuel',
      'It is located on the dark side of the Moon',
      'Satellites at L1 can directly scoop solar wind fuel'
    ],
    correctIndex: 0,
    explanation: 'Lagrange Point 1 is 1.5 million km sunward, allowing early detection of incoming plasma waves and solar magnetic orientation before reaching Earth.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-9-11',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.2',
    topic: 'Magnetic Reconnection in Solar Flares',
    difficulty: 'Hard',
    question: 'What physical process in the Sun’s corona triggers explosive solar flares and CMEs?',
    options: [
      'Magnetic reconnection: twisted magnetic field lines snap and violently reconfigure, releasing vast magnetic potential energy',
      'Sudden gravitational collapse of the Sun’s core',
      'Cooling of nuclear fusion reactions in sunspots',
      'Collision between the Sun and rogue interstellar comets'
    ],
    correctIndex: 0,
    explanation: 'Oppositely directed magnetic field lines in the corona break and reconnect explosively, converting stored magnetic energy into thermal, kinetic, and radiative energy.'
  },
  {
    id: 'mcq-sci-9-12',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.2',
    topic: 'Geomagnetically Induced Currents (GIC) Mechanism',
    difficulty: 'Hard',
    question: 'How do solar storms cause catastrophic transformer burnout and blackouts in high-voltage power transmission grids?',
    options: [
      'Rapid fluctuations in Earth’s magnetic field induce low-frequency ground currents (GIC) that saturate transformer iron cores, causing severe overheating',
      'Solar X-rays physically melt aluminium transmission cables',
      'Lightning strikes all transmission towers simultaneously',
      'High-speed protons short-circuit household power sockets directly'
    ],
    correctIndex: 0,
    explanation: 'Faraday’s law: dB/dt induces quasi-d.c. currents in long conductors/ground paths, causing transformer half-cycle saturation, harmonic distortion, and overheating.'
  },
  {
    id: 'mcq-sci-9-13',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.1',
    topic: 'Ionospheric Scintillation and GPS Error',
    difficulty: 'Hard',
    question: 'During space weather events, satellite-based GPS navigation systems experience significant positional errors because:',
    options: [
      'Ionospheric scintillation and enhanced electron density alter the refractive index, delaying satellite radio signals',
      'Satellites are pushed out of orbit into deep space',
      'The speed of light in vacuum drops to zero',
      'GPS satellites lose their solar panels'
    ],
    correctIndex: 0,
    explanation: 'Solar flare radiation ionizes the upper atmosphere, causing rapid fluctuations in total electron content (TEC) that refract and delay radio waves used for triangulation.'
  },
  {
    id: 'mcq-sci-9-14',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.2.2',
    topic: 'Radiation Risks to Polar Aviation and Astronauts',
    difficulty: 'Hard',
    question: 'Why are commercial aircraft on trans-polar flight routes diverted during severe Solar Particle Events (SPE)?',
    options: [
      'Magnetic field geometry at the poles allows energetic protons to penetrate deeper into the atmosphere, exposing crew to dangerous ionizing radiation and causing high-frequency radio blackouts',
      'Aircraft engines freeze instantly in solar wind',
      'Pilots are blinded by green aurora lights',
      'Polar runways demagnetize during storms'
    ],
    correctIndex: 0,
    explanation: 'At high magnetic latitudes, magnetic field lines plunge directly into the atmosphere, channeling high-energy solar protons that expose aircrews to radiation and block HF communications.'
  },
  {
    id: 'mcq-sci-9-15',
    chapterId: 'science-ch9',
    chapterNumber: 9,
    subject: 'science',
    learningStandardCode: '9.1.1',
    topic: 'Solar Granulation Phenomenon',
    difficulty: 'Hard',
    question: 'High-resolution telescopic images of the Sun’s photosphere reveal a bubbling, cellular grain pattern known as granulation. What causes this?',
    options: [
      'Thermal convection cells: hot plasma columns rise in bright centers and cooler plasma sinks in darker edges',
      'Impact craters formed by meteorites hitting the solar surface',
      'Tectonic plates floating on the Sun’s core',
      'Clouds of unburned helium gas'
    ],
    correctIndex: 0,
    explanation: 'Granules (~1000 km across) are the tops of convective plasma cells where hot gas wells up, radiates energy, cools, and sinks along the cell boundaries.'
  },

  // ==================== SCIENCE CHAPTER 10: SPACE EXPLORATION (15 Questions) ====================
  // --- EASY (5) ---
  {
    id: 'mcq-sci-10-1',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.1',
    topic: 'Historical Astronomy Models (Geocentric vs Heliocentric)',
    difficulty: 'Easy',
    question: 'Which model of the Universe proposed by Nicolaus Copernicus placed the Sun at the centre with the Earth and planets revolving around it?',
    options: ['Heliocentric model', 'Geocentric model', 'Ptolemaic model', 'Aristotelian model'],
    correctIndex: 0,
    explanation: 'The heliocentric model (Helios = Sun) places the Sun at the center of the solar system, replacing the ancient Earth-centered geocentric model.'
  },
  {
    id: 'mcq-sci-10-2',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.1',
    topic: 'Invention of the Astronomical Telescope',
    difficulty: 'Easy',
    question: 'Who was the Italian astronomer who first used a telescope in 1609 to discover four moons orbiting Jupiter and craters on the Moon?',
    options: ['Galileo Galilei', 'Isaac Newton', 'Johannes Kepler', 'Edwin Hubble'],
    correctIndex: 0,
    explanation: 'Galileo Galilei built an optical telescope in 1609, making landmark observations that supported the Copernican heliocentric theory.'
  },
  {
    id: 'mcq-sci-10-3',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'Rocket Propulsion Principle',
    difficulty: 'Easy',
    question: 'A rocket launches into outer space based on which fundamental physics law?',
    options: [
      'Newton’s Third Law of Motion: For every action, there is an equal and opposite reaction',
      'Archimedes’ Principle of Buoyancy',
      'Hooke’s Law of Elasticity',
      'Ohm’s Law of Resistance'
    ],
    correctIndex: 0,
    explanation: 'Rockets expel high-velocity hot exhaust gases downwards (action), which exerts an equal and opposite upward thrust force on the rocket body (reaction).'
  },
  {
    id: 'mcq-sci-10-4',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'International Space Station (ISS)',
    difficulty: 'Easy',
    question: 'The International Space Station (ISS) operates in Low Earth Orbit (LEO) as a:',
    options: [
      'Permanently crewed microgravity laboratory for multinational scientific research',
      'Military defense missile silo',
      'Tourist hotel on Mars',
      'Refuelling station for commercial airliners'
    ],
    correctIndex: 0,
    explanation: 'The ISS is an international research facility orbiting ~400 km above Earth, enabling long-term scientific experiments in microgravity and space medicine.'
  },
  {
    id: 'mcq-sci-10-5',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.2.1',
    topic: 'Remote Sensing Applications',
    difficulty: 'Easy',
    question: 'Remote sensing satellites (such as Malaysia’s TiungSAT and RazakSAT) collect data from Earth’s surface primarily for:',
    options: [
      'Agriculture monitoring, disaster management, weather forecasting, and land use mapping',
      'Mining diamonds from the Moon',
      'Controlling road traffic lights directly',
      'Generating electricity for ground cities'
    ],
    correctIndex: 0,
    explanation: 'Remote sensing sensors detect reflected and emitted electromagnetic radiation from Earth to monitor deforestation, floods, urban planning, and crop health.'
  },

  // --- MEDIUM (5) ---
  {
    id: 'mcq-sci-10-6',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'Space Probes vs Satellites',
    difficulty: 'Medium',
    question: 'How does an interplanetary space probe (e.g. Voyager 1, New Horizons) differ from an artificial Earth satellite?',
    options: [
      'A space probe travels beyond Earth orbit into deep space without returning to collect scientific data from other planets/celestial bodies',
      'A space probe carries human passengers, whereas satellites do not',
      'A space probe stays in geostationary orbit over Malaysia',
      'A space probe does not use radio transmitters'
    ],
    correctIndex: 0,
    explanation: 'Satellites orbit Earth, whereas unmanned space probes are launched on escape trajectories to explore the Moon, other planets, comets, and interstellar space.'
  },
  {
    id: 'mcq-sci-10-7',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'Space Telescopes Advantage',
    difficulty: 'Medium',
    question: 'Why do space-based telescopes like the Hubble Space Telescope and James Webb Space Telescope produce vastly clearer images than ground-based optical telescopes?',
    options: [
      'They operate above Earth’s atmosphere, eliminating atmospheric turbulence, light pollution, and absorption of infrared/UV radiation',
      'They are much closer to the stars by millions of light years',
      'They do not require optical mirrors or digital sensors',
      'They are illuminated by solar wind'
    ],
    correctIndex: 0,
    explanation: 'Earth’s atmosphere blurs starlight (twinkling) and absorbs crucial wavelengths (infrared, UV, X-rays). Space telescopes operate in clear vacuum.'
  },
  {
    id: 'mcq-sci-10-8',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.2.1',
    topic: 'Spin-off Technologies from Space Exploration',
    difficulty: 'Medium',
    question: 'Which of the following everyday commercial products was originally invented as a spin-off technology for space exploration missions?',
    options: [
      'Memory foam (temper foam), scratch-resistant lens coatings, and digital image sensors (CMOS)',
      'Steam locomotives',
      'Incandescent light bulbs',
      'Paper printing presses'
    ],
    correctIndex: 0,
    explanation: 'NASA research for astronaut cushioning and satellite imaging directly spurred memory foam, CMOS phone camera sensors, water purifiers, and lightweight thermal blankets.'
  },
  {
    id: 'mcq-sci-10-9',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'Space Shuttles vs Reusable Rockets',
    difficulty: 'Medium',
    question: 'What is the primary technological advantage of modern reusable launch systems (such as Falcon 9 vertical landing boosters)?',
    options: [
      'Drastically reduces the cost per kilogram of launching payloads and satellites into orbit',
      'Allows rockets to fly faster than the speed of light',
      'Eliminates the need for rocket propellant fuel',
      'Guarantees zero space debris in all orbits'
    ],
    correctIndex: 0,
    explanation: 'Reusing first-stage rocket boosters multiple times lowers launch costs by over 70%, making space access economically sustainable.'
  },
  {
    id: 'mcq-sci-10-10',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.2.2',
    topic: 'Space Debris (Kessler Syndrome)',
    difficulty: 'Medium',
    question: 'Space junk / debris in Low Earth Orbit (abandoned rocket stages, broken satellite fragments) poses an extreme hazard to operational satellites because:',
    options: [
      'They travel at hypervelocities (~7.8 km/s or 28 000 km/h), causing catastrophic collision damage on impact',
      'They emit toxic chemical gases that corrode solar panels',
      'They block all sunlight from reaching the Earth',
      'They attract solar flares to Earth'
    ],
    correctIndex: 0,
    explanation: 'At orbital speeds (28,000 km/h), even a 1 cm bolt carries the kinetic energy of a hand grenade, threatening active spacecraft with destructive cascades.'
  },

  // --- HARD (5) ---
  {
    id: 'mcq-sci-10-11',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'Escape Velocity Mechanics',
    difficulty: 'Hard',
    question: 'What is "Escape Velocity", and what is its approximate minimum value required for a rocket to escape Earth’s gravitational field completely?',
    options: [
      'The minimum velocity required to break free from Earth’s gravitational attraction without further propulsion (~11.2 km/s)',
      'The speed required to orbit the Earth in LEO (~7.9 km/s)',
      'The speed of sound in air (~340 m/s)',
      'The speed of light in vacuum (~300 000 km/s)'
    ],
    correctIndex: 0,
    explanation: 'Escape velocity v_esc = √(2GM/R) ≈ 11.2 km/s (40,320 km/h). An object launched at or above this speed can overcome Earth’s gravity field completely.'
  },
  {
    id: 'mcq-sci-10-12',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.1.2',
    topic: 'Gravitational Slingshot (Gravity Assist)',
    difficulty: 'Hard',
    question: 'How do deep-space missions like Cassini and Voyager use planetary gravity assists (slingshot maneuvers) during interplanetary flight?',
    options: [
      'By passing close to a moving planet, the probe steals orbital momentum from the planet, gaining significant velocity and altering trajectory without expending fuel',
      'By landing on the planet and refuelling from native methane lakes',
      'By using the planet’s magnetic poles as an electromagnetic catapult',
      'By entering permanent orbit around the planet'
    ],
    correctIndex: 0,
    explanation: 'In the Sun’s frame of reference, a probe swinging behind a moving planet in hyperbolic flyby absorbs a fraction of the planet’s orbital momentum, increasing velocity.'
  },
  {
    id: 'mcq-sci-10-13',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.2.1',
    topic: 'Geostationary Orbit (GEO) Dynamics',
    difficulty: 'Hard',
    question: 'What are the unique orbital characteristics of a Geostationary Orbit (GEO) utilized by telecommunication and weather satellites (e.g. MEASAT)?',
    options: [
      'Altitude of ~35 786 km directly above the Equator with an orbital period of exactly 24 hours, remaining permanently fixed over one geographic longitude',
      'Altitude of 400 km passing over both North and South poles every 90 minutes',
      'An elliptical orbit that enters the atmosphere during daytime',
      'An orbit inside the Moon’s gravitational sphere'
    ],
    correctIndex: 0,
    explanation: 'A circular equatorial orbit at 35,786 km has an orbital period matching Earth’s sidereal rotation (23h 56m 4s), allowing satellite ground dishes to point at a fixed spot in the sky.'
  },
  {
    id: 'mcq-sci-10-14',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.2.2',
    topic: 'Human Physiological Changes in Microgravity',
    difficulty: 'Hard',
    question: 'During prolonged spaceflight aboard the ISS in microgravity, astronauts experience which physiological adaptations requiring mandatory daily resistance exercise?',
    options: [
      'Bone mineral density loss (osteopenia) and skeletal muscle atrophy due to absence of weight-bearing mechanical loading',
      'Permanent increase in bone calcium and super-fast muscle growth',
      'Shrinkage of eyeball corneas and loss of hearing',
      'Complete loss of white blood cells'
    ],
    correctIndex: 0,
    explanation: 'Without gravitational strain, bones lose up to 1-1.5% bone mass per month and postural muscles atrophy. Astronauts must perform intensive 2-hour daily resistance workouts.'
  },
  {
    id: 'mcq-sci-10-15',
    chapterId: 'science-ch10',
    chapterNumber: 10,
    subject: 'science',
    learningStandardCode: '10.2.2',
    topic: 'Planetary Defense & Asteroid Redirection (DART Mission)',
    difficulty: 'Hard',
    question: 'NASA’s Double Asteroid Redirection Test (DART) successfully demonstrated planetary defense in 2022 by proving that:',
    options: [
      'A kinetic impactor spacecraft can intentionally crash into a target asteroid to alter its orbital velocity and trajectory via momentum transfer',
      'Nuclear weapons can completely vaporize large asteroids into dust',
      'Asteroids can be pulled away using solar sail lasers',
      'Asteroids can be magnetized to repel Earth'
    ],
    correctIndex: 0,
    explanation: 'The DART mission successfully shortened Dimorphos’s orbital period around Didymos by 33 minutes, validating kinetic impact deflection for future hazardous asteroid mitigation.'
  }
];
