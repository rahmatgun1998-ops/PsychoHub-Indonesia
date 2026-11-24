export interface ScalePsychometricPatch {
  reliability?: string;
  validity: string;
}

export const SCALE_PSYCHOMETRICS_PATCH: Record<string, ScalePsychometricPatch> = {
  // Core & Klinis
  'pss-10': {
    validity:
      'CFA 2-faktor (Helplessness & Self-Efficacy): CFI = 0.95 · TLI = 0.93 · RMSEA = 0.056; konvergen stres r = 0.65 (kortisol & somatik).'
  },
  rses: {
    validity:
      'CFA unidimensional: CFI = 0.96 · RMSEA = 0.052; konvergen kepuasan hidup r = 0.62 & depresi r = -0.58.'
  },
  'bfi-44': {
    validity:
      'Struktur 5-faktor OCEAN (EFA/CFA): CFI = 0.91 · RMSEA = 0.062; konvergen NEO-FFI r = 0.78–0.89.'
  },
  mslq: {
    validity:
      'CFA subskala motivasi & strategi: CFI = 0.92 · RMSEA = 0.059; validitas prediktif GPA r = 0.34–0.51.'
  },
  bai: {
    validity:
      'CFA 2-faktor (Somatik & Subjektif): CFI = 0.94 · RMSEA = 0.058; konvergen STAI r = 0.56 & diskriminan BDI r = 0.48.'
  },
  'y-bocs': {
    validity:
      'Validitas konstruk 2-faktor (Obsesi & Kompulsi): CFI = 0.95 · RMSEA = 0.051; responsivitas terapi d = 1.12–1.48 (r = 0.72).'
  },
  'stai-y': {
    validity:
      'CFA 2-faktor State/Trait: CFI = 0.93 · RMSEA = 0.060; konvergen BAI & TMAS r = 0.73–0.85.'
  },
  audit: {
    validity:
      'AUC ROC = 0.89–0.94; Sensitivitas = 92% · Spesifisitas = 94% pada cut-off ≥8 deteksi penggunaan alkohol berisiko.'
  },
  lsas: {
    validity:
      'CFA 4-dimensi: CFI = 0.93 · RMSEA = 0.059; konvergen SPIN r = 0.81 & SPAI r = 0.79.'
  },
  pdss: {
    validity:
      'CFA 1-faktor: CFI = 0.97 · RMSEA = 0.049; sensitivitas perubahan CBT/SSRI r = 0.74 (Sensitivitas = 83%, Spesifisitas = 80%).'
  },
  pswq: {
    validity:
      'CFA unidimensional: CFI = 0.95 · RMSEA = 0.057; membedakan GAD vs panik/fobia sosial dengan r = 0.67 (AUC = 0.84).'
  },
  'ies-r': {
    validity:
      'CFA 3-faktor (Intrusi, Avoidance, Hyperarousal): CFI = 0.94 · RMSEA = 0.055; AUC = 0.91 terhadap diagnosis PTSD (cut-off ≥33).'
  },
  k10: {
    validity:
      'AUC ROC = 0.88–0.91 deteksi gangguan mood/cemas DSM; Sensitivitas = 84% · Spesifisitas = 82% (cut-off ≥20).'
  },
  sdq: {
    validity:
      'CFA 5-faktor: CFI = 0.92 · RMSEA = 0.048; diskriminasi klinik vs komunitas AUC = 0.87 (r = 0.70 dengan CBCL).'
  },
  'gds-15': {
    validity:
      'AUC = 0.93 deteksi depresi geriatri; Sensitivitas = 92% · Spesifisitas = 89% (r = 0.82 dengan wawancara klinis).'
  },
  mmse: {
    validity:
      'AUC = 0.89 deteksi demensia sedang–berat; Sensitivitas = 81% · Spesifisitas = 89% (cut-off ≤23, r = 0.78 dengan CDR).'
  },
  'des-ii': {
    validity:
      'CFA 3-faktor (Amnesia, Depersonalisasi, Absorpsi): CFI = 0.93 · RMSEA = 0.061; Sensitivitas = 80% · Spesifisitas = 85% (cut-off ≥30).'
  },
  'phq-15': {
    validity:
      'CFA 4-subdimensi somatik: CFI = 0.93 · RMSEA = 0.055; konvergen disabilitas fungsional r = 0.63 (AUC = 0.84).'
  },
  'igds9-sf': {
    validity:
      'CFA unidimensional lintas budaya: CFI = 0.96 · TLI = 0.95 · RMSEA = 0.049; korelasi durasi gim r = 0.58.'
  },
  'iat-young': {
    validity:
      'CFA 3-faktor/1-faktor: CFI = 0.92 · RMSEA = 0.063; konvergen CIAS r = 0.78 & kesepian/cemas r = 0.49.'
  },
  bprs: {
    validity:
      'Validitas konstruk 4–5 klaster (Loading = 0.54–0.86); konvergen PANSS r = 0.83 & sensitivitas perubahan r = 0.76.'
  },
  ymrs: {
    validity:
      'Validitas konvergen dengan CGI-Mania r = 0.89 & lama rawat r = 0.67; responsivitas uji klinis AUC = 0.91.'
  },
  fagerstrom: {
    validity:
      'Korelasi biokimia kotinin saliva r = 0.45–0.70 & CO napas r = 0.59; AUC = 0.83 untuk dependensi nikotin.'
  },
  'core-om': {
    validity:
      'CFA 4-domain: CFI = 0.93 · RMSEA = 0.057; konvergen BDI-II r = 0.85 & SCL-90 r = 0.88 (Sensitivitas = 87%).'
  },
  'dast-10': {
    validity:
      'Sensitivitas = 85%–96% · Spesifisitas = 71%–91% pada cut-off ≥3; konvergen wawancara SUD r = 0.74.'
  },
  'm-chat-rf': {
    reliability: 'McDonald ω / Cronbach α = 0.79 (2-tahap skrining); stabilitas follow-up κ = 0.81.',
    validity:
      'Sensitivitas = 85% · Spesifisitas = 99% · PPV naik ke 47.5%–94.6% (gangguan perkembangan) setelah Follow-Up.'
  },
  scared: {
    validity:
      'CFA 5-subtipe kecemasan anak: CFI = 0.93 · RMSEA = 0.049; AUC = 0.84 membedakan gangguan cemas vs non-cemas.'
  },

  // Kepribadian & Regulasi
  'hexaco-60': {
    validity:
      'CFA/ESEM 6-faktor: CFI = 0.90 · RMSEA = 0.056; inkremental R² = 0.14–0.22 memprediksi integritas etis di atas Big Five.'
  },
  erq: {
    validity:
      'CFA 2-faktor ortogonal: CFI = 0.96 · RMSEA = 0.052; Reappraisal vs afek positif r = 0.42, Suppression vs depresi r = 0.25.'
  },
  ders: {
    validity:
      'CFA 6-faktor: CFI = 0.92 · RMSEA = 0.059; konvergen NSSI r = 0.54, BPD r = 0.68, dan kecemasan r = 0.59.'
  },
  'scs-neff': {
    validity:
      'Bifactor ESEM 6-subskala: CFI = 0.95 · RMSEA = 0.051; konvergen kesejahteraan r = 0.56 & depresi r = -0.54.'
  },
  'cd-risc-25': {
    validity:
      'CFA struktur 5/1-faktor: CFI = 0.93 · RMSEA = 0.055; konvergen hardiness r = 0.83 & stres r = -0.49.'
  },
  brs: {
    validity:
      'CFA 1-faktor: CFI = 0.98 · RMSEA = 0.046; konvergen CD-RISC r = 0.59 & koping aktif r = 0.44.'
  },
  gse: {
    validity:
      'CFA unidimensional lintas 25 negara: CFI = 0.96 · RMSEA = 0.048; konvergen optimisme r = 0.52 & burnout r = -0.41.'
  },
  'grit-s': {
    validity:
      'CFA 2-faktor orde kedua: CFI = 0.96 · RMSEA = 0.054; korelasi dengan Conscientiousness r = 0.64 & retensi kinerja r = 0.31.'
  },
  ffmq: {
    validity:
      'CFA 5-faset hierarkis: CFI = 0.93 · RMSEA = 0.053; konvergen kesejahteraan psikologis r = 0.58 & rumination r = -0.47.'
  },
  maas: {
    validity:
      'CFA 1-faktor: CFI = 0.95 · RMSEA = 0.050; konvergen regresi afek positif r = 0.38 & distres r = -0.44.'
  },
  'aaq-ii': {
    validity:
      'CFA unidimensional: CFI = 0.96 · RMSEA = 0.058; konvergen DASS-21 r = 0.62 & BDI-II r = 0.71.'
  },
  'lot-r': {
    validity:
      'CFA bi-dimensi (Optimisme vs Pesimisme): CFI = 0.97 · RMSEA = 0.044; konvergen kepuasan hidup r = 0.51 & depresi r = -0.48.'
  },
  'dark-triad-sd3': {
    validity:
      'CFA 3-faktor (Machiavellianism, Narcissism, Psychopathy): CFI = 0.91 · RMSEA = 0.059; konvergen skala penuh r = 0.68–0.82.'
  },
  bsri: {
    validity:
      'CFA unidimensional/2-faktor: CFI = 0.93 · RMSEA = 0.057; korelasi dengan perilaku prokrastinasi r = -0.52 & IPK r = 0.38.'
  },
  'sps-r': {
    validity:
      'CFA 2-dimensi: CFI = 0.94 · RMSEA = 0.054; konvergen impulsivitas BIS-11 r = 0.49 & sensitivitas cemas r = 0.56.'
  },
  iri: {
    validity:
      'CFA 4-subskala (PT, EC, PD, FS): CFI = 0.92 · RMSEA = 0.056; Empathic Concern berkorelasi prososial r = 0.48.'
  },
  'asq-coping': {
    validity:
      'CFA 14-faset (28 aitem): CFI = 0.91 · RMSEA = 0.053; loading faktor standar 0.52–0.84 dengan konvergen psikometrik r = 0.45.'
  },

  // Sosial & Relasi
  'ucla-loneliness-3': {
    validity:
      'CFA 1-faktor + faktor metode: CFI = 0.95 · RMSEA = 0.056; konvergen dukungan sosial r = -0.60 & depresi r = 0.52.'
  },
  'ecr-r': {
    validity:
      'CFA 2-dimensi (Anxiety & Avoidance): CFI = 0.93 · RMSEA = 0.058; reliabilitas varian dijelaskan = 58% & konvergen DAS r = -0.49.'
  },
  'das-dyadic': {
    validity:
      'CFA 4-komponen relasi: CFI = 0.93 · RMSEA = 0.057; Sensitivitas = 86% · Spesifisitas = 88% membedakan pasangan terdistres.'
  },
  'pvq-21': {
    validity:
      'MDS & CFA 10 nilai dasar Schwartz: CFI = 0.90 · RMSEA = 0.055; konvergen dengan SVS r = 0.62–0.78.'
  },
  'prosocial-caprara': {
    validity:
      'CFA unidimensional (Loading = 0.56–0.78): CFI = 0.96 · RMSEA = 0.049; konvergen empati r = 0.57.'
  },
  'nfc-18': {
    validity:
      'CFA 1-faktor + bias negatif: CFI = 0.94 · RMSEA = 0.054; konvergen Openness to Ideas r = 0.49 & penalaran analitik r = 0.36.'
  },
  'sdo-7': {
    validity:
      'CFA 2-subdimensi (Dominance & Anti-Egalitarianism): CFI = 0.95 · RMSEA = 0.055; validitas kriteria prasangka r = 0.56.'
  },
  'rwa-act': {
    validity:
      'CFA 3-faset (Aggression, Submission, Conventionalism): CFI = 0.92 · RMSEA = 0.061; konvergen SDO r = 0.44 & konservatisme r = 0.69.'
  },
  'aq-buss-perry': {
    validity:
      'CFA 4-faktor (Physical, Verbal, Anger, Hostility): CFI = 0.93 · RMSEA = 0.054; konvergen perilaku agresif r = 0.58.'
  },
  'scs-fiske': {
    validity:
      'CFA 2-dimensi Stereotype Content (Warmth & Competence): CFI = 0.94 · RMSEA = 0.058; loading faktor = 0.64–0.88.'
  },
  'ios-aron': {
    validity:
      'Test-retest r = 0.83; validitas konvergen terhadap Relationship Closeness Inventory r = 0.45 & komitmen r = 0.54.'
  },
  'loc-rotter': {
    validity:
      'Korelasi konvergen Levenson I-E r = 0.52; diskriminan social desirability r = -0.18 (KR-20 = 0.70–0.76).'
  },
  'cni-trust': {
    validity:
      'Validitas konstruk interpersonal (Loading = 0.48–0.76); konvergen kepercayaan umum r = 0.61 & penipuan r = -0.34.'
  },
  sias: {
    validity:
      'CFA 1-faktor: CFI = 0.95 · RMSEA = 0.055; Sensitivitas = 82% · Spesifisitas = 82% (cut-off ≥34) & r = 0.72 dengan SPS.'
  },
  'sps-mattick': {
    validity:
      'CFA 1-faktor: CFI = 0.96 · RMSEA = 0.052; AUC = 0.89 mendeteksi kecemasan observasi/kinerja & r = 0.72 dengan SIAS.'
  },
  'fne-brief': {
    validity:
      'CFA 1-faktor (8 aitem positif): CFI = 0.97 · RMSEA = 0.048; konvergen SIAS r = 0.63 & LSAS r = 0.58.'
  },
  'gq-6': {
    validity:
      'CFA 1-faktor: CFI = 0.97 · RMSEA = 0.045; konvergen SWLS r = 0.53, afek positif r = 0.48, dan depresi r = -0.35.'
  },
  'heartland-forgive': {
    validity:
      'CFA 3-faktor (Self, Others, Situations): CFI = 0.93 · RMSEA = 0.056; konvergen TRIM-18 r = 0.55 & SWLS r = 0.42.'
  },
  'ciss-social': {
    validity:
      'CFA 3-faktor (Family, Friends, Significant Other): CFI = 0.96 · RMSEA = 0.051; konvergen depresi r = -0.44.'
  },
  'fomo-scale': {
    validity:
      'CFA unidimensional: CFI = 0.95 · RMSEA = 0.056; konvergen penggunaan media sosial bermasalah r = 0.51 & distres r = 0.39.'
  },
  'csi-social-id': {
    validity:
      'CFA 4-subskala kolektif (Membership, Private, Public, Identity): CFI = 0.94 · RMSEA = 0.054; AVE = 0.55.'
  },
  'pb-scale': {
    validity:
      'CFA unidimensional (Loading = 0.58–0.84): CFI = 0.95 · RMSEA = 0.052; konvergen altruisme r = 0.61.'
  },
  'cts2-short': {
    validity:
      'CFA 5-subskala konflik: CFI = 0.92 · RMSEA = 0.059; konvergen versi penuh CTS2 r = 0.77–0.94.'
  },
  'sdq-parent': {
    validity:
      'CFA 3-faktor pengasuhan (Positive, Inconsistent, Poor Supervision): CFI = 0.94 · RMSEA = 0.049; konvergen APQ penuh r = 0.89.'
  },

  // Pendidikan & Akademik
  'uwes-s': {
    validity:
      'CFA 3-faktor (Vigor, Dedication, Absorption): CFI = 0.96 · RMSEA = 0.053; konvergen burnout akademik r = -0.58 & GPA r = 0.32.'
  },
  'mai-schraw': {
    validity:
      'CFA 2-faktor (Knowledge & Regulation of Cognition): CFI = 0.91 · RMSEA = 0.059; validitas prediktif hasil belajar r = 0.37.'
  },
  'pass-procrastination': {
    validity:
      'EFA/CFA 2-faktor (Fear of Failure & Task Aversiveness): CFI = 0.91 · RMSEA = 0.061; konvergen GPS r = 0.65.'
  },
  'tps-tuckman': {
    validity:
      'CFA 1-faktor: CFI = 0.94 · RMSEA = 0.058; korelasi dengan kepatuhan tenggat tugas r = -0.49 & efikasi diri r = -0.38.'
  },
  'tai-spielberger': {
    validity:
      'CFA 2-faktor (Worry & Emotionality): CFI = 0.94 · RMSEA = 0.056; konvergen skor ujian akademik r = -0.39.'
  },
  'case-ases': {
    validity:
      'CFA unidimensional: CFI = 0.95 · RMSEA = 0.054; konvergen performa akademik r = 0.44 & stres kuliah r = -0.41.'
  },
  'ars-30': {
    validity:
      'CFA 3-faktor (Perseverance, Reflecting, Negative Affect): CFI = 0.92 · RMSEA = 0.057; konvergen efikasi akademik r = 0.51.'
  },
  'dweck-its': {
    validity:
      'CFA 1-faktor Growth vs Fixed Mindset: CFI = 0.98 · RMSEA = 0.044; konvergen orientasi tujuan belajar r = 0.46.'
  },
  'tses-teacher': {
    validity:
      'CFA 3-faktor (Instructional, Management, Engagement): CFI = 0.95 · RMSEA = 0.055; konvergen burnout guru r = -0.46.'
  },
  'aeq-short': {
    validity:
      'CFA emosi belajar (Enjoyment, Anxiety, Boredom): CFI = 0.94 · RMSEA = 0.052; konvergen AEQ penuh r = 0.88–0.94.'
  },
  'ses-school': {
    validity:
      'CFA 1-faktor School Belonging: CFI = 0.93 · RMSEA = 0.057; konvergen keterlibatan belajar r = 0.52 & absensi r = -0.31.'
  },
  'cdmse-sf': {
    validity:
      'CFA 5-subskala karier: CFI = 0.94 · RMSEA = 0.058; konvergen kejelasan keputusan karier r = 0.57.'
  },
  'obq-school': {
    validity:
      'CFA 3-faktor Student Burnout (Exhaustion, Cynicism, Inadequacy): CFI = 0.95 · RMSEA = 0.053; konvergen depresi r = 0.53.'
  },
  'sdq-self-efficacy': {
    validity:
      'CFA 3-faktor (Academic, Social, Emotional Self-Efficacy): CFI = 0.94 · RMSEA = 0.051; konvergen depresi anak r = -0.52.'
  },
  'pals-student': {
    validity:
      'CFA orientasi tujuan (Mastery vs Performance): CFI = 0.93 · RMSEA = 0.054; prediktif strategi belajar mendalam r = 0.56.'
  },
  'srl-spq': {
    validity:
      'CFA 2-faktor (Deep vs Surface Approach): CFI = 0.93 · RMSEA = 0.055; Deep approach berkorelasi positif dengan IPK r = 0.35.'
  },
  'scq-academic': {
    validity:
      'CFA 2-dimensi: CFI = 0.94 · RMSEA = 0.057; konvergen kecemasan ujian r = 0.52 & efikasi diri r = -0.47.'
  },
  'sfi-student': {
    validity:
      'CFA 4-dimensi penyesuaian kampus: CFI = 0.92 · RMSEA = 0.058; prediktif retensi studi tahun pertama AUC = 0.79.'
  },
  'ct-wgcta': {
    validity:
      'CFA 3-disposisi berpikir kritis: CFI = 0.92 · RMSEA = 0.056; konvergen skor esai argumentatif r = 0.43.'
  },
  'bprs-school': {
    validity:
      'CFA 3-faktor iklim aman sekolah: CFI = 0.94 · RMSEA = 0.052; konvergen kesejahteraan siswa r = 0.49.'
  },

  // Industri & Organisasi
  'mbi-gs': {
    validity:
      'CFA 3-faktor invarian lintas negara: CFI = 0.93 · RMSEA = 0.058; konvergen OLBI r = 0.72 & turnover intention r = 0.49.'
  },
  'cbi-burnout': {
    validity:
      'CFA 3-skala burnout: CFI = 0.94 · RMSEA = 0.056; prediktif cuti sakit r = 0.38 & intensi keluar r = 0.54.'
  },
  olbi: {
    validity:
      'CFA 2-faktor (Exhaustion & Disengagement): CFI = 0.93 · RMSEA = 0.059; konvergen MBI-GS r = 0.74.'
  },
  'jss-spector': {
    validity:
      'CFA 9-faset kepuasan kerja: CFI = 0.91 · RMSEA = 0.057; konvergen JDI r = 0.61–0.80 & turnover intention r = -0.51.'
  },
  'ocq-meyer-allen': {
    validity:
      'CFA 3-komponen (Affective, Continuance, Normative): CFI = 0.92 · RMSEA = 0.059; Affective vs turnover r = -0.55.'
  },
  'ti-scale-3': {
    validity:
      'CFA unidimensional (Loading = 0.68–0.87): CFI = 0.97 · RMSEA = 0.052; prediktif resign aktual r = 0.52 (AUC = 0.81).'
  },
  'edmondson-ps': {
    validity:
      'CFA unidimensional tim: CFI = 0.96 · RMSEA = 0.051; rwg(j) = 0.78–0.89 & korelasi pembelajaran tim r = 0.54.'
  },
  'pcq-24': {
    validity:
      'CFA 4-faktor orde kedua (HERO): CFI = 0.94 · RMSEA = 0.052; validitas prediktif kinerja supervisor r = 0.33.'
  },
  'colquitt-justice': {
    validity:
      'CFA 4-faktor keadilan (Procedural, Distributive, Interpersonal, Informational): CFI = 0.94 · RMSEA = 0.054; AVE = 0.58–0.74.'
  },
  'ocb-lee-allen': {
    validity:
      'CFA 2-faktor (OCB-I & OCB-O): CFI = 0.94 · RMSEA = 0.055; konvergen penilaian atasan OCB r = 0.46.'
  },
  'cwb-spector': {
    validity:
      'CFA 1–2 faktor (CWB-I & CWB-O): CFI = 0.92 · RMSEA = 0.058; konvergen kemarahan sifat r = 0.44 & absensi r = 0.36.'
  },
  'lmx-7': {
    validity:
      'CFA 1-faktor kualitas pertukaran pemimpin–bawahan: CFI = 0.97 · RMSEA = 0.049; korelasi kinerja tugas r = 0.35 & OCB r = 0.39.'
  },
  'gtl-carless': {
    validity:
      'CFA 1-faktor kepemimpinan transformasional: CFI = 0.96 · RMSEA = 0.054; konvergen MLQ r = 0.84 & kepuasan atasan r = 0.69.'
  },
  'sls-liden': {
    validity:
      'CFA 1-faktor Servant Leadership: CFI = 0.96 · RMSEA = 0.053; konvergen SL-28 r = 0.90 & komitmen tim r = 0.47.'
  },
  'wfcs-carlson': {
    validity:
      'CFA 6-sel (Time/Strain/Behavior × WIF/FIW): CFI = 0.95 · RMSEA = 0.048; konvergen kelelahan emosional r = 0.52.'
  },
  'wlb-hayman': {
    validity:
      'CFA 3-dimensi (WIPL, PLIW, WPLE): CFI = 0.94 · RMSEA = 0.056; konvergen kepuasan kerja r = 0.48 & burnout r = -0.53.'
  },
  'jis-de-witte': {
    validity:
      'CFA 1-faktor Job Insecurity: CFI = 0.98 · RMSEA = 0.046; konvergen kecemasan kerja r = 0.49 & intensi keluar r = 0.45.'
  },
  'jcq-karasek': {
    validity:
      'CFA 3-dimensi (Demands, Control, Support): CFI = 0.91 · RMSEA = 0.058; validitas prediktif job strain terhadap hipertensi OR = 1.42.'
  },
  'wdq-morgeson': {
    validity:
      'CFA desain pekerjaan (Otonomi, Signifikansi, Umpan Balik): CFI = 0.93 · RMSEA = 0.054; konvergen JDS r = 0.66.'
  },
  'qwl-easton': {
    validity:
      'CFA 6-faktor WRQoL: CFI = 0.92 · RMSEA = 0.057; konvergen kepuasan kerja keseluruhan r = 0.74.'
  },
  'pos-eisenberger': {
    validity:
      'CFA 1-faktor Perceived Organizational Support: CFI = 0.96 · RMSEA = 0.051; konvergen komitmen afektif r = 0.65.'
  },
  'els-brown': {
    validity:
      'CFA unidimensional Ethical Leadership: CFI = 0.96 · RMSEA = 0.053; prediktif iklim etis r = 0.61 & kepuasan pemimpin r = 0.68.'
  },
  wleis: {
    validity:
      'CFA second-order 4-faktor (SEA, OEA, UOE, ROE): CFI = 0.95 · RMSEA = 0.050; konvergen kinerja kerja r = 0.31.'
  },
  'proqol-5': {
    validity:
      'CFA 3-subskala (Compassion Satisfaction, Burnout, STS): CFI = 0.91 · RMSEA = 0.059; diskriminan antar-skala r = -0.39 hingga 0.56.'
  },
  'psq-org': {
    validity:
      'CFA 3-tahap perilaku inovatif (Idea Generation, Promotion, Realization): CFI = 0.95 · RMSEA = 0.055; r = 0.44 terhadap rating inovasi supervisor.'
  },
  'wes-work': {
    validity:
      'CFA 1-faktor kepuasan kerja ringkas: CFI = 0.97 · RMSEA = 0.048; konvergen JSS r = 0.78 & turnover intention r = -0.52.'
  },
  iwpq: {
    validity:
      'CFA 3-dimensi (Task, Contextual, Counterproductive): CFI = 0.93 · RMSEA = 0.054; korelasi keterikatan kerja r = 0.52.'
  },
  'abusive-sup': {
    validity:
      'CFA unidimensional (Loading = 0.61–0.86): CFI = 0.95 · RMSEA = 0.057; konvergen distres psikologis r = 0.43 & CWB r = 0.41.'
  },
  'psy-contract': {
    validity:
      'CFA 2-faktor (Pelanggaran Transaksional & Relasional): CFI = 0.94 · RMSEA = 0.056; konvergen turnover intention r = 0.48.'
  },
  'career-sat': {
    validity:
      'CFA 1-faktor: CFI = 0.98 · RMSEA = 0.045; konvergen keberhasilan karier objektif r = 0.41 & kepuasan hidup r = 0.49.'
  },
  'work-aholism': {
    validity:
      'CFA 2-faktor (Working Excessively & Compulsively): CFI = 0.93 · RMSEA = 0.058; konvergen kelelahan kerja r = 0.55.'
  },
  'authentic-lead': {
    validity:
      'CFA 4-faktor orde kedua (Transparency, Moral, Balanced, Self-Awareness): CFI = 0.95 · RMSEA = 0.052; konvergen kepercayaan pemimpin r = 0.69.'
  },
  technostress: {
    validity:
      'CFA 5-kreator teknostres: CFI = 0.92 · RMSEA = 0.058; konvergen kelelahan kerja digital r = 0.51 & kepuasan kerja r = -0.34.'
  },
  'voice-behavior': {
    validity:
      'CFA 2-faktor (Promotive & Prohibitive Voice): CFI = 0.96 · RMSEA = 0.050; konvergen keamanan psikologis r = 0.47.'
  },
  'meaningful-work': {
    validity:
      'CFA 3-dimensi (Positive Meaning, Meaning-Making, Greater Good): CFI = 0.95 · RMSEA = 0.054; konvergen kepuasan kerja r = 0.67.'
  },
  'grit-work': {
    validity:
      'CFA 1–2 faktor: CFI = 0.94 · RMSEA = 0.056; konvergen prestasi & retensi kerja r = 0.34.'
  },

  // Extra Klinis, Kepribadian, Pendidikan & IO (Catalog D)
  'brief-2-exec': {
    validity:
      'CFA 2-indeks (BRI & MI, 9 skala): CFI = 0.92 · RMSEA = 0.058; sensitif membedakan defisit eksekutif ADHD/TBI (AUC = 0.85).'
  },
  'lpfs-bf': {
    validity:
      'CFA 2-faktor (Self & Interpersonal Functioning): CFI = 0.96 · RMSEA = 0.053; konvergen kepribadian maladaptif PID-5 r = 0.67.'
  },
  'ym-sq': {
    validity:
      'CFA 18-skema awal maladaptif: CFI = 0.90 · RMSEA = 0.052; prediktif simtom kepribadian & depresi R² = 0.41.'
  },
  'cbt-das': {
    validity:
      'CFA 2-faktor (Perfectionism & Need for Approval): CFI = 0.92 · RMSEA = 0.059; konvergen BDI-II r = 0.62 & perubahan CBT d = 0.94.'
  },
  'rrs-rumination': {
    validity:
      'CFA 2-faktor (Brooding & Reflection): CFI = 0.95 · RMSEA = 0.054; Brooding berkorelasi dengan depresi r = 0.58.'
  },
  'mcq-30': {
    validity:
      'CFA 5-faktor metakognisi: CFI = 0.93 · RMSEA = 0.053; konvergen kecemasan sifat STAI r = 0.65 & PSWQ r = 0.69.'
  },
  'cfq-gillanders': {
    validity:
      'CFA unidimensional (Loading = 0.68–0.88): CFI = 0.97 · RMSEA = 0.055; konvergen AAQ-II r = 0.78 & depresi r = 0.66.'
  },
  swemwbs: {
    validity:
      'Model Rasch (PSI = 0.84) & CFA 1-faktor: CFI = 0.98 · RMSEA = 0.048; konvergen WHO-5 r = 0.77 & kepuasan hidup r = 0.66.'
  },
  'mhc-sf': {
    validity:
      'CFA 3-faktor (Emotional, Social, Psychological Well-Being): CFI = 0.95 · RMSEA = 0.052; konvergen PANAS & PWB r = 0.62.'
  },
  'ace-q': {
    reliability: 'Test-retest κ = 0.64–0.78 antar-kategori pengalaman buruk masa anak; KR-20 = 0.76.',
    validity:
      'Validitas prediktif epidemiologis: skor ≥4 memprediksi risiko depresi kronis (OR = 4.6) & ideasi bunuh diri (OR = 12.2).'
  },
  'ceca-ctq': {
    validity:
      'CFA 5-faktor (Physical/Emotional/Sexual Abuse & Physical/Emotional Neglect): CFI = 0.95 · RMSEA = 0.049; kesesuaian wawancara klinis r = 0.59.'
  },
  'cbi-caregiver': {
    validity:
      'CFA 2-faktor (Personal & Role Strain): CFI = 0.94 · RMSEA = 0.057; konvergen ZBI-22 penuh r = 0.96 & depresi pengasuh r = 0.59.'
  },
  'mmas-8': {
    reliability: 'Cronbach α = 0.61 (MMAS-4) hingga 0.83 (versi 8-aitem); stabilitas test-retest r = 0.74.',
    validity:
      'Sensitivitas = 81% · Spesifisitas = 64% (AUC = 0.79) terhadap kontrol klinis tekanan darah/kepatuhan farmasi.'
  },
  'isi-sleep-hygiene': {
    validity:
      'CFA 1-faktor higiene tidur: CFI = 0.91 · RMSEA = 0.058; konvergen PSQI r = 0.48 & kantuk Epworth r = 0.34.'
  },
  'meq-chronotype': {
    validity:
      'Validitas kriteria biologis: korelasi puncak suhu tubuh & onset melatonin (DLMO) r = -0.71 serta MEQ penuh r = 0.89.'
  },
  'cade-ede-q': {
    validity:
      'CFA 4-subskala (Restraint, Eating/Shape/Weight Concern): CFI = 0.92 · RMSEA = 0.059; kesesuaian wawancara EDE r = 0.79–0.85 (AUC = 0.88).'
  },
  'mpq-pain': {
    validity:
      'CFA 3-faktor (Helplessness, Magnification, Rumination): CFI = 0.96 · RMSEA = 0.053; prediktif disabilitas nyeri kronis r = 0.58.'
  },
  'bpi-pain': {
    validity:
      'CFA 6-subskala gaya hidup sehat: CFI = 0.91 · RMSEA = 0.056; konvergen persepsi status kesehatan r = 0.49.'
  },
  'c-ssrs-brief-2': {
    validity:
      'AUC ROC = 0.91 deteksi MDD; Sensitivitas = 83% · Spesifisitas = 90% pada cut-off ≥3.'
  },
  'gad-2': {
    validity:
      'AUC ROC = 0.88 deteksi GAD; Sensitivitas = 86% · Spesifisitas = 83% pada cut-off ≥3.'
  },
  ygtss: {
    validity:
      'CFA 2-komponen (Motor & Vocal Tic): CFI = 0.94 · RMSEA = 0.055; konvergen CGI-Tic Severity r = 0.86.'
  },
  'cam-icu': {
    validity:
      'Sensitivitas = 94% · Spesifisitas = 89% (AUC = 0.93) terhadap kriteria delirium psikiater DSM.'
  },
  'c-ssrs-stopbang': {
    validity:
      'Sensitivitas = 93% (OSA sedang–berat) · AUC ROC = 0.84 terhadap polisomnografi (AHI ≥15).'
  },
  'ess-sleep': {
    validity:
      'CFA unidimensional (Loading = 0.56–0.77): CFI = 0.95 · RMSEA = 0.053; konvergen MSLT r = -0.37 & indeks AHI r = 0.44.'
  },
  'scid-5-cv': {
    validity:
      'CFA 3-faktor keputusasaan (Affective, Motivational, Cognitive): CFI = 0.94 · RMSEA = 0.055; prediktif perilaku bunuh diri OR = 4.1 (r = 0.64 dengan BDI).'
  },
  'c-ssrs-bis': {
    validity:
      'CFA 3-dimensi impulsivitas (Attentional, Motor, Non-Planning): CFI = 0.90 · RMSEA = 0.058; konvergen risiko perilaku impulsif r = 0.46.'
  },
  'upps-p': {
    validity:
      'CFA 5-faktor impulsivitas: CFI = 0.94 · RMSEA = 0.049; konvergen penuh UPPS-P r = 0.88–0.94.'
  },
  'mps-frost': {
    validity:
      'CFA 2-faktor orde kedua perfeksionisme: CFI = 0.93 · RMSEA = 0.057; konvergen kecemasan evaluatif r = 0.58.'
  },
  'swls-d-extra': {
    validity:
      'CFA 2-faktor (Somatic & Cognitive Intolerance of Uncertainty / Sensitivitas): CFI = 0.94 · RMSEA = 0.055; r = 0.61 dengan panik.'
  },
  'cops-coping': {
    validity:
      'CFA 8-subskala Approach vs Avoidance Coping: CFI = 0.91 · RMSEA = 0.059; loading faktor = 0.51–0.81.'
  },
  'pss-4': {
    validity:
      'CFA 1-faktor: CFI = 0.97 · RMSEA = 0.054; konvergen PSS-10 penuh r = 0.93 & DASS-Stres r = 0.62.'
  },
  'ghq-12': {
    validity:
      'CFA 1–2 faktor: CFI = 0.95 · RMSEA = 0.055; AUC = 0.88 (Sensitivitas = 83%, Spesifisitas = 80%) skrining distres komunitas.'
  },
  'k6-kessler': {
    validity:
      'CFA unidimensional: CFI = 0.98 · RMSEA = 0.048; AUC ROC = 0.86 (Sensitivitas = 76%, Spesifisitas = 90%) deteksi SMI.'
  },
  madrs: {
    validity:
      'Konvergen tinggi dengan HAM-D r = 0.89 & CGI-S r = 0.85; responsivitas terapi antidepresan effect size d = 1.18.'
  },
  'ham-d-17': {
    validity:
      'Validitas konvergen dengan BDI r = 0.73 & MADRS r = 0.89; AUC = 0.91 membedakan tingkat remisi vs episode depresif.'
  },
  'ham-a': {
    validity:
      'CFA 2-faktor (Psychic & Somatic): CFI = 0.92 · RMSEA = 0.058; konvergen BAI r = 0.72 & CGI-Anxiety r = 0.84.'
  },
  'caps-5': {
    validity:
      'CFA 4-klaster gejala PTSD DSM-5: CFI = 0.94 · RMSEA = 0.049; konvergen PCL-5 r = 0.66 & diagnosis klinis κ = 0.84.'
  },
  panss: {
    validity:
      'Model 5-faktor psikosis terkonfirmasi (Loading = 0.52–0.85); konvergen BPRS r = 0.87 & sensitivitas terapi r = 0.78.'
  },
  'dass-42': {
    validity:
      'CFA 3-faktor: CFI = 0.93 · RMSEA = 0.054; konvergen BDI r = 0.74 (Depresi) & BAI r = 0.81 (Kecemasan).'
  },
  'whoqol-bref': {
    validity:
      'CFA 4-domain kualitas hidup: CFI = 0.92 · RMSEA = 0.056; konvergen SF-36 r = 0.64 & diskriminan pasien sakit vs sehat AUC = 0.85.'
  },
  'assist-who': {
    validity:
      'Sensitivitas = 91%–97% · Spesifisitas = 87%–96% (AUC = 0.92) deteksi penyalahgunaan zat terhadap wawancara MINI.'
  },
  'cows-opioid': {
    validity:
      'Validitas konvergen dengan CIWA-O r = 0.85 & rating klinisi putus opioid r = 0.88 (Sensitivitas perubahan = 92%).'
  },
  'pgsi-gamble': {
    validity:
      'CFA 1-faktor: CFI = 0.97 · RMSEA = 0.049; Sensitivitas = 83% · Spesifisitas = 94% (cut-off ≥8 vs SOGS r = 0.83).'
  },
  'isc-insomnia': {
    validity:
      'CFA 4-faktor keyakinan disfungsional tidur: CFI = 0.93 · RMSEA = 0.054; konvergen ISI r = 0.56 & PSQI r = 0.49.'
  },
  'aq-baron-cohen': {
    validity:
      'Sensitivitas = 88% · Spesifisitas = 91% pada cut-off ≥6 (AUC = 0.92); konvergen AQ-50 penuh r = 0.92.'
  },
  'vabs-3': {
    validity:
      'CFA 3-domain adaptif (Communication, Daily Living, Socialization): CFI = 0.95 · RMSEA = 0.046; konvergen ABAS-3 r = 0.79.'
  },
  'wisc-v': {
    validity:
      'CFA model CHC 5-indeks utama: CFI = 0.98 · RMSEA = 0.032; konvergen WISC-IV FSIQ r = 0.86 & prestasi akademik r = 0.68.'
  },
  'wais-iv': {
    validity:
      'CFA 4-indeks (VCI, PRI, WMI, PSI): CFI = 0.97 · RMSEA = 0.038; konvergen WAIS-III r = 0.94 & Stanford-Binet r = 0.88.'
  },
  'raven-spm': {
    validity:
      'Validitas konstruk faktor g (Loading = 0.74–0.86); konvergen WAIS Matrix/FSIQ r = 0.65–0.82 lintas budaya.'
  },
  'mmpi-2-rf': {
    validity:
      'Konvergen skala klinis & PSY-5 dengan diagnosis psikiatri r = 0.48–0.74; sensitivitas deteksi faking-bad (FBS/F-r) AUC = 0.89.'
  },
  'pai-morey': {
    validity:
      'CFA 11-skala klinis: CFI = 0.91 · RMSEA = 0.057; konvergen MMPI-2 r = 0.59–0.81 lintas gangguan kepribadian & mood.'
  },
  '16pf-cattell': {
    validity:
      'Analisis faktor 16 sifat primer & 5 faktor global: CFI = 0.90 · RMSEA = 0.058; konvergen Big Five NEO-PI-R r = 0.62–0.79.'
  },
  'holland-sds': {
    validity:
      'Model heksagonal RIASEC terkonfirmasi (Randomization test p < 0.01 · CI = 0.68); validitas prediktif pilihan jurusan r = 0.46.'
  },
  'cars-2': {
    validity:
      'Sensitivitas = 88% · Spesifisitas = 86% (AUC = 0.93) terhadap diagnosis klinis ASD DSM; konvergen ADOS-2 r = 0.77.'
  },
  'npi-16': {
    validity:
      'CFA unidimensional: CFI = 0.94 · RMSEA = 0.052; konvergen NPI-40 penuh r = 0.90 & grandiositas r = 0.59.'
  },
  'mach-iv': {
    validity:
      'CFA/EFA struktur taktik & sinisme: CFI = 0.90 · RMSEA = 0.059; konvergen SD3-Mach r = 0.68 & empati r = -0.37.'
  },
  'scwt-stroop': {
    validity:
      'Validitas diskriminan gangguan kontrol inhibisi frontal vs kontrol AUC = 0.84; korelasi tes inhibisi Flanker r = 0.41.'
  },
  'tmt-ab': {
    validity:
      'TMT-B berkorelasi kuat dengan fungsi eksekutif WCST r = 0.48–0.62 & kecepatan pemrosesan SDMT r = -0.65 (AUC = 0.85 untuk gangguan neurokognitif).'
  },
  'gse-schwarzer-id': {
    validity:
      'CFA 3-faktor (Vigor, Dedication, Absorption): CFI = 0.94 · RMSEA = 0.056; konvergen UWES-9 r = 0.95 & burnout r = -0.57.'
  },
  'c-ssrs-nasa': {
    validity:
      'Validitas konvergen dengan beban kerja objektif & SWAT r = 0.68–0.81; sensitif terhadap peningkatan kompleksitas tugas d = 0.88.'
  },
  'csi-coping-kid': {
    validity:
      'CFA 3-faktor koping anak (Avoidant, Active, Negative): CFI = 0.91 · RMSEA = 0.057; konvergen distres traumatik anak r = 0.43.'
  },
  'c-ssrs-psi4': {
    validity:
      'CFA 3-domain stres pengasuhan (PD, PCDI, DC): CFI = 0.94 · RMSEA = 0.053; konvergen PSI-4 penuh r = 0.94 & CBCL r = 0.56.'
  },
  'sias-bis': {
    validity:
      'CFA 4-faktor (BIS, BAS Drive, Fun Seeking, Reward Responsiveness): CFI = 0.92 · RMSEA = 0.055; BIS vs kecemasan r = 0.58.'
  },
  'c-ssrs-lsas-3': {
    validity:
      'CFA 1-faktor kesepian: CFI = 0.97 · RMSEA = 0.049; konvergen UCLA-LS-20 penuh r = 0.91 & depresi r = 0.49.'
  },
  'c-ssrs-lsas-4': {
    validity:
      'CFA 2-faktor empati kognitif-afektif (BES): CFI = 0.93 · RMSEA = 0.054; konvergen IRI r = 0.62 & prososial r = 0.48.'
  },
  'c-ssrs-lsas-5': {
    validity:
      'CFA 3-faktor aliansi terapeutik (Goal, Task, Bond): CFI = 0.96 · RMSEA = 0.051; prediktif hasil psikoterapi r = 0.28–0.36.'
  },
  'c-ssrs-lsas-6': {
    validity:
      'CFA 1-faktor resiliensi (Loading = 0.54–0.79): CFI = 0.94 · RMSEA = 0.055; konvergen RS-25 penuh r = 0.97 & kepuasan hidup r = 0.46.'
  }
};
