import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { Helmet } from 'react-helmet-async';
const PrenatalMassage = () => {
  return <>
      <Helmet>
        <title>Prenatal Massage Services | Ronit April Varga | Vancouver</title>
        <meta name="description" content="Specialized prenatal massage therapy in Vancouver. Safe, therapeutic massage for pregnancy discomfort, stress relief, and improved sleep." />
        <meta name="keywords" content="prenatal massage, pregnancy massage, vancouver massage, pregnancy pain relief, doula massage" />
      </Helmet>
      <Header />
      <main className="w-full bg-[#faf7f2]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] bg-[#faf7f2] flex items-center px-6 md:px-12 lg:px-20">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Prenatal massage therapy session" className="w-full h-full object-cover opacity-35 object-center" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c49a84] leading-tight mb-6">
              Prenatal Massage Services
            </h1>
            <p className="text-lg md:text-xl text-[#8a7a70] mb-8 max-w-2xl">
              Specialized therapeutic massage designed specifically for the
              unique needs of pregnant bodies.
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
              The Benefits of Prenatal Massage
            </h2>
            <p className="text-[#8a7a70] mb-8">
              Prenatal massage therapy is specifically tailored to the needs of
              pregnant women and their changing bodies. As a certified prenatal
              massage therapist and doula, I combine anatomical knowledge with a
              deep understanding of pregnancy to provide safe, effective
              treatments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Physical Benefits
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#8a7a70]">
                  <li>Reduces back, hip, and joint pain</li>
                  <li>Decreases swelling in hands and feet</li>
                  <li>Relieves muscle tension and headaches</li>
                  <li>Improves circulation</li>
                  <li>Reduces sciatic nerve pain</li>
                  <li>Improves sleep quality</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Emotional Benefits
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#8a7a70]">
                  <li>Reduces stress hormones</li>
                  <li>Decreases anxiety and depression</li>
                  <li>Improves mood and outlook</li>
                  <li>Promotes relaxation and mindfulness</li>
                  <li>Creates space for connecting with your baby</li>
                  <li>Provides nurturing touch and care</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
                My Prenatal Massage Approach
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                    Safety First
                  </h3>
                  <p className="text-[#8a7a70] mb-4">
                    All sessions use pregnancy-safe positioning with specialized
                    cushions and bolsters to ensure comfort and proper support.
                    I'm trained in the specific precautions and modifications
                    needed during each trimester.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                    Customized Treatment
                  </h3>
                  <p className="text-[#8a7a70] mb-4">
                    Each massage is tailored to your specific needs and
                    concerns. Whether you're experiencing lower back pain, round
                    ligament discomfort, or just need relaxation, the session
                    will address your unique situation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                    Integrated Care
                  </h3>
                  <p className="text-[#8a7a70] mb-4">
                    As both a doula and massage therapist, I bring comprehensive
                    knowledge about pregnancy and birth to each session. I can
                    provide self-care techniques, partner massage instruction,
                    and positioning suggestions to use at home.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
                Prenatal Massage Services & Packages
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Single Session
                  </h3>
                  <p className="text-[#8a7a70]">
                    60 or 90-minute therapeutic prenatal massage session in my
                    Vancouver studio or as a home visit.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Trimester Package
                  </h3>
                  <p className="text-[#8a7a70]">
                    A series of 3 massage sessions at a reduced rate, ideal for
                    addressing the changing needs throughout a trimester.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Doula Client Special
                  </h3>
                  <p className="text-[#8a7a70]">
                    Discounted massage sessions for clients who have booked
                    birth or postpartum doula services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Partner Massage Instruction
                  </h3>
                  <p className="text-[#8a7a70]">
                    A 90-minute session teaching your partner safe and effective
                    massage techniques to use at home.
                  </p>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <a href="#contact" className="inline-block bg-[#c49a84] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
                  Book a Prenatal Massage
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
export default PrenatalMassage;