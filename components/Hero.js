'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const orbsRef = useRef([]);
  const orbitalsRef = useRef([]);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbElements = orbsRef.current;
    const orbitalElements = orbitalsRef.current;

    // Text animation timeline
    const textTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate badge entrance
    if (badgeRef.current) {
      textTl.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
        }
      );
    }

    // Animate heading with split text effect
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('.word');
      textTl.fromTo(
        words,
        {
          opacity: 0,
          y: 30,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.05,
        },
        '-=0.4'
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      textTl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      );
    }

    // Animate buttons with futuristic entry
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll('a');
      
      // Create individual futuristic entrance for each button
      buttons.forEach((button, index) => {
        // Initial state with multiple effects
        gsap.set(button, {
          opacity: 0,
          scale: 0.5,
          rotationY: -180,
          z: -200,
        });

        // Main entrance animation
        textTl.to(
          button,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: index * 0.2,
          },
          '-=0.4'
        );

        // Add continuous hover-ready animations
        gsap.to(button, {
          y: -3,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.5 + index * 0.2,
        });

        // Glow pulse effect
        const glowElement = button.querySelector('.button-glow');
        if (glowElement) {
          gsap.to(glowElement, {
            opacity: 0.6,
            scale: 1.1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.5 + index * 0.3,
          });
        }
      });
    }

    // Create timeline for entrance animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate central orbs entrance
    orbElements.forEach((orb, index) => {
      if (!orb) return;
      
      tl.fromTo(
        orb,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          delay: index * 0.15,
        },
        0
      );
    });

    // Animate orbital particles entrance
    orbitalElements.forEach((orbital, index) => {
      if (!orbital) return;
      
      tl.fromTo(
        orbital,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.5 + index * 0.1,
        },
        0
      );
    });

    // Central orbs - gentle pulsing
    orbElements.forEach((orb, index) => {
      if (!orb) return;

      // Gentle scale pulsing
      gsap.to(orb, {
        scale: 1.05,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3,
      });

      // Slow rotation for rings
      if (index >= 4) {
        gsap.to(orb, {
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 30 + index * 5,
          repeat: -1,
          ease: 'none',
        });
      }
    });

    // Orbital particles - circular orbit animations
    const orbitConfigs = [
      { radius: 200, speed: 20, direction: 1, startAngle: 0 },
      { radius: 200, speed: 20, direction: 1, startAngle: 72 },
      { radius: 200, speed: 20, direction: 1, startAngle: 144 },
      { radius: 200, speed: 20, direction: 1, startAngle: 216 },
      { radius: 200, speed: 20, direction: 1, startAngle: 288 },
      { radius: 160, speed: 25, direction: -1, startAngle: 36 },
      { radius: 160, speed: 25, direction: -1, startAngle: 108 },
      { radius: 160, speed: 25, direction: -1, startAngle: 180 },
      { radius: 160, speed: 25, direction: -1, startAngle: 252 },
      { radius: 160, speed: 25, direction: -1, startAngle: 324 },
      { radius: 120, speed: 18, direction: 1, startAngle: 0 },
      { radius: 120, speed: 18, direction: 1, startAngle: 90 },
      { radius: 120, speed: 18, direction: 1, startAngle: 180 },
      { radius: 120, speed: 18, direction: 1, startAngle: 270 },
    ];

    orbitalElements.forEach((orbital, index) => {
      if (!orbital || !orbitConfigs[index]) return;

      const config = orbitConfigs[index];
      const centerX = 0;
      const centerY = 0;

      // Create circular orbit animation
      gsap.to(orbital, {
        motionPath: {
          path: [
            { x: centerX, y: centerY }
          ],
          curviness: 0,
        },
        duration: config.speed * config.direction,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: () => {
            const progress = (Date.now() / (config.speed * 1000)) % 1;
            const angle = (config.startAngle + progress * 360 * config.direction) * (Math.PI / 180);
            return centerX + Math.cos(angle) * config.radius;
          },
          y: () => {
            const progress = (Date.now() / (config.speed * 1000)) % 1;
            const angle = (config.startAngle + progress * 360 * config.direction) * (Math.PI / 180);
            return centerY + Math.sin(angle) * config.radius;
          },
        },
      });

      // Gentle pulsing for orbital particles
      gsap.to(orbital, {
        scale: 1.2,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });

    // Animate connecting lines
    const lines = container.querySelectorAll('.particle-line');
    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 0.3,
          duration: 2,
          delay: 0.8 + index * 0.15,
          ease: 'power2.out',
        }
      );

      gsap.to(line, {
        opacity: 0.4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Cleanup
    return () => {
      textTl.kill();
      tl.kill();
      gsap.killTweensOf(orbElements);
      gsap.killTweensOf(orbitalElements);
      gsap.killTweensOf(lines);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay matching navbar */}
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
        
        {/* Ambient glow effects similar to navbar */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 z-10">
            {/* Available for Work badge - matching navbar style */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/10 shadow-xl"
              style={{
                boxShadow: `
                  0 0 20px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                <div className="relative w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-white/90 text-sm font-medium tracking-wide">Available for Work</span>
            </div>

            {/* Main heading */}
            <h1 
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ 
                fontFamily: 'var(--font-geist-sans)',
                perspective: '1000px',
              }}
            >
              {['Transform', 'your', 'ideas', 'into', 'digital', 'success', 'with', 'us!'].map((word, index) => (
                <span 
                  key={index} 
                  className="word inline-block mr-3 md:mr-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-light tracking-wide"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              We&apos;re your partner in product design, website creation, and branding for every stage of your business.
            </p>

            {/* CTA Buttons - Futuristic animated buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4" style={{ perspective: '1000px' }}>
              <Link 
                href="#services"
                className="relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-full overflow-hidden group tracking-wide w-full sm:w-auto text-center"
                style={{ 
                  fontFamily: 'var(--font-geist-sans)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Animated background gradient */}
                <span className="absolute inset-0 bg-linear-to-r from-white via-gray-50 to-white animate-shimmer"></span>
                
                {/* Glow effect */}
                <span className="button-glow absolute inset-0 bg-white rounded-full blur-xl opacity-0 -z-10"></span>
                
                {/* Scan line effect */}
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 bg-linear-to-b from-transparent via-white/30 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></span>
                </span>
                
                {/* Border glow */}
                <span className="absolute inset-0 rounded-full border-2 border-white/50 group-hover:border-white transition-colors duration-300"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:text-shadow-lg transition-all duration-300">Services</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gray-900/20 rounded-tl-full"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gray-900/20 rounded-br-full"></span>
              </Link>
              
              <Link 
                href="#contact"
                className="relative px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-full overflow-hidden group tracking-wide w-full sm:w-auto text-center"
                style={{ 
                  fontFamily: 'var(--font-geist-sans)',
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 0 20px rgba(0, 0, 0, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                {/* Glow effect */}
                <span className="button-glow absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 -z-10"></span>
                
                {/* Animated grid background */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '10px 10px'
                  }}></span>
                </span>
                
                {/* Scan line effect */}
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></span>
                </span>
                
                {/* Moving border */}
                <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300"></span>
                
                <span className="relative z-10 group-hover:text-shadow-sm transition-all duration-300">Contact Us</span>
                
                {/* Particle effect corners */}
                <span className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                <span className="absolute bottom-1 left-1 w-1 h-1 bg-white/60 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                
                {/* Energy pulse */}
                <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
              </Link>
            </div>
          </div>

          {/* Right column - Futuristic GSAP Animation */}
          <div ref={containerRef} className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Central glow - darker theme */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Animated orbs container - darker glass theme */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Large outer orb */}
              <div
                ref={(el) => (orbsRef.current[0] = el)}
                className="absolute w-80 h-80 rounded-full border border-white/10 backdrop-blur-xl"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03), transparent)',
                  boxShadow: `
                    0 0 60px rgba(255, 255, 255, 0.1),
                    inset 0 0 60px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              ></div>

              {/* Medium orb */}
              <div
                ref={(el) => (orbsRef.current[1] = el)}
                className="absolute w-60 h-60 rounded-full border border-white/10 backdrop-blur-xl"
                style={{
                  background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), transparent)',
                  boxShadow: `
                    0 0 40px rgba(255, 255, 255, 0.12),
                    inset 0 0 40px rgba(255, 255, 255, 0.06),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              ></div>

              {/* Small inner orb */}
              <div
                ref={(el) => (orbsRef.current[2] = el)}
                className="absolute w-40 h-40 rounded-full border border-white/15 backdrop-blur-xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06), transparent)',
                  boxShadow: `
                    0 0 30px rgba(255, 255, 255, 0.15),
                    inset 0 0 30px rgba(255, 255, 255, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.15)
                  `,
                }}
              ></div>

              {/* Tiny core orb */}
              <div
                ref={(el) => (orbsRef.current[3] = el)}
                className="absolute w-20 h-20 rounded-full border border-white/20 backdrop-blur-xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08), transparent)',
                  boxShadow: `
                    0 0 20px rgba(255, 255, 255, 0.2),
                    inset 0 0 20px rgba(255, 255, 255, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `,
                }}
              ></div>

              {/* Orbital ring guides */}
              <div
                ref={(el) => (orbsRef.current[4] = el)}
                className="absolute w-[400px] h-[400px] rounded-full border border-white/5"
                style={{ borderStyle: 'dashed' }}
              ></div>
              <div
                ref={(el) => (orbsRef.current[5] = el)}
                className="absolute w-80 h-80 rounded-full border border-white/5"
                style={{ borderStyle: 'dashed' }}
              ></div>
              <div
                ref={(el) => (orbsRef.current[6] = el)}
                className="absolute w-60 h-60 rounded-full border border-white/5"
                style={{ borderStyle: 'dashed' }}
              ></div>

              {/* Orbital particles - Outer orbit (5 particles at 72° intervals) */}
              <div
                ref={(el) => (orbitalsRef.current[0] = el)}
                className="absolute w-3 h-3 rounded-full bg-white/40 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[1] = el)}
                className="absolute w-3 h-3 rounded-full bg-white/40 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[2] = el)}
                className="absolute w-3 h-3 rounded-full bg-white/40 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[3] = el)}
                className="absolute w-3 h-3 rounded-full bg-white/40 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[4] = el)}
                className="absolute w-3 h-3 rounded-full bg-white/40 shadow-lg"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                }}
              ></div>

              {/* Orbital particles - Middle orbit (5 particles at 72° intervals, counter-rotating) */}
              <div
                ref={(el) => (orbitalsRef.current[5] = el)}
                className="absolute w-2.5 h-2.5 rounded-full bg-white/50 shadow-lg"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[6] = el)}
                className="absolute w-2.5 h-2.5 rounded-full bg-white/50 shadow-lg"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[7] = el)}
                className="absolute w-2.5 h-2.5 rounded-full bg-white/50 shadow-lg"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[8] = el)}
                className="absolute w-2.5 h-2.5 rounded-full bg-white/50 shadow-lg"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[9] = el)}
                className="absolute w-2.5 h-2.5 rounded-full bg-white/50 shadow-lg"
                style={{
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                }}
              ></div>

              {/* Orbital particles - Inner orbit (4 particles at 90° intervals) */}
              <div
                ref={(el) => (orbitalsRef.current[10] = el)}
                className="absolute w-2 h-2 rounded-full bg-white/60 shadow-lg"
                style={{
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[11] = el)}
                className="absolute w-2 h-2 rounded-full bg-white/60 shadow-lg"
                style={{
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[12] = el)}
                className="absolute w-2 h-2 rounded-full bg-white/60 shadow-lg"
                style={{
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
                }}
              ></div>
              <div
                ref={(el) => (orbitalsRef.current[13] = el)}
                className="absolute w-2 h-2 rounded-full bg-white/60 shadow-lg"
                style={{
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
