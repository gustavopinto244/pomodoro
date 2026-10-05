# Fluxo de aprendizado com agentes

Você escreve todo o código do Pomodoro: lógica, componentes, estilos, tipos, testes e configurações. Os agentes ajudam a entender, planejar, investigar e revisar. O [acordo comum](../AGENTS.md) define os limites de todos os papéis.

## Ciclo de uma etapa

1. **Escolher um comportamento.** Com o Tech Lead, defina uma tarefa pequena, o conceito a estudar e como verificar o resultado.
2. **Escrever sua tentativa.** Implemente a etapa e os testes pertinentes. Anote a intenção das decisões que ainda geram dúvida.
3. **Investigar dificuldades.** Quando necessário, use o Debugger com o erro, o comportamento esperado e o que já tentou. Execute a investigação sugerida e formule sua correção.
4. **Revisar o resultado.** Peça revisão da tentativa. Para mudanças de interface, inclua acessibilidade; não é necessário consultar todos os papéis em cada etapa.
5. **Ajustar e verificar.** Escreva as correções e execute as verificações combinadas. Explique o que mudou e por quê antes de avançar.

O tamanho da etapa deve permitir que você entenda o resultado. Se ficar difícil, divida a tarefa ou peça uma explicação mais concreta.

## Como pedir ajuda

| Situação | Exemplo de pedido |
| --- | --- |
| Próxima etapa | “Tech Lead, qual pequeno comportamento posso implementar agora e como verificá-lo?” |
| Conceito novo | “Explique o que é estado derivado e como reconhecê-lo, sem resolver minha tarefa.” |
| Erro | “Debugger, esperava que pausar mantivesse o tempo, mas ele continua diminuindo. Veja minha tentativa e me ajude a investigar.” |
| Revisão | “Reviewer, revise o que escrevi nesta etapa e indique o ajuste prioritário com sua justificativa.” |
| Acessibilidade | “Especialista em acessibilidade, como posso verificar meus controles usando apenas o teclado?” |
| Mais ajuda | “Não entendi a pista. Explique o conceito com um exemplo pequeno em outro contexto.” |

## Verificação e conclusão

Combine resultados observáveis antes de implementar. Você pode testar interações manualmente e escrever testes automatizados conforme os comportamentos forem introduzidos.

Consulte os scripts reais de `package.json` antes de escolher comandos. No momento desta reformulação, existem `npm run lint` e `npm run build`; ainda não existe script `npm test`. Configurar os testes é uma etapa de aprendizado, mesmo com as dependências já instaladas.

Uma etapa está pronta quando o comportamento combinado funciona, os erros relevantes foram corrigidos e você consegue explicar a solução. Registre verificações pendentes sem confundi-las com resultados aprovados. Não é necessário implementar melhorias avançadas fora da etapa para seguir adiante.

O [plano do aplicativo](PLAN.md) serve como referência de escopo. Sua estrutura sugerida pode evoluir a partir das suas tentativas.
