import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import ModeSelector from './ModeSelector'
import type { Mode } from '../types/ModeType'

describe('selecionador de modos', () => {
  it('botao modo pomodoro', async () => {
    const user = userEvent.setup();
    const onChangeModeMock = vi.fn<(mode:Mode) => void>();

    render(<ModeSelector mode="longBreak" onChangeMode={onChangeModeMock}/>);
    const botao = screen.getByRole('button', {name: /^pomodoro/i});
    await user.click(botao);

    expect(onChangeModeMock).toHaveBeenCalledTimes(1);
    expect(onChangeModeMock).toHaveBeenCalledWith('pomodoro');
  });
  it('botao modo descanso curto', async () => {
    const user = userEvent.setup();
    const onChangeModeMock = vi.fn<(mode:Mode) => void>();

    render(<ModeSelector mode="pomodoro" onChangeMode={onChangeModeMock}/>);
    const botao = screen.getByRole('button', {name: /^descanso curto/i});
    await user.click(botao);

    expect(onChangeModeMock).toHaveBeenCalledTimes(1);
    expect(onChangeModeMock).toHaveBeenCalledWith('shortBreak');
  });
  it('botao modo descanso longo', async () => {
    const user = userEvent.setup();
    const onChangeModeMock = vi.fn<(mode:Mode) => void>();

    render(<ModeSelector mode="shortBreak" onChangeMode={onChangeModeMock}/>);
    const botao = screen.getByRole('button', {name: /^descanso longo/i});
    await user.click(botao);

    expect(onChangeModeMock).toHaveBeenCalledTimes(1);
    expect(onChangeModeMock).toHaveBeenCalledWith('longBreak');
  });
})
