import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LEDWallDashboard = () => {
    const container = useRef(null);
    const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" });
    const [eventStatus, setEventStatus] = useState("WAITING TO START");

    // Event Config
    const SPRINT_START = new Date("January 23, 2026 16:00:00").getTime();
    const SPRINT_DURATION_HOURS = 16;
    const SPRINT_END = SPRINT_START + (SPRINT_DURATION_HOURS * 60 * 60 * 1000);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            let target = SPRINT_START;
            let status = "STARTING SOON";

            // If we are past start but before end
            if (now >= SPRINT_START && now < SPRINT_END) {
                target = SPRINT_END;
                status = "SPRINT IN PROGRESS";
            } else if (now >= SPRINT_END) {
                status = "SPRINT FINISHED";
                setTimeLeft({ h: "00", m: "00", s: "00" });
                setEventStatus(status);
                return;
            }

            const difference = target - now;
            setEventStatus(status);

            const h = Math.floor(difference / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                h: h.toString().padStart(2, '0'),
                m: m.toString().padStart(2, '0'),
                s: s.toString().padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useGSAP(() => {
        // Red pulse when the sprint is live
        if (eventStatus === "SPRINT IN PROGRESS") {
            gsap.to(".live-indicator", { opacity: 0.3, duration: 0.8, repeat: -1, yoyo: true });
        }
    }, [eventStatus]);

    return (
        <div ref={container} className="h-screen w-screen bg-black text-white flex flex-col items-center justify-between p-12 overflow-hidden font-display">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-1000 ${eventStatus === "SPRINT IN PROGRESS" ? 'bg-red-500/5' : 'bg-cyan-500/5'}`} />
            </div>

            {/* HEADER */}
            <div className="relative z-10 w-full flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-5xl font-black tracking-tighter text-white">HACKRUSH <span className="text-cyan-400">2026</span></h2>
                    <p className="text-gray-500 uppercase tracking-[0.4em] text-lg">16-Hour Innovation Sprint</p>
                </div>
                <div className="text-right">
                    <span className="text-gray-500 text-sm uppercase block mb-1">Status</span>
                    <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full live-indicator ${eventStatus === "SPRINT IN PROGRESS" ? 'bg-red-500' : 'bg-cyan-400'}`} />
                        <span className={`text-3xl font-black uppercase ${eventStatus === "SPRINT IN PROGRESS" ? 'text-red-500' : 'text-cyan-400'}`}>
                            {eventStatus}
                        </span>
                    </div>
                </div>
            </div>

            {/* MAIN CLOCK AREA */}
            <div className="relative z-10 flex flex-col items-center justify-center grow">
                <p className="text-gray-500 text-3xl uppercase tracking-[1.2em] mb-12 font-light">
                    {eventStatus === "SPRINT IN PROGRESS" ? "Time Remaining" : "Countdown to Launch"}
                </p>
                
                <div className="flex items-center justify-center gap-10">
                    <TimeBlock value={timeLeft.h} label="Hours" />
                    <Separator />
                    <TimeBlock value={timeLeft.m} label="Minutes" />
                    <Separator />
                    <TimeBlock value={timeLeft.s} label="Seconds" />
                </div>
            </div>

            {/* FOOTER TICKER */}
            <div className="relative z-10 w-full bg-white/[0.03] border border-white/10 backdrop-blur-md p-10 rounded-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee items-center gap-20">
                    <TickerItem text="KEEP BUILDING" color="text-cyan-400" />
                    <TickerItem text="Caffeeteria open 24/7" />
                    <TickerItem text="TAG US @etc.etcetera.in" color="text-purple-400" />
                    <TickerItem text="HACK THE FUTURE" />
                    <TickerItem text="NEED HELP? FIND A MENTOR" color="text-orange-400" />
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
};

// Sub-components for cleaner code
const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <span className="text-[24rem] font-black leading-[0.8] tracking-tighter tabular-nums drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            {value}
        </span>
        <span className="text-3xl uppercase tracking-[0.5em] text-gray-600 mt-10 font-bold">{label}</span>
    </div>
);

const Separator = () => (
    <span className="text-[15rem] font-light text-gray-800 mb-20">:</span>
);

const TickerItem = ({ text, color = "text-white" }) => (
    <div className="flex items-center gap-8">
        <span className={`text-3xl font-black italic uppercase ${color}`}>{text}</span>
        <span className="text-gray-700 text-4xl">/</span>
    </div>
);

export default LEDWallDashboard;