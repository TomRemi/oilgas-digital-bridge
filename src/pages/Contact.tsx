import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  meetingRequest: boolean;
}

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: ['Smart IoT Solutions HQ', 'Industrial Technology District', 'Houston, TX 77001'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@s-ais.com', 'support@s-ais.com'],
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: ['24/7 Support Available', 'Response within 1 hour'],
      color: 'text-orange-500'
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact S-AIS - Get Your IoT Solutions Today</title>
        <meta name="description" content="Contact S-AIS for expert IoT solutions in oil and gas. Schedule a meeting or request consultation for digital transformation." />
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-industrial border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t('contact.form.name')} *
                        </label>
                        <Input
                          {...register('name', { required: 'Name is required' })}
                          placeholder="John Doe"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t('contact.form.email')} *
                        </label>
                        <Input
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          placeholder="john@company.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.company')}
                      </label>
                      <Input
                        {...register('company')}
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder="Tell us about your IoT needs and challenges..."
                        rows={5}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="meeting"
                        {...register('meetingRequest')}
                      />
                      <label htmlFor="meeting" className="text-sm text-foreground">
                        {t('contact.form.meetingRequest')}
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
                
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-industrial transition-shadow border-0 shadow-md">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Calendar Integration Placeholder */}
                <Card className="p-6 bg-gradient-to-r from-primary to-primary-light text-primary-foreground border-0">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-4">Schedule a Meeting</h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Book a consultation with our IoT experts to discuss your digital transformation needs.
                    </p>
                    <Button variant="secondary" className="w-full">
                      Book Meeting (Calendly Integration)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Contact;