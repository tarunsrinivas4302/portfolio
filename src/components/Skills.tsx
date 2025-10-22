import { motion } from "framer-motion";
import { Code2, Server, Cloud, Zap, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={24} className="text-indigo-400" />,
    skills: ["React", "Angular", "Redux", "Tailwind", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: <Server size={24} className="text-purple-400" />,
    skills: ["NodeJS", "NestJS", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={24} className="text-pink-400" />,
    skills: ["Docker", "AWS S3", "EC2", "CI/CD", "Git"],
  },
  {
    title: "API & Architecture",
    icon: <Layers size={24} className="text-teal-400" />,
    skills: ["REST", "GraphQL", "WebSockets", "Event Sourcing"],
  },
  {
    title: "Performance & Best Practices",
    icon: <Zap size={24} className="text-yellow-400" />,
    skills: ["Caching", "Microservices", "Scaling", "Monitoring"],
  },
];

const Skills = () => {
  return (
    <section className="relative py-28 bg-gray-900 overflow-hidden snap-start">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-16"
        >
          My Technical Universe
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.5)" }}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-3xl bg-gradient-to-tr from-gray-800/70 to-gray-900/40 border border-gray-700 backdrop-blur-lg text-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">{cat.icon}<h3 className="text-xl font-semibold">{cat.title}</h3></div>
              <ul className="space-y-2 ml-1">
                {cat.skills.map((s, i) => (
                  <motion.li key={i} whileHover={{ x: 6, color: "#a78bfa" }} className="transition-colors cursor-pointer">
                    • {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
