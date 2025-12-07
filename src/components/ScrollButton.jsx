import React, { useState, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUp } from 'lucide-react';

const ScrollButton = () => {
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);
    const [direction, setDirection] = useState('down');
    useGSAP(() => {
        gsap.fromTo(buttonRef.current, 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 1 }
        );

        // 2. Scroll Listener to toggle state
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setDirection('down');
            } else {
                setDirection('up');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        gsap.to(arrowRef.current, {
            rotation: direction === 'up' ? 0 : 180,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    }, [direction]);

    const handleClick = () => {
        gsap.fromTo(buttonRef.current, 
            { scale: 0.9 }, 
            { scale: 1, duration: 0.3, ease: "back.out(2)" }
        );

        if (direction === 'down') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleHover = () => {
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    };

    const handleLeave = () => {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-shadow cursor-pointer"
            aria-label="Scroll navigation"
        >
            <div ref={arrowRef}>
                <ArrowUp size={24} strokeWidth={3} />
            </div>
        </button>
    );
};

export default ScrollButton;