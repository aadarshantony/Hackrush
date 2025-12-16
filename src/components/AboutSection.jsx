import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".about-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
          .from(".about-text p", { x: -30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
          .from(".feature-card", { y: 30, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
          .from(".org-section", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");

    }, { scope: container });

    const handleHover = (e, color) => {
        gsap.to(e.currentTarget, { scale: 1.05, borderColor: color, backgroundColor: "rgba(34, 211, 238, 0.05)", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-wrap"), { scale: 1.1, filter: "drop-shadow(0 0 12px rgba(34,211,238,0.9))", duration: 0.3 });
    };

    const handleLeave = (e, origBorder) => {
        gsap.to(e.currentTarget, { scale: 1, borderColor: origBorder, backgroundColor: "transparent", duration: 0.3 });
        gsap.to(e.currentTarget.querySelector(".icon-wrap"), { scale: 1, filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5))", duration: 0.3 });
    };

    const features = [
        { icon: <LightningIcon />, title: "16 Hours", sub: "Non-stop sprint" },
        { icon: <TeamIcon />, title: "Teamwork", sub: "Collaborate & create" },
        { icon: <BulbIcon />, title: "Innovation", sub: "Push boundaries" },
        { icon: <RocketIcon />, title: "Rapid Build", sub: "Prototype to product" }
    ];

    return (
        <section ref={container} id="about" className="relative w-full bg-[#0E0C16] py-16 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="about text-3xl uppercase md:text-5xl font-black text-white mb-10 text-center font-display tracking-wide">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">About</span> HACKRUSH
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="about-text space-y-6 md:text-left font-sans text-justify">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            <span className='text-cyan-400 font-bold'>Hackrush</span> is a 16-hour innovation sprint hosted by the <span className='text-purple-500 font-bold'>Etcetera Club</span> & <span className='text-pink-500 font-bold'>IEDC</span> at MGMCET Pampakuda.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Students come together to build, brainstorm, and create impactful tech solutions in a highly charged, futuristic environment.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Hackrush focuses on <span className='text-pink-500 font-bold'>creativity</span>, <span className='text-cyan-400 font-bold'>teamwork</span>, <span className='text-purple-500 font-bold'>rapid prototyping</span>, and pushing boundaries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <div 
                                key={i} 
                                className="feature-card p-5 rounded-xl border border-white/10 cursor-pointer will-change-transform flex flex-col items-center text-center bg-white/5"
                                onMouseEnter={(e) => handleHover(e, "#22d3ee")}
                                onMouseLeave={(e) => handleLeave(e, "rgba(255,255,255,0.1)")}
                            >
                                <div className="icon-wrap mb-3 text-cyan-400 transition-all duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 font-display tracking-wide">{f.title}</h3>
                                <p className="text-gray-400 text-xs">{f.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="org-section flex flex-col items-center mt-12 space-y-6">
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-display">Organized by</p>
                    <div className="flex flex-col md:flex-row gap-6 w-full justify-center flex-wrap">
                        <div 
                            className="px-8 py-5 rounded-lg border border-cyan-500/30 bg-[#0E0C16] w-full md:w-72 text-center cursor-pointer will-change-transform"
                            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, borderColor: "#22d3ee", boxShadow: "0 0 30px rgba(34,211,238,0.2)", duration: 0.3 })}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(34,211,238,0.3)", boxShadow: "none", duration: 0.3 })}
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-0.5 font-display tracking-wide">Etcetera Club</h3>
                            <p className="text-gray-400 text-xs">Tech Innovation Hub</p>
                        </div>
                        
                        <div 
                            className="px-8 py-5 rounded-lg border border-green-500/30 bg-[#0E0C16] w-full md:w-72 text-center cursor-pointer will-change-transform"
                            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, borderColor: "#22c55e", boxShadow: "0 0 30px rgba(34,197,94,0.2)", duration: 0.3 })}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(34,197,94,0.3)", boxShadow: "none", duration: 0.3 })}
                        >
                            <h3 className="text-xl font-bold text-green-500 mb-0.5 font-display tracking-wide">IEDC MGMCET</h3>
                            <p className="text-gray-400 text-xs">Idea to Prototype</p>
                        </div>

                        <div 
                            className="px-8 py-5 rounded-lg border border-purple-500/30 bg-[#0E0C16] w-full md:w-72 text-center cursor-pointer will-change-transform"
                            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, borderColor: "#a855f7", boxShadow: "0 0 30px rgba(168,85,247,0.2)", duration: 0.3 })}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(168,85,247,0.3)", boxShadow: "none", duration: 0.3 })}
                        >
                            <h3 className="text-xl font-bold text-purple-500 mb-0.5 font-display tracking-wide">MGMCET</h3>
                            <p className="text-gray-400 text-xs">Pampakuda</p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-center text-sm max-w-xl mt-6">
                        The Etcetera Club and IEDC have been at the forefront of promoting tech culture, organizing workshops, and fostering innovation among students.
                    </p>
                </div>
            </div>
        </section>
    )
}

const LightningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
const TeamIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const BulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.3-2.7-6-6-6S6 4.7 6 8c0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>;

export default AboutSection;
