import React from 'react';
import ServicePage from '@/components/ServicePage';
import { ShoppingCart } from 'lucide-react';

const Ecommerce = () => {
  return (
    <ServicePage
      title="E-commerce Solutions"
      description="Build powerful, scalable online stores that drive sales and deliver exceptional shopping experiences"
      icon={ShoppingCart}
      backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Increase online sales with optimized conversion funnels",
        "Seamless shopping experience across all devices",
        "Secure payment processing and order management",
        "Real-time inventory tracking and management",
        "Advanced analytics and sales reporting",
        "Automated order fulfillment workflows"
      ]}
      features={[
        "Custom e-commerce platform development",
        "Product catalog and inventory management",
        "Secure payment gateway integration",
        "Multi-currency and multi-language support",
        "Advanced search and filtering options",
        "Customer account management",
        "Order tracking and management",
        "Automated email notifications",
        "Analytics and reporting dashboard"
      ]}
      process={{
        title: "E-commerce Development Process",
        steps: [
          {
            title: "Requirements Analysis",
            description: "We analyze your business needs, target market, and product requirements to create a comprehensive e-commerce strategy."
          },
          {
            title: "Platform Selection",
            description: "Based on your needs, we choose the most suitable e-commerce platform or develop a custom solution."
          },
          {
            title: "Design & UX",
            description: "Our team creates an intuitive, conversion-optimized design that showcases your products effectively."
          },
          {
            title: "Development & Integration",
            description: "We implement all features, integrate payment gateways, and ensure secure, efficient operation."
          },
          {
            title: "Testing & Launch",
            description: "Rigorous testing of all functions, followed by a carefully planned launch process."
          }
        ]
      }}
      technologies={[
        "Shopify",
        "WooCommerce",
        "Magento",
        "React",
        "Node.js",
        "Stripe",
        "PayPal",
        "AWS"
      ]}
      caseStudies={[
        {
          title: "Fashion Retailer Online Store",
          description: "Developed a high-performance e-commerce platform for a growing fashion brand",
          results: [
            "300% increase in online sales",
            "50% reduction in cart abandonment",
            "75% increase in mobile conversions",
            "95% positive customer feedback"
          ],
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Multi-vendor Marketplace",
          description: "Built a scalable marketplace platform supporting multiple vendors and products",
          results: [
            "1000+ active vendors onboarded",
            "200% growth in monthly transactions",
            "60% reduction in operational costs",
            "99.9% platform uptime"
          ],
          image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default Ecommerce;
