import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendReservationEmail, sendConfirmationEmail, ReservationData } from '@/services/emailService';

const contactSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă minim 2 caractere').max(100, 'Numele este prea lung'),
  email: z.string().email('Email invalid').max(255, 'Email-ul este prea lung'),
  phone: z.string()
    .regex(/^(\+4|0)[0-9]{9}$/, 'Număr de telefon invalid (format: +40XXXXXXXXX sau 0XXXXXXXXX)')
    .max(15, 'Număr de telefon prea lung'),
  message: z.string().min(10, 'Mesajul trebuie să aibă minim 10 caractere').max(1000, 'Mesajul este prea lung'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Check for destination parameter in URL
  useEffect(() => {
    const destination = searchParams.get('destination');
    if (destination) {
      setSelectedDestination(destination);
      // Pre-fill the message with destination info
      setValue('message', `Sunt interesat(ă) de destinația: ${destination}. `);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare reservation data
      const reservationData: ReservationData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        destination: selectedDestination || 'Nu a fost specificată',
        timestamp: new Date().toLocaleString('ro-RO', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send reservation email to business
      const reservationSent = await sendReservationEmail(reservationData);
      
      // Send confirmation email to customer
      const confirmationSent = await sendConfirmationEmail(reservationData);

      if (reservationSent && confirmationSent) {
        toast({
          title: '🎉 Rezervare trimisă cu succes!',
          description: 'Ai primit un email de confirmare. Te vom contacta în curând!',
        });
        
        // Track successful reservation
        if (typeof window !== 'undefined' && window.trackEvent) {
          window.trackEvent('reservation_submit_success', 'conversion', 'contact_form');
        }
      } else if (reservationSent) {
        toast({
          title: '✅ Rezervare trimisă!',
          description: 'Cererea ta a fost înregistrată. Te vom contacta în curând!',
        });
        
        // Track successful reservation
        if (typeof window !== 'undefined' && window.trackEvent) {
          window.trackEvent('reservation_submit_success', 'conversion', 'contact_form');
        }
      } else {
        throw new Error('Failed to send reservation');
      }

      reset();
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast({
        title: '❌ Eroare la trimitere',
        description: 'Te rugăm să încerci din nou sau să ne suni direct la 0743099200.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'madaiancu16@gmail.com',
      link: 'mailto:madaiancu16@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '0743099200',
      link: 'tel:0743099200'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      value: 'Timișoara, România',
      link: 'https://www.google.com/maps/place/Timi%C8%99oara'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suntem aici să te ajutăm să planifici călătoria perfectă
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl font-['Playfair_Display']">
                Rezervă Călătoria Ta
              </CardTitle>
              <CardDescription>
                Completează formularul pentru rezervare și vei primi un email de confirmare
              </CardDescription>
              {selectedDestination && (
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    🎯 Destinația selectată: <span className="font-bold">{selectedDestination}</span>
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Nume Complet <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ion Popescu"
                    {...register('name')}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ion.popescu@email.com"
                    {...register('email')}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Telefon <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+40 123 456 789"
                    {...register('phone')}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Mesaj <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Spune-ne despre călătoria ta de vis... (destinația dorită, perioada, numărul de persoane, preferințe speciale)"
                    rows={5}
                    {...register('message')}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Se procesează rezervarea...'
                  ) : (
                    <>
                      Trimite Rezervarea
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  <span className="text-destructive">*</span> Câmpuri obligatorii
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-['Playfair_Display']">
                  Informații Contact
                </CardTitle>
                <CardDescription>
                  Ne poți contacta prin una dintre metodele de mai jos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-['Playfair_Display']">
                  Locația Noastră
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92313.35384749486!2d21.1699495!3d45.7488716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d84610685d7%3A0x3a720d0ac44574c!2sTimisoara!5e0!3m2!1sro!2sro!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
