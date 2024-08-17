import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const CardDefault = ({ imageSrc, title, description, githubLink, liveLink }) => {
  return (
    <div className="w-full max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden bg-zinc-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48 md:h-56">
        <img
          src={imageSrc}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h5 className="text-lg md:text-xl font-bold text-blue-gray-100 mb-2">
          {title}
        </h5>
        <p className="text-blue-gray-300 text-sm md:text-base">
          {description}
        </p>
      </div>
      <div className="p-4 pt-0 flex justify-evenly border-t border-gray-600">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={20} />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default CardDefault;
