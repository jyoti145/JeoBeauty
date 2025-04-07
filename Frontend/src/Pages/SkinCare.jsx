
import React from 'react';

const SkinCare = () => {
  return (
    <div className="min-h-screen bg-[#f0e4d3] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold text-[#7a5127] text-center mb-6 tracking-tight">
          Skin Care
        </h1>
        <p className="text-[#7a5127] text-center mb-10 text-lg font-medium max-w-2xl mx-auto">
          Take care of your skin with our expert-recommended skincare routines.
        </p>
        <div className="text-center bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#c9b299] mb-4">Daily Skincare Routine</h2>
          <p className="text-black">
            1. <span className="font-semibold">Cleanse:</span> Use a gentle cleanser to remove impurities.<br />
            2. <span className="font-semibold">Tone:</span> Apply a toner to balance your skin’s pH.<br />
            3. <span className="font-semibold">Moisturize:</span> Hydrate with a lightweight moisturizer.<br />
            4. <span className="font-semibold">Protect:</span> Finish with SPF to shield from UV rays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;