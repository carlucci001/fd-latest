import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Database } from 'lucide-react';

const CustomCRM = () => {
  return (
    <ServicePage
      title="Custom CRM Solutions"
      description="Build tailored customer relationship management systems that perfectly match your business processes"
      icon={Database}
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Streamline customer relationship management",
        "Automate repetitive tasks and workflows",
        "Improve team collaboration and efficiency",
        "Enhance customer data organization",
        "Generate actionable business insights",
        "Scale your customer operations seamlessly"
      ]}
      features={[
        "Customized CRM architecture",
        "Automated workflow management",
        "Contact and lead management",
        "Sales pipeline tracking",
        "Email integration and automation",
        "Custom reporting and analytics",
        "Mobile access and responsiveness",
        "Third-party integrations"
      ]}
      process={{
        title: "Custom CRM Development Process",
        steps: [
          {
            title: "Requirements Analysis",
            description: "We analyze your business processes and CRM needs to design the perfect solution."
          },
          {
            title: "System Design",
            description: "Our team creates a detailed system design that aligns with your workflow."
          },
          {
            title: "Development",
            description: "We build your custom CRM using modern technologies and best practices."
          },
          {
            title: "Data Migration",
            description: "Careful migration of your existing customer data to the new system."
          },
          {
            title: "Training & Support",
            description: "Comprehensive training and ongoing support for your team."
          }
        ]
      }}
      technologies={[
        "Node.js",
        "React",
        "PostgreSQL",
        "Redis",
        "GraphQL",
        "Docker",
        "AWS/Azure",
        "REST APIs"
      ]}
      caseStudies={[
        {
          title: "Real Estate CRM Platform",
          description: "Developed a custom CRM for a growing real estate agency",
          results: [
            "50% increase in lead conversion",
            "75% reduction in manual data entry",
            "30% improvement in agent productivity",
            "95% user adoption rate"
          ],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Sales Team CRM",
          description: "Built a specialized CRM for a B2B sales organization",
          results: [
            "40% increase in sales efficiency",
            "60% faster deal closure time",
            "85% improvement in data accuracy",
            "100% mobile accessibility"
          ],
          image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default CustomCRM;
