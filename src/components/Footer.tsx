import React from 'react';
import ContactForm from './ContactForm';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer id="contact" className="bg-[#f7f2f0] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#c49a84] mb-12 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-serif text-[#c49a84] mb-6">
              Ronit April Varga
            </h3>
            <p className="text-[#8a7a70] mb-8">
              Birth & Postpartum Doula serving families in Vancouver and
              surrounding areas.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <PhoneIcon size={20} className="text-[#c49a84] mr-4 mt-1" />
                <p className="text-[#8a7a70]">(604) 123-4567</p>
              </div>
              <div className="flex items-start">
                <MailIcon size={20} className="text-[#c49a84] mr-4 mt-1" />
                <p className="text-[#8a7a70]">hello@ronitaprilv.com</p>
              </div>
              <div className="flex items-start">
                <MapPinIcon size={20} className="text-[#c49a84] mr-4 mt-1" />
                <p className="text-[#8a7a70]">Vancouver, BC</p>
              </div>
            </div>
            <div className="pt-6 border-t border-[#e6d7d0]">
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm">
                      {item}
                    </a>)}
              </nav>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="mt-16 pt-6 border-t border-[#e6d7d0] text-center">
          <p className="text-sm text-[#8a7a70]">
            &copy; {new Date().getFullYear()} Ronit April Varga. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;