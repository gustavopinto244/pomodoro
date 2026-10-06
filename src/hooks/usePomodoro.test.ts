import { usePomodoro } from "./usePomodoro.ts";
import { renderHook, act } from "@testing-library/react";
import { vi } from 'vitest';

describe('Testa as usabilidades do hook principal da aplicacao', () => {
  it('inicia o pomodoro', () => {
    const { result } = renderHook(() => usePomodoro());

    expect(result.current.isRunning).toBe(false);
    expect(result.current.timeLeft).toBe(1500);
  })
  it('use start', () => {
    const { result } = renderHook(() => usePomodoro());
    act(() => {
            result.current.start();
        })
        expect(result.current.isRunning).toBe(true);
    });
    it('use pause', () => {
        const { result } = renderHook(() => usePomodoro());
        act(() => {
            result.current.start();
        })
        act(() => {
            result.current.pause();
        })
        expect(result.current.isRunning).toBe(false);
    });
    it('use reset', () => {
        const { result } = renderHook(() => usePomodoro());

        act(() => {
            result.current.reset();
        })
        expect(result.current.isRunning).toBe(false);
        expect(result.current.timeLeft).toBe(1500);
    });
    it('changeMode para o shortBreak', () => {
        const { result } = renderHook(() => usePomodoro());

        act(() => {
            result.current.changeMode('shortBreak');
        })

        expect(result.current.timeLeft).toBe(300);
        expect(result.current.isRunning).toBe(false);
    });
    beforeEach(() => {
        vi.useFakeTimers();
    });
    it('decrementa 1 segundo do timeLeft', () => {
      const { result } = renderHook(() => usePomodoro());
      act(() => {
        result.current.start()
      })
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(result.current.timeLeft).toBe(1499);
    });
    afterEach(() => {
        vi.useRealTimers();
    });
})
