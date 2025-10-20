"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Settings, Wrench, ShieldCheck } from "lucide-react";

const KeySolutions = () => {

     const solutions = [
    {
      title: "Intelligent Sewing Machines",
      description:
        "Advanced systems with smart controls and superior stitch quality to enhance productivity.",
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      gradient: "from-blue-50 to-blue-100",
    },
    {
      title: "Automation & Workstation Systems",
      description:
        "Integrated automation for sewing lines and workstations to streamline manufacturing.",
      icon: <Settings className="w-10 h-10 text-indigo-600" />,
      gradient: "from-indigo-50 to-indigo-100",
    },
    {
      title: "Template & Programmable Units",
      description:
        "Custom-programmed machines built to meet specific production needs efficiently.",
      icon: <Wrench className="w-10 h-10 text-green-600" />,
      gradient: "from-green-50 to-emerald-100",
    },
    {
      title: "Engineering & Support",
      description:
        "Complete layout planning, operator training, and after-sales technical support.",
      icon: <ShieldCheck className="w-10 h-10 text-sky-600" />,
      gradient: "from-sky-50 to-sky-100",
    },
  ];


  return (
    <div className="w-full bg-gray-50 font-poppins">
      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto px-4  py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Our Core Solutions
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          We offer a range of innovative solutions designed to streamline
          manufacturing processes and enhance efficiency in the apparel and
          non-apparel industries.
        </p>
          {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.1)",
              }}
              className={`bg-gradient-to-br ${solution.gradient} p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-center mb-5">
                <div className="bg-white p-3 rounded-full shadow-inner">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
                {solution.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default KeySolutions;
