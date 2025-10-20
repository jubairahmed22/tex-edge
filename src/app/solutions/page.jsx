"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Settings, ToolCase, LifeBuoy } from "lucide-react";

const SolutionsPage = () => {
  const categories = [
    {
      icon: <Box className="w-10 h-10 text-blue-600" />,
      title: "Single Needle Direct Drive Machines",
      description:
        "Advanced models with digital feed control, IoT connectivity, and improved stitch quality.",
    },
    {
      icon: <Settings className="w-10 h-10 text-green-600" />,
      title: "Automation Systems",
      description:
        "Pocket Setter, Loop Setter, Moon Setter, Denim Bottom Hemming, Back Yoke, Cuff, Placket, and other intelligent automation lines.",
    },
    {
      icon: <ToolCase className="w-10 h-10 text-amber-500" />,
      title: "Special Machines",
      description:
        "Template machines (360° rotating & fixed head), Top & Bottom variable feed, differential feed dog machine, welt pocket, and other specialized units for jacket production.",
    },
    {
      icon: <LifeBuoy className="w-10 h-10 text-purple-600" />,
      title: "Engineering & Support",
      description:
        "Layout planning, installation, operator training, and performance optimization.",
    },
  ];

  return (
    <div className="font-poppins max-w-7xl mx-auto px-4 py-20">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-left">
          Solutions / Products
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl text-left">
          Goal: Showcase what you sell in a clear, categorized way.
        </p>
      </motion.div>

      {/* Product Categories */}
      <div className="flex flex-col gap-12">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="flex flex-col md:flex-row items-start gap-5 sm:gap-8"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{cat.icon}</div>

            {/* Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {cat.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
