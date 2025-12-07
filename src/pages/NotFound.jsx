import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, AlertTriangle, ArrowLeft } from 'lucide-react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const NotFound = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        tl.from(".error-code", { 
            scale: 0.8, 
            opacity: 0, 
            duration: 0.5, 
            ease: "back.out(1.7)" 
        })
        .from(".error-icon", { 
            rotate: -45, 
            opacity: 0, 
            duration: 0.5 
        }, "-=0.3")
        .from(".error-text", { 
            y: 20, 
            opacity: 0, 
            duration: 0.6, 
            stagger: 0.1 
        }, "-=0.2")
        .from(".home-btn", { 
            scale: 0.9, 
            opacity: 0, 
            duration: 0.4 
        }, "-=0.2");

    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0E0C16] text-white p-4 overflow-hidden relative">
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                
                <div className="relative mb-8">
                    <AlertTriangle className="error-icon w-24 h-24 text-cyan-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    <h1 className="error-code text-9xl font-black font-display text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        404
                    </h1>
                </div>

                <div className="error-text space-y-4 max-w-lg mb-10">
                    <div className="flex items-center justify-center gap-2 text-red-400 font-mono text-sm bg-red-500/10 py-2 px-4 rounded-full border border-red-500/20">
                        <Terminal className="w-4 h-4" />
                        <span>System Error: Route Not Found</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold font-display tracking-wide">
                        LOST IN CYBERSPACE?
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        The requested timeline segment has been corrupted or does not exist. 
                        Return to the mainframe before the connection is terminated.
                    </p>
                </div>

                <Link 
                    to="/" 
                    className="home-btn group relative px-8 py-3 rounded-lg font-bold text-white overflow-hidden font-display tracking-wide uppercase"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-90 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-cyan-400/20 blur-md group-hover:blur-lg transition-all" />
                    
                    <span className="relative flex items-center gap-2">
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Reboot System
                    </span>
                </Link>

            </div> 
        </div>
    );
};

export default NotFound;