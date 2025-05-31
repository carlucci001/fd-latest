import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Zap } from 'lucide-react';

const SalesAutomation = () => {
  return (
    <ServicePage
      title="Sales Automation Solutions"
      description="Streamline your sales processes with intelligent automation that drives efficiency and growth"
      icon={Zap}
      backgroundImage="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Accelerate sales cycles and close deals faster",
        "Eliminate manual data entry and repetitive tasks",
        "Improve lead qualification and scoring",
        "Enhance sales team productivity",
        "Increase accuracy in sales forecasting",
        "Standardize sales processes across teams"
      ]}
      features={[
        "Lead capture and distribution automation",
        "Email sequence automation",
        "Sales pipeline automation",
        "Quote and proposal automation",
        "Follow-up task automation",
        "Performance tracking and reporting",
        "Integration with existing tools",
        "Mobile sales automation"
      ]}
      process={{
        title: "Sales Automation Implementation",
        steps: [
          {
            title: "Process Analysis",
            description: "We analyze your current sales processes to identify automation opportunities."
          },
          {
            title: "Automation Design",
            description: "Our team designs automated workflows that optimize your sales process."
          },
          {
            title: "Implementation",
            description: "We implement the automation solutions and integrate with your existing systems."
          },
          {
            title: "Testing",
            description: "Thorough testing ensures reliable automation and smooth operation."
          },
          {
            title: "Training & Optimization",
            description: "We train your team and continuously optimize the automation for best results."
          }
        ]
      }}
      technologies={[
        "Zapier",
        "Node.js",
        "Python",
        "REST APIs",
        "Email APIs",
        "CRM APIs",
        "Machine Learning",
        "Cloud Services"
      ]}
      caseStudies={[
        {
          title: "B2B Sales Automation",
          description: "Implemented comprehensive sales automation for a B2B company",
          results: [
            "70% reduction in manual tasks",
            "45% increase in sales productivity",
            "60% faster lead response time",
            "35% increase in close rates"
          ],
          image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Enterprise Sales Pipeline",
          description: "Automated enterprise sales processes for a technology company",
          results: [
            "50% reduction in sales cycle",
            "80% improvement in lead qualification",
            "40% increase in sales revenue",
            "90% team adoption rate"
          ],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default SalesAutomation;
