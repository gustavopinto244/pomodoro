import {usePomodoro} from './hooks/usePomodoro';
import TimerDisplay from './components/TimerDisplay';
import ModeSelector from './components/ModeSelector';
import Controls from './components/Controls';

import './App.css'

function App() {
  const { timeLeft, isRunning, mode, start, pause, reset, changeMode } = usePomodoro();
  return (
    <main className="pomodoro-container">
      <ModeSelector mode={mode} onChangeMode={changeMode} />
      <TimerDisplay timeLeft={timeLeft} />
      <Controls isRunning={isRunning} onStart={start} onPause={pause} onReset={reset} />
    </main>
  );
}

export default App
