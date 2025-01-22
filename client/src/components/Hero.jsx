import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/hero.jpg')", // Ensure the image is in the public folder
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-[#eae6e8] text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Our Abaya Shop</h1>
          <p className="mb-5">
            Discover elegant and timeless abayas made with the finest fabrics. 
            Whether you're looking for something traditional or modern, we have 
            a collection that suits every style and occasion.
          </p>
          <button className="btn bg-[#642b3a] text-[#eae6e8] hover:bg-[#763446]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
