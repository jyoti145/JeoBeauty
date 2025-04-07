
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar,  Input } from '@material-tailwind/react';
import {
  HomeIcon,
 
  InformationCircleIcon,
  ShoppingBagIcon,
  SunIcon,
  LightBulbIcon,
  EnvelopeIcon,
  
} from '@heroicons/react/24/solid';
import logo from '../assets/Logo.png';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
<Navbar
  variant="gradient"
  className="w-full bg-white px-4 py-3 sticky top-0 z-50 shadow-lg"
>
  <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
    {/* Logo  */}
    <div className="flex items-center">
      <NavLink to="/">
        <img
          src={logo}
          alt="Joe Beauty"
          className="image-logo h-25 mr-2 ml-2 cursor-pointer py-1 rounded-s-lg border-l border-l-[#c9b299]"
        />
      </NavLink>
    </div>

    {/* Navbar Items */}
    <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 rounded-md bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 rounded-md transition-all duration-300'
            }
          >
            <HomeIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 rounded-md bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 rounded-md transition-all duration-300'
            }
          >
            <InformationCircleIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 rounded-md bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 rounded-md transition-all duration-300'
            }
          >
            <ShoppingBagIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Products
          </NavLink>
          <NavLink
            to="/skincare"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 rounded-md bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 rounded-md transition-all duration-300'
            }
          >
            <SunIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Skin Care
          </NavLink>
          <NavLink
            to="/tips"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 rounded-md bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 rounded-md transition-all duration-300'
            }
          >
            <LightBulbIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Tips
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 rounded-md bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 rounded-md transition-all duration-300'
            }
          >
            <EnvelopeIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Contact
          </NavLink>
        </div>

     
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
      {/* Search Bar */}
      <div className="relative flex w-full md:w-auto">
        <form onSubmit={handleSearch} className="w-full">
          <Input
            type="search"
            color="gray"
            placeholder="Search products..."
          className="text-black bg-[#f0e4d3] border-2 border-black focus:ring-2 focus:ring-[#c9b299] px-4 py-3 rounded-lg w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            containerProps={{
              className: "w-full",
            }}
          />
          
        </form>
          </div>
          <div className ="flex items-center gap-4">
        
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        </div>
        </div>
    

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f0e4d3] rounded-b-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 transition-all duration-300'
            }
            onClick={toggleMenu}
          >
            <HomeIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 transition-all duration-300'
            }
            onClick={toggleMenu}
          >
            <InformationCircleIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 transition-all duration-300'
            }
            onClick={toggleMenu}
          >
            <ShoppingBagIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Products
          </NavLink>
          <NavLink
            to="/skincare"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 transition-all duration-300'
            }
            onClick={toggleMenu}
          >
            <SunIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Skin Care
          </NavLink>
          <NavLink
            to="/tips"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 transition-all duration-300'
            }
            onClick={toggleMenu}
          >
            <LightBulbIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Tips
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black font-semibold border-b-2 border-[#c9b299] px-4 py-2 bg-[#decbb6]'
                : 'flex items-center text-black hover:text-black hover:bg-[#f0e4d3] px-4 py-2 transition-all duration-300'
            }
            onClick={toggleMenu}
          >
            <EnvelopeIcon className="h-5 w-5 mr-1 text-[#c9b299]" />
            Contact
          </NavLink>
        </div>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
