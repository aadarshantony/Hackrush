import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Heart, Users, AlertTriangle, ArrowLeft, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CodeOfConduct = () => {
    const container = useRef(null);
    const navigate = useNavigate();

    // Updated Handler
    const handleContact = () => {
        // We navigate to the root with the hash.
        // The scrolling logic must be handled by the destination page (App.jsx or Home.jsx)
        navigate("/#contact");
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".coc-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".coc-desc", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".coc-card", { y: 50, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .from(".coc-footer", { opacity: 0, y: 20, duration: 0.6 }, "-=0.2");

    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen w-full bg-[#090a0f] text-white py-20 px-4 overflow-hidden relative">
            
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="coc-title text-4xl md:text-6xl font-black uppercase tracking-wider font-display">
                        Code of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Conduct</span>
                    </h1>
                    <p className="coc-desc text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        We are committed to providing a safe, inclusive, and harassment-free hackathon experience for everyone.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <RuleCard icon={<Heart className="w-6 h-6 text-pink-400" />} title="The Pledge" color="pink">
                        We pledge to treat everyone with respect and dignity, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment in any form.
                    </RuleCard>

                    <RuleCard icon={<Users className="w-6 h-6 text-cyan-400" />} title="Expected Behavior" color="cyan">
                        Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are not appropriate for this event.
                    </RuleCard>

                    <RuleCard icon={<Shield className="w-6 h-6 text-purple-400" />} title="Integrity & AI" color="purple">
                        All code must be written during the event. Plagiarism leads to disqualification. AI tools are allowed but must be disclosed; the core logic must be your team's original work.
                    </RuleCard>

                    <RuleCard icon={<AlertTriangle className="w-6 h-6 text-yellow-400" />} title="Zero Tolerance" color="yellow">
                        Harassment includes offensive comments, intimidation, stalking, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.
                    </RuleCard>
                </div>

                {/* Reporting Section */}
                <div className="coc-footer w-full rounded-xl bg-gradient-to-r from-cyan-900/20 via-gray-900/40 to-purple-900/20 border border-white/10 p-8 backdrop-blur-md text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-lg text-red-400 border border-white/5">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white font-display tracking-wide">Report an Issue</h4>
                            <p className="text-gray-400 text-sm mt-1">
                                If you witness or experience a violation, please contact us immediately.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={handleContact}
                            className="px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            Contact Organizers
                        </button>
                    </div>
                </div>

                {/* Back Link */}
                <div className="mt-12 text-center coc-footer">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

const RuleCard = ({ icon, title, children, color }) => {
    const colors = {
        pink: { border: "#ec4899", bg: "rgba(236, 72, 153, 0.05)" },
        cyan: { border: "#22d3ee", bg: "rgba(34, 211, 238, 0.05)" },
        purple: { border: "#a855f7", bg: "rgba(168, 85, 247, 0.05)" },
        yellow: { border: "#eab308", bg: "rgba(234, 179, 8, 0.05)" },
    };
    const activeColor = colors[color] || colors.cyan;

    return (
        <div 
            className="coc-card group relative p-6 rounded-2xl bg-[#13131d] border border-white/5 cursor-default will-change-transform"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: activeColor.border, backgroundColor: activeColor.bg, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#13131d", duration: 0.3 })}
        >
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white font-display tracking-wide mb-2 group-hover:text-white transition-colors">{title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{children}</p>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;