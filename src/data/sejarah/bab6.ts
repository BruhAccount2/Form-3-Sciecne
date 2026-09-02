import { Chapter } from '../../types';
import { sejarahLearningStandards } from '../learningStandards';

export const bab6: Chapter = {
  id: 'sejarah-ch6',
  subject: 'sejarah',
  chapterNumber: 6,
  title: 'Kesan Pentadbiran Barat terhadap Ekonomi dan Sosial',
  theme: 'Kesan Pentadbiran Barat terhadap Ekonomi dan Sosial',
  summary: 'Membincangkan ciri-ciri ekonomi moden berorientasikan eksport, undang-undang tanah dan tenaga buruh kolonial, pembinaan infrastruktur landasan keretapi, jalan raya, perbankan dan telegraf, kemunculan bandar-bandar baharu, pembentukan masyarakat majmuk, sistem pendidikan vernakular, serta perkhidmatan kesihatan moden.',
  learningStandards: sejarahLearningStandards['sejarah-ch6'],
  notes: [
    {
      title: '6.1 Pengenalan Ekonomi Moden & 6.2 Perundangan Kolonial',
      content: `
### Ciri-ciri Sistem Ekonomi Moden Barat
Ekonomi tradisional sara diri telah diubah oleh kuasa Barat menjadi sistem ekonomi kapitalis berorientasikan eksport berskala besar.

> **English explanation:** British colonialism restructured the subsistence indigenous economy into a global export-driven capitalist system characterized by heavy capital investment, immigrant labor, large estates, and mechanized technology.

* **1. Modal Berskala Besar (Large Capital Investment):** Syarikat kewangan dan pelaburan Eropah menubuhkan *Agency Houses* (Guthrie, Sime Darby, Harrisons & Crosfield, Boustead).
* **2. Teknologi Moden (Modern Technology):**
  * *Perlombongan:* Pengenalan **kapal korek** (*dredge*) pertama oleh syarikat *Malayan Tin Dredging* di Batu Gajah (1912) dan kaedah pam kelikir.
  * *Pertanian:* Kaedah torehan sistem *ibidem* (torehan bentuk tulang ikan) yang diperkenalkan oleh **H.N. Ridley** di Taman Botani Singapura bagi memanjangkan hayat pokok getah.
* **3. Tenaga Buruh Luar Secara Massal:**
  * Buruh dari India dibawa masuk untuk sektor perladangan getah dan kerja awam (Sistem Kangani & Buruh Kontrak).
  * Buruh dari China dibawa masuk untuk sektor perlombongan bijih timah (Sistem Tiket Kredit & Rumah Kongsi).
* **4. Skala Pengeluaran Besar:** Pengeluaran komoditi utama (getah dan bijih timah) disasarkan khusus untuk pasaran antarabangsa di Eropah dan Amerika Syarikat.

---

### Perundangan Tanah dan Tenaga Buruh Kolonial

#### 1. Perundangan Tanah (Land Enactments)
* **Akta Tanah Simpanan Melayu 1913 (Malay Reservations Enactment):**
  * Bertujuan mengelakkan tanah milik orang Melayu berpindah milik kepada orang asing.
  * *Kelemahan:* Tanah simpanan Melayu tidak boleh ditanam tanaman komersial berskala besar dan kebanyakannya terletak di kawasan pedalaman yang kurang subur serta bernilai ekonomi rendah.
* **Land Order di Sarawak (1931 & 1948):** Membahagikan tanah kepada *Kawasan Campuran*, *Kawasan Simpanan Peribumi*, dan *Tanah Pedalaman*.
* **Proklamasi Perlindungan Hak Peribumi di Sabah (1889):** Melindungi tanah adat peribumi daripada dijual kepada orang asing tanpa kebenaran Pegawai Daerah.

#### 2. Institusi Kewangan dan Mata Wang Moden
* Pengenalan **Dolar Selat (Straits Dollar)** pada tahun 1906 sebagai mata wang standard.
* Penubuhan bank-bank perdagangan asing seperti *The Chartered Bank*, *Mercantile Bank*, dan *HSBC*.

---

<div class="p-4 my-4 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 dark:border-amber-800 text-amber-900 dark:text-amber-200">
  <strong class="block text-base mb-1">⭐ Tokoh Inovasi: H.N. Ridley</strong>
  <p class="text-sm">
    H.N. Ridley (Pengarah Taman Botani Singapura) digelar <em>"Ridley Gila"</em> kerana gigih mempromosikan penanaman getah dan mencipta teknik torehan ibidem yang tidak merosakkan pokok getah.
  </p>
</div>
      `,
      definitions: [
        { term: 'Kapal Korek (Tin Dredge)', definition: 'Jentera terapung berteknologi tinggi yang digunakan oleh syarikat Eropah untuk melombong bijih timah dalam kuantiti raksasa di kawasan paya dan tasik.' },
        { term: 'Sistem Torehan Ibidem', definition: 'Kaedah torehan getah seperti bentuk tulang ikan yang membolehkan susu getah mengalir maksimum tanpa mematikan sel kulit pokok.' },
        { term: 'Sistem Kangani', definition: 'Sistem pengambilan buruh dari India di mana seorang ketua (Kangani) dihantar ke kampung halamannya untuk merekrut pekerja ke ladang getah di Tanah Melayu.' },
        { term: 'Akta Tanah Simpanan Melayu 1913', definition: 'Undang-undang yang mewartakan kawasan tanah khas milik orang Melayu yang tidak boleh dipindah milik kepada bukan Melayu.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-6-1',
          type: 'mcq',
          title: 'Uji Minda 6.1: Ekonomi Moden',
          prompt: 'Apakah kelebihan pengenalan teknologi kapal korek dalam industri perlombongan bijih timah pada abad ke-20?',
          options: [
            'Membolehkan pengeluaran bijih timah dilakukan dalam skala raksasa dan menjimatkan kos buruh kasar.',
            'Menghapuskan sepenuhnya penglibatan pelombong Eropah di Perak.',
            'Mengelakkan pencemaran alam sekitar di kawasan lembah sungai.',
            'Membantu penduduk tempatan membuka lombong secara individu di kawasan pedalaman.'
          ],
          correctIndex: 0,
          explanation: 'Kapal korek berkuasa stim membolehkan pengorekan bijih timah berjuta-juta tan secara pantas di lapisan tanah dalam dan paya, mendominasi industri timah.'
        }
      ]
    },
    {
      title: '6.3 Kesan Ekonomi & 6.4 Kesan Sosial Pentadbiran Barat',
      content: `
### Kesan Ekonomi: Perkembangan Pengangkutan dan Pembandaran

> **English explanation:** British infrastructure projects (railways, paved roads, telegraph, ports) were built primarily to transport tin and rubber from mines and estates to coastal ports for export.

#### 1. Jaringan Pengangkutan Landasan Keretapi (Railways)
* **Fasa 1 (1885 - 1896):** Menghubungkan kawasan lombong timah dengan pelabuhan laut terdekat:
  * *1885:* Landasan pertama di Tanah Melayu: **Taiping ke Port Weld** (Kuala Sepetang).
  * *1886:* **Kuala Lumpur ke Port Swettenham** (Pelabuhan Klang).
  * *1891:* **Seremban ke Port Dickson**.
  * *1893:* **Teluk Anson ke Tapah Road**.
* **Fasa 2 (1897 - 1909):** Menghubungkan bandar-bandar utama di utara dengan selatan Semenanjung.
* **Sabah:** Landasan keretapi dibina dari **Bukit Garam ke Beaufort** dan diteruskan ke **Weston dan Jesselton** untuk mengangkut tembakau dan getah.

#### 2. Pembandaran (Urbanization)
* Perkembangan lombong dan pelabuhan melahirkan bandar-bandar moden:
  * **Kuala Lumpur:** Bermula daripada pangkalan pendaratan timah di pertemuan Sungai Gombak dan Sungai Klang, berkembang menjadi pusat pentadbiran NNMB.
  * **Ipoh & Taiping:** Berkembang pesat hasil pembukaan lombong timah Lembah Kinta dan Larut.
  * **Miri (Sarawak):** Muncul sebagai bandar minyak moden selepas penemuan minyak pertama di telaga minyak *Grand Old Lady* di Bukit Kanada (1910).

---

### Kesan Sosial: Masyarakat Majmuk, Pendidikan & Kesihatan

#### 1. Pembentukan Masyarakat Majmuk (Plural Society)
* Dasar imigrasi terbuka British membawa masuk buruh Cina dan India secara besar-besaran.
* Penjajah mengamalkan dasar **"Pecah dan Perintah" (Divide and Rule)** yang memisahkan kaum mengikut lokasi petempatan dan sektor ekonomi:
  * *Orang Melayu:* Tinggal di kampung luar bandar sebagai petani dan nelayan.
  * *Orang Cina:* Tinggal di kawasan bandar dan lombong sebagai peniaga dan pelombong.
  * *Orang India:* Tinggal di kawasan estet sebagai penoreh getah dan pekerja jalan keretapi.

#### 2. Sistem Pendidikan Vernakular (Vernacular Schools)
British membiarkan sistem pendidikan terpisah mengikut bahasa ibunda masing-masing:
* **Sekolah Melayu:** Memberi pendidikan asas 4 tahun (membaca, mengira, bertukang, berkebun). Maktab Perguruan Sultan Idris (**MPSI**) di Tanjung Malim (1922) dan Maktab Melayu Kuala Kangsar (**MCKK**) (1905) untuk golongan bangsawan Melayu.
* **Sekolah Cina & Tamil:** Dibiayai oleh masyarakat masing-masing, menggunakan kurikulum dan buku teks dari China dan India.
* **Sekolah Inggeris:** Bertempat di bandar-bandar utama (contoh: *Penang Free School*, *Victoria Institution KL*).

#### 3. Perkhidmatan Kesihatan & Sanitasi
* Penubuhan hospital kerajaan di Taiping, Kuala Lumpur, dan Pulau Pinang.
* Penubuhan **Institut Penyelidikan Perubatan (IMR)** di Kuala Lumpur (1900) untuk mengkaji dan membendung wabak malaria, kolera, dan beri-beri.
* Penubuhan **Lembaga Kebersihan (Sanitary Board)** untuk menjaga kebersihan bandar dan bekalan air bersih.

---

<div class="p-4 my-4 rounded-xl border border-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200">
  <strong class="block text-base mb-1">⭐ Impak Dasar Pecah dan Perintah British</strong>
  <p class="text-sm">
    Dasar pemisahan fizikal dan ekonomi ini mengehadkan interaksi sosial antara kaum dan mewujudkan jurang ekonomi antara bandar dengan luar bandar.
  </p>
</div>
      `,
      definitions: [
        { term: 'Masyarakat Majmuk (Plural Society)', definition: 'Masyarakat berbilang kaum yang hidup berdampingan tetapi terpisah dari segi petempatan, budaya, bahasa, dan sektor pekerjaan.' },
        { term: 'Pendidikan Vernakular (Vernacular Education)', definition: 'Sistem persekolahan yang menggunakan bahasa ibunda sesuatu kaum sebagai bahasa pengantar utama.' },
        { term: 'Institut Penyelidikan Perubatan (IMR)', definition: 'Pusat penyelidikan sains perubatan di Kuala Lumpur yang ditubuhkan pada 1900 bagi memerangi wabak penyakit tropika.' }
      ],
      interactiveElements: [
        {
          id: 'mini-quiz-6-2',
          type: 'mcq',
          title: 'Uji Minda 6.2: Pengangkutan & Sosial',
          prompt: 'Apakah tujuan utama pihak British membina landasan keretapi pertama antara Taiping dengan Port Weld pada tahun 1885?',
          options: [
            'Mempercepat pengangkutan bijih timah dari lombong Larut ke pelabuhan laut untuk dieksport.',
            'Menyediakan kemudahan pengangkutan percuma kepada penduduk luar bandar.',
            'Menghubungkan pusat pentadbiran British di London dengan Singapura.',
            'Membendung penyeludupan getah asli ke negara jiran.'
          ],
          correctIndex: 0,
          explanation: 'Landasan keretapi fasa pertama dibina semata-mata untuk mengangkut hasil bijih timah dari kawasan perlombongan di pedalaman terus ke pelabuhan laut.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sej-ex-6-1',
      title: 'Soalan Struktur: Pembentukan Masyarakat Majmuk dan Sistem Pendidikan',
      difficulty: 'medium',
      learningStandardCode: '7.6.4',
      marks: 6,
      context: 'Dasar kolonial British telah meninggalkan kesan mendalam terhadap struktur sosial di Tanah Melayu.',
      questions: [
        {
          subQuestionNumber: '(a)',
          prompt: 'Jelaskan konsep masyarakat majmuk yang terbentuk akibat dasar imigrasi British.',
          marks: 2,
          scoringGuide: [
            '1m untuk kepelbagaian kaum (Melayu, Cina, India)',
            '1m untuk terpisah dari segi petempatan dan kegiatan ekonomi'
          ],
          modelAnswer: 'Masyarakat majmuk merujuk kepada masyarakat berbilang kaum (Melayu, Cina, dan India) yang hidup bersama dalam satu unit politik tetapi terpisah dari segi petempatan geografi, bahasa, budaya, dan pengkhususan ekonomi.'
        },
        {
          subQuestionNumber: '(b)',
          prompt: 'Terangkan dua kesan kewujudan sistem persekolahan vernakular pada zaman pentadbiran British.',
          marks: 4,
          scoringGuide: [
            'Fakta 1: Menghalang perpaduan dan integrasi kaum kerana menggunakan bahasa pengantar dan sukatan pelajaran yang berbeza [2m]',
            'Fakta 2: Mewujudkan jurang pencapaian sosioekonomi antara penduduk bandar (Sekolah Inggeris) dengan luar bandar (Sekolah Vernakular) [2m]'
          ],
          modelAnswer: 'Kesan pertama ialah menghalang pembentukan perpaduan nasional kerana murid-murid daripada kaum berbeza diasingkan mengikut bahasa pengantar dan sukatan pelajaran masing-masing. Kesan kedua ialah mewujudkan jurang mobiliti sosial dan ekonomi, di mana lulusan sekolah Inggeris berpeluang memegang jawatan tinggi dalam perkhidmatan awam manakala lulusan sekolah vernakular Melayu dan Tamil kekal dalam sektor sara diri dan buruh kasar.'
        }
      ],
      fullWorking: [
        'Langkah 1: Definisikan masyarakat majmuk dan pembahagian tugas kolonial.',
        'Langkah 2: Huraikan impak negatif pemisahan sekolah vernakular terhadap integrasi nasional.',
        'Langkah 3: Tulis jawapan secara teratur dengan kata kunci sejarah.'
      ],
      scientificReasoning: 'Dasar pecah dan perintah British membentuk landskap demografi dan cabaran integrasi nasional yang berterusan pasca-merdeka.'
    }
  ],
  mindmap: {
    title: 'Peta Minda Bab 6: Kesan Pentadbiran Barat',
    nodes: [
      {
        id: '6',
        label: 'Kesan Pentadbiran Barat',
        children: [
          {
            id: '6.1',
            label: 'Ekonomi Moden',
            children: [
              { id: '6.1.1', label: 'Kapal Korek & Sistem Torehan Ibidem (H.N. Ridley)' },
              { id: '6.1.2', label: 'Buruh Imigran: Sistem Kangani & Tiket Kredit' },
              { id: '6.1.3', label: 'Akta Tanah Simpanan Melayu 1913 & Dolar Selat 1906' }
            ]
          },
          {
            id: '6.2',
            label: 'Infrastruktur & Pembandaran',
            children: [
              { id: '6.2.1', label: 'Keretapi: Taiping-Port Weld (1885), KL-Port Swettenham' },
              { id: '6.2.2', label: 'Bandar Baru: KL, Ipoh, Taiping, Miri (Minyak 1910)' },
              { id: '6.2.3', label: 'Pelabuhan Moden & Telegraf' }
            ]
          },
          {
            id: '6.3',
            label: 'Sosial & Pendidikan',
            children: [
              { id: '6.3.1', label: 'Masyarakat Majmuk & Dasar Pecah dan Perintah' },
              { id: '6.3.2', label: 'Sekolah Vernakular (Melayu, Cina, Tamil, Inggeris, MPSI)' },
              { id: '6.3.3', label: 'Hospital, Sanitary Board & IMR (1900)' }
            ]
          }
        ]
      }
    ]
  },
  answeringTechniques: [
    {
      title: 'Teknik Menjawab Soalan Impak Dasar Pecah dan Perintah (Divide and Rule)',
      description: 'Panduan mengupas aspek sebab dan akibat pengasingan sosioekonomi kolonial.',
      steps: [
        '1. Jelaskan sektor ekonomi dan lokasi setiap kaum (Melayu di sawah/kampung, Cina di lombong/bandar, India di estet).',
        '2. Terangkan mengapa penjajah mengekalkan pemisahan ini (untuk mengelakkan penyatuan menentang penjajah).',
        '3. Huraikan kesan jangka panjang kepada perpaduan kaum di Malaysia.'
      ],
      sampleQuestion: 'Mengapakah British melaksanakan dasar Pecah dan Perintah di Tanah Melayu?',
      sampleAnswer: 'British melaksanakan dasar Pecah dan Perintah bertujuan untuk mengekalkan kedudukan politik mereka dan mengelakkan penyatuan tenaga penduduk pelbagai kaum yang boleh mengancam kekuasaan penjajah. Dengan memisahkan kaum mengikut lokasi geografi dan sektor ekonomi, interaksi sosial dapat diminimumkan dan jurang prasangka antara kaum kekal wujud.'
    }
  ]
};
