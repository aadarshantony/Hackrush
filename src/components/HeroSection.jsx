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
        tl.from(".hero-text", { y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 })
            .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
            .from([".hero-sub", ".hero-date"], { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
            .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
            .from(".hero-prize", { opacity: 0, y: 10, duration: 0.6 }, "-=0.4");
    }, { scope: container });

    return (
        <main ref={container} id='home' className="relative grow flex flex-col items-center justify-center text-center px-4 min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none"><ParticlesBackground /></div>
            <MouseGlow />
            <div className="relative z-10 flex flex-col items-center">

                <h1 className="text-6xl md:text-9xl font-black mb-4 select-none overflow-hidden pb-2 font-display tracking-tight max-sm:text-5xl">
                    <span className="hero-text inline-block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">HACK</span>
                    <span className="hero-text inline-block text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-purple-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)] ml-2 md:ml-4">RUSH</span>
                </h1>

                <div className="hero-tagline text-lg md:text-2xl font-light tracking-widest mb-5 space-x-4 font-display uppercase max-sm:text-sm">
                    <span className="text-cyan-300">Innovate</span><span className="text-gray-500">•</span>
                    <span className="text-purple-400">Build</span><span className="text-gray-500">•</span>
                    <span className="text-pink-400">Rush Beyond Limits</span>
                </div>

                <p className="hero-sub text-gray-400 mb-10 max-w-xl mx-auto text-lg max-sm:text-sm">A 15-hour hackathon by <span className="text-cyan-400 font-bold">Etcetera Club</span> & <span className="text-cyan-400 font-bold">IEDC</span>, MGM College Pampakuda</p>

                <div className="hero-date inline-block mb-10 px-8 py-3 max-sm:py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <span className="text-cyan-300 text-lg font-display tracking-wider max-sm:text-sm">JANUARY 24, 25 · 2026</span>
                </div>

                <a
                    href="https://forms.gle/oSM5HFeq3WKMZrH98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn group relative px-10 py-4 max-sm:py-2 mb-12 rounded-lg font-bold text-lg overflow-hidden cursor-pointer font-display tracking-wide uppercase inline-block"
                    onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: "power2.out" })}
                    onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" })}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 opacity-90" />
                    <span className="relative flex items-center gap-2 text-white">Register Now<span>→</span></span>
                </a>

                <p className="hero-prize text-gray-500 text-sm mb-10 font-medium">Compete for a <span className="text-cyan-400 font-bold">₹10,000</span> Prize Pool</p>
            </div>
        </main>
    )
}

export default HeroSection;