import formatTime from "../utils/formatTime";

type TimerDisplayProps = {
  timeLeft: number;
};

export default function TimerDisplay({ timeLeft }: TimerDisplayProps) {
  return (
    <div className="Timer my-8 text-center">
      <h2 className="text-7xl sm:text-8xl md:text-9xl font-mono font-extrabold tracking-tighter tabular-nums text-white drop-shadow-md select-none">
        {formatTime(timeLeft)}
      </h2>
    </div>
  );
}
