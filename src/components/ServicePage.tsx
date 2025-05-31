import React from 'react';
import { Helmet } from 'react-helmet';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';
import FadeInSection from './FadeInSection';

interface ServicePageProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  backgroundImage?: string;
  benefits: string[];
  features: string[];
  process?: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  technologies?: string[];
  caseStudies?: {
    title: string;
    description: string;
    results: string[];
    image: string;
  }[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  icon: Icon,
  backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
  benefits,
  features,
  process,
  technologies,
  caseStudies
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>{title} | Farrington Development</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {Icon && (
              <div className="flex justify-center mb-6">
                <Icon className="w-16 h-16 text-secondary" />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 dark:text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 dark:text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process Section */}
      {process && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{process.title}</h2>
              <div className="space-y-12">
                {process.steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {technologies && (
        <section className="py-16 bg-gray-50 dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Technologies We Use</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {caseStudies && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{study.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                      <h4 className="font-semibold mb-2 dark:text-white">Key Results:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {study.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-300">Let's discuss how we can help transform your business.</p>
            <Button 
              to="/contact"
              variant="secondary"
              size="lg"
              className="min-w-[200px]"
            >
              Get Your Free Quote
            </Button>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
