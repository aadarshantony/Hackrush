import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
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
          .from(".organizer-card", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
          .from(".social-btn", { scale: 0.9, opacity: 0, stagger: 0.05, duration: 0.6 }, "-=0.6")
          // Added stagger here to animate multiple footer cards nicely
          .from(".footer-card", { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6");

    }, { scope: container });

    const handleCardHover = (e, color) => {
        gsap.to(e.currentTarget, { scale: 1.05, borderColor: color, boxShadow: `0 0 20px ${color}20`, backgroundColor: "rgba(255,255,255,0.03)", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-circle"), { scale: 1.1, backgroundColor: `${color}20`, color: color, duration: 0.3 });
    };

    const handleCardLeave = (e, defaultColor) => {
        gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", boxShadow: "none", backgroundColor: "#0E0F16", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-circle"), { scale: 1, backgroundColor: "rgba(255,255,255,0.05)", color: defaultColor, duration: 0.3 });
    };

    return (
        <section ref={container} id="contact" className="contact relative w-full bg-[#090a0f] py-16 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="section-title text-3xl md:text-5xl font-black text-center mb-12 uppercase tracking-wider text-white font-display">
                    Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 max-w-5xl mx-auto">
                    <OrganizerCard name="Organizer 1" role="Asst.Prof, CSE" phone="+91 98765 43210" color="#22d3ee" hoverFn={handleCardHover} leaveFn={handleCardLeave} />
                    <OrganizerCard name="Organizer 2" role="Program Coordinator" phone="+91 98765 43211" color="#a855f7" hoverFn={handleCardHover} leaveFn={handleCardLeave} />
                    <OrganizerCard name="Organizer 3" role="Program Coordinator" phone="+91 98765 43212" color="#ec4899" hoverFn={handleCardHover} leaveFn={handleCardLeave} />
                </div>

                <div className="flex flex-col items-center mb-16">
                    <h3 className="section-title text-xl font-bold text-white mb-6 font-display tracking-wide">Connect With Us</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <SocialButton icon={<Instagram size={18} />} text="@mgmcet_pampakuda" href="https://www.instagram.com/_mgm.college.of.eng.ernakulam_" />
                        <SocialButton icon={<Instagram size={18} />} text="@etceteraclub" href="https://www.instagram.com/etc.etcetera.in/" />
                        <SocialButton icon={<Instagram size={18} />} text="@mgmcet_iedc" href="https://www.instagram.com/mgmcet_iedc/" />
                        <SocialButton icon={<MessageCircle size={18} />} text="WhatsApp Group" href="https://chat.whatsapp.com/Jm6lJMAs3jV23QpPv90acD" />
                    </div>
                </div>

                {/* Organizer Footer Section */}
                <div className="flex flex-col items-center space-y-4">
                     <span className="section-title text-gray-400 text-xs mb-2 font-display tracking-widest uppercase">Organized by</span>
                     
                     <div className="flex flex-col md:flex-row justify-center gap-6 w-full flex-wrap">
                        {/* Etcetera Club Card */}
                        <div 
                            className="footer-card relative px-10 py-6 bg-[#0E0F16] rounded-xl flex flex-col items-center text-center border border-cyan-500/30 cursor-default will-change-transform w-full md:w-auto min-w-[280px]"
                            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#22d3ee", boxShadow: "0 0 30px rgba(34,211,238,0.15)", duration: 0.3 })}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(34,211,238,0.3)", boxShadow: "none", duration: 0.3 })}
                        >
                            <h4 className="text-xl font-black text-cyan-400 mb-0.5 tracking-wide uppercase font-display">Etcetera Club</h4>
                            <p className="text-gray-500 text-xs">Tech Innovation Hub</p>
                        </div>

                        {/* IEDC Card */}
                        <div 
                            className="footer-card relative px-10 py-6 bg-[#0E0F16] rounded-xl flex flex-col items-center text-center border border-green-500/30 cursor-default will-change-transform w-full md:w-auto min-w-[280px]"
                            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#22c55e", boxShadow: "0 0 30px rgba(34,197,94,0.15)", duration: 0.3 })}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(34,197,94,0.3)", boxShadow: "none", duration: 0.3 })}
                        >
                            <h4 className="text-xl font-black text-green-500 mb-0.5 tracking-wide uppercase font-display">IEDC MGMCET</h4>
                            <p className="text-gray-500 text-xs">Idea to Prototype</p>
                        </div>

                        {/* MGM College Card */}
                        <div 
                            className="footer-card relative px-10 py-6 bg-[#0E0F16] rounded-xl flex flex-col items-center text-center border border-purple-500/30 cursor-default will-change-transform w-full md:w-auto min-w-[280px]"
                            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#a855f7", boxShadow: "0 0 30px rgba(168,85,247,0.15)", duration: 0.3 })}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(168,85,247,0.3)", boxShadow: "none", duration: 0.3 })}
                        >
                            <h4 className="text-xl font-black text-purple-500 mb-0.5 tracking-wide uppercase font-display">MGMCET</h4>
                            <p className="text-gray-500 text-xs">Pampakuda</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const OrganizerCard = ({ name, role, phone, color, hoverFn, leaveFn }) => (
    <div 
        className="organizer-card p-6 rounded-2xl bg-[#0E0F16] border border-white/5 cursor-pointer will-change-transform flex flex-col items-center text-center"
        onMouseEnter={(e) => hoverFn(e, color)}
        onMouseLeave={(e) => leaveFn(e, color)}
    >
        <div className="icon-circle w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/5 transition-colors" style={{ color: color }}>
            <Phone size={20} />
        </div>
        <h3 className="text-lg font-bold text-white mb-0.5 font-display tracking-wide">{name}</h3>
        <p className="text-gray-400 text-xs mb-4">{role}</p>
        <a href={`tel:${phone}`} className="flex items-center gap-2 font-mono text-sm hover:underline" style={{ color: color }}>
            <Phone size={14} /> {phone}
        </a>
    </div>
);

const SocialButton = ({ icon, text, href }) => (
    <a 
        href={href} target="_blank" rel="noopener noreferrer"
        className="social-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#13131d] border border-white/10 text-gray-300 will-change-transform"
        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, borderColor: "#22d3ee", color: "#fff", backgroundColor: "rgba(34,211,238,0.1)", duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.1)", color: "#d1d5db", backgroundColor: "#13131d", duration: 0.3 })}
    >
        {icon} <span className="font-medium text-sm">{text}</span>
    </a>
);

export default ContactSection;