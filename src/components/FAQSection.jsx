import React, { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".section-title", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".faq-item", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4");

    }, { scope: container });

    const faqs = [
        { 
            q: "Who can participate in HACKRUSH?", 
            a: "HACKRUSH is open to all college students who are passionate about technology and innovation. You don't need to be a pro coder to join!" 
        },
        { 
            q: "Is there a registration fee?", 
            a: "Yes, the registration fee is ₹99 per head. (e.g., A team of 4 pays ₹396)." 
        },
        { 
            q: "Is this a team-based hackathon?", 
            a: "Yes, you can participate in teams of 2 to 4 members. Collaboration is key!" 
        },
        { 
            q: "What should I bring to the hackathon?", 
            a: "Bring your laptop, charger, student ID, and any hardware you might need for your project. Don't forget your enthusiasm!" 
        },
        { 
            q: "Will food be provided during the event?", 
            a: "Yes! We will provide dinner, breakfast, snacks, and refreshments to keep you energized throughout the 15-hour sprint. (Note: Please inform the coordinators in advance if you prefer non-vegetarian options.)" 
        },
        { 
            q: "Can beginners participate?", 
            a: "Absolutely! Hackrush is a great place to learn. We'll have mentors available to guide you through your project." 
        },
        { 
            q: "Can I use pre-written code or templates?", 
            a: "To ensure fairness, all core code should be written during the event. However, you can use open-source libraries and frameworks." 
        }
    ];

    return (
        <section ref={container} id="faq" className="relative w-full bg-[#0E0C16] py-16 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title text-4xl md:text-5xl font-black uppercase tracking-wider text-white font-display">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const iconRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(iconRef.current, { rotation: 180, duration: 0.3 });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
            gsap.to(iconRef.current, { rotation: 0, duration: 0.3 });
        }
    };

    return (
        <div className="faq-item border border-white/10 rounded-xl bg-[#13131d] overflow-hidden transition-colors hover:border-cyan-500/30">
            <button 
                onClick={toggleOpen}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
            >
                <span className="text-lg font-bold text-white font-display tracking-wide pr-4">{question}</span>
                <div ref={iconRef} className="text-cyan-400 shrink-0">
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>
            
            <div ref={contentRef} className="h-0 opacity-0 overflow-hidden">
                <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;