import React, { useState } from 'react';
import { ArrowRight, Code, Bot, Database, Cloud, Globe, Blocks, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteFormPopup from '../components/QuoteFormPopup';
import { Helmet } from 'react-helmet';

const Projects = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>Project Portfolio - Success Stories | Farrington Development</title>
        <meta name="description" content="Explore our portfolio of successful technology projects. See how we've helped businesses transform through web development, AI integration, and digital solutions." />
        <meta name="keywords" content="technology projects, case studies, web development portfolio, AI solutions, digital transformation success stories" />
      </Helmet>

      <QuoteFormPopup isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />

      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Portfolio</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Explore our showcase of innovative solutions that have transformed businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* AI-Powered Analytics Platform */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="AI Analytics Dashboard"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">AI & Analytics</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">AI-Powered Analytics Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Developed a comprehensive analytics platform using advanced AI algorithms to process and analyze large datasets, providing actionable insights for business decision-making.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React</span>
                </div>
                <Link to="/contact" className="text-secondary font-semibold flex items-center hover:text-secondary-600">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Enterprise CRM System */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="CRM Dashboard"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">CRM Solutions</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Enterprise CRM System</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built a custom CRM solution that streamlined customer relationship management, automated workflows, and increased sales efficiency by 45%.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Redis</span>
                </div>
                <Link to="/contact" className="text-secondary font-semibold flex items-center hover:text-secondary-600">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* E-commerce Platform */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">E-commerce</span>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Modern E-commerce Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Developed a scalable e-commerce solution with advanced features and seamless payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Stripe</span>
                </div>
                <Link to="/contact" className="text-secondary font-semibold flex items-center hover:text-secondary-600">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* IoT Management System */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="IoT Dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Blocks className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">IoT</span>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">IoT Management System</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Created a comprehensive IoT platform for real-time device monitoring and management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">AWS IoT</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React</span>
                </div>
                <Link to="/contact" className="text-secondary font-semibold flex items-center hover:text-secondary-600">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Security Solution */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Security Dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Security</span>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Enterprise Security Solution</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Implemented a comprehensive security system with real-time threat detection and response.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">ML</span>
                </div>
                <Link to="/contact" className="text-secondary font-semibold flex items-center hover:text-secondary-600">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Industries We Serve</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our solutions have helped businesses across various sectors achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">E-commerce</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Database className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">Finance</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">Healthcare</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Cloud className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">Technology</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">Let's discuss how we can help bring your vision to life.</p>
          <button 
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-600 transition duration-300 inline-block"
          >
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
