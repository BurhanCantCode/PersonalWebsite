"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Years of experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Hours of Coding", value: "1000+" },
    { label: "AI Models Trained", value: "15+" }
  ];

  return (
    <section className="py-32 px-16" id="about">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider">About</span>
          <h2 className="text-6xl font-bold mt-2">
            <span className="text-secondary">I am an</span>{" "}
            <span className="text-white">AI Engineer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="/me.jpg"
              alt="Burhanuddin Khatri"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-secondary text-lg leading-relaxed">
              With a strong foundation in AI and machine learning, I specialize in creating impactful AI solutions. 
              My expertise spans across cloud infrastructure, automation, and developing cutting-edge AI applications. 
              I'm passionate about leveraging technology to solve real-world problems and drive innovation.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 