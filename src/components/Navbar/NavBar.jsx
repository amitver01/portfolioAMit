import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Button from '../Button';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center bg-zinc-900 bg-opacity-70 backdrop-blur-md z-50 transition-all ease-in-out duration-300">
      <div 
        className="text-white text-2xl font-bold cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Amit
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <div className="hidden md:flex md:items-center md:gap-8">
        <Button  
          text="My Resume"
          bgColor="bg-zinc-900"
          hoverColor="hover:bg-custom-blue-hover"
          textColor="text-white"
          padding="py-2 px-4 md:py-3 md:px-6"
          borderRadius="rounded-lg"
          borderColor="border-white-200"
          link="https://drive.google.com/file/d/1-jLfzWucDbPt4oi1Smk5VyxqXsj6kjxp/view?usp=drivesdk"
        />
        <div className="flex flex-col md:flex-row items-center md:gap-8">
          {["Project", "About", "Contact"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="text-white text-base md:text-lg font-light hover:underline"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className={`md:hidden fixed top-0 left-0 w-full bg-zinc-900 bg-opacity-70 backdrop-blur-md transition-transform ease-in-out duration-300 ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="flex flex-col items-center p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl mb-4"
          >
            ×
          </button>
          {["Project", "About", "Contact"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="text-white text-lg font-light hover:underline mb-4"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button  
            text="My Resume"
            bgColor="bg-zinc-900"
            hoverColor="hover:bg-custom-blue-hover"
            textColor="text-white"
            padding="py-2 px-4 md:py-3 md:px-6"
            borderRadius="rounded-lg"
            borderColor="border-white-200"
            link="https://www.google.com"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
