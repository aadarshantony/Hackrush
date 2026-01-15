import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [isLive, setIsLive] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const destination = new Date(targetDate).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = destination - now;

            if (distance < 0) {
                setIsLive(true);
                clearInterval(timer);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (isLive) {
        return (
            <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-red-500 bg-red-500/10 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-white font-black uppercase tracking-[0.2em] text-lg">Live Now</span>
            </div>
        );
    }

    return (
        <div className="flex gap-4 md:gap-8">
            {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-black text-white font-display drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mt-1">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;