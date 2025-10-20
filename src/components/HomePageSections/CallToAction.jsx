"use client";

import React from "react";
import { Sparkles, Send } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 overflow-hidden font-poppins">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] animate-pulse-slow pointer-events-none"></div>

      {/* Floating sparkles */}
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-300 rounded-full blur-sm animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-blue-400 rounded-full blur-md animate-ping-slow"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-gray-800">
        {/* Icon and headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-10"
        >
          <Sparkles className="w-12 h-12 text-blue-400 mb-4 animate-spin-slow" />
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-5 bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 text-transparent bg-clip-text">
            Ready to Automate Your Sewing Line?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with our expert engineers to discover smarter, faster, and more efficient sewing automation solutions tailored to your production needs.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-400/40 transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></span>
            <Send className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Contact Us Now</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative glowing line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
