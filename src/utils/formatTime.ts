export default function formatTime(time: number): string {

    if(time>60*60 || time < 0){
        const error = "Tempo no deve ser maior que 60 minutos ou ter valores negativos";
        throw new Error(error);
    }
    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const strMin = minutes>=10 ? `${minutes}` : `0${minutes}`;
    const strSec = seconds>=10 ? `${seconds}` : `0${seconds}`;;


    const stringTime = `${strMin}:${strSec}`
    
    return stringTime;
};