import React from 'react';
import { Github, Instagram, Linkedin, Terminal } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-2 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold text-cyan-400 flex items-center gap-2 font-display tracking-wide">
                            <Terminal className="w-6 h-6" />
                            HACK<span className="text-white">RUSH</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            A 15-hour innovation sprint to build, break, and create the future. Hosted by Etcetera Club, MGM College.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/etc.etcetera.in/" target="_blank" />
                            <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/groups/14608259/" target="_blank" />
                            <SocialIcon icon={<Github className="w-5 h-5" />}  href="https://github.com/aadarshantony/Hackrush/" target="_blank" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-white font-bold mb-2 font-display tracking-wide">Quick Links</h4>
                        <FooterLink href="#about">About Us</FooterLink>
                        <FooterLink href="#themes">Themes</FooterLink>
                        <FooterLink href="#schedule">Schedule</FooterLink>
                        <FooterLink href="#prizes">Prize Pool</FooterLink>
                    </div>

                    {/* Legal / Contact */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-white font-bold mb-2 font-display tracking-wide">Legal & Help</h4>
                        <FooterLink href="#rules">Code of Conduct</FooterLink>
                        <FooterLink href="#faq">FAQs</FooterLink>
                        <FooterLink href="#contact">Contact Support</FooterLink>
                        <a href="mailto:etcetera@mgmcet.ac.in" className="text-cyan-400 text-sm hover:underline mt-2">
                            etcetera@mgmcet.ac.in
                        </a>
                        <a href="mailto:iedc@mgmcet.ac.in" className="text-cyan-400 text-sm hover:underline mt-2">
                            iedc@mgmcet.ac.in
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-4"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left mb-2">
                    <p className="text-gray-500 text-xs">
                        &copy; 2025 Etcetera Club & IEDC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// --- Helper Components ---
const SocialIcon = ({ icon, href, target }) => (
    <a 
        href={href} 
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, children }) => (
    <a 
        href={href} 
        className="text-gray-400 text-sm hover:text-cyan-400 transition-colors w-fit"
    >
        {children}
    </a>
);

export default Footer;