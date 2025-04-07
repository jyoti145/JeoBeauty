
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f0e4d3] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold text-[#7a5127] text-center mb-6 tracking-tight">
          Contact Us
        </h1>
        <p className="text-black text-center mb-10 text-lg font-medium max-w-2xl mx-auto">
          We’d love to hear from you! Reach out with any questions or feedback.
        </p>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
          <form>
            <div className="mb-4">
              <label className="block text-black mb-2 font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b299] transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2 font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b299] transition-all duration-300"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b299] transition-all duration-300"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#decbb6] text-black px-4 py-2 rounded-lg hover:bg-[#c9b299] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;