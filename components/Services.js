"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: "💻",
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and cutting-edge technology.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized", "SEO Friendly"],
    color: "from-[#2C3E50] via-[#34495E] to-[#2C3E50]",
    glowColor: "bg-[#34495E]/30",
    borderColor: "border-[#4A5F7F]/80",
    shadowColor: "shadow-[0_0_40px_rgba(52,73,94,0.6)]",
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
    color: "from-[#2C3E50] via-[#34495E] to-[#2C3E50]",
    glowColor: "bg-[#34495E]/30",
    borderColor: "border-[#4A5F7F]/80",
    shadowColor: "shadow-[0_0_40px_rgba(52,73,94,0.6)]",
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to engage users and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-[#2C3E50] via-[#34495E] to-[#2C3E50]",
    glowColor: "bg-[#34495E]/30",
    borderColor: "border-[#4A5F7F]/80",
    shadowColor: "shadow-[0_0_40px_rgba(52,73,94,0.6)]",
  },
  {
    id: 4,
    icon: "🚀",
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that boost your online presence and drive growth.",
    features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
    color: "from-[#2C3E50] via-[#34495E] to-[#2C3E50]",
    glowColor: "bg-[#34495E]/30",
    borderColor: "border-[#4A5F7F]/80",
    shadowColor: "shadow-[0_0_40px_rgba(52,73,94,0.6)]",
  },
  {
    id: 5,
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for modern businesses.",
    features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Cloud Migration"],
    color: "from-[#2C3E50] via-[#34495E] to-[#2C3E50]",
    glowColor: "bg-[#34495E]/30",
    borderColor: "border-[#4A5F7F]/80",
    shadowColor: "shadow-[0_0_40px_rgba(52,73,94,0.6)]",
  },
  {
    id: 6,
    icon: "🔒",
    title: "Security & Support",
    description: "Comprehensive security solutions and 24/7 support to keep your business safe.",
    features: ["Security Audits", "24/7 Monitoring", "Maintenance", "Technical Support"],
    color: "from-[#2C3E50] via-[#34495E] to-[#2C3E50]",
    glowColor: "bg-[#34495E]/30",
    borderColor: "border-[#4A5F7F]/80",
    shadowColor: "shadow-[0_0_40px_rgba(52,73,94,0.6)]",
  },
];

// Generate particles with deterministic values to avoid hydration errors
const particleData = [
  { id: 0, left: 15, top: 20, duration: 4.2, delay: 0.3 },
  { id: 1, left: 85, top: 15, duration: 3.8, delay: 1.2 },
  { id: 2, left: 45, top: 80, duration: 4.5, delay: 0.8 },
  { id: 3, left: 70, top: 35, duration: 3.5, delay: 1.5 },
  { id: 4, left: 25, top: 60, duration: 4.0, delay: 0.5 },
  { id: 5, left: 90, top: 70, duration: 3.9, delay: 1.8 },
  { id: 6, left: 10, top: 45, duration: 4.3, delay: 0.2 },
  { id: 7, left: 60, top: 25, duration: 3.7, delay: 1.0 },
  { id: 8, left: 35, top: 90, duration: 4.1, delay: 0.6 },
  { id: 9, left: 80, top: 55, duration: 3.6, delay: 1.4 },
  { id: 10, left: 20, top: 10, duration: 4.4, delay: 0.4 },
  { id: 11, left: 95, top: 40, duration: 3.8, delay: 1.6 },
  { id: 12, left: 50, top: 75, duration: 4.2, delay: 0.7 },
  { id: 13, left: 75, top: 5, duration: 3.9, delay: 1.1 },
  { id: 14, left: 5, top: 85, duration: 4.0, delay: 0.9 },
  { id: 15, left: 65, top: 50, duration: 3.7, delay: 1.3 },
  { id: 16, left: 40, top: 30, duration: 4.3, delay: 0.1 },
  { id: 17, left: 55, top: 95, duration: 3.6, delay: 1.7 },
  { id: 18, left: 30, top: 65, duration: 4.1, delay: 0.5 },
  { id: 19, left: 85, top: 20, duration: 3.8, delay: 1.9 },
];

export default function Services() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect for background orbs
      gsap.to(".service-orb-1", {
        yPercent: 40,
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".service-orb-2", {
        yPercent: -30,
        xPercent: 15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".service-orb-3", {
        yPercent: 25,
        xPercent: -10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Floating animation for service cards
      gsap.to(".service-card", {
        y: -15,
        duration: 3,
        stagger: {
          each: 0.2,
          from: "random",
        },
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Track mouse position for interactive effects
  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative min-h-screen w-full max-w-[100vw] bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        
        {/* Ambient glow effects */}
        <div className="service-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="service-orb-2 absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="service-orb-3 absolute top-2/3 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        {particleData.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Heading */}
      <motion.div
        ref={headingRef}
        className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="inline-block mb-4 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 text-sm font-medium tracking-wider">OUR SERVICES</span>
        </motion.div>

        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 px-4">
          {["SOLUTIONS", "THAT", "DRIVE", "SUCCESS"].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{
                scale: 1.1,
                color: "#60a5fa",
                textShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                transition: { duration: 0.3 },
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Comprehensive digital solutions tailored to your business needs, powered by cutting-edge technology and creative excellence.
        </motion.p>

        {/* Animated underline */}
        <motion.div
          className="mx-auto mt-6 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {/* Services Carousel */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 overflow-hidden">
        <ServiceCarousel 
          services={services} 
          loop={true}
          autoplay={true}
          showNavigation={false}
          showPagination={true}
        />
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        className="relative z-10 mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="text-gray-400 text-lg mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Don&apos;t see what you&apos;re looking for?
        </motion.p>
        
        <motion.button
          className="group relative px-8 py-4 bg-linear-to-r from-gray-600 to-gray-500 text-black font-semibold rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a className="relative z-10 text-white" href="#contact">Let&apos;s Talk About Your Project</a>
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}

function ServiceCarousel({ services, loop = true, autoplay = false, showPagination = false, showNavigation = false }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const css = `
    .ServiceCarousel {
      padding-bottom: 60px !important;
      max-width: 100% !important;
    }
    
    .ServiceCarousel .swiper-pagination-bullet {
      background: rgba(44, 62, 80, 0.5);
      width: 10px;
      height: 10px;
      opacity: 0.5;
    }
    
    .ServiceCarousel .swiper-pagination-bullet-active {
      background: rgb(44, 62, 80);
      opacity: 1;
      width: 30px;
      border-radius: 5px;
    }
    
    .ServiceCarousel .swiper-button-next,
    .ServiceCarousel .swiper-button-prev {
      background: rgba(30, 41, 59, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(96, 165, 250, 0.3);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    
    .ServiceCarousel .swiper-button-next:hover,
    .ServiceCarousel .swiper-button-prev:hover {
      background: rgba(96, 165, 250, 0.2);
      border-color: rgba(96, 165, 250, 0.6);
      transform: scale(1.1);
    }

    @media (max-width: 639px) {
      .ServiceCarousel {
        width: 75vw !important;
        max-width: 340px !important;
        height: 500px !important;
        padding-bottom: 35px !important;
      }
      
      .ServiceCarousel .swiper-pagination-bullet {
        width: 6px !important;
        height: 6px !important;
      }
      
      .ServiceCarousel .swiper-pagination-bullet-active {
        width: 20px !important;
      }
    }

    @media (max-width: 475px) {
      .ServiceCarousel {
        width: 75vw !important;
        max-width: 250px !important;
        height: 400px !important;
      }
    }

    @media (max-width: 374px) {
      .ServiceCarousel {
        width: 75vw !important;
        max-width: 200px !important;
        height: 350px !important;
      }
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="relative w-full max-w-md"
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={40}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? { clickable: true }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="ServiceCarousel h-[350px] w-[75vw] max-w-[200px] xs:h-[400px] xs:max-w-[250px] sm:h-[500px] sm:max-w-[340px] md:h-[550px] md:max-w-[370px] lg:h-[600px] lg:max-w-[400px]"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id} className="rounded-3xl">
            <div
              className="service-card group relative h-full w-full"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, service.id)}
            >
              {/* Card container with glass effect */}
              <div className={`
                relative h-full w-full p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl
                bg-linear-to-br ${service.color}
                border-2 ${service.borderColor}
                ${service.shadowColor}
                transition-all duration-500 overflow-hidden
              `}>
                {/* Metallic shine overlay */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/20 via-transparent to-white/10 pointer-events-none"></div>
                
                {/* Animated metallic shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 55%, transparent 100%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                  }}
                />
                
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl ${service.glowColor} blur-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Spotlight effect */}
                {hoveredCard === service.id && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-40"
                    style={{
                      background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.25), transparent 40%)`,
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl xs:text-6xl sm:text-7xl mb-3 xs:mb-4 sm:mb-6"
                    animate={{
                      scale: hoveredCard === service.id ? [1, 1.2, 1] : 1,
                      rotate: hoveredCard === service.id ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 drop-shadow-lg transition-colors duration-300" style={{
                    textShadow: '0 2px 10px rgba(255,255,255,0.3)',
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 mb-3 xs:mb-4 sm:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base font-medium drop-shadow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 grow">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-xs xs:text-xs sm:text-sm text-gray-300 font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full mr-2 xs:mr-3 shrink-0 shadow-md"
                          animate={{
                            scale: hoveredCard === service.id ? [1, 1.5, 1] : 1,
                          }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    className="mt-3 xs:mt-4 sm:mt-6 pt-3 xs:pt-4 sm:pt-6 border-t border-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === service.id ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href="#"
                      className="group/link inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 font-semibold text-xs xs:text-sm sm:text-base"
                    >
                      <span className="font-bold">Learn More</span>
                      <motion.svg
                        className="w-3 h-3 xs:w-4 xs:h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          x: hoveredCard === service.id ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </a>
                  </motion.div>
                </div>

                {/* Decorative corner accents - metallic */}
                <div className="absolute top-0 left-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-white/40 rounded-tl-2xl sm:rounded-tl-3xl shadow-inner"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 border-white/40 rounded-br-2xl sm:rounded-br-3xl shadow-inner"></div>
                
                {/* Royal embellishments */}
                <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-white/50 rounded-full shadow-lg"></div>
                <div className="absolute bottom-2 left-2 xs:bottom-3 xs:left-3 sm:bottom-4 sm:left-4 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-white/50 rounded-full shadow-lg"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-blue-400" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
}
