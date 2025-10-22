import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0A0A0F] overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3a7cff33,transparent_60%),radial-gradient(circle_at_80%_70%,#ff3ab466,transparent_60%)] animate-pulse-slow"
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
        >
          Tarun Srinivas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Full Stack Developer crafting elegant, performant, and futuristic web applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={handleDownloadCV}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1"
          >
            <Download className="inline mr-2 animate-bounce" />
            Download CV
          </button>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all"
          >
            Explore →
          </a>
        </motion.div>

       
      </div>
         <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
