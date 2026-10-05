import { Mode } from '../types/ModeType'

type ModeSelectorProp = {
  mode: Mode,
  onChangeMode : (mode: Mode) => void;
};

export default function ModeSelector ({mode, onChangeMode} : ModeSelectorProp){
  return(
    <div id="seletorDeModo">
      <h3>Selecao de Modos</h3>
      <div id="modoPomodoro">
        <button type="button" onClick={() => onChangeMode('pomodoro')} aria-pressed={mode==='pomodoro'} id="botaoPomodoro">Pomodoro</button>
      </div>
      <div id="modoDescansoCurto">
        <button type="button" onClick={() => onChangeMode('shortBreak')} aria-pressed={mode==='shortBreak'} id="botaoDescansoCurto">Descanso Curto</button>
      </div>
      <div id="modoDescansoLongo">
        <button type="button" onClick={() => onChangeMode('longBreak')} aria-pressed={mode==='longBreak'} id="botaoDescansoLongo">Descanso Longo</button>
      </div>
    </div>
  )
}
