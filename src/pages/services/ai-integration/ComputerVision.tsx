import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Eye } from 'lucide-react';

const ComputerVision = () => {
  return (
    <ServicePage
      title="Computer Vision Solutions"
      description="Transform visual data into actionable insights with advanced computer vision technology"
      icon={Eye}
      backgroundImage="https://images.unsplash.com/photo-1677442136744-30231bd3a8fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Automate visual inspection and quality control",
        "Enhance security with intelligent surveillance",
        "Improve product recognition and tracking",
        "Reduce errors in visual analysis tasks",
        "Scale visual processing operations",
        "Enable real-time object detection and tracking"
      ]}
      features={[
        "Object detection and recognition",
        "Image classification and segmentation",
        "Facial recognition and analysis",
        "Quality control and defect detection",
        "Video analytics and processing",
        "Real-time tracking systems",
        "OCR and document processing",
        "3D vision and depth sensing"
      ]}
      process={{
        title: "Computer Vision Development Process",
        steps: [
          {
            title: "Requirements Assessment",
            description: "We analyze your visual processing needs and define the scope of the computer vision solution."
          },
          {
            title: "Data Collection",
            description: "Our team gathers and prepares visual data for model training and development."
          },
          {
            title: "Model Development",
            description: "We develop and train custom computer vision models using cutting-edge algorithms."
          },
          {
            title: "System Integration",
            description: "The solution is integrated with your existing systems and workflows."
          },
          {
            title: "Deployment & Monitoring",
            description: "We ensure reliable deployment and continuous performance monitoring."
          }
        ]
      }}
      technologies={[
        "OpenCV",
        "TensorFlow",
        "PyTorch",
        "YOLO",
        "Azure Computer Vision",
        "AWS Rekognition",
        "MediaPipe",
        "Detectron2"
      ]}
      caseStudies={[
        {
          title: "Manufacturing Quality Control",
          description: "Implemented an automated visual inspection system for a manufacturing line",
          results: [
            "99.9% defect detection accuracy",
            "75% reduction in inspection time",
            "90% decrease in quality control costs",
            "Zero defective products shipped"
          ],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Retail Analytics System",
          description: "Developed a computer vision system for retail analytics and customer behavior analysis",
          results: [
            "85% accuracy in customer tracking",
            "40% increase in store layout efficiency",
            "30% improvement in conversion rates",
            "Real-time occupancy monitoring"
          ],
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default ComputerVision;
