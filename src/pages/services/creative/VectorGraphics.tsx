import React from 'react';
import ServicePage from '@/components/ServicePage';
import { PenTool } from 'lucide-react';

const VectorGraphics = () => {
  return (
    <ServicePage
      title="Vector Graphics Design"
      description="Create scalable, high-quality vector graphics for any application"
      icon={PenTool}
      backgroundImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Infinitely scalable graphics without quality loss",
        "Perfect for logos and brand assets",
        "Consistent quality across all sizes",
        "Easy to modify and update",
        "Reduced file sizes for web use",
        "Professional, clean designs"
      ]}
      features={[
        "Custom vector illustration",
        "Icon design and creation",
        "Logo vectorization",
        "Technical drawings",
        "Infographic design",
        "Pattern and texture creation",
        "Character design",
        "Brand asset development"
      ]}
      process={{
        title: "Vector Graphics Process",
        steps: [
          {
            title: "Concept Development",
            description: "We create initial sketches and concepts based on your requirements."
          },
          {
            title: "Vector Creation",
            description: "Converting concepts into precise vector artwork."
          },
          {
            title: "Refinement",
            description: "Perfecting details and ensuring technical accuracy."
          },
          {
            title: "Color & Style",
            description: "Applying colors and styles to match your brand."
          },
          {
            title: "Format Preparation",
            description: "Preparing files in all necessary formats for your use."
          }
        ]
      }}
      technologies={[
        "Adobe Illustrator",
        "Inkscape",
        "Affinity Designer",
        "SVG",
        "EPS",
        "AI",
        "Vector Tools",
        "Design Software"
      ]}
      caseStudies={[
        {
          title: "Icon System Design",
          description: "Created a comprehensive icon system for a software platform",
          results: [
            "100+ consistent icons created",
            "95% reduction in load times",
            "Perfect scaling across devices",
            "Universal design language established"
          ],
          image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Technical Illustration",
          description: "Developed vector illustrations for technical documentation",
          results: [
            "50+ technical drawings completed",
            "100% accuracy in specifications",
            "80% faster documentation updates",
            "Improved user understanding"
          ],
          image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default VectorGraphics;
