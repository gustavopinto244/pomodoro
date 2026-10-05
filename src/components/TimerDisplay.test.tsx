import { render, screen } from '@testing-library/react';
import Timer from './TimerDisplay.tsx';

describe('Timer/Cronometro', () => {
    it('Recebe 1500 e renderiza 25:00', () => {
        render(<Timer timeLeft={1500}/>);

        const el = screen.getByText('25:00');

        expect(el).toBeInTheDocument();
    });
    it('Recebe 65 e renderiza 01:05', () => {
        render(<Timer timeLeft={65}/>);

        const el = screen.getByText('01:05');

        expect(el).toBeInTheDocument();
    })
})
