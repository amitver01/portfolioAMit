import React from 'react';
import Card from '../components/Card';
import tictactoe from "../assets/tictactoe.jpg";
import sign from "../assets/sign.jpg";
import ecommerce from "../assets/ecommerce.png"
const Project = () => {
  return (
    <div id="project" className="w-full min-h-screen bg-zinc-900 py-10">
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-10'>
          Projects
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <Card  
            imageSrc={tictactoe}
            title="React TIC-TAC-TOE"
            description="A React Tic Tac Toe game with a 3x3 grid where two players compete. The app tracks moves, checks for winners, and highlights the winning combination."
            githubLink="https://github.com/amitver01/TicTacToe"
            liveLink="https://amittictactoe.netlify.app/"
          />
          <Card 
            imageSrc={sign}
            title="React Signature"
            description="A digital signature application developed with React. Users can draw and save signatures, which are ideal for electronic documents."
            githubLink="https://github.com/amitver01/signature_react"
            liveLink="https://signaturedigi.netlify.app/"
          />
          <Card 
            imageSrc={ecommerce}
            title="Ecommerce Website"
            description="A MERN e-commerce website leverages MongoDB, Express.js, React, and Node.js to deliver a dynamic, scalable platform that handles product listings, user authentication, and payment processing."
             githubLink="https://github.com/amitver01/e-commerce"
            
          />
         
        </div>
      </div>
    </div>
  );
};

export default Project;
