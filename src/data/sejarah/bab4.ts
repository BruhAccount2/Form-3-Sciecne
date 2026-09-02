import { Chapter } from '../../types';
import { sejarahLearningStandards } from '../learningStandards';

export const bab4: Chapter = {
  id: 'sejarah-ch4',
  subject: 'sejarah',
  chapterNumber: 4,
  title: 'Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
  theme: 'Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
  summary: 'Menganalisis strategi peluasan kuasa British di Perlis, Kedah, Kelantan dan Terengganu menerusi Perjanjian Bangkok 1909, pemodenan dan penyerapan Johor ke dalam naungan British pada 1914, serta ciri-ciri sistem pentadbiran Negeri-negeri Melayu Tidak Bersekutu (NNMTB) yang mengekalkan autonomi tradisi.',
  learningStandards: sejarahLearningStandards['sejarah-ch4'],
  notes: [
    {
      title: '4.1 Peluasan Kuasa British di Perlis, Kedah, Kelantan dan Terengganu',
      content: `
### Hubungan Negeri-negeri Melayu Utara dengan Siam
Sebelum campur tangan British, Perlis, Kedah, Kelantan dan Terengganu mempunyai hubungan diplomatik dengan Siam:
* **Penghantaran Bunga Emas dan Bunga Perak (Gold & Silver Flowers):** Dihantar setiap tiga tahun sekali ke Bangkok sebagai tanda persahabatan, keamanan, dan perlindungan daripada ancaman luar, dan bukannya tanda penyerahan kedaulatan mutlak kepada Siam.

> **English explanation:** Northern Malay states sent triennial Bunga Emas tributes to Siam as a token of friendship and non-aggression, which British imperialists later claimed as proof of Siamese suzerainty.

---

### Faktor Peluasan Kuasa British di Negeri-negeri Melayu Utara
1. **Membendung Ancaman Kuasa Barat Lain (Containment of European Rivals):**
   * Perancis berhasrat membina terusan di Segenting Kra yang akan menjejaskan kedudukan pelabuhan Singapura.
   * Jerman berusaha mendapatkan Pulau Langkawi daripada Kedah.
   * Rusia berhasrat membuka pangkalan arang batu di Ujung Salang (Phuket).
   * Amerika Syarikat ingin bertapak di Terengganu.
2. **Menghubungkan Wilayah Jajahan British:** Membina laluan jalan raya dan landasan keretapi yang menghubungkan Burma (jajahan British) dengan Tanah Melayu.
3. **Kekayaan Hasil Pertanian dan Perlombongan:** Kedah dan Perlis kaya dengan hasil pertanian padi (Jelapang Padi), manakala Kelantan dan Terengganu kaya dengan bijih timah, emas, dan hasil laut.

---

### Garis Masa Perjanjian ke Arah Perjanjian Bangkok 1909
* **Perjanjian Sulit 1897:** British dan Siam bersetuju menghalang kuasa Barat lain daripada bertapak di selatan Siam.
* **Perjanjian Sempadan 1899:** Menetapkan sempadan antara Perak dengan Reman (Siam).
* **Perjanjian 1902:** Siam melantik penasihat berbangsa British di Kelantan (W.A. Graham) dan Terengganu (H.C. Belfield).
* **Perjanjian Bangkok 1909 (9 Mac 1909):**
  * Ditandatangani antara **Ralph Paget** (wakil British) dengan **Putera Devawongse Varoprakar** (Menteri Luar Siam).
  * **Kesan Utama:** Siam menyerahkan segala hak kedaulatan, perlindungan, dan pentadbiran ke atas **Perlis, Kedah, Kelantan, dan Terengganu** kepada British.
  * **Protes Sultan Melayu:** Sultan keempat-empat negeri tidak dirundingi atau dijemput hadir semasa rundingan perjanjian ini, menyebabkan Raja dan Sultan Melayu memprotes tindakan Siam dan British yang melanggar kedaulatan negeri mereka.

---

### Pelantikan Penasihat British di Negeri Utara
* **Perlis:** Meadows Frost (1909)
* **Kedah:** George Maxwell (1909)
* **Kelantan:** J.S. Mason (1910)
* **Terengganu:** W.L. Conlay (1919) (pada mulanya hanya menerima Wakil British dengan kuasa terhad).

---

<div class="p-4 my-4 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-800 text-amber-900 dark:text-amber-200">
  <strong class="block text-base mb-1">⭐ Wajib Ingat: Perjanjian Bangkok 1909</strong>
  <p class="text-sm">
    Ditandatangani pada <strong>9 Mac 1909</strong>. Memindahkan naungan 4 negeri Melayu utara (Perlis, Kedah, Kelantan, Terengganu) daripada Siam kepada British.
  </p>
</div>
      `,
      definitions: [
        { term: 'Perjanjian Bangkok 1909', definition: 'Perjanjian antara British dengan Siam yang memindahkan kedaulatan Perlis, Kedah, Kelantan dan Terengganu kepada pihak British tanpa rundingan dengan Raja-raja Melayu.' },
        { term: 'Bunga Emas dan Bunga Perak', definition: 'Ufti tradisional lambang persahabatan dan perdamaian yang dihantar oleh pemerintah negeri Melayu utara ke Bangkok setiap 3 tahun.' },
        { term: 'Segenting Kra', definition: 'Jalur tanah sempit di selatan Thailand yang dicadangkan oleh kuasa Perancis untuk dibina terusan kapal antarabangsa.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-4-1',
          type: 'quiz',
          title: 'Uji Minda 4.1: Perjanjian Bangkok 1909',
          prompt: 'Mengapakah Raja-raja Melayu di Perlis, Kedah, Kelantan dan Terengganu memprotes Perjanjian Bangkok 1909?',
          options: [
            {
              text: 'Perjanjian ditandatangani tanpa pengetahuan, persetujuan atau kehadiran pemerintah negeri Melayu terbabit.',
              isCorrect: true,
              explanation: 'Perjanjian Bangkok 1909 dirangka secara rahsia antara British dan Siam tanpa berunding atau meminta persetujuan Raja-raja Melayu, sekali gus mencabuli kedaulatan mereka.'
            },
            {
              text: 'British enggan membayar elaun pencen bulanan kepada kerabat diraja.',
              isCorrect: false,
              explanation: 'Isu utama adalah pelanggaran kedaulatan wilayah, bukan pencen.'
            },
            {
              text: 'Siam menuntut bayaran ufti emas sepuluh kali ganda lebih tinggi.',
              isCorrect: false,
              explanation: 'Perjanjian Bangkok menamatkan penghantaran ufti bunga emas ke Siam.'
            },
            {
              text: 'Perjanjian tersebut memaksa negeri utara bergabung dengan Negeri-negeri Selat.',
              isCorrect: false,
              explanation: 'Negeri utara tidak digabungkan dengan NNS, sebaliknya menjadi sebahagian daripada NNMTB.'
            }
          ]
        }
      ]
    },
    {
      title: '4.2 Peluasan Kuasa British di Johor & 4.3 Pentadbiran NNMTB',
      content: `
### Peluasan Kuasa British di Negeri Johor (1885 - 1914)
Johor berjaya mengekalkan kedaulatannya lebih lama berbanding negeri-negeri Melayu lain melalui kebijaksanaan pemerintahannya.

> **English explanation:** Johor maintained independence longer than other Malay states through modern statecraft under Sultan Abu Bakar before succumbing to British advisor pressure in 1914.

* **Faktor Kemajuan dan Kemerdekaan Johor:**
  1. **Sistem Kangcu (River Document System):** Dimulakan oleh Temenggung Daeng Ibrahim. Menggalakkan kemasukan pelombong dan petani Cina menanam lada hitam dan gambir melalui *Surat Sungai*.
  2. **Pemodenan oleh Sultan Abu Bakar (Bapa Pemodenan Johor):**
     * Memodenkan pentadbiran berasaskan model birokrasi Barat, mahkamah, polis, dan perkhidmatan pos.
     * Menggubal **Undang-Undang Tubuh Kerajaan Johor 1895** yang menegaskan bahawa Sultan dan pembesar tidak boleh menyerahkan walau seinci pun tanah negeri kepada kuasa asing.
     * Menjalin hubungan persahabatan antarabangsa dengan Ratu Victoria di London.
* **Strategi British Menguasai Johor:**
  * **Perjanjian 1885:** Menubuhkan pejabat Konsul British dan mengiktiraf gelaran Maharaja/Sultan Abu Bakar.
  * **Krisis Lembaga Penasihat Johor:** British memanipulasi kelemahan kewangan dalam pembinaan landasan keretapi Johor.
  * **Perjanjian 1914:** Semasa pemerintahan Sultan Ibrahim, British memaksa baginda menandatangani perjanjian melantik **Douglas Campbell** sebagai *Penasihat Am British* (General Adviser) pertama di Johor.

---

### Ciri-ciri Pentadbiran Negeri-negeri Melayu Tidak Bersekutu (NNMTB)
NNMTB merangkumi lima buah negeri: **Perlis, Kedah, Kelantan, Terengganu, dan Johor**.

| Aspek | Ciri-ciri Utama Pentadbiran NNMTB |
| :--- | :--- |
| **Bentuk Pentadbiran** | Bersifat **tidak bersekutu (longgar)**; setiap negeri ditadbir secara berasingan tanpa kerajaan pusat persekutuan tunggal. |
| **Kedudukan Sultan** | Sultan mengekalkan kuasa eksekutif dan autonomi yang lebih besar berbanding Sultan di NNMB. |
| **Peranan Penasihat British** | Bertindak sebagai *penasihat* dan kuasanya terhad kepada bidang tertentu; tidak mengambil alih pentadbiran harian secara mutlak. |
| **Bahasa & Tulisan Rasmi** | **Bahasa Melayu** dan **tulisan Jawi** kekal sebagai bahasa rasmi urusan surat-menyurat dan dokumen kerajaan. |
| **Birokrasi & Pegawai Awam** | Jawatan-jawatan penting pentadbiran kerajaan negeri disandang oleh **pegawai Melayu tempatan**, bukannya pegawai British. |
| **Hari Cuti Mingguan** | Hari **Jumaat** ditetapkan sebagai hari cuti rasmi mingguan (mengikut syariat Islam). |

---

<div class="p-4 my-4 rounded-xl border border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
  <strong class="block text-base mb-1">⭐ Perbezaan Utama NNMB vs NNMTB</strong>
  <p class="text-sm">
    <strong>NNMB (4 Negeri):</strong> Ditadbir oleh <em>Residen</em>, berpusat di Kuala Lumpur (Residen Jeneral), bahasa Inggeris, pegawai British dominan.<br/>
    <strong>NNMTB (5 Negeri):</strong> Ditadbir oleh <em>Penasihat</em>, autonomi negeri kekal, bahasa Melayu & Jawi rasmi, pegawai Melayu dominan.
  </p>
</div>
      `,
      definitions: [
        { term: 'Negeri-negeri Melayu Tidak Bersekutu (NNMTB)', definition: 'Gabungan lima negeri Melayu (Perlis, Kedah, Kelantan, Terengganu, Johor) yang menerima Penasihat British secara individu tanpa penyatuan persekutuan.' },
        { term: 'Sistem Kangcu (Kangchu System)', definition: 'Sistem pajakan tanah pertanian lada hitam dan gambir kepada pengusaha Cina di sepanjang tebing sungai di Johor.' },
        { term: 'Undang-Undang Tubuh Kerajaan Johor 1895', definition: 'Perlembagaan bertulis pertama di Tanah Melayu yang digubal oleh Sultan Abu Bakar untuk melindungi kedaulatan negeri.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-4-2',
          type: 'quiz',
          title: 'Uji Minda 4.2: Ciri Pentadbiran NNMTB',
          prompt: 'Apakah keistimewaan pentadbiran Negeri-negeri Melayu Tidak Bersekutu (NNMTB) berbanding Negeri-negeri Melayu Bersekutu (NNMB)?',
          options: [
            {
              text: 'Bahasa Melayu dan tulisan Jawi kekal sebagai bahasa rasmi urusan kerajaan serta pegawai Melayu mendominasi perkhidmatan awam.',
              isCorrect: true,
              explanation: 'Dalam NNMTB, bahasa Melayu dan tulisan Jawi kekal diutamakan dalam pentadbiran rasmi dan pegawai Melayu diberi keutamaan menyandang jawatan birokrasi kerajaan.'
            },
            {
              text: 'Semua negeri NNMTB diperintah secara langsung oleh Gabenor NNS di Singapura.',
              isCorrect: false,
              explanation: 'NNMTB tidak ditadbir secara langsung oleh Gabenor Singapura.'
            },
            {
              text: 'Sultan di negeri NNMTB tidak dibenarkan mencampuri sebarang urusan agama Islam.',
              isCorrect: false,
              explanation: 'Sultan kekal sebagai ketua agama Islam dan mempunyai kuasa pentadbiran yang lebih luas.'
            },
            {
              text: 'Negeri NNMTB menggantikan mata wang tempatan dengan mata wang rupee India.',
              isCorrect: false,
              explanation: 'Mata wang rupee tidak dipaksakan di NNMTB.'
            }
          ]
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sej-ex-4-1',
      number: 1,
      difficulty: 'Intermediate',
      learningStandardCode: '7.4.1',
      marks: 6,
      question: 'Perjanjian Bangkok 1909 telah mengubah kedudukan geopolitik di bahagian utara Semenanjung Tanah Melayu. (a) Namakan dua buah negeri Melayu yang diserahkan oleh Siam kepada British melalui Perjanjian Bangkok 1909 [2 markah]. (b) Terangkan mengapa British berminat untuk menguasai negeri-negeri Melayu utara tersebut [4 markah].',
      subQuestions: [
        { label: '(a)', question: 'Namakan dua buah negeri Melayu yang diserahkan oleh Siam kepada British melalui Perjanjian Bangkok 1909.', marks: 2 },
        { label: '(b)', question: 'Terangkan mengapa British berminat untuk menguasai negeri-negeri Melayu utara tersebut.', marks: 4 }
      ],
      hints: [
        '4 Negeri Melayu Utara: Perlis, Kedah, Kelantan, Terengganu.',
        'Faktor: Menyekat kuasa Barat lain (Perancis, Jerman) dan menyambung laluan keretapi Burma-Tanah Melayu.'
      ],
      answer: {
        finalAnswer: '(a) Dua buah negeri: Kedah dan Kelantan (atau Perlis / Terengganu).\n(b) Faktor 1: Menyekat kemaraan kuasa Barat lain (Perancis di Segenting Kra dan Jerman di Langkawi).\nFaktor 2: Menghubungkan laluan perhubungan darat dan kereta api antara Burma (jajahan British) dengan Tanah Melayu.',
        fullWorking: [
          'Bahagian (a): 1m untuk setiap negeri yang betul (Jumlah: 2 markah).',
          'Bahagian (b): Fakta 1: Persaingan kuasa Barat lain [2m].',
          'Bahagian (b): Fakta 2: Kesinambungan laluan perdagangan dan keselamatan Burma-Tanah Melayu [2m].'
        ],
        scientificReasoning: 'Perjanjian Bangkok 1909 menjadi garisan pemisah muktamad sempadan antarabangsa antara Malaysia dan Thailand.'
      }
    }
  ],
  mindmap: {
    id: 'sej-m4',
    title: 'Bab 4: Pentadbiran NNMTB',
    children: [
      {
        id: 'sej-m4-1',
        title: 'Negeri Melayu Utara & Perjanjian Bangkok 1909',
        children: [
          { id: 'sej-m4-1a', title: 'Hubungan Tradisi Bunga Emas ke Siam' },
          { id: 'sej-m4-1b', title: 'Perjanjian Bangkok 1909 (Siam serah 4 negeri)' },
          { id: 'sej-m4-1c', title: 'Bantahan Raja-raja Melayu (Kedaulatan Dicabuli)' }
        ]
      },
      {
        id: 'sej-m4-2',
        title: 'Pemodenan & Naungan Negeri Johor',
        children: [
          { id: 'sej-m4-2a', title: 'Sistem Kangcu (Lada Hitam & Gambir)' },
          { id: 'sej-m4-2b', title: 'Sultan Abu Bakar & Undang-Undang Tubuh Kerajaan Johor 1895' },
          { id: 'sej-m4-2c', title: 'Penasihat Am British Douglas Campbell (1914)' }
        ]
      },
      {
        id: 'sej-m4-3',
        title: 'Ciri-ciri Pentadbiran NNMTB',
        children: [
          { id: 'sej-m4-3a', title: 'Pentadbiran Bebas & Autonomi Longgar (5 Negeri)' },
          { id: 'sej-m4-3b', title: 'Bahasa Melayu & Tulisan Jawi Rasmi' },
          { id: 'sej-m4-3c', title: 'Pegawai Melayu Dominan & Hari Cuti Jumaat' }
        ]
      }
    ]
  },
  answeringTechniques: [
    {
      category: 'Teknik Perbandingan Sistem Pentadbiran Kolonial',
      title: 'Teknik Menjawab Perbezaan Antara Sistem Residen (NNMB) dan Sistem Penasihat (NNMTB)',
      keyQuestionTypes: [
        'Soalan perbandingan kuasa Residen (NNMB) vs Penasihat (NNMTB)',
        'Soalan peranan bahasa Melayu dan birokrasi pentadbiran negeri',
        'Soalan implikasi Perjanjian Bangkok 1909 dan penentangan raja Melayu'
      ],
      essentialKeywords: [
        'Kuasa eksekutif mutlak vs Kuasa penasihat terhad',
        'Pemusatan kuasa di Kuala Lumpur vs Autonomi pentadbiran setiap negeri',
        'Bahasa Melayu & tulisan Jawi rasmi dalam NNMTB',
        'Undang-Undang Tubuh Kerajaan Johor 1895 (Sultan Abu Bakar)',
        'Perjanjian Bangkok 1909 tanpa persetujuan Sultan'
      ],
      stepByStepStrategy: [
        'Langkah 1: Bina kerangka perbandingan mental mengikut dimensi: Bentuk pentadbiran, Kuasa Raja, Bahasa rasmi, dan Pegawai tadbir.',
        'Langkah 2: Gunakan penanda wacana perbandingan yang jelas (seperti manakala, berbeza dengan, sebaliknya).',
        'Langkah 3: Berikan contoh negeri yang tepat bagi kedua-dua kelompok (NNMB: Perak, Selangor, dsb.; NNMTB: Johor, Kedah, dsb.).',
        'Langkah 4: Rumuskan hikmah kebijaksanaan pemimpin Melayu mempertahankan autonomi negeri.'
      ],
      commonErrorsToAvoid: [
        'Menganggap NNMTB mempunyai seorang Penasihat Jeneral pusat (setiap negeri mempunyai Penasihat British berasingan).',
        'Menyatakan bahasa Inggeris sebagai bahasa rasmi pentadbiran NNMTB (Bahasa Melayu dan tulisan Jawi yang menjadi bahasa rasmi).',
        'Tertukar antara Sultan Abu Bakar (Johor) dengan Raja Abdullah (Perak).'
      ]
    }
  ]
};
