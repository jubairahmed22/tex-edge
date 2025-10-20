"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shirt, Footprints, Briefcase, Factory } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Apparel (Knit, Woven, Denim, Jackets)",
      icon: <Shirt className="w-10 h-10 text-blue-400" />,
      description:
        "Smart sewing automation solutions tailored for the apparel industry, including knitwear, denim, and outerwear production.",
    },
    {
      title: "Leather & Footwear",
      icon: <Footprints className="w-10 h-10 text-blue-400" />,
      description:
        "High-precision machinery and systems designed for leather goods and footwear manufacturing.",
    },
    {
      title: "Bags, Tents & Outdoor Products",
      icon: <Briefcase className="w-10 h-10 text-blue-400" />,
      description:
        "Durable and reliable automation for industrial sewing and stitching of outdoor products.",
    },
    {
      title: "Non-Apparel Industrial Applications",
      icon: <Factory className="w-10 h-10 text-blue-400" />,
      description:
        "Engineering-grade automation solutions for non-apparel sectors and specialized industries.",
    },
  ];

  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 font-poppins overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.gindumac.com/_next/image?url=%2Fimages%2Fhome%2Fbg-hero.png&w=1920&q=75&dpl=dpl_Awj72qen28JERoJdJZGa8moAhJfo')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-950/90" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <h3 className="text-xl sm:text-md lg:text-xl font-semibold mb-4 text-blue-200">
            Serving Diverse Manufacturing Sectors
          </h3>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            We proudly support multiple sectors by delivering cutting-edge
            automation, precision, and performance — driving productivity across
            industries.
          </p>
        </motion.div>

        {/* Industry Cards with Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all border border-white/20 shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center mb-4"
              >
                {industry.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
