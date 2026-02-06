import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaTools } from "react-icons/fa";
import {Link} from "react-router-dom"

import { TypeAnimation } from "react-type-animation";

export const Home = () => {
 
  return (
    <>
      <div className=" flex flex-col gap-y-10 sm:gap-y-40   mt-5">
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

        <div className="flex flex-col gap-y-5 px-10  sm:px-30">
          <TypeAnimation
            className=" font-semibold font-mono"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Tools",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Blogs",
              1000,
             
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 justify-center">
            <Link to="tools" className="flex flex-col p-2 border hover:border hover:border-dashed hover:border-blue-500 ">
                <h1 className="text-2xl">Tools</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi accusamus quos ipsa dolorem quaerat vitae commodi consequuntur. Error, ipsa. Ut vel quisquam praesentium porro quae ea. Fuga, dolorem sed!</p>
            </Link>
            <Link to="/blogs" className="flex flex-col p-2 border hover:border hover:border-dashed hover:border-blue-500 ">
                <h1 className="text-2xl">Blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi accusamus quos ipsa dolorem quaerat vitae commodi consequuntur. Error, ipsa. Ut vel quisquam praesentium porro quae ea. Fuga, dolorem sed!</p>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};
