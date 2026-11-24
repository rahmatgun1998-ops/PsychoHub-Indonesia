import { useEffect, useMemo, useState } from 'react';
import {
  BookCheck,
  Copy,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Search,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ADAPTATIONS_DATA } from '../data/adaptationsData';
import { ScaleAdaptation, ScaleCategory } from '../types';
import { exportScaleAdaptationPDF } from '../utils/pdfExport';

interface ScaleAdaptationViewProps {
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

export default function ScaleAdaptationView({
  initialQuery = '',
  onNotify
}: ScaleAdaptationViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<ScaleCategory | 'Semua'>('Semua');
  const [activeAdaptation, setActiveAdaptation] = useState<ScaleAdaptation | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, category]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ADAPTATIONS_DATA.filter((item) => {
      const matchCat = category === 'Semua' || item.category === category;
      const matchQuery =
        !q ||
        item.acronym.toLowerCase().includes(q) ||
        item.titleId.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.adapterAuthors.toLowerCase().includes(q) ||
        item.journalName.toLowerCase().includes(q) ||
        item.construct.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  const visibleItems = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleItems.length;

  const handleSavePdf = (scale: ScaleAdaptation) => {
    exportScaleAdaptationPDF(scale);
    onNotify(`Dossier PDF ${scale.acronym} berhasil disimpan.`);
  };

  const handleCopyCitation = (text: string) => {
    navigator.clipboard?.writeText(text);
    onNotify('Sitasi APA 7 adaptasi skala berhasil disalin.');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Adaptasi Skala Psikologi Indonesia
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Koleksi instrumen psikologi terstandar yang telah diadaptasi dan divalidasi ke dalam
          Bahasa Indonesia berdasarkan artikel jurnal psikometri Indonesia (JP3I, Jurnal Psikologi
          UGM, Jurnal Psikologi Ulayat, Jurnal Psikologi Undip, dan jurnal terakreditasi lainnya),
          lengkap dengan angka validitas, reliabilitas, butir aitem, serta tombol Save PDF.
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
          placeholder="Cari skala adaptasi, penulis Indonesia, jurnal (misal DASS-21, JP3I, Rasch, BFI, UWES)"
          aria-label="Cari adaptasi skala psikologi Indonesia"
          className="w-full rounded-full border border-white/80 bg-white/70 py-3.5 pl-11 pr-5 text-sm text-slate-900 shadow-xs backdrop-blur-md placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:bg-white/95 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
      </div>

      {/* Category Filter Buttons */}
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
        Menampilkan{' '}
        <span className="font-mono-data font-bold text-violet-950">{visibleItems.length}</span> dari{' '}
        <span className="font-mono-data font-bold text-violet-950">{filtered.length}</span>{' '}
        instrumen hasil adaptasi Bahasa Indonesia terpublikasi (klik Save PDF untuk mengunduh lembar
        butir aitem &amp; properti psikometri lengkap)
      </p>

      {/* Cards Grid */}
      {filtered.length === 0 ? (
        <div className="glass-panel mt-6 rounded-3xl p-8 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Tidak ditemukan skala adaptasi yang sesuai dengan kata kunci Anda.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -2 }}
                className="glass-card flex flex-col justify-between rounded-[24px] p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono-data rounded-lg bg-violet-700 px-2.5 py-1 font-bold text-white shadow-xs">
                      {item.acronym}
                    </span>
                    <span className="font-mono-data text-xs font-semibold text-slate-600">
                      {item.itemCount} Aitem · {item.year}
                    </span>
                  </div>

                  <h2 className="font-display mt-3.5 text-lg font-bold leading-snug text-slate-900">
                    {item.titleId}
                  </h2>

                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Asli: {item.titleEn} — {item.originalAuthors}
                  </p>

                  <div className="mt-3 text-xs font-semibold leading-relaxed text-violet-800">
                    <span>{item.adapterAuthors}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{item.journalName}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="font-mono-data">{item.journalAccreditation}</span>
                  </div>

                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-700">
                    {item.summary}
                  </p>

                  <div className="mt-3.5 space-y-1 rounded-2xl border border-white/75 bg-white/65 p-3 text-[11px] leading-relaxed text-slate-700">
                    <p className="line-clamp-1">
                      <span className="font-bold text-violet-800">Metode:</span>{' '}
                      {item.psychometricMethod}
                    </p>
                    <p className="font-mono-data line-clamp-2 text-slate-700">
                      <span className="font-bold text-violet-800">Validitas:</span>{' '}
                      {item.fitIndices}
                    </p>
                    <p className="font-mono-data line-clamp-2 text-slate-700">
                      <span className="font-bold text-violet-800">Reliabilitas:</span>{' '}
                      {item.reliability}
                    </p>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/70 pt-3.5">
                  <button
                    type="button"
                    onClick={() => setActiveAdaptation(item)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-violet-50/90 px-3.5 py-2 text-xs font-bold text-violet-800 transition-colors hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-violet-600"
                  >
                    <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Detail &amp; Aitem</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={item.openAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka DOI jurnal sumber ${item.acronym}`}
                      className="inline-flex items-center gap-1 rounded-xl border border-white/80 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-300 hover:bg-white hover:text-violet-800"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>DOI</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleSavePdf(item)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-violet-700 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-violet-600"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Save PDF</span>
                    </button>
                  </div>
                </div>
              </motion.article>
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

      {/* Detail Glass Modal */}
      <AnimatePresence>
        {activeAdaptation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
            onClick={() => setActiveAdaptation(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="adaptation-modal-title"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-modal max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-violet-700">
                    <span className="font-mono-data font-bold">{activeAdaptation.acronym}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeAdaptation.journalName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-data">{activeAdaptation.journalAccreditation}</span>
                  </div>
                  <h2
                    id="adaptation-modal-title"
                    className="font-display mt-1 text-2xl font-extrabold text-slate-900"
                  >
                    {activeAdaptation.titleId}
                  </h2>
                  <p className="text-xs font-medium text-slate-500">
                    Sumber Asli: {activeAdaptation.titleEn} ({activeAdaptation.originalAuthors})
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup detail adaptasi skala"
                  onClick={() => setActiveAdaptation(null)}
                  className="rounded-full bg-white/80 p-2 text-slate-600 transition-colors hover:bg-violet-100 hover:text-violet-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Action Toolbar inside Modal */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleSavePdf(activeAdaptation)}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-violet-800"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Save PDF (Dossier Lengkap)</span>
                </button>

                <a
                  href={activeAdaptation.openAccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-violet-200/80 bg-violet-50/85 px-4 py-2.5 text-xs font-bold text-violet-800 transition-colors hover:bg-violet-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Buka Artikel Jurnal (DOI: {activeAdaptation.doi})</span>
                </a>
              </div>

              {/* Psychometric Specs */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    Tim Adaptasi &amp; Sampel
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-800">
                    {activeAdaptation.adapterAuthors} ({activeAdaptation.year})
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    <span className="font-mono-data font-semibold">
                      {activeAdaptation.sampleSize}
                    </span>{' '}
                    — {activeAdaptation.population}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    Metode &amp; Angka Validitas
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-800">
                    {activeAdaptation.psychometricMethod}
                  </p>
                  <p className="font-mono-data mt-1 text-xs text-slate-600">
                    {activeAdaptation.fitIndices}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    Prosedur Adaptasi Bahasa
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {activeAdaptation.adaptationMethod}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    Reliabilitas &amp; Format Respons
                  </p>
                  <p className="font-mono-data mt-1 text-xs text-slate-800">
                    {activeAdaptation.reliability}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{activeAdaptation.responseScale}</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-violet-200/70 bg-violet-50/75 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-violet-800">
                  Panduan Skoring &amp; Norma Indonesia
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-700">
                  {activeAdaptation.scoringNorms}
                </p>
              </div>

              {/* Adapted Items Table */}
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <BookCheck className="h-4 w-4 text-violet-700" aria-hidden="true" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                    Butir Aitem Hasil Adaptasi Bahasa Indonesia
                  </h3>
                </div>
                {activeAdaptation.adaptedItems.length > 0 ? (
                  <div className="mt-3 divide-y divide-white/80 rounded-2xl border border-white/80 bg-white/60">
                    {activeAdaptation.adaptedItems.map((it) => (
                      <div
                        key={it.number}
                        className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                      >
                        <p className="text-xs leading-relaxed text-slate-800">
                          <span className="font-mono-data mr-2 font-bold text-violet-700">
                            {String(it.number).padStart(2, '0')}.
                          </span>
                          {it.textId}
                        </p>
                        <div className="flex shrink-0 items-center gap-2 text-[11px] font-semibold">
                          {it.subscale && <span className="text-violet-700">{it.subscale}</span>}
                          {it.reverseScored && <span className="text-amber-700">· Reverse</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 rounded-2xl border border-white/80 bg-white/65 p-4 text-xs leading-relaxed text-slate-700">
                    <p>
                      Butir aitem verbatim beserta tabel factor loading lengkap tersedia langsung pada
                      naskah resmi artikel jurnal sumber untuk menjaga keakuratan redaksi penelitian
                      dan menghormati hak cipta penulis adaptasi.
                    </p>
                    <a
                      href={activeAdaptation.openAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 font-bold text-violet-800 underline underline-offset-2 hover:text-violet-950"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Akses Butir &amp; Naskah Lengkap (DOI: {activeAdaptation.doi})</span>
                    </a>
                  </div>
                )}
              </div>

              {/* APA 7 Citations */}
              <div className="mt-6 space-y-3 rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                    Sitasi APA 7 (Adaptasi Indonesia &amp; Sumber Asli)
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyCitation(
                        `${activeAdaptation.citationAdaptationApa7}\n\nInstrumen Asli:\n${activeAdaptation.citationOriginalApa7}`
                      )
                    }
                    className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-700 shadow-xs hover:bg-white"
                  >
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Salin Sitasi</span>
                  </button>
                </div>
                <p className="text-xs italic leading-relaxed text-slate-700">
                  {activeAdaptation.citationAdaptationApa7}
                </p>
                <p className="border-t border-violet-200/60 pt-2 text-xs italic leading-relaxed text-slate-600">
                  Asli: {activeAdaptation.citationOriginalApa7}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
