import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="relative sm:mt-20 w-full flex flex-col justify-center items-center" id="home">
      <div className='flex flex-col justify-center text-white text-3xl sm:text-6xl font-bold h-96 w-full items-center space-y-6'>
        <h1>I am a </h1>
        <Typewriter
          options={{
            strings: ['Frontend Web Developer', 'Full Stack Web Developer' , 'MERN Stack Developer', 'React Native Developer', 'Freelancer'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className=" w-full justify-center items-center flex flex-col">
        <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
          <p className="text-textBase">Scroll Down</p>
        </div>
          <FaArrowDown fontSize={20} className='animate-bounce text-white mt-5'/>
      </div>
    </main>
  );
}

export default Home
