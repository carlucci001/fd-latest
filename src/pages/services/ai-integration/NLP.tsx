import React from 'react';
import ServicePage from '@/components/ServicePage';
import { MessageSquare } from 'lucide-react';

const NLP = () => {
  return (
    <ServicePage
      title="Natural Language Processing"
      description="Harness the power of advanced NLP to understand and process human language at scale"
      icon={MessageSquare}
      backgroundImage="https://images.unsplash.com/photo-1677442136494-07c85e80b935?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Automate text analysis and processing at scale",
        "Extract valuable insights from unstructured text data",
        "Improve customer service with intelligent chatbots",
        "Enhance content analysis and categorization",
        "Support multiple languages and markets",
        "Reduce manual processing time and costs"
      ]}
      features={[
        "Advanced text classification and analysis",
        "Sentiment analysis and opinion mining",
        "Named entity recognition and extraction",
        "Intelligent chatbot development",
        "Automated document processing",
        "Language translation services",
        "Text summarization and generation",
        "Custom NLP model development"
      ]}
      process={{
        title: "NLP Solution Development Process",
        steps: [
          {
            title: "Requirements Analysis",
            description: "We analyze your language processing needs and define clear objectives for the NLP solution."
          },
          {
            title: "Data Collection & Preparation",
            description: "Our team gathers and prepares linguistic data for model training and development."
          },
          {
            title: "Model Development",
            description: "We develop and train custom NLP models using state-of-the-art techniques."
          },
          {
            title: "Integration & Testing",
            description: "Thorough testing ensures accurate language processing and system integration."
          },
          {
            title: "Deployment & Optimization",
            description: "We deploy the solution and continuously optimize its performance."
          }
        ]
      }}
      technologies={[
        "BERT",
        "GPT-3",
        "spaCy",
        "NLTK",
        "Transformers",
        "FastAPI",
        "Azure Cognitive Services",
        "AWS Comprehend"
      ]}
      caseStudies={[
        {
          title: "Customer Service Automation",
          description: "Implemented an AI-powered customer service system for a retail company",
          results: [
            "70% reduction in response time",
            "85% customer satisfaction rate",
            "50% cost reduction in customer service",
            "24/7 automated support coverage"
          ],
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Content Analysis Platform",
          description: "Built an automated content analysis system for a media company",
          results: [
            "90% accuracy in content categorization",
            "60% faster content processing",
            "40% improvement in content relevance",
            "80% reduction in manual review time"
          ],
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default NLP;
