import mountainsImg from '@/assets/destination-mountains.jpg';
import carpatiImg from '@/assets/destination-carpati.jpg';
import cityImg from '@/assets/destination-city.jpg';
import bucharestImg from '@/assets/destination-bucharest.jpg';
import jungleImg from '@/assets/destination-jungle.jpg';
import desertImg from '@/assets/destination-desert.jpg';
import coastImg from '@/assets/destination-coast.jpg';
import litoralImg from '@/assets/destination-litoral.jpg';

export interface Destination {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  type: string;
  rating: number;
  bestTime: string;
  activities: string[];
}

export const destinations: Destination[] = [
  {
    id: 'carpati-romania',
    title: 'Carpații Românești',
    location: 'România',
    description: 'Descoperă frumusețea sălbatică a Carpaților, cu peisaje montane spectaculoase, păduri seculare și tradițiile autentice românești.',
    image: carpatiImg,
    price: '€799',
    duration: '6 zile',
    type: 'Munte',
    rating: 4.8,
    bestTime: 'Mai - Octombrie',
    activities: ['Drumeții', 'Schi', 'Turism Rural', 'Fotografie']
  },
  {
    id: 'bucuresti-cultural',
    title: 'București Cultural',
    location: 'România',
    description: 'Explorează capitala României, cu arhitectura sa eclectică, muzeele fascinante și viața de noapte vibrantă.',
    image: bucharestImg,
    price: '€599',
    duration: '4 zile',
    type: 'Oraș',
    rating: 4.6,
    bestTime: 'Aprilie - Octombrie',
    activities: ['Turism Cultural', 'Gastronomie', 'Istorie', 'Artă']
  },
  {
    id: 'delta-dunarii',
    title: 'Delta Dunării',
    location: 'România',
    description: 'O aventură unică în Delta Dunării, rezervația biosferei cu cea mai bogată biodiversitate din Europa.',
    image: jungleImg,
    price: '€899',
    duration: '5 zile',
    type: 'Natură',
    rating: 4.7,
    bestTime: 'Mai - Septembrie',
    activities: ['Birdwatching', 'Pescuit', 'Plimbări cu Barca', 'Fotografie']
  },
  {
    id: 'sahara-desert',
    title: 'Sahara Magică',
    location: 'Maroc',
    description: 'Experimentează magia deșertului Sahara, cu dunele sale spectaculoase și apusurile memorabile.',
    image: desertImg,
    price: '€1,299',
    duration: '6 zile',
    type: 'Desert',
    rating: 4.6,
    bestTime: 'Octombrie - Aprilie',
    activities: ['Safari pe Cămile', 'Camping', 'Astronomie', 'Fotografie']
  },
  {
    id: 'litoral-romanesc',
    title: 'Litoralul Românesc',
    location: 'România',
    description: 'Relaxează-te pe litoralul Mării Negre, cu plajele sale largi, stațiunile moderne și tradițiile pescărești.',
    image: litoralImg,
    price: '€699',
    duration: '7 zile',
    type: 'Coastă',
    rating: 4.5,
    bestTime: 'Iunie - Septembrie',
    activities: ['Plajă', 'Sporturi Nautice', 'Gastronomie', 'Relaxare']
  },
  {
    id: 'alpi-swiss',
    title: 'Alpii Elvețieni',
    location: 'Elveția',
    description: 'Explorează majestatea alpilor elvețieni, unde vârfurile înzăpezite se întind spre cer și pășunile verzi oferă o priveliște de vis.',
    image: mountainsImg,
    price: '€1,899',
    duration: '7 zile',
    type: 'Munte',
    rating: 4.9,
    bestTime: 'Iunie - Septembrie',
    activities: ['Drumeții', 'Schi', 'Escaladă', 'Fotografie']
  },
  {
    id: 'praga-istoric',
    title: 'Praga Istorică',
    location: 'Republica Cehă',
    description: 'Descoperă farmecul medieval al Pragăi, cu străzile sale pavate, arhitectura gotică și atmosfera romantică.',
    image: cityImg,
    price: '€899',
    duration: '5 zile',
    type: 'Oraș',
    rating: 4.8,
    bestTime: 'Aprilie - Octombrie',
    activities: ['Turism Cultural', 'Gastronomie', 'Istorie', 'Artă']
  },
  {
    id: 'coasta-amalfi',
    title: 'Coasta Amalfi',
    location: 'Italia',
    description: 'Relaxează-te pe minunata Coastă Amalfi, cu satele sale pitorești, apa cristalină și gastronomia rafată.',
    image: coastImg,
    price: '€1,699',
    duration: '8 zile',
    type: 'Coastă',
    rating: 4.9,
    bestTime: 'Mai - Septembrie',
    activities: ['Plajă', 'Gastronomie', 'Ture cu Barca', 'Relaxare']
  }
];
