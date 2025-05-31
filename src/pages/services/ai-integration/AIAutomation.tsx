import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Bot } from 'lucide-react';

const AIAutomation = () => {
  return (
    <ServicePage
      title="AI Automation Solutions"
      description="Transform your business operations with intelligent automation powered by artificial intelligence"
      icon={Bot}
      backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Reduce operational costs through intelligent automation",
        "Improve efficiency and productivity",
        "Minimize human error in processes",
        "Scale operations without proportional cost increase",
        "Enhance decision-making with AI-powered insights",
        "Free up human resources for strategic tasks"
      ]}
      features={[
        "Intelligent process automation",
        "Document processing and analysis",
        "Workflow optimization",
        "Decision support systems",
        "Automated quality control",
        "Task prioritization and scheduling",
        "Performance monitoring and analytics",
        "Integration with existing systems"
      ]}
      process={{
        title: "AI Automation Implementation Process",
        steps: [
          {
            title: "Process Analysis",
            description: "We analyze your current processes to identify automation opportunities and potential improvements."
          },
          {
            title: "Solution Design",
            description: "Our team designs custom AI automation solutions tailored to your specific needs."
          },
          {
            title: "Development",
            description: "We develop and implement the automation solutions using cutting-edge AI technologies."
          },
          {
            title: "Testing & Optimization",
            description: "Thorough testing ensures reliable automation and optimal performance."
          },
          {
            title: "Deployment & Training",
            description: "We deploy the solution and train your team on its effective use."
          }
        ]
      }}
      technologies={[
        "TensorFlow",
        "Python",
        "RPA Tools",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Process Mining",
        "Workflow Engines"
      ]}
      caseStudies={[
        {
          title: "Document Processing Automation",
          description: "Implemented AI-powered document processing for a financial institution",
          results: [
            "90% reduction in processing time",
            "99.9% accuracy in data extraction",
            "75% cost savings in operations",
            "Zero backlog achievement"
          ],
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Customer Service Automation",
          description: "Developed AI automation for customer service operations",
          results: [
            "24/7 customer support coverage",
            "80% reduction in response time",
            "60% cost savings in support",
            "95% customer satisfaction rate"
          ],
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default AIAutomation;
