import { useCallback, useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import DashboardView from './components/DashboardView';
import DiagnosaView from './components/DiagnosaView';
import DsmView from './components/DsmView';
import EthicsView from './components/EthicsView';
import JournalsView from './components/JournalsView';
import LandingView from './components/LandingView';
import Navbar from './components/Navbar';
import ScaleAdaptationView from './components/ScaleAdaptationView';
import ScalesView from './components/ScalesView';
import TheoryView from './components/TheoryView';
import { ADAPTATIONS_DATA } from './data/adaptationsData';
import { DSM_DATA } from './data/dsmData';
import { JOURNALS_DATA } from './data/journalsData';
import { SCALES_DATA } from './data/scalesData';
import { THEORIES_DATA } from './data/theoriesData';
import { ModuleTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ModuleTab>('landing');
  const [prefillQuery, setPrefillQuery] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleNavigate = (tab: ModuleTab, query = '') => {
    setPrefillQuery(query);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-canvas relative min-h-screen overflow-x-clip">
        {/* Ambient Glass Floating Orbs + Subtle Uploaded Emblem Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden select-none"
        >
          <motion.div
            animate={{ x: [0, 26, 0], y: [0, 18, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/45 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -24, 0], y: [0, 28, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[-100px] top-16 h-[460px] w-[460px] rounded-full bg-violet-400/25 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-120px] left-1/3 h-[480px] w-[480px] rounded-full bg-indigo-300/30 blur-3xl"
          />

          <div className="flex h-full w-full items-center justify-center">
            <img
              src="/assets/psi-logo.png"
              alt=""
              referrerPolicy="no-referrer"
              className="h-[24rem] w-[24rem] object-contain opacity-[0.065] sm:h-[32rem] sm:w-[32rem]"
            />
          </div>
        </div>

        <div className="relative z-10 min-h-screen pb-14">
          {activeTab === 'landing' ? (
            <motion.div
              key="landing-screen"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <LandingView
                onStart={(tab = 'dashboard') => handleNavigate(tab)}
                counts={{
                  theories: THEORIES_DATA.length,
                  dsm: DSM_DATA.length,
                  scales: SCALES_DATA.length,
                  adaptations: ADAPTATIONS_DATA.length,
                  journals: JOURNALS_DATA.length
                }}
              />
            </motion.div>
          ) : (
            <>
              <Navbar activeTab={activeTab} onSelectTab={(tab) => handleNavigate(tab)} />

              <motion.main
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="pt-[108px] min-[920px]:pt-[74px]"
              >
                {activeTab === 'dashboard' && <DashboardView onNavigate={handleNavigate} />}
                {activeTab === 'teori' && (
                  <TheoryView
                    key={`teori-${prefillQuery}`}
                    initialQuery={prefillQuery}
                    onNotify={showToast}
                  />
                )}
                {activeTab === 'dsm' && (
                  <DsmView key={`dsm-${prefillQuery}`} initialQuery={prefillQuery} />
                )}
                {activeTab === 'diagnosa' && <DiagnosaView />}
                {activeTab === 'alat-ukur' && (
                  <ScalesView
                    key={`scales-${prefillQuery}`}
                    initialQuery={prefillQuery}
                    onNotify={showToast}
                  />
                )}
                {activeTab === 'adaptasi-skala' && (
                  <ScaleAdaptationView
                    key={`adapt-${prefillQuery}`}
                    initialQuery={prefillQuery}
                    onNotify={showToast}
                  />
                )}
                {activeTab === 'artikel-jurnal' && (
                  <JournalsView
                    key={`journal-${prefillQuery}`}
                    initialQuery={prefillQuery}
                    onNotify={showToast}
                  />
                )}
                {activeTab === 'kode-etik' && <EthicsView />}
              </motion.main>
            </>
          )}
        </div>

        {/* Non-blocking Animated Glass Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl border border-white/25 bg-violet-950/90 px-4 py-3 text-xs font-semibold text-white shadow-xl backdrop-blur-lg"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <span>{toast}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
