import React, { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServicesMenu = ({
  mobile = false,
  closeMenu = null
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleServiceClick = () => {
    if (mobile && closeMenu) {
      closeMenu();
    }
    setIsOpen(false);
  };
  if (mobile) {
    return <div className="space-y-4 pl-4 mt-2">
        <Link to="/birth-doula" className="block text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={handleServiceClick}>
          Birth Doula Services
        </Link>
        <Link to="/postpartum" className="block text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={handleServiceClick}>
          Postpartum Services
        </Link>
        <Link to="/spinning-babies" className="block text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={handleServiceClick}>
          Spinning Babies®
        </Link>
        <Link to="/prenatal-massage" className="block text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={handleServiceClick}>
          Prenatal Massage Services
        </Link>
      </div>;
  }
  return <div className="relative" ref={menuRef}>
      <button className="flex items-center text-[#8a7a70] hover:text-[#c49a84] transition-colors duration-300 text-sm uppercase tracking-wider" onClick={() => setIsOpen(!isOpen)}>
        Services <ChevronDownIcon size={16} className="ml-1" />
      </button>
      {isOpen && <div className="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-sm z-50">
          <div className="py-2">
            <Link to="/birth-doula" className="block px-4 py-2 text-[#8a7a70] hover:bg-[#f7f2f0] hover:text-[#c49a84] transition-colors duration-300 text-sm" onClick={handleServiceClick}>
              Birth Doula Services
            </Link>
            <Link to="/postpartum" className="block px-4 py-2 text-[#8a7a70] hover:bg-[#f7f2f0] hover:text-[#c49a84] transition-colors duration-300 text-sm" onClick={handleServiceClick}>
              Postpartum Services
            </Link>
            <Link to="/spinning-babies" className="block px-4 py-2 text-[#8a7a70] hover:bg-[#f7f2f0] hover:text-[#c49a84] transition-colors duration-300 text-sm" onClick={handleServiceClick}>
              Spinning Babies®
            </Link>
            <Link to="/prenatal-massage" className="block px-4 py-2 text-[#8a7a70] hover:bg-[#f7f2f0] hover:text-[#c49a84] transition-colors duration-300 text-sm" onClick={handleServiceClick}>
              Prenatal Massage Services
            </Link>
          </div>
        </div>}
    </div>;
};
export default ServicesMenu;