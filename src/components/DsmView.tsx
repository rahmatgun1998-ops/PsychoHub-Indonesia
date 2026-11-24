import { useEffect, useMemo, useState } from 'react';
import { CheckSquare, ChevronRight, Search, Square, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { DSM_DATA } from '../data/dsmData';
import { DsmChapter, DsmDisorder } from '../types';

interface DsmViewProps {
  initialQuery?: string;
}

const PAGE_SIZE = 24;

const CHAPTERS: (DsmChapter | 'Semua Bab')[] = [
  'Semua Bab',
  'Neurodevelopmental',
  'Spektrum Skizofrenia & Psikotik',
  'Bipolar & Depresif',
  'Kecemasan, OCD & Trauma',
  'Disosiatif, Somatik & Makan',
  'Tidur & Neurokognitif',
  'Disruptif, Kepribadian & Gender',
  'Zat & Adiksi'
];

export default function DsmView({ initialQuery = '' }: DsmViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [chapter, setChapter] = useState<DsmChapter | 'Semua Bab'>('Semua Bab');
  const [selectedDisorder, setSelectedDisorder] = useState<DsmDisorder | null>(null);
  const [checkedCriteria, setCheckedCriteria] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, chapter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DSM_DATA.filter((item) => {
      const matchChap = chapter === 'Semua Bab' || item.chapter === chapter;
      const matchQuery =
        !q ||
        item.nameId.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.icd10.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q);
      return matchChap && matchQuery;
    });
  }, [query, chapter]);

  const visibleItems = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleItems.length;

  const toggleCriterion = (disorderId: string, code: string) => {
    const key = `${disorderId}:${code}`;
    setCheckedCriteria((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Kriteria Diagnostik DSM-5-TR
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Referensi terstruktur gangguan diagnostik DSM-5-TR beserta kode ICD-10-CM, durasi
          minimum, spesifikator, diagnosis banding, dan instrumen skrining pendukung.
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
          placeholder="Cari gangguan, kode ICD-10, atau gejala (misal F32, MDD, OCD, BPD)"
          aria-label="Cari gangguan DSM-5-TR"
          className="w-full rounded-full border border-white/80 bg-white/70 py-3.5 pl-11 pr-5 text-sm text-slate-900 shadow-xs backdrop-blur-md placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:bg-white/95 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
      </div>

      {/* Chapter Filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {CHAPTERS.map((chap) => {
          const active = chapter === chap;
          return (
            <button
              key={chap}
              type="button"
              onClick={() => setChapter(chap)}
              className={`whitespace-nowrap shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-violet-600 ${
                active
                  ? 'bg-violet-700 text-white shadow-sm'
                  : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
              }`}
            >
              {chap}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs font-medium text-slate-800 sm:text-sm">
        Menampilkan <span className="font-mono-data font-bold text-violet-950">{visibleItems.length}</span>{' '}
        dari <span className="font-mono-data font-bold text-violet-950">{filtered.length}</span>{' '}
        kategori gangguan DSM-5-TR (klik kartu untuk checklist kriteria &amp; diagnosis banding)
      </p>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="glass-panel mt-6 rounded-3xl p-8 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Tidak ditemukan gangguan DSM-5-TR yang sesuai dengan kata kunci Anda.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ y: -2 }}
                onClick={() => setSelectedDisorder(item)}
                className="glass-card group flex flex-col justify-between rounded-[24px] p-5 text-left focus-visible:outline-2 focus-visible:outline-violet-600"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-data rounded-lg bg-violet-700 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                      {item.icd10}
                    </span>
                    <span className="inline-flex items-center gap-1 truncate text-xs font-semibold text-violet-800">
                      <span className="truncate">{item.chapter}</span>
                      <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </span>
                  </div>

                  <h2 className="font-display mt-3.5 text-lg font-bold leading-snug text-slate-900 group-hover:text-violet-800">
                    {item.nameId}
                  </h2>
                  <p className="mt-0.5 text-xs font-medium text-slate-600">{item.nameEn}</p>
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-700">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/60 pt-3 text-[11px] font-semibold text-violet-800">
                  Durasi: {item.minDuration}
                </div>
              </motion.button>
            ))}
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

      {/* Disorder Detail Glass Modal */}
      <AnimatePresence>
        {selectedDisorder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
            onClick={() => setSelectedDisorder(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="dsm-modal-title"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-modal max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-violet-700">
                    <span className="font-mono-data font-bold">{selectedDisorder.icd10}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedDisorder.chapter}</span>
                  </div>
                  <h2 id="dsm-modal-title" className="font-display mt-1 text-2xl font-extrabold text-slate-900">
                    {selectedDisorder.nameId}
                  </h2>
                  <p className="text-sm text-slate-500">{selectedDisorder.nameEn}</p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup detail DSM"
                  onClick={() => setSelectedDisorder(null)}
                  className="rounded-full bg-white/80 p-2 text-slate-600 transition-colors hover:bg-violet-100 hover:text-violet-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-violet-200/70 bg-violet-50/75 p-4 text-xs font-semibold text-violet-900">
                Ambang Durasi Minimum: {selectedDisorder.minDuration}
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Checklist Kriteria Diagnostik (Latihan Belajar)
                  </h3>
                  <div className="mt-2.5 space-y-2.5">
                    {selectedDisorder.criteria.map((c) => {
                      const checked = !!checkedCriteria[`${selectedDisorder.id}:${c.code}`];
                      return (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => toggleCriterion(selectedDisorder.id, c.code)}
                          className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition-colors ${
                            checked
                              ? 'border-violet-400 bg-violet-50/90'
                              : 'border-white/80 bg-white/70 hover:bg-white/95'
                          }`}
                        >
                          {checked ? (
                            <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" />
                          ) : (
                            <Square className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                          )}
                          <div>
                            <p className="text-xs font-bold text-slate-900">
                              Kriteria {c.code} · {c.title}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-600">
                              {c.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                      Spesifikator Klinis
                    </h3>
                    <ul className="mt-2 space-y-1 text-xs text-slate-700">
                      {selectedDisorder.specifiers.map((s) => (
                        <li key={s}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                      Diagnosis Banding
                    </h3>
                    <ul className="mt-2 space-y-1 text-xs text-slate-700">
                      {selectedDisorder.differentialDiagnosis.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Instrumen Skrining Pendukung
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-slate-800">
                    {selectedDisorder.screeningTools.join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
