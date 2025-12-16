import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Users, 
    Layers,
    Clock, 
    ArrowLeft, 
    FileWarning, 
    GitBranch, 
    Cpu 
} from 'lucide-react';

const Rules = () => {
    return (
        <div className="min-h-screen w-full bg-[#090a0f] text-white py-20 px-4 overflow-hidden relative">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider font-display">
                        Rules & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Regulations</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        To ensure a fair and exciting competition, all participants must adhere to the following guidelines.
                    </p>
                </div>

                {/* Rules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
                    
                    {/* 1. Team Composition */}
                    <RuleSection 
                        icon={<Users className="w-6 h-6 text-cyan-400" />}
                        title="Team Composition"
                        number="01"
                        color="cyan"
                    >
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Teams must consist of <strong className="text-white">2 to 4 members</strong>.</li>
                            <li>• Individual participation is not allowed.</li>
                            <li>• Inter-college and inter-year teams are permitted.</li>
                        </ul>
                    </RuleSection>

                    {/* 2. Domains & Scope (UPDATED) */}
                    <RuleSection 
                        icon={<Layers className="w-6 h-6 text-purple-400" />}
                        title="Domains & Project Scope"
                        number="02"
                        color="purple"
                    >
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• <strong className="text-white">Open Innovation:</strong> Web, App, AI/ML, Hardware, IoT, and Blockchain are all welcome.</li>
                            <li>• <strong className="text-white">Fresh Build:</strong> Core code and circuitry must be built during the hackathon.</li>
                            <li>• Pre-built components (sensors, APIs) are allowed.</li>
                        </ul>
                    </RuleSection>

                    {/* 3. Submission (UPDATED) */}
                    <RuleSection 
                        icon={<GitBranch className="w-6 h-6 text-pink-400" />}
                        title="Submission Guidelines"
                        number="03"
                        color="pink"
                    >
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• <strong className="text-white">Software:</strong> Must be hosted on GitHub.</li>
                            <li>• <strong className="text-white">Hardware:</strong> Demo and circuit diagrams required.</li>
                            <li>• Regular commits/updates are required to verify progress.</li>
                        </ul>
                    </RuleSection>

                    {/* 4. Venue & Hardware */}
                    <RuleSection 
                        icon={<Cpu className="w-6 h-6 text-yellow-400" />}
                        title="Venue & Resources"
                        number="04"
                        color="yellow"
                    >
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Bring your own <strong className="text-white">laptops & hardware components</strong>.</li>
                            <li>• College ID card is mandatory for entry.</li>
                            <li>• Stable Wi-Fi and power sockets will be provided.</li>
                        </ul>
                    </RuleSection>

                </div>

                {/* Disqualification Banner */}
                <div className="w-full rounded-xl bg-[#1a1015] border border-red-500/20 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative overflow-hidden group hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[50px] pointer-events-none" />
                    
                    <div className="p-4 bg-red-500/10 rounded-lg shrink-0">
                        <FileWarning className="w-8 h-8 text-red-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide mb-2">Grounds for Disqualification</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Harassment, plagiarism, using pre-built projects, or sabotaging other teams will result in <span className="text-red-400 font-bold">immediate disqualification</span>. Alcohol and drugs are strictly prohibited on the venue premises.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
                    <Link to="/" className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95">
                        <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-gray-300 group-hover:text-white font-bold">Back to Home</span>
                    </Link>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Last updated: Dec 2025</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

const RuleSection = ({ icon, title, children, number, color }) => {
    // Map colors to Tailwind hover classes
    const colorClasses = {
        cyan: "hover:border-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]",
        purple: "hover:border-purple-500 hover:bg-purple-500/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]",
        pink: "hover:border-pink-500 hover:bg-pink-500/5 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]",
        yellow: "hover:border-yellow-400 hover:bg-yellow-400/5 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]",
    };

    const activeClass = colorClasses[color] || colorClasses.cyan;

    return (
        <div 
            className={`group relative p-8 rounded-2xl bg-[#13131d] border border-white/5 cursor-default transition-all duration-300 hover:scale-[1.02] ${activeClass}`}
        >
            <div className="absolute top-6 right-8 text-4xl font-black text-white/5 font-display select-none group-hover:text-white/10 transition-colors">
                {number}
            </div>
            
            <div className="flex flex-col gap-4 relative z-10">
                <div className="w-fit p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                
                <div>
                    <h3 className="text-xl font-bold text-white font-display tracking-wide mb-4 group-hover:text-white transition-colors">
                        {title}
                    </h3>
                    <div className="leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;