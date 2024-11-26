"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconBrandLinkedin, IconMenu2, IconX } from '@tabler/icons-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = ['projects', 'experience', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium"
          >
            Burhanuddin Khatri
          </motion.a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {['about', 'projects', 'experience', 'skills'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`hover:text-white transition-colors capitalize ${
                  activeSection === item ? 'text-white' : 'text-secondary'
                }`}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="https://www.linkedin.com/in/burhankhatri/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-secondary hover:text-white transition-colors flex items-center gap-2"
            >
              <IconBrandLinkedin size={20} />
              LinkedIn
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-sm py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              {['about', 'projects', 'experience', 'skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`hover:text-white transition-colors capitalize ${
                    activeSection === item ? 'text-white' : 'text-secondary'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/burhankhatri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors flex items-center gap-2"
              >
                <IconBrandLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
} 