import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Star, MapPin, Clock, Calendar, Check } from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <main className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Destinație Negăsită</h1>
          <p className="text-muted-foreground mb-8">Ne pare rău, destinația căutată nu există.</p>
          <Link to="/destinations">
            <Button>Înapoi la Destinații</Button>
          </Link>
        </div>
      </main>
    );
  }

  const destinationFacts = [
    { label: 'Preț per persoană', value: destination.price },
    { label: 'Durată', value: destination.duration },
    { label: 'Tip', value: destination.type },
    { label: 'Rating', value: `${destination.rating} / 5.0` },
    { label: 'Perioada recomandată', value: destination.bestTime },
    { label: 'Nivel dificultate', value: 'Mediu' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Înapoi
        </Button>

        {/* Hero Image */}
        <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12 shadow-hover animate-fade-in">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                {destination.type}
              </Badge>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="font-semibold">{destination.rating}</span>
              </div>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-3">
              {destination.title}
            </h1>
            <div className="flex items-center gap-2 text-xl">
              <MapPin className="w-5 h-5" />
              {destination.location}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl font-['Playfair_Display']">
                  Despre Această Destinație
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Această destinație unică îți oferă oportunitatea de a explora peisaje spectaculoase
                  și de a descoperi cultura locală într-un mod autentic. Cu ghizii noștri experți,
                  vei avea parte de o experiență de neuitat.
                </p>
              </CardContent>
            </Card>

            {/* Information Table */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl font-['Playfair_Display']">
                  Informații Esențiale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Detaliu</TableHead>
                      <TableHead>Informație</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {destinationFacts.map((fact, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{fact.label}</TableCell>
                        <TableCell>{fact.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl font-['Playfair_Display']">
                  Activități Incluse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {destination.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-['Playfair_Display']">
                  Rezervă Acum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">Preț per persoană</span>
                    <span className="text-2xl font-bold text-primary">{destination.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Perioada: {destination.bestTime}</span>
                  </div>
                </div>

                <Link to={`/contact?destination=${encodeURIComponent(destination.title)}`} className="block">
                  <Button className="w-full" size="lg">
                    Contactează-ne pentru Rezervare
                  </Button>
                </Link>

                <div className="pt-6 border-t space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Ghizi profesioniști incluși</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Transport inclus</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Cazare premium</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Anulare gratuită</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetail;
