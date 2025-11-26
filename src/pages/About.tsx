import { MapPin, Heart, Users, Award, Globe, Camera } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Globe, label: "Țări Vizitate", value: "15+" },
    { icon: Camera, label: "Poze Făcute", value: "10K+" },
    { icon: Users, label: "Clienți Fericiți", value: "200+" },
    { icon: Award, label: "Ani Experiență", value: "5+" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasiune pentru Călătorii",
      description: "Cred că fiecare călătorie este o poveste care merită trăită. De la munți la mare, de la orașe istorice la peisaje naturale uimitoare."
    },
    {
      icon: Users,
      title: "Experiențe Personalizate",
      description: "Fiecare client este unic. Îmi place să creez itinerarii personalizate care să reflecte personalitatea și dorințele fiecărui călător."
    },
    {
      icon: MapPin,
      title: "Cunoaștere Locală",
      description: "Călătoresc de ani de zile și am dezvoltat o rețea de contacte locale care ne permit să oferim experiențe autentice și memorabile."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-6">
              Despre <span className="text-primary">MadaTrips</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pasiunea mea pentru călătorii m-a condus să creez experiențe unice și memorabile pentru fiecare client
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/src/assets/mada-photo.jpg" 
                      alt="Mada - Fondatorul MadaTrips" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    Povestea Mea
                  </Badge>
                  <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold">
                    Bună, sunt Mada! 👋
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    De mică, am fost fascinată de lumea din jurul meu. Fiecare hartă era o fereastră către aventură, 
                    fiecare poza de pe Instagram o invitație la descoperire. Călătoriile nu au fost niciodată doar 
                    o activitate pentru mine - au fost o pasiune care m-a format și m-a inspirat.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    În timp, am realizat că vreau să împărtășesc această pasiune cu alții. Să ajut oamenii să 
                    descopere locuri uimitoare, să trăiască experiențe autentice și să creeze amintiri care să 
                    le rămână pentru totdeauna.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">De ce am ales să fac asta?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        <strong>Iubesc să descopar locuri noi</strong> - Fiecare destinație are povestea ei unică
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        <strong>Vreau să împărtășesc experiențele</strong> - Fericirea se înmulțește când o împărtășești
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        <strong>Cred în călătorii autentice</strong> - Nu doar să vizitezi, ci să trăiești locul
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">
                Călătoria Mea în Cifre
              </h2>
              <p className="text-lg text-muted-foreground">
                Ani de experiență, mii de kilometri și sute de zâmbete
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-hover transition-all">
                  <CardContent className="p-0">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">
                Valorile Mele
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principiile care mă ghidează în fiecare călătorie pe care o planific
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-all hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
              Să Călătorim Împreună!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dacă îți place să descoperi locuri noi și să trăiești experiențe autentice, 
              hai să planificăm următoarea ta aventură împreună!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/destinations" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Explorează Destinațiile
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contactează-mă
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
