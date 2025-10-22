import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const social = [
    { icon: <Github />, href: "https://github.com/tarunsrinivas4302" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/putchalatarunsrinivas/" },
    { icon: <Mail />, href: "mailto:tarun.srinivas4302@gmail.com" },
    { icon: <Phone />, href: "tel:+916309616769" },
    { icon: <MapPin />, href: "#" },
  ];

  return (
    <footer className="bg-[#0A0A0F] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Tarun Srinivas
          </h3>
          <div className="flex gap-6">
            {social.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Tarun Srinivas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
