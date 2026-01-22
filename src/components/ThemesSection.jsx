import React from 'react';
import { 
    GraduationCap, 
    HeartPulse, 
    Leaf, 
    Users, 
    BrainCircuit, 
    TrendingUp, 
    Zap, 
    Sparkles, 
    Lightbulb 
} from 'lucide-react';

const ThemesSection = () => {
    const themes = [
        {
            title: "Campus & Student Life",
            description: "Better learning, smart campus solutions, and student utilities.",
            icon: <GraduationCap className="w-7 h-7" />,
            iconColor: "text-cyan-400",
            border: "group-hover:border-cyan-400/50",
            bg: "group-hover:bg-cyan-400/10"
        },
        {
            title: "Healthcare & Wellness",
            description: "Med-tech, mental health apps, and fitness trackers.",
            icon: <HeartPulse className="w-7 h-7" />,
            iconColor: "text-pink-500",
            border: "group-hover:border-pink-500/50",
            bg: "group-hover:bg-pink-500/10"
        },
        {
            title: "Environment & Sustainability",
            description: "Eco-friendly tech, waste management, and energy efficiency.",
            icon: <Leaf className="w-7 h-7" />,
            iconColor: "text-green-500",
            border: "group-hover:border-green-500/50",
            bg: "group-hover:bg-green-500/10"
        },
        {
            title: "Society & Community",
            description: "Tech for social good, connectivity, and public services.",
            icon: <Users className="w-7 h-7" />,
            iconColor: "text-orange-500",
            border: "group-hover:border-orange-500/50",
            bg: "group-hover:bg-orange-500/10"
        },
        {
            title: "AI & Machine Learning",
            description: "Intelligent systems, automation, and predictive models.",
            icon: <BrainCircuit className="w-7 h-7" />,
            iconColor: "text-purple-500",
            border: "group-hover:border-purple-500/50",
            bg: "group-hover:bg-purple-500/10"
        },
        {
            title: "Finance & Commerce",
            description: "Fintech, secure payments, and e-commerce solutions.",
            icon: <TrendingUp className="w-7 h-7" />,
            iconColor: "text-yellow-500",
            border: "group-hover:border-yellow-500/50",
            bg: "group-hover:bg-yellow-500/10"
        },
        {
            title: "Lifestyle & Creativity",
            description: "Productivity tools, art tech, and entertainment.",
            icon: <Zap className="w-7 h-7" />,
            iconColor: "text-fuchsia-500",
            border: "group-hover:border-fuchsia-500/50",
            bg: "group-hover:bg-fuchsia-500/10"
        },
        {
            title: "Open Innovation",
            description: "Got a unique idea? Build anything that solves a problem!",
            icon: <Sparkles className="w-7 h-7" />,
            iconColor: "text-white",
            border: "group-hover:border-white/50",
            bg: "group-hover:bg-white/10"
        }
    ];

    return (
        <section id="themes" className="relative w-full bg-[#0E0C16] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Header & Hint */}
                <div className="text-center mb-16">
                    {/* Updated to bg-linear-to-r for Tailwind v4 */}
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-wide">
                        Hackathon <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Themes</span>
                    </h2>
                    
                    {/* The Hint Box */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-pulse">
                        <Lightbulb className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <p className="text-gray-300 text-sm md:text-base font-medium">
                            Hint: Your project should solve a <span className="text-white font-bold underline decoration-purple-500 underline-offset-4">real-life problem</span>.
                        </p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {themes.map((theme, index) => (
                        <div 
                            key={index} 
                            className={`p-6 rounded-2xl bg-[#13131d] border border-white/5 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg ${theme.border} flex flex-col h-full relative overflow-hidden`}
                        >
                            {/* Icon Box: 
                                - bg-white/5 for uniform grey background
                                - theme.iconColor applies the specific color to the icon text/outline
                            */}
                            <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-white/5 ${theme.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                {theme.icon}
                            </div>
                            
                            {/* Updated title hover to bg-linear-to-r */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                {theme.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {theme.description}
                            </p>
                            
                            {/* Subtle background glow on hover */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${theme.bg}`}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ThemesSection;