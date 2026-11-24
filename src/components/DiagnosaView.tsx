import { useState } from 'react';
import {
  CheckCircle2,
  ClipboardList,
  GitBranch,
  RotateCcw,
  Stethoscope,
  XCircle
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CLINICAL_CASES,
  DECISION_PATHWAYS,
  FORMULATION_5P,
  MSE_DOMAINS
} from '../data/diagnosaData';

type SubMode = 'tree' | 'mse' | 'cases';

export default function DiagnosaView() {
  const [subMode, setSubMode] = useState<SubMode>('tree');
  const [selectedPathwayId, setSelectedPathwayId] = useState(DECISION_PATHWAYS[0].id);
  const [currentStepId, setCurrentStepId] = useState(DECISION_PATHWAYS[0].initialStepId);
  const [conclusion, setConclusion] = useState<{
    diagnosis: string;
    icd10: string;
    rationale: string;
    nextAction: string;
  } | null>(null);
  const [caseAnswers, setCaseAnswers] = useState<Record<string, number>>({});

  const pathway = DECISION_PATHWAYS.find((p) => p.id === selectedPathwayId) ?? DECISION_PATHWAYS[0];
  const currentStep = pathway.steps[currentStepId];

  const handleSelectPathway = (id: string) => {
    const next = DECISION_PATHWAYS.find((p) => p.id === id) ?? DECISION_PATHWAYS[0];
    setSelectedPathwayId(id);
    setCurrentStepId(next.initialStepId);
    setConclusion(null);
  };

  const handleResetTree = () => {
    setCurrentStepId(pathway.initialStepId);
    setConclusion(null);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Alur Diagnosa Klinis
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Simulasi pohon keputusan diagnostik DSM-5-TR, panduan pemeriksaan status mental (MSE)
          &amp; formulasi kasus 5P, serta latihan analisis studi kasus klinis.
        </p>
      </div>

      {/* 3 Sub-mode tabs */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setSubMode('tree')}
          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
            subMode === 'tree'
              ? 'bg-violet-700 text-white shadow-sm'
              : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
          }`}
        >
          <GitBranch className="h-4 w-4" aria-hidden="true" />
          <span>Pohon Keputusan Klinis</span>
        </button>

        <button
          type="button"
          onClick={() => setSubMode('mse')}
          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
            subMode === 'mse'
              ? 'bg-violet-700 text-white shadow-sm'
              : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
          }`}
        >
          <ClipboardList className="h-4 w-4" aria-hidden="true" />
          <span>Alur Asesmen, MSE &amp; 5P</span>
        </button>

        <button
          type="button"
          onClick={() => setSubMode('cases')}
          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
            subMode === 'cases'
              ? 'bg-violet-700 text-white shadow-sm'
              : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
          }`}
        >
          <Stethoscope className="h-4 w-4" aria-hidden="true" />
          <span>Latihan Studi Kasus</span>
        </button>
      </div>

        {/* Mode 1: Decision Tree */}
        {subMode === 'tree' && (
          <motion.div
            key="tree"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid gap-6 lg:grid-cols-12"
          >
            <div className="space-y-3 lg:col-span-4">
              <p className="text-xs font-bold text-slate-800">Pilih Jalur Keluhan Utama</p>
              {DECISION_PATHWAYS.map((p) => {
                const active = p.id === pathway.id;
                return (
                  <motion.button
                    key={p.id}
                    type="button"
                    whileHover={{ y: -2 }}
                    onClick={() => handleSelectPathway(p.id)}
                    className={`w-full rounded-[22px] p-5 text-left transition-all ${
                      active
                        ? 'bg-violet-700 text-white shadow-[0_12px_30px_-10px_rgba(91,33,182,0.5)]'
                        : 'glass-card text-slate-800'
                    }`}
                  >
                    <h2 className="font-display text-base font-bold leading-snug">{p.title}</h2>
                    <p
                      className={`mt-2 text-xs leading-relaxed ${
                        active ? 'text-violet-100' : 'text-slate-700'
                      }`}
                    >
                      {p.chiefComplaint}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            <div className="lg:col-span-8">
              <div className="glass-panel rounded-[26px] p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl font-bold text-slate-900">{pathway.title}</h2>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {pathway.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetTree}
                    className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50/85 px-3.5 py-2 text-xs font-bold text-violet-800 transition-colors hover:bg-violet-100"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Mulai Ulang</span>
                  </button>
                </div>

                  {conclusion ? (
                    <motion.div
                      key={`${pathway.id}-conclusion`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-6 rounded-2xl border border-violet-200/80 bg-violet-50/75 p-6"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-violet-700">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        <span>Kesimpulan Alur Diagnostik</span>
                      </div>
                      <h3 className="font-display mt-2 text-2xl font-extrabold text-slate-900">
                        {conclusion.diagnosis}{' '}
                        <span className="font-mono-data text-base font-bold text-violet-700">
                          ({conclusion.icd10})
                        </span>
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">
                        {conclusion.rationale}
                      </p>
                      <div className="mt-4 rounded-xl border border-white/80 bg-white/80 p-4">
                        <p className="text-xs font-bold text-violet-800">Tindak Lanjut Klinis:</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-700">
                          {conclusion.nextAction}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    currentStep && (
                      <motion.div
                        key={`${pathway.id}-${currentStepId}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 rounded-2xl border border-white/75 bg-white/65 p-6"
                      >
                        <p className="text-xs font-bold text-violet-700">{currentStep.stepLabel}</p>
                        <h3 className="font-display mt-2 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                          {currentStep.question}
                        </h3>
                        <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                          Catatan Klinis: {currentStep.clinicalHint}
                        </p>

                        <div className="mt-5 space-y-2.5">
                          {currentStep.options.map((opt, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                if (opt.conclusion) {
                                  setConclusion(opt.conclusion);
                                } else if (opt.nextStepId) {
                                  setCurrentStepId(opt.nextStepId);
                                }
                              }}
                              className="w-full rounded-xl border border-violet-200/80 bg-white/85 px-4 py-3.5 text-left text-sm font-semibold text-slate-800 transition-all hover:border-violet-500 hover:bg-violet-50 hover:text-violet-900"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mode 2: MSE & 5P */}
        {subMode === 'mse' && (
          <motion.div
            key="mse"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid gap-6 lg:grid-cols-2"
          >
            <div className="glass-panel rounded-[26px] p-6">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Pemeriksaan Status Mental (MSE)
              </h2>
              <p className="mt-1 text-xs text-slate-700">
                Observasi klinis terstruktur selama wawancara asesmen psikologis.
              </p>
              <div className="mt-4 space-y-3">
                {MSE_DOMAINS.map((m) => (
                  <div key={m.title} className="rounded-2xl border border-white/75 bg-white/65 p-4">
                    <h3 className="text-sm font-bold text-violet-900">{m.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">{m.points}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[26px] p-6">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Formulasi Kasus Model 5P
              </h2>
              <p className="mt-1 text-xs text-slate-700">
                Kerangka sintesis dinamika kasus dari faktor kerentanan hingga faktor protektif.
              </p>
              <div className="mt-4 space-y-3">
                {FORMULATION_5P.map((item) => (
                  <div
                    key={item.p}
                    className="rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4"
                  >
                    <h3 className="text-sm font-bold text-violet-900">{item.p}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mode 3: Case Studies */}
        {subMode === 'cases' && (
          <motion.div
            key="cases"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid gap-5 lg:grid-cols-2"
          >
            {CLINICAL_CASES.map((c) => {
              const chosen = caseAnswers[c.id];
              const isAnswered = chosen !== undefined;
              const isCorrect = chosen === c.correctIndex;
              return (
                <div key={c.id} className="glass-card rounded-[26px] p-6">
                  <h2 className="font-display text-lg font-bold text-slate-900">{c.title}</h2>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                    {c.vignette}
                  </p>
                  <p className="mt-4 text-xs font-bold text-violet-800">{c.question}</p>

                  <div className="mt-3 space-y-2">
                    {c.options.map((opt, idx) => {
                      const selected = chosen === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCaseAnswers((prev) => ({ ...prev, [c.id]: idx }))}
                          className={`w-full rounded-xl border px-4 py-2.5 text-left text-xs font-semibold transition-all ${
                            selected
                              ? idx === c.correctIndex
                                ? 'border-emerald-500 bg-emerald-50/90 text-emerald-900'
                                : 'border-rose-400 bg-rose-50/90 text-rose-900'
                              : 'border-white/80 bg-white/75 text-slate-800 hover:bg-violet-50'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12 }}
                        className={`mt-4 rounded-2xl p-4 text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50/90 text-emerald-900'
                            : 'bg-amber-50/90 text-amber-950'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                          ) : (
                            <XCircle className="h-4 w-4 text-rose-700" />
                          )}
                          <span>{isCorrect ? 'Analisis Tepat' : 'Perlu Tinjauan Ulang'}</span>
                        </div>
                        <p className="mt-1.5">{c.explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
    </div>
  );
}
