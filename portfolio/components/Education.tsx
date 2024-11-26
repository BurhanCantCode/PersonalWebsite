"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="education">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-primary">
            National University of Computer and Emerging Sciences
          </h3>
          <p className="text-gray-400 mb-4">
            Bachelor of Science (B.S.) in Computer Science
          </p>
          <p className="text-gray-300">August 2023 - September 2027</p>
          
          <h4 className="text-xl font-bold mt-8 mb-4 text-primary">Certifications</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>AI and Machine Learning: Prompt Engineering for Generative AI, Azure Machine Learning Development</li>
            <li>Cloud Computing: Azure Management and Governance, Azure Cloud Concepts, Azure Architecture and Services</li>
            <li>Operations Skills: Personal and Professional Development, Leading with Innovation, Learning Confluence, Learning Confluence Administration</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
} 