import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Highlight section based on scroll
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -section.clientHeight + 100) {
            setActiveSection(item.name.toLowerCase());
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg bg-[#111118]/60 border-b border-gray-700 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3a7cff33,transparent_60%),radial-gradient(circle_at_80%_70%,#ff3ab466,transparent_60%)] animate-pulse-slow"></div>

      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          <img src="/logo.jpg" alt="TS" className="w-14 rounded-full" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-gray-300 hover:text-blue-400 transition-colors font-medium ${
                activeSection === item.name.toLowerCase()
                  ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          {/* Social Links */}
          <div className="flex items-center space-x-4 ml-6">
            <a
              href="https://github.com/tarunsrinivas4302"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-400 " />

            </a>
            <a
              href="https://www.linkedin.com/in/putchalatarunsrinivas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          className={`md:hidden absolute top-full left-0 w-full bg-[#111118]/90 backdrop-blur-lg border-t border-gray-700 overflow-hidden transition-all ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-4 px-6 text-gray-300 hover:text-blue-400 transition-colors border-b border-gray-700"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;



