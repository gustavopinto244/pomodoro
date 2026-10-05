import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import Controls from "./Controls";

describe('Controles do cronometro', () => {
  it('play', async() => {
    const user = userEvent.setup();
    const onStartMock = vi.fn();
    const onPauseMock = vi.fn();
    const onResetMock = vi.fn();

    render(<Controls isRunning={false} onStart={onStartMock} onPause={onPauseMock} onReset={onResetMock} label="Iniciar"/>);

    const botao = screen.getByRole('button', {name: /^iniciar/i});
    await user.click(botao);

    expect(onStartMock).toHaveBeenCalledTimes(1);
  });
  it('pause', async() => {
    const user = userEvent.setup();
  const onStartMock = vi.fn();
    const onPauseMock = vi.fn();
    const onResetMock = vi.fn();

    render(<Controls isRunning={true}  onStart={onStartMock} onPause={onPauseMock} onReset={onResetMock} label="Pausar"/>);

    const botao = screen.getByRole('button', {name: /pausar/i});
    await user.click(botao);

    expect(onPauseMock).toHaveBeenCalledTimes(1);
  });
  it('reset', async() => {
    const user = userEvent.setup();
    const onStartMock = vi.fn();
    const onPauseMock = vi.fn();
    const onResetMock = vi.fn();

    render(<Controls isRunning={false} onStart={onStartMock} onPause={onPauseMock} onReset={onResetMock} label="Reiniciar"/>);

    const botao = screen.getByRole('button', {name: /reiniciar/i});
    await user.click(botao);

    expect(onResetMock).toHaveBeenCalledTimes(1);
  });
})
