import React from 'react';
import { PrenatalIcon, BirthIcon, PostpartumIcon } from '../utils/icons';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}
const ServiceCard = ({
  title,
  description,
  icon,
  link
}: ServiceCardProps) => {
  return <div className="bg-white p-8 rounded shadow-sm border border-[#f0e6e0] flex flex-col items-center text-center">
      <div className="text-[#c49a84] mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-[#8a7a70] mb-3">{title}</h3>
      <p className="text-[#8a7a70] mb-6">{description}</p>
      <Link to={link} className="text-[#c49a84] hover:text-[#b38a74] transition-colors duration-300 text-sm uppercase tracking-wider mt-auto">
        Learn More →
      </Link>
    </div>;
};
const SpinningBabiesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8a2 2 0 1 0 4 0 4 4 0 0 1-8 0 6 6 0 0 0 12 0" />
    <path d="M12 16a2 2 0 1 1-4 0 4 4 0 0 0 8 0 6 6 0 0 1-12 0" />
  </svg>;
const Services = () => {
  const services = [{
    title: 'Birth Doula Services',
    description: 'Continuous physical and emotional support throughout your labor and delivery, with advocacy and communication assistance.',
    icon: <BirthIcon />,
    link: '/birth-doula'
  }, {
    title: 'Postpartum Services',
    description: 'Nurturing care for new parents, including breastfeeding support, newborn care guidance, and emotional support during recovery.',
    icon: <PostpartumIcon />,
    link: '/postpartum'
  }, {
    title: 'Spinning Babies®',
    description: 'Evidence-based techniques to optimize your baby’s position for an easier birth through specialized movements and positions.',
    icon: <SpinningBabiesIcon />,
    link: '/spinning-babies'
  }, {
    title: 'Prenatal Massage Services',
    description: 'Specialized therapeutic massage designed specifically for the unique needs of pregnant bodies to reduce discomfort and promote relaxation.',
    icon: <PrenatalIcon />,
    link: '/prenatal-massage'
  }];
  return <section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#c49a84] mb-12 text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} />)}
        </div>
      </div>
    </section>;
};
export default Services;