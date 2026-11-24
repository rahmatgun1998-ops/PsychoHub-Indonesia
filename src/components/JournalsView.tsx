import { useEffect, useMemo, useState } from 'react';
import {
  BookOpenCheck,
  Copy,
  Download,
  ExternalLink,
  Globe,
  Landmark,
  Search,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { JOURNALS_DATA } from '../data/journalsData';
import { JournalArticle, JournalScope, PsychologySubfield } from '../types';
import { exportJournalArticlePDF } from '../utils/pdfExport';

interface JournalsViewProps {
  initialQuery?: string;
  onNotify: (msg: string) => void;
}

const PAGE_SIZE = 24;

const SUBFIELDS: (PsychologySubfield | 'Semua Bidang')[] = [
  'Semua Bidang',
  'Psikologi Klinis',
  'Psikologi Perkembangan',
  'Psikologi Sosial',
  'Psikologi Pendidikan',
  'Psikologi Industri & Organisasi',
  'Psikologi Umum, Kognitif & Psikometri'
];

const SCOPES: (JournalScope | 'Semua')[] = ['Semua', 'Internasional', 'Nasional'];

export default function JournalsView({ initialQuery = '', onNotify }: JournalsViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [scope, setScope] = useState<JournalScope | 'Semua'>('Semua');
  const [subfield, setSubfield] = useState<PsychologySubfield | 'Semua Bidang'>('Semua Bidang');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, scope, subfield]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOURNALS_DATA.filter((art) => {
      const matchScope = scope === 'Semua' || art.scope === scope;
      const matchSubfield = subfield === 'Semua Bidang' || art.subfield === subfield;
      const matchQuery =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.authors.toLowerCase().includes(q) ||
        art.journalName.toLowerCase().includes(q) ||
        art.abstractSummaryId.toLowerCase().includes(q) ||
        art.keywords.some((k) => k.toLowerCase().includes(q));
      return matchScope && matchSubfield && matchQuery;
    });
  }, [query, scope, subfield]);

  const visibleItems = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleItems.length;

  const handleSavePdf = (article: JournalArticle) => {
    exportJournalArticlePDF(article);
    onNotify('Ringkasan PDF artikel jurnal berhasil disimpan.');
  };

  const handleCopyCitation = (text: string) => {
    navigator.clipboard?.writeText(text);
    onNotify('Sitasi APA 7 artikel jurnal berhasil disalin.');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Artikel Jurnal Psikologi (Open Access)
        </h1>
        <p className="w-full text-justify text-sm leading-relaxed text-slate-800 sm:text-base">
          Direktori lengkap <span className="font-mono-data font-bold">{JOURNALS_DATA.length}</span>{' '}
          artikel jurnal ilmiah terverifikasi Nasional (jurnal psikologi Indonesia Open Access) dan
          Internasional Open Access (Frontiers in Psychology &amp; Psychiatry, BMC Psychology,
          Collabra: Psychology, npj Science of Learning) dengan sebaran lebih dari 150 artikel pada
          setiap sub-bidang utama psikologi, lengkap dengan tautan DOI terbuka, abstrak terpublikasi,
          sitasi APA 7, serta tombol Save PDF.
        </p>
      </div>

      {/* Frosted Search Bar */}
      <div className="relative mt-6">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-700"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari judul artikel, penulis, jurnal (misal Frontiers, PLOS ONE, burnout, attachment, UGM)"
          aria-label="Cari artikel jurnal psikologi"
          className="w-full rounded-full border border-white/80 bg-white/70 py-3.5 pl-11 pr-5 text-sm text-slate-900 shadow-xs backdrop-blur-md placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:bg-white/95 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
      </div>

      {/* Dual Filters: Scope (Nasional / Internasional OA) + Sub-bidang Besar Psikologi */}
      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold text-slate-800">Lingkup Jurnal:</span>
          {SCOPES.map((sc) => {
            const active = scope === sc;
            return (
              <button
                key={sc}
                type="button"
                onClick={() => setScope(sc)}
                className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-violet-600 ${
                  active
                    ? 'bg-violet-700 text-white shadow-sm'
                    : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
                }`}
              >
                {sc === 'Internasional' && <Globe className="h-3.5 w-3.5" aria-hidden="true" />}
                {sc === 'Nasional' && <Landmark className="h-3.5 w-3.5" aria-hidden="true" />}
                <span>
                  {sc === 'Internasional'
                    ? 'Internasional (Open Access)'
                    : sc === 'Nasional'
                    ? 'Nasional (SINTA)'
                    : 'Semua Lingkup'}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold text-slate-800">Sub-Bidang Psikologi:</span>
          {SUBFIELDS.map((sf) => {
            const active = subfield === sf;
            return (
              <button
                key={sf}
                type="button"
                onClick={() => setSubfield(sf)}
                className={`whitespace-nowrap shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-violet-600 ${
                  active
                    ? 'bg-violet-700 text-white shadow-sm'
                    : 'glass-pill text-slate-800 hover:bg-white/90 hover:text-violet-900'
                }`}
              >
                {sf}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-xs font-medium text-slate-800 sm:text-sm">
        Menampilkan{' '}
        <span className="font-mono-data font-bold text-violet-950">{visibleItems.length}</span> dari{' '}
        <span className="font-mono-data font-bold text-violet-950">{filtered.length}</span> artikel
        jurnal terverifikasi Open Access (klik Save PDF untuk menyimpan ringkasan akademik &amp;
        sitasi APA 7)
      </p>

      {/* Articles Grid */}
      {filtered.length === 0 ? (
        <div className="glass-panel mt-6 rounded-3xl p-8 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Tidak ditemukan artikel jurnal untuk kombinasi filter tersebut.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {visibleItems.map((art) => (
              <motion.article
                key={art.id}
                whileHover={{ y: -2 }}
                className="glass-card flex flex-col justify-between rounded-[24px] p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span
                      className={`rounded-lg px-2.5 py-1 font-bold ${
                        art.scope === 'Internasional'
                          ? 'bg-violet-700 text-white shadow-xs'
                          : 'bg-indigo-100/90 text-indigo-900'
                      }`}
                    >
                      {art.scope} · {art.license}
                    </span>
                    <span className="font-semibold text-violet-800">{art.subfield}</span>
                  </div>

                  <h2 className="font-display mt-3.5 text-lg font-bold leading-snug text-slate-900">
                    {art.title}
                  </h2>

                  <p className="mt-1.5 text-xs font-semibold text-slate-700">
                    {art.authors} (<span className="font-mono-data">{art.year}</span>) ·{' '}
                    <span className="italic text-violet-800">{art.journalName}</span>,{' '}
                    {art.volumeIssue}
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    {art.publisherOrAccreditation} · DOI:{' '}
                    <span className="font-mono-data">{art.doi}</span>
                  </p>

                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-700">
                    {art.abstractSummaryId}
                  </p>

                  <div className="mt-3 text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-800">Kata kunci:</span>{' '}
                    {art.keywords.join(' · ')}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/70 pt-3.5">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(art)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-violet-50/90 px-3.5 py-2 text-xs font-bold text-violet-800 transition-colors hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-violet-600"
                  >
                    <BookOpenCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Ringkasan Lengkap</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={art.openAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border border-white/80 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-300 hover:bg-white hover:text-violet-800"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Buka Artikel</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleSavePdf(art)}
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

      {/* Article Glass Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="journal-modal-title"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-modal max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-violet-700">
                    {activeArticle.scope} · {activeArticle.subfield} · {activeArticle.license}
                  </p>
                  <h2
                    id="journal-modal-title"
                    className="font-display mt-1 text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl"
                  >
                    {activeArticle.title}
                  </h2>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    {activeArticle.authors} ({activeArticle.year}) ·{' '}
                    <span className="italic">{activeArticle.journalName}</span>,{' '}
                    {activeArticle.volumeIssue}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup detail artikel jurnal"
                  onClick={() => setActiveArticle(null)}
                  className="rounded-full bg-white/80 p-2 text-slate-600 transition-colors hover:bg-violet-100 hover:text-violet-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Action Toolbar */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleSavePdf(activeArticle)}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-violet-800"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Save PDF (Ringkasan Artikel)</span>
                </button>

                <a
                  href={activeArticle.openAccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-violet-200/80 bg-violet-50/85 px-4 py-2.5 text-xs font-bold text-violet-800 transition-colors hover:bg-violet-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Buka Teks Penuh Open Access (DOI)</span>
                </a>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Ringkasan Abstrak
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {activeArticle.abstractSummaryId}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                      Desain &amp; Metodologi
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">
                      {activeArticle.methodology}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/75 bg-white/65 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-violet-700">
                      Sampel &amp; Konteks
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">
                      {activeArticle.sampleContext}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    Temuan Utama
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {activeArticle.keyFindings.map((f, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <span className="font-mono-data font-bold text-violet-700">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-violet-200/70 bg-violet-50/75 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                    Implikasi Riset &amp; Praktik
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {activeArticle.implications}
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-200/70 bg-violet-50/70 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                      Sitasi APA Edisi ke-7
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(activeArticle.citationApa7)}
                      className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-700 shadow-xs hover:bg-white"
                    >
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Salin</span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs italic leading-relaxed text-slate-700">
                    {activeArticle.citationApa7}
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
