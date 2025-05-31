import React from 'react';
import ServicePage from '@/components/ServicePage';
import { CloudIcon as Icon } from 'lucide-react';

const AzureServices = () => {
  return (
    <ServicePage
      title="Azure Services"
      description="Modernize your business with Microsoft Azure cloud solutions"
      icon={Icon}
      backgroundImage="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
    />
  );
};

export default AzureServices;
