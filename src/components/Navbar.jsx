"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/home.css";
import logo from '../assets/logo.jpeg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Contact CTA", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 relative transition-colors duration-300 font-poppins">
      {/* Background */}
      <div
        className={`absolute inset-0 pointer-events-none z-[-1] transition-all duration-300 ${
          scrolled ? "bg-white backdrop-blur-3xl" : "bg-transparent"
        }`}
      />

      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
           <Link href="/" className="flex items-center gap-3">
      <img
        src={logo.src}
        alt="Tex Edge Automation Ltd Logo"
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl text-gray-800 italic font-semibold cursor-pointer"
      >
        Tex Edge Automation Ltd
      </motion.div>
    </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 relative">
            {navLinks.map((link, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-blue-600 duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleSidebar}
            className="md:hidden text-gray-800 ml-4"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-white backdrop-blur-xl shadow-lg z-50 p-6 flex flex-col"
            >
              <button
                onClick={toggleSidebar}
                className="self-end text-gray-800 mb-6"
              >
                <X size={24} />
              </button>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05, color: "#1D4ED8" }}
                  className="py-2 text-gray-800 cursor-pointer"
                  onClick={toggleSidebar}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
