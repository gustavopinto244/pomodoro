import { useState } from "react";

import { Mode } from '../types/ModeType';

const TempoPorModo: Record<Mode, number> = {
  pomodoro: 1500,
  shortBreak: 300,
  longBreak: 600,
};

export function usePomodoro() {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<Mode>('pomodoro');

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(TempoPorModo[mode]);
  };

  const changeMode = (mode: Mode) => {
    if (mode === 'pomodoro') {
      setIsRunning(false);
      setTimeLeft(1500);
      setMode('pomodoro');
    } else if (mode === 'shortBreak') {
      setIsRunning(false);
      setTimeLeft(300);
      setMode('shortBreak');
    } else if (mode === 'longBreak') {
      setIsRunning(false);
      setTimeLeft(600);
      setMode('longBreak');
    } else {
      throw new Error('Modo invalido');
    }
  };

  return {
    // Estados
    timeLeft,
    isRunning,
    mode,

    // Metodos
    start,
    pause,
    reset,
    changeMode,
  };
}
