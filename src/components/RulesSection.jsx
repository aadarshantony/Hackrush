import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Terminal, Scale, Sparkles, Bot, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RulesSection = () => {
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
          .from(".rule-card", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.4");
    }, { scope: container });

    const handleHover = (e, color) => {
        gsap.to(e.currentTarget, { scale: 1.02, borderColor: color, backgroundColor: "rgba(255,255,255,0.03)", boxShadow: `0 0 20px ${color}20`, duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-box"), { scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", duration: 0.3 });
    };

    const handleLeave = (e) => {
        gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#0E0F16", boxShadow: "none", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-box"), { scale: 1, backgroundColor: "rgba(255,255,255,0.05)", duration: 0.3 });
    };

    const rules = [
        { icon: <Users size={20} />, title: "Team Size", desc: "Teams of 2-4 members only. Individual participation is not permitted.", color: "#22d3ee", textColor: "text-cyan-400" },
        { icon: <Terminal size={20} />, title: "Tools & Tech", desc: "Any stack allowed. Open-source libraries encouraged.", color: "#a855f7", textColor: "text-purple-500" },
        { 
            icon: <Scale size={20} />, title: "Judging Criteria", isList: true, 
            list: ["Innovation", "Feasibility", "Execution", "UI/UX", "Impact"], 
            color: "#ec4899", textColor: "text-pink-500" 
        },
        { icon: <Sparkles size={20} />, title: "Originality", desc: "Code must be written during the hackathon. No pre-built templates.", color: "#22d3ee", textColor: "text-cyan-400" },
        { icon: <Bot size={20} />, title: "AI Usage", desc: "AI tools allowed but must be disclosed. Work must be original.", color: "#a855f7", textColor: "text-purple-500" },
        { icon: <ShieldCheck size={20} />, title: "Code of Conduct", desc: "Respectful behavior mandatory. Zero tolerance for plagiarism.", color: "#ec4899", textColor: "text-pink-500" }
    ];

    return (
        <section ref={container} id="rules" className="relative w-full bg-[#090A0F] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-3xl md:text-5xl font-black text-center mb-12 uppercase tracking-wide text-white font-display">
                    Rules & <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Guidelines</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rules.map((rule, i) => (
                        <div key={i}
                            className="rule-card p-5 rounded-xl bg-[#0E0F16] border border-white/10 cursor-default will-change-transform"
                            onMouseEnter={(e) => handleHover(e, rule.color)}
                            onMouseLeave={handleLeave}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`icon-box p-2 rounded-lg bg-white/5 transition-colors ${rule.textColor}`}>
                                    {rule.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white font-display tracking-wide">{rule.title}</h3>
                            </div>

                            {rule.isList ? (
                                <ul className="text-gray-400 text-sm space-y-1 list-disc pl-4 marker:text-pink-500">
                                    {rule.list.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            ) : (
                                <p className="text-gray-400 text-sm leading-relaxed">{rule.desc}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RulesSection;