
import React from 'react';

const Tips = () => {
  return (
    <div className="min-h-screen bg-[#f0e4d3] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold text-[#7a5127] text-center mb-6 tracking-tight">
          Beauty Tips
        </h1>
        <p className="text-[#7a5127] text-center mb-10 text-lg font-medium max-w-2xl mx-auto">
          Discover expert tips to enhance your beauty routine.
        </p>
        <div className="text-center bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#c9b299] mb-4">Top 3 Beauty Tips</h2>
          <p className="text-black">
            1. <span className="font-semibold">Stay Hydrated:</span> Drink plenty of water for glowing skin.<br />
            2. <span className="font-semibold">Remove Makeup:</span> Always remove makeup before bed.<br />
            3. <span className="font-semibold">Exfoliate:</span> Exfoliate weekly to remove dead skin cells.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;