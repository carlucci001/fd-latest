import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Layout } from 'lucide-react';

const WebApplications = () => {
  return (
    <ServicePage
      title="Web Application Development"
      description="Create powerful, scalable web applications that transform your business operations"
      icon={Layout}
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Streamline business processes and workflows",
        "Improve operational efficiency and productivity",
        "Enable real-time collaboration and data access",
        "Reduce operational costs through automation",
        "Scale your business with cloud-based solutions",
        "Access your application anywhere, anytime"
      ]}
      features={[
        "Custom application architecture",
        "Real-time data processing",
        "User authentication and authorization",
        "Cloud integration and deployment",
        "API development and integration",
        "Database design and optimization",
        "Automated testing and quality assurance",
        "Performance monitoring and optimization",
        "Scalable infrastructure setup"
      ]}
      process={{
        title: "Web Application Development Process",
        steps: [
          {
            title: "Requirements Gathering",
            description: "We work closely with you to understand your business processes and application requirements."
          },
          {
            title: "Architecture Design",
            description: "Our architects design a scalable, secure application architecture that meets your needs."
          },
          {
            title: "UI/UX Design",
            description: "We create intuitive interfaces that maximize user productivity and satisfaction."
          },
          {
            title: "Development",
            description: "Our team implements the application using modern technologies and best practices."
          },
          {
            title: "Testing & Deployment",
            description: "Comprehensive testing ensures reliability, followed by careful deployment and monitoring."
          }
        ]
      }}
      technologies={[
        "React",
        "Angular",
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes"
      ]}
      caseStudies={[
        {
          title: "Enterprise Resource Planning System",
          description: "Developed a comprehensive ERP system for a manufacturing company",
          results: [
            "40% reduction in processing time",
            "60% improvement in resource allocation",
            "90% reduction in manual data entry",
            "100% data accuracy achievement"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Project Management Platform",
          description: "Built a custom project management solution for a construction firm",
          results: [
            "50% increase in project completion rate",
            "75% reduction in communication delays",
            "30% cost savings in project management",
            "95% user adoption rate"
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default WebApplications;
