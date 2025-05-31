import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Brain } from 'lucide-react';

const MachineLearning = () => {
  return (
    <ServicePage
      title="Machine Learning Solutions"
      description="Transform your business with cutting-edge machine learning solutions that drive innovation and growth"
      icon={Brain}
      backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Make data-driven decisions with predictive analytics",
        "Automate complex processes and reduce operational costs",
        "Uncover hidden patterns and insights in your data",
        "Improve customer experience with personalized solutions",
        "Enhance product recommendations and user engagement",
        "Scale operations efficiently with ML-powered automation"
      ]}
      features={[
        "Custom ML model development and training",
        "Deep learning and neural network implementation",
        "Automated data preprocessing and feature engineering",
        "Model optimization and performance tuning",
        "Real-time prediction and inference systems",
        "MLOps and model deployment infrastructure",
        "Continuous learning and model updating",
        "Performance monitoring and analytics"
      ]}
      process={{
        title: "Machine Learning Development Process",
        steps: [
          {
            title: "Data Assessment & Strategy",
            description: "We evaluate your data sources and develop a comprehensive ML strategy aligned with your business goals."
          },
          {
            title: "Data Preparation",
            description: "Our team processes and prepares your data for optimal model training, ensuring high-quality inputs."
          },
          {
            title: "Model Development",
            description: "We develop and train custom ML models using state-of-the-art algorithms and techniques."
          },
          {
            title: "Testing & Validation",
            description: "Rigorous testing ensures model accuracy, reliability, and performance in real-world scenarios."
          },
          {
            title: "Deployment & Monitoring",
            description: "We implement production-ready ML systems with continuous monitoring and improvement."
          }
        ]
      }}
      technologies={[
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "OpenAI",
        "Azure ML",
        "AWS SageMaker",
        "Kubernetes",
        "MLflow"
      ]}
      caseStudies={[
        {
          title: "Predictive Maintenance System",
          description: "Implemented ML-powered predictive maintenance for a manufacturing company",
          results: [
            "85% accuracy in failure prediction",
            "60% reduction in maintenance costs",
            "40% decrease in downtime",
            "ROI achieved within 6 months"
          ],
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Customer Churn Prevention",
          description: "Developed ML models to predict and prevent customer churn for a SaaS company",
          results: [
            "75% accuracy in churn prediction",
            "30% reduction in customer churn",
            "50% increase in retention rates",
            "2x ROI on retention campaigns"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default MachineLearning;
