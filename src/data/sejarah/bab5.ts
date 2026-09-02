import { Chapter } from '../../types';
import { sejarahLearningStandards } from '../learningStandards';

export const bab5: Chapter = {
  id: 'sejarah-ch5',
  subject: 'sejarah',
  chapterNumber: 5,
  title: 'Pentadbiran Barat di Sarawak dan Sabah',
  theme: 'Pentadbiran Barat di Sarawak dan Sabah',
  summary: 'Menerangkan sistem pemerintahan tradisi di Sarawak dan Sabah, kronologi peluasan kuasa Dinasti Brooke di Sarawak melalui strategi ugutan dan perjanjian, penguasaan Syarikat Borneo Utara British (SBUB) di Sabah menerusi pajakan dan Piagam Diraja 1881, serta struktur birokrasi pentadbiran Barat di kedua-dua negeri.',
  learningStandards: sejarahLearningStandards['sejarah-ch5'],
  notes: [
    {
      title: '5.1 Latar Belakang Pemerintahan Tempatan di Sarawak dan Sabah',
      content: `
### Sistem Pemerintahan Tradisional di Sarawak dan Sabah

> **English explanation:** Before Western intrusion, Sarawak and Sabah practiced tribal/indigenous governance (Sistem Kesukuan), Independent Chief systems, and regional suzerainty under the Brunei and Sulu Sultanates.

---

### 1. Sistem Kesukuan (Tribal / Indigenous System)
* **Sarawak:**
  * Diamalkan oleh masyarakat Iban, Bidayuh, Kenyah, Kayan, Kelabit, dan Melanau di kawasan pedalaman dan lembah sungai.
  * Pemimpin utama: **Tuai Rumah** (bagi masyarakat Iban), *Tua Kampong*, atau *Kelunan Maren*.
  * Pegangan utama adalah pematuhan kepada adat (*Adat Iban*) dan penyelesaian masalah secara muafakat di rumah panjang.
* **Sabah:**
  * Diamalkan oleh masyarakat Kadazandusun, Murut, Bajau, dan Rungus.
  * Pemimpin utama: **Orang Tua** atau *Majlis Kampung*.
  * Masyarakat Murut melantik *Babalian* (ketua adat dan upacara keagamaan/penyembuhan).

---

### 2. Sistem Ketua Bebas (Independent Chiefs in Sabah)
* Muncul di kawasan muara sungai di persisiran pantai Sabah yang tidak dikawal ketat oleh Kesultanan Brunei atau Sulu.
* Pemimpin berwibawa mentadbir kawasan sendiri dengan keberanian dan pengaruh peribadi.
* Contoh Tokoh Ketua Bebas:
  * **Syarif Osman:** Menguasai kawasan **Teluk Marudu**.
  * **Datu Mat Salleh:** Menguasai kawasan Sungai Sugut, Tambunan, dan **Inanam**.

---

### 3. Sistem Kesultanan (Sultanate Governance)
* **Sarawak:**
  * Ditadbir oleh Kesultanan Brunei di kawasan persisiran pantai melalui pembesar tempatan yang bergelar **Datu Patinggi, Datu Bandar, dan Datu Temenggong**.
* **Sabah:**
  * Kawasan pantai barat dikuasai oleh **Kesultanan Brunei**, manakala pantai timur dikuasai oleh **Kesultanan Sulu**.
  * Wakil Sultan dilantik memungut cukai dan menjaga keamanan.

---

<div class="p-4 my-4 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-800 text-amber-900 dark:text-amber-200">
  <strong class="block text-base mb-1">⭐ Tiga Sistem Pemerintahan Tradisi Sabah & Sarawak</strong>
  <ul class="list-disc list-inside space-y-1 text-sm">
    <li><strong>Sistem Kesukuan:</strong> Berasaskan adat dan dipimpin oleh Tuai Rumah / Orang Tua.</li>
    <li><strong>Sistem Ketua Bebas:</strong> Diterajui tokoh berpengaruh seperti Syarif Osman dan Mat Salleh.</li>
    <li><strong>Sistem Kesultanan:</strong> Pengaruh Kesultanan Brunei dan Kesultanan Sulu.</li>
  </ul>
</div>
      `,
      definitions: [
        { term: 'Tuai Rumah', definition: 'Ketua rumah panjang masyarakat Iban di Sarawak yang bertanggungjawab menjaga keharmonian, adat, dan keselamatan anak buahnya.' },
        { term: 'Orang Tua', definition: 'Ketua kampung tradisi dalam masyarakat Kadazandusun dan Murut di Sabah.' },
        { term: 'Ketua Bebas (Independent Chief)', definition: 'Pemimpin tempatan di Sabah yang memerintah kawasan muara sungai secara berdikari tanpa tunduk kepada Kesultanan Brunei atau Sulu.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-5-1',
          type: 'mcq',
          title: 'Uji Minda 5.1: Pemerintahan Tradisi',
          prompt: 'Siapakah tokoh Ketua Bebas yang memerintah kawasan Teluk Marudu di Sabah sebelum campur tangan SBUB?',
          options: [
            'Syarif Osman',
            'James Brooke',
            'Datu Patinggi Ali',
            'Pengiran Indera Mahkota'
          ],
          correctIndex: 0,
          explanation: 'Syarif Osman merupakan Ketua Bebas yang berkuasa di Teluk Marudu yang mempertahankan kubunya daripada serangan tentera laut British.'
        }
      ]
    },
    {
      title: '5.2 Peluasan Kuasa Dinasti Brooke di Sarawak',
      content: `
### Kronologi Pertapakan dan Peluasan Kuasa Dinasti Brooke (1841 - 1941)

> **English explanation:** James Brooke and his successors (Charles Brooke and Charles Vyner Brooke) established the White Rajah dynasty in Sarawak through military intimidation, treaties, and continuous territorial expansion at the expense of Brunei.

---

### 1. James Brooke Menguasai Sarawak (1841 - 1868)
* **Krisis di Sarawak (1830-an):** Pengiran Indera Mahkota (wakil Sultan Brunei) mengenakan cukai yang tinggi dan menindas penduduk tempatan untuk menguasai perdagangan antimoni. Penduduk tempatan di bawah pimpinan **Datu Patinggi Ali** melancarkan penentangan.
* **Kedatangan James Brooke (1839):** James Brooke tiba di Kuching menaiki kapal perang *Royalist*. Pengiran Raja Muda Hashim meminta bantuan James Brooke untuk menumpaskan pemberontakan dengan janji menyerahkan pemerintahan Sarawak.
* **Ugutan Ketenteraan:** James Brooke berjaya menyelesaikan pertikaian, tetapi apabila Pengiran Raja Muda Hashim berlengah menunaikan janji, James Brooke menghalakan meriam kapal *Royalist* ke istana Kuching.
* **Perjanjian 1841 & 1842:**
  * James Brooke diisytiharkan sebagai **Rajah Sarawak** pertama yang memerintah kawasan dari Tanjung Datu ke Sungai Samarahan.
  * Sultan Brunei (Sultan Omar Ali Saifuddin II) mengiktiraf James Brooke pada 1842 dengan bayaran ufti tahunan.

---

### 2. Peluasan Wilayah oleh Dinasti Brooke
Dinasti Brooke meluaskan wilayah Sarawak secara berperingkat dengan membeli, memajak, atau menakluk wilayah Kesultanan Brunei:
* **1853 (James Brooke):** Menguasai kawasan Batang Lupar dan Saribas selepas menumpaskan penentangan Rentap.
* **1861 (James Brooke):** Menguasai kawasan Sungai Sadong, Batang Lupar, Saribas, dan Sungai Rejang (Oya, Mukah, Bintulu) daripada Sultan Brunei.
* **1883 (Charles Brooke):** Menguasai kawasan lembangan Sungai Baram.
* **1885 (Charles Brooke):** Memperoleh kawasan Trusan.
* **1890 (Charles Brooke):** Mengambil alih kawasan Limbang kerana penduduknya enggan lagi berada di bawah Brunei.
* **1905 (Charles Brooke):** Memperoleh Lawas.

---

### Tiga Generasi Raja Putih Sarawak (White Rajahs)
1. **James Brooke (1841 – 1868)**
2. **Charles Brooke (1868 – 1917)**
3. **Charles Vyner Brooke (1917 – 1946)**

---

<div class="p-4 my-4 rounded-xl border border-rose-300 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-800 text-rose-900 dark:text-rose-200">
  <strong class="block text-base mb-1">⭐ Wajib Ingat: Strategi Dinasti Brooke</strong>
  <p class="text-sm">
    Keluarga Brooke menggunakan gabungan <strong>ugutan meriam kapal perang</strong>, <strong>perjanjian pajakan/beli wilayah</strong>, dan <strong>memanipulasi persengketaan pembesar Brunei</strong> untuk meluaskan jajahan Sarawak.
  </p>
</div>
      `,
      definitions: [
        { term: 'Raja Putih (White Rajah)', definition: 'Gelaran bagi pemerintah Dinasti Brooke berbangsa Inggeris yang memerintah Sarawak dari 1841 hingga 1946.' },
        { term: 'Kapal Royalist', definition: 'Kapal perang milik James Brooke yang dilengkapi meriam yang digunakan untuk mengugut Pengiran Raja Muda Hashim di Kuching.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-5-2',
          type: 'mcq',
          title: 'Uji Minda 5.2: Dinasti Brooke',
          prompt: 'Apakah strategi yang digunakan oleh James Brooke apabila Pengiran Raja Muda Hashim berlengah menunaikan janji melantiknya sebagai pemerintah Sarawak?',
          options: [
            'Menghalakan meriam kapal perang Royalist ke istana Kuching sebagai ugutan ketenteraan.',
            'Membayar wang pampasan tunai sebanyak 50,000 paun sterling.',
            'Meminta bantuan tentera daripada kerajaan Belanda di Pontianak.',
            'Menyerahkan Kuching kepada pedagang persendirian Amerika Syarikat.'
          ],
          correctIndex: 0,
          explanation: 'James Brooke menggunakan kekuatan meriam kapal Royalist untuk memaksa Pengiran Raja Muda Hashim menandatangani perjanjian penyerahan Sarawak pada 1841.'
        }
      ]
    },
    {
      title: '5.3 Peluasan SBUB di Sabah & 5.4 Bentuk Pentadbiran Barat',
      content: `
### Peluasan Kuasa Syarikat Borneo Utara British (SBUB) di Sabah
Sabah (Borneo Utara) dikuasai oleh syarikat perdagangan berpiagam British melalui siri pajakan wilayah:

> **English explanation:** The British North Borneo Chartered Company (BNBCC / SBUB) acquired Sabah through territorial leases from Brunei and Sulu Sultans, backed by a Royal Charter granted in 1881.

---

### Kronologi Pertapakan SBUB di Sabah
1. **1865:** Konsul Amerika Syarikat di Brunei, **Claude Lee Moses**, menyewa Sabah daripada Sultan Brunei selama 10 tahun. Moses menjual haknya kepada *American Trading Company of Borneo* milik Joseph Torrey.
2. **1877 / 1878:** **Baron von Overbeck** (saudagar Austria) dan **Alfred Dent** (saudagar British) membeli hak konsesi daripada Torrey, kemudian menandatangani perjanjian pajakan baharu dengan:
   * **Sultan Brunei (Sultan Abdul Momin)** pada 1877 untuk pantai barat Sabah.
   * **Sultan Sulu (Sultan Jamalul Azam)** pada 1878 untuk pantai timur Sabah.
3. **1881 (Piagam Diraja British / Royal Charter):**
   * Alfred Dent menubuhkan *British North Borneo Provisional Association Ltd.* dan memohon Piagam Diraja daripada kerajaan British.
   * Piagam Diraja memberi kuasa pentadbiran dan monopoli ekonomi kepada **Syarikat Borneo Utara British (SBUB)**.
   * **William Hood Treacher** dilantik sebagai Gabenor SBUB pertama (1881).
   * Ibu negeri pertama SBUB ialah **Kudat** (1881), kemudian dipindahkan ke **Sandakan** (1884), dan kemudian ke **Jesselton** (Kota Kinabalu).

---

### Bentuk Pentadbiran Barat di Sarawak dan Sabah

| Aspek | Pentadbiran Dinasti Brooke (Sarawak) | Pentadbiran SBUB (Sabah) |
| :--- | :--- | :--- |
| **Ketua Tertinggi** | **Rajah Putih** (kuasa mutlak eksekutif & kehakiman). | **Gabenor** (bertanggungjawab kepada Lembaga Pengarah SBUB di London). |
| **Majlis Penasihat** | **Majlis Tertinggi** (pembesar Melayu & pegawai British) & **Majlis Negeri** (ditubuhkan 1867 di Marudi). | **Majlis Penasihat** (dibentuk 1883) & Majlis Perundangan (1912). |
| **Pembahagian Wilayah** | Dibahagikan kepada **5 Bahagian**, setiap bahagian diketuai **Residen Bahagian**. | Dibahagikan kepada **Keresidenan** (Pantai Barat, Sandakan, Tawau, Kudat, Pedalaman) diketuai **Residen**. |
| **Peringkat Tempatan** | **Pegawai Daerah** dibantu oleh Pembesar Tempatan Melayu (*Datu Patinggi, Datu Bandar*) dan *Tuai Rumah*. | **Pegawai Daerah** dibantu oleh **Ketua Anak Negeri** (*Native Chiefs* / Orang Kaya-Kaya) dan *Ketua Kampung*. |
| **Sistem Kehakiman** | Mahkamah Residen, Mahkamah Adat Melayu, Mahkamah Adat Dayak. | Mahkamah Majistret & **Mahkamah Anak Negeri** (*Native Court*) bagi undang-undang adat tempatan. |

---

<div class="p-4 my-4 rounded-xl border border-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200">
  <strong class="block text-base mb-1">⭐ Syarat Pemberian Piagam Diraja 1881 kepada SBUB</strong>
  <ul class="list-disc list-inside space-y-1 text-sm">
    <li>SBUB tidak boleh menyerahkan wilayah Sabah kepada kuasa lain tanpa kebenaran British.</li>
    <li>SBUB mesti menghormati dan memelihara adat resam dan agama penduduk tempatan.</li>
    <li>SBUB mesti melantik pentadbir berbangsa British yang diluluskan oleh kerajaan British.</li>
  </ul>
</div>
      `,
      definitions: [
        { term: 'Syarikat Borneo Utara British (SBUB)', definition: 'Syarikat perdagangan berpiagam British yang mentadbir Sabah dari tahun 1881 hingga 1946.' },
        { term: 'Piagam Diraja (Royal Charter)', definition: 'Surat kuasa rasmi yang dikeluarkan oleh Kerajaan Mahkota British yang memberi mandat sah memerintah wilayah kepada syarikat berpiagam.' },
        { term: 'Mahkamah Anak Negeri (Native Court)', definition: 'Mahkamah khas di Sabah yang membicarakan kesalahan berkaitan adat resam tempatan yang diadili oleh Ketua Anak Negeri.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-5-3',
          type: 'mcq',
          title: 'Uji Minda 5.3: Pentadbiran SBUB',
          prompt: 'Siapakah yang dilantik sebagai Gabenor pertama Syarikat Borneo Utara British (SBUB) di Sabah pada tahun 1881?',
          options: [
            'William Hood Treacher',
            'Alfred Dent',
            'Baron von Overbeck',
            'Charles Brooke'
          ],
          correctIndex: 0,
          explanation: 'William Hood Treacher dilantik sebagai Gabenor SBUB pertama di Sabah yang memulakan pentadbiran berpusat di Kudat.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sej-ex-5-1',
      title: 'Soalan Struktur: Pertapakan SBUB di Sabah',
      difficulty: 'medium',
      learningStandardCode: '7.5.3',
      marks: 6,
      context: 'Pemberian Piagam Diraja pada tahun 1881 telah mengukuhkan penguasaan SBUB ke atas wilayah Sabah.',
      questions: [
        {
          subQuestionNumber: '(a)',
          prompt: 'Namakan dua orang saudagar yang memajak wilayah Sabah daripada Sultan Brunei dan Sultan Sulu.',
          marks: 2,
          scoringGuide: [
            '1m untuk Baron von Overbeck',
            '1m untuk Alfred Dent'
          ],
          modelAnswer: 'Dua orang saudagar tersebut ialah Baron von Overbeck dan Alfred Dent.'
        },
        {
          subQuestionNumber: '(b)',
          prompt: 'Jelaskan dua syarat utama yang ditetapkan dalam Piagam Diraja 1881 kepada SBUB.',
          marks: 4,
          scoringGuide: [
            'Fakta 1: SBUB tidak boleh menyerahkan wilayah Sabah kepada mana-mana kuasa luar tanpa persetujuan British [2m]',
            'Fakta 2: SBUB wajib memelihara dan menghormati agama serta adat resam masyarakat tempatan [2m]'
          ],
          modelAnswer: 'Syarat pertama ialah SBUB dilarang sama sekali memindah milik atau menyerahkan wilayah Sabah kepada mana-mana kuasa asing tanpa kebenaran kerajaan British. Syarat kedua ialah SBUB mestilah menghormati serta memelihara adat resam dan kepercayaan agama penduduk peribumi Sabah.'
        }
      ],
      fullWorking: [
        'Langkah 1: Kenal pasti tokoh pengasas SBUB (Overbeck & Dent).',
        'Langkah 2: Nyatakan syarat-syarat dalam Piagam Diraja (Royal Charter).',
        'Langkah 3: Lengkapkan jawapan dengan ayat gramatis.'
      ],
      scientificReasoning: 'Piagam Diraja membolehkan British meluaskan pengaruh imperium di Borneo tanpa perlu menanggung kos kewangan pentadbiran secara langsung.'
    }
  ],
  mindmap: {
    title: 'Peta Minda Bab 5: Pentadbiran Barat di Sarawak & Sabah',
    nodes: [
      {
        id: '5',
        label: 'Sarawak & Sabah',
        children: [
          {
            id: '5.1',
            label: 'Pemerintahan Tradisi',
            children: [
              { id: '5.1.1', label: 'Sistem Kesukuan: Tuai Rumah & Orang Tua' },
              { id: '5.1.2', label: 'Ketua Bebas: Syarif Osman & Mat Salleh' },
              { id: '5.1.3', label: 'Kesultanan Brunei & Sulu' }
            ]
          },
          {
            id: '5.2',
            label: 'Dinasti Brooke di Sarawak',
            children: [
              { id: '5.2.1', label: 'James Brooke 1841 (Ugutan Kapal Royalist)' },
              { id: '5.2.2', label: 'Peluasan Wilayah: Batang Lupar, Rejang, Baram, Limbang' },
              { id: '5.2.3', label: 'Majlis Tertinggi & Majlis Negeri' }
            ]
          },
          {
            id: '5.3',
            label: 'SBUB di Sabah',
            children: [
              { id: '5.3.1', label: 'Pajakan Overbeck & Alfred Dent 1877/1878' },
              { id: '5.3.2', label: 'Piagam Diraja 1881 & Gabenor W.H. Treacher' },
              { id: '5.3.3', label: 'Ketua Anak Negeri & Mahkamah Adat' }
            ]
          }
        ]
      }
    ]
  },
  answeringTechniques: [
    {
      title: 'Teknik Menjawab Soalan Struktur Pentadbiran Tempatan vs Kolonial',
      description: 'Panduan menghuraikan bagaimana penjajah mengeksploitasi institusi ketua peribumi.',
      steps: [
        '1. Jelaskan peranan pemimpin peribumi (Tuai Rumah, Datu, Orang Kaya-Kaya).',
        '2. Terangkan bagaimana pentadbiran Barat memasukkan mereka ke dalam struktur birokrasi gaji.',
        '3. Huraikan tujuan penjajah: Mengurangkan kos dan meredakan pemberontakan tempatan.'
      ],
      sampleQuestion: 'Mengapakah Dinasti Brooke dan SBUB mengekalkan peranan pemimpin tempatan dalam pentadbiran mereka?',
      sampleAnswer: 'Dinasti Brooke dan SBUB mengekalkan pemimpin tempatan seperti Tuai Rumah dan Ketua Anak Negeri kerana pemimpin ini mempunyai pengaruh dan dihormati oleh masyarakat tempatan. Tindakan ini membolehkan penjajah menjimatkan kos pentadbiran dan melicinkan pungutan cukai tanpa mencetuskan penentangan besar-besaran daripada rakyat.'
    }
  ]
};
