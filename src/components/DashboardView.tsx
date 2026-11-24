import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  GitBranch,
  Library,
  Scale,
  Search
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ADAPTATIONS_DATA } from '../data/adaptationsData';
import { DSM_DATA } from '../data/dsmData';
import { JOURNALS_DATA } from '../data/journalsData';
import { SCALES_DATA } from '../data/scalesData';
import { THEORIES_DATA } from '../data/theoriesData';
import { ModuleTab } from '../types';

interface DashboardViewProps {
  onNavigate: (tab: ModuleTab, prefillQuery?: string) => void;
}

export default function DashboardView({ onNavigate }: DashboardViewProps) {
  const [query, setQuery] = useState('');

  const quickResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: {
      id: string;
      moduleLabel: string;
      tab: ModuleTab;
      title: string;
      subtitle: string;
    }[] = [];

    THEORIES_DATA.forEach((t) => {
      if (
        t.name.toLowerCase().includes(q) ||
        t.theoryTitle.toLowerCase().includes(q) ||
        t.field.toLowerCase().includes(q)
      ) {
        results.push({
          id: `t-${t.id}`,
          moduleLabel: 'Teori Psikologi',
          tab: 'teori',
          title: `${t.name} — ${t.theoryTitle}`,
          subtitle: `${t.yearDisplay} · ${t.field}`
        });
      }
    });

    DSM_DATA.forEach((d) => {
      if (
        d.nameId.toLowerCase().includes(q) ||
        d.nameEn.toLowerCase().includes(q) ||
        d.icd10.toLowerCase().includes(q)
      ) {
        results.push({
          id: `d-${d.id}`,
          moduleLabel: 'DSM-5-TR',
          tab: 'dsm',
          title: `${d.icd10} · ${d.nameId}`,
          subtitle: `${d.chapter} · ${d.minDuration}`
        });
      }
    });

    SCALES_DATA.forEach((s) => {
      if (
        s.acronym.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      ) {
        results.push({
          id: `s-${s.id}`,
          moduleLabel: 'Alat Ukur',
          tab: 'alat-ukur',
          title: `${s.acronym} — ${s.name}`,
          subtitle: `${s.authors} (${s.year}) · ${s.itemCount} aitem`
        });
      }
    });

    ADAPTATIONS_DATA.forEach((a) => {
      if (
        a.acronym.toLowerCase().includes(q) ||
        a.titleId.toLowerCase().includes(q) ||
        a.journalName.toLowerCase().includes(q) ||
        a.construct.toLowerCase().includes(q)
      ) {
        results.push({
          id: `a-${a.id}`,
          moduleLabel: 'Adaptasi Skala ID',
          tab: 'adaptasi-skala',
          title: `${a.acronym} — ${a.titleId}`,
          subtitle: `${a.adapterAuthors} (${a.year}) · ${a.journalName}`
        });
      }
    });

    JOURNALS_DATA.forEach((j) => {
      if (
        j.title.toLowerCase().includes(q) ||
        j.subfield.toLowerCase().includes(q) ||
        j.journalName.toLowerCase().includes(q) ||
        j.keywords.some((k) => k.toLowerCase().includes(q))
      ) {
        results.push({
          id: `j-${j.id}`,
          moduleLabel: `Jurnal ${j.scope}`,
          tab: 'artikel-jurnal',
          title: j.title,
          subtitle: `${j.journalName} (${j.year}) · ${j.subfield}`
        });
      }
    });

    return results.slice(0, 8);
  }, [query]);

  const moduleCards: {
    id: ModuleTab;
    icon: typeof BookOpen;
    metric: string;
    title: string;
    desc: string;
  }[] = [
    {
      id: 'teori',
      icon: BookOpen,
      metric: `${THEORIES_DATA.length} Tokoh`,
      title: 'Teori Psikologi',
      desc: '6 bidang psikologi dari ±400 SM hingga modern beserta proposisi & sitasi APA 7.'
    },
    {
      id: 'dsm',
      icon: FileText,
      metric: `${DSM_DATA.length} Gangguan`,
      title: 'DSM-5-TR',
      desc: 'Kriteria A–E, kode ICD-10, durasi minimum, spesifikator & diagnosis banding.'
    },
    {
      id: 'diagnosa',
      icon: GitBranch,
      metric: '3 Jalur + 4 Kasus',
      title: 'Alur Diagnosa',
      desc: 'Pohon keputusan klinis interaktif, panduan MSE, formulasi 5P & studi kasus.'
    },
    {
      id: 'alat-ukur',
      icon: ClipboardList,
      metric: `${SCALES_DATA.length} Skala`,
      title: 'Alat Ukur',
      desc: 'Butir aitem, simulasi skor Likert, validitas, reliabilitas & sitasi APA 7.'
    },
    {
      id: 'adaptasi-skala',
      icon: FileSpreadsheet,
      metric: `${ADAPTATIONS_DATA.length} Adaptasi ID`,
      title: 'Adaptasi Skala',
      desc: 'Skala teradaptasi Bahasa Indonesia dari jurnal psikometri Indonesia + Save PDF.'
    },
    {
      id: 'artikel-jurnal',
      icon: Library,
      metric: `${JOURNALS_DATA.length} Open Access`,
      title: 'Artikel Jurnal',
      desc: 'Jurnal nasional & internasional open-access per sub-bidang psikologi + Save PDF.'
    },
    {
      id: 'kode-etik',
      icon: Scale,
      metric: 'HIMPSI',
      title: 'Kode Etik',
      desc: '5 prinsip umum, pasal kunci asesmen/riset & simulasi dilema etik.'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:px-6">
      {/* Main Glass Hero Search Panel */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel rounded-[28px] p-6 sm:p-9"
      >
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-violet-900 sm:text-4xl">
          Ruang Belajar Psikologi
        </h1>
        <p className="mt-2.5 w-full text-justify text-sm leading-relaxed text-slate-700 sm:text-base">
          Pusat referensi terstruktur untuk mahasiswa, asisten praktikum, dan pembelajar klinis:
          teori tokoh lintas bidang, kriteria diagnostik DSM-5-TR, pohon keputusan diagnosa, alat
          ukur psikometri, adaptasi skala Indonesia bersumber jurnal psikometri, artikel jurnal
          nasional &amp; internasional open-access, serta Kode Etik HIMPSI.
        </p>

        {/* Cross-Module Frosted Glass Search */}
        <div className="relative mt-6">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-600"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari cepat lintas modul (misal Piaget, F32, Bipolar, DASS-21, JP3I, Frontiers)..."
            aria-label="Cari cepat lintas modul"
            className="w-full rounded-full border border-white/80 bg-white/70 py-3.5 pl-11 pr-5 text-sm text-slate-900 shadow-xs backdrop-blur-md placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:bg-white/95 focus:outline-none focus:ring-2 focus:ring-violet-200"
          />
        </div>

        {/* Instant Cross-Module Results */}
        <AnimatePresence>
          {query.trim().length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.12 }}
              className="mt-4 rounded-2xl border border-white/75 bg-white/60 p-4 backdrop-blur-md"
            >
              <p className="text-xs font-semibold text-violet-900">
                Hasil pencarian lintas modul untuk &ldquo;{query.trim()}&rdquo; ({quickResults.length})
              </p>
              {quickResults.length === 0 ? (
                <p className="mt-2 text-sm text-slate-700">
                  Tidak ada kecocokan langsung. Coba kata kunci seperti <em>Piaget</em>,{' '}
                  <em>DASS-21</em>, <em>JP3I</em>, <em>Bipolar</em>, atau <em>Frontiers</em>.
                </p>
              ) : (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {quickResults.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onNavigate(item.tab, query.trim())}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/80 bg-white/80 p-3 text-left transition-all hover:bg-white hover:shadow-sm focus-visible:outline-2 focus-visible:outline-violet-600"
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-violet-700">{item.moduleLabel}</p>
                        <p className="truncate text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="truncate text-xs text-slate-500">{item.subtitle}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-violet-600" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Module Shortcut Glass Cards */}
      <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {moduleCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.16, delay: idx * 0.015, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="glass-card flex flex-col justify-between rounded-[24px] p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-700 text-white shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono-data text-xs font-bold text-violet-800">
                    {card.metric}
                  </span>
                </div>

                <h2 className="font-display mt-4 text-lg font-bold text-slate-900">
                  {card.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-700">{card.desc}</p>
              </div>

              <button
                type="button"
                onClick={() => onNavigate(card.id)}
                className="mt-5 inline-flex items-center gap-1.5 rounded text-xs font-bold text-violet-800 transition-colors hover:text-violet-950 focus-visible:outline-2 focus-visible:outline-violet-600"
              >
                <span>Buka Modul</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
