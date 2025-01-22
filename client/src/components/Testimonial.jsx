import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Star rating component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <span
        key={i}
        className={`text-yellow-400 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

const testimonials = [
  {
    id: 1,
    name: 'Aisha Al-Farsi',
    role: 'Fashion Blogger',
    content: "The designs are elegant and perfect for any occasion. I love how they make me feel confident and stylish!",
    rating: 5
  },
  {
    id: 2,
    name: 'Layla Mohammed',
    role: 'Abaya Designer',
    content: "The fabric quality is exceptional. I’ve never seen such attention to detail and craftsmanship in an abaya!",
    rating: 4
  },
  {
    id: 3,
    name: 'Fatimah Al-Saud',
    role: 'Social Media Influencer',
    content: "These abayas are not only beautiful but also incredibly comfortable. I wear them for all my events and feel amazing every time!",
    rating: 5
  },
  {
    id: 4,
    name: 'Nadia Ibrahim',
    role: 'Fashion Enthusiast',
    content: "I’ve never felt so empowered wearing an abaya. The collection here is stylish, modest, and so versatile.",
    rating: 3
  },
  {
    id: 5,
    name: 'Zainab Khalid',
    role: 'Hijab Stylist',
    content: "As a hijab stylist, I highly recommend these abayas. The way they drape and fit is perfect for every woman!",
    rating: 5
  },
];

const Testimonial = () => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 my-16">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors hidden md:block"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors hidden md:block"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Testimonials Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-none snap-center"
          >
            <div className="flex flex-col justify-center items-center p-4 bg-[#642b3a] w-[280px] h-[320px] sm:w-[320px] sm:h-[320px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Circular Frame with Initials */}
              <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-[#642b3a]">
                  {testimonial.name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
              
              {/* Testimonial Content */}
              <h3 className="text-lg font-semibold text-white text-center">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-300 text-center">{testimonial.role}</p>
              <p className="text-[#eae6e8] text-center mt-2">{testimonial.content}</p>
              
              {/* Star Rating */}
              <div className="mt-4 text-center">
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
