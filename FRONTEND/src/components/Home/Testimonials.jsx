// TestimonialsSection.js
import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import buisnessman1 from '../../assets/Buisnessman1.jpeg'
import buisnessman2 from '../../assets/Buisnessman2.jpeg'
import buisnessman3 from '../../assets/Buisnessman3.jpg'



const testimonials = [
  {
    id: 1,
    name: 'William Martinez',
    position: 'Marketing Director at Bright Solutions',
    testimonial: 'AdvisioScreens has transformed how we manage our ad campaigns. The intuitive interface and real-time analytics have made it easier than ever to track and optimize our ad performance. It\'s a game-changer for our marketing strategy!',
    image: buisnessman1 // Replace with actual image path
  },
  {
    id: 2,
    name: 'Noah Linwood',
    position: 'Co-Founder of EcoTech Innovations',
    testimonial: 'As a startup, we need to make the most of our advertising budget. AdvisioScreens has been instrumental in helping us target our audience effectively and efficiently. The results have been phenomenal, with a significant increase in engagement and ROI.',
    image: buisnessman2 // Replace with actual image path
  },
  {
    id: 3,
    name: 'Antama Johnson',
    position: 'Digital Marketing Manager at Retail Giant',
    testimonial: 'Managing ads across multiple platforms used to be a challenge. With AdvisioScreens, it\'s a breeze. The platform\'s ability to integrate seamlessly with various networks has saved us time and improved our campaign results substantially.',
    image: buisnessman3 // Replace with actual image path
  },
  // ... any additional testimonials
];
const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((current) => (current === 0 ? totalTestimonials - 1 : current - 1));
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">What Our Customers Say</h2>
        <div className="flex justify-center items-center">
          <FaArrowLeft className="cursor-pointer text-indigo-600 w-8 h-8 mr-4 hover:text-indigo-700 transition-colors duration-300" onClick={prevTestimonial} />
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <FaQuoteLeft className="text-indigo-600 w-12 h-12 mb-4" />
            <p className="text-gray-600 text-lg italic mb-6">{testimonials[activeTestimonial].testimonial}</p>
            <div className="flex items-center">
              <img className="w-16 h-16 rounded-full mr-6" src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} />
              <div>
                <p className="text-gray-900 text-xl font-semibold">{testimonials[activeTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[activeTestimonial].position}</p>
              </div>
            </div>
          </div>
          <FaArrowRight className="cursor-pointer text-indigo-600 w-8 h-8 ml-4 hover:text-indigo-700 transition-colors duration-300" onClick={nextTestimonial} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;