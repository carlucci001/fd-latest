import React from 'react';
import ServicePage from '@/components/ServicePage';
import { LineChart } from 'lucide-react';

const PredictiveAnalytics = () => {
  return (
    <ServicePage
      title="Predictive Analytics Solutions"
      description="Transform your business decision-making with powerful predictive analytics and forecasting"
      icon={LineChart}
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Make data-driven decisions with confidence",
        "Forecast trends and market changes",
        "Optimize resource allocation and planning",
        "Reduce risks through predictive modeling",
        "Improve operational efficiency",
        "Enhance strategic planning capabilities"
      ]}
      features={[
        "Advanced statistical modeling",
        "Time series analysis and forecasting",
        "Risk assessment and modeling",
        "Customer behavior prediction",
        "Demand forecasting systems",
        "Anomaly detection",
        "Automated reporting and alerts",
        "Interactive dashboards and visualizations"
      ]}
      process={{
        title: "Predictive Analytics Implementation Process",
        steps: [
          {
            title: "Data Assessment",
            description: "We evaluate your data sources and identify key predictive indicators for your business."
          },
          {
            title: "Model Selection",
            description: "Our team selects and customizes the most appropriate predictive models for your needs."
          },
          {
            title: "Development & Training",
            description: "We develop and train the predictive models using historical data and advanced algorithms."
          },
          {
            title: "Validation & Testing",
            description: "Rigorous testing ensures accurate predictions and reliable results."
          },
          {
            title: "Integration & Deployment",
            description: "We integrate the predictive analytics system into your business workflows."
          }
        ]
      }}
      technologies={[
        "Python",
        "R",
        "TensorFlow",
        "scikit-learn",
        "Prophet",
        "Power BI",
        "Tableau",
        "Apache Spark"
      ]}
      caseStudies={[
        {
          title: "Sales Forecasting System",
          description: "Implemented predictive analytics for a retail chain's sales forecasting",
          results: [
            "95% accuracy in sales predictions",
            "30% reduction in inventory costs",
            "25% improvement in stock management",
            "50% decrease in stockouts"
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Financial Risk Analysis",
          description: "Developed predictive models for financial risk assessment",
          results: [
            "80% accuracy in risk prediction",
            "40% reduction in default rates",
            "60% faster risk assessment",
            "35% cost savings in risk management"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default PredictiveAnalytics;
