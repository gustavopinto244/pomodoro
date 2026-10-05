type ControlProps = {
  isRunning : boolean,
  onStart : () => void,
  onPause : () => void,
  onReset : () => void
}

export default function Controls({isRunning, onStart, onPause, onReset} : ControlProps) {
  return(
    <div className="barraBotoes">
      <div className="pausa-inicia">
        {isRunning ?
        <button type="button" onClick={onPause} className="botaoPause" disabled={false} aria-label="Pausar cronometro">Pausar</button> :
        <button type="button" onClick={onStart} className="botaoInicia" disabled={false} aria-label="Iniciar cronometro">Iniciar</button>
        }
      </div>
      <div className="reinicia">
        <button type="button" onClick={onReset} className="botaoReseta" disabled={false} aria-label="Reiniciar cronometro">Reiniciar</button>
      </div>
    </div>
  )
}
