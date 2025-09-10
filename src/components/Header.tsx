import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesMenu from './ServicesMenu';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-[#faf7f2] py-4 px-6 md:px-12 lg:px-20 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-[#c49a84] font-serif">
            <h1 className="text-2xl md:text-3xl font-light">
              Ronit April Varga
            </h1>
            <p className="text-xs md:text-sm tracking-wider">
              BIRTH & POSTPARTUM DOULA
            </p>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider">
            Home
          </Link>
          <ServicesMenu />
          <Link to="/#about" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider">
            About
          </Link>
          <Link to="/#testimonials" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider">
            Testimonials
          </Link>
          <Link to="/#contact" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider">
            Contact
          </Link>
          <Link to="/#contact" className="bg-[#c49a84] text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
            Book a Consultation
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#8a7a70]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
          <Link to="/" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <button className="text-left text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider flex items-center">
            Services
          </button>
          <ServicesMenu mobile={true} closeMenu={() => setIsMenuOpen(false)} />
          <Link to="/#about" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/#testimonials" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </Link>
          <Link to="/#contact" className="text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/#contact" className="bg-[#c49a84] text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300 inline-block text-center" onClick={() => setIsMenuOpen(false)}>
            Book a Consultation
          </Link>
        </nav>}
    </header>;
};
export default Header;