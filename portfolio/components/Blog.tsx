"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="blog">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              DressUp - AI Styling Assistant
            </h3>
            <div className="relative h-64 mb-6">
              <Image
                src="/picture3.jpg"
                alt="DressUp Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Hello everyone!</p>
              <p>
                As the team captain of Team #SoundsGood, I'm excited to share that our awesome team consisting of Yuliia Bilyk, James Murdza, YASEEN Hussain, Akhilesh Rangani, Priyesh Pandey, and myself built an innovative AI styling assistant called DressUp during the lablab.ai Hackathon. We utilized GPT-4 and other advanced AI APIs to create DressUp.
              </p>
              <p>
                DressUp uses cutting-edge tech like image recognition, AI fashion sketch generation powered by GPT-4, and more to revolutionize personal styling.
              </p>
              <a
                href="https://lnkd.in/gHAM_GFn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 