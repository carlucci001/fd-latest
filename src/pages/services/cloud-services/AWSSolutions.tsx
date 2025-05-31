import React from 'react';
import ServicePage from '@/components/ServicePage';

const AWSSolutions = () => {
  return (
    <ServicePage
      title="AWS Solutions"
      description="Leverage the power of Amazon Web Services for your business"
      benefits={[
        "Scalable cloud infrastructure",
        "Cost-effective solutions",
        "Global reach and availability",
        "Enhanced security and compliance"
      ]}
      features={[
        "AWS architecture design",
        "Cloud migration services",
        "Serverless applications",
        "Managed AWS services"
      ]}
    />
  );
};

export default AWSSolutions;
