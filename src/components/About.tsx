import React from 'react';
const About = () => {
  return <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#c49a84] mb-12 text-center">
          About
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-[#f0e6e0]">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Ronit April Varga" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif text-[#c49a84] mb-4">
              Hi, I'm Ronit April Varga
            </h3>
            <p className="text-[#8a7a70] mb-6">
              I'm a certified Birth and Postpartum Doula with years of
              experience supporting families in Vancouver. My passion is
              empowering parents through education, advocacy, and compassionate
              care during the transformative journey of pregnancy, birth, and
              early parenthood.
            </p>
            <p className="text-[#8a7a70] mb-6">
              With specialized training in both birth and postpartum support, I
              provide personalized care that honors your unique needs and
              preferences. I believe every family deserves a nurturing, positive
              birth experience and a supported transition into parenthood.
            </p>
            <a href="#contact" className="inline-block bg-[#c49a84] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;