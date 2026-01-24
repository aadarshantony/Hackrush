import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import MouseGlow from './MouseGlow';
import ParticlesBackground from './ParticlesBackground';

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-text", {
            y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2
        })
        .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".status-badge", { scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");
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
                    <span className="text-cyan-300">Innovated</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-purple-400">Built</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-pink-400">Rushed Beyond Limits</span>
                </div>

                <p className="hero-sub text-gray-400 mb-12 max-w-xl mx-auto text-lg max-sm:text-sm leading-relaxed">
                    The 16-hour sprint by{" "}
                    <span className="text-cyan-400 font-bold">Etcetera Club</span> &{" "}
                    <span className="text-cyan-400 font-bold">IEDC</span>, MGMCET Pampakuda
                    <br /> has officially come to an end.
                </p>

                {/* Event Status Indicator */}
                <div className="status-badge group flex flex-col items-center">
                    <div className="px-8 py-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl">
                        <span className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-20"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600/80"></span>
                            </span>
                            Mission Accomplished
                        </span>
                    </div>
                    <p className="mt-6 text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                        See you in the next edition
                    </p>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;