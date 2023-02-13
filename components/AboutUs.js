import React from "react";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  ">
        Hakkimizda
      </h3>
      <div className="flex-col items-center">
        <div className="w-[1200px] h-[800px] bg-gray-300">
          <p className=" text-right text-lg">Burada ne yaziyosa iste</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
