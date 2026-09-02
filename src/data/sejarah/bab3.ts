import { Chapter } from '../../types';
import { sejarahLearningStandards } from '../learningStandards';

export const bab3: Chapter = {
  id: 'sejarah-ch3',
  subject: 'sejarah',
  chapterNumber: 3,
  title: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
  theme: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
  summary: 'Menerangkan kekayaan sumber bijih timah dan emas di Perak, Selangor, Negeri Sembilan dan Pahang, strategi manipulasi British melalui Sistem Residen bermula dengan Perjanjian Pangkor 1874, faktor pembentukan Negeri-negeri Melayu Bersekutu (NNMB) pada 1896, serta struktur pentadbiran Persekutuan dan persidangan Durbar.',
  learningStandards: sejarahLearningStandards['sejarah-ch3'],
  notes: [
    {
      title: '3.1 Kekayaan Hasil Bumi di Perak, Selangor, Negeri Sembilan dan Pahang',
      content: `
### 1. Kekayaan Bijih Timah (Tin Riches)
Negeri-negeri Melayu barat kaya dengan mendapan bijih timah aluvium yang berkualiti tinggi sejak abad ke-15.

> **English explanation:** Rich alluvial tin deposits in western Malay states attracted massive Chinese migrant labor and triggered British imperial intervention.

* **Perak:**
  * Perlombongan diusahakan di Larut (Klian Pauh dan Klian Baru) oleh Long Jaafar dan anaknya Ngah Ibrahim yang membawa masuk buruh Cina.
  * Pada akhir abad ke-19, Lembah Kinta muncul sebagai pengeluar bijih timah terbesar di dunia, menggantikan Larut. Bandar-bandar seperti Ipoh, Taiping, dan Gopeng berkembang pesat.
* **Selangor:**
  * Perlombongan berpusat di Lukut, Kuala Lumpur (Ampang), Petaling, dan Kanching.
  * Raja Jumaat memajukan Lukut menjadi pusat perdagangan bijih timah yang masyhur.
  * Sutan Puasa dan Yap Ah Loy memajukan Kuala Lumpur sebagai pusat perlombongan dan perniagaan.
* **Negeri Sembilan:**
  * Perlombongan aktif di Sungai Ujong (Seremban), Lukut, Rembau, dan Jelebu. Sungai Linggi menjadi laluan utama pengangkutan timah ke Selat Melaka.
* **Pahang:**
  * Perlombongan bijih timah diusahakan di Sungai Lembing oleh syarikat lombong Eropah (Pahang Consolidated Company Limited - PCCL) yang memiliki lombong timah bawah tanah terdalam di dunia.

---

### 2. Kekayaan Emas di Pahang (Gold Mining in Pahang)
* Perlombongan emas diusahakan sejak abad ke-16 di kawasan jalur emas Pahang seperti **Raub**, Tui, Selinsing, dan Penjom.
* Syarikat Australia mengasaskan *Raub Australian Gold Mining Company* untuk melombong emas secara berskala besar menggunakan teknologi moden.

---

<div class="p-4 my-4 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-800 text-amber-900 dark:text-amber-200">
  <strong class="block text-base mb-1">⭐ Lokasi Penting Perlombongan KSSM</strong>
  <ul class="list-disc list-inside space-y-1 text-sm">
    <li><strong>Larut & Lembah Kinta:</strong> Pengeluar bijih timah utama Perak.</li>
    <li><strong>Lukut & Ampang:</strong> Pusat perlombongan bijih timah Selangor.</li>
    <li><strong>Sungai Lembing:</strong> Lombong bijih timah bawah tanah terdalam di dunia.</li>
    <li><strong>Raub:</strong> Pusat perlombongan emas utama Pahang.</li>
  </ul>
</div>
      `,
      definitions: [
        { term: 'Mendapan Aluvium (Alluvial Deposit)', definition: 'Lapisan tanah liat, pasir, dan batu kerikil yang mengandungi bijih timah yang diendapkan oleh aliran air sungai.' },
        { term: 'Lombong Dedah / Lombong Bawah Tanah', definition: 'Kaedah melombong mineral di permukaan bumi atau melalui terowong bawah tanah yang dalam.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-3-1',
          type: 'quiz',
          title: 'Uji Minda 3.1: Hasil Bumi',
          prompt: 'Apakah lokasi perlombongan bijih timah bawah tanah yang paling dalam di dunia yang terletak di Pahang?',
          options: [
            {
              text: 'Sungai Lembing',
              isCorrect: true,
              explanation: 'Sungai Lembing di Pahang mempunyai rangkaian lombong bijih timah bawah tanah terbesar dan terdalam di dunia yang diusahakan oleh PCCL.'
            },
            {
              text: 'Raub',
              isCorrect: false,
              explanation: 'Raub ialah kawasan perlombongan emas, bukan bijih timah bawah tanah.'
            },
            {
              text: 'Klian Pauh',
              isCorrect: false,
              explanation: 'Klian Pauh terletak di Larut, Perak.'
            },
            {
              text: 'Lembah Kinta',
              isCorrect: false,
              explanation: 'Lembah Kinta terkenal dengan lombong dedah dan kapal korek di Perak.'
            }
          ]
        }
      ]
    },
    {
      title: '3.2 Peluasan Kuasa British & Pengenalan Sistem Residen',
      content: `
### Peluasan Kuasa British di Empat Negeri Melayu

> **English explanation:** British expanded control into Perak, Selangor, Negeri Sembilan, and Pahang by introducing the Resident System through political manipulation and coercion.

---

### 1. Negeri Perak: Perjanjian Pangkor 1874
* **Faktor Campur Tangan:**
  * **Perang Larut (1861–1873):** Pergaduhan antara kumpulan kongsi gelap Cina *Ghee Hin* dan *Hai San* merebut kawasan lombong timah di Larut yang menjejaskan perdagangan pedagang NNS.
  * **Perebutan Takhta Perak:** Berlaku krisis pewarisan takhta antara *Raja Abdullah* (Raja Muda), *Raja Ismail* (Raja Bendahara), dan *Raja Yusuf*.
* **Perjanjian Pangkor (20 Januari 1874):**
  * Gabenor Sir Andrew Clarke memanggil Raja Abdullah dan ketua kongsi gelap ke atas kapal perang *H.M.S. Pluto* di Pulau Pangkor.
  * **Syarat Perjanjian:**
    1. Raja Abdullah diiktiraf sebagai Sultan Perak yang sah, manakala Raja Ismail diberi gelaran Sultan Muda berserta elaun.
    2. Sultan menerima seorang **Residen British** yang nasihatnya mesti diminta dan dipatuhi dalam semua urusan pentadbiran negeri, **KECUALI hal ehwal agama Islam dan adat istiadat Melayu**.
    3. Residen berkuasa penuh menguruskan pungutan cukai dan hasil mahsul negeri.
  * **J.W.W. Birch** dilantik sebagai Residen British pertama di Perak.

---

### 2. Negeri Selangor (1874)
* **Perang Klang (1867–1874):** Perang saudara antara *Raja Abdullah* (disokong kumpulan Hai San) dengan *Raja Mahadi* (disokong kumpulan Ghee Hin) merebut penguasaan Sungai Klang dan kutipan cukai timah.
* **Alasan British Campur Tangan:**
  * Rompakan kapal dagang Melaka berhampiran Kuala Langat (1873).
  * Serangan ke atas rumah api Tanjung Rachado (1874).
* **Pelantikan Residen:** Gabenor Sir Andrew Clarke melantik **J.G. Davidson** sebagai Residen pertama Selangor dan **Frank Swettenham** sebagai Penolong Residen.

---

### 3. Negeri Sembilan (1874 - 1889)
* **Krisis Sungai Ujong:** Persengketaan antara *Dato' Kelana Syed Ahmad* dengan *Dato' Bandar Kulop Tunggal* merebut hak memungut cukai di Sungai Linggi. Dato' Kelana meminta bantuan British.
* **Pelantikan Residen:** Kapten **P.J. Murray** dilantik sebagai Residen British pertama di Sungai Ujong pada tahun 1874.
* Pada tahun 1889, Seri Menanti, Rembau dan Tampin disatukan, dan pada tahun 1895 keseluruhan Negeri Sembilan menerima Residen Martin Lister.

---

### 4. Negeri Pahang (1888)
* British menggunakan peristiwa pembunuhan seorang warganegara British berbangsa Cina bernama **Goh Hui** berhampiran istana Sultan Ahmad di Pekan untuk memaksa Sultan menerima Residen.
* **J.P. Rodger** dilantik sebagai Residen British pertama di Pahang pada 1888.

---

### Ciri-ciri Sistem Residen (The Resident System)
1. Kedudukan Sultan dan pembesar dikekalkan, namun kuasa eksekutif pentadbiran beralih kepada Residen British.
2. Nasihat Residen wajib dipatuhi dalam semua perkara kecuali agama Islam dan adat Melayu.
3. Residen menguasai sepenuhnya jabatan kerajaan, perundangan, dan pemungutan cukai negeri.
4. Majlis Mesyuarat Negeri (MMN) ditubuhkan tetapi hanya berfungsi meluluskan undang-undang yang dirangka oleh Residen.

---

<div class="p-4 my-4 rounded-xl border border-rose-300 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-800 text-rose-900 dark:text-rose-200">
  <strong class="block text-base mb-1">⚠️ Peranan Residen: Kuasa Sebenar vs Kuasa Nasihat</strong>
  <p class="text-sm">
    Walaupun istilah yang digunakan ialah <em>"nasihat"</em>, pada hakikatnya ia adalah <strong>arahan mutlak</strong>. Sultan kehilangan kuasa memungut cukai dan memerintah negeri secara berdaulat.
  </p>
</div>
      `,
      definitions: [
        { term: 'Sistem Residen (Resident System)', definition: 'Sistem pentadbiran tidak langsung British di mana Residen bertindak sebagai penasihat tertinggi negeri yang nasihatnya wajib dipatuhi oleh Sultan.' },
        { term: 'Perjanjian Pangkor 1874', definition: 'Perjanjian bersejarah antara British dengan Raja Abdullah yang memulakan campur tangan rasmi British di negeri-negeri Melayu.' },
        { term: 'Perang Larut & Perang Klang', definition: 'Perang saudara dan persengketaan kongsi gelap Cina yang membuka ruang manipulasi campur tangan British di Perak dan Selangor.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-3-2',
          type: 'quiz',
          title: 'Uji Minda 3.2: Perjanjian Pangkor 1874',
          prompt: 'Apakah syarat utama Perjanjian Pangkor 1874 berkaitan dengan kuasa Residen British di Perak?',
          options: [
            {
              text: 'Nasihat Residen mesti diminta dan dipatuhi dalam semua urusan pentadbiran kecuali hal ehwal agama Islam dan adat istiadat Melayu.',
              isCorrect: true,
              explanation: 'Syarat klausa VI Perjanjian Pangkor 1874 menetapkan bahawa Sultan mesti menerima Residen British dan mematuhi nasihatnya dalam semua urusan pentadbiran kecuali hal ehwal agama Islam dan adat Melayu.'
            },
            {
              text: 'Residen dilantik sebagai Sultan Perak yang baru menggantikan Raja Ismail.',
              isCorrect: false,
              explanation: 'Raja Abdullah yang dilantik sebagai Sultan, bukan Residen.'
            },
            {
              text: 'Sultan Perak berkuasa penuh melantik dan memecat Residen British bila-bila masa.',
              isCorrect: false,
              explanation: 'Sultan tidak mempunyai kuasa memecat Residen.'
            },
            {
              text: 'Negeri Perak diserap menjadi sebahagian daripada wilayah Negeri-negeri Selat.',
              isCorrect: false,
              explanation: 'Perak kekal sebagai Negeri Melayu berasingan di bawah Sistem Residen.'
            }
          ]
        }
      ]
    },
    {
      title: '3.3 Pembentukan dan Pentadbiran Negeri-negeri Melayu Bersekutu (NNMB)',
      content: `
### Pembentukan Negeri-negeri Melayu Bersekutu (1896)
Pada 1 Julai 1896, British menyatukan pentadbiran Perak, Selangor, Negeri Sembilan, dan Pahang di bawah satu kerajaan pusat persekutuan yang dinamakan **Negeri-negeri Melayu Bersekutu (NNMB)** atau *Federated Malay States (FMS)*.

> **English explanation:** In 1896, the four resident-administered states were federated under a Resident-General headquartered in Kuala Lumpur.

---

### Faktor-faktor Pembentukan NNMB
1. **Mengatasi Kelemahan Sistem Residen:** Tiada keseragaman undang-undang dan peraturan cukai antara keempat-empat negeri kerana setiap Residen mentadbir secara bebas.
2. **Krisis Kewangan Negeri Pahang:** Pahang menanggung beban hutang yang besar akibat perang penentangan tempatan; penyatuan persekutuan membolehkan hasil kaya Perak dan Selangor menampung defisit Pahang.
3. **Menjimatkan Kos Pentadbiran:** Penyatuan jabatan kerajaan (seperti polis, keretapi, pos, kehakiman) mengurangkan perbelanjaan pentadbiran kolonial.
4. **Memperkukuh Pertahanan dan Keselamatan:** Menubuhkan pasukan tentera keselamatan persekutuan yang seragam untuk menghadapi sebarang ancaman dalaman.
5. **Mempercepat Pembinaan Sistem Pengangkutan:** Memudahkan pembinaan jaringan landasan keretapi dan jalan raya merentasi sempadan negeri.

---

### Struktur Pentadbiran NNMB (1896)
* **Pesuruhjaya Tinggi British (Gabenor NNS di Singapura):** Ketua tertinggi pentadbiran NNMB.
* **Residen Jeneral (Resident-General):** Berpusat di **Kuala Lumpur** (Ibu negeri Persekutuan). Memegang kuasa eksekutif tertinggi pentadbiran harian NNMB. **Sir Frank Swettenham** dilantik sebagai Residen Jeneral pertama.
* **Residen Negeri:** Mentadbir negeri masing-masing tetapi tertakluk kepada arahan Residen Jeneral.
* **Majlis Mesyuarat Persekutuan (1909):** Ditubuhkan kemudian untuk menggubal undang-undang peringkat persekutuan.

---

### Persidangan Durbar (Majlis Raja-Raja)
Durbar ialah persidangan Majlis Raja-Raja Melayu bersama pihak British untuk membincangkan hal ehwal orang Melayu dan pentadbiran persekutuan:
* **Durbar Pertama (1897):** Diadakan di **Kuala Kangsar, Perak**. Dipengerusikan oleh Sir Charles Mitchell dan dihadiri oleh Sultan keempat-empat negeri NNMB.
* **Durbar Kedua (1903):** Diadakan di **Kuala Lumpur**. Dalam persidangan ini, **Sultan Idris Murshidul Adzam Shah (Sultan Perak)** dengan berani mengkritik pemusatan kuasa Residen Jeneral yang mengurangkan kuasa Raja-raja Melayu dan menuntut peluang pekerjaan pegawai Melayu dalam pentadbiran.

---

<div class="p-4 my-4 rounded-xl border border-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200">
  <strong class="block text-base mb-1">⭐ Rumusan Penting NNMB</strong>
  <ul class="list-disc list-inside space-y-1 text-sm">
    <li><strong>4 Negeri NNMB:</strong> Perak, Selangor, Negeri Sembilan, Pahang.</li>
    <li><strong>Ibu Negeri:</strong> Kuala Lumpur.</li>
    <li><strong>Residen Jeneral Pertama:</strong> Sir Frank Swettenham.</li>
    <li><strong>Tarikh Dikuatkuasakan:</strong> 1 Julai 1896.</li>
  </ul>
</div>
      `,
      definitions: [
        { term: 'Negeri-negeri Melayu Bersekutu (NNMB / FMS)', definition: 'Persekutuan empat negeri Melayu (Perak, Selangor, Negeri Sembilan, Pahang) yang dibentuk oleh British pada 1 Julai 1896.' },
        { term: 'Residen Jeneral (Resident-General)', definition: 'Ketua pentadbir pusat kerajaan NNMB yang berpusat di Kuala Lumpur dan bertanggungjawab kepada Pesuruhjaya Tinggi British.' },
        { term: 'Durbar (Majlis Raja-Raja)', definition: 'Persidangan rasmi antara Raja-raja Melayu dengan pegawai-pegawai tertinggi British yang dimulakan pada 1897.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-3-3',
          type: 'quiz',
          title: 'Uji Minda 3.3: Pembentukan NNMB',
          prompt: 'Siapakah tokoh British yang dilantik sebagai Residen Jeneral pertama Negeri-negeri Melayu Bersekutu pada tahun 1896?',
          options: [
            {
              text: 'Sir Frank Swettenham',
              isCorrect: true,
              explanation: 'Sir Frank Swettenham dilantik sebagai Residen Jeneral pertama NNMB yang beribu pejabat di Kuala Lumpur.'
            },
            {
              text: 'J.W.W. Birch',
              isCorrect: false,
              explanation: 'J.W.W. Birch ialah Residen pertama Perak yang dibunuh pada 1875.'
            },
            {
              text: 'Sir Andrew Clarke',
              isCorrect: false,
              explanation: 'Sir Andrew Clarke ialah Gabenor NNS yang menandatangani Perjanjian Pangkor.'
            },
            {
              text: 'Francis Light',
              isCorrect: false,
              explanation: 'Francis Light membuka Pulau Pinang pada 1786.'
            }
          ]
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sej-ex-3-1',
      number: 1,
      difficulty: 'Intermediate',
      learningStandardCode: '7.3.3',
      marks: 6,
      question: 'Pada 1 Julai 1896, Perjanjian Persekutuan 1895 dikuatkuasakan bagi menyatukan pentadbiran empat buah negeri Melayu. (a) Senaraikan dua buah negeri yang membentuk Negeri-negeri Melayu Bersekutu (NNMB) [2 markah]. (b) Jelaskan dua faktor yang mendorong British membentuk Negeri-negeri Melayu Bersekutu pada 1896 [4 markah].',
      subQuestions: [
        { label: '(a)', question: 'Senaraikan dua buah negeri yang membentuk Negeri-negeri Melayu Bersekutu (NNMB).', marks: 2 },
        { label: '(b)', question: 'Jelaskan dua faktor yang mendorong British membentuk Negeri-negeri Melayu Bersekutu pada 1896.', marks: 4 }
      ],
      hints: [
        'Negeri anggota: Perak, Selangor, Negeri Sembilan, Pahang.',
        'Faktor: Menyeragamkan pentadbiran (kelemahan sistem residen) dan menampung masalah kewangan Pahang.'
      ],
      answer: {
        finalAnswer: '(a) Dua buah negeri: Perak dan Selangor (atau Negeri Sembilan / Pahang).\n(b) Faktor 1: Mengatasi kelemahan Sistem Residen yang tidak seragam dari segi undang-undang dan cukai.\nFaktor 2: Mengatasi krisis kewangan negeri Pahang dengan sokongan hasil kekayaan timah Perak dan Selangor.',
        fullWorking: [
          'Bahagian (a): 1m untuk setiap negeri yang betul (Jumlah: 2 markah).',
          'Bahagian (b): Fakta 1: Kelemahan Sistem Residen yang tidak selaras [2m].',
          'Bahagian (b): Fakta 2: Menampung hutang kewangan negeri Pahang [2m].'
        ],
        scientificReasoning: 'Pembentukan NNMB memusatkan kuasa pentadbiran kepada Residen Jeneral di Kuala Lumpur dan mengikis kedaulatan tradisi Kesultanan Melayu.'
      }
    }
  ],
  mindmap: {
    id: 'sej-m3',
    title: 'Bab 3: Pentadbiran Negeri-negeri Melayu Bersekutu',
    children: [
      {
        id: 'sej-m3-1',
        title: 'Kekayaan Sumber Bumi',
        children: [
          { id: 'sej-m3-1a', title: 'Bijih Timah: Larut, Lembah Kinta, Lukut, KL' },
          { id: 'sej-m3-1b', title: 'Emas: Raub (Pahang)' }
        ]
      },
      {
        id: 'sej-m3-2',
        title: 'Sistem Residen 1874',
        children: [
          { id: 'sej-m3-2a', title: 'Perjanjian Pangkor 1874 (J.W.W. Birch)' },
          { id: 'sej-m3-2b', title: 'Selangor (J.G. Davidson) & N. Sembilan (P.J. Murray)' },
          { id: 'sej-m3-2c', title: 'Pahang 1888 (J.P. Rodger)' }
        ]
      },
      {
        id: 'sej-m3-3',
        title: 'Pembentukan NNMB 1896',
        children: [
          { id: 'sej-m3-3a', title: 'Penyatuan 4 Negeri (Ibu Negeri: Kuala Lumpur)' },
          { id: 'sej-m3-3b', title: 'Residen Jeneral Pertama: Frank Swettenham' },
          { id: 'sej-m3-3c', title: 'Durbar: Majlis Raja-Raja Melayu (1897 & 1903)' }
        ]
      }
    ]
  },
  answeringTechniques: [
    {
      category: 'Teknik Fakta & Kesan Institusi Pentadbiran',
      title: 'Teknik Menjawab Soalan Perjanjian Pangkor 1874 & Pembentukan NNMB 1896',
      keyQuestionTypes: [
        'Soalan syarat Perjanjian Pangkor 1874 dan kuasa Residen',
        'Soalan faktor pengenalan Sistem Persekutuan (NNMB) 1896',
        'Soalan impak Durbar dan bantahan Raja-raja Melayu'
      ],
      essentialKeywords: [
        'Klausa VI Perjanjian Pangkor: Nasihat Residen wajib dipatuhi',
        'Kecuali hal ehwal agama Islam dan adat Melayu',
        'Krisis kewangan negeri Pahang & penyeragaman pentadbiran',
        'Residen Jeneral Sir Frank Swettenham di Kuala Lumpur',
        'Kritikan Sultan Idris dalam Durbar 1903'
      ],
      stepByStepStrategy: [
        'Langkah 1: Kenal pasti punca krisis (Perang Larut, Perang Klang, atau hutang Pahang).',
        'Langkah 2: Nyatakan nama perjanjian, tarikh, dan tokoh British yang terlibat.',
        'Langkah 3: Huraikan syarat utama atau perubahan struktur pentadbiran (Sistem Residen / Residen Jeneral).',
        'Langkah 4: Jelaskan implikasi terhadap kedudukan Raja-raja Melayu dan kedaulatan negeri.'
      ],
      commonErrorsToAvoid: [
        'Menyatakan Residen mentadbir hal ehwal agama Islam (agama Islam dan adat Melayu dikecualikan secara rasmi).',
        'Tertukar antara jawatan Residen (peringkat negeri) dengan Residen Jeneral (peringkat persekutuan NNMB).',
        'Lupa menyebut Pahang sebagai salah satu daripada 4 negeri NNMB.'
      ]
    }
  ]
};
