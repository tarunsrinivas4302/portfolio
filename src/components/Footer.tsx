import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const social = [
    { name: 'GitHub', icon: <Github />, href: 'https://github.com/tarunsrinivas4302' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/putchalatarunsrinivas/' },
    { name: 'Email', icon: <Mail />, href: 'mailto:tarun.srinivas4302@gmail.com' },
    { name: 'Phone', icon: <Phone />, href: 'tel:+916309616769' },
    { name: 'Location', icon: <MapPin />, href: '#', text: 'Hyderabad, India' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Tarun Srinivas</h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating impactful web solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                  <span>{item.text || item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Tarun Srinivas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;