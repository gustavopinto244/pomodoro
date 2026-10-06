import { usePomodoro } from './hooks/usePomodoro';
import TimerDisplay from './components/TimerDisplay';
import ModeSelector from './components/ModeSelector';
import Controls from './components/Controls';
import type { Mode } from './types/ModeType';

import './App.css';

const themeStyles: Record<Mode, { bg: string; card: string; badge: string }> = {
  pomodoro: {
    bg: 'from-rose-950/70 via-stone-950 to-neutral-950',
    card: 'border-rose-500/20 shadow-rose-950/40',
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  },
  shortBreak: {
    bg: 'from-teal-950/70 via-stone-950 to-neutral-950',
    card: 'border-teal-500/20 shadow-teal-950/40',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  },
  longBreak: {
    bg: 'from-indigo-950/70 via-stone-950 to-neutral-950',
    card: 'border-indigo-500/20 shadow-indigo-950/40',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  },
};

function App() {
  const { timeLeft, isRunning, mode, start, pause, reset, changeMode } = usePomodoro();
  const currentTheme = themeStyles[mode];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${currentTheme.bg} flex flex-col items-center justify-center p-4 transition-colors duration-500 select-none`}>
      <header className="mb-6 text-center">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${currentTheme.badge} transition-all duration-300`}>
          <span>🍅</span>
          <span>Pomodoro Timer</span>
        </div>
      </header>

      <main className={`pomodoro-container w-full max-w-md bg-stone-900/60 backdrop-blur-xl border ${currentTheme.card} rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500`}>
        <ModeSelector mode={mode} onChangeMode={changeMode} />
        <TimerDisplay timeLeft={timeLeft} />
        <Controls isRunning={isRunning} onStart={start} onPause={pause} onReset={reset} />
      </main>

      <footer className="mt-8 text-xs text-stone-500 text-center">
        Técnica Pomodoro • Foco e Produtividade
      </footer>
    </div>
  );
}

export default App;
