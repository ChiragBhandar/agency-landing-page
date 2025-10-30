"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer content on scroll
      gsap.fromTo(
        ".footer-content",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );

      // Animate divider line
      gsap.fromTo(
        ".footer-divider",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "App Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  return (
    <footer ref={footerRef} className="bg-black text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Background decorative elements matching hero */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <motion.div
            className="footer-content"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              Code&Canvas
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed font-light tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              Crafting digital experiences that inspire and transform businesses. Let&apos;s build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-linear-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300 group"
                  style={{
                    boxShadow: `
                      0 0 20px rgba(0, 0, 0, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-content">
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group font-light tracking-wide"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-content">
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={service.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group font-light tracking-wide"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-content">
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>Get In Touch</h4>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3 text-white/60 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-1 text-white/60 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors font-light tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  123 DLF<br />
                  India , New Delhi 110005
                </span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 text-white/60 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors font-light tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  +91 9876789087
                </span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3 text-white/60 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors font-light tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  hello@codeandcanvas.com
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8 origin-center" />

        {/* Bottom Footer */}
        <motion.div
          className="footer-content flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-white/60 text-sm flex items-center font-light tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            <span>© {currentYear} Code&Canvas. All rights reserved.</span>
            <motion.span
              className="mx-2 text-white/40"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              •
            </motion.span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-white/60" fill="currentColor" /> by Code&Canvas
            </span>
          </div>
          <div className="flex space-x-6 text-sm font-light tracking-wide" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            <motion.a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button - matching hero style */}
      <motion.button
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-linear-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300 group"
        style={{
          boxShadow: `
            0 0 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
