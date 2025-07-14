import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';

const Index = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>S-AIS - Smart IoT Solutions for Oil & Gas Industry</title>
        <meta name="description" content="Leading IoT innovation in the oil and gas industry with edge computing, real-time monitoring, and digital transformation solutions." />
        <meta name="keywords" content="IoT Oil Gas, Digital Transformation, Edge Computing, Industrial Dashboards, Smart Oilfields, Remote Asset Monitoring" />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <ServicesSection />
      </div>
    </HelmetProvider>
  );
};

export default Index;
