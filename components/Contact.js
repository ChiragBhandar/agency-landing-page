"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const contactCardsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background heading animation with scale and opacity
      gsap.fromTo(
        ".bg-text",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 0.15,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Continuous subtle scale pulse for background text
      gsap.to(".bg-text", {
        scale: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Main heading animation with enhanced effects
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate feature items individually
      gsap.fromTo(
        ".feature-item",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".feature-item",
            start: "top 85%",
          },
        }
      );

      // Animate social icons with rotation
      gsap.fromTo(
        ".social-icon",
        {
          opacity: 0,
          scale: 0,
          rotate: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".social-icon",
            start: "top 85%",
          },
        }
      );

      // Form animation with 3D rotation
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: 50,
          rotateY: 15,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );

      // Form inputs glow animation
      gsap.fromTo(
        ".form-input",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
          },
        }
      );

      // Contact cards animation with enhanced effects
      gsap.fromTo(
        ".contact-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: "top 90%",
          },
        }
      );

      // Floating animation for decorative elements
      gsap.to(".floating", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const features = [
    "Personalized assistance",
    "Timely response",
    "Comprehensive support",
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email us",
      info: "hello@codeandcanvas.com",
      href: "mailto:hello@codeandcanvas.com",
    },
    {
      icon: Phone,
      title: "Call us",
      info: "+91 5011234567",
      href: "tel:+91 5011234567",
    },
    {
      icon: MapPin,
      title: "Our location",
      info: "123 DLF , Delhi -110005 India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
      
      {/* Background Text - More visible */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <h2 className="bg-text text-[8rem] md:text-[12rem] lg:text-[20rem] font-black text-white whitespace-nowrap tracking-tight" style={{
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)',
          textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
        }}>
          Contact Us
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 mb-12 sm:mb-16 md:mb-20">
          {/* Left Side - Text & Social */}
          <div ref={headingRef} className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                Reach out{" "}
                <span className="inline-block">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-md"
            >
              <p>Have a question or need assistance?</p>
              <p>Reach out to our dedicated support team.</p>
              <p>We&apos;re here to help with any inquiries you may have.</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item flex items-center gap-2 sm:gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </motion.div>
                  <span className="text-gray-400 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div ref={formRef}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-2xl shadow-white/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  className="form-input relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  className="form-input relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                className="form-input relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 bg-white text-black rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-white/10"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Submit</span>
                <div className="absolute inset-0 bg-linear-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Contact Cards */}
        <div
          ref={contactCardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="contact-card group relative bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Plus Icon with rotation animation */}
              <motion.div
                className="absolute top-6 right-6 text-white/20 group-hover:text-purple-400/60 transition-colors"
                whileHover={{ rotate: 90, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </motion.div>

              <div className="space-y-4 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </motion.div>
                <div>
                  <h3 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.info}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
