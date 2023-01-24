import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hey there!</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          DESERDIV
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">Front-End Developer</h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, focused on
          building fully-responsive web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button></Link>
{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
