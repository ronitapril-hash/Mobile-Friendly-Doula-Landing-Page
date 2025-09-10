import React from 'react';
const Hero = () => {
  return <section id="home" className="relative w-full min-h-[90vh] bg-[#faf7f2] flex items-center px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <img src="/doula-baby-image-hero.jpg" alt="Birth doula holding a baby" className="w-full h-full object-cover opacity-35 object-top" />
      </div>
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c49a84] leading-tight mb-6">
          Empowering Birth.
          <br />
          Nurturing Postpartum.
        </h2>
        <p className="text-lg md:text-xl text-[#8a7a70] mb-8 max-w-2xl">
          Professional doula support for your pregnancy, birth, and postpartum
          journey in Vancouver.
        </p>
        <a href="#contact" className="inline-block bg-[#c49a84] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
          Book a Free Consultation
        </a>
      </div>
    </section>;
};
export default Hero;