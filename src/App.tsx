import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[#faf7f2]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </div>;
}