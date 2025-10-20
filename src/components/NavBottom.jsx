"use client";

import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const NavBottom = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-200 font-poppins text-sm">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        {/* --- Left: Contact Info --- */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:info@gindumac.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={16} />
            info@gindumac.com
          </a>

          <a
            href="tel:+8801234567890"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Phone size={16} />
            +880 1234-567890
          </a>
        </div>

        {/* --- Right: Social Media Icons --- */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook size={16} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-400 transition-colors"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
