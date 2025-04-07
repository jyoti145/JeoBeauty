
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f0e4d3] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold text-[#7a5127] text-center mb-6 tracking-tight">
          Welcome to Joe Beauty
        </h1>
        <p className="text-[#7a5127] text-center mb-10 text-lg font-medium max-w-2xl mx-auto">
          Discover the best in beauty with Joe Beauty. From luxurious skincare to stunning makeup, we have it all!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-[#c9b299]">Skincare</h2>
            <p className="mt-2 text-black">Explore our range of nourishing skincare products.</p>
            <button className="mt-4 text-[#c9b299] hover:underline">Shop Now</button>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-[#c9b299]">Makeup</h2>
            <p className="mt-2 text-black">Find the perfect makeup for every occasion.</p>
            <button className="mt-4 text-[#c9b299] hover:underline">Shop Now</button>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-[#c9b299]">Tips</h2>
            <p className="mt-2 text-black">Get expert beauty tips and tricks.</p>
            <button className="mt-4 text-[#c9b299] hover:underline">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;