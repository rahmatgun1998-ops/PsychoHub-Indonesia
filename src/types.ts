export type ModuleTab =
  | 'landing'
  | 'dashboard'
  | 'teori'
  | 'dsm'
  | 'diagnosa'
  | 'alat-ukur'
  | 'adaptasi-skala'
  | 'artikel-jurnal'
  | 'kode-etik';

export type TheoryField =
  | 'Psikologi Industri dan Organisasi'
  | 'Psikologi Pendidikan'
  | 'Psikologi Klinis'
  | 'Psikologi Perkembangan'
  | 'Psikologi Sosial'
  | 'Psikologi Umum dan Sejarah';

export interface TheoryEntry {
  id: string;
  name: string;
  initial: string;
  theoryTitle: string;
  yearNum: number; // negative for BC
  yearDisplay: string;
  field: TheoryField;
  summary: string;
  coreConcepts: string[];
  propositions: string[];
  application: string;
  citationApa7: string;
}

export type DsmChapter =
  | 'Neurodevelopmental'
  | 'Spektrum Skizofrenia & Psikotik'
  | 'Bipolar & Depresif'
  | 'Kecemasan, OCD & Trauma'
  | 'Disosiatif, Somatik & Makan'
  | 'Tidur & Neurokognitif'
  | 'Disruptif, Kepribadian & Gender'
  | 'Zat & Adiksi';

export interface DsmCriterion {
  code: string;
  title: string;
  description: string;
}

export interface DsmDisorder {
  id: string;
  icd10: string;
  nameId: string;
  nameEn: string;
  chapter: DsmChapter;
  summary: string;
  minDuration: string;
  criteria: DsmCriterion[];
  specifiers: string[];
  differentialDiagnosis: string[];
  screeningTools: string[];
}

export interface DecisionStep {
  id: string;
  stepLabel: string;
  question: string;
  clinicalHint: string;
  options: {
    label: string;
    nextStepId?: string;
    conclusion?: {
      diagnosis: string;
      icd10: string;
      rationale: string;
      nextAction: string;
    };
  }[];
}

export interface DecisionPathway {
  id: string;
  title: string;
  chiefComplaint: string;
  description: string;
  initialStepId: string;
  steps: Record<string, DecisionStep>;
}

export interface ClinicalCaseExercise {
  id: string;
  title: string;
  vignette: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type ScaleCategory =
  | 'Klinis & Kesehatan Mental'
  | 'Kepribadian & Regulasi'
  | 'Sosial & Relasi'
  | 'Pendidikan & Akademik'
  | 'Industri & Organisasi';

export interface PsychScale {
  id: string;
  acronym: string;
  name: string;
  authors: string;
  year: number;
  category: ScaleCategory;
  itemCount: number;
  description: string;
  likertMin: number;
  likertMax: number;
  likertLabels: string[];
  sampleItems: { number: number; text: string; reverse?: boolean }[];
  reliability: string;
  validity: string;
  scoringGuide: string;
  citationApa7: string;
  doi?: string;
  openAccessUrl?: string;
  validationSource?: string;
}

export interface ScaleAdaptationItem {
  number: number;
  subscale?: string;
  textId: string;
  textEn?: string;
  reverseScored?: boolean;
}

export interface ScaleAdaptation {
  id: string;
  acronym: string;
  titleId: string;
  titleEn: string;
  originalAuthors: string;
  adapterAuthors: string;
  year: number;
  journalName: string;
  journalAccreditation: string;
  doi: string;
  openAccessUrl: string;
  category: ScaleCategory;
  construct: string;
  itemCount: number;
  sampleSize: string;
  population: string;
  adaptationMethod: string;
  psychometricMethod: string;
  fitIndices: string;
  reliability: string;
  responseScale: string;
  scoringNorms: string;
  summary: string;
  adaptedItems: ScaleAdaptationItem[];
  citationAdaptationApa7: string;
  citationOriginalApa7: string;
}

export type PsychologySubfield =
  | 'Psikologi Klinis'
  | 'Psikologi Perkembangan'
  | 'Psikologi Sosial'
  | 'Psikologi Pendidikan'
  | 'Psikologi Industri & Organisasi'
  | 'Psikologi Umum, Kognitif & Psikometri';

export type JournalScope = 'Internasional' | 'Nasional';

export interface JournalArticle {
  id: string;
  scope: JournalScope;
  subfield: PsychologySubfield;
  title: string;
  authors: string;
  year: number;
  journalName: string;
  volumeIssue: string;
  publisherOrAccreditation: string;
  doi: string;
  openAccessUrl: string;
  license: string;
  keywords: string[];
  abstractSummaryId: string;
  methodology: string;
  sampleContext: string;
  keyFindings: string[];
  implications: string;
  citationApa7: string;
}

export interface EthicsPrinciple {
  code: string;
  title: string;
  summary: string;
}

export interface EthicsArticle {
  pasal: string;
  topic: string;
  category: 'Praktik & Kewenangan' | 'Asesmen Psikologi' | 'Kerahasiaan & Informed Consent' | 'Penelitian & Publikasi';
  content: string;
  practicalTakeaway: string;
}

export interface EthicsDilemma {
  id: string;
  title: string;
  scenario: string;
  options: {
    label: string;
    isEthical: boolean;
    feedback: string;
    pasalRef: string;
  }[];
}
