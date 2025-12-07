import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Brain, Users, Trophy, Puzzle, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyParticipateSection = () => {
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
          .from(".benefit-card", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.4");
    }, { scope: container });

    const handleHover = (e, color) => {
        gsap.to(e.currentTarget, { scale: 1.05, borderColor: color, boxShadow: `0 0 20px ${color}40`, duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-box"), { scale: 1.1, textShadow: `0 0 10px ${color}`, duration: 0.3 });
    };

    const handleLeave = (e) => {
        gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.1)", boxShadow: "none", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-box"), { scale: 1, textShadow: "none", duration: 0.3 });
    };

    const benefits = [
        { 
            icon: <Rocket size={24} />, 
            title: "Boost Your Skills", 
            desc: "Level up your technical abilities through hands-on experience.", 
            color: "#22d3ee" 
        },
        { 
            icon: <Brain size={24} />, 
            title: "Learn by Building", 
            desc: "Transform ideas into working prototypes in just 15 hours.", 
            color: "#a855f7" 
        },
        { 
            icon: <Users size={24} />, 
            title: "Network & Collaborate", 
            desc: "Connect with like-minded innovators and industry mentors.", 
            color: "#ec4899" 
        },
        { 
            icon: <Trophy size={24} />, 
            title: "₹10,000 Prize Pool", 
            desc: "Compete for exciting cash prizes and recognition.", 
            color: "#22d3ee" 
        },
        { 
            icon: <Puzzle size={24} />, 
            title: "Solve Real Challenges", 
            desc: "Tackle real-world problems with creative solutions.", 
            color: "#a855f7" 
        },
        { 
            icon: <Award size={24} />, 
            title: "Certificates for All", 
            desc: "Participation certificates for all, plus special recognition for top teams.", 
            color: "#ec4899" 
        }
    ];

    return (
        <section ref={container} className="relative w-full bg-[#090a0f] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-display uppercase section-title text-3xl md:text-5xl font-bold text-white mb-10 text-center">
                    Why <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Participate</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {benefits.map((b, i) => (
                        <div key={i} 
                            className="benefit-card p-5 rounded-xl bg-[#0E0F16] border border-white/10 cursor-pointer will-change-transform"
                            onMouseEnter={(e) => handleHover(e, b.color)}
                            onMouseLeave={handleLeave}
                        >
                            <div className="icon-box inline-flex p-2 rounded-lg bg-white/5 mb-3 transition-transform" style={{ color: b.color }}>
                                {b.icon}
                            </div>
                            <h3 className="font-display text-lg font-bold text-white mb-1">{b.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-sans">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyParticipateSection;