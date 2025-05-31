import React from 'react';
import ServicePage from '@/components/ServicePage';

const CloudMigration = () => {
  return (
    <ServicePage
      title="Cloud Migration"
      description="Seamlessly transition your infrastructure to the cloud"
      benefits={[
        "Reduced infrastructure costs",
        "Improved scalability",
        "Enhanced disaster recovery",
        "Modern infrastructure"
      ]}
      features={[
        "Migration strategy planning",
        "Data transfer services",
        "Application modernization",
        "Post-migration support"
      ]}
    />
  );
};

export default CloudMigration;
