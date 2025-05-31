import React from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone, Code, Bot, Database, Cloud, Palette, Home, Info, Briefcase, Phone as PhoneIcon, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import XIcon from './icons/XIcon';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo.png" 
              alt="Farrington Development Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300">Empowering businesses through innovative technology solutions and AI integration.</p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://x.com/carlfarring" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-300 transition-colors"
              >
                <XIcon />
              </a>
              <a 
                href="https://www.facebook.com/farringtondevelopment" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/carl-farrington-9b75415/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-300 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Home className="h-4 w-4 mr-2 text-secondary" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Info className="h-4 w-4 mr-2 text-secondary" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Layout className="h-4 w-4 mr-2 text-secondary" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Briefcase className="h-4 w-4 mr-2 text-secondary" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <PhoneIcon className="h-4 w-4 mr-2 text-secondary" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development/custom-websites" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Code className="h-4 w-4 mr-2 text-secondary" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-integration/machine-learning" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Bot className="h-4 w-4 mr-2 text-secondary" />
                  AI Integration
                </Link>
              </li>
              <li>
                <Link to="/services/crm-solutions/custom-crm" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Database className="h-4 w-4 mr-2 text-secondary" />
                  CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/creative/logo-design" className="text-gray-300 flex items-center hover:text-secondary transition-colors">
                  <Palette className="h-4 w-4 mr-2 text-secondary" />
                  Creative Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                279 Paragon Pkwy. #208<br />
                Clyde, NC 28721
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                (828) 215-5584
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                info@farringtondevelopment.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Farrington Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
