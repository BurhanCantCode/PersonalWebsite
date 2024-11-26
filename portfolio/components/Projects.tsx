"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "YapperAI",
    description: "Multi-Language Customer Support Chatbot powered by LLMs",
    tech: ["Next.js", "Azure OpenAI", "Firebase", "Material UI", "RAG", "Team Leadership"],
    date: "Aug 2024",
    image: "/yapper-ai.jpg",
    link: "#",
    details: "YapperAI is a powerful, personalized customer support chatbot that helps businesses automate their customer interactions in multiple languages. The chatbot is designed to understand and respond to customer queries based on the data provided by the business. The platform allows users to upload relevant CSV data and train the bot to fetch accurate responses. Built with Next.js, Azure OpenAI, Firebase, Material UI (MUI), and other cutting-edge technologies, YapperAI offers a smooth and efficient experience with clean UI/UX and animations, ensuring businesses have a modern, scalable customer support solution.",
    association: "Headstarter"
  },
  {
    title: "HearMe AI",
    description: "The Versatile Meeting Summarization Tool",
    tech: ["Next.js", "Deepgram", "Mixtral", "Speech-To-Text", "API Integration"],
    date: "Sep 2024",
    image: "/hearme-ai.jpg",
    link: "#",
    details: "HearMe AI currently a web-based prototype that enables users to efficiently record or upload audio, which is then transcribed and summarized. Built using Next.js, it leverages Deepgram's API for real-time transcription and Hugging Face for generating detailed summaries. The app is designed to streamline meeting reviews by providing concise summaries of discussions.",
    association: "Headstarter"
  },
  {
    title: "ChatBot for DevDay'24",
    description: "IBM Watson-powered Event Assistant",
    tech: ["IBM Watson Assistant", "NLP", "API Integration"],
    date: "Mar 2024 - Apr 2024",
    image: "/devday-chatbot.jpg",
    link: "#",
    details: "Developed and regulated the chatbot for ACMS Developers Days 2024, powered by IBM Watson Assistant. The chatbot achieved an impressive 81% recognition rate in natural language processing. Received positive feedback and high engagement from event attendees.",
    association: "Developers' Day - ACM NUCES"
  },
  {
    title: "Eeko AI",
    description: "Research-driven agricultural solution using LLaMA 3.2 and YOLO v5 for crop analysis",
    tech: ["Next.js", "LLaMA 3.2", "YOLO v5", "NASA LARC API"],
    date: "Sep 2024",
    image: "/eeko-ai.jpg",
    link: "#"
  },
  {
    title: "Image Sentiment Classifier",
    description: "CNN-based image sentiment analysis using TensorFlow and Keras",
    tech: ["TensorFlow", "Keras", "CNN", "Deep Learning"],
    date: "July 2024",
    image: "/sentiment-classifier.jpg",
    link: "#"
  },
  {
    title: "DressUp",
    description: "AI-powered styling assistant using GPT-4 for personalized fashion",
    tech: ["Next.js", "TypeScript", "NextAuth.js", "Postgres"],
    date: "May 2024",
    image: "/dressup-app.jpg",
    link: "#"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-32 px-16" id="projects">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider">Projects</span>
          <h2 className="text-6xl font-bold mt-2">
            <span className="text-secondary">Featured</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-black/50 rounded-lg overflow-hidden aspect-[16/9]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <AnimatePresence mode="wait">
                {hoveredProject === index && project.image && project.title !== "Image Sentiment Classifier" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1
                    }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1
                      }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute inset-0 p-6 flex flex-col"
                  >
                    <div>
                      <h3 className="text-2xl font-medium text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-secondary text-sm mb-2">{project.date}</p>
                      {project.association && (
                        <p className="text-secondary text-sm mb-4">
                          Associated with {project.association}
                        </p>
                      )}
                    </div>
                    <p className="text-secondary text-sm mb-4">{project.description}</p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 