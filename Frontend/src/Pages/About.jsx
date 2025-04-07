
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f0e4d3] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold text-[#7a5127] text-center mb-6 tracking-tight">
          About Joe Beauty
        </h1>
        <p className="text-[#7a5127] text-center mb-10 text-lg font-medium max-w-2xl mx-auto">
          At Joe Beauty, we believe in enhancing your natural beauty with high-quality products. Our mission is to empower you with the best skincare and makeup solutions.
        </p>
        <div className="text-center bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#c9b299] mb-4">Our Story</h2>
          <p className="text-black ">
            Founded in 2025, Joe Beauty started with a vision to make beauty accessible to everyone. We source the finest ingredients to create products that you’ll love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;