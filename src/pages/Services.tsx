import React from 'react';
import { Helmet } from 'react-helmet';
import { Code, Bot, Database, Cloud, Brain, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';

const Services = () => {
  const serviceCategories = [
    {
      title: "Web Development",
      icon: Code,
      description: "Custom web solutions built with modern technologies",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      services: [
        {
          name: "Custom Websites",
          description: "Tailored web solutions that perfectly match your brand",
          link: "/services/web-development/custom-websites",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "E-commerce",
          description: "Powerful online stores with seamless shopping experiences",
          link: "/services/web-development/ecommerce",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Web Applications",
          description: "Scalable and robust web applications for your business",
          link: "/services/web-development/web-applications",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "AI Integration",
      icon: Bot,
      description: "Cutting-edge AI solutions for business automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      services: [
        {
          name: "Machine Learning",
          description: "Custom ML models for predictive analytics and automation",
          link: "/services/ai-integration/machine-learning",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Natural Language Processing",
          description: "Advanced text analysis and language understanding",
          link: "/services/ai-integration/nlp",
          image: "https://images.unsplash.com/photo-1677442136494-07c85e80b935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Computer Vision",
          description: "Visual data analysis and automated image processing",
          link: "/services/ai-integration/computer-vision",
          image: "https://images.unsplash.com/photo-1677442136744-30231bd3a8fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "CRM Solutions",
      icon: Database,
      description: "Comprehensive customer relationship management systems",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      services: [
        {
          name: "Custom CRM",
          description: "Tailored CRM solutions for your business needs",
          link: "/services/crm-solutions/custom-crm",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sales Automation",
          description: "Streamline your sales processes with automation",
          link: "/services/crm-solutions/sales-automation",
          image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Customer Analytics",
          description: "Deep insights into customer behavior and trends",
          link: "/services/crm-solutions/customer-analytics",
          image: "https://images.unsplash.com/photo-1552664688-1496f8a2d3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Cloud Services",
      icon: Cloud,
      description: "Scalable cloud solutions for modern businesses",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      services: [
        {
          name: "Cloud Migration",
          description: "Seamless transition to cloud infrastructure",
          link: "/services/cloud-services/cloud-migration",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "AWS Solutions",
          description: "Expert AWS implementation and management",
          link: "/services/cloud-services/aws-solutions",
          image: "https://images.unsplash.com/photo-1451187580460-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Azure Services",
          description: "Comprehensive Azure cloud solutions",
          link: "/services/cloud-services/azure-services",
          image: "https://images.unsplash.com/photo-1451187580461-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Creative Services",
      icon: Palette,
      description: "Professional creative design solutions",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      services: [
        {
          name: "Logo Design",
          description: "Professional brand identity design",
          link: "/services/creative/logo-design",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Video Production",
          description: "High-quality video content creation",
          link: "/services/creative/video-production",
          image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Digital Art",
          description: "Custom digital artwork and illustrations",
          link: "/services/creative/digital-art",
          image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>Our Services - Comprehensive Technology Solutions | Farrington Development</title>
        <meta name="description" content="Explore our comprehensive range of technology services including web development, AI integration, CRM solutions, cloud services, and creative design." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Comprehensive technology solutions to drive your business forward. From web development to AI integration, we deliver innovation that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <FadeInSection key={category.title} delay={index * 2}>
              <div className="mb-24">
                <div className="flex items-center mb-8">
                  <category.icon className="w-8 h-8 text-secondary mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{category.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <Link 
                      key={service.name}
                      to={service.link}
                      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-secondary transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                        <div className="flex items-center text-secondary">
                          <span className="text-sm font-semibold">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">Let's discuss how our services can drive your success.</p>
          <Link 
            to="/contact"
            className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-secondary-600 transition duration-300 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
