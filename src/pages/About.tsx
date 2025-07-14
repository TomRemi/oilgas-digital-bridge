import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: TrendingUp, label: t('about.experience'), value: '15+' },
    { icon: Award, label: t('about.projects'), value: '250+' },
    { icon: Users, label: t('about.clients'), value: '150+' },
    { icon: Target, label: 'Success Rate', value: '98%' }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>About S-AIS - Industrial IoT Leadership</title>
        <meta name="description" content="Learn about S-AIS leadership in digital transformation for oil and gas industry with 15+ years of experience." />
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 -mt-10 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 shadow-industrial bg-white border-0">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                      <p className="text-muted-foreground font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Transforming Industrial Operations
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {t('about.description')}
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {t('about.mission')}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                      <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                      <p className="text-sm text-muted-foreground">
                        To be the global leader in IoT solutions for industrial operations.
                      </p>
                    </div>
                    <div className="p-6 bg-secondary/5 rounded-lg border border-secondary/10">
                      <h4 className="font-semibold text-secondary mb-2">Our Values</h4>
                      <p className="text-sm text-muted-foreground">
                        Innovation, reliability, and safety in every solution we deliver.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary to-primary-light p-8 rounded-xl text-primary-foreground">
                    <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                    <ul className="space-y-2 text-primary-foreground/90">
                      <li>• Oil & Gas Operations</li>
                      <li>• Industrial IoT Implementation</li>
                      <li>• Edge Computing Solutions</li>
                      <li>• Predictive Maintenance</li>
                      <li>• Safety & Compliance</li>
                      <li>• Digital Transformation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default About;