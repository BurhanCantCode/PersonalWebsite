"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "Burhan is a natural leader, which I noticed from working with him at his first hackathon when he brought an international team of five strangers to work together seamlessly. He's also a voracious learner on everything related to software engineering and machine learning—I can't think of any opportunity to further his education that he hasn't taken. He's done internships for companies in the US, taught himself and others AI and full-stack development, completed a ton of MOOCs and amassed quite a resume of collaborative work and a solid portfolio. And he's just getting started! This is the guy (not AI) who is going to make me obsolete pretty soon.",
    author: "James Murdza",
    role: "Software Engineer",
    date: "October 16, 2024",
    image: "/feedback1.jpg",
    managed: "managed Burhanuddin directly"
  },
  {
    text: "I highly recommend Burhan Khatri for his expertise in Artificial Intelligence (AI) and his work on developing forecasting models. Deep Knowledge of AI: Burhan possesses a strong understanding of various AI techniques and their applications. He can effectively translate complex concepts into practical solutions. Forecasting Expertise: Burhan has a proven track record in developing and implementing forecasting models. His work has demonstrably improved his skills in analytical and critical evaluation of process. Problem-Solving Skills: Burhan excels at identifying and solving complex problems using AI. He can think critically and creatively to develop innovative solutions. Communication Skills: Burhan is an excellent communicator who can effectively explain technical concepts to both technical and non-technical audiences.",
    author: "Syed Muhammad Kashif",
    role: "Digital Media Strategist & Marketer",
    date: "July 31, 2024",
    image: "/feedback2.jpg",
    managed: "worked with Burhanuddin but on different teams"
  },
  {
    text: "I highly recommend Burhan Khatri, who served as an intern at Musewerx. Throughout his internship, Burhan demonstrated strong values, impressive skills, and a remarkable eagerness to learn and excel. He quickly integrated into our team, showcasing an ability to grasp complex concepts and apply them effectively. His proactive attitude and dedication were evident in every task he undertook. Burhan consistently sought feedback to improve his performance, which greatly contributed to our team's productivity. His strong analytical skills, creativity, and attention to detail made him a valuable asset. Burhan's ability to work independently and collaboratively ensured tasks were completed efficiently.",
    author: "Sohail Jalal",
    role: "Chief Executive Officer at Musewerx",
    date: "July 31, 2024",
    image: "/feedback3.jpg",
    managed: "managed Burhanuddin directly"
  }
];

export default function Recommendations() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-16" id="recommendations">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-8 md:mb-16">
          <span className="text-secondary text-xs md:text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
            <span className="text-secondary">See what</span>{" "}
            <span className="text-white">others say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark rounded-xl p-4 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow space-y-4 md:space-y-6">
                  <p className="text-sm md:text-lg text-secondary leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-white">{testimonial.author}</h4>
                      <p className="text-xs md:text-sm text-secondary">{testimonial.role}</p>
                      <p className="text-xs md:text-sm text-secondary italic mt-1">{testimonial.managed}</p>
                    </div>
                    <p className="text-xs md:text-sm text-secondary">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 