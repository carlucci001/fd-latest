import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Consult from './pages/Consult';

// Web Development Pages
import CustomWebsites from './pages/services/web-development/CustomWebsites';
import Ecommerce from './pages/services/web-development/Ecommerce';
import WebApplications from './pages/services/web-development/WebApplications';
import CMSDevelopment from './pages/services/web-development/CMSDevelopment';
import APIIntegration from './pages/services/web-development/APIIntegration';

// AI Integration Pages
import MachineLearning from './pages/services/ai-integration/MachineLearning';
import NLP from './pages/services/ai-integration/NLP';
import ComputerVision from './pages/services/ai-integration/ComputerVision';
import PredictiveAnalytics from './pages/services/ai-integration/PredictiveAnalytics';
import AIAutomation from './pages/services/ai-integration/AIAutomation';

// CRM Solutions Pages
import CustomCRM from './pages/services/crm-solutions/CustomCRM';
import SalesAutomation from './pages/services/crm-solutions/SalesAutomation';
import CustomerAnalytics from './pages/services/crm-solutions/CustomerAnalytics';
import PipelineManagement from './pages/services/crm-solutions/PipelineManagement';
import ReportingTools from './pages/services/crm-solutions/ReportingTools';

// Cloud Services Pages
import CloudMigration from './pages/services/cloud-services/CloudMigration';
import AWSSolutions from './pages/services/cloud-services/AWSSolutions';
import AzureServices from './pages/services/cloud-services/AzureServices';
import CloudSecurity from './pages/services/cloud-services/CloudSecurity';
import Scalability from './pages/services/cloud-services/Scalability';

// Creative Services Pages
import AdDesign from './pages/services/creative/AdDesign';
import LogoDesign from './pages/services/creative/LogoDesign';
import VideoProduction from './pages/services/creative/VideoProduction';
import VectorGraphics from './pages/services/creative/VectorGraphics';
import DigitalArt from './pages/services/creative/DigitalArt';

function App() {
  // Force dark mode
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="consult" element={<Consult />} />
          <Route path="contact" element={<Contact />} />

          {/* Web Development Routes */}
          <Route path="services/web-development/custom-websites" element={<CustomWebsites />} />
          <Route path="services/web-development/ecommerce" element={<Ecommerce />} />
          <Route path="services/web-development/web-applications" element={<WebApplications />} />
          <Route path="services/web-development/cms-development" element={<CMSDevelopment />} />
          <Route path="services/web-development/api-integration" element={<APIIntegration />} />

          {/* AI Integration Routes */}
          <Route path="services/ai-integration/machine-learning" element={<MachineLearning />} />
          <Route path="services/ai-integration/nlp" element={<NLP />} />
          <Route path="services/ai-integration/computer-vision" element={<ComputerVision />} />
          <Route path="services/ai-integration/predictive-analytics" element={<PredictiveAnalytics />} />
          <Route path="services/ai-integration/ai-automation" element={<AIAutomation />} />

          {/* CRM Solutions Routes */}
          <Route path="services/crm-solutions/custom-crm" element={<CustomCRM />} />
          <Route path="services/crm-solutions/sales-automation" element={<SalesAutomation />} />
          <Route path="services/crm-solutions/customer-analytics" element={<CustomerAnalytics />} />
          <Route path="services/crm-solutions/pipeline-management" element={<PipelineManagement />} />
          <Route path="services/crm-solutions/reporting-tools" element={<ReportingTools />} />

          {/* Cloud Services Routes */}
          <Route path="services/cloud-services/cloud-migration" element={<CloudMigration />} />
          <Route path="services/cloud-services/aws-solutions" element={<AWSSolutions />} />
          <Route path="services/cloud-services/azure-services" element={<AzureServices />} />
          <Route path="services/cloud-services/cloud-security" element={<CloudSecurity />} />
          <Route path="services/cloud-services/scalability" element={<Scalability />} />

          {/* Creative Services Routes */}
          <Route path="services/creative/ad-design" element={<AdDesign />} />
          <Route path="services/creative/logo-design" element={<LogoDesign />} />
          <Route path="services/creative/video-production" element={<VideoProduction />} />
          <Route path="services/creative/vector-graphics" element={<VectorGraphics />} />
          <Route path="services/creative/digital-art" element={<DigitalArt />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
