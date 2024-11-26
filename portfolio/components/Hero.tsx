"use client";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-8xl font-bold mb-6">
              <span className="text-white">AI Engineer</span>{" "}
              <span className="text-secondary">Crafting Impactful AI Solutions</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 mt-12 justify-center"
          >
            <Button
              href="mailto:burhanuddinkhatri@gmail.com"
              as="a"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8"
            >
              Email me →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 