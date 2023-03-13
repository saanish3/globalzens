import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const Hero = ({heading, message, mission, meetthefounder, about}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl mt-32 font-bold mb-4">About Me</h1>
        <p className="text-xl text-center max-w-lg mb-8">
        {about}
        </p>
        <Link href="/projects">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
          View Portfolio
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
