import formatTime from "../utils/formatTime";

type TimerDisplayProps = {
  timeLeft: number;
}

export default function TimerDisplay({timeLeft} : TimerDisplayProps) {
  return(
    <div className='Timer'>
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
}
