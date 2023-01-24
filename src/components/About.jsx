import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen  text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have one year of experience as a junior front-end web developer. I strive to design and develop user-friendly and visually appealing websites and applications.While web-developing, I like to learn new things, be productive, and spend almost all of my time on this job.
I am a fast learner who likes to research and learn.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;