"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Gauge, Headphones } from "lucide-react";

const TexEdge = () => {
  const cards = [
    {
      title: "Innovation",
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      text: "Integrating cutting-edge automation technology to transform manufacturing efficiency.",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      title: "Efficiency",
      icon: <Gauge className="w-10 h-10 text-green-600" />,
      text: "Optimizing production processes for precision, speed, and quality performance.",
      gradient: "from-green-50 to-emerald-100",
    },
    {
      title: "Support",
      icon: <Headphones className="w-10 h-10 text-indigo-600" />,
      text: "Providing reliable service, technical training, and long-term client partnerships.",
      gradient: "from-indigo-50 to-blue-100",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-poppins">
      {/* --- Main Heading --- */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-gray-800"
      >
        TexEdge <span>Automation</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl max-w-2xl"
      >
        Empowering manufacturers with smarter, more efficient production
        technologies.
      </motion.p>

      {/* --- About Section --- */}
      <div className="flex flex-col md:flex-row items-center gap-12 my-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <img
            src="https://lightcastlepartners.com/wp-content/uploads/2023/07/image-2-1920x1080.webp"
            alt="Automation Equipment"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            About TexEdge Automation
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-lg mb-6 leading-relaxed"
          >
            We are a technology-driven company representing the latest sewing
            automation systems, equipment, and solutions for apparel and
            non-apparel industries. Our goal is to empower manufacturers with
            smarter, more efficient production technologies.
          </motion.p>

          <ul className="space-y-4">
            {[
              "Cutting-edge sewing automation systems for industries.",
              "Equipment solutions designed for efficiency and scalability.",
              "Empowering manufacturers to innovate and optimize production.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex items-start gap-3"
              >
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* --- Core Values Section --- */}
      <section className="bg-white py-20">
        <div>
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We are committed to driving innovation, ensuring efficiency, and
              providing exceptional support to our partners worldwide.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`bg-gradient-to-br ${card.gradient} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center justify-center mb-5">
                  <div className="bg-white shadow-inner p-3 rounded-full">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TexEdge;
