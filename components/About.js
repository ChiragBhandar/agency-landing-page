'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const headingRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const stats = [
    { number: '150+', label: 'Projects Completed', delay: 0 },
    { number: '98%', label: 'Client Satisfaction', delay: 0.2 },
    { number: '50+', label: 'Team Members', delay: 0.4 },
    { number: '5+', label: 'Years Experience', delay: 0.6 },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation First',
      description: 'We push boundaries and explore cutting-edge technologies to deliver solutions that stand out.',
    },
    {
      icon: '🤝',
      title: 'Client Focused',
      description: 'Your success is our mission. We collaborate closely to understand and exceed your expectations.',
    },
    {
      icon: '⚡',
      title: 'Speed & Quality',
      description: 'Fast delivery without compromising on excellence. We value your time and vision.',
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Built for growth. Our solutions evolve with your business needs.',
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect for background elements
      gsap.to('.about-orb-1', {
        yPercent: 30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.about-orb-2', {
        yPercent: -20,
        xPercent: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Floating animation for value cards
      gsap.to('.value-card', {
        y: -10,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach((counter) => {
        const target = counter.getAttribute('data-target');
        const isPercentage = target.includes('%');
        const numericValue = parseInt(target);
        
        gsap.to(counter, {
          innerHTML: numericValue,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            const value = Math.ceil(this.targets()[0].innerHTML);
            counter.innerHTML = isPercentage ? `${value}%` : `${value}+`;
          }
        });
      });
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full max-w-[100vw] bg-black text-white overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full max-w-[100vw] pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        {/* Animated Orbs */}
        <motion.div
          className="about-orb-1 absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="about-orb-2 absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
              About Us
            </span>
          </motion.div>

          {/* Main Heading with split animation */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            {['WE', 'CREATE', 'DIGITAL', 'EXPERIENCES'].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3 md:mr-5"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  color: '#60a5fa',
                  textShadow: '0 0 30px rgba(96, 165, 250, 0.6)',
                  transition: { duration: 0.3 },
                }}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Animated underline */}
          <motion.div
            className="mx-auto h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '70%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          />

          {/* Description */}
          <motion.p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We are a passionate team of designers, developers, and strategists dedicated to
            transforming ideas into stunning digital realities. With creativity at our core and
            innovation in our DNA, we craft experiences that leave lasting impressions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div
                    className="stat-number text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                    data-target={stat.number}
                  >
                    0
                  </div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                <div className="relative h-full p-8 bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/10 group-hover:to-pink-500/5 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 text-6xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Title */}
                  <h4 className="relative z-10 text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h4>

                  {/* Description */}
                  <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Glowing Border Container */}
          <div className="relative p-0.5 rounded-3xl overflow-hidden group">
            {/* Rotating gradient border */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
              }}
            />
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 opacity-75 blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
              }}
            />

            {/* Inner content container */}
            <div className="relative p-8 md:p-12 bg-black rounded-3xl backdrop-blur-sm overflow-hidden">
              {/* Secondary inner glow */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
              
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Floating light orbs */}
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-6 bg-linear-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Our Story
                </motion.h3>

                <motion.div
                  className="space-y-4 text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p>
                    Founded with a vision to bridge the gap between creativity and technology, our
                    agency has grown from a small team of passionate individuals to a full-fledged
                    digital powerhouse.
                  </p>
                  <p>
                    Every project we undertake is a testament to our commitment to excellence. We
                    don&apos;t just build websites; we craft experiences that resonate, engage, and
                    convert. Our approach combines strategic thinking, cutting-edge technology, and
                    artistic flair to deliver solutions that drive real results.
                  </p>
                  <p>
                    From startups to enterprises, we&apos;ve helped businesses of all sizes achieve their
                    digital ambitions. Let&apos;s create something extraordinary together.
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.a
                    href="#contact"
                    className="group relative inline-block px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <span className="relative z-10">
                      Let&apos;s Work Together
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
