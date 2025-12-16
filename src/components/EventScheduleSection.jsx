import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, MapPin, Mic, Code, Coffee, Utensils, CheckCircle, Upload, Award, Sparkles, Gamepad2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EventScheduleSection = () => {
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
          .from(".timeline-line", { scaleY: 0, transformOrigin: "top", duration: 1.5, ease: "power3.inOut" }, "-=0.4")
          .from(".day-header", { y: 20, opacity: 0, stagger: 0.3, duration: 0.6 }, "-=1.2");

        const cards = gsap.utils.toArray(".event-card");
        
        cards.forEach((card) => {
            const isLeft = card.classList.contains("left-card");
            
            gsap.fromTo(card, 
                { opacity: 0, x: isLeft ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", 
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: container });

    const scheduleData = [
        {
            day: "Day 1",
            date: "January 23rd",
            events: [
                { time: "2:30 PM", title: "Registration & Check-in", description: "Report to venue & kit collection.", icon: <MapPin className="w-4 h-4 text-cyan-400" /> },
                { time: "3:30 PM", title: "Opening Ceremony", description: "Welcome address & theme reveal.", icon: <Mic className="w-4 h-4 text-purple-500" /> },
                { time: "4:00 PM", title: "Hacking Begins!", description: "The 16-hour sprint starts now.", icon: <Code className="w-4 h-4 text-pink-500" /> },
                { time: "7:30 PM", title: "Checkpoint 1", description: "First mentorship review.", icon: <CheckCircle className="w-4 h-4 text-cyan-400" /> },
                { time: "8:00 PM", title: "Dinner Break", description: "Refuel with food & music.", icon: <Utensils className="w-4 h-4 text-purple-500" /> },
                { time: "11:30 PM", title: "Checkpoint 2", description: "Mid-hackathon check-in.", icon: <CheckCircle className="w-4 h-4 text-pink-500" /> }
            ]
        },
        {
            day: "Day 2",
            date: "January 24th",
            events: [
                { time: "12:00 AM", title: "Fun Zone", description: "Midnight games & activities.", icon: <CheckCircle className="w-4 h-4 text-pink-500" /> },
                { time: "6:00 AM", title: "Checkpoint 3", description: "Final check-in.", icon: <Gamepad2 className="w-4 h-4 text-cyan-400" /> },
                { time: "7:00 AM", title: "Breakfast", description: "Morning fuel for final stretch.", icon: <Coffee className="w-4 h-4 text-purple-500" /> },
                { time: "8:00 AM", title: "Submission", description: "Upload repos & presentations.", icon: <Upload className="w-4 h-4 text-pink-500" /> },
                { time: "8:30 AM", title: "Judging", description: "Present to the panel.", icon: <Award className="w-4 h-4 text-cyan-400" /> },
                { time: "9:30 AM", title: "Closing Ceremony", description: "Winners & Prize Distribution.", icon: <Sparkles className="w-4 h-4 text-purple-500" /> }
            ]
        }
    ];

    return (
        <section ref={container} id="schedule" className="relative w-full bg-[#0e0c16] py-16 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Applied font-display */}
                <h2 className="section-title text-3xl md:text-5xl font-black text-white text-center mb-12 uppercase tracking-wider font-display">
                    Event <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">Schedule</span>
                </h2>

                <div className="relative">
                    <div className="timeline-line absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-cyan-500/50 via-purple-500/50 to-cyan-500/50"></div>

                    {scheduleData.map((dayData, dayIndex) => (
                        <div key={dayIndex} className="mb-12 relative">
                            <div className="day-header flex flex-col items-center mb-8 relative z-20">
                                <div className="px-5 py-1.5 rounded-full bg-[#0E0F16] border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.3)] mb-1">
                                    {/* Applied font-display */}
                                    <h3 className="text-xl font-bold text-white tracking-wide font-display">{dayData.day}</h3>
                                </div>
                                <span className="text-cyan-400 text-xs font-medium">{dayData.date}</span>
                            </div>

                            <div className="space-y-8 relative">
                                {dayData.events.map((event, eventIndex) => {
                                    const isLeft = eventIndex % 2 === 0;
                                    
                                    return (
                                        <div key={eventIndex} className={`flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="w-full md:w-1/2"></div>
                                            
                                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0E0F16] border-2 border-cyan-500/50 z-20 mt-1 md:mt-0">
                                                {event.icon}
                                            </div>

                                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-10 text-left md:text-right' : 'md:pl-10 text-left'}`}>
                                                <div 
                                                    className={`event-card ${isLeft ? 'left-card' : 'right-card'} p-5 rounded-xl bg-[#13131d] border border-white/5 hover:border-cyan-500/30 cursor-default will-change-transform`}
                                                    onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#22d3ee", backgroundColor: "rgba(34, 211, 238, 0.05)", duration: 0.3 })}
                                                    onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#13131d", duration: 0.3 })}
                                                >
                                                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                                                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                                        <span className="text-cyan-400 font-mono text-xs">{event.time}</span>
                                                    </div>
                                                    {/* Applied font-display to Event Title */}
                                                    <h4 className="text-lg font-bold text-white mb-1 font-display tracking-wide">{event.title}</h4>
                                                    <p className="text-gray-400 text-xs leading-relaxed">{event.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventScheduleSection;