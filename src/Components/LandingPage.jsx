import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-48 px-16 mb-10">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (<div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative bg-green-900"></div>)}
              <h1 className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-semibold font-['Founder_Grotest_X-Condensed']">
                {item}
              </h1>
              </div>
            </div>
          );
        })}

        <div className="border-t-[2px] border-zinc-500 bg-zinc-900 flex justify-between items-center mt-16">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none pt-1">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-2 pt-2">
            <div className="px-6 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase">
              Start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] rounded-full">
              <span className="rotate-[45deg]">
              <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
