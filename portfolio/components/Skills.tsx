"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "C++", "Next.js", "TensorFlow", "PyTorch"]
  },
  {
    title: "Development",
    skills: ["Cloud Infrastructure", "System Architecture", "API Development", "DevOps"]
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "MLOps"]
  }
];

export default function Skills() {
  return (
    <section className="py-32 px-16" id="skills">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-6xl font-bold mt-2">
            <span className="text-secondary">Technical</span>{" "}
            <span className="text-white">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-white">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="text-secondary hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 