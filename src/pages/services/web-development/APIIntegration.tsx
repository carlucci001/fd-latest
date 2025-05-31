import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Link2 } from 'lucide-react';

const APIIntegration = () => {
  return (
    <ServicePage
      title="API Integration Services"
      description="Connect and streamline your systems with seamless API integration solutions"
      icon={Link2}
      backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Seamless connectivity between systems and applications",
        "Automated data synchronization and workflows",
        "Enhanced operational efficiency and productivity",
        "Real-time data access and updates",
        "Reduced manual data entry and errors",
        "Scalable integration architecture"
      ]}
      features={[
        "Custom API development and integration",
        "RESTful and GraphQL API implementation",
        "Third-party API integration",
        "API security and authentication",
        "Real-time data synchronization",
        "Webhook implementation and management",
        "API documentation and support",
        "Performance monitoring and optimization"
      ]}
      process={{
        title: "API Integration Process",
        steps: [
          {
            title: "Requirements Analysis",
            description: "We analyze your integration needs and identify the best API solutions for your systems."
          },
          {
            title: "Architecture Design",
            description: "Our team designs a scalable integration architecture that ensures reliable connectivity."
          },
          {
            title: "Development",
            description: "We implement the API integrations using modern technologies and best practices."
          },
          {
            title: "Testing & Security",
            description: "Comprehensive testing ensures secure and reliable API operations."
          },
          {
            title: "Deployment & Monitoring",
            description: "We deploy the integration and provide ongoing monitoring and support."
          }
        ]
      }}
      technologies={[
        "REST APIs",
        "GraphQL",
        "Node.js",
        "Python",
        "OAuth",
        "JWT",
        "Swagger/OpenAPI",
        "Postman"
      ]}
      caseStudies={[
        {
          title: "E-commerce Platform Integration",
          description: "Implemented comprehensive API integration for a multi-channel e-commerce platform",
          results: [
            "85% reduction in data sync time",
            "99.9% data accuracy achievement",
            "60% increase in order processing speed",
            "40% reduction in operational costs"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Payment Gateway Integration",
          description: "Developed secure payment API integrations for a financial services provider",
          results: [
            "100% uptime for payment processing",
            "50% faster transaction completion",
            "Zero security incidents",
            "95% customer satisfaction rate"
          ],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "CRM System Integration",
          description: "Created seamless integration between multiple CRM systems and business tools",
          results: [
            "70% improvement in data consistency",
            "45% increase in team productivity",
            "90% reduction in manual data entry",
            "Real-time data synchronization achieved"
          ],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default APIIntegration;
