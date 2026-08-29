import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div
          key={idx}
          className="glass-card rounded-2xl p-3 sm:p-4 text-center border border-amber-500/25 gold-glow hover:scale-105 transition-transform"
        >
          <div className="text-2xl sm:text-4xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-400">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs font-semibold text-amber-200/70 tracking-widest uppercase mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};
