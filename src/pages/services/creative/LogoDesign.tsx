import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Palette } from 'lucide-react';

const LogoDesign = () => {
  return (
    <ServicePage
      title="Professional Logo Design"
      description="Create a memorable brand identity with our expert logo design services"
      icon={Palette}
      backgroundImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Establish a strong, memorable brand identity",
        "Stand out from competitors with unique design",
        "Build brand recognition and trust",
        "Ensure consistency across all platforms",
        "Receive versatile logo formats for all uses",
        "Get comprehensive brand guidelines"
      ]}
      features={[
        "Custom logo design from scratch",
        "Multiple concept presentations",
        "Unlimited revisions until satisfaction",
        "Vector formats for scalability",
        "Color variations and mockups",
        "Brand style guide development",
        "File formats for all applications",
        "Copyright transfer and ownership"
      ]}
      process={{
        title: "Logo Design Process",
        steps: [
          {
            title: "Discovery & Research",
            description: "We learn about your brand, values, and target audience to inform the design direction."
          },
          {
            title: "Concept Development",
            description: "Our designers create multiple unique concepts based on your requirements."
          },
          {
            title: "Refinement",
            description: "We refine the chosen concept with your feedback until it's perfect."
          },
          {
            title: "Finalization",
            description: "The final logo is prepared in all necessary formats and color variations."
          },
          {
            title: "Brand Guidelines",
            description: "We create comprehensive guidelines for logo usage and brand consistency."
          }
        ]
      }}
      technologies={[
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Figma",
        "Sketch",
        "Vector Graphics",
        "Typography",
        "Color Theory",
        "Brand Design"
      ]}
      caseStudies={[
        {
          title: "Tech Startup Rebrand",
          description: "Created a modern, dynamic logo for a growing technology company",
          results: [
            "300% increase in brand recognition",
            "95% positive feedback from stakeholders",
            "Successfully implemented across all platforms",
            "Won industry design award"
          ],
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Restaurant Chain Identity",
          description: "Developed comprehensive brand identity for a restaurant group",
          results: [
            "45% increase in customer engagement",
            "Consistent branding across 50+ locations",
            "80% improvement in brand recall",
            "Successfully trademarked design"
          ],
          image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default LogoDesign;
