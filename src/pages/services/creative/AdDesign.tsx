import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Image } from 'lucide-react';

const AdDesign = () => {
  return (
    <ServicePage
      title="Advertising Design Services"
      description="Create compelling advertising campaigns that capture attention and drive results"
      icon={Image}
      backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Increase brand visibility and recognition",
        "Drive higher conversion rates",
        "Maintain consistent brand messaging",
        "Engage target audiences effectively",
        "Stand out in competitive markets",
        "Maximize advertising ROI"
      ]}
      features={[
        "Digital ad campaign design",
        "Social media advertising",
        "Print advertisement creation",
        "Billboard and outdoor advertising",
        "Email marketing design",
        "Landing page design",
        "A/B testing optimization",
        "Cross-platform campaign consistency"
      ]}
      process={{
        title: "Ad Design Process",
        steps: [
          {
            title: "Campaign Strategy",
            description: "We develop a comprehensive advertising strategy aligned with your goals."
          },
          {
            title: "Creative Concept",
            description: "Our team creates unique concepts that resonate with your audience."
          },
          {
            title: "Design Development",
            description: "We craft visually stunning designs that communicate your message."
          },
          {
            title: "Testing & Optimization",
            description: "Continuous testing ensures maximum campaign effectiveness."
          },
          {
            title: "Launch & Monitor",
            description: "We launch your campaign and track its performance for optimization."
          }
        ]
      }}
      technologies={[
        "Adobe Creative Suite",
        "Digital Marketing Tools",
        "Social Media Platforms",
        "Analytics Software",
        "A/B Testing Tools",
        "Marketing Automation",
        "Design Software",
        "Campaign Management"
      ]}
      caseStudies={[
        {
          title: "E-commerce Campaign",
          description: "Designed a multi-channel advertising campaign for an online retailer",
          results: [
            "200% increase in click-through rates",
            "150% improvement in conversion rates",
            "45% reduction in acquisition costs",
            "1M+ campaign impressions"
          ],
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Brand Awareness Campaign",
          description: "Created a comprehensive brand awareness campaign for a new product launch",
          results: [
            "85% increase in brand awareness",
            "60% engagement rate on social media",
            "40% increase in website traffic",
            "300% ROI on ad spend"
          ],
          image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default AdDesign;
