import { motion } from "framer-motion";
import {
  Palette,
  Database,
  Terminal,
  Globe,
  Server,
  Code,
  MemoryStick,
} from "lucide-react";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  const groupedSkills = Object.groupBy(
    skillsData,
    (item: { name: string; category: string }) => item.category
  );

  const IconMap = {
    Frontend: <Globe style={{ stroke: "#4f46e5" }} />,
    Backend: <Server style={{ stroke: "#4f46e5" }} />,
    Tools: <MemoryStick style={{ stroke: "#4f46e5" }} />,
    Languages: <Code style={{ stroke: "#4f46e5" }} />,
    Design: <Palette style={{ stroke: "#4f46e5" }} />,
    Databases: <Database style={{ stroke: "#4f46e5" }} />,
    Servers: <Server style={{ stroke: "#4f46e5" }} />,
    DevOps: <Terminal style={{ stroke: "#4f46e5" }} />,
  };
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800  mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6 ">
                {IconMap[category as keyof typeof IconMap]}{" "}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category}
              </h3>
              <div className="flex w-full  px-2 space-x-4">
                <ul className="space-y-4">
                  {skills.map((skill: { name: string }) => (
                    <li
                      className="inline-block mx-2.5 bg-gray-200 p-2 text-xs rounded-full"
                      key={skill.name}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
