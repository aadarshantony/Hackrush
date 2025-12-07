import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = ["About", "Prizes", "Themes", "Schedule", "FAQ", "Contact"];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
                    ? 'bg-[#0E0C16]/80 backdrop-blur-md shadow-lg py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="flex items-center justify-between px-6 md:px-8 w-full max-w-7xl mx-auto">

                <div className="text-2xl font-bold text-cyan-400 font-display tracking-wide">
                    <a href="/">HACK<span className="text-white">RUSH</span></a>

                </div>

                <div className="hidden md:flex items-center space-x-8 text-gray-300 text-sm font-medium">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                            {item}
                        </a>
                    ))}
                    <a
                        href="https://forms.gle/oSM5HFeq3WKMZrH98"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    >
                        Register
                    </a>
                </div>

                <button
                    className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0E0C16]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-6 shadow-2xl">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 text-lg font-medium hover:text-cyan-400 transition-colors block"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}

                    <a
                        href="https://forms.gle/oSM5HFeq3WKMZrH98"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    >
                        Register Now
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar;