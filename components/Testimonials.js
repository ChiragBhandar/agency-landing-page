"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, Star, Quote } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their strategic approach and creative solutions exceeded all our expectations. Highly recommend!",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "The team's attention to detail and commitment to excellence is unmatched. They delivered our project on time and the results have been phenomenal.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Studios",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "Exceptional service from start to finish. They understood our vision perfectly and brought it to life in ways we never imagined possible.",
    },
    {
      name: "David Thompson",
      role: "CTO, InnovateTech",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "A truly professional team that delivers results. Our website traffic increased by 300% within the first month. Outstanding work!",
    },
    {
      name: "Jessica Williams",
      role: "Brand Manager, LuxeStyle",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Their creative vision and technical expertise are second to none. They've become an invaluable partner in our growth journey.",
    },
    {
      name: "Robert Martinez",
      role: "VP of Sales, ScaleUp",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      text: "The ROI we've seen from their work has been incredible. They don't just deliver a service, they deliver measurable business results.",
    },
  ];

  return (
    <section
      id="testimonial"
      ref={sectionRef}
      className="relative min-h-screen w-full max-w-[100vw] bg-black py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full max-w-[100vw] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#34495E] rounded-full blur-[120px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#4A5F7F] rounded-full blur-[120px] opacity-30"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.div
            ref={headingRef}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              Client Testimonials
            </span>
          </motion.div>

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-4"
          >
            What Our{" "}
            <span className="bg-linear-to-r from-[#5DADE2] via-[#3498DB] to-[#2E86C1] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4"
          >
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped transform.
          </p>
        </div>

        {/* Carousel */}
        <TestimonialCarousel testimonials={testimonials} />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-4"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "250+", label: "Projects Completed" },
            { value: "50+", label: "Industry Awards" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-[#5DADE2] to-[#2E86C1] bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const TestimonialCarousel = ({ testimonials }) => {
  const css = `
  .Testimonial_Carousel {
    width: 100%;
    height: auto;
    min-height: 400px;
    padding-bottom: 60px !important;
  }
  
  .Testimonial_Carousel .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    height: auto;
    min-height: 350px;
  }

  @media (min-width: 640px) {
    .Testimonial_Carousel {
      min-height: 450px;
      padding-bottom: 70px !important;
    }
    .Testimonial_Carousel .swiper-slide {
      width: 320px;
      min-height: 380px;
    }
  }

  @media (min-width: 768px) {
    .Testimonial_Carousel {
      min-height: 500px;
      padding-bottom: 80px !important;
    }
    .Testimonial_Carousel .swiper-slide {
      width: 400px;
      min-height: 450px;
    }
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.5 !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    background: linear-gradient(135deg, #5DADE2 0%, #2E86C1 100%) !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff !important;
  }

  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }

  @media (max-width: 520px) {
    .Testimonial_Carousel {
      min-height: 320px !important;
      padding-bottom: 40px !important;
    }
    .Testimonial_Carousel .swiper-slide {
      width: 240px !important;
      min-height: 280px !important;
    }
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.3,
      }}
      className="relative w-full max-w-[calc(100vw-32px)] mx-auto px-2 sm:px-4 md:px-5"
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={30}
        effect="coverflow"
        grabCursor={true}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="Testimonial_Carousel"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next after:hidden">
          <ChevronRightIcon className="h-8 w-8 text-white drop-shadow-lg" />
        </div>
        <div className="swiper-button-prev after:hidden">
          <ChevronLeftIcon className="h-8 w-8 text-white drop-shadow-lg" />
        </div>
      </Swiper>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full w-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden relative group"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#34495E]/20 via-transparent to-[#5DADE2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-20 h-20 text-white" />
      </div>

      <div className="relative z-10">
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="relative z-10 flex items-center gap-4 mt-auto">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#5DADE2] to-[#2E86C1] rounded-full blur-md opacity-50"></div>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={56}
            height={56}
            className="relative w-14 h-14 rounded-full object-cover object-center border-2 border-white/30"
          />
        </motion.div>
        <div>
          <h4 className="text-white font-semibold text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#5DADE2] via-[#3498DB] to-[#2E86C1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  );
};
