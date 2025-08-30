import React from "react";
import Image from "../assets/Lunar_Call.webp";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-12 min-h-screen px-6 mt-6">
      <img
        src={Image}
        alt="Image"
        className="w-96 md:w-full max-w-[600px] mt-0 md:mt-20"
      />

      <div className="flex flex-col justify-center items-start gap-8 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 leading-tight md:leading-[80px]">
          Believe in <br /> Technology, Make <br /> the Change
        </h1>
        <p className="leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          corporis adipisci cumque neque soluta sit quo commodi ipsa ex odit
          minima tenetur sed perspiciatis id optio quos, dolores saepe
          cupiditate!
        </p>
        <button className="bg-orange-500 px-8 py-3 rounded-full w-40 text-white shadow-2xl hover:shadow-orange-400 transition-all duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}
