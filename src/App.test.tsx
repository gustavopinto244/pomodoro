import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

describe('App (Smoke Test de Configuração)', () => {
  it('deve renderizar o componente principal sem falhas', () => {
    render(<App />);
    // Verifica se qualquer elemento padrão existe
    expect(document.body).toBeInTheDocument();
  });
  it('Inicia com o timer em 25:00', () => {
    render(<App />);
    const el = screen.getByText("25:00");
    expect(el).toBeInTheDocument();
  });
  it('Botao iniciar esta presente', () => {
    render(<App />);
    const el = screen.getByRole("button", {name: /^iniciar/i});
    expect(el).toBeInTheDocument();
  });
  it('Botao pausar nao esta presente', () => {
    render(<App />);
    const el = screen.queryByRole("button", {name: /^pausar/i});
    expect(el).not.toBeInTheDocument();
  });
  it('testa clique no botao de pausa', async () => {
    render(<App/>);

    const user = userEvent.setup();
    const botaoIniciar = screen.getByRole("button", {name: /^iniciar/i});
    await user.click(botaoIniciar)

    const botaoPausar = screen.getByRole("button", {name: /^pausar/i});

    await user.click(botaoPausar);

    expect(botaoIniciar).toBeInTheDocument();
  })
});
