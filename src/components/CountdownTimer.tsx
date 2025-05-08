import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  targetDate: string;
}

function CountdownTimer({ targetDate }: Props) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const unitTranslations: { [key: string]: string } = {
    days: 'Dias',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos'
  };

  return (
    <div className="flex justify-center gap-4 w-full px-4">
    {Object.entries(timeLeft).map(([unit, value]) => (
      <div
        key={unit}
        className="flex flex-col items-center justify-center text-white w-[60px] sm:w-[80px]"
      >
        <div className="text-lg sm:text-2xl font-bold">{value}</div>
        <div className="text-[10px] sm:text-xs uppercase mt-1 font-light">
          {unitTranslations[unit] || unit}
        </div>
      </div>
    ))}
  </div>

  );
}

export default CountdownTimer;
