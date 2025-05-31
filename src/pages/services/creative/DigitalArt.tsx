import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Palette } from 'lucide-react';

const DigitalArt = () => {
  return (
    <ServicePage
      title="Digital Art Creation"
      description="Transform your vision into stunning digital artwork"
      icon={Palette}
      backgroundImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Create unique, eye-catching visuals",
        "Flexible digital formats for any use",
        "Easy to modify and update",
        "Perfect for marketing and branding",
        "High-quality print-ready artwork",
        "Distinctive artistic style"
      ]}
      features={[
        "Custom digital illustrations",
        "Character design and development",
        "Concept art creation",
        "Digital painting",
        "Mixed media artwork",
        "Style exploration",
        "Texture and pattern design",
        "Animation-ready artwork"
      ]}
      process={{
        title: "Digital Art Creation Process",
        steps: [
          {
            title: "Concept Development",
            description: "We explore ideas and develop initial concepts based on your vision."
          },
          {
            title: "Style Definition",
            description: "Establishing the perfect artistic style for your project."
          },
          {
            title: "Creation",
            description: "Bringing the artwork to life through digital techniques."
          },
          {
            title: "Refinement",
            description: "Perfecting details and adding finishing touches."
          },
          {
            title: "Delivery",
            description: "Providing artwork in all required formats and resolutions."
          }
        ]
      }}
      technologies={[
        "Adobe Photoshop",
        "Procreate",
        "Clip Studio Paint",
        "Wacom Tablets",
        "Digital Brushes",
        "3D Software",
        "Color Theory",
        "Digital Techniques"
      ]}
      caseStudies={[
        {
          title: "Game Art Development",
          description: "Created character and environment art for a video game",
          results: [
            "50+ unique character designs",
            "20 environment concepts",
            "100% client satisfaction",
            "Successfully launched game"
          ],
          image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Children's Book Illustration",
          description: "Illustrated a complete children's book with digital art",
          results: [
            "30 full-page illustrations",
            "Published successfully",
            "Positive reader feedback",
            "Award-winning designs"
          ],
          image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default DigitalArt;
