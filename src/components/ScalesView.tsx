import { useEffect, useMemo, useState } from 'react';
import { ChevronRight, ClipboardList, Copy, ExternalLink, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SCALES_DATA } from '../data/scalesData';
import { PsychScale, ScaleCategory } from '../types';

interface ScalesViewProps {
  initialQuery?: string;
  onNotify: (msg: string) => void;
}

const PAGE_SIZE = 24;

const CATEGORIES: (ScaleCategory | 'Semua')[] = [
  'Semua',
  'Klinis & Kesehatan Mental',
  'Kepribadian & Regulasi',
  'Sosial & Relasi',
  'Pendidikan & Akademik',
  'Industri & Organisasi'
];

export default function ScalesView({ initialQuery = '', onNotify }: ScalesViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<ScaleCategory | 'Semua'>('Semua');
  const [activeScale, setActiveScale] = useState<PsychScale | null>(null);
  const [simScores, setSimScores] = useState<Record<number, number>>({});
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, category]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SCALES_DATA.filter((s) => {
      const matchCat = category === 'Semua' || s.category === category;
      const matchQuery =
        !q ||
        s.acronym.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.authors.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  const visibleItems = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleItems.length;

  const openModal = (scale: PsychScale) => {
    setActiveScale(scale);
    setSimScores({});
  };

  const totalSimulatedScore = useMemo(() => {
    if (!activeScale) return 0;
    return activeScale.sampleItems.reduce((sum, item) => {
      const val = simScores[item.number];
      if (val === undefined) return sum;
      const adjusted = item.reverse
        ? activeScale.likertMax + activeScale.likertMin - val
        : val;
      return sum + adjusted;
    }, 0);
  }, [activeScale, simScores]);

  const handleCopyCitation = (text: string) => {
    navigator.clipboard?.writeText(text);
    onNotify('Sitasi APA 7 alat ukur berhasil disalin.');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Alat Ukur Psikologi
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Akses instrumen psikometri terstandar beserta butir aitem, angka validitas konstruk &amp;
          kriteria, angka reliabilitas, simulasi skoring, dan sitasi APA 7.
        </p>
      </div>

      {/* Frosted Search */}
      <div className="relative mt-6">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-700"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari alat ukur, konstruk, atau penulis (misal DASS-21, stres, motivasi)"
          aria-label="Cari alat ukur psikologi"
          className="w-full rounded-full border border-white/80 bg-white/70 py-3.5 pl-11 pr-5 text-sm text-slate-900 shadow-xs backdrop-blur-md placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:bg-white/95 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
      </div>

      {/* Category Filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-violet-600 ${
                active
                  ? 'bg-violet-700 text-white shadow-sm'
                  : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs font-medium text-slate-800 sm:text-sm">
        Menampilkan <span className="font-mono-data font-bold text-violet-950">{visibleItems.length}</span>{' '}
        dari <span className="font-mono-data font-bold text-violet-950">{filtered.length}</span>{' '}
        instrumen psikometri terstandar (klik kartu untuk akses aitem, validitas &amp; simulasi skor)
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="glass-panel mt-6 rounded-3xl p-8 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Tidak ditemukan alat ukur yang sesuai dengan kata kunci Anda.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((scale) => {
              const journalHref =
                scale.openAccessUrl || (scale.doi ? `https://doi.org/${scale.doi}` : undefined);
              return (
                <motion.article
                  key={scale.id}
                  whileHover={{ y: -2 }}
                  className="glass-card flex flex-col justify-between rounded-[24px] p-5 text-left"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-data rounded-lg bg-violet-700 px-3 py-1 text-xs font-bold text-white shadow-xs">
                        {scale.acronym}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-800">
                        <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="font-mono-data">{scale.itemCount} Aitem</span>
                      </span>
                    </div>

                    <h2 className="font-display mt-3.5 text-lg font-bold leading-snug text-slate-900">
                      {scale.name}
                    </h2>
                    <p className="mt-1 text-xs font-semibold text-violet-800">
                      {scale.authors} ({scale.year}) · {scale.category}
                    </p>
                    <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate-700">
                      {scale.description}
                    </p>

                    <div className="mt-3.5 rounded-2xl border border-white/75 bg-white/65 p-3 text-[11px] leading-relaxed text-slate-700">
                      <p className="line-clamp-2">
                        <span className="font-bold text-violet-800">Reliabilitas:</span>{' '}
                        <span className="font-mono-data">{scale.reliability}</span>
                      </p>
                      <p className="mt-1 line-clamp-2">
                        <span className="font-bold text-violet-800">Validitas:</span>{' '}
                        <span className="font-mono-data">{scale.validity}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/70 pt-3.5">
                    <button
                      type="button"
                      onClick={() => openModal(scale)}
                      className="inline-flex items-center gap-1 rounded-xl bg-violet-700 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-violet-600"
                    >
                      <span>Detail &amp; Simulasi</span>
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    {journalHref && (
                      <a
                        href={journalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Buka jurnal referensi ${scale.acronym}`}
                        className="inline-flex items-center gap-1 rounded-xl border border-white/80 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-300 hover:bg-white hover:text-violet-800"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>DOI Jurnal</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {remaining > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="glass-pill rounded-full px-5 py-2.5 text-xs font-bold text-violet-900 transition-all hover:bg-white/95"
              >
                Muat {Math.min(PAGE_SIZE, remaining)} Berikutnya ({remaining} tersisa)
              </button>
              <button
                type="button"
                onClick={() => setVisibleCount(filtered.length)}
                className="rounded-full bg-violet-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-violet-800"
              >
                Tampilkan Semua ({filtered.length})
              </button>
            </div>
          )}
        </>
      )}

      {/* Glass Modal */}
      <AnimatePresence>
        {activeScale && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
            onClick={() => setActiveScale(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="scale-modal-title"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-modal max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-violet-700">
                    <span className="font-mono-data font-bold">{activeScale.acronym}</span> ·{' '}
                    {activeScale.category} · <span className="font-mono-data">{activeScale.itemCount} Aitem</span>
                  </p>
                  <h2 id="scale-modal-title" className="font-display mt-1 text-2xl font-extrabold text-slate-900">
                    {activeScale.name}
                  </h2>
                  <p className="text-xs font-medium text-slate-500">
                    {activeScale.authors} ({activeScale.year})
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup detail alat ukur"
                  onClick={() => setActiveScale(null)}
                  className="rounded-full bg-white/80 p-2 text-slate-600 transition-colors hover:bg-violet-100 hover:text-violet-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    Angka Reliabilitas
                  </p>
                  <p className="font-mono-data mt-1 text-xs leading-relaxed text-slate-700">
                    {activeScale.reliability}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    Angka &amp; Bukti Validitas
                  </p>
                  <p className="font-mono-data mt-1 text-xs leading-relaxed text-slate-700">
                    {activeScale.validity}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-violet-200/70 bg-violet-50/75 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-violet-800">
                  Panduan Skoring &amp; Interpretasi
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-700">{activeScale.scoringGuide}</p>
              </div>

              {/* Interactive Likert Simulator */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Simulasi Skor Aitem Contoh ({activeScale.likertMin}–{activeScale.likertMax})
                  </h3>
                  <span className="font-mono-data rounded-lg bg-violet-700 px-3 py-1 text-xs font-bold text-white">
                    Skor Simulasi: {totalSimulatedScore}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-600">
                  {activeScale.likertLabels.join(' · ')}
                </p>

                <div className="mt-3 space-y-2.5">
                  {activeScale.sampleItems.map((item) => {
                    const range: number[] = [];
                    for (let v = activeScale.likertMin; v <= activeScale.likertMax; v++) {
                      range.push(v);
                    }
                    return (
                      <div key={item.number} className="rounded-2xl border border-white/80 bg-white/70 p-3.5">
                        <p className="text-xs font-medium text-slate-800">
                          <span className="font-mono-data font-bold text-violet-700">#{item.number}</span>{' '}
                          {item.text}{' '}
                          {item.reverse && (
                            <span className="text-[11px] font-semibold text-amber-700">
                              (Reverse-scored)
                            </span>
                          )}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {range.map((val) => {
                            const selected = simScores[item.number] === val;
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() =>
                                  setSimScores((prev) => ({ ...prev, [item.number]: val }))
                                }
                                className={`font-mono-data h-8 w-8 rounded-lg text-xs font-bold transition-colors ${
                                  selected
                                    ? 'bg-violet-700 text-white'
                                    : 'bg-white/90 text-slate-700 hover:bg-violet-100'
                                }`}
                              >
                                {val}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                    Sitasi APA Edisi ke-7 &amp; Tautan Jurnal Terverifikasi
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {(activeScale.openAccessUrl || activeScale.doi) && (
                      <a
                        href={activeScale.openAccessUrl || `https://doi.org/${activeScale.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-violet-700 px-2.5 py-1 text-xs font-semibold text-white shadow-xs hover:bg-violet-800"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Buka Jurnal {activeScale.doi ? `(DOI)` : ''}</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(activeScale.citationApa7)}
                      className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-700 shadow-xs hover:bg-white"
                    >
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Salin</span>
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-xs italic leading-relaxed text-slate-700">
                  {activeScale.citationApa7}
                </p>
                {activeScale.validationSource && (
                  <p className="mt-2 border-t border-violet-200/60 pt-2 text-[11px] text-slate-600">
                    <span className="font-semibold text-violet-800">Sumber Validasi Terverifikasi:</span>{' '}
                    {activeScale.validationSource}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
