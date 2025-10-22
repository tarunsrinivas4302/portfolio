import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  category: string; // "work" | "education"
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  const workItems = items.filter((item) => item.category === "work");
  const educationItems = items.filter((item) => item.category === "education");

  return (
    <section id="experience" className="relative py-28 bg-[#0A0A0F]">
      {/* background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3a7cff33,transparent_60%),radial-gradient(circle_at_80%_70%,#ff3ab466,transparent_60%)] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-16"
        >
          {title}
        </motion.h2>

      

        {/* Work timeline */}
        {workItems.length > 0 && (
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full rounded-full" />
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-20 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <motion.div className="bg-[#111118]/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <h4 className="text-indigo-400 font-semibold mt-1">{item.organization}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.date}</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg z-10">
                  <Briefcase className="text-white w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

        {/* Education block */}
        {educationItems.length > 0 && (
          <div className="flex justify-center mb-20">
            <motion.div className="bg-[#111118]/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-xl text-center">
              {educationItems.map((edu, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                  <h4 className="text-indigo-400 font-semibold mt-1">{edu.organization}</h4>
                  <p className="text-gray-400 text-sm mt-1">{edu.date}</p>
                  <p className="text-gray-300 mt-3 leading-relaxed">{edu.description}</p>
                </div>
              ))}
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg mt-6">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
            </motion.div>
          </div>
        )}
    </section>
  );
};

export default Timeline;
