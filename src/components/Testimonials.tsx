import React from 'react';
const TestimonialCard = ({
  quote,
  author
}) => {
  return <div className="bg-white p-8 rounded shadow-sm border border-[#f0e6e0]">
      <p className="text-[#8a7a70] italic mb-4">{quote}</p>
      <p className="text-[#c49a84] font-medium">— {author}</p>
    </div>;
};
const Testimonials = () => {
  const testimonials = [{
    quote: "Ronit's support during my birth was invaluable. She knew exactly what I needed before I even asked. Her calm presence made all the difference in my birthing experience.",
    author: 'Sarah M.'
  }, {
    quote: "I couldn't have navigated those first weeks as a new mom without Ronit's postpartum support. She provided practical help and emotional guidance when I needed it most.",
    author: 'Emily L.'
  }, {
    quote: 'Having Ronit as our doula gave us confidence going into the birth of our first child. Her knowledge and advocacy helped us have the birth experience we wanted.',
    author: 'James and Tara K.'
  }];
  return <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-20 bg-[#f7f2f0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#c49a84] mb-12 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />)}
        </div>
      </div>
    </section>;
};
export default Testimonials;