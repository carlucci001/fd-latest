import React from 'react';
import ServicePage from '@/components/ServicePage';
import { BarChart } from 'lucide-react';

const CustomerAnalytics = () => {
  return (
    <ServicePage
      title="Customer Analytics Solutions"
      description="Transform customer data into actionable insights that drive business growth"
      icon={BarChart}
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Understand customer behavior and preferences",
        "Predict customer needs and trends",
        "Optimize marketing campaigns",
        "Improve customer retention",
        "Increase customer lifetime value",
        "Make data-driven business decisions"
      ]}
      features={[
        "Customer segmentation analysis",
        "Behavioral analytics",
        "Predictive customer insights",
        "Customer journey mapping",
        "Churn prediction and prevention",
        "Lifetime value analysis",
        "Campaign performance tracking",
        "Custom analytics dashboards"
      ]}
      process={{
        title: "Analytics Implementation Process",
        steps: [
          {
            title: "Data Assessment",
            description: "We evaluate your customer data sources and quality to ensure meaningful analysis."
          },
          {
            title: "Analytics Strategy",
            description: "Our team develops a comprehensive analytics strategy aligned with your goals."
          },
          {
            title: "Implementation",
            description: "We implement the analytics solution and set up data collection systems."
          },
          {
            title: "Analysis & Insights",
            description: "Generate actionable insights through advanced analytics and reporting."
          },
          {
            title: "Optimization",
            description: "Continuous optimization of analytics models and dashboards."
          }
        ]
      }}
      technologies={[
        "Python",
        "R",
        "TensorFlow",
        "Power BI",
        "Tableau",
        "SQL",
        "BigQuery",
        "Machine Learning"
      ]}
      caseStudies={[
        {
          title: "Retail Customer Analysis",
          description: "Implemented customer analytics for a retail chain",
          results: [
            "35% increase in customer retention",
            "25% growth in customer lifetime value",
            "40% improvement in campaign ROI",
            "50% reduction in customer churn"
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "E-commerce Analytics",
          description: "Developed comprehensive analytics for an e-commerce platform",
          results: [
            "45% increase in cross-selling",
            "30% improvement in customer satisfaction",
            "60% better targeting accuracy",
            "80% more effective promotions"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default CustomerAnalytics;
