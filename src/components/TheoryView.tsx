import { useEffect, useMemo, useState } from 'react';
import { ChevronRight, Copy, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { THEORIES_DATA } from '../data/theoriesData';
import { TheoryEntry, TheoryField } from '../types';

interface TheoryViewProps {
  initialQuery?: string;
  onNotify: (msg: string) => void;
}

const PAGE_SIZE = 24;

const FIELDS: (TheoryField | 'Semua Bidang')[] = [
  'Psikologi Industri dan Organisasi',
  'Psikologi Pendidikan',
  'Psikologi Klinis',
  'Psikologi Perkembangan',
  'Psikologi Sosial',
  'Psikologi Umum dan Sejarah',
  'Semua Bidang'
];

const FIELD_DESCRIPTIONS: Record<TheoryField | 'Semua Bidang', string> = {
  'Psikologi Industri dan Organisasi': 'Motivasi kerja, kepemimpinan, desain pekerjaan, dan psikologi organisasi.',
  'Psikologi Pendidikan': 'Proses belajar, instruksi kelas, motivasi siswa, dan kesejahteraan akademik.',
  'Psikologi Klinis': 'Psikopatologi, intervensi psikoterapeutik, dan proses perubahan klinis.',
  'Psikologi Perkembangan': 'Perkembangan kognitif, kelekatan, moral, dan psikososial sepanjang hayat.',
  'Psikologi Sosial': 'Pengaruh situasi, sikap, disonansi kognitif, dan pembelajaran sosial.',
  'Psikologi Umum dan Sejarah': 'Fondasi filosofis, eksperimental, biologis, dan teori pengambilan keputusan.',
  'Semua Bidang': 'Seluruh teori tokoh lintas bidang psikologi dari era klasik hingga kontemporer.'
};

export default function TheoryView({ initialQuery = '', onNotify }: TheoryViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedField, setSelectedField] = useState<TheoryField | 'Semua Bidang'>('Semua Bidang');
  const [activeTheory, setActiveTheory] = useState<TheoryEntry | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, selectedField]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return THEORIES_DATA.filter((item) => {
      const matchesField = selectedField === 'Semua Bidang' || item.field === selectedField;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.theoryTitle.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.coreConcepts.some((c) => c.toLowerCase().includes(q));
      return matchesField && matchesQuery;
    }).sort((a, b) => a.yearNum - b.yearNum);
  }, [query, selectedField]);

  const visibleItems = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleItems.length;

  const handleCopyCitation = (text: string) => {
    navigator.clipboard?.writeText(text);
    onNotify('Sitasi APA 7 berhasil disalin ke papan klip.');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Teori Psikologi
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Pilih nama tokoh untuk membaca konsep teorinya secara lengkap beserta proposisi kunci, konteks sejarah, relevansi riset terkini, dan sitasi APA 7. Daftar diurutkan secara kronologis dari teori klasik tertua hingga pendekatan modern terbaru.
        </p>
      </div>

      {/* Frosted Glass Search Bar */}
      <div className="relative mt-6">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-700"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari tokoh atau teori, misal Piaget, ACT, atau Gestalt"
          aria-label="Cari tokoh atau teori psikologi"
          className="w-full rounded-full border border-white/80 bg-white/70 py-3.5 pl-11 pr-5 text-sm text-slate-900 shadow-xs backdrop-blur-md placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:bg-white/95 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
      </div>

      {/* Field Filter Buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
        {FIELDS.map((field) => {
          const active = selectedField === field;
          return (
            <button
              key={field}
              type="button"
              onClick={() => setSelectedField(field)}
              className={`whitespace-nowrap shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-violet-600 ${
                active
                  ? 'bg-violet-700 text-white shadow-sm'
                  : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
              }`}
            >
              {field}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs font-medium text-slate-800 sm:text-sm">
        {FIELD_DESCRIPTIONS[selectedField]}{' '}
        <span className="font-mono-data font-bold text-violet-950">
          (Menampilkan {visibleItems.length} dari {filtered.length} tokoh)
        </span>
      </p>

      {/* Theorist Cards Grid */}
      {filtered.length === 0 ? (
        <div className="glass-panel mt-6 rounded-3xl p-8 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Tidak ditemukan tokoh atau teori yang sesuai dengan pencarian Anda.
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
                onClick={() => setActiveTheory(item)}
                className="glass-card group flex items-center justify-between gap-4 rounded-[22px] p-5 text-left focus-visible:outline-2 focus-visible:outline-violet-600"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-700 font-display text-lg font-extrabold text-white shadow-xs">
                    {item.initial}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display truncate text-base font-bold text-slate-900 group-hover:text-violet-800">
                      {item.name}
                    </h2>
                    <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-700">
                      {item.theoryTitle}{' '}
                      <span className="font-mono-data font-semibold text-violet-800">
                        ({item.yearDisplay})
                      </span>
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className="h-4 w-4 shrink-0 text-violet-700 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
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

      {/* Theory Detail Glass Modal */}
      <AnimatePresence>
        {activeTheory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
            onClick={() => setActiveTheory(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="theory-modal-title"
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
                    {activeTheory.field} ·{' '}
                    <span className="font-mono-data">{activeTheory.yearDisplay}</span>
                  </p>
                  <h2 id="theory-modal-title" className="font-display mt-1 text-2xl font-extrabold text-slate-900">
                    {activeTheory.name}
                  </h2>
                  <p className="text-sm font-semibold text-violet-800">{activeTheory.theoryTitle}</p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup detail teori"
                  onClick={() => setActiveTheory(null)}
                  className="rounded-full bg-white/80 p-2 text-slate-600 transition-colors hover:bg-violet-100 hover:text-violet-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-700">{activeTheory.summary}</p>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Konsep Inti
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {activeTheory.coreConcepts.map((c) => (
                      <li
                        key={c}
                        className="rounded-lg border border-violet-200/70 bg-violet-50/80 px-3 py-1.5 text-xs font-semibold text-violet-900"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Proposisi Utama
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {activeTheory.propositions.map((p, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <span className="font-mono-data font-bold text-violet-700">0{idx + 1}.</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Aplikasi Praktis &amp; Klinis
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {activeTheory.application}
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                      Sitasi Sumber Primer (APA 7)
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(activeTheory.citationApa7)}
                      className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-700 shadow-xs hover:bg-white"
                    >
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Salin</span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs italic leading-relaxed text-slate-700">
                    {activeTheory.citationApa7}
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
