import formatTime from './formatTime';

describe('formatTime', () => {
    it('deve retornar "02:21" para 141 segundos', () => {
        expect(formatTime(141)).toBe("02:21");
    });

    it('deve retornar "00:05" para 5 segundos', () => {
        expect(formatTime(5)).toBe("00:05");
    });

    it('deve retornar "25:00" para 1500 segundos', () => {
        expect(formatTime(1500)).toBe("25:00");
    });

    it('deve retornar erro para valores negativos', () => {
        expect(()=> formatTime(-1)).toThrow("Tempo no deve ser maior que 60 minutos ou ter valores negativos");
    });
});
