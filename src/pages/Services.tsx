import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Radio, Cpu, Monitor, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import iotDashboard from '@/assets/iot-dashboard.jpg';
import remoteMonitoring from '@/assets/remote-monitoring.jpg';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Radio,
      title: t('services.iot.title'),
      description: t('services.iot.description'),
      image: iotDashboard,
      features: [
        'Wireless Sensor Networks',
        'Real-time Data Collection',
        'SCADA Integration',
        'Cloud Connectivity',
        'Mobile Monitoring'
      ]
    },
    {
      icon: Cpu,
      title: t('services.edge.title'),
      description: t('services.edge.description'),
      image: remoteMonitoring,
      features: [
        'Local Data Processing',
        'Reduced Latency',
        'Offline Capabilities',
        'AI/ML at Edge',
        'Secure Computing'
      ]
    },
    {
      icon: Monitor,
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description'),
      image: iotDashboard,
      features: [
        'Custom Dashboards',
        'Real-time Visualization',
        'KPI Tracking',
        'Alert Management',
        'Mobile Access'
      ]
    },
    {
      icon: BarChart3,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description'),
      image: remoteMonitoring,
      features: [
        '24/7 Monitoring',
        'Predictive Maintenance',
        'Asset Management',
        'Safety Compliance',
        'Cost Optimization'
      ]
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>IoT Services for Oil & Gas - S-AIS Solutions</title>
        <meta name="description" content="Comprehensive IoT services for oil and gas industry including edge analytics, real-time dashboards, and remote monitoring solutions." />
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our IoT Services
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-industrial transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get started with our comprehensive IoT solutions tailored for your industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Services;