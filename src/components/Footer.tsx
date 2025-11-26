import { Plane, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/src/assets/madatrips-logo.svg" 
                alt="MadaTrips Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Descoperă lumea cu MadaTrips. Aventuri de neuitat te așteaptă.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Acasă</Link></li>
              <li><Link to="/destinations" className="text-muted-foreground hover:text-primary transition-colors text-sm">Destinații</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Galerie</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>madaiancu16@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>0743099200</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Timișoara, România</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Urmărește-ne</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/madaa.iancu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=oL9q3m8hnd0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ANPC Badges */}
        <div className="border-t mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href="https://anpc.ro/ce-este-sal/" 
              target="_blank" 
              rel="nofollow"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg" 
                alt="Soluționarea Alternativă a Litigiilor" 
                className="h-16 w-auto"
              />
            </a>
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank" 
              rel="nofollow"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg" 
                alt="Soluționarea Online a Litigiilor" 
                className="h-16 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MadaTrips. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
