import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Code, Bot, Database, Blocks, Brain, Palette, Video, Image, PenTool, Users } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import QuoteFormPopup from './QuoteFormPopup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const megaMenuContent = {
    'Web Development': {
      icon: Code,
      items: [
        { name: 'Custom Websites', path: '/services/web-development/custom-websites' },
        { name: 'E-commerce', path: '/services/web-development/ecommerce' },
        { name: 'Web Applications', path: '/services/web-development/web-applications' },
        { name: 'CMS Development', path: '/services/web-development/cms-development' },
        { name: 'API Integration', path: '/services/web-development/api-integration' }
      ]
    },
    'AI Integration': {
      icon: Bot,
      items: [
        { name: 'Machine Learning', path: '/services/ai-integration/machine-learning' },
        { name: 'Natural Language Processing', path: '/services/ai-integration/nlp' },
        { name: 'Computer Vision', path: '/services/ai-integration/computer-vision' },
        { name: 'Predictive Analytics', path: '/services/ai-integration/predictive-analytics' },
        { name: 'AI Automation', path: '/services/ai-integration/ai-automation' }
      ]
    },
    'CRM Solutions': {
      icon: Database,
      items: [
        { name: 'Custom CRM', path: '/services/crm-solutions/custom-crm' },
        { name: 'Sales Automation', path: '/services/crm-solutions/sales-automation' },
        { name: 'Customer Analytics', path: '/services/crm-solutions/customer-analytics' },
        { name: 'Pipeline Management', path: '/services/crm-solutions/pipeline-management' },
        { name: 'Reporting Tools', path: '/services/crm-solutions/reporting-tools' }
      ]
    },
    'Creative Services': {
      icon: Palette,
      items: [
        { name: 'Logo Design', path: '/services/creative/logo-design' },
        { name: 'Ad Design', path: '/services/creative/ad-design' },
        { name: 'Video Production', path: '/services/creative/video-production' },
        { name: 'Vector Graphics', path: '/services/creative/vector-graphics' },
        { name: 'Digital Art', path: '/services/creative/digital-art' }
      ]
    }
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setShowMegaMenu(false);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 300);
  };

  return (
    <nav className="fixed w-full z-50">
      <QuoteFormPopup isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
      
      {/* Top Bar */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 flex items-center justify-end">
            <a 
              href="tel:+18282155584" 
              className="text-gray-300 hover:text-secondary transition-colors flex items-center text-sm font-bold"
            >
              <Phone className="h-4 w-4 mr-2" />
              (828) 215-5584
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-black shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Farrington Development Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-secondary-300 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-secondary-300 font-medium">
                About
              </Link>
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-secondary-300 font-medium"
                >
                  Services
                </Link>
                
                {/* Mega Menu */}
                {showMegaMenu && (
                  <div 
                    className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-[1200px] bg-gray-900 rounded-lg shadow-xl border border-gray-700"
                    style={{ 
                      maxHeight: 'calc(100vh - 200px)',
                      top: '80px',
                      overflowY: 'auto',
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#4A5568 #1A202C'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                      {Object.entries(megaMenuContent).map(([category, { icon: Icon, items }]) => (
                        <div key={category} className="space-y-4">
                          <div className="flex items-center space-x-2 text-secondary">
                            <Icon className="w-5 h-5" />
                            <h3 className="font-semibold">{category}</h3>
                          </div>
                          <ul className="space-y-2">
                            {items.map((item, i) => (
                              <li key={i}>
                                <button
                                  onClick={() => handleMenuItemClick(item.path)}
                                  className="text-gray-400 hover:text-secondary-300 text-sm block transition-colors text-left w-full py-1 px-2 rounded hover:bg-gray-800"
                                >
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/projects" className="text-gray-300 hover:text-secondary-300 font-medium">
                Projects
              </Link>
              <Link to="/consult" className="text-gray-300 hover:text-secondary-300 font-medium flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Consult
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-secondary-300 font-medium">
                Contact
              </Link>
              <Link 
                to="/contact"
                className="bg-secondary text-white px-4 py-2 rounded-md flex items-center hover:bg-secondary-600 transition duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-secondary-300 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden fixed inset-0 top-[104px] bg-black overflow-y-auto"
            style={{ 
              maxHeight: 'calc(100vh - 104px)',
              scrollbarWidth: 'thin',
              scrollbarColor: '#4A5568 #1A202C'
            }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-300 hover:text-secondary-300 hover:bg-gray-900 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-secondary-300 hover:bg-gray-900 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-4">
                  {Object.entries(megaMenuContent).map(([category, { icon: Icon, items }]) => (
                    <div key={category} className="mb-4">
                      <div className="flex items-center text-secondary mb-2">
                        <Icon className="w-4 h-4 mr-2" />
                        <span className="font-medium">{category}</span>
                      </div>
                      <ul className="pl-6 space-y-2">
                        {items.map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => handleMenuItemClick(item.path)}
                              className="text-gray-400 hover:text-secondary-300 text-sm block py-1 text-left w-full"
                            >
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <Link 
                to="/projects" 
                className="block px-3 py-2 text-gray-300 hover:text-secondary-300 hover:bg-gray-900 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/consult" 
                className="block px-3 py-2 text-gray-300 hover:text-secondary-300 hover:bg-gray-900 rounded-md flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4 mr-2" />
                Consult
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-secondary-300 hover:bg-gray-900 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact"
                className="block w-full px-3 py-2 text-white bg-secondary hover:bg-secondary-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
