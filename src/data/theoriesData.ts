import { TheoryEntry } from '../types';
import { EXTRA_THEORIES } from './theoriesCatalog';

const CORE_THEORIES: TheoryEntry[] = [
  {
    id: 'hippocrates',
    name: 'Hippocrates',
    initial: 'H',
    theoryTitle: 'Teori Empat Temperamen (Humoral Theory)',
    yearNum: -400,
    yearDisplay: '±400 SM',
    field: 'Psikologi Umum dan Sejarah',
    summary:
      'Salah satu model awal yang menjelaskan kepribadian dan kondisi afektif manusia melalui keseimbangan empat cairan tubuh (darah, empedu kuning, empedu hitam, dan lendir).',
    coreConcepts: ['Sanguinis (optimis & sosial)', 'Koleris (ambisius & tegas)', 'Melankolis (analitis & sensitif)', 'Plegmatis (tenang & stabil)'],
    propositions: [
      'Perilaku dan suasana hati manusia dipengaruhi kondisi biologis tubuh, bukan sekadar kekuatan supranatural.',
      'Ketidakseimbangan cairan tubuh (humors) berkorelasi dengan kerentanan gangguan emosi seperti melankolia.',
      'Klasifikasi temperamen menjadi fondasi historis bagi teori kepribadian berbasis sifat (trait).'
    ],
    application: 'Menjadi titik awal pendekatan biologis-medis dalam psikopatologi dan tipologi kepribadian.',
    citationApa7: 'Hippocrates. (ca. 400 B.C.E./1923). On the nature of man (W. H. S. Jones, Trans.). Harvard University Press.'
  },
  {
    id: 'wundt',
    name: 'Wilhelm Wundt',
    initial: 'W',
    theoryTitle: 'Strukturalisme & Psikologi Eksperimental',
    yearNum: 1879,
    yearDisplay: '1879',
    field: 'Psikologi Umum dan Sejarah',
    summary:
      'Pendirian laboratorium psikologi pertama di Leipzig yang menandai lahirnya psikologi sebagai disiplin ilmu empiris mandiri dengan metode introspeksi terlatih.',
    coreConcepts: ['Introspeksi Eksperimental', 'Elemen Kesadaran', 'Sensasi & Afek', 'Apersepsi'],
    propositions: [
      'Kesadaran manusia dapat diurai menjadi elemen dasar berupa sensasi dan perasaan subjektif.',
      'Proses mental kompleks memerlukan metode eksperimen terkontrol untuk mengukur waktu reaksi dan persepsi.',
      'Psikologi budaya (Völkerpsychologie) melengkapi studi laboratorium untuk memahami bahasa dan norma.'
    ],
    application: 'Menetapkan standar pengukuran waktu reaksi dan protokol eksperimen psikofisika modern.',
    citationApa7: 'Wundt, W. (1874). Grundzüge der physiologischen Psychologie [Principles of physiological psychology]. Wilhelm Engelmann.'
  },
  {
    id: 'james',
    name: 'William James',
    initial: 'W',
    theoryTitle: 'Fungsionalisme & Aliran Kesadaran (Stream of Consciousness)',
    yearNum: 1890,
    yearDisplay: '1890',
    field: 'Psikologi Umum dan Sejarah',
    summary:
      'Memandang kesadaran bukan sebagai potongan statis, melainkan arus berkelanjutan yang berfungsi membantu individu beradaptasi dengan lingkungannya.',
    coreConcepts: ['Stream of Consciousness', 'Teori Emosi James-Lange', 'Habit Formation', 'Pragmatisme'],
    propositions: [
      'Kesadaran bersifat personal, terus berubah, berkesinambungan, dan selektif terhadap stimulus.',
      'Respons fisiologis muncul mendahului pelabelan kognitif emosi (teori emosi James-Lange).',
      'Kebiasaan terbentuk melalui pengulangan jalur saraf yang menghemat energi kognitif.'
    ],
    application: 'Mempengaruhi psikologi evolusioner, terapi kebiasaan, dan psikologi pendidikan terapan.',
    citationApa7: 'James, W. (1890). The principles of psychology. Henry Holt and Company.'
  },
  {
    id: 'pavlov',
    name: 'Ivan Pavlov',
    initial: 'I',
    theoryTitle: 'Pengkondisian Klasik (Classical Conditioning)',
    yearNum: 1897,
    yearDisplay: '1897',
    field: 'Psikologi Umum dan Sejarah',
    summary:
      'Menjelaskan bagaimana stimulus netral dapat memicu respons terkondisi setelah dipasangkan secara berulang dengan stimulus tak terkondisi.',
    coreConcepts: ['Unconditioned Stimulus (UCS)', 'Conditioned Stimulus (CS)', 'Extinction', 'Stimulus Generalization'],
    propositions: [
      'Asosiasi temporal antara CS dan UCS membentuk refleks terkondisi.',
      'Respons terkondisi akan melemah (extinction) bila CS disajikan berulang tanpa UCS.',
      'Individu dapat menggeneralisasi respons emosional pada stimulus yang mirip dengan CS asli.'
    ],
    application: 'Dasar intervensi desensitisasi sistematis dan terapi eksposur untuk fobia spesifik serta PTSD.',
    citationApa7: 'Pavlov, I. P. (1927). Conditioned reflexes: An investigation of the physiological activity of the cerebral cortex. Oxford University Press.'
  },
  {
    id: 'freud',
    name: 'Sigmund Freud',
    initial: 'S',
    theoryTitle: 'Psikoanalisis Klasik & Struktur Kepribadian',
    yearNum: 1900,
    yearDisplay: '1900',
    field: 'Psikologi Klinis',
    summary:
      'Menekankan peran ketidaksadaran, konflik intrapsikis antara Id, Ego, dan Superego, serta mekanisme pertahanan diri dalam membentuk kepribadian dan simtom klinis.',
    coreConcepts: ['Id, Ego & Superego', 'Alam Bawah Sadar', 'Defense Mechanisms', 'Tahap Psikoseksual'],
    propositions: [
      'Sebagian besar dorongan dan konflik psikologis beroperasi di luar kesadaran sadar.',
      'Kecemasan muncul ketika Ego kewalahan menjembatani tuntutan Id, norma Superego, dan realitas.',
      'Pengalaman relasional masa kanak-kanak membentuk pola transferensi pada usia dewasa.'
    ],
    application: 'Asosiasi bebas, analisis resistensi dan transferensi dalam psikoterapi psikodinamik.',
    citationApa7: 'Freud, S. (1923). Das Ich und das Es [The ego and the id]. Internationaler Psychoanalytischer Verlag.'
  },
  {
    id: 'taylor',
    name: 'Frederick Winslow Taylor',
    initial: 'F',
    theoryTitle: 'Manajemen Ilmiah (Scientific Management)',
    yearNum: 1911,
    yearDisplay: '1911',
    field: 'Psikologi Industri dan Organisasi',
    summary:
      'Pendekatan rasional-empiris pertama dalam organisasi kerja yang menekankan analisis gerak-waktu, standardisasi tugas, seleksi berbasis kemampuan, dan insentif kinerja.',
    coreConcepts: ['Time and Motion Study', 'Standardisasi Prosedur', 'Seleksi Ilmiah Pekerja', 'Sistem Upah Diferensial'],
    propositions: [
      'Setiap tugas kerja memiliki metode optimal yang dapat diukur secara objektif.',
      'Kesesuaian antara kapasitas pekerja dengan tuntutan pekerjaan meningkatkan efisiensi produksi.',
      'Pembagian peran yang jelas antara perencana manajerial dan pelaksana operasional mengurangi pemborosan kerja.'
    ],
    application: 'Fondasi awal analisis jabatan (job analysis), ergonomi kerja, dan desain sistem kompensasi berbasis output.',
    citationApa7: 'Taylor, F. W. (1911). The principles of scientific management. Harper & Brothers.'
  },
  {
    id: 'piaget',
    name: 'Jean Piaget',
    initial: 'J',
    theoryTitle: 'Teori Perkembangan Kognitif & Konstruktivisme',
    yearNum: 1923,
    yearDisplay: '1923',
    field: 'Psikologi Perkembangan',
    summary:
      'Menjelaskan bahwa anak membangun pengetahuan secara aktif melalui interaksi dengan lingkungan melewati empat tahap perkembangan kognitif yang berurutan.',
    coreConcepts: ['Skema (Schema)', 'Asimilasi & Akomodasi', 'Ekuilibrasi', '4 Tahap Kognitif (Sensorimotor–Formal Operasional)'],
    propositions: [
      'Perkembangan kognitif berlangsung melalui proses penyesuaian struktur mental terhadap pengalaman baru.',
      'Kematangan biologis dan eksplorasi aktif mendorong pergeseran dari berpikir konkret menuju abstrak-hipotetis.',
      'Setiap tahap memiliki karakteristik logika khas seperti permanensi objek dan konservasi.'
    ],
    application: 'Perancangan kurikulum berbasis tahap usia dan asesmen kesiapan belajar anak.',
    citationApa7: 'Piaget, J. (1952). The origins of intelligence in children. International Universities Press.'
  },
  {
    id: 'vygotsky',
    name: 'Lev Vygotsky',
    initial: 'L',
    theoryTitle: 'Teori Sosiokultural & Zona Perkembangan Proksimal',
    yearNum: 1930,
    yearDisplay: '1930',
    field: 'Psikologi Pendidikan',
    summary:
      'Menegaskan bahwa perkembangan fungsi mental tinggi berakar pada interaksi sosial, bahasa, dan dukungan terbimbing (scaffolding) dari individu yang lebih kompeten.',
    coreConcepts: ['Zone of Proximal Development (ZPD)', 'Scaffolding', 'More Knowledgeable Other', 'Private Speech'],
    propositions: [
      'Pembelajaran yang efektif terjadi pada rentang antara kemampuan mandiri siswa dan potensi dengan bantuan.',
      'Bahasa berperan sebagai alat mediasi utama dalam internalisasi regulasi diri.',
      'Konteks budaya menentukan perangkat kognitif yang diprioritaskan dalam pendidikan.'
    ],
    application: 'Model pembelajaran kolaboratif, tutor sebaya, dan asesmen dinamis di kelas.',
    citationApa7: 'Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.'
  },
  {
    id: 'mayo',
    name: 'Elton Mayo',
    initial: 'E',
    theoryTitle: 'Efek Hawthorne & Human Relations Movement',
    yearNum: 1933,
    yearDisplay: '1933',
    field: 'Psikologi Industri dan Organisasi',
    summary:
      'Penelitian di pabrik Western Electric menunjukkan bahwa perhatian sosial, kohesi kelompok kerja, dan komunikasi suportif memengaruhi produktivitas lebih kuat dibanding faktor fisik semata.',
    coreConcepts: ['Hawthorne Effect', 'Kelompok Kerja Informal', 'Komunikasi Partisipatif', 'Moral Kerja'],
    propositions: [
      'Karyawan merespons positif ketika merasa pendapat dan kesejahteraannya diperhatikan oleh manajemen.',
      'Norma sosial dalam kelompok informal sering kali mengatur ritme kerja melebihi aturan formal.',
      'Kepuasan kerja dan relasi interpersonal merupakan penentu penting performa organisasi.'
    ],
    application: 'Pengembangan survei iklim kerja, manajemen partisipatif, dan program employee engagement.',
    citationApa7: 'Mayo, E. (1933). The human problems of an industrial civilization. Macmillan.'
  },
  {
    id: 'skinner',
    name: 'B. F. Skinner',
    initial: 'B',
    theoryTitle: 'Pengkondisian Operan (Operant Conditioning)',
    yearNum: 1938,
    yearDisplay: '1938',
    field: 'Psikologi Pendidikan',
    summary:
      'Menjelaskan bagaimana frekuensi perilaku sukarela dibentuk dan dipertahankan oleh konsekuensi yang mengikutinya berupa penguatan maupun hukuman.',
    coreConcepts: ['Positive & Negative Reinforcement', 'Punishment', 'Schedules of Reinforcement', 'Shaping'],
    propositions: [
      'Perilaku yang diikuti penguatan cenderung meningkat frekuensinya di masa depan.',
      'Jadwal penguatan intermiten (variable ratio) menghasilkan resistensi paling tinggi terhadap kepunahan.',
      'Perilaku kompleks dapat dibentuk bertahap melalui teknik shaping.'
    ],
    application: 'Applied Behavior Analysis (ABA), token economy di kelas, dan modifikasi perilaku klinis.',
    citationApa7: 'Skinner, B. F. (1953). Science and human behavior. Macmillan.'
  },
  {
    id: 'maslow',
    name: 'Abraham Maslow',
    initial: 'A',
    theoryTitle: 'Hierarki Kebutuhan & Psikologi Humanistik',
    yearNum: 1943,
    yearDisplay: '1943',
    field: 'Psikologi Umum dan Sejarah',
    summary:
      'Memandang manusia memiliki dorongan bawaan menuju pertumbuhan dan aktualisasi diri setelah kebutuhan dasar biologis dan psikologisnya terpenuhi secara memadai.',
    coreConcepts: ['Deficiency Needs vs Growth Needs', 'Rasa Aman & Afiliasi', 'Harga Diri', 'Aktualisasi Diri'],
    propositions: [
      'Kebutuhan tingkat rendah (fisiologis dan keamanan) menuntut pemenuhan lebih mendesak sebelum motivasi pertumbuhan muncul.',
      'Individu sehat bergerak melampaui sekadar reduksi ketegangan menuju realisasi potensi penuh.',
      'Lingkungan yang aman secara psikologis memfasilitasi munculnya kreativitas dan pengalaman puncak.'
    ],
    application: 'Kerangka kesejahteraan siswa, motivasi kerja karyawan, dan konseling berpusat pada pertumbuhan.',
    citationApa7: 'Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396.'
  },
  {
    id: 'lewin-org',
    name: 'Kurt Lewin (Organisasi)',
    initial: 'K',
    theoryTitle: 'Model Perubahan 3 Tahap (Unfreeze–Change–Refreeze)',
    yearNum: 1947,
    yearDisplay: '1947',
    field: 'Psikologi Industri dan Organisasi',
    summary:
      'Merumuskan perubahan organisasi sebagai keseimbangan dinamis antara kekuatan pendorong dan kekuatan penahan melalui tiga fase terstruktur.',
    coreConcepts: ['Force Field Analysis', 'Unfreezing', 'Changing / Moving', 'Refreezing'],
    propositions: [
      'Perilaku organisasi bertahan dalam ekuilibrium sementara antara kekuatan pendorong dan penghambat perubahan.',
      'Perubahan berkelanjutan menuntut pencairan norma lama sebelum membangun pola perilaku baru.',
      'Institusionalisasi kebiasaan baru (refreezing) mencegah organisasi kembali ke rutinitas lama.'
    ],
    application: 'Manajemen perubahan organisasi (change management), intervensi budaya kerja, dan action research.',
    citationApa7: 'Lewin, K. (1947). Frontiers in group dynamics: Concept, method and reality in social science. Human Relations, 1(1), 5–41.'
  },
  {
    id: 'erikson',
    name: 'Erik Erikson',
    initial: 'E',
    theoryTitle: 'Teori Perkembangan Psikososial 8 Tahap',
    yearNum: 1950,
    yearDisplay: '1950',
    field: 'Psikologi Perkembangan',
    summary:
      'Menggambarkan perkembangan kepribadian sepanjang rentang kehidupan melalui delapan krisis psikososial yang masing-masing menghasilkan kekuatan ego bila terselesaikan adaptif.',
    coreConcepts: ['Trust vs Mistrust', 'Identity vs Role Confusion', 'Intimacy vs Isolation', 'Generativity vs Stagnation'],
    propositions: [
      'Perkembangan berlangsung sepanjang hayat dari masa bayi hingga lanjut usia, bukan berhenti di masa remaja.',
      'Setiap tahap menghadirkan ketegangan normatif antara tuntutan sosial dan kesiapan psikologis individu.',
      'Pembentukan identitas diri merupakan tugas krusial masa remaja yang menopang keintiman dewasa awal.'
    ],
    application: 'Konseling transisi kehidupan, asesmen krisis identitas remaja, dan pendampingan lansia.',
    citationApa7: 'Erikson, E. H. (1950). Childhood and society. W. W. Norton & Company.'
  },
  {
    id: 'rogers',
    name: 'Carl Rogers',
    initial: 'C',
    theoryTitle: 'Terapi Berpusat pada Klien (Person-Centered Therapy)',
    yearNum: 1951,
    yearDisplay: '1951',
    field: 'Psikologi Klinis',
    summary:
      'Menegaskan bahwa perubahan terapeutik tumbuh ketika klien mengalami penerimaan tanpa syarat, empati akurat, dan ketulusan dari terapis.',
    coreConcepts: ['Unconditional Positive Regard', 'Congruence / Genuineness', 'Accurate Empathy', 'Self-Actualizing Tendency'],
    propositions: [
      'Ketidakselarasan (incongruence) antara self-concept dan pengalaman nyata memicu distres psikologis.',
      'Relasi terapeutik yang suportif sudah merupakan kondisi perlu dan cukup untuk mendorong pertumbuhan klien.',
      'Klien dipandang sebagai ahli atas pengalaman subjektifnya sendiri.'
    ],
    application: 'Fondasi keterampilan dasar konseling, wawancara motivasional, dan praktik psikoterapi humanistik.',
    citationApa7: 'Rogers, C. R. (1951). Client-centered therapy: Its current practice, implications, and theory. Houghton Mifflin.'
  },
  {
    id: 'festinger',
    name: 'Leon Festinger',
    initial: 'L',
    theoryTitle: 'Teori Disonansi Kognitif (Cognitive Dissonance)',
    yearNum: 1957,
    yearDisplay: '1957',
    field: 'Psikologi Sosial',
    summary:
      'Menjelaskan ketidaknyamanan psikologis ketika individu memegang dua keyakinan yang saling bertentangan atau bertindak tidak selaras dengan sikapnya sendiri.',
    coreConcepts: ['Ketegangan Disonansi', 'Rasionalisasi Pasca-Keputusan', 'Justifikasi Usaha', 'Perubahan Sikap'],
    propositions: [
      'Ketidaksesuaian antara sikap dan perilaku menimbulkan dorongan motivasional untuk mereduksi ketegangan.',
      'Individu dapat mengubah sikap, menambah keyakinan pendukung, atau meremehkan inkonsistensi.',
      'Insentif kecil untuk perilaku berlawanan sikap justru memicu perubahan sikap internal lebih besar.'
    ],
    application: 'Kampanye perubahan perilaku kesehatan, komunikasi persuasif, dan pemahaman bias konfirmasi.',
    citationApa7: 'Festinger, L. (1957). A theory of cognitive dissonance. Stanford University Press.'
  },
  {
    id: 'herzberg',
    name: 'Frederick Herzberg',
    initial: 'F',
    theoryTitle: 'Teori Dua Faktor (Motivator–Hygiene Theory)',
    yearNum: 1959,
    yearDisplay: '1959',
    field: 'Psikologi Industri dan Organisasi',
    summary:
      'Memisahkan faktor yang mencegah ketidakpuasan kerja (hygiene factors) dari faktor intrinsik yang benar-benar membangkitkan motivasi berprestasi (motivators).',
    coreConcepts: ['Faktor Hygiene (Gaji, Kebijakan)', 'Faktor Motivator (Pencapaian, Tanggung Jawab)', 'Job Enrichment'],
    propositions: [
      'Kepuasan kerja dan ketidakpuasan kerja bukan berada pada satu kontinum tunggal melainkan dua dimensi berbeda.',
      'Perbaikan gaji atau kondisi fisik mencegah ketidakpuasan tetapi tidak otomatis menciptakan motivasi intrinsik.',
      'Pengayaan pekerjaan melalui otonomi dan pengakuan bermakna mendorong komitmen tinggi.'
    ],
    application: 'Desain ulang pekerjaan (job enrichment) dan strategi retensi talenta di organisasi.',
    citationApa7: 'Herzberg, F., Mausner, B., & Snyderman, B. B. (1959). The motivation to work. John Wiley & Sons.'
  },
  {
    id: 'kohlberg',
    name: 'Lawrence Kohlberg',
    initial: 'L',
    theoryTitle: 'Teori Perkembangan Penalaran Moral',
    yearNum: 1958,
    yearDisplay: '1958',
    field: 'Psikologi Perkembangan',
    summary:
      'Memetakan evolusi pertimbangan moral individu ke dalam tiga tingkat utama dari orientasi kepatuhan eksternal menuju prinsip etika universal.',
    coreConcepts: ['Pre-conventional', 'Conventional (Norma Sosial)', 'Post-conventional (Prinsip Etis)', 'Dilema Moral'],
    propositions: [
      'Kematangan moral diukur dari struktur alasan di balik keputusan, bukan sekadar isi jawabannya.',
      'Diskusi dilema moral yang memicu konflik kognitif mendorong transisi ke tahap penalaran lebih tinggi.',
      'Sebagian besar orang dewasa berada pada tahap konvensional dalam pengambilan keputusan sehari-hari.'
    ],
    application: 'Pendidikan karakter di sekolah, pelatihan etika profesi, dan studi psikologi forensik.',
    citationApa7: 'Kohlberg, L. (1958). The development of modes of moral thinking and choice in the years 10 to 16. University of Chicago.'
  },
  {
    id: 'bowlby',
    name: 'John Bowlby',
    initial: 'J',
    theoryTitle: 'Teori Kelekatan (Attachment Theory)',
    yearNum: 1969,
    yearDisplay: '1969',
    field: 'Psikologi Perkembangan',
    summary:
      'Menguraikan ikatan emosional evolusioner antara bayi dan pengasuh utama sebagai basis rasa aman yang membentuk model kerja internal relasi sepanjang hidup.',
    coreConcepts: ['Secure Base', 'Safe Haven', 'Internal Working Model', 'Separation Distress'],
    propositions: [
      'Kepekaan dan responsivitas pengasuh membentuk kelekatan aman (secure attachment).',
      'Model kerja internal tentang diri dan orang lain memandu ekspektasi dalam relasi romantis dan sosial dewasa.',
      'Gangguan kelekatan dini meningkatkan kerentanan terhadap regulasi emosi yang rapuh.'
    ],
    application: 'Intervensi pengasuhan, terapi keluarga berbasis kelekatan, dan asesmen relasi interpersonal.',
    citationApa7: 'Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books.'
  },
  {
    id: 'zimbardo',
    name: 'Philip Zimbardo',
    initial: 'P',
    theoryTitle: 'Situasionalisme, Peran Sosial & Deindividuasi',
    yearNum: 1971,
    yearDisplay: '1971',
    field: 'Psikologi Sosial',
    summary:
      'Menunjukkan betapa kuatnya peran institusional, anonimitas, dan tekanan situasi dalam menggeser perilaku individu melampaui watak personalnya.',
    coreConcepts: ['Kekuatan Situasi', 'Deindividuasi', 'Konformitas Peran', 'Efek Lucifer'],
    propositions: [
      'Struktur peran dan legitimasi otoritas dapat melemahkan kontrol moral pribadi secara cepat.',
      'Anonimitas kelompok meningkatkan risiko perilaku impulsif atau agresif melalui deindividuasi.',
      'Kesadaran kritis dan akuntabilitas personal berfungsi sebagai pelindung terhadap kepatuhan buta.'
    ],
    application: 'Analisis dinamika kelompok, pencegahan perundungan institusional, dan evaluasi etika eksperimen.',
    citationApa7: 'Zimbardo, P. G. (2007). The Lucifer effect: Understanding how good people turn evil. Random House.'
  },
  {
    id: 'bandura',
    name: 'Albert Bandura',
    initial: 'A',
    theoryTitle: 'Teori Kognitif Sosial & Efikasi Diri',
    yearNum: 1977,
    yearDisplay: '1977',
    field: 'Psikologi Sosial',
    summary:
      'Menjelaskan bahwa manusia belajar melalui observasi model sosial dan mengatur tindakannya melalui interaksi timbal balik antara faktor personal, perilaku, dan lingkungan.',
    coreConcepts: ['Observational Learning (Modeling)', 'Reciprocal Determinism', 'Self-Efficacy', 'Human Agency'],
    propositions: [
      'Pembelajaran dapat terjadi secara vikarius dengan mengamati konsekuensi yang dialami orang lain.',
      'Keyakinan akan kemampuan diri (self-efficacy) menentukan ketekunan saat menghadapi hambatan.',
      'Lingkungan, kognisi, dan perilaku saling memengaruhi secara dua arah.'
    ],
    application: 'Program pelatihan keterampilan sosial, intervensi efikasi akademik siswa, dan promosi kesehatan.',
    citationApa7: 'Bandura, A. (1977). Social learning theory. Prentice-Hall.'
  },
  {
    id: 'beck',
    name: 'Aaron T. Beck',
    initial: 'A',
    theoryTitle: 'Terapi Kognitif (Cognitive Therapy / CBT)',
    yearNum: 1979,
    yearDisplay: '1979',
    field: 'Psikologi Klinis',
    summary:
      'Merumuskan bahwa distres emosional dan gangguan depresi atau kecemasan berakar pada distorsi kognitif dan keyakinan inti (core beliefs) yang maladaptif.',
    coreConcepts: ['Cognitive Triad', 'Automatic Negative Thoughts', 'Cognitive Distortions', 'Restrukturisasi Kognitif'],
    propositions: [
      'Bukan peristiwa itu sendiri, melainkan interpretasi kognitif terhadap peristiwa yang memicu emosi disfungsional.',
      'Individu depresi cenderung memegang pandangan negatif tentang diri, dunia, dan masa depan.',
      'Pengujian bukti secara kolaboratif (guided discovery) melemahkan keyakinan otomatis yang bias.'
    ],
    application: 'Standar emas psikoterapi berbasis bukti (CBT) untuk depresi, kecemasan, OCD, dan insomnia.',
    citationApa7: 'Beck, A. T., Rush, A. J., Shaw, B. F., & Emery, G. (1979). Cognitive therapy of depression. Guilford Press.'
  },
  {
    id: 'bronfenbrenner',
    name: 'Urie Bronfenbrenner',
    initial: 'U',
    theoryTitle: 'Teori Sistem Ekologis (Bioecological Model)',
    yearNum: 1979,
    yearDisplay: '1979',
    field: 'Psikologi Pendidikan',
    summary:
      'Memandang perkembangan anak dan keberhasilan belajarnya sebagai hasil interaksi berlapis mulai dari keluarga terdekat hingga kebijakan budaya makro.',
    coreConcepts: ['Mikrosistem', 'Mesosistem', 'Eksosistem', 'Makrosistem & Kronosistem'],
    propositions: [
      'Perkembangan tidak dapat dipisahkan dari konteks sosial berlapis tempat individu tinggal.',
      'Keterhubungan positif antara rumah dan sekolah (mesosistem) memperkuat resiliensi akademik anak.',
      'Perubahan historis dan peristiwa hidup (kronosistem) mengubah dinamika seluruh sistem.'
    ],
    application: 'Asesmen psikologi sekolah komprehensif dan intervensi komunitas berbasis keluarga-sekolah.',
    citationApa7: 'Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.'
  },
  {
    id: 'kahneman',
    name: 'Daniel Kahneman',
    initial: 'D',
    theoryTitle: 'Teori Prospek & Sistem Ganda Berpikir (System 1 & 2)',
    yearNum: 1979,
    yearDisplay: '1979',
    field: 'Psikologi Umum dan Sejarah',
    summary:
      'Mengungkap bagaimana manusia mengambil keputusan di bawah ketidakpastian menggunakan heuristik cepat yang rentan terhadap bias kognitif sistematis.',
    coreConcepts: ['System 1 (Cepat & Otomatis)', 'System 2 (Lambat & Analitis)', 'Loss Aversion', 'Heuristik & Bias'],
    propositions: [
      'Kerugian psikologis terasa kira-kira dua kali lebih menyakitkan dibanding keuntungan bernilai setara.',
      'System 1 mengandalkan asosiasi cepat dan representativeness sehingga rentan terhadap framing effect.',
      'Keputusan analitis menuntut aktivasi sadar System 2 yang membutuhkan energi kognitif.'
    ],
    application: 'Ekonomi perilaku, debiasing keputusan klinis, dan perancangan kebijakan publik (nudging).',
    citationApa7: 'Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47(2), 263–291.'
  },
  {
    id: 'locke-latham',
    name: 'Edwin Locke & Gary Latham',
    initial: 'E',
    theoryTitle: 'Teori Penetapan Tujuan (Goal-Setting Theory)',
    yearNum: 1990,
    yearDisplay: '1990',
    field: 'Psikologi Industri dan Organisasi',
    summary:
      'Membuktikan secara empiris bahwa tujuan yang spesifik dan menantang menghasilkan kinerja kerja jauh lebih tinggi dibanding instruksi umum seperti "lakukan yang terbaik".',
    coreConcepts: ['Spesifisitas Tujuan', 'Tingkat Tantangan', 'Komitmen Tujuan', 'Umpan Balik Berkala'],
    propositions: [
      'Tujuan yang spesifik dan sulit mengarahkan perhatian, mengerahkan usaha, dan meningkatkan persistensi.',
      'Umpan balik yang jelas diperlukan agar pekerja dapat menyesuaikan strategi pencapaian target.',
      'Kompleksitas tugas dan efikasi diri memoderasi hubungan antara tingkat kesulitan tujuan dan performa.'
    ],
    application: 'Sistem manajemen kinerja (OKR/KPI), coaching manajerial, dan penetapan target belajar mahasiswa.',
    citationApa7: 'Locke, E. A., & Latham, G. P. (1990). A theory of goal setting & task performance. Prentice-Hall.'
  },
  {
    id: 'seligman',
    name: 'Martin Seligman',
    initial: 'M',
    theoryTitle: 'Psikologi Positif & Model Kesejahteraan PERMA',
    yearNum: 1998,
    yearDisplay: '1998',
    field: 'Psikologi Pendidikan',
    summary:
      'Menggeser fokus psikologi dari sekadar memperbaiki patologi menuju penguatan karakter, emosi positif, keterlibatan bermakna, dan flourishing.',
    coreConcepts: ['Positive Emotion', 'Engagement (Flow)', 'Relationships', 'Meaning & Accomplishment (PERMA)'],
    propositions: [
      'Kesejahteraan sejati bukan sekadar ketiadaan gangguan mental, melainkan hadirnya elemen flourishing.',
      'Pengenalan kekuatan karakter (character strengths) meningkatkan resiliensi dan motivasi intrinsik.',
      'Optimisme yang dipelajari (learned optimism) melindungi individu dari ketidakberdayaan.'
    ],
    application: 'Kurikulum kesejahteraan sekolah (positive education) dan intervensi psikologi positif klinis.',
    citationApa7: 'Seligman, M. E. P. (2011). Flourish: A visionary new understanding of happiness and well-being. Free Press.'
  },
  {
    id: 'hayes',
    name: 'Steven C. Hayes',
    initial: 'S',
    theoryTitle: 'Acceptance and Commitment Therapy (ACT)',
    yearNum: 1999,
    yearDisplay: '1999',
    field: 'Psikologi Klinis',
    summary:
      'Psikoterapi gelombang ketiga CBT yang menargetkan fleksibilitas psikologis melalui penerimaan pengalaman internal, defusi kognitif, kesadaran kini, dan tindakan berbasis nilai.',
    coreConcepts: ['Psychological Flexibility', 'Cognitive Defusion', 'Acceptance', 'Committed Action & Values'],
    propositions: [
      'Upaya menghindari pikiran atau emosi menyakitkan (experiential avoidance) justru memperparah penderitaan psikologis.',
      'Defusi kognitif membantu klien melihat pikiran sebagai kata/sensasi mental, bukan fakta absolut.',
      'Hidup bermakna dicapai melalui komitmen tindakan yang selaras dengan nilai personal meski kecemasan tetap hadir.'
    ],
    application: 'Intervensi kecemasan kronis, nyeri kronis, depresi berulang, serta pencegahan burnout.',
    citationApa7: 'Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (1999). Acceptance and commitment therapy: An experiential approach to behavior change. Guilford Press.'
  }
];

export const THEORIES_DATA: TheoryEntry[] = [...CORE_THEORIES, ...EXTRA_THEORIES].sort(
  (a, b) => a.yearNum - b.yearNum
);

