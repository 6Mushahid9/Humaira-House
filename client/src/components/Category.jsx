import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Abaya',
    image: '/abaya.jpg'
  },
  {
    id: 2,
    name: 'Hijab',
    image: '/hijab.jpg'
  },
  {
    id: 3,
    name: 'Accessories',
    image: '/accessories.jpg'
  },
  {
    id: 4,
    name: 'Gift',
    image: '/gift.jpg'
  }
];

const Category = () => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 my-16 ">
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

      {/* Categories Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div 
            key={category.id}
            className="flex-none snap-center"
          >
            <div className="w-[280px] sm:w-[320px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-[#642b3a]">
                <h3 className="text-lg font-semibold text-white text-center">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;