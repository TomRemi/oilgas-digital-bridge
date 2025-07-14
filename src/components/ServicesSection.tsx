import { useTranslation } from 'react-i18next';
import { Cpu, BarChart3, Monitor, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import iotDashboard from '@/assets/iot-dashboard.jpg';
import remoteMonitoring from '@/assets/remote-monitoring.jpg';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Radio,
      title: t('services.iot.title'),
      description: t('services.iot.description'),
      image: iotDashboard,
      color: 'bg-blue-500'
    },
    {
      icon: Cpu,
      title: t('services.edge.title'),
      description: t('services.edge.description'),
      image: remoteMonitoring,
      color: 'bg-green-500'
    },
    {
      icon: Monitor,
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description'),
      image: iotDashboard,
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description'),
      image: remoteMonitoring,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm">
              {t('services.title')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Create Digital Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="relative overflow-hidden rounded-t-lg">
                  <div className="relative h-48 -mx-6 -mt-6 mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center backdrop-blur-sm bg-white/20`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-primary-dark">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;