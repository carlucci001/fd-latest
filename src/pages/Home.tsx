import React from 'react';
import { ArrowRight, Award, Code, Bot, Database, Cpu, Globe, Blocks, Brain, Workflow, Shield, Users2, LineChart, BarChart3, Lightbulb, Rocket, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import AnimatedTitle from '../components/AnimatedTitle';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Farrington Development - Innovative Technology Solutions & AI Integration</title>
        <meta name="description" content="Transform your business with Farrington Development's cutting-edge technology solutions. Expert web development, AI integration, and digital transformation services." />
        <meta name="keywords" content="web development, AI integration, digital transformation, custom software, technology solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        className="h-[80vh] relative bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full flex justify-center">
                <AnimatedTitle className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-primary via-secondary to-primary-300 text-transparent bg-clip-text">
                  Transforming Ideas Into Digital Reality
                </AnimatedTitle>
              </div>
              <FadeInSection delay={5} className="w-full max-w-3xl mx-auto mb-12">
                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                  Transforming businesses with cutting-edge web development, 
                  <span className="text-white font-medium"> AI integration</span>, and 
                  <span className="text-white font-medium"> innovative digital solutions</span>.
                </p>
              </FadeInSection>
              <FadeInSection delay={8} className="flex justify-center items-center space-x-6">
                <Link 
                  to="/contact"
                  className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-secondary-600 transition duration-300 min-w-[200px] shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
                >
                  Get Your Free Quote
                </Link>
                <Button to="/services" variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black">
                  Explore Services
                </Button>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Core Services</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={2} direction="up">
              <div className="bg-gray-900 p-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <Code className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Custom Web Development</h3>
                <p className="text-gray-400 mb-6">
                  Our expert team creates tailored web solutions using cutting-edge technologies. From responsive websites to complex web applications, we deliver solutions that drive results and enhance user experience.
                </p>
                <Button to="/services/web-development/custom-websites" variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">Learn More</Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={4} direction="up">
              <div className="bg-gray-900 p-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <Bot className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">AI Integration</h3>
                <p className="text-gray-400 mb-6">
                  Leverage the power of artificial intelligence to automate processes, gain insights, and enhance decision-making. We implement AI solutions that transform raw data into actionable intelligence.
                </p>
                <Button to="/services/ai-integration/machine-learning" variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">Learn More</Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={6} direction="up">
              <div className="bg-gray-900 p-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <Database className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">CRM Solutions</h3>
                <p className="text-gray-400 mb-6">
                  Streamline your customer relationships with our custom CRM solutions. We build systems that help you manage contacts, track interactions, and improve customer satisfaction.
                </p>
                <Button to="/services/crm-solutions/custom-crm" variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">Learn More</Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Technology Expertise</h2>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeInSection delay={2}>
              <div className="text-center">
                <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Web Technologies</h3>
                <p className="text-gray-400">React, Angular, Vue.js</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={3}>
              <div className="text-center">
                <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">AI & ML</h3>
                <p className="text-gray-400">TensorFlow, PyTorch, OpenAI</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={4}>
              <div className="text-center">
                <Database className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Databases</h3>
                <p className="text-gray-400">SQL, MongoDB, Redis</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={5}>
              <div className="text-center">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Security</h3>
                <p className="text-gray-400">Enterprise-grade protection</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Farrington Development?</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={2} direction="up">
              <div className="bg-gray-900 p-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <Users2 className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Expert Team</h3>
                <p className="text-gray-400">
                  Our team consists of experienced developers, AI specialists, and technology consultants who bring years of industry expertise to every project.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={4} direction="up">
              <div className="bg-gray-900 p-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <Workflow className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Proven Process</h3>
                <p className="text-gray-400">
                  We follow a structured development methodology that ensures transparent communication, timely delivery, and exceptional results.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={6} direction="up">
              <div className="bg-gray-900 p-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <Blocks className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Scalable Solutions</h3>
                <p className="text-gray-400">
                  Our solutions are built to grow with your business, incorporating the latest technologies and best practices for long-term success.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={2}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Integration Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">AI-Powered Analytics</h3>
                  <p className="text-gray-400 mb-4">Transforming data into actionable insights through advanced AI algorithms</p>
                  <Button to="/services/ai-integration/predictive-analytics" variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">Learn More</Button>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={4}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Application"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">Enterprise CRM</h3>
                  <p className="text-gray-400 mb-4">Custom-built relationship management platform with AI integration</p>
                  <Button to="/services/crm-solutions/custom-crm" variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">Learn More</Button>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={6}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">Smart IoT Platform</h3>
                  <p className="text-gray-400 mb-4">Intelligent device management system with real-time analytics</p>
                  <Button to="/services/web-development/web-applications" variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">Learn More</Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <AnimatedTitle className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </AnimatedTitle>
            <p className="text-xl mb-8 text-gray-400">Let's discuss how our technology solutions can drive your success.</p>
            <Link 
              to="/contact"
              className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-secondary-600 transition duration-300 inline-flex items-center shadow-xl hover:shadow-2xl"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
