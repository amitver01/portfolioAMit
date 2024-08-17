import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import ButtonRounded from '../components/Button';
import Marque from "../components/marque"
const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-zinc-900 pt-4 md:pt-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-white text-4xl md:text-5xl font-bold">About</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-2/3">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Hey<span className="text-blue-500">!</span></h2>
                <p className="text-base md:text-lg">
                  I'm Amit, a gym freak turned software engineer from Lucknow, Uttar Pradesh. I specialize in the backend, primarily Node but love building with whatever tools are right for the job including frontend.
                </p>
                <p className="text-base md:text-lg">
                  I’m eager to apply my skills and knowledge to a dynamic role in the tech industry, where I can contribute to innovative projects and continue to grow professionally.
                </p>
                <p className="text-base md:text-lg">
                  I'm passively looking for positions where I can apply my love for code. If you think you've got an opening that I might like, let's connect <span role="img" aria-label="link">🔗</span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Use at Work</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'HTML', 'CSS', 'React', 'Redux', 'NodeJS', 'Express', 'JAVA' , 'Tailwind CSS' ,'MongoDB', 'GitHub', 'AWS'].map(skill => (
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marque/>
    </div>
  );
};

export default About;
