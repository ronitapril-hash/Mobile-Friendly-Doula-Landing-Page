import React from 'react';
const ContactForm = () => {
  return <div className="bg-white p-8 rounded shadow-sm border border-[#f0e6e0]">
      <h3 className="text-xl font-serif text-[#c49a84] mb-6">Get in Touch</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm text-[#8a7a70] mb-1">
              First Name
            </label>
            <input type="text" id="firstName" className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]" required />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-[#8a7a70] mb-1">
              Last Name
            </label>
            <input type="text" id="lastName" className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]" required />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-[#8a7a70] mb-1">
            Email
          </label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-[#8a7a70] mb-1">
            Phone Number
          </label>
          <input type="tel" id="phone" className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]" />
        </div>
        <div>
          <label htmlFor="dueDate" className="block text-sm text-[#8a7a70] mb-1">
            Estimated Due Date
          </label>
          <input type="date" id="dueDate" className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm text-[#8a7a70] mb-1">
            Service Interested In
          </label>
          <select id="service" className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]">
            <option value="">Select a service</option>
            <option value="prenatal">Prenatal Visits</option>
            <option value="birth">Labor & Birth Support</option>
            <option value="postpartum">Postpartum Doula Care</option>
            <option value="package">Full Support Package</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-[#8a7a70] mb-1">
            Message
          </label>
          <textarea id="message" rows={5} className="w-full px-4 py-2 border border-[#e6d7d0] focus:outline-none focus:ring-2 focus:ring-[#c49a84]"></textarea>
        </div>
        <button type="submit" className="w-full bg-[#c49a84] text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#b38a74] transition-colors duration-300">
          Send Message
        </button>
      </form>
    </div>;
};
export default ContactForm;