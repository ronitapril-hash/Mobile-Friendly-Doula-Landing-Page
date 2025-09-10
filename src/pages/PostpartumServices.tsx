import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import { Helmet } from 'react-helmet-async';
const PostpartumServices = () => {
  return <>
      <Helmet>
        <title>Postpartum Doula Services | Ronit April Varga | Vancouver</title>
        <meta name="description" content="Professional postpartum doula support in Vancouver. Nurturing care for new parents, breastfeeding support, and newborn care guidance." />
        <meta name="keywords" content="postpartum doula, newborn care, breastfeeding support, vancouver postpartum, new parent support" />
      </Helmet>
      <Header />
      <main className="w-full bg-[#faf7f2]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] bg-[#faf7f2] flex items-center px-6 md:px-12 lg:px-20">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
            <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Postpartum doula supporting new parents with their newborn" className="w-full h-full object-cover opacity-35 object-center" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c49a84] leading-tight mb-6">
              Postpartum Services
            </h1>
            <p className="text-lg md:text-xl text-[#8a7a70] mb-8 max-w-2xl">
              Nurturing support for new families during the precious and
              challenging fourth trimester.
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
              Postpartum Support Services
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Newborn Care Guidance
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  I offer gentle guidance and hands-on education for all aspects
                  of newborn care, including bathing, diapering, soothing
                  techniques, and understanding your baby's cues and
                  developmental needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Breastfeeding & Feeding Support
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  As a trained breastfeeding supporter, I provide assistance
                  with latch techniques, positioning, pumping guidance, and
                  bottle feeding support. For complex breastfeeding challenges,
                  I can refer you to specialized lactation consultants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Household Organization
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  I help maintain a peaceful environment by assisting with light
                  housekeeping, meal preparation, baby laundry, and organizing
                  your space to make caring for your newborn more manageable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Physical & Emotional Recovery
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  I provide support for your physical healing after childbirth,
                  emotional processing of your birth experience, and recognition
                  of postpartum mood concerns. I create space for rest and
                  self-care during this intense transition.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#c49a84] mb-4">
                  Sibling Adjustment
                </h3>
                <p className="text-[#8a7a70] mb-4">
                  For families with older children, I offer guidance on helping
                  siblings adjust to their new role and maintain connection with
                  parents during this transition.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-serif text-[#c49a84] mb-8">
                Postpartum Support Options:
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Daytime Support
                  </h3>
                  <p className="text-[#8a7a70]">
                    4-8 hour shifts providing hands-on support, education, and
                    care while you rest, shower, or spend time with older
                    children.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Overnight Support
                  </h3>
                  <p className="text-[#8a7a70]">
                    8-10 hour overnight shifts caring for baby between feedings
                    so you can get restorative sleep.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-sm border border-[#f0e6e0]">
                  <h3 className="text-xl font-serif text-[#c49a84] mb-2">
                    Postpartum Planning Session
                  </h3>
                  <p className="text-[#8a7a70]">
                    A prenatal session focused on preparing for the postpartum
                    period, creating a family care plan, and setting up support
                    systems.
                  </p>
                </div>
              </div>
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
export default PostpartumServices;