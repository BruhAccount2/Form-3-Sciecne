import { Chapter } from '../../types';
import { sejarahLearningStandards } from '../learningStandards';

export const bab8: Chapter = {
  id: 'sejarah-ch8',
  subject: 'sejarah',
  chapterNumber: 8,
  title: 'Kebijaksanaan Raja dan Pembesar Melayu Menangani Cabaran Barat',
  theme: 'Kebijaksanaan Raja dan Pembesar Melayu Menangani Cabaran Barat',
  summary: 'Menghuraikan kebijaksanaan diplomasi Raja-raja Melayu dan pembesar negeri dalam mempertahankan kedaulatan, reaksi tegas pemerintah terhadap Perjanjian Bangkok 1909, peranan Durbar dan Maktab Melayu Kuala Kangsar (MCKK), penggubalan perlembagaan bertulis Undang-Undang Tubuh di Johor dan Terengganu, serta sumbangan tokoh-tokoh pembesar berwawasan memodenkan pentadbiran dan infrastruktur negara.',
  learningStandards: sejarahLearningStandards['sejarah-ch8'],
  notes: [
    {
      title: '8.1 Reaksi Pemerintah & 8.2 Tindakan Raja Melayu',
      content: `
### Reaksi Pemerintah Negeri Melayu terhadap Cabaran Barat

> **English explanation:** Malay Rulers demonstrated sophisticated diplomatic resistance and legal statecraft, vehemently rejecting the 1909 Bangkok Treaty and safeguarding state sovereignty through modern written constitutions and the Durbar conferences.

---

### 1. Bantahan Tegas Terhadap Perjanjian Bangkok 1909
* **Terengganu (Sultan Zainal Abidin III):**
  * Baginda memprotes keras tindakan Siam dan British menandatangani perjanjian tanpa berunding dengan baginda.
  * Menegaskan dengan lantang bahawa: *"Terengganu adalah sebuah negeri yang merdeka dan tidak pernah berada di bawah naungan takluk Siam!"*
  * Baginda hanya menerima Penasihat British (W.L. Conlay) pada tahun 1919 selepas syarat peranan penasihat dihadkan semata-mata.
* **Kedah (Sultan Abdul Hamid Halim Shah):**
  * Baginda enggan mengiktiraf Perjanjian Bangkok 1909 dan menyifatkan tindakan British dan Siam sebagai perbuatan yang tidak beretika kerana menjual negeri baginda seperti seekor kerbau.
* **Kelantan (Sultan Muhammad IV):**
  * Menolak perjanjian tersebut dan menuntut ganti rugi serta jaminan kebebasan hal ehwal pentadbiran dalaman Kelantan.
* **Perlis (Raja Syed Alwi):**
  * Mempertahankan hak autonomi Perlis dan membantah percubaan British mencantumkan Perlis dengan Kedah.

---

### 2. Tindakan Raja Melayu Melalui Persidangan Durbar
* **Sultan Idris Murshidul Adzam Shah (Sultan Perak):**
  * Menggunakan pentas **Durbar Kedua (1903)** di Kuala Lumpur untuk mengkritik pemusatan kuasa di tangan Residen Jeneral yang mengurangkan kuasa Raja-raja Melayu.
  * Mendesak British melantik lebih ramai anak-anak Melayu menjawat jawatan tinggi dalam perkhidmatan awam.
  * Menuntut bahasa Melayu diiktiraf sebagai bahasa rasmi pentadbiran bersama bahasa Inggeris.
* **Penubuhan Maktab Melayu Kuala Kangsar (MCKK - 1905):**
  * Ditubuhkan hasil desakan Sultan Idris dan pembesar Melayu untuk memberikan pendidikan elit moden kepada anak-anak watan bagi mengisi jawatan pentadbiran dalam *Malay Administrative Service (MAS)*.

---

### 3. Penggubalan Undang-Undang Tubuh Kerajaan (Written Constitutions)
Raja-raja Melayu mengambil langkah berani menggubal perlembagaan bertulis moden untuk menghalang campur tangan dan pencerobohan mutlak British:

| Perlembagaan Bertulis | Pengasas & Tahun | Ciri-ciri Utama & Kepentingan |
| :--- | :--- | :--- |
| **Undang-Undang Tubuh Kerajaan Johor** | **Sultan Abu Bakar (1895)** | • Mengandungi 64 fasal.<br/>• Menegaskan bahawa Sultan dan pembesar **DILARANG menyerahkan walau seinci pun wilayah Johor kepada kuasa asing**.<br/>• Raja mestilah berbangsa Melayu, lelaki, dan beragama Islam.<br/>• Menubuhkan Jemaah Menteri dan Majlis Mesyuarat Kerajaan. |
| **Undang-Undang Bagi Diri Kerajaan Terengganu (*Itqan al-Muluk bi Ta'dil al-Suluk*)** | **Sultan Zainal Abidin III (1911)** | • Mengandungi 53 fasal.<br/>• Berasaskan hukum syarak Islam dan prinsip musyawarah.<br/>• Menetapkan bahawa Sultan tidak boleh menyerahkan kedaulatan negeri Terengganu kepada mana-mana kuasa asing.<br/>• Menubuhkan Majlis Mesyuarat Kerajaan bagi membantu pemerintahan Sultan. |

---

<div class="p-4 my-4 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-800 text-amber-900 dark:text-amber-200">
  <strong class="block text-base mb-1">⭐ Kepentingan Undang-Undang Tubuh</strong>
  <p class="text-sm">
    Undang-Undang Tubuh 1895 (Johor) dan 1911 (Terengganu) menjadi <strong>perisai perundangan terkuat</strong> yang menyekat kuasa mutlak penjajah dan membuktikan kematangan sistem perlembagaan moden tempatan.
  </p>
</div>
      `,
      definitions: [
        { term: 'Undang-Undang Tubuh (Written Constitution)', definition: 'Perlembagaan bertulis yang menjadi undang-undang tertinggi bagi sesebuah negeri untuk mentadbir kerajaan dan memelihara kedaulatan.' },
        { term: 'Itqan al-Muluk bi Ta\'dil al-Suluk', definition: 'Nama rasmi bagi Undang-Undang Bagi Diri Kerajaan Terengganu yang digubal oleh Sultan Zainal Abidin III pada tahun 1911.' },
        { term: 'Malay Administrative Service (MAS)', definition: 'Perkhidmatan Tadbir Melayu yang ditubuhkan pada 1910 untuk melatih golongan elit Melayu memegang jawatan pegawai daerah dan pentadbir kerajaan.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-8-1',
          type: 'mcq',
          title: 'Uji Minda 8.1: Undang-Undang Tubuh',
          prompt: 'Apakah klausa terpenting dalam Undang-Undang Tubuh Kerajaan Johor (1895) yang berjaya menyekat cita-cita penjajahan British?',
          options: [
            'Larangan mutlak kepada Sultan dan Jemaah Menteri daripada menyerahkan negeri atau sebahagian wilayah Johor kepada mana-mana kuasa asing.',
            'Kewajipan membayar cukai perdagangan kepada kerajaan Mahkota British di London.',
            'Penyerahan kuasa kehakiman secara penuh kepada Mahkamah Tinggi Singapura.',
            'Pelantikan Residen British sebagai Ketua Jemaah Menteri Johor.'
          ],
          correctIndex: 0,
          explanation: 'Fasal larangan menyerahkan wilayah Johor kepada kuasa asing menjadi perisai undang-undang ampuh yang mempertahankan kemerdekaan Johor daripada British.'
        }
      ]
    },
    {
      title: '8.3 Usaha Pembesar Melayu dalam Pemodenan Negeri',
      content: `
### Sumbangan dan Kebijaksanaan Pembesar Melayu Memajukan Negeri

> **English explanation:** Visionary Malay statesmen pioneered state-of-the-art agricultural canals, urban city planning, bilingual civil service decrees, modern mining concessions, and defensive strongholds to resist Western domination.

---

### 1. Pembesar Negeri Kedah
* **Wan Muhammad Saman (Perdana Menteri Kedah Pertama):**
  * Membina **Terusan Wan Muhammad Saman** sepanjang 36 kilometer menghubungkan Alor Setar dengan kaki Gunung Jerai di Gurun (1885–1896).
  * Terusan ini berjaya mengalirkan air ke kawasan sawah padi yang luas, mengeringkan tanah paya untuk penanaman, serta menjadikan Kedah **Jelapang Padi Negara**.
  * Beliau digelar sebagai *Tokoh Pembangunan Pertanian Negeri Kedah*.

---

### 2. Pembesar-pembesar Berwibawa Negeri Johor
* **Dato' Jaafar bin Haji Muhammad (Menteri Besar Johor Pertama):**
  * Mewajibkan semua pegawai British di Johor memakai **pakaian rasmi seragam kerajaan Johor** semasa bertugas.
  * Menetapkan bahawa **bahasa Melayu dan tulisan Jawi** wajib digunakan dalam semua surat-menyurat dan dokumen rasmi kerajaan negeri.
  * Mengarahkan bendera Union Jack British tidak boleh dikibarkan lebih tinggi daripada bendera negeri Johor.
* **Dato' Abdul Rahman bin Andak (Setiausaha Kerajaan Johor):**
  * Digelar sebagai *"Benteng Kemerdekaan Johor"* kerana kebijaksanaan diplomasi dan ketegasannya dalam rundingan perjanjian mematahkan helah British.
  * Mengasaskan persatuan *Pakatan Belajar Mengajar Pengetahuan Bahasa* (1888) untuk memartabatkan bahasa Melayu.
* **Dato' Muhammad Salleh bin Perang (Dato' Bentara Luar):**
  * Pakar ukur dan perancang bandar Melayu yang melukis **peta negeri Johor yang lengkap dan terperinci**.
  * Merancang dan membuka pembangunan bandar moden seperti **Bandar Maharani (Muar)** dan **Bandar Penggaram (Batu Pahat)**.

---

### 3. Pembesar Negeri Perak dan Selangor
* **Long Jaafar & Ngah Ibrahim (Perak):**
  * Memajukan daerah Larut sebagai pusat pengeluaran bijih timah dunia, membina jalan keretapi swasta pertama, membina mahkamah dan kubu Matang, serta menubuhkan pasukan polis tempatan.
* **Raja Jumaat & Raja Abdullah (Selangor):**
  * Raja Jumaat memajukan Lukut menjadi pusat perlombongan timah yang makmur dengan membina kubu pertahanan moden di Bukit Gasing dan mengamalkan sistem percukaian sistematik.

---

<div class="p-4 my-4 rounded-xl border border-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200">
  <strong class="block text-base mb-1">⭐ Iktibar Kepimpinan Tokoh Tempatan</strong>
  <p class="text-sm">
    Kebijaksanaan, pemikiran berwawasan, dan integriti para pembesar Melayu membuktikan bahawa bangsa kita mampu mentadbir dan memodenkan negara setanding dengan piawaian antarabangsa tanpa memerlukan penjajahan asing.
  </p>
</div>
      `,
      definitions: [
        { term: 'Terusan Wan Muhammad Saman', definition: 'Terusan buatan sepanjang 36 km di Kedah yang dibina secara gotong-royong oleh Wan Muhammad Saman untuk mengairi kawasan sawah padi.' },
        { term: 'Benteng Kemerdekaan Johor', definition: 'Gelaran penghormatan kepada Dato\' Abdul Rahman bin Andak atas ketegasannya mempertahankan autonomi Johor daripada campur tangan British.' },
        { term: 'Dato\' Bentara Luar (Mohd Salleh Perang)', definition: 'Tokoh juruukur dan perancang bandar Johor yang melukis peta rasmi Johor dan merancang bandar Muar serta Batu Pahat.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-8-2',
          type: 'mcq',
          title: 'Uji Minda 8.2: Pemodenan Pembesar',
          prompt: 'Apakah sumbangan terbesar Wan Muhammad Saman kepada pembangunan ekonomi negeri Kedah?',
          options: [
            'Membina terusan sepanjang 36 km untuk mengairi sawah padi yang memajukan Kedah sebagai Jelapang Padi Negara.',
            'Membeli armada kapal perang dari Amerika Syarikat untuk menyerang Siam.',
            'Menandatangani Perjanjian Bangkok bagi pihak Sultan Kedah.',
            'Membina kilang pemprosesan bijih timah terbesar di Taiping.'
          ],
          correctIndex: 0,
          explanation: 'Terusan Wan Muhammad Saman sepanjang 36 km berjaya mengairi ribuan hektar tanah sawah dan mengukuhkan kedudukan Kedah sebagai Jelapang Padi utama negara.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sej-ex-8-1',
      title: 'Soalan Struktur: Kebijaksanaan Raja dan Pembesar Mempertahankan Kedaulatan',
      difficulty: 'medium',
      learningStandardCode: '8.2.2',
      marks: 6,
      context: 'Pemerintah tempatan telah menunjukkan kebijaksanaan berdiplomasi dan berpandangan jauh dalam menangani cabaran penjajahan Barat.',
      questions: [
        {
          subQuestionNumber: '(a)',
          prompt: 'Nyatakan dua sumbangan Dato\' Jaafar bin Haji Muhammad semasa berkhidmat sebagai Menteri Besar Johor.',
          marks: 2,
          scoringGuide: [
            '1m untuk mewajibkan penggunaan bahasa Melayu dan tulisan Jawi dalam semua urusan rasmi kerajaan',
            '1m untuk mewajibkan pegawai British memakai pakaian rasmi seragam kerajaan Johor'
          ],
          modelAnswer: 'Dua sumbangan beliau ialah mewajibkan penggunaan bahasa Melayu dan tulisan Jawi dalam semua surat-menyurat rasmi kerajaan negeri, serta mewajibkan semua pegawai British yang berkhidmat di Johor memakai pakaian seragam rasmi kerajaan Johor.'
        },
        {
          subQuestionNumber: '(b)',
          prompt: 'Jelaskan mengapakah penggubalan Undang-Undang Tubuh Kerajaan Johor 1895 sangat penting dalam mempertahankan kedaulatan negeri.',
          marks: 4,
          scoringGuide: [
            'Fakta 1: Mengandungi fasal larangan keras kepada Sultan dan pembesar daripada menyerahkan mana-mana bahagian negeri kepada kuasa asing [2m]',
            'Fakta 2: Menjadi asas perlembagaan moden yang membuktikan Johor mempunyai sistem pentadbiran bertulis yang matang dan berdaulat [2m]'
          ],
          modelAnswer: 'Penggubalan Undang-Undang Tubuh Kerajaan Johor 1895 amat penting kerana ia mengandungi peruntukan larangan mutlak yang menghalang Sultan dan Jemaah Menteri daripada menyerahkan walaupun seinci tanah atau kedaulatan Johor kepada kuasa luar. Selain itu, perlembagaan ini membuktikan bahawa Johor memiliki sistem pentadbiran dan birokrasi moden berasaskan undang-undang yang berdaulat, sekali gus menyukarkan British mencari alasan untuk campur tangan secara terbuka.'
        }
      ],
      fullWorking: [
        'Langkah 1: Kenal pasti sumbangan ikonik Dato Jaafar (Bahasa Melayu & Pakaian Rasmi Johor).',
        'Langkah 2: Huraikan fungsi fasal larangan serah tanah dalam Perlembagaan Johor 1895.',
        'Langkah 3: Tulis jawapan secara terperinci.'
      ],
      scientificReasoning: 'Kebijaksanaan berpelembagaan dan diplomasi membuktikan kedaulatan sesebuah negara boleh dipertahankan melalui kekuatan intelek dan perundangan strategik.'
    }
  ],
  mindmap: {
    title: 'Peta Minda Bab 8: Kebijaksanaan Raja & Pembesar',
    nodes: [
      {
        id: '8',
        label: 'Kebijaksanaan Raja & Pembesar',
        children: [
          {
            id: '8.1',
            label: 'Bantahan & Diplomasi',
            children: [
              { id: '8.1.1', label: 'Bantahan Perjanjian Bangkok 1909 (Kedah & Terengganu)' },
              { id: '8.1.2', label: 'Tuntutan Sultan Idris di Durbar 1903' },
              { id: '8.1.3', label: 'Penubuhan MCKK (1905) untuk Pegawai Melayu' }
            ]
          },
          {
            id: '8.2',
            label: 'Perlembagaan Bertulis',
            children: [
              { id: '8.2.1', label: 'Undang-Undang Tubuh Johor 1895 (Sultan Abu Bakar)' },
              { id: '8.2.2', label: 'Undang-Undang Bagi Diri Terengganu 1911 (Itqan al-Muluk)' },
              { id: '8.2.3', label: 'Fasal Larangan Serah Negeri kepada Penjajah' }
            ]
          },
          {
            id: '8.3',
            label: 'Pemodenan oleh Pembesar',
            children: [
              { id: '8.3.1', label: 'Wan Muhammad Saman: Terusan Pertanian Kedah' },
              { id: '8.3.2', label: 'Dato Jaafar & Abdul Rahman Andak (Johor)' },
              { id: '8.3.3', label: 'Mohd Salleh Perang (Peta Johor) & Ngah Ibrahim (Larut)' }
            ]
          }
        ]
      }
    ]
  },
  answeringTechniques: [
    {
      title: 'Teknik Menjawab Soalan Kepimpinan & Keberkesanan Diplomasi',
      description: 'Panduan merumus kejayaan raja dan pembesar mempertahankan maruah bangsa.',
      steps: [
        '1. Nyatakan strategi perundangan bertulis (Undang-Undang Tubuh).',
        '2. Terangkan usaha pemodenan infrastruktur dan ekonomi tanpa bergantung kepada penjajah.',
        '3. Buat rumusan bagaimana tindakan tersebut menjadi warisan kedaulatan negara hari ini.'
      ],
      sampleQuestion: 'Apakah iktibar terpenting daripada kebijaksanaan pembesar-pembesar Melayu terdahulu?',
      sampleAnswer: 'Iktibar terpenting ialah kita mestilah menguasai ilmu pengetahuan, kepakaran teknologi, dan kemahiran berdiplomasi untuk memajukan negara secara berdikari. Di samping itu, kita perlu mempunyai integriti yang tinggi dan meletakkan kepentingan kedaulatan tanah air melebihi kepentingan peribadi demi memelihara maruah bangsa.'
    }
  ]
};
