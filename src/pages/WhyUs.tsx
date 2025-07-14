import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Award, Shield, Clock, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WhyUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Award,
      title: t('whyUs.expertise.title'),
      description: t('whyUs.expertise.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Lightbulb,
      title: t('whyUs.technology.title'),
      description: t('whyUs.technology.description'),
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: t('whyUs.support.title'),
      description: t('whyUs.support.description'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: t('whyUs.roi.title'),
      description: t('whyUs.roi.description'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const achievements = [
    { icon: Users, value: '150+', label: 'Global Clients' },
    { icon: Award, value: '250+', label: 'Projects Completed' },
    { icon: Shield, value: '99.9%', label: 'System Uptime' },
    { icon: TrendingUp, value: '40%', label: 'Average Cost Savings' }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Why Choose S-AIS - Industrial IoT Expertise</title>
        <meta name="description" content="Discover why S-AIS is the preferred choice for oil and gas IoT solutions with proven expertise, advanced technology, and 24/7 support." />
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('whyUs.title')}
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {t('whyUs.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 -mt-10 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="text-center p-6 shadow-industrial bg-white border-0">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{achievement.value}</h3>
                      <p className="text-muted-foreground font-medium">{achievement.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industry Leadership That Delivers Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our expertise in industrial IoT and deep understanding of oil & gas operations sets us apart from the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Card key={index} className="group hover:shadow-industrial transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 ${reason.bgColor} rounded-xl flex items-center justify-center`}>
                          <Icon className={`h-8 w-8 ${reason.color}`} />
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {reason.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed">
                "S-AIS transformed our operations with their IoT solutions. We've seen a 40% reduction in downtime and significant cost savings across all our facilities."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">JD</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-muted-foreground">CTO, Major Oil Corp</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Experience the S-AIS Difference?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join over 150 companies who trust S-AIS for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default WhyUs;