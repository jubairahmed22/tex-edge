"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can integrate with backend API here
    setFormData({ name: "", company: "", email: "", message: "" });
  };

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
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl text-left">
          Goal: Make it effortless for visitors to reach you.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-start gap-5 sm:gap-8 mb-12 sm:mb-16"
      >
        <div className="flex-shrink-0">
          <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mr-5" />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
            Tex Edge Automation Ltd
            <br />
            House #7, Road #7, Sector-7, Uttara, Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-2 text-gray-700 mb-1">
            <Phone className="w-5 h-5 text-green-600" /> +880 1328521290
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <Mail className="w-5 h-5 text-red-600" /> toufik.texedge@gmail.com
          </p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-left">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message / Inquiry"
            required
            rows={4}
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:col-span-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl py-3 px-6 md:col-span-2 hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Google Map Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl overflow-hidden shadow-md"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116752.84438143145!2d90.3147457224862!3d23.870946072323555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c51d4bee1d95%3A0x93f9bf5a1fed0559!2sUttara%20High%20School%20%26%20College!5e0!3m2!1sen!2sbd!4v1760960879510!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactPage;
