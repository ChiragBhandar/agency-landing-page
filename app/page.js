import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

// Dynamically import components below the fold with loading states
// This significantly reduces initial bundle size and improves FCP/LCP
const About = dynamic(() => import('@/components/About'), {
  loading: () => <LoadingSpinner />,
  ssr: true, // Still SSR for SEO
});

const FlowOfWork = dynamic(() => import('@/components/FlowOfWork'), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* Above the fold - loaded immediately */}
      <Navbar />
      <Hero />
      
      {/* Below the fold - lazy loaded for better performance */}
      <About />
      <FlowOfWork />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
