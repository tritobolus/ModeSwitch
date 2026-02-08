import { Link, Outlet, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
export const Tools = () => {
  const location = useLocation();
  const isToolsHome = location.pathname === "/tools";
  return (
    <>
      {isToolsHome && (
        <div className="flex flex-col px-5 py-4 h-[calc(100vh-7rem)] text-gray-800">
          <TypeAnimation
            className=" font-semibold font-mono "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Tools: Chord Conversion",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tools: Capo Chord Converter",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tools: Find Group Chord",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tools: Tuner",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tools: Metronome",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tools: Chord Library",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "20px", display: "inline-block" }}
            repeat={Infinity}
          />

          <div className="px-8 mt-5 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-10 h-[calc(100vh-7rem)] overflow-y-auto">
            <Link
              to={"chord-conversion"}
              className=" h-50 w-70 flex flex-col gap-y-5 justify-between bg-gray-50 shadow-lg p-5 hover:cursor-pointer border border-dashed hover:border-blue-600  duration-200 transition-all hover:shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-500 ">
                Chord Conversion
              </h2>
              <p className="">
                {" "}
                Having problem with group chords whiel changing scale ? here is
                your solution{" "}
              </p>
            </Link>
            <Link
              to={"capo-chord-converter"}
              className="h-50 w-70 flex flex-col gap-y-5 justify-between  bg-gray-50 shadow-lg p-5 hover:cursor-pointer border border-dashed hover:border-blue-600  duration-200 transition-all hover:shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-500 ">
                Capo Chord Converter
              </h2>
              <p className="">
                {" "}
                Having problem with group chords whiel changing scale ? here is
                your solution{" "}
              </p>
            </Link>
            <Link
              to={"group-chords"}
              className="h-50 w-70 flex flex-col gap-y-5 justify-between  bg-gray-50 shadow-lg p-5 hover:cursor-pointer border border-dashed hover:border-blue-600  duration-200 transition-all hover:shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-500 ">
                Find Group Chords
              </h2>
              <p className="">
                {" "}
                Having problem with group chords whiel changing scale ? here is
                your solution{" "}
              </p>
            </Link>
            <Link
              to={"tuner"}
              className="h-50 w-70 flex flex-col gap-y-5 justify-between  bg-gray-50 shadow-lg p-5 hover:cursor-pointer border border-dashed hover:border-blue-600  duration-200 transition-all hover:shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-500 ">Tuner</h2>
              <p className="">
                {" "}
                Having problem with group chords whiel changing scale ? here is
                your solution{" "}
              </p>
            </Link>
            <Link
              to={"metronome"}
              className="h-50 w-70 flex flex-col gap-y-5 justify-between  bg-gray-50 shadow-lg p-5 hover:cursor-pointer border border-dashed hover:border-blue-600  duration-200 transition-all hover:shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-500 ">Metronome</h2>
              <p className="">
                {" "}
                Having problem with group chords whiel changing scale ? here is
                your solution{" "}
              </p>
            </Link>

            <Link
              to={"metronome"}
              className="h-50 w-70 flex flex-col gap-y-5 justify-between  bg-gray-50 shadow-lg p-5 hover:cursor-pointer border border-dashed hover:border-blue-600  duration-200 transition-all hover:shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-500 ">
                Chord Library
              </h2>
              <p className="">
                {" "}
                Having problem with group chords whiel changing scale ? here is
                your solution{" "}
              </p>
            </Link>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};
