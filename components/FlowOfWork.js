"use client";


import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import dynamic from 'next/dynamic';
// Load Lenis only on the client when needed to avoid adding it to the initial bundle
const ReactLenis = dynamic(() => import('lenis/react'), { ssr: false, loading: () => null });
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const steps = [
  { title: "1.Research", description: "Understanding client goals, audience, and challenges.", imgUrl: "/images/lummi/research.jpg" },
  { title: "2.Design", description: "Crafting beautiful UI/UX aligned with brand identity.", imgUrl: "/images/lummi/design.jpg" },
  { title: "3.Development", description: "Building responsive and fast websites using modern tech.", imgUrl: "/images/lummi/development.jpg" },
  { title: "4.Testing", description: "Ensuring pixel-perfect performance across all devices.", imgUrl: "/images/lummi/testing.jpg" },
  { title: "5.Launch", description: "Deploying and optimizing for real-world performance.", imgUrl: "/images/lummi/launch.jpg" },
];


const Skiper34 = () => {
  // detect reduced-motion preference; if user prefers reduced motion, avoid Lenis and heavy scroll handling
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const sectionBody = (
    <section className="relative min-h-screen w-full max-w-[100vw] bg-black flex flex-col items-center gap-[5vh] sm:gap-[8vh] md:gap-[10vh] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-28 lg:pt-[30vh] pb-12 sm:pb-16 md:pb-[20vh] overflow-hidden">
        {/* Background decorative elements matching Hero */}
        <div className="absolute inset-0 w-full max-w-[100vw]">
          {/* Subtle gradient overlay matching Hero */}
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
          
          {/* Ambient glow effects similar to Hero */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>


        {/* Main Heading */}
        <motion.div 
          className="relative z-10 text-center mb-4 sm:mb-6 md:mb-8 px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {["THIS", "IS", "HOW", "WE", "DO", "OUR", "WORK"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 sm:mr-3 md:mr-4"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#60a5fa",
                  textShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="mx-auto mt-4 sm:mt-6 h-0.5 sm:h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
          
          {/* Glowing particles */}
          <motion.div
            className="absolute -top-4 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm"
            animate={{
              x: ["-50%", "100%", "-50%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 right-1/4 w-2 h-2 bg-purple-400 rounded-full blur-sm"
            animate={{
              x: ["0%", "-100%", "0%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>


        <div className="absolute z-10 left-1/2 top-24 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight text-white/40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-linear-to-b after:from-white/20 after:to-transparent after:content-['']">
          </span>
        </div>
        {steps.map((step, idx) => (
          <StickyCard_003 key={idx} step={step} index={idx} />
        ))}
      </section>
  );

  // Conditionally wrap the sectionBody with Lenis when reduced-motion isn't requested
  return prefersReduced ? sectionBody : <ReactLenis root>{sectionBody}</ReactLenis>;
};


const StickyCard_003 = ({ step, index = 0 }) => {
  // Responsive vertical margin - use state to avoid SSR mismatch
  const [vertMargin, setVertMargin] = useState(10);
  const container = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(0);
  const hasSetMaxScrollY = useRef(false);




  const { scrollY } = useScroll({
    target: container,
  });
  // Use a function for scale to avoid NaN during initial render
  const scale = useTransform(scrollY, (latest) => {
    if (maxScrollY === 0) return 1;
    if (latest <= maxScrollY) return 1;
    return Math.max(0, 1 - (latest - maxScrollY) / 10000);
  });
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });


  // No tilt/rotate effect: keep only scroll/scale behavior.
  // Previous implementation updated a motion value to rotate the card/image on scroll.
  // That has been removed to prevent the tilt. Keep existing scale logic above.

  // Set vertMargin based on window width (client-side only)
  useEffect(() => {
    const handleResize = () => {
      setVertMargin(window.innerWidth < 640 ? 20 : 10);
    };
    
    // Set initial value
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView && !hasSetMaxScrollY.current) {
      hasSetMaxScrollY.current = true;
      // Defer state update to avoid cascading renders
      queueMicrotask(() => {
        setMaxScrollY(scrollY.get());
      });
    }
  }, [isInView, scrollY]);


  return (
    <motion.div
      ref={container}
      className="rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl sticky w-[85vw] sm:w-[calc(100vw-32px)] max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl overflow-hidden bg-neutral-200 shadow-2xl"
      style={{
        scale: scale,
        height: `${100 - 2 * vertMargin}vh`,
        top: `${vertMargin}vh`,
      }}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={step.imgUrl}
          alt={step.title}
          fill
          sizes="90vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          // Prioritize the first image and lazy-load the rest to reduce initial bandwidth
          loading={index === 0 ? 'eager' : 'lazy'}
          priority={index === 0}
          quality={index === 0 ? 75 : 60}
        />
      </div>
      
      {/* Text overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <motion.h3 
          className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-3 md:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
};


export { Skiper34, StickyCard_003 };
export default Skiper34;