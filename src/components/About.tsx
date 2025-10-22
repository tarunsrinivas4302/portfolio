import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-[#0A0A0F] text-gray-300"
    >
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3a7cff33,transparent_60%),radial-gradient(circle_at_80%_70%,#ff3ab466,transparent_60%)] animate-pulse-slow"></div>

      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(58,124,255,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,58,180,0.15),transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Profile Image with Glow Border */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-[3px] border-transparent bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[3px]"
              whileHover={{
                scale: 1.05,
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <div className="rounded-full overflow-hidden w-full h-full bg-[#0A0A0F]">
                <img
                  src="/profile.jpg"
                  alt="Tarun Srinivas"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </motion.div>

            {/* Floating sparkles */}
            <motion.div
              className="absolute -bottom-8 right-8 text-pink-400/60"
              animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Sparkles size={24} />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              About Me
            </h2>

            <motion.p
              className="text-lg leading-relaxed text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I’m{" "}
              <span className="font-semibold text-white">Tarun Srinivas</span>, a{" "}
              <span className="text-blue-400">Full Stack Developer</span> with
              over <span className="text-purple-400">2 years</span> of hands-on
              experience building modern, scalable, and user-focused web
              applications. I specialize in crafting seamless user interfaces
              and performant backend architectures using{" "}
              <span className="text-pink-400">
                React, NestJS, and modern cloud technologies.
              </span>
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I thrive on bridging design and logic — transforming complex ideas
              into elegant, functional systems. My focus lies in{" "}
              <span className="text-blue-400">performance, scalability</span>,
              and crafting{" "}
              <span className="text-purple-400">beautiful user experiences</span>{" "}
              that inspire. I’m constantly exploring emerging technologies and
              AI-driven development to stay ahead of the curve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <button
                onClick={() =>
                  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-transform hover:-translate-y-1"
              >
                Explore My Skills →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
