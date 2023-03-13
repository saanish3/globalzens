import React from 'react';
import Link from 'next/link'; 
import styles from '@/styles/Home.module.css'


const Hero = ({heading, message, mission, meetthefounder, about}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="fixed w-full h-full z-0">
        <video
          className="flex w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/Background.mp4" type="video/mp4" />
        </video>
      </div>

      <main className="fixed z-10 mt-48 justify-center items-center">
        <div mt-28>
        <div>
          <h1 className="text-white text-6xl text-center text-bold py-40 font-extrabold">GLOBALZEN STUDIOS</h1>
 
       </div>
        <div className={styles.grid}>
        </div>
        </div>
      </main>
        {/* <h1 className="fixed text-4xl font-bold mb-4">About Me</h1> */}
        <p className="text-xl text-center max-w-lg mb-8">
        {about}
        </p>
        <Link href="/">
        <button className="bg-globalteal hover:bg-yellow-400 mt-80 text-globalgold font-bold py-2 px-4 rounded">
          Learn More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
