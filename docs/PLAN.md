# Planejamento do App Pomodoro (React + TypeScript + Vite)

Este documento detalha a arquitetura, funcionalidades e o passo a passo para a construção de um aplicativo simples de Pomodoro Timer.

Este é um roteiro de estudo, não uma arquitetura obrigatória. Siga o [acordo de aprendizado](../AGENTS.md) e o [fluxo de trabalho](DEV-FLOW.md): você escreve toda a implementação, incluindo tipos, testes e configurações. Os agentes detalham uma etapa por vez e revisam suas propostas. As sugestões abaixo são pontos de discussão, não requisitos para aprovação.

## 1. Stack Tecnológica
*   **Core:** [React](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Testes:** [Vitest](https://vitest.dev/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
*   **Estilização (Sugestão):** [Tailwind CSS](https://tailwindcss.com/) (rápido e flexível para focar na lógica)
*   **Ícones (Sugestão):** `lucide-react`

## 2. Funcionalidades Principais (MVP)
1.  **Temporizador:** Contagem regressiva do tempo.
2.  **Modos de Tempo:**
    *   Pomodoro (Trabalho): 25 minutos.
    *   Pausa Curta: 5 minutos.
    *   Pausa Longa: 15 minutos.
3.  **Controles:** Iniciar, Pausar e Resetar o temporizador.
4.  **Alerta (Opcional):** Tocar um som ou mudar a cor da tela ao fim do tempo.

## 3. Estrutura de Arquivos Proposta
```text
src/
├── components/
│   ├── TimerDisplay.tsx   # Exibe o tempo (ex: 25:00)
│   ├── Controls.tsx       # Botões Iniciar, Pausar, Resetar
│   └── ModeSelector.tsx   # Abas/Botões para trocar de modo
├── hooks/
│   └── usePomodoro.ts     # Lógica central do temporizador (Estado)
├── utils/
│   └── formatTime.ts      # Função para formatar segundos em MM:SS
├── App.tsx                # Componente principal que une tudo
└── App.css / index.css    # Estilos globais
```

## 4. Gerenciamento de Estado (Custom Hook `usePomodoro`)
A extração da lógica para um hook customizado pode ser estudada quando houver comportamento suficiente para discutir separação de responsabilidades. Não é um pré-requisito para começar.

**Estado sugerido:**
*   `mode`: `'pomodoro' | 'shortBreak' | 'longBreak'` (Modo atual)
*   `timeLeft`: `number` (Tempo restante em segundos)
*   `isRunning`: `boolean` (Se o timer está rodando)

**Ações (Funções retornadas pelo hook):**
*   `start()`: Inicia o timer.
*   `pause()`: Pausa o timer.
*   `reset()`: Reinicia o timer para o tempo padrão do modo atual.
*   `changeMode(newMode)`: Altera o modo e reseta o tempo de acordo com o novo modo.

> [!TIP]
> Use `setInterval` dentro de um `useEffect` no seu hook para diminuir o `timeLeft` a cada 1 segundo quando `isRunning` for verdadeiro. Lembre-se de limpar o intervalo no retorno do `useEffect` (`clearInterval`) para evitar memory leaks.

## 5. Plano de Testes (Vitest)

### Testes Unitários (`utils/formatTime.test.ts`)
*   Verificar se `formatTime(1500)` retorna `"25:00"`.
*   Verificar se `formatTime(65)` retorna `"01:05"`.
*   Verificar se `formatTime(9)` retorna `"00:09"`.

### Testes do Hook (`hooks/usePomodoro.test.ts`)
*   *(Dica: use `@testing-library/react` com `renderHook`)*
*   Garantir que o timer inicia com os valores padrão corretos (25 min, não rodando, modo pomodoro).
*   Garantir que `changeMode` altera o tempo restante corretamente (ex: mudar para pausa curta ajusta para 300 segundos).
*   Garantir que a função `reset` volta o timer para o início se o tempo tiver diminuído.

### Testes de Componentes (`components/...`)
*   **TimerDisplay:** Renderiza o tempo formatado corretamente baseado na prop recebida.
*   **Controls:** Os botões chamam as funções corretas enviadas por prop (`onStart`, `onPause`, `onReset`) quando clicados.

## 6. Passo a Passo de Execução

1.  **Setup do Projeto:**
    *   O projeto Vite já existe. Examine os arquivos e scripts atuais antes de modificar a configuração.
    *   Verifique o que já está configurado para Vitest e Testing Library e escreva os ajustes restantes como exercício, entendendo o propósito de cada um.
2.  **Lógica Utilitária:**
    *   Crie o arquivo `formatTime.ts` e seu respectivo teste (TDD). Garanta que os testes passem.
3.  **Lógica de Negócio:**
    *   Crie o hook `usePomodoro.ts` e implemente a lógica base de estado (sem o `setInterval` no início, apenas as transições de estado). Escreva os testes para ele.
4.  **UI - Componentes Básicos:**
    *   Crie os arquivos de componentes na pasta `components`. Desenhe a interface recebendo dados por `props`.
5.  **Integração (`App.tsx`):**
    *   No `App.tsx`, importe o hook `usePomodoro` e passe os estados (ex: `timeLeft`, `isRunning`) e ações (ex: `start`, `reset`) para os componentes visuais.
6.  **O "Coração" do Timer:**
    *   Volte no `usePomodoro.ts` e implemente o `useEffect` com o `setInterval` para fazer o tempo efetivamente passar.
7.  **Refinamento:**
    *   Estilize a aplicação da forma que preferir.
    *   Adicione alertas visuais ou sonoros, se desejar.
