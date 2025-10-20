import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-14 font-poppins">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Smarttech (Pvt) Ltd.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Smarttech (Pvt) Ltd. is one of the leading importer and indenting
            companies in Bangladesh, emerged in 2007. We have earned the trust
            of our customers by providing high-quality, world-renowned machinery
            from Europe and Asia — in alliance with Italy, Germany, Korea, China
            and more.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition"
              aria-label="Website"
            >
              <Globe className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Company Links
          </h3>
          <ul className="space-y-2">
            {[
              "Home",
              "About",
              "Solutions",
              "Industries",
              "Contact CTA",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-blue-400" />
              <span>
                <strong>Head Office:</strong> House #09, Road #03, Sector -06,
                Uttara, Dhaka, Bangladesh.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <a
                href="tel:+8801730034839"
                className="hover:text-blue-400 transition"
              >
                +8801730034839
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a
                href="mailto:info@smarttechbd.net"
                className="hover:text-blue-400 transition"
              >
                info@smarttechbd.net
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Smarttech (Pvt) Ltd. All rights reserved. |
        Designed by <span className="text-blue-400">Smarttech Creative Team</span>
      </div>
    </footer>
  );
};

export default Footer;
