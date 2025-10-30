import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlowOfWork from '@/components/FlowOfWork';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FlowOfWork />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
