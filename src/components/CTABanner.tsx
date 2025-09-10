import React from 'react';
const CTABanner = () => {
  return <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#e6d7d0] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-[#8a7a70] mb-6">
          Let's talk about your birth plan. Book a free consultation today.
        </h2>
        <a href="#contact" className="inline-block bg-[#c49a84] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
          Book a Free Consultation
        </a>
      </div>
    </section>;
};
export default CTABanner;