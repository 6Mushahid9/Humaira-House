import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/hero.jpg')", 
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-[#eae6e8] text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl ">HUMAIRA HOUSE</h1>
          <p className="mb-5">
          Explore our collection of elegant, modest clothing, including abayas, hijabs, and accessories, designed for every style and occasion.
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
