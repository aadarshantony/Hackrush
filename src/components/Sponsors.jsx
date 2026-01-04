import React from 'react';
import { Zap, Terminal, Plus, ArrowUpRight } from 'lucide-react';

const SponsorSection = () => {
    const sponsors = [
        {
            id: "01",
            name: "ElevenLabs",
            img: "/sponsors/elevenlabs.png",
            tier: "Platinum Sponsor",
            meta: "₹200K+",
            label: "Prizes Worth",
            accent: "bg-cyan-500",
            glow: "shadow-[0_0_10px_#22d3ee]",
            border: "hover:border-cyan-500/30",
            text: "text-cyan-500"
        },
        {
            id: "02",
            name: "SDC Networks",
            img: "/sponsors/sdcnetworks.png",
            tier: "Silver Sponsor",
            meta: "Official",
            label: "Sponsor",
            accent: "bg-purple-500",
            glow: "shadow-[0_0_10px_#a855f7]",
            border: "hover:border-purple-500/30",
            text: "text-purple-500"
        }
    ];

    const handleSponsorContact = () => {
        window.location.href = "mailto:etcetra@mgmcet.ac.in?subject=Sponsorship Inquiry: [Company Name]";
    };

    return (
        <section id='sponsors' className="relative w-full bg-[#090a0f] py-16 px-4 overflow-hidden font-display">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <div className="absolute top-2/4 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-1.5">
                        <Terminal size={14} className="text-cyan-500" />
                        <span className="text-cyan-500 text-[9px] font-black uppercase tracking-[0.4em]">Event.Support</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Sponsors</span>
                    </h2>
                </div>

                <div className="space-y-4 mb-16">
                    {sponsors.map((spon) => (
                        <div key={spon.id} className={`group relative flex items-center min-h-[100px] overflow-hidden rounded-tr-[2rem] rounded-bl-[2rem] border border-white/5 bg-[#111218] transition-all duration-300 hover:bg-[#161822] ${spon.border} ${spon.id === "02" ? "md:ml-10" : ""}`}>
                            <div className={`absolute left-0 top-0 h-full w-1 ${spon.accent} ${spon.glow} group-hover:w-2 transition-all`} />
                            <div className="flex flex-col md:flex-row items-center w-full px-6 md:px-10 py-4 gap-6 md:gap-10">
                                <span className="hidden md:block text-white/5 text-4xl font-black italic group-hover:text-white/10 transition-colors uppercase font-display">{spon.id}</span>
                                <div className="w-28 h-10 flex-shrink-0 flex items-center justify-center">
                                    <img src={spon.img} alt={spon.name} className="max-h-full max-w-full grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                                    <span className="hidden text-lg font-black text-white italic tracking-tighter uppercase">{spon.name}</span>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-lg md:text-xl font-black text-white uppercase italic leading-none">{spon.name}</h3>
                                    <p className={`${spon.text} text-[9px] font-black uppercase tracking-[0.2em] mt-1 italic opacity-80`}>{spon.tier}</p>
                                </div>
                                <div className="text-center md:text-right md:border-l border-white/10 md:pl-8">
                                    <div className="text-xl md:text-2xl font-black text-white tracking-tighter italic font-display uppercase leading-none">{spon.meta}</div>
                                    <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{spon.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-950/10 via-[#0e0f16] to-purple-950/10 p-6 md:p-8 rounded-[1.5rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 group transition-colors hover:border-white/20">
                    <div className="flex items-center gap-5 text-center md:text-left">
                        <div className="w-11 h-11 bg-white flex items-center justify-center rounded-tr-xl rounded-bl-xl text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-105">
                            <Plus size={22} />
                        </div>
                        <div>
                            <h3 className="text-white font-black text-xl md:text-2xl uppercase italic leading-none tracking-tight">Become a Sponsor</h3>
                            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em]">Join the mission and support the builders.</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleSponsorContact}
                        className="w-full md:w-auto px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-tr-xl rounded-bl-xl hover:bg-cyan-400 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                    >
                        Secure a Slot <ArrowUpRight size={13} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;