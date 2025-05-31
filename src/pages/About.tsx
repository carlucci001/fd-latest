import { Helmet } from 'react-helmet';
import React from 'react';
import { Code, Bot, Database, Cpu, Users, Award, Clock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>About Farrington Development - Technology Innovation Leaders</title>
        <meta name="description" content="Learn about Farrington Development's journey in technology innovation. Discover our expertise in web development, AI integration, and digital transformation." />
        <meta name="keywords" content="technology company, innovation leaders, software development team, AI experts, digital solutions" />
      </Helmet>
      
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Farrington Development</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Pioneering the future of technology through innovative solutions in web development, AI integration, and advanced digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <Code className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">Pushing the boundaries of what's possible with technology.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">Working closely with clients to achieve their digital goals.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">Delivering exceptional quality in every line of code.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimizing solutions for maximum performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
              <Code className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">React, Angular, Vue.js, Node.js</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
              <Bot className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">AI & ML</h3>
              <p className="text-gray-600 dark:text-gray-300">TensorFlow, PyTorch, OpenAI</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
              <Database className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Databases</h3>
              <p className="text-gray-600 dark:text-gray-300">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
              <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Cloud Services</h3>
              <p className="text-gray-600 dark:text-gray-300">AWS, Azure, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">Let's discuss how our technology solutions can drive your success.</p>
          <Link 
            to="/contact"
            className="bg-white text-primary dark:text-primary-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
