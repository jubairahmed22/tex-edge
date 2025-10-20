"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const strengths = [
    "Experienced technical & sales team",
    "Partnership with leading global brands",
    "Reliable after-sales service and training",
    "Customized solutions for each application",
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
          About Us
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl text-left">
          Goal: Build credibility, share vision, and experience.
        </p>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-start gap-5 sm:gap-8 mb-12 sm:mb-16"
      >
        <div className="flex-shrink-0 mr-5">
          <Users className="w-20 h-20 sm:w-24 sm:h-24 text-blue-600" />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Tex Edge Automation Ltd is a Bangladesh-based company specializing in industrial sewing and automation solutions. We combine technical expertise, global partnerships, and industry experience to deliver efficient, cost-effective production solutions to garment factories.
          </p>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md text-left"
        >
          <div className="flex items-center mb-4 gap-3">
            <Target className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To support manufacturers in achieving operational excellence through reliable automation and innovative sewing technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md text-left"
        >
          <div className="flex items-center mb-4 gap-3">
            <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To become Bangladesh’s most trusted partner for sewing automation and digital manufacturing transformation.
          </p>
        </motion.div>
      </div>

      {/* Strengths */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-left">
          Our Strengths
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {strengths.map((strength, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-start bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-md"
            >
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-3" />
              <p className="text-gray-700 font-semibold text-base sm:text-lg">
                {strength}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
