import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <h4 className="text-indigo-600 font-semibold mt-1">
                      {item.organization}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                    <p className="text-gray-600 mt-3">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10">
                  {item.category === "work" ? (
                    <Briefcase stroke="#fff"/>
                  ) : item.category === "education" ? (
                    <GraduationCap stroke="#fff"/>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow"
                    ></motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
