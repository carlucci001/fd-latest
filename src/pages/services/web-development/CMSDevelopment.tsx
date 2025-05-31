import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Database } from 'lucide-react';

const CMSDevelopment = () => {
  return (
    <ServicePage
      title="CMS Development Solutions"
      description="Build powerful, customized content management systems that streamline your digital content operations"
      icon={Database}
      backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Simplified content management and publishing workflows",
        "Customized user roles and permissions for enhanced security",
        "Seamless integration with existing business systems",
        "Automated content scheduling and distribution",
        "Improved team collaboration and content governance",
        "Reduced technical overhead for content teams"
      ]}
      features={[
        "Custom CMS architecture and development",
        "Intuitive content editing interfaces",
        "Advanced media management systems",
        "Multi-language and localization support",
        "Version control and content history",
        "Workflow automation and approval processes",
        "SEO tools and optimization features",
        "Analytics and performance tracking",
        "API-first architecture for headless deployment"
      ]}
      process={{
        title: "CMS Development Process",
        steps: [
          {
            title: "Requirements Analysis",
            description: "We analyze your content management needs, workflow requirements, and user roles to design the perfect CMS solution."
          },
          {
            title: "Architecture Planning",
            description: "Our team designs a scalable CMS architecture that accommodates your current and future content needs."
          },
          {
            title: "Interface Design",
            description: "We create intuitive interfaces that make content management efficient and enjoyable for your team."
          },
          {
            title: "Development & Integration",
            description: "The CMS is built with modern technologies and integrated with your existing systems and workflows."
          },
          {
            title: "Training & Deployment",
            description: "We provide comprehensive training and ensure a smooth transition to the new CMS platform."
          }
        ]
      }}
      technologies={[
        "WordPress",
        "Drupal",
        "Strapi",
        "Contentful",
        "React",
        "Node.js",
        "GraphQL",
        "PostgreSQL"
      ]}
      caseStudies={[
        {
          title: "Enterprise Media Platform",
          description: "Developed a custom CMS for a major media organization managing thousands of articles daily",
          results: [
            "70% reduction in content publishing time",
            "85% improvement in workflow efficiency",
            "50% decrease in technical support requests",
            "99.9% system uptime achievement"
          ],
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Multi-brand Retail CMS",
          description: "Built a centralized CMS platform managing content for multiple retail brands",
          results: [
            "60% reduction in content management costs",
            "40% increase in content production speed",
            "90% user satisfaction rate",
            "100% brand consistency across platforms"
          ],
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default CMSDevelopment;
