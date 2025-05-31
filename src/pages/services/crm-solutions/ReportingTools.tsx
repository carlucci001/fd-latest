import React from 'react';
import ServicePage from '@/components/ServicePage';
import { LineChart } from 'lucide-react';

const ReportingTools = () => {
  return (
    <ServicePage
      title="CRM Reporting Tools"
      description="Gain powerful insights with advanced CRM reporting and analytics tools"
      icon={LineChart}
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Make data-driven business decisions",
        "Track KPIs in real-time",
        "Improve sales and marketing ROI",
        "Enhance team performance monitoring",
        "Identify trends and opportunities",
        "Streamline reporting processes"
      ]}
      features={[
        "Custom dashboard creation",
        "Real-time reporting",
        "Advanced data visualization",
        "Automated report generation",
        "KPI tracking and alerts",
        "Cross-platform analytics",
        "Export and sharing capabilities",
        "Mobile reporting access"
      ]}
      process={{
        title: "Reporting Tools Implementation",
        steps: [
          {
            title: "Requirements Analysis",
            description: "We analyze your reporting needs and define key metrics and KPIs."
          },
          {
            title: "Dashboard Design",
            description: "Our team designs intuitive dashboards and reports for your needs."
          },
          {
            title: "Implementation",
            description: "We implement the reporting tools and connect your data sources."
          },
          {
            title: "Testing & Validation",
            description: "Thorough testing ensures accurate and reliable reporting."
          },
          {
            title: "Training & Support",
            description: "We provide training and ongoing support for your team."
          }
        ]
      }}
      technologies={[
        "Power BI",
        "Tableau",
        "Custom Dashboards",
        "SQL",
        "Python",
        "R",
        "D3.js",
        "REST APIs"
      ]}
      caseStudies={[
        {
          title: "Sales Analytics Platform",
          description: "Implemented comprehensive sales reporting for a global company",
          results: [
            "85% reduction in reporting time",
            "40% improvement in data accuracy",
            "60% increase in data utilization",
            "100% mobile accessibility"
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Marketing Analytics Tools",
          description: "Developed marketing performance reporting system",
          results: [
            "50% better campaign targeting",
            "35% increase in marketing ROI",
            "70% faster report generation",
            "95% user satisfaction rate"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default ReportingTools;
