import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Calculator, Clock, Package, FileText, DollarSign, Bot, Code, Search, TrendingUp, Users } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';

interface ServiceRate {
  perMinute: number;
  per15Minutes: number;
  per30Minutes: number;
  per60Minutes: number;
}

interface Package {
  name: string;
  hours: number;
  price: number;
  description: string;
}

const Consult = () => {
  const [selectedService, setSelectedService] = useState('ai-agency');
  const [selectedTimeOption, setSelectedTimeOption] = useState('60');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [hours, setHours] = useState(1);
  const [notes, setNotes] = useState('');
  const [calculatedRate, setCalculatedRate] = useState(0);

  const services = {
    'ai-agency': {
      name: 'AI Agency',
      icon: Bot,
      description: 'Advanced AI integration and automation solutions',
      rates: {
        perMinute: 5,
        per15Minutes: 65,
        per30Minutes: 120,
        per60Minutes: 225
      },
      packages: [
        { name: 'Starter', hours: 10, price: 2000, description: 'Basic AI consultation and strategy' },
        { name: 'Professional', hours: 25, price: 4500, description: 'Comprehensive AI implementation' },
        { name: 'Enterprise', hours: 50, price: 8000, description: 'Full AI transformation package' }
      ]
    },
    'it-consultant': {
      name: 'IT Consultant',
      icon: Users,
      description: 'Technology strategy and infrastructure consulting',
      rates: {
        perMinute: 3,
        per15Minutes: 40,
        per30Minutes: 75,
        per60Minutes: 140
      },
      packages: [
        { name: 'Basic', hours: 10, price: 1200, description: 'IT assessment and recommendations' },
        { name: 'Standard', hours: 25, price: 2800, description: 'Complete IT strategy development' },
        { name: 'Premium', hours: 50, price: 5000, description: 'Full IT transformation support' }
      ]
    },
    'web-developer': {
      name: 'Web Developer',
      icon: Code,
      description: 'Custom web development and technical consulting',
      rates: {
        perMinute: 2.5,
        per15Minutes: 35,
        per30Minutes: 65,
        per60Minutes: 120
      },
      packages: [
        { name: 'Starter', hours: 10, price: 1000, description: 'Basic web development consulting' },
        { name: 'Growth', hours: 25, price: 2400, description: 'Full website development support' },
        { name: 'Scale', hours: 50, price: 4500, description: 'Enterprise web solutions' }
      ]
    },
    'seo-expert': {
      name: 'SEO Expert',
      icon: Search,
      description: 'Search engine optimization and digital visibility',
      rates: {
        perMinute: 2,
        per15Minutes: 28,
        per30Minutes: 52,
        per60Minutes: 95
      },
      packages: [
        { name: 'Audit', hours: 10, price: 850, description: 'Comprehensive SEO audit' },
        { name: 'Optimization', hours: 25, price: 2000, description: 'Full SEO implementation' },
        { name: 'Authority', hours: 50, price: 3500, description: 'Complete SEO transformation' }
      ]
    },
    'marketing-expert': {
      name: 'Marketing Expert',
      icon: TrendingUp,
      description: 'Digital marketing strategy and campaign management',
      rates: {
        perMinute: 2.5,
        per15Minutes: 35,
        per30Minutes: 65,
        per60Minutes: 120
      },
      packages: [
        { name: 'Launch', hours: 10, price: 1000, description: 'Marketing strategy development' },
        { name: 'Growth', hours: 25, price: 2400, description: 'Full marketing campaign management' },
        { name: 'Dominate', hours: 50, price: 4500, description: 'Comprehensive marketing transformation' }
      ]
    }
  };

  const currentService = services[selectedService as keyof typeof services];

  useEffect(() => {
    calculateRate();
  }, [selectedService, selectedTimeOption, selectedPackage, hours]);

  const calculateRate = () => {
    if (selectedPackage) {
      const pkg = currentService.packages.find(p => p.name === selectedPackage);
      setCalculatedRate(pkg ? pkg.price : 0);
    } else {
      const rates = currentService.rates;
      let rate = 0;
      
      switch (selectedTimeOption) {
        case '1':
          rate = rates.perMinute * hours * 60;
          break;
        case '15':
          rate = rates.per15Minutes * (hours * 4);
          break;
        case '30':
          rate = rates.per30Minutes * (hours * 2);
          break;
        case '60':
          rate = rates.per60Minutes * hours;
          break;
      }
      
      setCalculatedRate(rate);
    }
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    const pkg = currentService.packages.find(p => p.name === packageName);
    if (pkg) {
      setHours(pkg.hours);
    }
  };

  const handleTimeOptionSelect = (option: string) => {
    setSelectedTimeOption(option);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>Consulting Services - Expert Technology Consultation | Farrington Development</title>
        <meta name="description" content="Get expert consulting services for AI, IT, web development, SEO, and marketing. Flexible rates and packages available." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Consulting Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Get personalized guidance from our team of experts. Choose your service, select your preferred billing option, and let's transform your business together.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <Calculator className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Consulting Rate Calculator</h2>
              </div>

              {/* Service Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Select Service Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {Object.entries(services).map(([key, service]) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedService(key)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedService === key
                            ? 'border-secondary bg-secondary/10 dark:bg-secondary/20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
                        }`}
                      >
                        <Icon className="w-8 h-8 mx-auto mb-2 text-secondary" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</div>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{currentService.description}</p>
              </div>

              {/* Time Options */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Billing Options</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => handleTimeOptionSelect('1')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTimeOption === '1' && !selectedPackage
                        ? 'border-secondary bg-secondary/10 dark:bg-secondary/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
                    }`}
                  >
                    <Clock className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Per Minute</div>
                    <div className="text-lg font-bold text-secondary">${currentService.rates.perMinute}/min</div>
                  </button>
                  <button
                    onClick={() => handleTimeOptionSelect('15')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTimeOption === '15' && !selectedPackage
                        ? 'border-secondary bg-secondary/10 dark:bg-secondary/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
                    }`}
                  >
                    <Clock className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">15 Minutes</div>
                    <div className="text-lg font-bold text-secondary">${currentService.rates.per15Minutes}</div>
                  </button>
                  <button
                    onClick={() => handleTimeOptionSelect('30')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTimeOption === '30' && !selectedPackage
                        ? 'border-secondary bg-secondary/10 dark:bg-secondary/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
                    }`}
                  >
                    <Clock className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">30 Minutes</div>
                    <div className="text-lg font-bold text-secondary">${currentService.rates.per30Minutes}</div>
                  </button>
                  <button
                    onClick={() => handleTimeOptionSelect('60')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTimeOption === '60' && !selectedPackage
                        ? 'border-secondary bg-secondary/10 dark:bg-secondary/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
                    }`}
                  >
                    <Clock className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">60 Minutes</div>
                    <div className="text-lg font-bold text-secondary">${currentService.rates.per60Minutes}</div>
                  </button>
                </div>
              </div>

              {/* Packages */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  <Package className="inline w-5 h-5 mr-2 text-secondary" />
                  Package Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentService.packages.map((pkg) => (
                    <button
                      key={pkg.name}
                      onClick={() => handlePackageSelect(pkg.name)}
                      className={`p-6 rounded-lg border-2 transition-all text-left ${
                        selectedPackage === pkg.name
                          ? 'border-secondary bg-secondary/10 dark:bg-secondary/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-secondary/50'
                      }`}
                    >
                      <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{pkg.name}</div>
                      <div className="text-2xl font-bold text-secondary mb-2">${pkg.price}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{pkg.hours} hours included</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{pkg.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours Selection (if not package) */}
              {!selectedPackage && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Number of Hours</h3>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <input
                      type="number"
                      min="1"
                      max="40"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value) || 1)}
                      className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    />
                    <span className="text-gray-600 dark:text-gray-400">hours</span>
                  </div>
                </div>
              )}

              {/* Notes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  <FileText className="inline w-5 h-5 mr-2 text-secondary" />
                  Project Notes
                </h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your project requirements, goals, and any specific areas you'd like to focus on..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              {/* Total Calculation */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Estimated Total</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedPackage ? `${currentService.packages.find(p => p.name === selectedPackage)?.hours} hours` : `${hours} hour${hours > 1 ? 's' : ''}`} of {currentService.name} consulting
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-secondary flex items-center">
                      <DollarSign className="w-8 h-8" />
                      {calculatedRate.toLocaleString()}
                    </div>
                    {!selectedPackage && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedTimeOption === '1' && 'Billed per minute'}
                        {selectedTimeOption === '15' && 'Billed per 15 minutes'}
                        {selectedTimeOption === '30' && 'Billed per 30 minutes'}
                        {selectedTimeOption === '60' && 'Billed per hour'}
                      </p>
                    )}
                  </div>
                </div>
                <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </FadeInSection>

          {/* Additional Information */}
          <FadeInSection delay={2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <Clock className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Flexible Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Book consultations that fit your schedule. Available for both one-time sessions and ongoing support.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <Users className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expert Guidance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Work directly with industry experts who have years of experience in their respective fields.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <FileText className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Detailed Reports</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive comprehensive documentation and actionable recommendations after each consultation.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Consult;
