import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";

export const Body = () => {
  return (
    <>
      <div className=" flex flex-col gap-y-10 sm:gap-y-10 justify-center items-center   mt-5">
        <TypeAnimation
          className="text-blue-500 text-center font-semibold font-mono"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to ModeSwitch",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="span"
          speed={40}
          style={{ fontSize: "20px", display: "inline-block" }}
          repeat={Infinity}
        />
        <h2 className="px-12 text-sm sm:text-md  text-gray-600 font-semibold ">
         Here you'll find some <span className="text-blue-500">Tools</span> which I personally use. Hope it will help you in your musical journey, specially if you are a beginner, and some <span className="text-blue-500">Blogs</span> related to music, music theory and guitars
        </h2>

        <div className="flex flex-col gap-y-5 px-10  sm:px-30">
          <TypeAnimation
            className=" font-semibold font-mono text-gray-800"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "explore: Tools",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "explore: Blogs",
              1000,
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-5 gap-x-10 justify-center ">
            <Link
              to="tools"
              className="flex flex-col gap-y-2 p-2 border hover:border hover:border-dashed hover:border-blue-500 "
            >
              <h1 className="text-2xl text-left">Tools</h1>
              <div className="flex justify-center px-2 sm:px-20">
                <img className="h-25 sm:h-40 w-25 sm:w-40 text-center" src="/repair.png" alt="" />
              </div>
            </Link>
            <Link
              to="/blogs"
              className="flex flex-col gap-y-2  p-2 border hover:border hover:border-dashed hover:border-blue-500 "
            >
              <h1 className="text-2xl">Blog</h1>
              <div className="flex justify-center  sm:px-20">
                <img className="h-25 sm:h-40 w-25 sm:w-40 text-center" src="/blogging.png" alt="" />
              </div>
            </Link>
          </div>
        </div>
        <Link to="tools/tuner" className=" font-semibold hover:cursor-pointer h-20 w-20 rounded-full p-5 bg-blue-200 border border-blue-500 flex justify-center items-center ">
          Tune
        </Link>
      </div>
    </>
  );
};
