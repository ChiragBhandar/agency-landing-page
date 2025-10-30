'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`hidden md:flex fixed top-3 md:top-4 lg:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[95%] lg:w-auto max-w-6xl ${isScrolled ? 'top-2 md:top-3 lg:top-4' : 'top-3 md:top-4 lg:top-6'}`}>
        <div className={`relative flex items-center justify-between gap-2 md:gap-4 lg:gap-6 px-4 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-4 rounded-full bg-linear-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 w-full ${isScrolled ? 'shadow-black/50 scale-[0.98]' : 'shadow-black/30'}`} style={{ boxShadow: '0 0 40px rgba(0, 0, 0, 0.4), 0 0 80px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
          <Link href="#navbar" className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-12 group shadow-lg">
            <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-900 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </Link>
          <div className="flex items-center gap-0.5 md:gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="relative px-3 md:px-4 lg:px-6 py-2 md:py-2.5 text-white/90 font-medium text-xs md:text-sm tracking-wide transition-all duration-300 hover:text-white group overflow-hidden rounded-full">
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
          <Link href="mailto:chirag0space@gmail.com" className="hidden lg:flex relative px-6 xl:px-8 py-2.5 xl:py-3 bg-white hover:bg-gray-50 text-gray-900 font-medium text-xs xl:text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              <span className="truncate">hello@codeandcanvas.com</span>
              <svg className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-linear-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </nav>
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="#navbar" className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg">
            <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-2 bg-gray-900/98 border-t border-white/5">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block px-4 py-3 text-white/90 font-medium text-sm tracking-wide transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg">
                {link.name}
              </Link>
            ))}
            <Link href="mailto:chirag0space@gmail.com" className="block px-4 py-3 mt-2 bg-white hover:bg-gray-50 text-gray-900 font-medium text-sm rounded-lg transition-all duration-300 text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
