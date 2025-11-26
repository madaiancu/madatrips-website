import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Star, Users } from 'lucide-react';
import DestinationCarousel from '@/components/DestinationCarousel';
import heroImage from '@/assets/hero-beach.jpg';
import mountainsImg from '@/assets/destination-mountains.jpg';
import cityImg from '@/assets/destination-city.jpg';
import jungleImg from '@/assets/destination-jungle.jpg';

const Home = () => {
  const carouselSlides = [
    {
      image: mountainsImg,
      title: 'Alpii Elvețieni',
      description: 'Aventuri alpine de neuitat'
    },
    {
      image: cityImg,
      title: 'Praga Istorică',
      description: 'Orașul celor o sută de turnuri'
    },
    {
      image: jungleImg,
      title: 'Amazon Exotic',
      description: 'Explorează jungla amazoniană'
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Destinații Unice',
      description: 'Peste 100 de destinații spectaculoase în întreaga lume'
    },
    {
      icon: Calendar,
      title: 'Planificare Ușoară',
      description: 'Rezervă în câteva click-uri, totul online'
    },
    {
      icon: Star,
      title: 'Experiențe Premium',
      description: 'Calitate superioară și servicii de lux'
    },
    {
      icon: Users,
      title: 'Ghizi Experți',
      description: 'Profesioniști cu ani de experiență'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful tropical beach paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Descoperă Lumea
            <br />
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Cu MadaTrips
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
            Aventuri de neuitat te așteaptă. Explorează destinații extraordinare și creează amintiri pentru o viață.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 text-white shadow-hover group px-8">
                Explorează Destinații
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground px-8">
                Contactează-ne
              </Button>
            </Link>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
              De Ce Să Ne Alegi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferim cele mai bune experiențe de călătorie, personalizate după nevoile tale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
              Destinații Populare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cele mai apreciate destinații ale clienților noștri
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-fade-in">
            <DestinationCarousel slides={carouselSlides} />
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="group">
                Vezi Toate Destinațiile
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
              Experiența MadaTrips
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descoperă poveștile clienților noștri fericiți
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-hover aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qVPRnhOa47c?autoplay=1&mute=1&loop=1&playlist=qVPRnhOa47c&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                title="MadaTrips Background Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white shadow-hover animate-fade-in">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">
              Gata Pentru Aventură?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Începe călătoria ta astăzi și creează amintiri de neuitat
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg px-8">
                Contactează-ne Acum
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
