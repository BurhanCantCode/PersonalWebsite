"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Technical Community Manager",
    company: "GitWit",
    date: "Sep 2024 – Present",
    location: "San Francisco Bay Area · Remote",
    description: "As a Technical Community Manager at Gitwit, I manage and engage our open-source developer community through workshops and online platforms. I ensure the community stays updated on open-source trends and Gitwit's latest developments. I facilitate technical discussions, support contributions, and promote collaboration within the community."
  },
  {
    title: "Machine Learning Intern",
    company: "VeeOne Health",
    date: "August 2024 – Present",
    location: "Roseville, California, United States · Remote",
    description: "Data cleaning and pipeline automation for ML model efficiency. Applying Machine Learning knowledge to real-world healthcare challenges. Contributing to solutions that improve patient outcomes and optimize hospital resources."
  },
  {
    title: "Cloud Intern",
    company: "Musewerx",
    date: "June 2024 – July 2024",
    location: "New Jersey, United States · Remote",
    description: "Led the migration from Atlassian on-premises to Atlassian Cloud using Migration Assistant. Applied machine learning algorithms in Azure to build a sales forecasting model. Implemented Microsoft Azure solutions to drive efficiency and reliability in cloud operations."
  },
  {
    title: "Automation Specialist",
    company: "Developers' Day - ACM NUCES",
    date: "Dec 2023 – April 2024",
    location: "Karachi, Pakistan",
    description: "Developed the main theme/design for Attendance Management System. Created IBM Watson powered AI chatbot for event related queries. Helped with managing the portal."
  }
];

export default function Experience() {
  return (
    <section className="py-32 px-16" id="experience">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider">Career</span>
          <h2 className="text-6xl font-bold mt-2">
            <span className="text-secondary">And This Is</span>{" "}
            <span className="text-white">My Career</span>
          </h2>
        </div>
        
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-8"
            >
              <div className="col-span-4">
                <h3 className="text-xl font-medium text-white mb-1">
                  {experience.title}
                </h3>
                <p className="text-secondary text-sm mb-1">
                  {experience.company} | {experience.date}
                </p>
                <p className="text-secondary text-sm">
                  {experience.location}
                </p>
              </div>
              <div className="col-span-8">
                <p className="text-secondary leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 