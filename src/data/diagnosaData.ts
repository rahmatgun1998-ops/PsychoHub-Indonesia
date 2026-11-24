import { ClinicalCaseExercise, DecisionPathway } from '../types';

export const DECISION_PATHWAYS: DecisionPathway[] = [
  {
    id: 'mood',
    title: 'Alur Diagnosa Gangguan Mood (Depresi vs Bipolar)',
    chiefComplaint: 'Keluhan Utama: Sedih mendalam, hilang minat, kelelahan, atau fluktuasi energi drastis',
    description:
      'Menelusuri eksklusi medis/zat, membedakan duka berkabung vs depresi, mendeteksi riwayat tersembunyi mania/hipomania, hingga membedakan MDD, PDD, Bipolar I, dan Bipolar II.',
    initialStepId: 'mood-1',
    steps: {
      'mood-1': {
        id: 'mood-1',
        stepLabel: 'Langkah 1 · Eksklusi Medis & Zat',
        question:
          'Apakah gejala mood disebabkan langsung oleh zat (narkotika, alkohol, steroid) atau kondisi medis (hipotiroidisme, tumor otak)?',
        clinicalHint:
          'Selalu periksa riwayat konsumsi obat, zat psikoaktif, serta hasil pemeriksaan medis dasar sebelum menegakkan diagnosis gangguan mood primer.',
        options: [
          {
            label: 'Ya, gejala muncul tepat setelah paparan zat atau kondisi medis',
            conclusion: {
              diagnosis: 'Substance/Medication-Induced or Medical Mood Disorder',
              icd10: 'F10–F19 / F06.3',
              rationale:
                'Perubahan mood merupakan efek fisiologis langsung dari kondisi medis umum atau intoksikasi/putus zat.',
              nextAction: 'Kolaborasi rujukan medis untuk tata laksana kondisi fisik atau detoksifikasi zat terlebih dahulu.'
            }
          },
          {
            label: 'Tidak, gejala mood berdiri sendiri secara primer',
            nextStepId: 'mood-2'
          }
        ]
      },
      'mood-2': {
        id: 'mood-2',
        stepLabel: 'Langkah 2 · Skrining Riwayat Mania atau Hipomania',
        question:
          'Apakah klien pernah mengalami periode jelas mood sangat bersemangat/ekspansif atau mudah tersinggung disertai kebutuhan tidur jauh berkurang dan energi melonjak?',
        clinicalHint:
          'Banyak klien Bipolar datang saat fase depresi sehingga riwayat elevasi mood harus digali aktif agar tidak keliru didiagnosis MDD.',
        options: [
          {
            label: 'Ya, pernah mengalami elevasi mood & energi yang mencolok',
            nextStepId: 'mood-3-bipolar'
          },
          {
            label: 'Tidak pernah ada riwayat mania maupun hipomania',
            nextStepId: 'mood-3-depresi'
          }
        ]
      },
      'mood-3-bipolar': {
        id: 'mood-3-bipolar',
        stepLabel: 'Langkah 3 · Durasi, Hendaya & Psikosis pada Fase Elevasi',
        question:
          'Apakah periode elevasi mood tersebut berlangsung ≥7 hari, menyebabkan hendaya berat/rawat inap, atau disertai ciri psikotik?',
        clinicalHint:
          'Perbedaan utama Bipolar I dan Bipolar II terletak pada ada tidaknya episode Manik penuh (vs Hipomanik ≥4 hari tanpa hendaya berat/psikosis).',
        options: [
          {
            label: 'Ya (≥7 hari, atau rawat inap / psikosis / hendaya berat)',
            conclusion: {
              diagnosis: 'Gangguan Bipolar I (Bipolar I Disorder)',
              icd10: 'F31.9',
              rationale:
                'Terdapat minimal satu episode manik penuh sepanjang riwayat hidup klien, terlepas dari ada tidaknya episode depresi mayor.',
              nextAction: 'Rujuk psikiater untuk stabilisator mood serta psikoedukasi ritme sirkadian dan pemantauan relaps.'
            }
          },
          {
            label: 'Tidak, hanya 4–6 hari (Hipomania) disertai riwayat Depresi Mayor ≥2 minggu',
            conclusion: {
              diagnosis: 'Gangguan Bipolar II (Bipolar II Disorder)',
              icd10: 'F31.81',
              rationale:
                'Memenuhi kriteria minimal satu episode hipomanik (≥4 hari, perubahan teramati tanpa hendaya berat) dan satu episode depresi mayor.',
              nextAction: 'Asesmen risiko bunuh diri saat fase depresi, kolaborasi farmakoterapi, dan terapi ritme interpersonal (IPSRT).'
            }
          }
        ]
      },
      'mood-3-depresi': {
        id: 'mood-3-depresi',
        stepLabel: 'Langkah 3 · Durasi & Keparahan Episode Depresif',
        question:
          'Bagaimana durasi dan intensitas gejala mood tertekan atau anhedonia yang dialami klien?',
        clinicalHint:
          'Bandingkan episode akut penuh (≥5 gejala selama ≥2 minggu) dengan gejala kronis berkepanjangan (≥2 tahun pada dewasa).',
        options: [
          {
            label: '≥5 gejala (termasuk mood tertekan/anhedonia) berlangsung ≥2 minggu',
            conclusion: {
              diagnosis: 'Gangguan Depresi Mayor (Major Depressive Disorder)',
              icd10: 'F32.9',
              rationale:
                'Memenuhi ambang simtomatik dan durasi minimum 2 minggu dengan distres/hendaya fungsi tanpa riwayat mania/hipomania.',
              nextAction: 'Lakukan skrining keamanan diri (PHQ-9 item 9), psikoterapi CBT/aktivasi perilaku, dan pertimbangkan konsultasi psikiatri.'
            }
          },
          {
            label: 'Mood tertekan kronis ≥2 tahun (≥1 tahun pada anak/remaja) dengan ≥2 gejala',
            conclusion: {
              diagnosis: 'Persistent Depressive Disorder (Distimia)',
              icd10: 'F34.1',
              rationale:
                'Depresi kronis berdurasi minimal 2 tahun tanpa periode bebas gejala melebihi 2 bulan berturut-turut.',
              nextAction: 'Psikoterapi jangka menengah (CBASP/CBT) serta evaluasi apakah terjadi double depression.'
            }
          }
        ]
      }
    }
  },
  {
    id: 'anxiety',
    title: 'Alur Diagnosa Kecemasan, Panik, OCD & Trauma',
    chiefComplaint: 'Keluhan Utama: Khawatir berlebih, jantung berdebar mendadak, pikiran berulang, atau kilas balik',
    description:
      'Membedakan pemicu inti ketakutan (khawatir multisituasi, serangan panik spontan, obsesi-kompulsi, atau ingatan peristiwa traumatis).',
    initialStepId: 'anx-1',
    steps: {
      'anx-1': {
        id: 'anx-1',
        stepLabel: 'Langkah 1 · Identifikasi Pemicu Trauma Nyata',
        question:
          'Apakah gejala muncul setelah mengalami atau menyaksikan peristiwa traumatis mengancam nyawa/integritas fisik (mis. bencana, kekerasan, kecelakaan berat)?',
        clinicalHint:
          'Periksa adanya 4 klaster gejala trauma: intrusi/mimpi buruk, penghindaran, perubahan negatif kognisi-mood, dan hiperarousal.',
        options: [
          {
            label: 'Ya, dipicu peristiwa traumatis spesifik',
            nextStepId: 'anx-trauma-durasi'
          },
          {
            label: 'Tidak ada pemicu trauma spesifik yang menjadi inti gejala',
            nextStepId: 'anx-2'
          }
        ]
      },
      'anx-trauma-durasi': {
        id: 'anx-trauma-durasi',
        stepLabel: 'Langkah 2 · Garis Waktu Pasca-Trauma',
        question: 'Sudah berapa lama gejala intrusi, penghindaran, dan hiperarousal berlangsung sejak kejadian?',
        clinicalHint: 'Batas waktu 1 bulan membedakan Acute Stress Disorder dan PTSD.',
        options: [
          {
            label: '3 hari hingga 1 bulan pasca-trauma',
            conclusion: {
              diagnosis: 'Acute Stress Disorder (Gangguan Stres Akut)',
              icd10: 'F43.0',
              rationale: 'Reaksi trauma berat dalam rentang 3 hari hingga 4 minggu pertama setelah paparan kejadian.',
              nextAction: 'Psychological First Aid (PFA), stabilisasi emosi, dan pemantauan perkembangan menuju bulan kedua.'
            }
          },
          {
            label: 'Lebih dari 1 bulan pasca-trauma',
            conclusion: {
              diagnosis: 'Posttraumatic Stress Disorder (PTSD)',
              icd10: 'F43.10',
              rationale: 'Keempat klaster gejala trauma bertahan melampaui 1 bulan dan mengganggu keberfungsian harian.',
              nextAction: 'Trauma-Focused CBT, Prolonged Exposure, atau EMDR setelah kondisi keamanan klien dipastikan.'
            }
          }
        ]
      },
      'anx-2': {
        id: 'anx-2',
        stepLabel: 'Langkah 2 · Sifat Gejala Inti (Serangan Panik vs Obsesi vs Khawatir Umum)',
        question: 'Manakah gambaran utama yang paling mendominasi keluhan klien saat ini?',
        clinicalHint: 'Fokus pada mekanisme kognitif dan perilaku pemelihara gangguan.',
        options: [
          {
            label: 'Lonjakan takut mendadak memuncak dalam menit tanpa pemicu jelas + takut serangan ulang',
            conclusion: {
              diagnosis: 'Gangguan Panik (Panic Disorder)',
              icd10: 'F41.0',
              rationale: 'Serangan panik tak terduga berulang disertai ≥1 bulan kekhawatiran antisipatif atau perilaku menghindar.',
              nextAction: 'Psikoedukasi fisiologi panik, latihan pernapasan, dan eksposur interoseptif (CBT).'
            }
          },
          {
            label: 'Pikiran intrusif berulang (obsesi) yang diredakan dengan ritual kaku (kompulsi)',
            conclusion: {
              diagnosis: 'Obsessive-Compulsive Disorder (OCD)',
              icd10: 'F42.2',
              rationale: 'Terdapat siklus obsesi-kompulsi yang menyita waktu (>1 jam/hari) atau menimbulkan distres bermakna.',
              nextAction: 'Exposure and Response Prevention (ERP) menggunakan instrumen pemantauan Y-BOCS.'
            }
          },
          {
            label: 'Kekhawatiran kronis sulit dikendalikan tentang berbagai topik harian selama ≥6 bulan',
            conclusion: {
              diagnosis: 'Generalized Anxiety Disorder (GAD)',
              icd10: 'F41.1',
              rationale: 'Kecemasan mengambang bebas lintas domain kehidupan disertai ≥3 gejala ketegangan somatik/kognitif selama ≥6 bulan.',
              nextAction: 'Skrining GAD-7, teknik relaksasi otot progresif, dan restrukturisasi kognitif terhadap intoleransi ketidakpastian.'
            }
          }
        ]
      }
    }
  },
  {
    id: 'psychotic',
    title: 'Alur Diagnosa Spektrum Psikotik & Skizofrenia',
    chiefComplaint: 'Keluhan Utama: Halusinasi, waham (delusi), bicara tidak teratur, atau penarikan diri ekstrem',
    description:
      'Menilai apakah simtom psikotik bersifat primer, terikat episode mood, atau dibedakan menurut durasi (<1 bulan, 1–6 bulan, ≥6 bulan).',
    initialStepId: 'psy-1',
    steps: {
      'psy-1': {
        id: 'psy-1',
        stepLabel: 'Langkah 1 · Keterkaitan dengan Episode Mood Berat',
        question:
          'Apakah waham atau halusinasi HANYA muncul secara eksklusif selama berlangsungnya episode depresi mayor atau mania?',
        clinicalHint:
          'Untuk membedakan Skizoafektif vs Gangguan Mood dengan Ciri Psikotik, perhatikan ada tidaknya psikosis minimal 2 minggu tanpa gejala mood menonjol.',
        options: [
          {
            label: 'Ya, psikosis hanya terjadi di puncak episode depresi/mania',
            conclusion: {
              diagnosis: 'Gangguan Mood (Depresi Mayor / Bipolar I) dengan Ciri Psikotik',
              icd10: 'F32.3 / F31.2',
              rationale: 'Gejala psikotik merupakan bagian sekunder dari episode afektif berat, bukan gangguan spektrum skizofrenia primer.',
              nextAction: 'Prioritaskan rujukan psikiater untuk kombinasi antipsikotik dan tata laksana gangguan mood.'
            }
          },
          {
            label: 'Tidak, gejala psikotik hadir terlepas dari episode mood',
            nextStepId: 'psy-2'
          }
        ]
      },
      'psy-2': {
        id: 'psy-2',
        stepLabel: 'Langkah 2 · Durasi Total Gangguan Psikotik',
        question: 'Berapa lama total durasi gejala psikotik (termasuk fase prodromal, aktif, dan residual) telah berlangsung?',
        clinicalHint: 'Kriteria durasi adalah pembeda utama Brief Psychotic, Schizophreniform, dan Schizophrenia.',
        options: [
          {
            label: 'Lebih dari 1 hari namun kurang dari 1 bulan (kembali ke fungsi normal)',
            conclusion: {
              diagnosis: 'Brief Psychotic Disorder',
              icd10: 'F23',
              rationale: 'Episode psikotik akut berdurasi <1 bulan dengan pemulihan penuh ke tingkat keberfungsian premorbid.',
              nextAction: 'Evaluasi stresor akut, observasi ketat keselamatan diri, dan tindak lanjut berkala.'
            }
          },
          {
            label: 'Berlangsung 1 hingga kurang dari 6 bulan',
            conclusion: {
              diagnosis: 'Schizophreniform Disorder',
              icd10: 'F20.81',
              rationale: 'Presentasi gejala mirip Skizofrenia namun durasi total belum mencapai ambang 6 bulan.',
              nextAction: 'Intervensi dini psikosis, dukungan keluarga, dan evaluasi ulang diagnostik pada bulan ke-6.'
            }
          },
          {
            label: 'Berlangsung minimal 6 bulan (dengan ≥1 bulan simtom fase aktif)',
            conclusion: {
              diagnosis: 'Skizofrenia (Schizophrenia)',
              icd10: 'F20.9',
              rationale: 'Memenuhi durasi kronis ≥6 bulan disertai penurunan fungsi sosial/pekerjaan yang bermakna.',
              nextAction: 'Rujukan psikiatri jangka panjang, psikoedukasi keluarga (expressed emotion), dan rehabilitasi psikososial.'
            }
          }
        ]
      }
    }
  }
];

export const MSE_DOMAINS = [
  { title: '1. Penampilan & Perilaku', points: 'Kebersihan diri, postur, kontak mata, sikap terhadap pemeriksa (kooperatif, defensif, curiga), aktivitas psikomotor (agitasi vs retardasi).' },
  { title: '2. Bicara (Speech)', points: 'Kecepatan (cepat/tertekan vs lambat), volume, kelancaran, artikulasi, dan spontanitas respons.' },
  { title: '3. Mood & Afek', points: 'Mood: suasana perasaan subjektif yang dilaporkan klien. Afek: ekspresi emosi yang teramati pemeriksa (luas, tumpul, datar, labil, atau kongruen/tidak kongruen).' },
  { title: '4. Proses & Isi Pikir', points: 'Proses: koheren, sirkumstansial, tangensial, flight of ideas, asosiasi longgar. Isi: waham (kejar, kebesaran), obsesi, fobia, ideasi bunuh diri/melukai.' },
  { title: '5. Persepsi', points: 'Halusinasi (auditorik, visual, taktil, olfaktorik), ilusi, depersonalisasi, dan derealisasi.' },
  { title: '6. Kognisi, Tilikan (Insight) & Penilaian', points: 'Kesadaran, orientasi (waktu, tempat, orang), atensi/konsentrasi, memori jangka pendek-panjang, tingkat tilikan (insight 1–6), dan judgment sosial.' }
];

export const FORMULATION_5P = [
  { p: 'Presenting Problem', desc: 'Keluhan utama saat ini, gejala spesifik, frekuensi, intensitas, serta dampak fungsional pada studi, kerja, atau relasi.' },
  { p: 'Predisposing Factors', desc: 'Faktor kerentanan jangka panjang: riwayat genetik/keluarga, temperamen awal, trauma masa kecil, atau gaya kelekatan tidak aman.' },
  { p: 'Precipitating Factors', desc: 'Pemicu terdekat sebelum onset: kehilangan orang terkasih, konflik relasi, tekanan skripsi/pekerjaan, atau perubahan fase hidup.' },
  { p: 'Perpetuating Factors', desc: 'Faktor pemelihara masalah: penghindaran perilaku, distorsi kognitif, pola tidur buruk, atau lingkungan keluarga kritis.' },
  { p: 'Protective Factors', desc: 'Kekuatan klien & sumber daya: dukungan sosial hangat, tilikan baik, keterampilan koping adaptif, dan motivasi terapi.' }
];

export const CLINICAL_CASES: ClinicalCaseExercise[] = [
  {
    id: 'case-1',
    title: 'Kasus 1: Mahasiswa Tingkat Akhir dengan Fluktuasi Energi Ekstrem',
    vignette:
      'Raka (22 tahun) datang mengeluhkan rasa sedih berat, kehilangan minat kuliah, dan kelelahan selama 3 minggu terakhir. Saat ditanya riwayat sebelumnya, Raka bercerita 4 bulan lalu ia sempat merasa sangat produktif selama 5 hari berturut-turut: tidur hanya 2 jam semalam tanpa lelah, berbicara sangat cepat, dan menyusun 3 rencana bisnis sekaligus, namun tetap bisa masuk kuliah dan tidak pernah dirawat inap maupun mengalami halusinasi.',
    question: 'Berdasarkan DSM-5-TR, diagnosis kerja manakah yang paling tepat dipertimbangkan?',
    options: [
      'Major Depressive Disorder (MDD)',
      'Gangguan Bipolar I',
      'Gangguan Bipolar II',
      'Cyclothymic Disorder'
    ],
    correctIndex: 2,
    explanation:
      'Raka memenuhi episode Depresi Mayor saat ini (≥2 minggu) DAN memiliki riwayat episode Hipomanik yang jelas (5 hari, ≥4 hari syarat minimum) tanpa pernah mencapai kriteria Mania penuh atau psikosis/rawat inap. Oleh karena itu diagnosis yang paling akurat adalah Gangguan Bipolar II (F31.81).'
  },
  {
    id: 'case-2',
    title: 'Kasus 2: Karyawan dengan Pikiran Intrusif & Ritual Pemeriksaan',
    vignette:
      'Dina (27 tahun) mengeluhkan pikiran berulang bahwa kompor di apartemennya masih menyala dan akan membakar gedung. Ia menyadari pikiran itu berlebihan, tetapi merasa cemas luar biasa kecuali ia memeriksa tombol kompor tepat 8 kali sebelum berangkat kerja. Kebiasaan ini memakan waktu hampir 90 menit setiap pagi sehingga ia sering terlambat.',
    question: 'Manakah analisis klinis dan intervensi psikoterapi lini pertama yang paling sesuai?',
    options: [
      'GAD — Relaksasi Otot Progresif',
      'OCD — Exposure and Response Prevention (ERP)',
      'Obsessive-Compulsive Personality Disorder — Psikoanalisis',
      'Panic Disorder — Eksposur Interoseptif'
    ],
    correctIndex: 1,
    explanation:
      'Adanya pikiran intrusif ego-distonik (obsesi) yang diredakan lewat perilaku berulang kaku (kompulsi) selama >1 jam/hari merupakan ciri khas OCD. Berbeda dari OCPD yang bersifat ego-sintonik dan perfeksionis menetap. Intervensi berbasis bukti lini pertama adalah ERP.'
  },
  {
    id: 'case-3',
    title: 'Kasus 3: Gejala Pasca-Kecelakaan Lalu Lintas pada Minggu ke-2',
    vignette:
      'Sari (30 tahun) mengalami kecelakaan bus 12 hari yang lalu. Sejak kejadian, ia mengalami mimpi buruk berulang, jantung berdebar saat mendengar suara rem, menghindari jalan raya, dan sulit tidur. Ia khawatir dirinya mengalami gangguan permanen.',
    question: 'Diagnosis apakah yang tepat sesuai garis waktu DSM-5-TR saat ini?',
    options: [
      'Posttraumatic Stress Disorder (PTSD)',
      'Acute Stress Disorder (ASD)',
      'Adjustment Disorder',
      'Specific Phobia'
    ],
    correctIndex: 1,
    explanation:
      'Gejala trauma muncul pada hari ke-12 pasca-paparan (berada dalam rentang 3 hari hingga 1 bulan). PTSD baru dapat ditegakkan apabila klaster gejala bertahan lebih dari 1 bulan penuh.'
  },
  {
    id: 'case-4',
    title: 'Kasus 4: Keterlambatan Berbahasa & Interaksi Sosial Anak Usia 4 Tahun',
    vignette:
      'Bima (4 tahun) belum mampu melakukan percakapan timbal-balik, jarang melakukan kontak mata, tidak merespons saat dipanggil namanya meskipun tes pendengaran normal, serta selalu menyusun mobil-mobilan berjajar lurus dan menangis hebat jika urutannya digeser sedikit saja.',
    question: 'Kombinasi domain gejala Bima mengarah pada indikasi utama gangguan apa?',
    options: [
      'Language Disorder murni',
      'Autism Spectrum Disorder (ASD)',
      'ADHD Presentasi Inatentif',
      'Social Anxiety Disorder'
    ],
    correctIndex: 1,
    explanation:
      'Bima menunjukkan kedua kriteria inti ASD: (A) defisit komunikasi-interaksi sosial timbal-balik/nonverbal, serta (B) pola perilaku/minat terbatas dan kaku terhadap rutinitas. Gangguan bahasa murni tidak disertai kekakuan perilaku maupun defisit timbal-balik sosio-emosional.'
  }
];
