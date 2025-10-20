"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/home.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const slides = [
    {
      id: 3,
      title: "Premium Services",
      subtitle: "Quality you can trust",
      bgColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
      image: "https://www.eachsun.com/templates/en_lixin/images/ban03.jpg",
    },
    {
      id: 4,
      title: "Innovative Solutions",
      subtitle: "Cutting-edge technology",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-600",
      image: "https://www.eachsun.com/templates/en_lixin/images/ban02.jpg",
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 1 },
    hiddenLeft: { x: "-100%", opacity: 1 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
    },
    exit: {
      x: direction === "right" ? "-100%" : "100%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
    },
  };

  return (
    <div className="relative w-full sliderImgSize overflow-hidden">
      {/* --- Image Slider --- */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={slides[currentIndex].id}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* --- Overlay Content --- */}
      <div className="absolute inset-0 bg-black/60 flex items-center z-10">
        <motion.div
          key={currentIndex} // key ensures animation on slide change
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 w-full"
        >
          <div className="max-w-3xl text-left text-white">
            <h1 className="text-xl sm:text-5xl font-bold mb-4 leading-tight">
              Shaping the Future of Sewing Automation.
            </h1>
            <p className="text-base sm:text-lg mb-6 text-gray-100">
              Tex Edge Automation Ltd provides advanced sewing automation
              solutions to help garment factories enhance productivity, quality,
              and efficiency.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 font-semibold px-6 py-3 rounded-full text-white transition-all"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Navigation Buttons --- */}
      {slides.length > 1 && (
        <>
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.2 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#414143] bg-opacity-40 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-60 z-20"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.2 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#414143] bg-opacity-40 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-60 z-20"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* --- Dots --- */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-white w-6"
                    : "bg-white bg-opacity-50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
