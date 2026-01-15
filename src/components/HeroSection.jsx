import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import MouseGlow from './MouseGlow';
import ParticlesBackground from './ParticlesBackground';
import CountdownTimer from './CountdownTimer';

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-text", {
            y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2
        })
        .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
        .from([".hero-sub", ".hero-date"], { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from(".countdown-container", { scale: 0.9, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-prize", { opacity: 0, y: 15, duration: 0.6 }, "-=0.3");
    }, { scope: container });

    return (
        <main
            ref={container}
            id="home"
            className="relative grow flex flex-col items-center justify-center text-center px-4 pt-20 min-h-screen overflow-hidden bg-black"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <ParticlesBackground />
            </div>

            <MouseGlow />

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-6xl md:text-9xl font-black mb-4 select-none overflow-hidden pb-2 font-display tracking-tight max-sm:text-5xl">
                    <span className="hero-text inline-block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                        HACK
                    </span>
                    <span className="hero-text inline-block text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-purple-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)] ml-2 md:ml-4">
                        RUSH
                    </span>
                </h1>

                <div className="hero-tagline text-lg md:text-2xl font-light tracking-widest mb-5 space-x-4 font-display uppercase max-sm:text-sm">
                    <span className="text-cyan-300">Innovate</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-purple-400">Build</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-pink-400">Rush Beyond Limits</span>
                </div>

                <p className="hero-sub text-gray-400 mb-8 max-w-xl mx-auto text-lg max-sm:text-sm leading-relaxed">
                    A 16-hour hackathon by{" "}
                    <span className="text-cyan-400 font-bold">Etcetera Club</span> &{" "}
                    <span className="text-cyan-400 font-bold">IEDC</span>, MGMCET Pampakuda
                </p>

                <div className="countdown-container flex flex-col items-center mb-10">
                    <p className="text-orange-400/90 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] italic mb-4">
                        Registrations closed • Sprint starts in:
                    </p>
                    
                    {/* The separate timer component prevents the whole page from re-rendering */}
                    <CountdownTimer targetDate="January 23, 2026 16:00:00" />
                </div>

                <div className="hero-prize bg-white/[0.03] border border-white/10 backdrop-blur-md px-10 py-5 rounded-2xl">
                    <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-[0.2em] mb-1">
                        Total Rewards Worth{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-white to-purple-400 font-black text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                            ₹2,00,000+
                        </span>
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]">
                        PLUS{" "}
                        <span className="text-white font-black underline decoration-cyan-500/50 underline-offset-4">
                            ₹10,000 CASH
                        </span>{" "}
                        PRIZE POOL
                    </p>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;