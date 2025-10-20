"use client";
import React from "react";
import { motion } from "framer-motion";
import brother from "../../assets/brother.jpeg";
import ebsun from "../../assets/edsun.jpeg";
import imb from "../../assets/imb.jpeg";
import juita from "../../assets/juita.jpeg";

const TrustedPartner = () => {
  const partners = [
    { name: "Brother", logo: brother },
    { name: "Edsun", logo: ebsun },
    { name: "IMB", logo: imb },
    { name: "Juita", logo: juita },
  ];

  return (
    <section className="font-poppins max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Side: Heading & Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Your Trusted Partners
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Partnering with leading brands to bring smarter, more efficient factory solutions.
          </p>
        </motion.div>

        {/* Right Side: Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 grid grid-cols-2 gap-8"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md"
            >
              <img
                src={partner.logo.src}
                alt={partner.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2"
              />
              <p className="text-gray-700 font-semibold text-center">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartner;
