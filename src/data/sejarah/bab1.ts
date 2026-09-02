import { Chapter } from '../../types';
import { sejarahLearningStandards } from '../learningStandards';

export const bab1: Chapter = {
  id: 'sejarah-ch1',
  subject: 'sejarah',
  chapterNumber: 1,
  title: 'Kedatangan Kuasa Barat',
  theme: 'Kedatangan Kuasa Barat',
  summary: 'Menerangkan kestabilan dan kemakmuran negara kita sebelum kedatangan penjajah, faktor-faktor penolak dan penarik kedatangan kuasa Barat pada abad ke-16, 17, 18, 19 dan 20, persaingan kuasa-kuasa imperialis Eropah, serta perbezaan strategi manipulasi, tipu helah, ugutan dan perjanjian yang digunakan untuk menguasai Alam Melayu.',
  learningStandards: sejarahLearningStandards['sejarah-ch1'],
  notes: [
    {
      title: '1.1 Kestabilan dan Kemakmuran Negara Kita',
      content: `
### Kestabilan Sistem Pemerintahan dan Pentadbiran
Negara kita telah mewarisi sistem pemerintahan beraja yang teratur dan sistematik sejak zaman Kesultanan Melayu Melaka.

> **English explanation:** Malaysia inherited a stable, sophisticated monarchical governance and administrative system dating back to the Malacca Sultanate.

#### 1. Sistem Pemerintahan Beraja (Monarchical Governance System)
* **Sultan / Raja:** Ketua tertinggi kerajaan, lambang kedaulatan, perpaduan, dan pelindung rakyat.
* **Pembesar (Chiefs):** Membantu mentadbir wilayah/daerah, memungut cukai, menjaga keselamatan, dan membekalkan tenaga tentera.
* **Penghulu / Penggawa:** Ketua pentadbir peringkat kampung (mukim) yang menjadi jambatan komunikasi antara rakyat dengan pembesar/sultan.

#### 2. Sistem Kesukuan di Sabah dan Sarawak
* **Sarawak:** Ditadbir melalui sistem kesukuan mengikut kaum (Iban, Bidayuh, Melanau, Orang Ulu) dipimpin oleh *Tuai Rumah* atau *Ketua Kampung*. Di persisiran pantai, terdapat pengaruh Kesultanan Brunei dan Kesultanan Sulu yang melantik *Datu*.
* **Sabah:** Mengamalkan sistem kesukuan yang dipimpin oleh *Orang Tua*, sistem ketua bebas, serta pengaruh Kesultanan Brunei dan Kesultanan Sulu.

---

### Sistem Perundangan Tradisional (Traditional Legal Systems)
Terdapat dua jenis undang-undang dalam masyarakat Melayu:
1. **Undang-undang Tidak Bertulis (Adat):**
   * **Adat Perpatih:** Diamalkan di Negeri Sembilan dan Naning. Bersifat *matrilineal* (nasab sebelah ibu), pemilihan pemimpin dibuat secara demokrasi dari bawah ke atas (Anak Buah → Buapak → Lembaga → Undang → Yang di-Pertuan Besar).
   * **Adat Temenggung:** Diamalkan di sebahagian besar negeri Melayu lain. Bersifat *patrilineal* (nasab sebelah bapa), kuasa mutlak di tangan Sultan.
2. **Undang-undang Bertulis:**
   * Contoh: *Hukum Kanun Melaka*, *Undang-Undang Laut Melaka*, *Hukum Kanun Pahang*, *Undang-Undang 99 Perak*.

> **English explanation:** Legal traditions included unwritten customary law (Adat Perpatih - matrilineal & democratic; Adat Temenggung - patrilineal) and codified written laws like Hukum Kanun Melaka.

---

### Kemakmuran Ekonomi & Kekayaan Hasil Bumi
Negara kita memiliki kekayaan hasil bumi yang melimpah-ruah, sistem perdagangan antarabangsa yang cekap, serta kraf tangan dan hasil hutan yang bernilai tinggi.
* **Hasil Galian (Minerals):** Bijih timah (Perak, Selangor, Sungai Ujong), emas (Pahang, Kelantan, Sarawak), antimoni dan perak.
* **Hasil Hutan & Laut (Forest & Marine Products):** Gaharu, damar, rotan, kayu cendana, sarang burung, mutiara, dan sirip ikan yu.
* **Sistem Ekonomi Teratur:** Mempunyai sistem timbang, sukat, dan ukur (*tahil, kati, pikul, koyan*), mata wang tempatan (mata wang emas, perak, timah seperti *pitis* dan *jongkong tampang*), serta sistem percukaian yang sistematik di pelabuhan.

---

### Pendidikan Tradisional dan Nilai Moral
1. **Pendidikan Tidak Formal:** Asuhan keluarga melalui cerita lisan, pantun, peribahasa, pantang larang, dan pembelajaran kemahiran praktikal (pertanian, pertukangan, anyaman).
2. **Pendidikan Formal:** Pembelajaran al-Quran, hadis, fekah, bahasa Arab, dan tulisan Jawi di istana, masjid, surau, pondok, dan madrasah.

---

<div class="p-4 my-4 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-800 text-amber-900 dark:text-amber-200">
  <strong class="block text-base mb-1">⭐ Wajib Ingat (Must Remember for Exams)</strong>
  <ul class="list-disc list-inside space-y-1 text-sm">
    <li><strong>Adat Perpatih:</strong> Matrilineal (jurang harta pusaka turun ke anak perempuan), musyawarah, demokrasi.</li>
    <li><strong>Adat Temenggung:</strong> Patrilineal (jurang harta pusaka turun ke anak lelaki), kuasa autokrasi berpusat pada raja.</li>
    <li><strong>Sistem Sukat/Timbang:</strong> 1 pikul = 100 kati, 1 kati = 16 tahil.</li>
  </ul>
</div>
      `,
      definitions: [
        { term: 'Kedaulatan (Sovereignty)', definition: 'Kuasa tertinggi sesebuah kerajaan yang bebas daripada pengaruh atau penjajahan kuasa luar. (Supreme independent authority of a state free from foreign rule).' },
        { term: 'Adat Perpatih (Matrilineal Custom)', definition: 'Sistem adat kemasyarakatan yang mementingkan jurai keturunan sebelah ibu dan amalan muafakat dalam kepimpinan.' },
        { term: 'Adat Temenggung (Patrilineal Custom)', definition: 'Sistem adat yang mengutamakan jurai keturunan sebelah bapa dan meletakkan kuasa pemerintahan pada Sultan.' },
        { term: 'Pitis / Jongkong Tampang', definition: 'Mata wang tradisional tempatan yang diperbuat daripada timah sebelum pengenalan mata wang kolonial.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-1-1',
          type: 'quiz',
          title: 'Uji Minda 1.1: Adat Perpatih & Adat Temenggung',
          prompt: 'Apakah ciri utama yang membezakan Adat Perpatih dengan Adat Temenggung di Tanah Melayu?',
          options: [
            {
              text: 'Adat Perpatih mengutamakan jurai keturunan sebelah ibu (matrilineal) manakala Adat Temenggung sebelah bapa (patrilineal).',
              isCorrect: true,
              explanation: 'Adat Perpatih bersifat matrilineal (nasab ibu) dan mengamalkan prinsip musyawarah demokratik, manakala Adat Temenggung bersifat patrilineal (nasab bapa).'
            },
            {
              text: 'Adat Perpatih mengutamakan kuasa mutlak Sultan tanpa pembesar daerah.',
              isCorrect: false,
              explanation: 'Adat Perpatih tidak mengamalkan kuasa mutlak Sultan melainkan musyawarah muafakat.'
            },
            {
              text: 'Adat Perpatih hanya diamalkan di Sarawak manakala Adat Temenggung di Sabah.',
              isCorrect: false,
              explanation: 'Adat Perpatih diamalkan di Negeri Sembilan & Naning.'
            },
            {
              text: 'Adat Perpatih menggunakan mata wang emas manakala Adat Temenggung sistem barter.',
              isCorrect: false,
              explanation: 'Kedua-dua sistem menggunakan mata wang tempatan seperti pitis dan jongkong tampang.'
            }
          ]
        }
      ]
    },
    {
      title: '1.2 Faktor Kedatangan Kuasa Barat ke Alam Melayu',
      content: `
Kedatangan kuasa Barat didorong oleh perkembangan garis masa dan revolusi di Eropah mengikut abad:

> **English explanation:** Western colonial expansion occurred across distinct chronological phases, driven by commercial trade, technological breakthroughs, and the Industrial Revolution.

---

### 1. Abad Ke-16 (16th Century): Era Penjelajahan Awal
* **Kuasa Utama:** Portugis (menawan Melaka 1511) dan Sepanyol.
* **Faktor Pendorong (3G):**
  * **Gold (Kekayaan):** Mendapatkan rempah-ratus (lada hitam, bunga cengkih, buah pala), sutera, porselin, dan emas secara langsung dari Timur.
  * **Glory (Kemegahan):** Menyaingi kuasa maritim lain dan membina empayar imperialis.
  * **Gospel (Keagamaan):** Menyebarkan agama Kristian dan menyekat pengaruh perdagangan Islam.
* **Pusat Pengumpulan Barangan:** Kuasa Barat memerlukan pelabuhan strategik untuk mengumpul barangan dagangan Timur untuk pasaran Eropah.

---

### 2. Abad Ke-17 dan Ke-18 (17th & 18th Century): Era Syarikat Perdagangan
* **Kuasa Utama:** Belanda (Syarikat Hindia Timur Belanda - VOC) dan British (Syarikat Hindia Timur Inggeris - SHTI).
* **Faktor Pendorong:**
  * **Revolusi Perindustrian Awal:** Perkembangan industri pembuatan tekstil dan barangan di Britain.
  * **Keperluan Barangan Dagangan Mewah:** Teh dari China, rempah dari Kepulauan Melayu, kain kapas dari India.
  * **Pangkalan Tentera Laut:** British memerlukan pangkalan laut selamat di Teluk Benggala untuk mempertahankan petempatan di India daripada ancaman Perancis semasa angin monsun.

---

### 3. Abad Ke-19 dan Ke-20 (19th & 20th Century): Era Imperialisme Baru
* **Faktor Pendorong:**
  1. **Revolusi Perindustrian Kedua:** Pertumbuhan kilang kereta dan industri tin di Eropah dan Amerika Syarikat mencipta permintaan besar-besaran untuk **getah asli** dan **bijih timah**.
  2. **Pembukaan Terusan Suez (1869):** Memendekkan jarak dan masa pelayaran antara Eropah (Laut Mediterranean) dengan Asia (Laut Merah dan Lautan Hindi) daripada beberapa bulan kepada beberapa minggu sahaja.
  3. **Penciptaan Kapal Wap (Steamship):** Membolehkan kapal belayar melawan arus dan angin monsun dengan membawa muatan kargo yang lebih besar, selamat, dan murah.
  4. **Penciptaan Telegraf:** Mempercepatkan arahan perdagangan dan arahan ketenteraan dari London/The Hague terus ke tanah jajahan di Asia Tenggara dalam masa beberapa jam.
  5. **Slogan Imperialisme Moral:**
     * British: *"Beban Orang Putih"* (White Man's Burden) — mendakwa kononnya mereka bertanggungjawab 'mentamadunkan' bangsa bukan Eropah.
     * Perancis: *"Tugas Menyebarkan Tamadun"* (Mission Civilisatrice).

---

<div class="p-4 my-4 rounded-xl border border-blue-300 bg-blue-50 dark:bg-blue-950/40 dark:border-blue-800 text-blue-900 dark:text-blue-200">
  <strong class="block text-base mb-1">⚠️ Jangan Keliru (Common Trap)</strong>
  <p class="text-sm">
    Jangan keliru antara faktor abad ke-16 (Rempah-ratus, 3G) dengan faktor abad ke-19 (Bijih timah, getah, Terusan Suez, kapal wap, telegraf, Beban Orang Putih). Soalan SPM/PT3 sering menguji perbezaan faktor mengikut garis masa abad!
  </p>
</div>
      `,
      definitions: [
        { term: 'Imperialisme (Imperialism)', definition: 'Dasar sesebuah negara meluaskan pengaruh dan wilayahnya dengan menjajah atau menguasai politik dan ekonomi negara lain.' },
        { term: 'Kolonialisme (Colonialism)', definition: 'Amalan menubuhkan petempatan dan menduduki wilayah asing serta mengeksploitasi sumber ekonominya secara langsung.' },
        { term: 'Beban Orang Putih (White Man\'s Burden)', definition: 'Slogan dan alasan moral British bahawa bangsa Barat bertanggungjawab memimpin dan mentamadunkan masyarakat Timur.' },
        { term: 'Terusan Suez (Suez Canal)', definition: 'Laluan air buatan manusia di Mesir yang dibuka pada 1869, menghubungkan Laut Mediterranean dengan Laut Merah.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-1-2',
          type: 'quiz',
          title: 'Uji Minda 1.2: Faktor Abad Ke-19',
          prompt: 'Apakah kesan pembukaan Terusan Suez pada tahun 1869 terhadap kedatangan kuasa Barat ke Tanah Melayu?',
          options: [
            {
              text: 'Memendekkan jarak perjalanan laut antara Eropah dengan Asia Tenggara dan merancakkan perdagangan.',
              isCorrect: true,
              explanation: 'Pembukaan Terusan Suez memendekkan jarak perjalanan laut secara drastik, memudahkan kapal wap membawa bahan mentah seperti bijih timah dan getah ke Eropah dengan pantas dan kos murah.'
            },
            {
              text: 'Menghapuskan sepenuhnya sistem pelabuhan entrepot di Melaka dan Pulau Pinang.',
              isCorrect: false,
              explanation: 'Pelabuhan Melaka dan Pulau Pinang tetap memainkan peranan penting.'
            },
            {
              text: 'Menamatkan persaingan antara British dengan Belanda di Kepulauan Melayu.',
              isCorrect: false,
              explanation: 'Persaingan British-Belanda diselesaikan melalui Perjanjian London 1824, bukan Terusan Suez.'
            },
            {
              text: 'Menghalang kemasukan kapal wap dari negara-negara Eropah.',
              isCorrect: false,
              explanation: 'Terusan Suez sebaliknya menggalakkan penggunaan kapal wap.'
            }
          ]
        }
      ]
    },
    {
      title: '1.3 Persaingan Kuasa Barat & 1.4 Strategi Kuasa Barat',
      content: `
### Persaingan Kuasa Barat di Alam Melayu (Rivalry of Western Powers)
Kuasa Barat bersaing sengit merebut kawasan strategik di Asia Tenggara:
* **British:** Berpusat di India, memperluas pengaruh di Tanah Melayu, Singapura, Sarawak, Sabah, dan Burma (Myanmar).
* **Belanda:** Mengukuhkan kuasa di Kepulauan Hindia Timur (Indonesia).
* **Perancis:** Menjajah Indochina (Vietnam, Laos, Kemboja) dan berhasrat membina terusan di Segenting Kra untuk menyekat laluan Singapura.
* **Sepanyol & Amerika Syarikat:** Menguasai Filipina.
* **Jerman:** Berusaha mendapatkan Pulau Langkawi dan petempatan di Borneo.
* **Rusia:** Berhasrat membuka pangkalan arang batu di Ujung Salang (Phuket).

> **English explanation:** Intense geopolitical competition unfolded between Britain, the Netherlands, France, Germany, Spain, and Russia for trade routes and resource-rich territories.

---

### Strategi Kuasa Barat Menguasai Negara Kita
British dan Belanda menggunakan pelbagai strategi halus dan keras untuk meluaskan kuasa:

| Strategi | Penerangan & Contoh Peristiwa |
| :--- | :--- |
| **1. Manipulasi (Manipulation)** | Mengambil kesempatan daripada konflik dalaman istana (perebutan takhta) dan perang saudara antara pembesar. Contoh: Campur tangan Francis Light di Kedah (1786), perebutan takhta Perak dalam Perjanjian Pangkor (1874), dan Perang Klang di Selangor (1874). |
| **2. Tipu Helah (Deception)** | Melakukan janji palsu atau tipu muslihat perjanjian. Contoh: Francis Light berjanji memberi bantuan ketenteraan kepada Sultan Kedah untuk mempertahankan Pulau Pinang daripada ancaman Siam, tetapi memungkiri janji apabila Siam menyerang. |
| **3. Paksaan & Ugutan (Coercion & Threats)** | Menggunakan kapal perang dan kekuatan tentera untuk mengugut pemerintah tempatan menandatangani perjanjian penyerahan kuasa. Contoh: James Brooke mengugut Pengiran Raja Muda Hashim dengan meriam kapal perang *Royalist* untuk melantiknya sebagai Gabenor Sarawak (1841); Ugutan British ke atas Sultan Selangor berikutan insiden rompakan kapal dagang berhampiran Kuala Langat (1874). |
| **4. Perjanjian (Treaties)** | Menandatangani perjanjian berat sebelah dengan sultan/raja tempatan untuk mengikat kedaulatan negeri. Contoh: Perjanjian London 1824, Perjanjian Pangkor 1874, Perjanjian Bangkok 1909. |
| **5. Pajakan (Leasing)** | Menyewa wilayah daripada sultan untuk tujuan monopoli perdagangan dan pentadbiran. Contoh: Pajakan Sabah oleh Baron von Overbeck dan Alfred Dent daripada Sultan Brunei dan Sultan Sulu (1877/1878). |
| **6. Serangan Fizikal (Direct Military Attack)** | Menyerang kubu pertahanan pemerintah tempatan menggunakan meriam dan tentera upahan. Contoh: British menyerang Kuala Kedah (1791), Naning (1831/1832), dan Pasir Salak (1875). |

---

<div class="p-4 my-4 rounded-xl border border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
  <strong class="block text-base mb-1">🧠 Cara Ingat Strategi British (Mnemonic)</strong>
  <p class="text-sm">
    Ingat akronim: <strong>M-T-U-P-S</strong> → <strong>M</strong>anipulasi, <strong>T</strong>ipu helah, <strong>U</strong>gutan/Paksaan, <strong>P</strong>erjanjian/Pajakan, <strong>S</strong>erangan fizikal!
  </p>
</div>
      `,
      definitions: [
        { term: 'Manipulasi (Manipulation)', definition: 'Tindakan mengatur sesuatu situasi atau campur tangan secara licik untuk mengambil kesempatan daripada persengketaan pihak lawan.' },
        { term: 'Pajakan (Lease / Concession)', definition: 'Pemberian hak menduduki atau mengusahakan sesuatu tanah/wilayah dalam tempoh masa tertentu dengan bayaran sewa tahunan.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-1-3',
          type: 'quiz',
          title: 'Uji Minda 1.3: Strategi Penjajahan',
          prompt: 'Apakah strategi yang digunakan oleh Francis Light untuk menduduki Pulau Pinang pada tahun 1786?',
          options: [
            {
              text: 'Tipu helah dengan menjanjikan bantuan pertahanan ketenteraan yang tidak pernah ditunaikan.',
              isCorrect: true,
              explanation: 'Francis Light menggunakan tipu helah dengan berjanji memberi bantuan ketenteraan SHTI bagi melindungi Kedah daripada ancaman Siam, tetapi kemudian enggan membantu apabila Kedah diserang.'
            },
            {
              text: 'Membeli Pulau Pinang dengan bayaran tunai 1 juta dolar Sepanyol.',
              isCorrect: false,
              explanation: 'British tidak membeli Pulau Pinang secara tunai 1 juta dolar.'
            },
            {
              text: 'Menyerang dan mengebom kubu pertahanan Sultan Kedah di Alor Setar.',
              isCorrect: false,
              explanation: 'Serangan ke atas kubu berlaku pada 1791 di Seberang Perai/Kuala Kedah setelah Sultan Abdullah cuba mengambil balik pulau.'
            },
            {
              text: 'Menghantar utusan rasmi dari Raja England untuk memeterai perkahwinan diraja.',
              isCorrect: false,
              explanation: 'Tiada perkahwinan diraja yang terlibat.'
            }
          ]
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sej-ex-1-1',
      number: 1,
      difficulty: 'Intermediate',
      learningStandardCode: '7.1.1',
      marks: 6,
      question: 'Masyarakat Melayu sebelum kedatangan kuasa Barat mempunyai sistem perundangan adat yang tersusun rapi. (a) Nyatakan dua jenis undang-undang adat yang diamalkan di Tanah Melayu [2 markah]. (b) Jelaskan dua perbezaan antara Adat Perpatih dengan Adat Temenggung [4 markah].',
      subQuestions: [
        { label: '(a)', question: 'Nyatakan dua jenis undang-undang adat yang diamalkan di Tanah Melayu.', marks: 2 },
        { label: '(b)', question: 'Jelaskan dua perbezaan antara Adat Perpatih dengan Adat Temenggung.', marks: 4 }
      ],
      hints: [
        'Ingat Adat Perpatih (Negeri Sembilan) dan Adat Temenggung (negeri-negeri Melayu lain).',
        'Bandingkan dari segi jurai keturunan (matrilineal vs patrilineal) dan kaedah pelantikan pemimpin.'
      ],
      answer: {
        finalAnswer: '(a) Dua sistem adat: Adat Perpatih dan Adat Temenggung.\n(b) Perbezaan 1: Adat Perpatih bersifat matrilineal (nasab ibu, pewarisan harta kepada anak perempuan) manakala Adat Temenggung bersifat patrilineal (nasab bapa).\nPerbezaan 2: Adat Perpatih mengamalkan musyawarah demokrasi dari bawah ke atas, manakala Adat Temenggung berpusat pada kuasa mutlak Sultan (autokrasi).',
        fullWorking: [
          'Bahagian (a): 1m untuk Adat Perpatih, 1m untuk Adat Temenggung (Jumlah: 2 markah).',
          'Bahagian (b): Fakta 1: Nasab keturunan & pewarisan harta (matrilineal vs patrilineal) [2m].',
          'Bahagian (b): Fakta 2: Struktur kepimpinan (musyawarah demokrasi vs autokrasi beraja) [2m].'
        ],
        scientificReasoning: 'Sistem perundangan adat membuktikan ketamadunan dan kestabilan sosio-politik masyarakat Melayu sebelum kedatangan British.'
      }
    },
    {
      id: 'sej-ex-1-2',
      number: 2,
      difficulty: 'HOTS',
      learningStandardCode: '7.1.2',
      marks: 8,
      question: 'Revolusi Perindustrian di Eropah pada abad ke-19 telah mengubah corak kedatangan kuasa Barat ke Tanah Melayu. Huraikan faktor-faktor yang mendorong kedatangan kuasa Barat ke negara kita pada abad ke-19 dan ke-20 [8 markah].',
      hints: [
        'Gunakan formula F-H-C-I: Nyatakan sekurang-kurangnya 4 fakta utama (Revolusi Industri ke-2, Terusan Suez, kapal wap, telegraf, slogan Beban Orang Putih).',
        'Jelaskan kesan setiap faktor terhadap permintaan bahan mentah seperti bijih timah dan getah.'
      ],
      answer: {
        finalAnswer: 'Faktor pendorong kedatangan kuasa Barat pada abad ke-19/20: 1. Revolusi Perindustrian Kedua mencipta permintaan tinggi bijih timah dan getah asli. 2. Pembukaan Terusan Suez (1869) memendekkan jarak pelayaran laut Eropah-Asia. 3. Penciptaan kapal wap membawa muatan lebih banyak tanpa bergantung monsun. 4. Telegraf mempercepat urusan pesanan dagang dan arahan ketenteraan. 5. Slogan Beban Orang Putih sebagai justifikasi moral.',
        fullWorking: [
          'Fakta 1: Revolusi Perindustrian Kedua perlukan bijih timah (pengetinan) & getah asli (tayar) [2m].',
          'Fakta 2: Pembukaan Terusan Suez 1869 memendekkan masa pelayaran [2m].',
          'Fakta 3: Kapal wap belayar pantas, muatan besar, tidak terjejas monsun [2m].',
          'Fakta 4: Telegraf mempercepat pesanan dagang & arahan London [1m].',
          'Fakta 5: Slogan "Beban Orang Putih" mewajarkan penjajahan secara moral [1m].'
        ],
        scientificReasoning: 'Inovasi teknologi pengangkutan dan komunikasi secara langsung mempercepat integrasi Tanah Melayu ke dalam rantaian pasaran imperialisme Barat.'
      }
    }
  ],
  mindmap: {
    id: 'sej-m1',
    title: 'Bab 1: Kedatangan Kuasa Barat',
    children: [
      {
        id: 'sej-m1-1',
        title: 'Kestabilan & Kemakmuran Tradisional',
        children: [
          { id: 'sej-m1-1a', title: 'Sistem Pemerintahan Beraja & Pembesar Empat Lipatan' },
          { id: 'sej-m1-1b', title: 'Undang-undang: Adat Perpatih (Matrilineal) & Adat Temenggung (Patrilineal)' },
          { id: 'sej-m1-1c', title: 'Hasil Bumi: Bijih Timah, Emas, Rempah, Damar, Sarang Burung' }
        ]
      },
      {
        id: 'sej-m1-2',
        title: 'Faktor Kedatangan Mengikut Garis Masa',
        children: [
          { id: 'sej-m1-2a', title: 'Abad 16: Rempah Ratus, Barangan Mewah & 3G (Gold, Glory, Gospel)' },
          { id: 'sej-m1-2b', title: 'Abad 17 & 18: Syarikat Perdagangan (VOC Belanda & SHTI British)' },
          { id: 'sej-m1-2c', title: 'Abad 19 & 20: Revolusi Industri, Terusan Suez (1869), Kapal Wap, Telegraf & Beban Orang Putih' }
        ]
      },
      {
        id: 'sej-m1-3',
        title: 'Strategi Penjajahan British & Belanda',
        children: [
          { id: 'sej-m1-3a', title: 'Manipulasi & Tipu Helah (Francis Light di Kedah 1786)' },
          { id: 'sej-m1-3b', title: 'Ugutan & Paksaan (James Brooke di Sarawak 1841)' },
          { id: 'sej-m1-3c', title: 'Perjanjian Berat Sebelah (Perjanjian London 1824, Pangkor 1874) & Pajakan Sabah' }
        ]
      }
    ]
  },
  answeringTechniques: [
    {
      category: 'Teknik Esei & Struktur',
      title: 'Teknik Menjawab Format Sejarah KSSM (Fakta + Huraian + Contoh + Inferens / F-H-C-I)',
      keyQuestionTypes: [
        'Soalan faktor pendorong kedatangan kuasa Barat mengikut abad',
        'Soalan perbezaan sistem pentadbiran dan adat tradisional',
        'Soalan analisis strategi manipulasi dan tipu helah British'
      ],
      essentialKeywords: [
        'Adat Perpatih (matrilineal) vs Adat Temenggung (patrilineal)',
        'Revolusi Perindustrian Kedua & industri pengetinan makanan',
        'Terusan Suez 1869 & kapal wap',
        'Manipulasi politik takhta & tipu helah pertahanan'
      ],
      stepByStepStrategy: [
        'Langkah 1: Nyatakan FAKTA (F) secara tepat dan ringkas mengikut kehendak soalan.',
        'Langkah 2: Berikan HURAIAN (H) mendalam yang menjelaskan mengapa atau bagaimana fakta tersebut berlaku.',
        'Langkah 3: Sertakan CONTOH (C) sejarah yang spesifik (nama tokoh, peristiwa, tahun, lokasi, atau perjanjian).',
        'Langkah 4: Akhiri dengan INFERENS / KESIMPULAN (I) yang menunjukkan impak besar kepada kedaulatan negara.'
      ],
      commonErrorsToAvoid: [
        'Mencampuradukkan faktor abad ke-16 (rempah/3G) dengan faktor abad ke-19 (Revolusi Industri/Terusan Suez/bijih timah).',
        'Menyatakan Adat Perpatih diamalkan di seluruh Tanah Melayu (sepatutnya Negeri Sembilan dan Naning sahaja).',
        'Menulis huraian umum tanpa contoh peristiwa sejarah yang spesifik.'
      ]
    }
  ]
};
