"use client";

import React from "react";
import { motion } from "framer-motion";
import {  Award, Factory, Shirt } from "lucide-react"; // Icons for each industry

const IndustriesPage = () => {
  const industries = [
    {
      icon: <Shirt className="w-10 h-10 text-blue-600" />,
      title: "Apparel Sector",
      description:
        "Tex Edge Automation supports leading apparel manufacturers producing knitwear, denim, woven, and outerwear. Our advanced machines ensure speed, consistency, and superior stitch quality.",
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Leather & Footwear",
      description:
        "We provide robust heavy-duty solutions for leather shoe and bag factories, ensuring precision and durability.",
    },
    {
      icon: <Factory className="w-10 h-10 text-purple-600" />,
      title: "Non-Apparel & Industrial",
      description:
        "From tents to travel gear, our solutions meet the growing needs of non-apparel production sectors in Bangladesh.",
    },
  ];

  return (
    <div className="font-poppins max-w-7xl mx-auto px-4 py-10 sm:py-20">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-left">
          Industries We Serve
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl text-left">
          Goal: Show versatility and relevance to different customer groups.
        </p>
      </motion.div>

      {/* Industry Sections */}
      <div className="flex flex-col gap-12">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="flex flex-col md:flex-row items-start gap-5 sm:gap-8"
          >
            {/* Icon */}
            <div className="flex-shrink-0 mr-5">{industry.icon}</div>

            {/* Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {industry.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {industry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesPage;
