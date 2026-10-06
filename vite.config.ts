/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,                  // Permite usar describe, it, expect sem importar em cada arquivo
    environment: 'jsdom',           // Simula o ambiente de navegador
    setupFiles: './src/setupTests.ts', // Arquivo de setup executado antes de cada suíte
    css: false,                     // Não processa CSS durante os testes (ganho expressivo de performance)
  },
});