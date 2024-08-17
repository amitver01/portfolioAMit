import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiFigma } from 'react-icons/si';

function IconMarquee() {
  return (
    <div className="bg-zinc-900  py-4">
      <div className="flex flex-wrap items-center justify-center space-x-8 mt-20">
        {/* Icons using react-icons */}
        <FaHtml5 className="text-6xl text-red-600 transition-transform duration-300 transform hover:scale-110" />
        <FaCss3Alt className="text-6xl text-blue-600 transition-transform duration-300 transform hover:scale-110" />
        <FaJsSquare className="text-6xl text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
        <FaReact className="text-6xl text-blue-400 transition-transform duration-300 transform hover:scale-110" />
        <SiNextdotjs className="text-6xl text-white transition-transform duration-300 transform hover:scale-110" />
        <FaNodeJs className="text-6xl text-green-600 transition-transform duration-300 transform hover:scale-110" />
        <FaGitAlt className="text-6xl text-orange-600 transition-transform duration-300 transform hover:scale-110" />
        <SiFigma className="text-6xl text-pink-500 transition-transform duration-300 transform hover:scale-110" />
        
      </div>
    </div>
  );
}

export default IconMarquee;
