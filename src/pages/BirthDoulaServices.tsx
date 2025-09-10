import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { Helmet } from 'react-helmet-async';
const BirthDoulaServices = () => {
  return <>
      <Helmet>
        <title>Birth Doula Services | Ronit April Varga | Vancouver</title>
        <meta name="description" content="Professional birth doula services in Vancouver. Continuous labor support, advocacy, and guidance for a positive birth experience." />
        <meta name="keywords" content="birth doula, vancouver doula, labor support, birth support, childbirth advocate" />
      </Helmet>
      <Header />
      <main className="w-full bg-[#faf7f2]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] bg-[#faf7f2] flex items-center px-6 md:px-12 lg:px-20">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <img src="https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Birth doula supporting a laboring mother" className="w-full h-full object-cover opacity-35 object-center" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c49a84] leading-tight mb-6">
              Birth Doula Services
            </h1>
            <p className="text-lg md:text-xl text-[#8a7a70] mb-8 max-w-2xl">
              Continuous emotional, physical, and informational support
              throughout your labor and birth journey.
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
              How I Support You During Birth
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Continuous Labor Support
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  As your birth doula, I provide uninterrupted support
                  throughout your entire labor and delivery. I'll be by your
                  side from early labor at home until the first hours after
                  birth, offering comfort measures, encouragement, and guidance
                  every step of the way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Physical Comfort Techniques
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  I use a variety of evidence-based comfort measures including
                  positioning suggestions, counter-pressure, massage, breathing
                  techniques, and relaxation guidance to help manage pain and
                  promote labor progress.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Birth Advocacy & Communication
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  I help you communicate effectively with your healthcare team,
                  ensuring your questions are answered and your preferences are
                  respected. I support informed decision-making while respecting
                  the expertise of your medical providers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Partner Support
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  I work alongside your partner or support person, showing them
                  how to best support you and giving them opportunities to rest
                  when needed. My presence enhances rather than replaces your
                  chosen birth partner's involvement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Birth Photography (Optional)
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  If desired, I can capture candid, meaningful moments of your
                  birth journey with simple, tasteful photos using your camera
                  or phone. This service is included at no additional cost.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
                Birth Doula Package Includes:
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-[#8a7a70]">
                <li>Initial consultation (free)</li>
                <li>
                  Two prenatal visits to discuss your birth preferences and
                  prepare for labor
                </li>
                <li>24/7 on-call availability from 38 weeks until birth</li>
                <li>Continuous support throughout active labor and delivery</li>
                <li>Immediate postpartum support (2-3 hours after birth)</li>
                <li>One postpartum follow-up visit</li>
                <li>Phone and email support throughout the entire process</li>
                <li>Access to my lending library of birth resources</li>
              </ul>
              <div className="mt-12 flex justify-center">
                <a href="#contact" className="inline-block bg-[#c49a84] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>;
};
export default BirthDoulaServices;