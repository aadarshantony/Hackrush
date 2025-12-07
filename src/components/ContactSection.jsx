import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Make sure this is imported
import { Phone, Instagram, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ContactSection = () => {
    const container = useRef(null);
    const scrollContainerRef = useRef(null);
    const autoScrollTl = useRef(null);

    // --- Auto-Scroll Logic ---
    const setupAutoScroll = () => {
        if (!scrollContainerRef.current) return;

        const scroller = scrollContainerRef.current;
        const scrollDistance = scroller.scrollWidth - scroller.clientWidth;

        if (scrollDistance <= 0) return;

        if (autoScrollTl.current) autoScrollTl.current.kill();

        autoScrollTl.current = gsap.to(scroller, {
            scrollTo: { x: scrollDistance },
            duration: scrollDistance / 50,
            ease: "none",
            repeat: -1,
            yoyo: true,
            paused: false
        });
    };

    // --- GSAP Animations ---
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".section-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
            .from(scrollContainerRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(".scroll-btn", { scale: 0, opacity: 0, stagger: 0.1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.4")
            .from(".social-btn", { scale: 0.9, opacity: 0, stagger: 0.05, duration: 0.6 }, "-=0.6")
            .from(".footer-card", { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
            .add(() => setupAutoScroll());

    }, { scope: container });

    useEffect(() => {
        const handleResize = () => setupAutoScroll();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (autoScrollTl.current) autoScrollTl.current.kill();
        };
    }, []);

    // --- Event Handlers ---
    const handleCardHover = (e, color) => {
        if (autoScrollTl.current) autoScrollTl.current.pause();
        gsap.to(e.currentTarget, { scale: 1.05, borderColor: color, boxShadow: `0 0 20px ${color}20`, backgroundColor: "rgba(255,255,255,0.03)", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-circle"), { scale: 1.1, backgroundColor: `${color}20`, color: color, duration: 0.3 });
    };

    const handleCardLeave = (e, defaultColor) => {
        if (autoScrollTl.current) autoScrollTl.current.play();
        gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", boxShadow: "none", backgroundColor: "#0E0F16", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-circle"), { scale: 1, backgroundColor: "rgba(255,255,255,0.05)", color: defaultColor, duration: 0.3 });
    };

    const scroll = (direction) => {
        if (autoScrollTl.current) autoScrollTl.current.pause();
        const scroller = scrollContainerRef.current;
        const scrollAmount = scroller.clientWidth / 1.5;
        const currentScroll = scroller.scrollLeft;
        const newPos = direction === 'left'
            ? Math.max(0, currentScroll - scrollAmount)
            : Math.min(scroller.scrollWidth - scroller.clientWidth, currentScroll + scrollAmount);

        gsap.to(scroller, {
            scrollTo: { x: newPos },
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                setTimeout(() => {
                    if (autoScrollTl.current) autoScrollTl.current.play();
                }, 1000);
            }
        });
    };

    // --- Organizer Data ---
    const organizers = [
        { name: "Saranya Sasi", role: "Staff Incharge, ETC & IEDC", phone: "+91 99951 49182", color: "#22d3ee" },
        { name: "Gokul Krishna", role: "Staff Incharge, IEDC", phone: "+91 99474 57338", color: "#a855f7" },
        { name: "Adarsh Antony", role: "Student Coordinator", phone: "+91 79074 82690", color: "#ec4899" },
        { name: "Sana Meharin K", role: "Student Coordinator", phone: "+91 85907 58530", color: "#22c55e" },
    ];

    return (
        <section ref={container} id="contact" className="contact relative w-full bg-[#090a0f] py-16 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="section-title text-3xl md:text-5xl font-black text-center mb-12 uppercase tracking-wider text-white font-display">
                    Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Touch</span>
                </h2>

                <div className="relative max-w-5xl mx-auto mb-16 group">
                    <button
                        onClick={() => scroll('left')}
                        className="scroll-btn absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0E0F16] border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-cyan-400 hover:text-black transition-all cursor-pointer"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-5 overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory no-scrollbar"
                        onMouseEnter={() => autoScrollTl.current && autoScrollTl.current.pause()}
                        onMouseLeave={() => autoScrollTl.current && autoScrollTl.current.play()}
                    >
                        {organizers.map((org, index) => (
                            <div key={index} className="snap-center">
                                <OrganizerCard
                                    {...org}
                                    hoverFn={handleCardHover}
                                    leaveFn={handleCardLeave}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Button - FIXED: Positioned inside (right-2) with high z-index */}
                    <button
                        onClick={() => scroll('right')}
                        className="scroll-btn absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0E0F16] border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-cyan-400 hover:text-black transition-all cursor-pointer"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* --- Social Media & Footer (Unchanged) --- */}
                <div className="flex flex-col items-center mb-16">
                    <h3 className="section-title text-xl font-bold text-white mb-6 font-display tracking-wide">Connect With Us</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <SocialButton icon={<Instagram size={18} />} text="@mgmcet_pampakuda" href="https://www.instagram.com/_mgm.college.of.eng.ernakulam_" />
                        <SocialButton icon={<Instagram size={18} />} text="@etceteraclub" href="https://www.instagram.com/etc.etcetera.in/" />
                        <SocialButton icon={<Instagram size={18} />} text="@mgmcet_iedc" href="https://www.instagram.com/mgmcet_iedc/" />
                        <SocialButton icon={<MessageCircle size={18} />} text="WhatsApp Group" href="https://chat.whatsapp.com/Jm6lJMAs3jV23QpPv90acD" />
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <span className="section-title text-gray-400 text-xs mb-2 font-display tracking-widest uppercase">Organized by</span>
                    <div className="flex flex-col md:flex-row justify-center gap-6 w-full flex-wrap">
                        <FooterCard name="Etcetera Club" role="Tech Innovation Hub" color="#22d3ee" />
                        <FooterCard name="IEDC MGMCET" role="Idea to Prototype" color="#22c55e" />
                        <FooterCard name="MGMCET" role="Pampakuda" color="#a855f7" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Helper Components ---
const OrganizerCard = ({ name, role, phone, color, hoverFn, leaveFn }) => (
    <div
        className="organizer-card p-6 rounded-2xl bg-[#0E0F16] border border-white/5 cursor-pointer will-change-transform flex flex-col items-center text-center min-w-[260px]"
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

const FooterCard = ({ name, role, color }) => (
    <div
        className="footer-card relative px-10 py-6 bg-[#0E0F16] rounded-xl flex flex-col items-center text-center border border-white/10 cursor-default will-change-transform w-full md:w-auto min-w-[280px]"
        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: color, boxShadow: `0 0 30px ${color}20`, duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.1)", boxShadow: "none", duration: 0.3 })}
    >
        <h4 className="text-xl font-black mb-0.5 tracking-wide uppercase font-display" style={{ color: color }}>{name}</h4>
        <p className="text-gray-500 text-xs">{role}</p>
    </div>
);

export default ContactSection;