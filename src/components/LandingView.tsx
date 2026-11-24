import { ArrowRight, BookOpen, ClipboardCheck, FileSpreadsheet, FileText, GitBranch, Scale } from 'lucide-react';
import { motion } from 'motion/react';
import { ModuleTab } from '../types';

interface LandingViewProps {
  onStart: (tab?: ModuleTab) => void;
  counts: {
    theories: number;
    dsm: number;
    scales: number;
    adaptations: number;
    journals: number;
  };
}

export default function LandingView({ onStart, counts }: LandingViewProps) {
  const quickTiles: {
    tab: ModuleTab;
    icon: typeof BookOpen;
    label: string;
    value: string;
  }[] = [
    { tab: 'teori', icon: BookOpen, label: 'Teori Tokoh', value: `${counts.theories} Tokoh` },
    { tab: 'dsm', icon: FileText, label: 'DSM-5-TR', value: `${counts.dsm} Gangguan` },
    {
      tab: 'adaptasi-skala',
      icon: FileSpreadsheet,
      label: 'Adaptasi Skala',
      value: `${counts.adaptations} Skala ID`
    },
    {
      tab: 'artikel-jurnal',
      icon: ClipboardCheck,
      label: 'Artikel Jurnal',
      value: `${counts.journals} Open Access`
    },
    { tab: 'alat-ukur', icon: Scale, label: 'Alat Ukur', value: `${counts.scales} Instrumen` },
    { tab: 'diagnosa', icon: GitBranch, label: 'Diagnosa & Etik', value: 'Interaktif' }
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Hero Column */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 lg:col-span-7"
        >
          <div className="inline-flex items-center">
            <img
              src="/assets/psi-logo.png"
              alt="Logo Ruang Belajar Psikologi"
              referrerPolicy="no-referrer"
              className="h-24 w-24 object-contain drop-shadow-[0_14px_28px_rgba(91,33,182,0.3)] sm:h-28 sm:w-28 lg:h-32 lg:w-32"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide text-violet-900">
              Selamat Datang di
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-violet-950 text-balance sm:text-5xl lg:text-6xl">
              Ruang Belajar Psikologi
            </h1>
          </div>

          <p className="w-full text-justify text-base leading-relaxed text-slate-800 sm:text-lg">
            Teori psikologi lintas era, ensiklopedia DSM-5-TR terstruktur, alur diagnosa klinis,
            alat ukur psikometri terstandar, adaptasi skala Indonesia, direktori artikel jurnal
            open-access, dan Kode Etik HIMPSI dalam satu ruang belajar.
          </p>
        </motion.div>

        {/* Right Glass Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.03, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="glass-panel rounded-[28px] p-7 sm:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
              Mulai Belajar Sekarang
            </h2>
            <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">
              Akses langsung pustaka materi klinis, adaptasi skala psikometri Indonesia, jurnal
              nasional &amp; internasional open-access, serta ekspor ringkasan PDF.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {quickTiles.map((tile, idx) => {
                const Icon = tile.icon;
                return (
                  <motion.button
                    key={tile.tab}
                    type="button"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.14, delay: 0.03 + idx * 0.015, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -2 }}
                    onClick={() => onStart(tile.tab)}
                    className="group rounded-2xl border border-white/80 bg-white/65 p-3.5 text-left backdrop-blur-xs transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-violet-600"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-700">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{tile.label}</span>
                    </div>
                    <p className="font-mono-data mt-1 text-base font-bold text-slate-900">
                      {tile.value}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onStart('dashboard')}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-700 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_-6px_rgba(91,33,182,0.55)] transition-colors hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            >
              <span>Mulai</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
