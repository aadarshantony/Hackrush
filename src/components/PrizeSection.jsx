import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Crown, Lightbulb, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PrizeSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".prize-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".podium-card", { y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: "elastic.out(1, 0.6)" }, "-=0.5")
          .from(".category-card", { scale: 0.9, opacity: 0, duration: 0.8 }, "-=0.8")
          .from(".swag-strip", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");

    }, { scope: container });

    return (
        <section ref={container} id="prizes" className="prizes relative w-full bg-[#090a0f] py-16 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                
                <div className="text-center mb-12 space-y-3">
                    <h2 className="prize-title text-3xl md:text-5xl font-black text-white uppercase tracking-wider font-display">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            Rewards
                        </span>
                    </h2>
                    <p className="prize-title text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Win from a prize pool of <span className="text-cyan-400 font-bold">₹10,000</span> plus exclusive swags.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:items-end">
                    
                    <PodiumCard 
                        rank="2nd Place" amount="₹3,000" color="silver" 
                        icon={<Trophy className="w-6 h-6 text-gray-300" />} 
                    />

                    <div className="order-first md:order-0 relative mb-6 md:mb-0 z-20 podium-card">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce">
                            <Crown className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]" fill="currentColor" />
                        </div>
                        <PodiumCard 
                            rank="Champion" amount="₹5,000" color="gold" isWinner={true}
                            icon={<Trophy className="w-8 h-8 text-yellow-900" />} 
                            isWrapped={true}
                        />
                    </div>

                    <PodiumCard 
                        rank="3rd Place" amount="₹2,000" color="bronze" 
                        icon={<Trophy className="w-6 h-6 text-orange-400" />} 
                    />
                </div>

                <div className="mb-12 flex justify-center items-center">
                    <div className="category-card group w-full max-w-md p-4 rounded-xl bg-[#13131d] border border-white/5 cursor-default flex items-center gap-4 will-change-transform"
                         onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#a855f7", backgroundColor: "rgba(168,85,247,0.05)", duration: 0.3 })}
                         onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#13131d", duration: 0.3 })}
                    >
                        <div className="p-2.5 rounded-lg bg-white/5">
                            <Lightbulb className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-white font-display tracking-wide">Special Certificates</h4>
                            <p className="text-xs text-gray-500">For top performing teams</p>
                        </div>
                    </div>
                </div>

                <div className="swag-strip w-full rounded-xl bg-linear-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-white/10 p-6 backdrop-blur-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-cyan-400"><Gift className="w-6 h-6" /></div>
                            <div>
                                <h4 className="text-lg font-bold text-white font-display tracking-wide">Participation Perks</h4>
                                <p className="text-gray-400 text-xs">Every participant gets exclusive Hackrush loot!</p>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                            {["📜 Certificates", "🎯 KTU-Points", "🍕 Food & Drinks", "🏷️ Club-Card"].map((perk, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                    {perk}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const PodiumCard = ({ rank, amount, color, isWinner, icon, isWrapped }) => {
    const styles = {
        gold: "bg-linear-to-b from-yellow-500/20 to-yellow-900/5 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-105",
        silver: "bg-linear-to-b from-gray-400/10 to-gray-900/5 border-gray-400/30",
        bronze: "bg-linear-to-b from-orange-500/10 to-orange-900/5 border-orange-500/30"
    };
    const textColors = { gold: "text-yellow-400", silver: "text-gray-300", bronze: "text-orange-400" };

    return (
        <div 
            className={`${!isWrapped ? 'podium-card' : ''} relative w-full md:w-64 p-6 rounded-2xl border flex flex-col items-center text-center cursor-pointer will-change-transform ${styles[color]}`}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, scale: isWinner ? 1.1 : 1.05, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, scale: isWinner ? 1.05 : 1, duration: 0.3 })}
        >
            <div className="mb-3 p-3 rounded-full bg-black/30 border border-white/5">{icon}</div>
            <span className={`text-xs font-bold uppercase tracking-widest mb-1 font-display ${textColors[color]}`}>{rank}</span>
            <h3 className="text-3xl md:text-4xl font-black text-white font-display tracking-wider mb-1">{amount}</h3>
            {isWinner && <span className="text-[10px] text-yellow-500/80 font-medium tracking-wide">+ Exclusive Trophy</span>}
        </div>
    );
};

export default PrizeSection;