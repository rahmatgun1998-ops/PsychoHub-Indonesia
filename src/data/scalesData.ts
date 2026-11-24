import { PsychScale } from '../types';
import { EXTRA_SCALES_A } from './scalesCatalogA';
import { EXTRA_SCALES_B } from './scalesCatalogB';
import { EXTRA_SCALES_C } from './scalesCatalogC';
import { EXTRA_SCALES_D } from './scalesCatalogD';
import { SCALE_PSYCHOMETRICS_PATCH } from './scalePsychometricsPatch';

const CORE_SCALES: PsychScale[] = [
  {
    id: 'dass-21',
    acronym: 'DASS-21',
    name: 'Depression Anxiety Stress Scales–21',
    authors: 'Lovibond & Lovibond',
    year: 1995,
    category: 'Klinis & Kesehatan Mental',
    itemCount: 21,
    description:
      'Mengukur tingkat keparahan gejala negatif emosional selama satu minggu terakhir pada tiga dimensi: Depresi, Kecemasan, dan Stres.',
    likertMin: 0,
    likertMax: 3,
    likertLabels: ['0 = Tidak sesuai sama sekali', '1 = Kadang-kadang', '2 = Lumayan sering', '3 = Sangat sering'],
    sampleItems: [
      { number: 1, text: 'Saya merasa sulit untuk menenangkan diri sendiri (Stres).' },
      { number: 2, text: 'Saya menyadari mulut saya terasa kering (Kecemasan).' },
      { number: 3, text: 'Saya sama sekali tidak dapat merasakan perasaan positif (Depresi).' },
      { number: 4, text: 'Saya mengalami kesulitan bernapas tanpa aktivitas fisik berat (Kecemasan).' },
      { number: 5, text: 'Saya merasa sulit untuk berinisiatif melakukan sesuatu (Depresi).' },
      { number: 6, text: 'Saya cenderung bereaksi berlebihan terhadap suatu situasi (Stres).' }
    ],
    reliability: 'Cronbach α = 0.87 (Depresi), 0.85 (Kecemasan), 0.89 (Stres); Total α = 0.93',
    validity: 'Struktur 3-faktor terkonfirmasi melalui CFA (CFI > 0.92, RMSEA < 0.06) serta validitas konvergen kuat terhadap BDI dan BAI.',
    scoringGuide:
      'Jumlahkan skor 7 aitem per subskala lalu kalikan 2 agar setara norma DASS-42. Depresi berat ≥21; Kecemasan berat ≥15; Stres berat ≥26.',
    citationApa7: 'Lovibond, P. F., & Lovibond, S. H. (1995). The structure of negative emotional states: Comparison of the Depression Anxiety Stress Scales (DASS) with the Beck Depression and Anxiety Inventories. Behaviour Research and Therapy, 33(3), 335–343.'
  },
  {
    id: 'pss-10',
    acronym: 'PSS-10',
    name: 'Perceived Stress Scale–10',
    authors: 'Cohen, Kamarck, & Mermelstein',
    year: 1983,
    category: 'Klinis & Kesehatan Mental',
    itemCount: 10,
    description:
      'Mengukur sejauh mana situasi hidup selama sebulan terakhir dipersepsikan tidak terduga, tidak terkendali, dan penuh beban.',
    likertMin: 0,
    likertMax: 4,
    likertLabels: ['0 = Tidak pernah', '1 = Hampir tidak pernah', '2 = Kadang-kadang', '3 = Cukup sering', '4 = Sangat sering'],
    sampleItems: [
      { number: 1, text: 'Seberapa sering Anda merasa kesal karena sesuatu yang terjadi secara tidak terduga?' },
      { number: 2, text: 'Seberapa sering Anda merasa tidak mampu mengendalikan hal-hal penting dalam hidup Anda?' },
      { number: 4, text: 'Seberapa sering Anda merasa yakin dengan kemampuan menangani masalah pribadi Anda?', reverse: true },
      { number: 5, text: 'Seberapa sering Anda merasa segala sesuatu berjalan sesuai keinginan Anda?', reverse: true },
      { number: 10, text: 'Seberapa sering Anda merasa kesulitan menumpuk begitu tinggi sehingga tidak mampu mengatasinya?' }
    ],
    reliability: 'Cronbach α = 0.78–0.91 lintas populasi dewasa & mahasiswa.',
    validity: 'Validitas konstruk dua faktor (Perceived Helplessness & Perceived Self-Efficacy) dan korelasi positif dengan kortisol serta keluhan somatik.',
    scoringGuide:
      'Balik skor aitem 4, 5, 7, dan 8 (0→4, 1→3, 2→2, 3→1, 4→0) lalu jumlahkan semua 10 aitem. 0–13: Stres Rendah; 14–26: Stres Sedang; 27–40: Stres Tinggi.',
    citationApa7: 'Cohen, S., Kamarck, T., & Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24(4), 385–396.'
  },
  {
    id: 'gad-7',
    acronym: 'GAD-7',
    name: 'Generalized Anxiety Disorder–7',
    authors: 'Spitzer, Kroenke, Williams, & Löwe',
    year: 2006,
    category: 'Klinis & Kesehatan Mental',
    itemCount: 7,
    description:
      'Instrumen skrining cepat dan pengukuran tingkat keparahan gejala gangguan kecemasan menyeluruh selama 2 minggu terakhir.',
    likertMin: 0,
    likertMax: 3,
    likertLabels: ['0 = Tidak sama sekali', '1 = Beberapa hari', '2 = Lebih dari separuh hari', '3 = Hampir setiap hari'],
    sampleItems: [
      { number: 1, text: 'Merasa gugup, cemas, atau gelisah.' },
      { number: 2, text: 'Tidak mampu menghentikan atau mengendalikan rasa khawatir.' },
      { number: 3, text: 'Terlalu mengkhawatirkan berbagai hal yang berbeda.' },
      { number: 4, text: 'Sulit merasa santai.' },
      { number: 7, text: 'Merasa takut seolah sesuatu yang mengerikan akan terjadi.' }
    ],
    reliability: 'Cronbach α = 0.92; reliabilitas test-retest ICC = 0.83.',
    validity: 'Sensitivitas 89% dan spesifisitas 82% untuk mendeteksi GAD pada titik potong skor ≥10.',
    scoringGuide:
      'Total skor 0–21. 0–4: Minimal; 5–9: Ringan; 10–14: Sedang (indikasi evaluasi klinis); 15–21: Berat.',
    citationApa7: 'Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: The GAD-7. Archives of Internal Medicine, 166(10), 1092–1097.'
  },
  {
    id: 'phq-9',
    acronym: 'PHQ-9',
    name: 'Patient Health Questionnaire–9',
    authors: 'Kroenke, Spitzer, & Williams',
    year: 2001,
    category: 'Klinis & Kesehatan Mental',
    itemCount: 9,
    description:
      'Instrumen skrining dan pemantauan keparahan depresi yang memetakan langsung 9 kriteria diagnosis Episode Depresi Mayor DSM dalam 2 minggu terakhir.',
    likertMin: 0,
    likertMax: 3,
    likertLabels: ['0 = Tidak sama sekali', '1 = Beberapa hari', '2 = Lebih dari separuh hari', '3 = Hampir setiap hari'],
    sampleItems: [
      { number: 1, text: 'Kurang berminat atau bergairah dalam melakukan apapun.' },
      { number: 2, text: 'Merasa murung, sedih, atau putus asa.' },
      { number: 3, text: 'Sulit tidur/mudah terbangun, atau terlalu banyak tidur.' },
      { number: 4, text: 'Merasa lelah atau kurang bertenaga.' },
      { number: 9, text: 'Pikiran bahwa lebih baik Anda mati atau ingin melukai diri sendiri dengan cara tertentu.' }
    ],
    reliability: 'Cronbach α = 0.86–0.89 pada layanan primer & populasi umum.',
    validity: 'Skor ≥10 memiliki sensitivitas 88% dan spesifisitas 88% untuk Major Depressive Disorder.',
    scoringGuide:
      'Total skor 0–27. 0–4: Minimal; 5–9: Ringan; 10–14: Sedang; 15–19: Agak Berat; 20–27: Berat. Item 9 > 0 wajib ditindaklanjuti asesmen risiko bunuh diri.',
    citationApa7: 'Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. Journal of General Internal Medicine, 16(9), 606–613.'
  },
  {
    id: 'rses',
    acronym: 'RSES',
    name: 'Rosenberg Self-Esteem Scale',
    authors: 'Rosenberg',
    year: 1965,
    category: 'Kepribadian & Regulasi',
    itemCount: 10,
    description:
      'Skala standar global paling luas digunakan untuk mengukur harga diri global (global self-worth) melalui evaluasi diri positif dan negatif.',
    likertMin: 1,
    likertMax: 4,
    likertLabels: ['1 = Sangat Tidak Setuju', '2 = Tidak Setuju', '3 = Setuju', '4 = Sangat Setuju'],
    sampleItems: [
      { number: 1, text: 'Secara keseluruhan, saya puas dengan diri saya sendiri.' },
      { number: 2, text: 'Terkadang saya berpikir bahwa saya sama sekali tidak berguna.', reverse: true },
      { number: 3, text: 'Saya merasa memiliki sejumlah kualitas yang baik.' },
      { number: 7, text: 'Saya merasa bahwa saya adalah orang yang berharga, setidaknya setara dengan orang lain.' },
      { number: 9, text: 'Secara umum, saya cenderung merasa bahwa saya adalah orang yang gagal.', reverse: true }
    ],
    reliability: 'Cronbach α = 0.77–0.88; stabilitas test-retest r = 0.82–0.85.',
    validity: 'Validitas konvergen positif terhadap kepuasan hidup dan afek positif; korelasi negatif terhadap depresi dan kecemasan sosial.',
    scoringGuide:
      'Aitem 2, 5, 6, 8, dan 9 diberi skor terbalik. Rentang total 10–40; skor lebih tinggi menunjukkan harga diri lebih tinggi.',
    citationApa7: 'Rosenberg, M. (1965). Society and the adolescent self-image. Princeton University Press.'
  },
  {
    id: 'bfi-44',
    acronym: 'BFI-44',
    name: 'Big Five Inventory–44',
    authors: 'John, Donahue, & Kentle',
    year: 1991,
    category: 'Kepribadian & Regulasi',
    itemCount: 44,
    description:
      'Mengukur lima dimensi utama kepribadian model Five-Factor: Extraversion, Agreeableness, Conscientiousness, Neuroticism, dan Openness to Experience.',
    likertMin: 1,
    likertMax: 5,
    likertLabels: ['1 = Sangat Tidak Setuju', '2 = Tidak Setuju', '3 = Netral', '4 = Setuju', '5 = Sangat Setuju'],
    sampleItems: [
      { number: 1, text: 'Saya adalah seseorang yang banyak bicara (Extraversion).' },
      { number: 3, text: 'Saya melakukan pekerjaan dengan teliti dan tuntas (Conscientiousness).' },
      { number: 4, text: 'Saya mudah merasa murung atau tertekan (Neuroticism).' },
      { number: 7, text: 'Saya suka menolong dan tidak egois terhadap orang lain (Agreeableness).' },
      { number: 10, text: 'Saya ingin tahu mengenai banyak hal yang berbeda (Openness).' }
    ],
    reliability: 'Cronbach α berkisar 0.75–0.88 di kelima dimensi lintas bahasa dan budaya.',
    validity: 'Validitas diskriminan dan konvergen kuat terhadap NEO-FFI dan TDA.',
    scoringGuide:
      'Hitung rata-rata tiap subskala setelah membalik skor 16 aitem reverse-coded.',
    citationApa7: 'John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy: History, measurement, and theoretical perspectives. In L. A. Pervin & O. P. John (Eds.), Handbook of personality: Theory and research (pp. 102–138). Guilford Press.'
  },
  {
    id: 'swls',
    acronym: 'SWLS',
    name: 'Satisfaction With Life Scale',
    authors: 'Diener, Emmons, Larsen, & Griffin',
    year: 1985,
    category: 'Sosial & Relasi',
    itemCount: 5,
    description:
      'Mengukur komponen evaluasi kognitif global terhadap kepuasan hidup seseorang secara keseluruhan menurut standar dirinya sendiri.',
    likertMin: 1,
    likertMax: 7,
    likertLabels: ['1 = Sangat Tidak Setuju', '2', '3', '4 = Netral', '5', '6', '7 = Sangat Setuju'],
    sampleItems: [
      { number: 1, text: 'Dalam banyak hal, kehidupan saya mendekati ideal yang saya harapkan.' },
      { number: 2, text: 'Kondisi kehidupan saya saat ini sangat baik.' },
      { number: 3, text: 'Saya merasa puas dengan kehidupan saya.' },
      { number: 4, text: 'Sejauh ini saya telah mendapatkan hal-hal penting yang saya inginkan dalam hidup.' },
      { number: 5, text: 'Jika saya bisa mengulang hidup kembali, hampir tidak ada hal yang akan saya ubah.' }
    ],
    reliability: 'Cronbach α = 0.87; koefisien stabilitas 2 bulan = 0.82.',
    validity: 'Struktur unidimensional konsisten (CFI > 0.97) dan sensitif terhadap perubahan kesejahteraan setelah peristiwa hidup.',
    scoringGuide:
      'Total skor 5–35. 31–35: Sangat Puas; 26–30: Puas; 21–25: Agak Puas; 20: Netral; 15–19: Agak Tidak Puas; 5–9: Sangat Tidak Puas.',
    citationApa7: 'Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49(1), 71–75.'
  },
  {
    id: 'mslq',
    acronym: 'MSLQ',
    name: 'Motivated Strategies for Learning Questionnaire',
    authors: 'Pintrich, Smith, Garcia, & McKeachie',
    year: 1991,
    category: 'Pendidikan & Akademik',
    itemCount: 81,
    description:
      'Mengukur orientasi motivasi belajar mahasiswa (efikasi diri akademik, nilai tugas, kecemasan ujian) dan strategi belajar kognitif-metakognitif.',
    likertMin: 1,
    likertMax: 7,
    likertLabels: ['1 = Sama sekali tidak sesuai diri saya', '2', '3', '4 = Netral', '5', '6', '7 = Sangat sesuai diri saya'],
    sampleItems: [
      { number: 1, text: 'Saya yakin dapat memahami materi paling sulit yang disampaikan dosen di kelas ini.' },
      { number: 2, text: 'Saya senang memilih tugas yang menantang agar bisa belajar hal baru.' },
      { number: 3, text: 'Ketika membaca bahan ajar, saya membuat pertanyaan sendiri untuk membantu fokus.' },
      { number: 4, text: 'Saya merasa gugup dan jantung berdebar saat mengerjakan ujian.' }
    ],
    reliability: 'Cronbach α subskala motivasi 0.62–0.93; strategi belajar 0.52–0.80.',
    validity: 'Validitas prediktif signifikan terhadap capaian indeks prestasi (GPA) mahasiswa.',
    scoringGuide:
      'Skor dihitung terpisah per subskala menggunakan nilai rata-rata aitem.',
    citationApa7: 'Pintrich, P. R., Smith, D. A. F., Garcia, T., & McKeachie, W. J. (1991). A manual for the use of the Motivated Strategies for Learning Questionnaire (MSLQ). University of Michigan.'
  },
  {
    id: 'uwes-9',
    acronym: 'UWES-9',
    name: 'Utrecht Work Engagement Scale–9',
    authors: 'Schaufeli, Bakker, & Salanova',
    year: 2006,
    category: 'Industri & Organisasi',
    itemCount: 9,
    description:
      'Mengukur keterikatan kerja positif karyawan yang dicirikan oleh energi tinggi (Vigor), keterlibatan bermakna (Dedication), dan penghayatan penuh (Absorption).',
    likertMin: 0,
    likertMax: 6,
    likertLabels: ['0 = Tidak pernah', '1', '2', '3 = Kadang-kadang', '4', '5', '6 = Selalu / Setiap hari'],
    sampleItems: [
      { number: 1, text: 'Di tempat kerja, saya merasa dipenuhi energi yang meluap-luap (Vigor).' },
      { number: 2, text: 'Saat bekerja, saya merasa kuat dan bersemangat (Vigor).' },
      { number: 3, text: 'Saya antusias terhadap pekerjaan saya (Dedication).' },
      { number: 4, text: 'Pekerjaan saya menginspirasi diri saya (Dedication).' },
      { number: 8, text: 'Saya larut sepenuhnya ketika sedang bekerja (Absorption).' }
    ],
    reliability: 'Cronbach α total = 0.85–0.92 lintas 10 negara.',
    validity: 'Model 3-faktor dan skor total berkorelasi negatif kuat dengan burnout dan intensi turnover.',
    scoringGuide:
      'Hitung rata-rata total atau per 3 subskala (rentang 0.00–6.00). Skor ≥4.67 tergolong tinggi.',
    citationApa7: 'Schaufeli, W. B., Bakker, A. B., & Salanova, M. (2006). The measurement of work engagement with a short questionnaire: A cross-national study. Educational and Psychological Measurement, 66(4), 701–716.'
  }
];

const RAW_SCALES: PsychScale[] = [
  ...CORE_SCALES,
  ...EXTRA_SCALES_A,
  ...EXTRA_SCALES_B,
  ...EXTRA_SCALES_C,
  ...EXTRA_SCALES_D
];

export const SCALES_DATA: PsychScale[] = RAW_SCALES.map((scale) => {
  const patch = SCALE_PSYCHOMETRICS_PATCH[scale.id];
  if (!patch) return scale;
  return {
    ...scale,
    reliability: patch.reliability ?? scale.reliability,
    validity: patch.validity
  };
});

