import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Lock, Timer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ThemesSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".section-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".hint-box", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".lock-card", { scale: 0.9, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");

    }, { scope: container });

    return (
        <section ref={container} id="themes" className="relative w-full bg-[#0e0c16] py-16 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                
                <h2 className="themes uppercase font-display text-3xl md:text-5xl font-black text-white mb-8 tracking-wide">
                    Hackathon <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Themes</span>
                </h2>

                <div className="hint-box font-sans inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-12">
                    <Lightbulb className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <p className="text-gray-300 text-sm md:text-base font-medium">
                        Hint: Your project should solve a <span className="text-white font-bold underline decoration-purple-500 underline-offset-4">real-life problem</span>.
                    </p>
                </div>

                <div 
                    className="lock-card p-10 rounded-3xl bg-[#13131d] border border-white/10 flex flex-col items-center justify-center space-y-6 relative overflow-hidden group cursor-default will-change-transform"
                    onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#22d3ee", boxShadow: "0 0 30px rgba(34,211,238,0.1)", duration: 0.3 })}
                    onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.1)", boxShadow: "none", duration: 0.3 })}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-xl"></div>
                        <Lock className="w-14 h-14 text-cyan-400 relative z-10" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white font-display">
                            Themes are currently <span className="text-cyan-400">Locked</span>
                        </h3>
                        <p className="text-gray-400 text-base flex items-center justify-center gap-2">
                            <Timer className="w-4 h-4" />
                            Will be revealed 24 hours before the hackathon.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ThemesSection;