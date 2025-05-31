import React from 'react';
import ServicePage from '@/components/ServicePage';

const CloudSecurity = () => {
  return (
    <ServicePage
      title="Cloud Security"
      description="Protect your cloud infrastructure with advanced security solutions"
      benefits={[
        "Enhanced data protection",
        "Compliance management",
        "Threat detection and prevention",
        "Security best practices"
      ]}
      features={[
        "Security assessment",
        "Identity management",
        "Encryption services",
        "Security monitoring"
      ]}
    />
  );
};

export default CloudSecurity;
