import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { Helmet } from 'react-helmet-async';
const SpinningBabies = () => {
  return <>
      <Helmet>
        <title>Spinning Babies® | Ronit April Varga | Vancouver Doula</title>
        <meta name="description" content="Certified Spinning Babies® techniques in Vancouver. Optimize your baby's position for an easier birth through specialized movements and positions." />
        <meta name="keywords" content="spinning babies, optimal fetal positioning, vancouver doula, breech baby, fetal alignment" />
      </Helmet>
      <Header />
      <main className="w-full bg-[#faf7f2]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] bg-[#faf7f2] flex items-center px-6 md:px-12 lg:px-20">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <img src="https://images.unsplash.com/photo-1607244142538-2970a97c0aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Pregnant woman practicing Spinning Babies positions" className="w-full h-full object-cover opacity-35 object-center" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c49a84] leading-tight mb-6">
              Spinning Babies®
            </h1>
            <p className="text-lg md:text-xl text-[#8a7a70] mb-8 max-w-2xl">
              Evidence-based techniques to optimize your baby's position for an
              easier, more comfortable birth.
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
              About Spinning Babies®
            </h2>
            <p className="text-[#8a7a70] mb-6">
              Spinning Babies® is an approach to optimize the physical
              relationship between the baby and the mother's body. These
              techniques help babies find the optimal position for birth, which
              can lead to easier and more comfortable deliveries.
            </p>
            <p className="text-[#8a7a70] mb-8">
              As a certified Spinning Babies® practitioner, I offer specialized
              knowledge to help address and potentially resolve positional
              challenges that can lead to longer, more difficult labors.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Benefits of Spinning Babies® Techniques
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-[#8a7a70]">
                  <li>May help turn breech or posterior positioned babies</li>
                  <li>Can reduce discomfort during pregnancy</li>
                  <li>May shorten labor time and reduce interventions</li>
                  <li>
                    Helps create more space in the pelvis for baby's descent
                  </li>
                  <li>Empowers parents with proactive techniques for labor</li>
                  <li>
                    Can be beneficial even when baby is already in a good
                    position
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  When Spinning Babies® Can Help
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  These techniques are particularly helpful for:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#8a7a70]">
                  <li>Breech or transverse positioned babies</li>
                  <li>Posterior positioned babies (sunny-side up)</li>
                  <li>Stalled or prolonged labor</li>
                  <li>Back pain during pregnancy</li>
                  <li>Preparing for VBAC (Vaginal Birth After Cesarean)</li>
                  <li>General pregnancy discomfort</li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
                Spinning Babies® Services Offered
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Private Spinning Babies® Session
                  </h3>
                  <p className="text-[#8a7a70]">
                    A 90-minute personalized session where I'll assess your
                    specific situation and teach you the most appropriate
                    techniques for your pregnancy. Includes follow-up support
                    via email.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Spinning Babies® Integration with Doula Services
                  </h3>
                  <p className="text-[#8a7a70]">
                    Spinning Babies® techniques are incorporated into my
                    standard birth doula services at no additional cost, both
                    prenatally and during labor as appropriate.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Partner Workshop
                  </h3>
                  <p className="text-[#8a7a70]">
                    A 2-hour session teaching your partner how to assist with
                    Spinning Babies® techniques at home and during labor.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-[#8a7a70] italic">
                <strong>Note:</strong> Spinning Babies® is a registered
                trademark. As a certified practitioner, I follow their
                established protocols and techniques.
              </p>
              <div className="mt-12 flex justify-center">
                <a href="#contact" className="inline-block bg-[#c49a84] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
                  Book a Spinning Babies® Consultation
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
export default SpinningBabies;