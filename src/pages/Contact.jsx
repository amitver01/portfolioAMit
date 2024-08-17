import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mx-2 text-white text-2xl">
    {icon}
  </a>
);

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-zinc-900 flex items-center justify-center">
      <div className='w-full max-w-4xl px-4 md:px-10 lg:px-20'>
        <div className='bg-zinc-700 rounded-lg text-center py-10'>
          <div className='mainHead text-white text-5xl font-bold mb-8'>
            Contact
          </div>
          <p className='px-5 py-6 text-white'>
            Shoot me an email if you want to connect! You can also find me on <br />
            LinkedIn and Twitter if that's more your speed.
          </p>
          
          {/* Email Section */}
          <div className="flex items-center justify-center mb-8">
            <FaEnvelope className="text-3xl text-white" />
            <a href="mailto:av2177980@gmail.com" className="ml-2 text-white text-lg">av2177980@gmail.com</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center mt-4">
            <SocialIcon href="https://www.linkedin.com/in/amit-verma29/" icon={<FaLinkedin />} />
            <SocialIcon href="https://github.com/amitver01" icon={<FaGithub />} />
            <SocialIcon href="https://x.com/AmitVer29" icon={<FaTwitter />} />
            <SocialIcon href="https://www.instagram.com/amit.__29_?igsh=MWhmenliNnY0enhp" icon={<FaInstagram />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
