
import React from 'react';
import Sunscreen from '../assets/Sunscreen.png';
import faceserum from '../assets/faceserum.jpg';
import facegel from '../assets/facegel.jpg';
import facetoner from '../assets/facetoner.jpg';

const Products = () => {
  const products = [
    { name: 'Sunscreen', price: '$25.00', image: Sunscreen },
    { name: 'Face Serum', price: '$15.00', image: faceserum },
    { name: 'Face Gel', price: '$10.00', image: facegel },
    { name: 'Face Toner', price: '$30.00', image: facetoner },
  ];

  return (
    <div className="min-h-screen bg-[#f0e4d3] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-[#7a5127] text-center mb-6">Our Products</h1>
        <p className="text-[#7a5127] text-center mb-10 font-medium">
          Discover our curated collection of beauty products designed to make you shine.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-[#c9b299]">{product.name}</h2>
                <p className="mt-2 text-black">{product.price}</p>
                <button className="mt-4 bg-[#decbb6] text-black px-4 py-2 rounded-lg hover:bg-[#c9b299] transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;