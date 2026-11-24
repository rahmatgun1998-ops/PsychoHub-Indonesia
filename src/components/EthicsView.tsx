import { useState } from 'react';
import { CheckCircle2, Scale, ShieldAlert } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ETHICS_ARTICLES, ETHICS_DILEMMAS, ETHICS_PRINCIPLES } from '../data/ethicsData';

export default function EthicsView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [dilemmaAnswers, setDilemmaAnswers] = useState<Record<string, number>>({});

  const categories = [
    'Semua',
    'Praktik & Kewenangan',
    'Kerahasiaan & Informed Consent',
    'Asesmen Psikologi',
    'Penelitian & Publikasi'
  ];

  const filteredArticles = ETHICS_ARTICLES.filter(
    (a) => selectedCategory === 'Semua' || a.category === selectedCategory
  );

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Kode Etik Psikologi Indonesia (HIMPSI)
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Pedoman prinsip etika umum, batas kewenangan profesi, kerahasiaan data asesmen, etika
          penelitian skripsi, serta simulasi penyelesaian dilema etik.
        </p>
      </div>

      {/* 5 Principles */}
      <section className="mt-7">
        <h2 className="font-display text-lg font-bold text-slate-900">
          Lima Prinsip Umum Etika Psikologi
        </h2>
        <div className="mt-3.5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ETHICS_PRINCIPLES.map((p) => (
            <motion.div
              key={p.code}
              whileHover={{ y: -2 }}
              className="glass-card rounded-[22px] p-5"
            >
              <span className="inline-block rounded-lg bg-violet-700 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                {p.code}
              </span>
              <h3 className="font-display mt-3 text-sm font-bold leading-snug text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">{p.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Articles */}
      <section className="mt-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-lg font-bold text-slate-900">
            Pasal Kunci Praktik, Asesmen &amp; Riset
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-700 text-white shadow-sm'
                    : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {filteredArticles.map((art) => (
            <motion.div
              key={art.pasal}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-[22px] p-5"
            >
              <div className="flex items-center justify-between gap-2 text-xs font-bold text-violet-800">
                <span className="font-mono-data">{art.pasal}</span>
                <span>{art.category}</span>
              </div>
              <h3 className="font-display mt-2 text-base font-bold text-slate-900">{art.topic}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">{art.content}</p>
              <div className="mt-3 rounded-xl border border-violet-200/70 bg-violet-50/75 p-3 text-xs text-violet-950">
                <span className="font-bold">Implikasi Praktik: </span>
                {art.practicalTakeaway}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dilemma Simulator */}
      <section className="mt-9">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-violet-700" aria-hidden="true" />
          <h2 className="font-display text-lg font-bold text-slate-900">
            Simulasi Penyelesaian Dilema Etik
          </h2>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {ETHICS_DILEMMAS.map((d) => {
            const chosenIdx = dilemmaAnswers[d.id];
            const chosenOpt = chosenIdx !== undefined ? d.options[chosenIdx] : null;
            return (
              <div key={d.id} className="glass-card flex flex-col justify-between rounded-[24px] p-5">
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">{d.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700">{d.scenario}</p>

                  <div className="mt-4 space-y-2">
                    {d.options.map((opt, idx) => {
                      const active = chosenIdx === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            setDilemmaAnswers((prev) => ({ ...prev, [d.id]: idx }))
                          }
                          className={`w-full rounded-xl border p-3 text-left text-xs font-semibold transition-all ${
                            active
                              ? opt.isEthical
                                ? 'border-emerald-500 bg-emerald-50/90 text-emerald-950'
                                : 'border-rose-400 bg-rose-50/90 text-rose-950'
                              : 'border-white/80 bg-white/70 text-slate-800 hover:bg-violet-50'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence>
                  {chosenOpt && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className={`mt-4 rounded-xl p-3.5 text-xs leading-relaxed ${
                        chosenOpt.isEthical
                          ? 'bg-emerald-50/90 text-emerald-950'
                          : 'bg-rose-50/90 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        {chosenOpt.isEthical ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                        ) : (
                          <ShieldAlert className="h-4 w-4 text-rose-700" />
                        )}
                        <span>{chosenOpt.pasalRef}</span>
                      </div>
                      <p className="mt-1">{chosenOpt.feedback}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
