import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SearchBar from '@/components/SearchBar';
import { destinations } from '@/data/destinations';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterType === 'all' || dest.type === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterType]);

  const types = ['all', ...Array.from(new Set(destinations.map(d => d.type)))];

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-4">
            Explorează Destinații
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descoperă cele mai frumoase locuri din lume
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center animate-fade-in">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Caută după destinație, locație..."
          />
          
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-[200px] h-12">
              <SelectValue placeholder="Tip destinație" />
            </SelectTrigger>
            <SelectContent className="z-50 bg-popover">
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'Toate' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-6 text-center animate-fade-in">
            <p className="text-muted-foreground">
              Am găsit <span className="font-semibold text-primary">{filteredDestinations.length}</span> rezultate
              {searchQuery && ` pentru "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredDestinations.map((destination, index) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-hover transition-all hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">
                      {destination.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold text-sm">{destination.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-['Playfair_Display']">
                    {destination.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {destination.location}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {destination.duration}
                    </div>
                    <span className="font-semibold text-primary text-lg">
                      {destination.price}
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link to={`/destinations/${destination.id}`} className="w-full">
                    <Button className="w-full group/btn">
                      Vezi Detalii
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-2xl text-muted-foreground mb-4">
              Nu am găsit destinații pentru căutarea ta
            </p>
            <Button onClick={() => setSearchQuery('')}>
              Șterge Căutarea
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Destinations;
