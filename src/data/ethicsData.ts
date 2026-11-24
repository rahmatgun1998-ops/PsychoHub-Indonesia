import { EthicsArticle, EthicsDilemma, EthicsPrinciple } from '../types';

export const ETHICS_PRINCIPLES: EthicsPrinciple[] = [
  {
    code: 'Prinsip A',
    title: 'Penghormatan pada Harkat dan Martabat Manusia',
    summary:
      'Menghargai hak asasi, privasi, kerahasiaan, otonomi pengambilan keputusan (informed consent), serta menghindari diskriminasi budaya, agama, gender, maupun status.'
  },
  {
    code: 'Prinsip B',
    title: 'Integritas dan Sikap Ilmiah',
    summary:
      'Menjunjung kejujuran, objektivitas ilmiah, akurasi data, tidak memalsukan hasil penelitian/asesmen, serta transparan mengenai peran profesional.'
  },
  {
    code: 'Prinsip C',
    title: 'Profesionalisme dan Kompetensi',
    summary:
      'Bekerja hanya dalam batas kompetensi keilmuan dan kewenangan profesi (Psikolog vs Ilmuwan Psikologi), serta menjaga pemutakhiran keilmuan.'
  },
  {
    code: 'Prinsip D',
    title: 'Tanggung Jawab Sosial',
    summary:
      'Menggunakan ilmu dan praktik psikologi untuk kesejahteraan masyarakat, mencegah penyalahgunaan temuan psikologis, dan berkontribusi bagi kepentingan publik.'
  },
  {
    code: 'Prinsip E',
    title: 'Keadilan dan Manfaat (Beneficence & Non-Maleficence)',
    summary:
      'Mengupayakan manfaat sebesar-besarnya bagi pengguna layanan serta mencegah timbulnya bahaya psikologis maupun fisik.'
  }
];

export const ETHICS_ARTICLES: EthicsArticle[] = [
  {
    pasal: 'Pasal 7–11',
    topic: 'Batas Kewenangan: Psikolog vs Ilmuwan Psikologi',
    category: 'Praktik & Kewenangan',
    content:
      'Ilmuwan Psikologi (S1/S2 Sains) berwenang dalam riset, pengajaran, asesmen non-klinis, dan pengembangan alat ukur, namun TIDAK berwenang melakukan diagnosis gangguan mental klinis maupun psikoterapi. Layanan praktik psikologi klinis dan penetapan diagnosis hanya dilakukan Psikolog berizin SIPP/STR.',
    practicalTakeaway: 'Mahasiswa S1 atau asisten praktikum tidak boleh mendiagnosis klien secara mandiri atau memberi label gangguan DSM tanpa supervisi Psikolog berizin.'
  },
  {
    pasal: 'Pasal 20–23',
    topic: 'Informed Consent (Persetujuan Setelah Penjelasan)',
    category: 'Kerahasiaan & Informed Consent',
    content:
      'Setiap layanan asesmen, konseling, maupun penelitian psikologi wajib didahului penjelasan tertulis/lisan yang mudah dipahami mengenai tujuan, prosedur, potensi risiko, manfaat, batasan kerahasiaan, dan hak mengundurkan diri tanpa sanksi.',
    practicalTakeaway: 'Untuk partisipan di bawah usia 18 tahun atau penyandang hambatan kognitif berat, persetujuan wajib dimintakan dari orang tua/wali sah disertai persetujuan anak (assent).'
  },
  {
    pasal: 'Pasal 24–27',
    topic: 'Kerahasiaan Data Asesmen & Rekam Psikologis',
    category: 'Kerahasiaan & Informed Consent',
    content:
      'Psikolog dan peneliti wajib menjaga kerahasiaan identitas, lembar jawaban tes, rekaman wawancara, dan laporan pemeriksaan. Pembukaan kerahasiaan hanya diperbolehkan bila ada izin tertulis klien atau ancaman bahaya serius terhadap nyawa klien/orang lain.',
    practicalTakeaway: 'Jangan mengunggah foto lembar jawaban tes proyektif, skor IQ, atau identitas klien ke media sosial maupun grup percakapan publik.'
  },
  {
    pasal: 'Pasal 62–67',
    topic: 'Asesmen Psikologi & Keamanan Alat Tes',
    category: 'Asesmen Psikologi',
    content:
      'Penggunaan instrumen psikodiagnostik harus memperhatikan validitas, reliabilitas, kesesuaian norma budaya, dan tujuan pengukuran. Materi tes terstandar (seperti soal IQ, kartu Rorschach, atau kunci jawaban MMPI) wajib dilindungi kerahasiaannya agar tidak kehilangan validitas.',
    practicalTakeaway: 'Gunakan hanya skala yang memiliki bukti validitas terpublikasi atau hasil adaptasi ilmiah resmi dalam riset dan asesmen.'
  },
  {
    pasal: 'Pasal 45–52',
    topic: 'Etika Penelitian Skripsi, Adaptasi Skala & Publikasi Ilmiah',
    category: 'Penelitian & Publikasi',
    content:
      'Peneliti dilarang melakukan fabrikasi, falsifikasi data, atau plagiarisme. Pengutipan dan penggunaan instrumen psikologi orang lain wajib mencantumkan sumber asli secara akurat serta menghormati hak cipta atau izin adaptasi penulis.',
    practicalTakeaway: 'Selalu cantumkan sitasi APA 7 bagi penulis skala asli sekaligus penulis studi adaptasi Bahasa Indonesia.'
  }
];

export const ETHICS_DILEMMAS: EthicsDilemma[] = [
  {
    id: 'dilemma-1',
    title: 'Dilema 1: Permintaan HRD Membuka Hasil Tes Kepribadian Kandidat ke Publik',
    scenario:
      'Anda menjadi asisten peneliti proyek asesmen di sebuah perusahaan. Seorang manajer meminta Anda mengirimkan seluruh profil mentah kepribadian dan skor kecemasan setiap karyawan lewat grup WhatsApp divisi agar atasan langsung bisa membaca.',
    options: [
      {
        label: 'Mengirimkan file profil mentah ke grup karena manajer adalah pihak yang membiayai proyek',
        isEthical: false,
        feedback:
          'Melanggar Pasal 24–27 HIMPSI tentang kerahasiaan data asesmen. Pihak ketiga atau pemberi tugas hanya berhak menerima laporan ringkas relevan sesuai tujuan asesmen yang telah disetujui dalam informed consent, bukan data mentah sensitif di grup terbuka.',
        pasalRef: 'Pasal 24–27 Kode Etik HIMPSI'
      },
      {
        label: 'Menolak pengiriman ke grup publik dan hanya menyampaikan laporan kesesuaian kompetensi secara rahasia sesuai informed consent',
        isEthical: true,
        feedback:
          'Tepat! Anda melindungi kerahasiaan data sensitif subjek sambil tetap memenuhi laporan profesional sesuai kontrak tujuan asesmen kerja.',
        pasalRef: 'Prinsip A & Pasal 24–27 Kode Etik HIMPSI'
      }
    ]
  },
  {
    id: 'dilemma-2',
    title: 'Dilema 2: Teman Dekat Meminta Diagnosis Depresi dari Skor DASS-21',
    scenario:
      'Sebagai mahasiswa Psikologi semester 6, teman kos Anda mengisi skala DASS-21 yang Anda bagikan untuk latihan praktikum, lalu mendapat skor tinggi. Ia meminta Anda menuliskan surat keterangan bahwa ia mengidap Gangguan Depresi Mayor agar bisa mengajukan cuti kuliah.',
    options: [
      {
        label: 'Menerbitkan surat diagnosis MDD karena skor DASS-21 sudah masuk kategori sangat berat',
        isEthical: false,
        feedback:
          'Melanggar batas kewenangan (Pasal 7–11) dan penggunaan alat ukur (Pasal 62–67). DASS-21 adalah alat skrining/pengukuran tingkat gejala, bukan instrumen diagnosis klinis tunggal, dan mahasiswa/ilmuwan psikologi tidak berwenang menegakkan diagnosis.',
        pasalRef: 'Pasal 7–11 & Pasal 62–67 Kode Etik HIMPSI'
      },
      {
        label: 'Menjelaskan bahwa DASS-21 hanya skrining awal, tidak berwenang mendiagnosis, dan mendampinginya mengakses layanan Psikolog Klinis atau Psikiater kampus',
        isEthical: true,
        feedback:
          'Tepat! Anda menjaga batas kompetensi, menghindari kesalahan interpretasi instrumen skrining, dan tetap menunjukkan kepedulian melalui rujukan profesional yang aman.',
        pasalRef: 'Prinsip C, Pasal 7–11 & Pasal 62–67'
      }
    ]
  },
  {
    id: 'dilemma-3',
    title: 'Dilema 3: Mengubah Skala Berbahasa Inggris Secara Bebas Tanpa Prosedur Adaptasi',
    scenario:
      'Untuk mempercepat pengumpulan data skripsi, seorang mahasiswa menerjemahkan sendiri skala kecemasan klinis menggunakan penerjemah otomatis, menghapus 4 butir aitem yang dianggap sulit, lalu langsung menyebarkan kuesioner tanpa uji coba.',
    options: [
      {
        label: 'Melanjutkan pengambilan data agar target waktu sidang skripsi tercapai',
        isEthical: false,
        feedback:
          'Bertentangan dengan Prinsip B (Integritas Ilmiah) dan standar psikometri (Pasal 62–67). Memodifikasi dan menerjemahkan alat ukur secara sepihak tanpa prosedur adaptasi (forward-backward translation, expert judgment, uji validitas/reliabilitas) merusak validitas kesimpulan ilmiah.',
        pasalRef: 'Prinsip B & Pasal 62–67 Kode Etik HIMPSI'
      },
      {
        label: 'Mencari versi adaptasi resmi yang sudah divalidasi di jurnal psikometri Indonesia atau menjalankan prosedur adaptasi ITC lengkap dengan izin penulis',
        isEthical: true,
        feedback:
          'Tepat! Menggunakan skala adaptasi terpublikasi di jurnal psikometri Indonesia atau mengikuti pedoman adaptasi ITC menjaga mutu ilmiah dan menghormati hak cipta instrumen.',
        pasalRef: 'Pasal 45–52 & Pasal 62–67 Kode Etik HIMPSI'
      }
    ]
  }
];
