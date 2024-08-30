import React from 'react';
import Button from '../components/Button';

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
      <div className="text-white gap-5">
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-8xl leading-tight font-semibold mb-4">
          Hi, I'm Amit<span className="text-blue-500">.</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold mb-6">
          I'm a Full Stack Developer<span className="text-blue-500">.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8">
          Hello, I'm Amit Verma, a Computer Science and Engineering graduate with a focus on full-stack development. I have experience working with technologies like React.js, Node.js, MongoDB, and AWS.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 m-4">
          <Button 
            text="Contact Me"
            bgColor="bg-custom-blue"
            hoverColor="hover:bg-custom-blue-hover"
            textColor="text-white"
            padding="py-3 px-6"
            borderRadius="rounded-lg"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          />
          <Button 
            text="My Resume"
            bgColor="bg-zinc-900"
            hoverColor="hover:bg-custom-blue-hover"
            textColor="text-white"
            padding="py-2 px-4 md:py-3 md:px-6"
            borderRadius="rounded-lg"
            borderColor="border-white-200"
            link="https://drive.google.com/file/d/1oL7MGvB8GBWFiDtMkngT1bMn-EG7E-mr/view?usp=sharingn"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
