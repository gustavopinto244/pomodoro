import type { Mode } from '../types/ModeType';

type ModeSelectorProp = {
  mode: Mode;
  onChangeMode: (mode: Mode) => void;
};

export default function ModeSelector({ mode, onChangeMode }: ModeSelectorProp) {
  return (
    <div
      id="seletorDeModo"
      className="flex items-center justify-center p-1.5 bg-black/30 backdrop-blur-md rounded-2xl gap-1 border border-white/5"
    >
      <h3 className="sr-only">Selecao de Modos</h3>
      <div id="modoPomodoro" className="flex-1">
        <button
          type="button"
          onClick={() => onChangeMode('pomodoro')}
          aria-pressed={mode === 'pomodoro'}
          id="botaoPomodoro"
          className={`w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            mode === 'pomodoro'
              ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
              : 'text-stone-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Pomodoro
        </button>
      </div>
      <div id="modoDescansoCurto" className="flex-1">
        <button
          type="button"
          onClick={() => onChangeMode('shortBreak')}
          aria-pressed={mode === 'shortBreak'}
          id="botaoDescansoCurto"
          className={`w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            mode === 'shortBreak'
              ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
              : 'text-stone-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Descanso Curto
        </button>
      </div>
      <div id="modoDescansoLongo" className="flex-1">
        <button
          type="button"
          onClick={() => onChangeMode('longBreak')}
          aria-pressed={mode === 'longBreak'}
          id="botaoDescansoLongo"
          className={`w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            mode === 'longBreak'
              ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25'
              : 'text-stone-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Descanso Longo
        </button>
      </div>
    </div>
  );
}
