import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const HelpButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 left-6 z-40 rounded-full shadow-hover bg-accent hover:bg-accent/90"
          aria-label="Help"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 z-50 bg-popover" align="start" side="top">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Ajutor & FAQ</h3>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-medium text-sm mb-1">Cum rezerv o călătorie?</h4>
              <p className="text-sm text-muted-foreground">
                Navighează la secțiunea Destinații, alege locația dorită și completează formularul de contact.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-1">Cum pot căuta destinații?</h4>
              <p className="text-sm text-muted-foreground">
                Folosește bara de căutare din pagina Destinații pentru a găsi rapid locația dorită.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-1">Contact rapid</h4>
              <p className="text-sm text-muted-foreground">
                Email: madaiancu16@gmail.com<br />
                Telefon: +40743099200
              </p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HelpButton;
