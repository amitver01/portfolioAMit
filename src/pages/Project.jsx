import React from 'react';
import Card from '../components/Card';
import va from "../assets/va.jpg";
import donation from "../assets/donation.jpg";
import event from "../assets/event.jpg";
import sign from "../assets/sign.jpg"

const Project = () => {
  return (
    <div id="project" className="w-full min-h-screen bg-zinc-900 py-10">
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-10'>
          Projects
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <Card  
            imageSrc={va}
            title="Voting Application"
            description="A secure voting platform integrating advanced authentication methods like Aadhaar card-based verification to ensure transparency and trust in digital elections."
            githubLink="https://github.com/amitver01/Vote_Hub"
          />
          <Card 
            imageSrc={donation}
            title="Danmitra - Donation Platform"
            description="A niche-focused donation app that bridges donors and beneficiaries, featuring intuitive design, secure payment gateways, and multilingual support."
            githubLink="https://github.com/amitver01/DANMITRA"
            liveLink="https://danmitra.vercel.app/"
          />
          <Card 
            imageSrc={event}
            title="Event-Management System"
            description="A streamlined event management platform enabling users to create, manage, and promote events effortlessly with robust backend and responsive design."
            githubLink="https://github.com/amitver01/backend_EVENT"
          />
          <Card 
            imageSrc={sign}
            title="Digital Signature"
            description="Got an offer letter? Congratulation! But how would you accept it without signing? Try Digital Signature."
            githubLink="https://github.com/amitver01/Sign_Digi"
            liveLink="https://signaturedigi.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
