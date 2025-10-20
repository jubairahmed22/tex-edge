import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.gindumac.com/_next/image?url=%2Fimages%2Fhome%2Fbg-hero.png&w=1920&q=75&dpl=dpl_Awj72qen28JERoJdJZGa8moAhJfo')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Premium Machinery
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Buy and sell used industrial machines with ease and confidence.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition">
            Explore Now
          </button>
          <button className="bg-white hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-full transition">
            Contact Us
          </button>
        </div>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
