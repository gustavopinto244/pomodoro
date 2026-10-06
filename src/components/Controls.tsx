type ControlProps = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

export default function Controls({ isRunning, onStart, onPause, onReset }: ControlProps) {
  return (
    <div className="barraBotoes flex items-center justify-center gap-3 sm:gap-4 mt-2">
      <div className="pausa-inicia">
        {isRunning ? (
          <button
            type="button"
            onClick={onPause}
            className="botaoPause w-36 sm:w-44 py-3.5 px-6 rounded-2xl font-bold text-base sm:text-lg text-white bg-amber-500 hover:bg-amber-600 active:scale-95 shadow-lg shadow-amber-500/25 transition-all duration-200 cursor-pointer"
            disabled={false}
            aria-label="Pausar cronometro"
          >
            Pausar
          </button>
        ) : (
          <button
            type="button"
            onClick={onStart}
            className="botaoInicia w-36 sm:w-44 py-3.5 px-6 rounded-2xl font-bold text-base sm:text-lg text-white bg-rose-500 hover:bg-rose-600 active:scale-95 shadow-lg shadow-rose-500/25 transition-all duration-200 cursor-pointer"
            disabled={false}
            aria-label="Iniciar cronometro"
          >
            Iniciar
          </button>
        )}
      </div>
      <div className="reinicia">
        <button
          type="button"
          onClick={onReset}
          className="botaoReseta py-3.5 px-5 sm:px-6 rounded-2xl font-semibold text-base text-stone-200 hover:text-white bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 transition-all duration-200 cursor-pointer"
          disabled={false}
          aria-label="Reiniciar cronometro"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
