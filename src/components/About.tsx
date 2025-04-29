import { motion } from "framer-motion";
// import { Code2, Palette, Globe2, Database, Terminal, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative rounded-full  object-cover  shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello, I'm Tarun Srinivas! I’m a Junior Software Developer with Over 2 years 
              of hands-on experience in building dynamic,
              user-friendly web applications. My expertise lies in crafting
              seamless UI experiences with modern technologies like React, HTML,
              CSS, and JavaScript, while also maintaining a solid understanding
              of backend development to create robust and scalable solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed ">
              I thrive in bridging the gap between design and functionality,
              ensuring that every product I work on is not just visually
              appealing but also efficient and reliable. With a passion for
              learning and a dedication to delivering high-quality solutions,
              I’m always eager to take on new challenges and contribute to
              innovative projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
