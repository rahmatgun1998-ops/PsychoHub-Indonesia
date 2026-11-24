import { DsmDisorder } from '../types';
import { EXTRA_DSM } from './dsmCatalog';

const CORE_DSM: DsmDisorder[] = [
  {
    id: 'intellectual-disability',
    icd10: 'F70–F73',
    nameId: 'Disabilitas Intelektual (Gangguan Perkembangan Intelektual)',
    nameEn: 'Intellectual Developmental Disorder (Intellectual Disability)',
    chapter: 'Neurodevelopmental',
    summary:
      'Defisit fungsi intelektual (penalaran, pemecahan masalah, perencanaan, berpikir abstrak) dan fungsi adaptif pada domain konseptual, sosial, serta praktis yang berawal pada periode perkembangan.',
    minDuration: 'Onset selama periode perkembangan (masa kanak-kanak / remaja)',
    criteria: [
      { code: 'A', title: 'Defisit Fungsi Intelektual', description: 'Keterbatasan penalaran, pemecahan masalah, berpikir abstrak, penilaian, dan belajar akademik yang dikonfirmasi asesmen klinis dan tes inteligensi terstandar.' },
      { code: 'B', title: 'Defisit Fungsi Adaptif', description: 'Kegagalan memenuhi standar perkembangan dan sosiokultural untuk kemandirian personal serta tanggung jawab sosial pada satu atau lebih aktivitas harian.' },
      { code: 'C', title: 'Onset Perkembangan', description: 'Onset defisit intelektual dan adaptif terjadi selama masa perkembangan.' }
    ],
    specifiers: ['Ringan (F70)', 'Sedang (F71)', 'Berat (F72)', 'Sangat Berat (F73)'],
    differentialDiagnosis: ['Gangguan Neurokognitif Mayor/Ringan', 'Gangguan Komunikasi & Belajar Spesifik', 'Autism Spectrum Disorder'],
    screeningTools: ['WISC-V / WPPSI-IV', 'Vineland Adaptive Behavior Scales (VABS-3)']
  },
  {
    id: 'global-developmental-delay',
    icd10: 'F88',
    nameId: 'Keterlambatan Perkembangan Global',
    nameEn: 'Global Developmental Delay',
    chapter: 'Neurodevelopmental',
    summary:
      'Diagnosis sementara untuk anak di bawah usia 5 tahun ketika tingkat keparahan klinis belum dapat dinilai secara reliabel pada berbagai domain fungsi perkembangan.',
    minDuration: 'Anak berusia < 5 tahun (memerlukan evaluasi ulang berkala)',
    criteria: [
      { code: 'A', title: 'Keterlambatan Multi-Domain', description: 'Anak gagal mencapai tonggak perkembangan (milestones) yang diharapkan pada beberapa area fungsi intelektual.' },
      { code: 'B', title: 'Ketidakmampuan Asesmen Sistematis', description: 'Anak masih terlalu muda untuk menjalani tes inteligensi terstandar secara valid.' }
    ],
    specifiers: ['Perlu asesmen ulang setelah usia 5 tahun'],
    differentialDiagnosis: ['Disabilitas Intelektual', 'Gangguan Spektrum Autisme', 'Deprivasi Lingkungan Ekstrem'],
    screeningTools: ['Denver II', 'Bayley Scales of Infant Development (BSID-IV)']
  },
  {
    id: 'language-disorder',
    icd10: 'F80.2',
    nameId: 'Gangguan Bahasa',
    nameEn: 'Language Disorder',
    chapter: 'Neurodevelopmental',
    summary:
      'Kesulitan persisten dalam perolehan dan penggunaan bahasa lintas modalitas (lisan, tulisan, isyarat) akibat defisit pemahaman maupun produksi kosakata serta struktur kalimat.',
    minDuration: 'Onset pada periode perkembangan awal',
    criteria: [
      { code: 'A', title: 'Defisit Bahasa Persisten', description: 'Keterbatasan kosakata, struktur kalimat terbatas, dan gangguan wacana dalam menjelaskan topik atau bercakap-cakap.' },
      { code: 'B', title: 'Di Bawah Ekspektasi Usia', description: 'Kemampuan bahasa secara substansial dan terukur di bawah harapan usia, berdampak pada komunikasi, partisipasi sosial, atau prestasi akademik.' },
      { code: 'C', title: 'Eksklusi Medis/Sensoris', description: 'Tidak disebabkan oleh gangguan pendengaran, defisit motorik bicara, atau kondisi neurologis lain.' }
    ],
    specifiers: ['Ekspresif Dominan', 'Campuran Reseptif-Ekspresif'],
    differentialDiagnosis: ['Variasi Bahasa Regional/Normal', 'Gangguan Pendengaran', 'Autism Spectrum Disorder'],
    screeningTools: ['CELF-5', 'PPVT-5']
  },
  {
    id: 'asd',
    icd10: 'F84.0',
    nameId: 'Gangguan Spektrum Autisme (ASD)',
    nameEn: 'Autism Spectrum Disorder',
    chapter: 'Neurodevelopmental',
    summary:
      'Defisit persisten dalam komunikasi serta interaksi sosial di berbagai konteks, disertai pola perilaku, minat, atau aktivitas yang terbatas dan berulang.',
    minDuration: 'Gejala hadir sejak periode perkembangan dini',
    criteria: [
      { code: 'A', title: 'Defisit Komunikasi & Interaksi Sosial', description: 'Hambatan timbal-balik sosio-emosional, komunikasi nonverbal, dan membangun serta mempertahankan relasi.' },
      { code: 'B', title: 'Perilaku & Minat Terbatas/Berulang', description: 'Minimal 2 dari: gerakan stereotipik, kekakuan rutinitas, minat sangat intens/terfiksasi, atau hiper/hiporeaktivitas sensoris.' },
      { code: 'C', title: 'Dampak Klinis Signifikan', description: 'Menyebabkan hendaya bermakna dalam fungsi sosial, pekerjaan, atau area kehidupan penting lainnya.' }
    ],
    specifiers: ['Level 1 (Memerlukan Dukungan)', 'Level 2 (Dukungan Substansial)', 'Level 3 (Dukungan Sangat Substansial)', 'Dengan/Tanpa Gangguan Intelektual'],
    differentialDiagnosis: ['Rett Syndrome', 'Selective Mutism', 'Social (Pragmatic) Communication Disorder', 'ADHD'],
    screeningTools: ['M-CHAT-R/F', 'ADOS-2', 'CARS-2']
  },
  {
    id: 'adhd',
    icd10: 'F90.2',
    nameId: 'Gangguan Pemusatan Perhatian dan Hiperaktivitas (ADHD)',
    nameEn: 'Attention-Deficit/Hyperactivity Disorder',
    chapter: 'Neurodevelopmental',
    summary:
      'Pola persisten inatensi dan/atau hiperaktivitas-impulsivitas yang mengganggu fungsi perkembangan, tampak sebelum usia 12 tahun di minimal dua latar (mis. rumah dan sekolah).',
    minDuration: 'Minimal 6 bulan (≥6 gejala pada anak, ≥5 gejala pada usia ≥17 tahun)',
    criteria: [
      { code: 'A', title: 'Inatensi atau Hiperaktivitas-Impulsivitas', description: 'Memenuhi ≥6 gejala inatensi (ceroboh, mudah teralihkan, lupa) dan/atau ≥6 gejala hiperaktivitas-impulsivitas (gelisah, menyela, sulit menunggu giliran).' },
      { code: 'B', title: 'Onset Sebelum Usia 12 Tahun', description: 'Beberapa gejala sudah tampak sebelum usia 12 tahun.' },
      { code: 'C', title: 'Lintas Latar (≥2 Setting)', description: 'Gejala hadir di dua atau lebih konteks seperti rumah, sekolah/kampus, atau tempat kerja.' }
    ],
    specifiers: ['Presentasi Kombinasi (F90.2)', 'Dominan Inatentif (F90.0)', 'Dominan Hiperaktif-Impulsif (F90.1)'],
    differentialDiagnosis: ['Oppositional Defiant Disorder', 'Gangguan Kecemasan', 'Specific Learning Disorder', 'Gangguan Tidur'],
    screeningTools: ['ASRS-v1.1 (Dewasa)', 'Conners-3', 'Vanderbilt ADHD Rating Scale']
  },
  {
    id: 'schizophrenia',
    icd10: 'F20.9',
    nameId: 'Skizofrenia',
    nameEn: 'Schizophrenia',
    chapter: 'Spektrum Skizofrenia & Psikotik',
    summary:
      'Gangguan psikotik kronis yang ditandai distorsi realitas (delusi, halusinasi), disorganisasi pikiran/perilaku, serta simtom negatif dengan penurunan fungsi sosial-okupasional yang nyata.',
    minDuration: 'Minimal 6 bulan gangguan berkelanjutan (dengan ≥1 bulan simtom fase aktif)',
    criteria: [
      { code: 'A', title: 'Simtom Fase Aktif (≥2 selama 1 bulan)', description: 'Minimal 2 gejala (salah satunya harus 1, 2, atau 3): (1) Delusi, (2) Halusinasi, (3) Bicara disorganisasi, (4) Perilaku sangat disorganisasi/katatonik, (5) Simtom negatif.' },
      { code: 'B', title: 'Penurunan Fungsi Bermakna', description: 'Fungsi kerja, relasi interpersonal, atau perawatan diri turun jauh di bawah level sebelum onset.' },
      { code: 'C', title: 'Durasi 6 Bulan & Eksklusi', description: 'Tanda gangguan bertahan ≥6 bulan; bukan skizoafektif, gangguan mood dengan ciri psikotik, atau efek zat/medis.' }
    ],
    specifiers: ['Episode Pertama (Akut/Remisi)', 'Episode Multipel', 'Dengan Katatonia'],
    differentialDiagnosis: ['Schizoaffective Disorder', 'Schizophreniform Disorder (<6 bulan)', 'Brief Psychotic Disorder (<1 bulan)', 'Bipolar I dengan ciri psikotik'],
    screeningTools: ['PANSS (Positive and Negative Syndrome Scale)', 'BPRS']
  },
  {
    id: 'bipolar-i',
    icd10: 'F31.9',
    nameId: 'Gangguan Bipolar I',
    nameEn: 'Bipolar I Disorder',
    chapter: 'Bipolar & Depresif',
    summary:
      'Ditandai oleh terjadinya minimal satu episode manik sepanjang hidup, yang dapat didahului atau diikuti oleh episode hipomanik maupun episode depresi mayor.',
    minDuration: 'Episode manik minimal 7 hari berturut-turut (atau durasi berapa pun bila memerlukan rawat inap)',
    criteria: [
      { code: 'A', title: 'Mood Meningkat/Iritabel & Energi Berlebih', description: 'Periode jelas mood meninggi, ekspansif, atau iritabel secara abnormal disertai peningkatan aktivitas/energi selama ≥1 minggu hampir sepanjang hari.' },
      { code: 'B', title: '≥3 Gejala Mania (≥4 bila mood hanya iritabel)', description: 'Grandiositas, kebutuhan tidur berkurang, banyak bicara, flight of ideas, distraktibilitas, peningkatan aktivitas terarah, atau keterlibatan berisiko tinggi.' },
      { code: 'C', title: 'Hendaya Berat / Psikosis / Rawat Inap', description: 'Cukup parah hingga mengganggu fungsi sosial-kerja secara nyata, membutuhkan rawat inap, atau disertai ciri psikotik.' }
    ],
    specifiers: ['Dengan Ciri Campuran (Mixed Features)', 'Dengan Rapid Cycling', 'Dengan Ciri Psikotik'],
    differentialDiagnosis: ['Bipolar II (hanya hipomania, tidak pernah mania)', 'Major Depressive Disorder', 'Cyclothymic Disorder', 'ADHD'],
    screeningTools: ['MDQ (Mood Disorder Questionnaire)', 'YMRS (Young Mania Rating Scale)']
  },
  {
    id: 'bipolar-ii',
    icd10: 'F31.81',
    nameId: 'Gangguan Bipolar II',
    nameEn: 'Bipolar II Disorder',
    chapter: 'Bipolar & Depresif',
    summary:
      'Memerlukan riwayat minimal satu episode hipomanik (≥4 hari) dan minimal satu episode depresi mayor (≥2 minggu), tanpa pernah mengalami episode manik penuh.',
    minDuration: 'Hipomania ≥4 hari berturut-turut & Depresi Mayor ≥2 minggu',
    criteria: [
      { code: 'A', title: 'Riwayat Episode Hipomanik', description: 'Peningkatan energi dan mood selama ≥4 hari yang teramati orang lain sebagai perubahan fungsi yang jelas, namun tidak menimbulkan hendaya berat atau psikosis.' },
      { code: 'B', title: 'Riwayat Episode Depresi Mayor', description: 'Minimal satu episode depresi mayor penuh selama ≥2 minggu.' },
      { code: 'C', title: 'Tidak Pernah Mengalami Episode Manik', description: 'Jika pernah ada episode manik penuh, diagnosis berubah menjadi Bipolar I.' }
    ],
    specifiers: ['Episode Kini Hipomanik / Depresif', 'Dengan Ciri Campuran', 'Dengan Pola Musiman'],
    differentialDiagnosis: ['Bipolar I Disorder', 'Major Depressive Disorder', 'Borderline Personality Disorder'],
    screeningTools: ['HCL-32 (Hypomania Checklist)', 'MDQ', 'PHQ-9']
  },
  {
    id: 'mdd',
    icd10: 'F32.9',
    nameId: 'Gangguan Depresi Mayor (MDD)',
    nameEn: 'Major Depressive Disorder',
    chapter: 'Bipolar & Depresif',
    summary:
      'Episode suasana hati tertekan dan/atau kehilangan minat atau kesenangan (anhedonia) disertai gangguan tidur, nafsu makan, energi, konsentrasi, rasa tidak berharga, atau ideasi bunuh diri.',
    minDuration: 'Minimal 2 minggu berturut-turut hampir setiap hari',
    criteria: [
      { code: 'A', title: '≥5 Gejala selama ≥2 Minggu', description: 'Harus mencakup minimal (1) Mood tertekan atau (2) Anhedonia, ditambah gejala berat badan/nafsu makan, insomnia/hipersomnia, agitasi/retardasi psikomotor, kelelahan, rasa bersalah berlebihan, sulit konsentrasi, atau pikiran kematian/bunuh diri.' },
      { code: 'B', title: 'Distres atau Hendaya Bermakna', description: 'Menimbulkan penderitaan klinis atau gangguan fungsi sosial, akademik, maupun pekerjaan.' },
      { code: 'C', title: 'Eksklusi Mania/Hipomania & Zat', description: 'Tidak pernah ada riwayat episode manik atau hipomanik dan bukan akibat efek fisiologis zat/medis.' }
    ],
    specifiers: ['Ringan / Sedang / Berat', 'Dengan Distres Cemas', 'Dengan Ciri Melankolis', 'Dengan Onset Peripartum'],
    differentialDiagnosis: ['Persistent Depressive Disorder (PDD ≥2 tahun)', 'Gangguan Bipolar', 'Adjustment Disorder', 'Duka Berkabung Normal'],
    screeningTools: ['PHQ-9', 'BDI-II', 'DASS-21 (Subskala Depresi)']
  },
  {
    id: 'gad',
    icd10: 'F41.1',
    nameId: 'Gangguan Kecemasan Menyeluruh (GAD)',
    nameEn: 'Generalized Anxiety Disorder',
    chapter: 'Kecemasan, OCD & Trauma',
    summary:
      'Kecemasan dan kekhawatiran berlebihan yang sulit dikendalikan mengenai berbagai peristiwa atau aktivitas sehari-hari (pekerjaan, studi, kesehatan, keuangan).',
    minDuration: 'Minimal 6 bulan (lebih banyak hari mengalami daripada tidak)',
    criteria: [
      { code: 'A', title: 'Kekhawatiran Berlebihan & Sulit Dikendalikan', description: 'Terjadi hampir setiap hari selama ≥6 bulan mengenai sejumlah topik atau aktivitas.' },
      { code: 'B', title: '≥3 Gejala Somatik/Kognitif (≥1 pada anak)', description: 'Gelisah/tegang, mudah lelah, sulit konsentrasi, mudah tersinggung, ketegangan otot, atau gangguan tidur.' },
      { code: 'C', title: 'Hendaya Klinis & Eksklusi', description: 'Tidak lebih baik dijelaskan oleh gangguan panik, fobia sosial, OCD, PTSD, atau hipertiroidisme.' }
    ],
    specifiers: ['Tingkat keparahan klinis dinilai via frekuensi dan hendaya fungsi'],
    differentialDiagnosis: ['Panic Disorder', 'Social Anxiety Disorder', 'Obsessive-Compulsive Disorder', 'Major Depressive Disorder'],
    screeningTools: ['GAD-7', 'DASS-21 (Subskala Kecemasan)', 'PSWQ']
  },
  {
    id: 'panic-disorder',
    icd10: 'F41.0',
    nameId: 'Gangguan Panik',
    nameEn: 'Panic Disorder',
    chapter: 'Kecemasan, OCD & Trauma',
    summary:
      'Serangan panik berulang yang muncul tiba-tiba (unexpected), diikuti kekhawatiran persisten akan serangan berikutnya atau perubahan perilaku menghindar yang maladaptif.',
    minDuration: 'Minimal 1 bulan kekhawatiran atau perubahan perilaku pasca-serangan',
    criteria: [
      { code: 'A', title: 'Serangan Panik Tak Terduga Berulang', description: 'Lonjakan rasa takut intens memuncak dalam hitungan menit dengan ≥4 dari 13 gejala (palpitasi, berkeringat, gemetar, sesak, nyeri dada, pusing, derealisasi, takut mati/kehilangan kendali).' },
      { code: 'B', title: 'Kekhawatiran/Penghindaran ≥1 Bulan', description: 'Kekhawatiran menetap akan serangan lanjutan atau perubahan perilaku signifikan untuk menghindari pemicu.' }
    ],
    specifiers: ['Dengan atau Tanpa Agorafobia (F40.00)'],
    differentialDiagnosis: ['Specific Phobia', 'Social Anxiety Disorder', 'Aritmia Jantung / Hipertiroidisme'],
    screeningTools: ['PDSS (Panic Disorder Severity Scale)', 'GAD-7']
  },
  {
    id: 'ocd',
    icd10: 'F42.2',
    nameId: 'Gangguan Obsesif-Kompulsif (OCD)',
    nameEn: 'Obsessive-Compulsive Disorder',
    chapter: 'Kecemasan, OCD & Trauma',
    summary:
      'Hadirnya obsesi (pikiran/dorongan intrusif yang menimbulkan kecemasan) dan/atau kompulsi (perilaku atau ritual mental berulang untuk menetralisir kecemasan tersebut).',
    minDuration: 'Menghabiskan waktu >1 jam/hari atau menyebabkan hendaya/distres bermakna',
    criteria: [
      { code: 'A', title: 'Adanya Obsesi, Kompulsi, atau Keduanya', description: 'Obsesi dialami sebagai intrusif dan tidak diinginkan; kompulsi dilakukan berdasarkan aturan kaku untuk meredakan distres.' },
      { code: 'B', title: 'Menyita Waktu / Hendaya Klinis', description: 'Memakan waktu >1 jam per hari atau mengganggu fungsi sosial, akademik, maupun pekerjaan.' }
    ],
    specifiers: ['Insight Baik/Cukup', 'Insight Buruk', 'Tidak Ada Insight / Keyakinan Delusional', 'Terkait Tic'],
    differentialDiagnosis: ['GAD (kekhawatiran realistis)', 'Obsessive-Compulsive Personality Disorder (OCPD)', 'Body Dysmorphic Disorder'],
    screeningTools: ['Y-BOCS (Yale-Brown Obsessive Compulsive Scale)', 'OCI-R']
  },
  {
    id: 'ptsd',
    icd10: 'F43.10',
    nameId: 'Gangguan Stres Pascatrauma (PTSD)',
    nameEn: 'Posttraumatic Stress Disorder',
    chapter: 'Kecemasan, OCD & Trauma',
    summary:
      'Respons psikologis berkepanjangan setelah paparan peristiwa traumatis berat (ancaman kematian, cedera serius, kekerasan seksual), mencakup intrusi, penghindaran, perubahan kognisi-mood, dan hiperarousal.',
    minDuration: 'Gejala berlangsung > 1 bulan pasca-trauma (bila 3 hari–1 bulan: Acute Stress Disorder)',
    criteria: [
      { code: 'A', title: 'Paparan Peristiwa Traumatis', description: 'Mengalami langsung, menyaksikan langsung, atau mengetahui peristiwa traumatis menimpa orang dekat.' },
      { code: 'B–E', title: '4 Klaster Gejala Utama', description: '(B) Intrusi/kilas balik, (C) Penghindaran stimulus trauma, (D) Perubahan negatif kognisi & suasana hati, (E) Perubahan gairah & reaktivitas (hipervigilans, mudah kaget).' }
    ],
    specifiers: ['Dengan Gejala Disosiatif (Depersonalisasi/Derealisasi)', 'Dengan Ekspresi Tertunda (≥6 bulan)'],
    differentialDiagnosis: ['Acute Stress Disorder (<1 bulan)', 'Adjustment Disorder', 'MDD', 'Panic Disorder'],
    screeningTools: ['PCL-5 (PTSD Checklist for DSM-5)', 'IES-R']
  },
  {
    id: 'anorexia-nervosa',
    icd10: 'F50.0',
    nameId: 'Anoreksia Nervosa',
    nameEn: 'Anorexia Nervosa',
    chapter: 'Disosiatif, Somatik & Makan',
    summary:
      'Pembatasan asupan energi yang menyebabkan berat badan sangat rendah, disertai ketakutan intens terhadap kenaikan berat badan dan distorsi persepsi bentuk tubuh.',
    minDuration: 'Pola pembatasan persisten dengan berat badan signifikan rendah',
    criteria: [
      { code: 'A', title: 'Pembatasan Asupan Energi', description: 'Menghasilkan berat badan secara signifikan rendah untuk usia, jenis kelamin, dan kesehatan fisik.' },
      { code: 'B', title: 'Ketakutan Intens Bertambah Berat', description: 'Rasa takut berlebih menjadi gemuk atau perilaku persisten mencegah kenaikan berat badan.' },
      { code: 'C', title: 'Distorsi Citra Tubuh', description: 'Gangguan cara mengalami berat/bentuk tubuh dan kurangnya pengakuan akan bahaya berat badan rendah.' }
    ],
    specifiers: ['Tipe Restriktif (F50.01)', 'Tipe Binge-Eating/Purging (F50.02)'],
    differentialDiagnosis: ['Bulimia Nervosa', 'Avoidant/Restrictive Food Intake Disorder (ARFID)', 'Hipertiroidisme'],
    screeningTools: ['EAT-26 (Eating Attitudes Test)', 'EDE-Q']
  },
  {
    id: 'insomnia-disorder',
    icd10: 'F51.01',
    nameId: 'Gangguan Insomnia',
    nameEn: 'Insomnia Disorder',
    chapter: 'Tidur & Neurokognitif',
    summary:
      'Ketidakpuasan terhadap kuantitas atau kualitas tidur berupa kesulitan memulai tidur, mempertahankan tidur, atau terbangun terlalu dini meski tersedia kesempatan tidur cukup.',
    minDuration: 'Minimal 3 malam per minggu selama minimal 3 bulan',
    criteria: [
      { code: 'A', title: 'Keluhan Tidur Persisten', description: 'Sulit memulai tidur, sering terbangun dan sulit tidur kembali, atau bangun dini hari tanpa bisa tidur lagi.' },
      { code: 'B', title: 'Dampak Fungsi Siang Hari', description: 'Menimbulkan kelelahan, gangguan atensi/memori, iritabilitas, atau penurunan performa studi/kerja.' }
    ],
    specifiers: ['Episodik (1–3 bulan)', 'Persisten (≥3 bulan)', 'Rekuren'],
    differentialDiagnosis: ['Circadian Rhythm Sleep-Wake Disorders', 'Obstructive Sleep Apnea', 'Restless Legs Syndrome'],
    screeningTools: ['ISI (Insomnia Severity Index)', 'PSQI (Pittsburgh Sleep Quality Index)']
  },
  {
    id: 'bpd',
    icd10: 'F60.3',
    nameId: 'Gangguan Kepribadian Ambang (BPD)',
    nameEn: 'Borderline Personality Disorder',
    chapter: 'Disruptif, Kepribadian & Gender',
    summary:
      'Pola ketidakstabilan relasi interpersonal, citra diri, dan afek yang pervasif, disertai impulsivitas mencolok yang dimulai sejak dewasa awal.',
    minDuration: 'Pola pervasif dan stabil sejak dewasa awal lintas berbagai konteks',
    criteria: [
      { code: 'A', title: '≥5 dari 9 Kriteria Khas', description: 'Upaya panik menghindari penelantaran, pola relasi ekstrem (idealisasi–devaluasi), gangguan identitas, impulsivitas berisiko, perilaku menyakiti diri/bunuh diri berulang, ketidakstabilan afek, rasa hampa kronis, kemarahan intens, atau ideasi paranoid/disosiatif sementara akibat stres.' }
    ],
    specifiers: ['Asesmen komorbiditas depresi, PTSD, dan penyalahgunaan zat sangat dianjurkan'],
    differentialDiagnosis: ['Bipolar II Disorder (perubahan mood episodik vs reaktif cepat)', 'Complex PTSD', 'Histrionic Personality Disorder'],
    screeningTools: ['MSI-BPD (McLean Screening Instrument)', 'PAI-BOR']
  },
  {
    id: 'alcohol-use-disorder',
    icd10: 'F10.20',
    nameId: 'Gangguan Penggunaan Alkohol',
    nameEn: 'Alcohol Use Disorder',
    chapter: 'Zat & Adiksi',
    summary:
      'Pola penggunaan alkohol bermasalah yang menyebabkan hendaya klinis atau distres, ditunjukkan oleh hilangnya kontrol, kegagalan peran sosial, toleransi, atau gejala putus zat.',
    minDuration: 'Minimal 2 dari 11 kriteria dalam periode 12 bulan',
    criteria: [
      { code: 'A', title: 'Kontrol Terganggu & Konsekuensi Sosial', description: 'Minum lebih banyak/lama dari rencana, keinginan berhenti gagal, craving kuat, mengabaikan kewajiban, serta terus minum meski merusak relasi atau kesehatan.' },
      { code: 'B', title: 'Kriteria Farmakologis', description: 'Toleransi (butuh dosis lebih tinggi) dan/atau gejala putus zat (withdrawal).' }
    ],
    specifiers: ['Ringan (2–3 gejala)', 'Sedang (4–5 gejala)', 'Berat (≥6 gejala)'],
    differentialDiagnosis: ['Konsumsi Alkohol Non-Patologis', 'Gangguan Bipolar Episode Manik'],
    screeningTools: ['AUDIT (Alcohol Use Disorders Identification Test)', 'CAGE']
  }
];

export const DSM_DATA: DsmDisorder[] = [...CORE_DSM, ...EXTRA_DSM];

