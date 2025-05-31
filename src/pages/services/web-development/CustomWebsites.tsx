import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Code } from 'lucide-react';

const CustomWebsites = () => {
  return (
    <ServicePage
      title="Custom Website Development"
      description="Create stunning, high-performance websites tailored to your unique business needs"
      icon={Code}
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Unique, branded design that sets you apart from competitors",
        "Optimized performance for faster loading and better user experience",
        "Mobile-first responsive design for all devices",
        "SEO-friendly architecture for better search rankings",
        "Easy content management system integration",
        "Secure, scalable hosting solutions"
      ]}
      features={[
        "Custom UI/UX design tailored to your brand",
        "Responsive layouts that work on all devices",
        "Advanced SEO optimization features",
        "Content Management System (CMS) integration",
        "Performance optimization and caching",
        "Security features and SSL implementation",
        "Analytics and tracking setup",
        "Social media integration",
        "Contact forms and lead capture"
      ]}
      process={{
        title: "Our Development Process",
        steps: [
          {
            title: "Discovery & Planning",
            description: "We begin by understanding your business goals, target audience, and specific requirements to create a comprehensive project plan."
          },
          {
            title: "Design & Wireframing",
            description: "Our designers create detailed wireframes and mockups of your website, ensuring the design aligns with your brand and objectives."
          },
          {
            title: "Development",
            description: "Our developers bring the design to life, implementing all features and functionality while following best practices for performance and security."
          },
          {
            title: "Testing & Quality Assurance",
            description: "Rigorous testing across devices and browsers ensures your website works flawlessly for all users."
          },
          {
            title: "Launch & Support",
            description: "We handle the deployment process and provide ongoing support to ensure your website continues to perform optimally."
          }
        ]
      }}
      technologies={[
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "WordPress",
        "PostgreSQL",
        "AWS/Azure"
      ]}
      caseStudies={[
        {
          title: "E-commerce Website Redesign",
          description: "Transformed an outdated e-commerce website into a modern, high-converting platform",
          results: [
            "150% increase in mobile conversions",
            "40% reduction in page load time",
            "65% increase in organic traffic",
            "85% improvement in user engagement"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Corporate Website Overhaul",
          description: "Modernized a corporate website with improved functionality and user experience",
          results: [
            "200% increase in lead generation",
            "45% decrease in bounce rate",
            "90% positive user feedback",
            "60% increase in page views"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default CustomWebsites;
