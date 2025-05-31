import React from 'react';
import ServicePage from '@/components/ServicePage';
import { Video } from 'lucide-react';

const VideoProduction = () => {
  return (
    <ServicePage
      title="Video Production Services"
      description="Create engaging video content that tells your story and connects with your audience"
      icon={Video}
      backgroundImage="https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      benefits={[
        "Engage audiences with compelling storytelling",
        "Increase brand awareness and reach",
        "Improve conversion rates with video content",
        "Build emotional connections with viewers",
        "Enhance social media presence",
        "Showcase products and services effectively"
      ]}
      features={[
        "Corporate video production",
        "Product demonstrations",
        "Social media content creation",
        "Motion graphics and animation",
        "Commercial production",
        "Training and educational videos",
        "Event coverage and documentation",
        "Aerial videography"
      ]}
      process={{
        title: "Video Production Process",
        steps: [
          {
            title: "Pre-production Planning",
            description: "We develop concepts, scripts, and detailed production plans."
          },
          {
            title: "Production",
            description: "Professional filming with state-of-the-art equipment and techniques."
          },
          {
            title: "Post-production",
            description: "Expert editing, color grading, and sound design."
          },
          {
            title: "Review & Refinement",
            description: "Collaborative review process to ensure perfect results."
          },
          {
            title: "Delivery & Distribution",
            description: "Final delivery in optimal formats for all platforms."
          }
        ]
      }}
      technologies={[
        "4K Cameras",
        "Adobe Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Professional Audio",
        "Lighting Equipment",
        "Drones",
        "Stabilization Gear"
      ]}
      caseStudies={[
        {
          title: "Corporate Brand Video",
          description: "Produced a comprehensive brand video for a technology company",
          results: [
            "250% increase in website engagement",
            "1M+ views across platforms",
            "40% increase in brand awareness",
            "60% improvement in conversion rates"
          ],
          image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Product Launch Campaign",
          description: "Created video content for a major product launch",
          results: [
            "500K+ social media views",
            "75% engagement rate",
            "35% increase in sales",
            "90% positive audience feedback"
          ],
          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]}
    />
  );
};

export default VideoProduction;
