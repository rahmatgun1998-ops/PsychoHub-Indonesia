import { Home } from 'lucide-react';
import { motion } from 'motion/react';
import { ModuleTab } from '../types';

interface NavbarProps {
  activeTab: ModuleTab;
  onSelectTab: (tab: ModuleTab) => void;
}

const NAV_ITEMS: { id: ModuleTab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'teori', label: 'Teori' },
  { id: 'dsm', label: 'DSM' },
  { id: 'diagnosa', label: 'Diagnosa' },
  { id: 'alat-ukur', label: 'Alat Ukur' },
  { id: 'adaptasi-skala', label: 'Adaptasi Skala' },
  { id: 'artikel-jurnal', label: 'Artikel Jurnal' },
  { id: 'kode-etik', label: 'Kode Etik' }
];

export default function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  return (
    <header className="header-glass-shield fixed inset-x-0 top-0 z-50 px-3 pt-3 pb-2 sm:px-6">
      <div className="glass-navbar mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl px-4 py-2.5 min-[920px]:flex-row min-[920px]:items-center min-[920px]:justify-between min-[920px]:gap-3 min-[920px]:rounded-full min-[920px]:px-5 min-[920px]:py-2">
        {/* Top / Left Zone: Logo + Brand (+ compact Beranda on < 920px) */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onSelectTab('dashboard')}
            className="flex shrink-0 items-center gap-2 rounded-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            <img
              src="/assets/psi-logo.png"
              alt="Logo Ruang Belajar Psikologi"
              referrerPolicy="no-referrer"
              className="h-7 w-7 shrink-0 object-contain drop-shadow-xs xl:h-8 xl:w-8"
            />
            <span className="font-display whitespace-nowrap text-sm font-bold tracking-tight text-slate-900 xl:text-[16px]">
              Ruang Belajar Psikologi
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('landing')}
            className="glass-pill inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold text-violet-900 transition-all hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 min-[920px]:hidden"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Beranda</span>
          </button>
        </div>

        {/* Direct Navigation Menu Items inside Header Card (No Hamburger) */}
        <nav
          aria-label="Navigasi Modul Utama"
          className="flex w-full flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 min-[920px]:w-auto min-[920px]:justify-center min-[920px]:overflow-visible min-[920px]:pb-0"
        >
          {NAV_ITEMS.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 xl:px-3.5 xl:py-2 xl:text-[13px] ${
                  active ? 'text-white' : 'text-slate-700 hover:bg-white/65 hover:text-violet-800'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 620, damping: 42, mass: 0.65 }}
                    className="absolute inset-0 -z-10 rounded-full bg-violet-700 shadow-sm"
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Beranda CTA on Desktop */}
        <div className="hidden shrink-0 items-center min-[920px]:flex">
          <button
            type="button"
            onClick={() => onSelectTab('landing')}
            className="glass-pill inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold text-violet-900 transition-all hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 xl:px-4 xl:py-2"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Beranda</span>
          </button>
        </div>
      </div>
    </header>
  );
}
