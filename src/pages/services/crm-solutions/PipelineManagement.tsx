import React from 'react';
import ServicePage from '@/components/ServicePage';
import { GitBranch } from 'lucide-react';

const PipelineManagement = () => {
  return (
    <ServicePage
      title="Pipeline Management Solutions"
      description="Optimize your sales pipeline with advanced management tools and insights"
      icon={GitBranch}
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Improve pipeline visibility and forecasting",
        "Streamline deal progression and tracking",
        "Optimize sales resource allocation",
        "Increase win rates and deal velocity",
        "Enhance team collaboration",
        "Make data-driven pipeline decisions"
      ]}
      features={[
        "Visual pipeline management",
        "Deal tracking and scoring",
        "Stage progression automation",
        "Revenue forecasting",
        "Team performance tracking",
        "Pipeline analytics and reporting",
        "Integration with CRM systems",
        "Mobile pipeline management"
      ]}
      process={{
        title: "Pipeline Implementation Process",
        steps: [
          {
            title: "Pipeline Assessment",
            description: "We analyze your current sales pipeline and identify optimization opportunities."
          },
          {
            title: "Process Design",
            description: "Our team designs an optimized pipeline structure and workflow."
          },
          {
            title: "System Setup",
            description: "We implement the pipeline management system and configure automation."
          },
          {
            title: "Integration",
            description: "Seamless integration with your existing CRM and sales tools."
          },
          {
            title: "Training & Optimization",
            description: "Comprehensive training and continuous pipeline optimization."
          }
        ]
      }}
      technologies={[
        "Custom Pipeline Tools",
        "CRM Integration",
        "Analytics Platforms",
        "Automation Tools",
        "Cloud Services",
        "Mobile Apps",
        "API Integration",
        "Reporting Tools"
      ]}
      caseStudies={[
        {
          title: "Enterprise Sales Pipeline",
          description: "Optimized sales pipeline for a large enterprise company",
          results: [
            "40% increase in pipeline velocity",
            "30% improvement in win rates",
            "50% better forecast accuracy",
            "25% increase in deal size"
          ],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "B2B Pipeline Management",
          description: "Implemented pipeline management for a B2B sales team",
          results: [
            "60% faster deal progression",
            "45% increase in team productivity",
            "35% improvement in close rates",
            "90% pipeline visibility"
          ],
          image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default PipelineManagement;
