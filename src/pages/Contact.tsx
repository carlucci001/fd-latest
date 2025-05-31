import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import QuoteFormPopup from '../components/QuoteFormPopup';

const Contact = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-development',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.custom((t) => (
          <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <CheckCircle className="h-10 w-10 text-secondary" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Message Sent Successfully
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Thank you for contacting Farrington Development. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ), { duration: 5000 });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'web-development',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>Contact Farrington Development - Get Expert Technology Solutions</title>
        <meta name="description" content="Contact Farrington Development for expert technology solutions. Get in touch for web development, AI integration, and digital transformation services." />
        <meta name="keywords" content="contact technology company, web development consultation, AI integration services, digital solutions contact" />
      </Helmet>

      <QuoteFormPopup isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
      <Toaster position="top-center" />

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Farrington Development</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100">
              Ready to transform your business? We're here to help you achieve your technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:text-white"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="crm-solutions">CRM Solutions</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="digital-transformation">Digital Transformation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-secondary text-white px-6 py-3 rounded-md font-semibold transition duration-300 ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:bg-secondary-600'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg dark:text-white">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      279 Paragon Pkwy. #208<br />
                      Clyde, NC 28721
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">(828) 215-5584</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@farringtondevelopment.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg dark:text-white">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-semibold ml-3 dark:text-white">Quick Response Promise</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  We aim to respond to all inquiries within 24 hours during business days. Your project is important to us, and we're committed to providing timely and professional assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">What is your typical project timeline?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Project timelines vary depending on scope and complexity. We provide detailed timelines during our initial consultation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Do you offer ongoing support?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we provide comprehensive maintenance and support packages to ensure your solution continues to perform optimally.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">What are your payment terms?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer flexible payment schedules based on project milestones. Details are discussed during the proposal phase.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Do you sign NDAs?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we're happy to sign NDAs to protect your intellectual property and ensure confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add a button to open quote form */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Quick Quote?</h2>
          <p className="text-xl mb-8 text-gray-300">Get an instant quote for your project requirements.</p>
          <button 
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-secondary-600 transition duration-300 inline-block"
          >
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
