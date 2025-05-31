import React from 'react';
import ServicePage from '@/components/ServicePage';

const Scalability = () => {
  return (
    <ServicePage
      title="Cloud Scalability"
      description="Build scalable cloud solutions for your growing business"
      benefits={[
        "Flexible resource allocation",
        "Cost-efficient scaling",
        "Improved performance",
        "High availability"
      ]}
      features={[
        "Auto-scaling setup",
        "Load balancing",
        "Performance optimization",
        "Capacity planning"
      ]}
    />
  );
};

export default Scalability;
