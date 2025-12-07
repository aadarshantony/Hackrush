import { gsap } from "gsap";
import { MapPin, Building2, Navigation, Train, Plane, Bus } from 'lucide-react';

const VenueSection = () => {

    const handleHover = (e) => {
        gsap.to(e.currentTarget, { scale: 1.02, borderColor: "#22d3ee", backgroundColor: "rgba(34, 211, 238, 0.05)", duration: 0.3 });
    };

    const handleLeave = (e) => {
        gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#13131d", duration: 0.3 });
    };

    return (
        <section id="venue" className="relative w-full bg-[#0E0C16] py-16 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                
                <div className="text-center mb-10 space-y-2">
                    <h2 className="section-title text-4xl md:text-5xl font-black uppercase tracking-wider text-white font-display">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                            The Arena
                        </span>
                    </h2>
                    <p className="section-title text-gray-400 text-sm font-medium tracking-wide">Where Innovation Meets Execution</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        
                        <div className="venue-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg group hover:border-cyan-500/30 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                                    <Building2 className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="px-2 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider animate-pulse font-display">
                                    Open Venue
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-1 leading-tight font-display tracking-wide">
                                MGM College of <br/>Engineering
                            </h3>
                            <p className="text-gray-400 text-sm mb-5 border-l-2 border-purple-500 pl-3">
                                Pampakuda, Memury,<br/>
                                Ernakulam District, Kerala - 686667
                            </p>

                            <a 
                                href="https://goo.gl/maps/YourMapLinkHere" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 font-display tracking-wide"
                            >
                                <Navigation className="w-4 h-4" />
                                Navigate to Location
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <TravelCard icon={<Train className="w-4 h-4 text-purple-400" />} title="Nearest Railway" value="Piravom (15km)" onHover={handleHover} onLeave={handleLeave} />
                            <TravelCard icon={<Plane className="w-4 h-4 text-pink-400" />} title="Nearest Airport" value="Cochin (35km)" onHover={handleHover} onLeave={handleLeave} />
                            <TravelCard icon={<Bus className="w-4 h-4 text-cyan-400" />} title="Bus Station" value="Pampakuda (500m)" onHover={handleHover} onLeave={handleLeave} />
                            <TravelCard icon={<MapPin className="w-4 h-4 text-yellow-400" />} title="From Kochi" value="~1 Hr Drive" onHover={handleHover} onLeave={handleLeave} />
                        </div>
                    </div>

                    <div className="map-container lg:col-span-3 h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl relative group">
                        
                        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-500 z-20 rounded-tl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-500 z-20 rounded-br-lg"></div>

                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5670836528774!2d76.5275156!3d9.9357125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e78bd6e4cdd7%3A0xe556ac5edcd409f4!2sMGM%20College%20of%20Engineering%20and%20Technology%2C%20Pampakuda%20%2C%20Eranakulam!5e0!3m2!1sen!2sin!4v1716380000000!5m2!1sen!2sin"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="MGM College Map"
                            className="w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TravelCard = ({ icon, title, value, onHover, onLeave }) => (
    <div 
        className="travel-card p-3 rounded-lg bg-[#13131d] border border-white/5 cursor-default"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 mb-0.5">
                {icon}
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider font-display">{title}</span>
            </div>
            <p className="text-white font-medium text-xs truncate">{value}</p>
        </div>
    </div>
);

export default VenueSection;