import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { destinations } from '@/data/destinations';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotResponse {
  text: string;
  suggestions?: string[];
}

// Removed API dependencies - using intelligent local responses

const MadaAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bună ziua! Sunt MadaAI, asistentul tău virtual pentru călătorii. 👋\n\nSunt aici să te ajut cu:\n\n• Informații despre destinații\n• Prețuri și pachete turistice\n• Recomandări personalizate\n• Procesul de rezervare\n\nCu ce te pot ajuta astăzi?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Use intelligent fallback system as primary response method
    const fallbackResponse = generateIntelligentFallback(userMessage);
    if (fallbackResponse) {
      return fallbackResponse;
    }

    // If no specific fallback found, provide a helpful general response
    return `🤔 Îmi pare rău, nu sunt sigur cum să răspund la întrebarea ta specifică. \n\nÎnsă pot să te ajut cu:\n\n🏔️ **Informații despre destinații**\n• Carpații Românești - €799\n• București Cultural - €599\n• Delta Dunării - €899\n• Litoralul Românesc - €699\n• Alpii Elvețieni - €1,899\n• Praga Istorică - €899\n• Coasta Amalfi - €1,699\n• Sahara Magică - €1,299\n\n💡 **Încearcă să întrebi:**\n• "Care este cea mai ieftină destinație?"\n• "Recomandă-mi ceva pentru România"\n• "Ce activități sunt disponibile?"\n• "Cum pot rezerva?"\n\n📞 Pentru informații detaliate: 0743099200`;
  };

  const generateIntelligentFallback = (userMessage: string): string | null => {
    const message = userMessage.toLowerCase().trim();
    
    // PERSONAL QUESTIONS - "cum ma numesc"
    if (message.includes('cum ma numesc') || message.includes('cum mă numesc') || 
        message.includes('cum te numesti') || message.includes('cum te numești') ||
        message.includes('cum te cheama') || message.includes('cum te cheamă') ||
        message.includes('care e numele tau') || message.includes('care e numele tău') ||
        message.includes('care este numele tau') || message.includes('care este numele tău') ||
        message.includes('numele tau') || message.includes('numele tău') ||
        message.includes('cum te numesti') || message.includes('cum te numești')) {
      return `😊 Salut! Eu sunt **MadaAI**, asistentul tău virtual pentru călătorii! 🤖\n\n🌟 **Despre mine:**\n• Sunt creat să te ajut cu destinații și călătorii\n• Pot să îți recomand pachete turistice perfecte\n• Îți explic prețurile și ofertele speciale\n• Te ghidez prin procesul de rezervare\n\n🎯 **Cu ce te pot ajuta astăzi?**\n• Destinații disponibile\n• Prețuri și oferte\n• Recomandări personalizate\n• Informații despre rezervări\n\n📞 **Contact MadaTrips:** 0743099200`;
    }

    // SCHEDULE QUESTIONS - "sambata la ora 17 este inchis"
    if (message.includes('sambata') || message.includes('sâmbătă') || message.includes('sambata') ||
        message.includes('duminica') || message.includes('duminică') || message.includes('duminica') ||
        message.includes('luni') || message.includes('marti') || message.includes('marți') ||
        message.includes('miercuri') || message.includes('joi') || message.includes('vineri') ||
        message.includes('program') || message.includes('ora') || message.includes('ore') ||
        message.includes('inchis') || message.includes('închis') || message.includes('inchis') ||
        message.includes('deschis') || message.includes('deschis') || message.includes('deschis') ||
        message.includes('17') || message.includes('18') || message.includes('16') ||
        message.includes('9') || message.includes('10') || message.includes('5') ||
        message.includes('6') || message.includes('7') || message.includes('8')) {
      return `⏰ **Programul MadaTrips:**\n\n📅 **Luni - Vineri:** 9:00 - 18:00\n📅 **Sâmbătă:** 10:00 - 16:00\n📅 **Duminică:** Închis\n\n📞 **Pentru urgențe:** 0743099200\n📧 **Email:** madaiancu16@gmail.com\n\n💡 **Sfat:** Pentru rezervări urgente, poți să ne contactezi oricând prin email sau să completezi formularul de contact pe site!\n\n🎯 **Sunt aici să te ajut cu orice întrebări despre călătorii!**`;
    }

    // CONTACT QUESTIONS - HIGHEST PRIORITY
    if (message.includes('contact') || message.includes('contactez') || message.includes('contactezi') ||
        message.includes('cum pot sa contactez') || message.includes('cum pot să contactez') ||
        message.includes('cum te contactez') || message.includes('cum te contactezi') ||
        message.includes('telefon') || message.includes('email') || message.includes('adresa') ||
        message.includes('unde te gasesc') || message.includes('unde te găsesc') ||
        message.includes('cum te gasesc') || message.includes('cum te găsesc') ||
        message.includes('informatii contact') || message.includes('informații contact') ||
        message.includes('date contact') || message.includes('date de contact')) {
      return `📞 **Cum mă poți contacta:**\n\n📱 **Telefon:** 0743099200\n📧 **Email:** madaiancu16@gmail.com\n📍 **Adresă:** Timișoara, România\n🌐 **Instagram:** @madaa.iancu\n\n⏰ **Program:**\n• Luni - Vineri: 9:00 - 18:00\n• Sâmbătă: 10:00 - 16:00\n• Duminică: Închis\n\n💬 **Pentru rezervări:**\n• Sună direct\n• Trimite email\n• Completează formularul de contact\n• Scrie-mi aici în chat\n\n🎯 **Sunt aici să te ajut cu orice întrebări despre călătorii!**`;
    }

    // SUPER SIMPLE - "Ce faci" and similar questions
    if (message.includes('ce faci') || message.includes('ce fac') || message.includes('ce faci?') || 
        message.includes('ce fac?') || message.includes('ce mai faci') || message.includes('ce mai fac') ||
        message.includes('cum esti') || message.includes('cum ești') || message.includes('ce mai e') ||
        message.includes('ce mai e nou') || message.includes('ce mai e nou?') || message.includes('ce mai faci?') ||
        message.includes('ce mai fac?') || message.includes('ce mai e?') || message.includes('ce mai e nou?')) {
      return `😊 Salut! Sunt foarte bine, mulțumesc! Sunt MadaAI, asistentul tău pentru călătorii! 🌍\n\n🌟 **Ce fac eu:**\n• Te ajut să găsești destinațiile perfecte\n• Îți explic prețurile și pachetele\n• Îți dau recomandări personalizate\n• Te ghidez prin procesul de rezervare\n\n🎯 **Cu ce te pot ajuta astăzi?**\n• Destinații disponibile\n• Prețuri și oferte\n• Recomandări pentru tine\n• Informații despre rezervări\n\n📞 **Contact:** 0743099200`;
    }

    // Greeting responses
    if (message.match(/^(salut|buna|hello|hi|hey)$/i) || message.includes('buna ziua') || message.includes('buna seara')) {
      return 'Salut! 👋 Mă bucur să te cunosc! Sunt aici să te ajut cu orice întrebări despre destinațiile noastre de călătorie. Poți să mă întrebi despre prețuri, activități, perioada cea mai bună pentru vizitare sau orice altceva! 🌍✈️';
    }

    // Cheap/budget inquiries
    if (message.includes('ieftin') || message.includes('cel mai mic pret') || message.includes('buget mic') || message.includes('economic')) {
      const cheapestDestination = destinations.reduce((prev, current) => {
        const prevPrice = parseInt(prev.price.replace('€', '').replace(',', ''));
        const currentPrice = parseInt(current.price.replace('€', '').replace(',', ''));
        return currentPrice < prevPrice ? current : prev;
      });
      return `💰 Cea mai accesibilă destinație este **${cheapestDestination.title}** la doar ${cheapestDestination.price} pentru ${cheapestDestination.duration}!\n\n📍 ${cheapestDestination.description}\n\n🎯 Activități incluse: ${cheapestDestination.activities.join(', ')}\n\n✨ O alegere excelentă pentru un buget restrâns!`;
    }

    // Expensive/luxury inquiries  
    if (message.includes('scump') || message.includes('luxury') || message.includes('premium') || message.includes('cel mai mare pret')) {
      const expensiveDestination = destinations.reduce((prev, current) => {
        const prevPrice = parseInt(prev.price.replace('€', '').replace(',', ''));
        const currentPrice = parseInt(current.price.replace('€', '').replace(',', ''));
        return currentPrice > prevPrice ? current : prev;
      });
      return `✨ Pentru o experiență premium, îți recomand **${expensiveDestination.title}** la ${expensiveDestination.price} pentru ${expensiveDestination.duration}!\n\n🌟 ${expensiveDestination.description}\n\n🎯 Activități exclusive: ${expensiveDestination.activities.join(', ')}\n\n👑 O investiție în amintiri de neuitat!`;
    }

    // Count questions - "câte locații sunt"
    if (message.includes('cate') || message.includes('câte') || message.includes('cati') || message.includes('câți') ||
        message.includes('cata') || message.includes('câtă') || message.includes('cate sunt') || message.includes('câte sunt') ||
        message.includes('cati sunt') || message.includes('câți sunt') || message.includes('cata sunt') || message.includes('câtă sunt') ||
        message.includes('cate locatii') || message.includes('câte locații') || message.includes('cate destinatii') || message.includes('câte destinații') ||
        message.includes('cate pachete') || message.includes('câte pachete') || message.includes('cate vacante') || message.includes('câte vacanțe')) {
      return `📊 **Avem ${destinations.length} destinații fantastice disponibile:**\n\n${destinations.map((d, index) => `${index + 1}. **${d.title}** (${d.location}) - ${d.price}`).join('\n')}\n\n🎯 **Fiecare destinație oferă experiențe unice!**\n📞 Pentru detalii: 0743099200`;
    }

    // Destinations inquiry - MUCH MORE FLEXIBLE
    if (message.includes('destinat') || message.includes('unde') || message.includes('locuri') || 
        message.includes('disponibil') || message.includes('oferi') || message.includes('pachete') ||
        message.includes('vacante') || message.includes('calatorii') || message.includes('ce aveti') ||
        message.includes('ce oferiti') || message.includes('opțiuni') || message.includes('opțiuni')) {
      return `🌟 **Destinațiile noastre disponibile:**\n\n${destinations.map(d => `📍 **${d.title}** (${d.location})\n   💰 ${d.price} • ⏰ ${d.duration} • ⭐ ${d.rating}/5\n   🌟 ${d.bestTime}\n   ${d.description.substring(0, 80)}...`).join('\n\n')}\n\n🎯 **Vrei să afli mai multe despre vreuna dintre acestea?**\n📞 Pentru detalii: 0743099200`;
    }

    // Price inquiries - MORE FLEXIBLE
    if (message.includes('pret') || message.includes('cost') || message.includes('tarif') || 
        message.includes('bani') || message.includes('costa') || message.includes('cat costa') ||
        message.includes('preț') || message.includes('prețuri') || message.includes('tarife')) {
      const priceRange = destinations.map(d => d.price);
      const minPrice = Math.min(...priceRange.map(p => parseInt(p.replace('€', '').replace(',', ''))));
      const maxPrice = Math.max(...priceRange.map(p => parseInt(p.replace('€', '').replace(',', ''))));
      
      return `💰 **Prețurile noastre variază între €${minPrice} și €${maxPrice}:**\n\n${destinations.map(d => `• **${d.title}** (${d.location}): ${d.price} pentru ${d.duration}\n  ⭐ Rating: ${d.rating}/5 • 🌟 ${d.bestTime}`).join('\n\n')}\n\n✅ **Prețurile includ:**\n• Cazarea în hotel 3-4 stele\n• Transportul dus-întors\n• Ghid turistic local\n• Mic dejun inclus\n\n🎯 **Despre care destinație ai vrea să afli mai multe detalii?**\n📞 Pentru oferte personalizate: 0743099200`;
    }

    // Cheapest vacation inquiry
    if (message.includes('cea mai ieftina') || message.includes('cel mai ieftin') || (message.includes('costa') && message.includes('ieftin'))) {
      const cheapest = destinations.reduce((prev, current) => {
        const prevPrice = parseInt(prev.price.replace('€', '').replace(',', ''));
        const currentPrice = parseInt(current.price.replace('€', '').replace(',', ''));
        return currentPrice < prevPrice ? current : prev;
      });
      return `🎯 Cea mai ieftină vacanță pe care o oferim este **${cheapest.title}** în ${cheapest.location}!\n\n💰 Preț: ${cheapest.price} pentru ${cheapest.duration}\n⭐ Rating: ${cheapest.rating}/5\n🌟 Perioada optimă: ${cheapest.bestTime}\n\n📝 ${cheapest.description}\n\n🎪 Activități incluse: ${cheapest.activities.join(', ')}\n\n🎫 Vrei să rezervi sau să afli mai multe detalii?`;
    }

    // Geographic questions - "cea mai vestică locație"
    if (message.includes('vestic') || message.includes('vestică') || message.includes('vest') || 
        message.includes('est') || message.includes('estic') || message.includes('estică') ||
        message.includes('nord') || message.includes('sud') || message.includes('geografic') ||
        message.includes('pozitie') || message.includes('poziție') || message.includes('unde se afla') ||
        message.includes('unde se află') || message.includes('locația') || message.includes('locația')) {
      
      // Simple geographic info based on locations
      const locationInfo = {
        'România': '🇷🇴 România (Europa de Est)',
        'Elveția': '🇨🇭 Elveția (Europa Centrală)',
        'Cehia': '🇨🇿 Cehia (Europa Centrală)',
        'Italia': '🇮🇹 Italia (Europa de Sud)',
        'Maroc': '🇲🇦 Maroc (Africa de Nord)'
      };
      
      return `🗺️ **Informații geografice despre destinațiile noastre:**\n\n${destinations.map(d => `📍 **${d.title}**: ${locationInfo[d.location] || d.location}\n   💰 ${d.price} • ⏰ ${d.duration}`).join('\n\n')}\n\n🌍 **Toate destinațiile noastre sunt în Europa și Africa de Nord**\n📞 Pentru detalii: 0743099200`;
    }

    // Romania specific
    if (message.includes('romania') || message.includes('roman')) {
      const romanianDestinations = destinations.filter(d => d.location === 'România');
      return `🇷🇴 România oferă destinații minunate! Avem ${romanianDestinations.length} pachete speciale:\n\n${romanianDestinations.map(d => `🌟 ${d.title} - ${d.price} (${d.duration})\n   ${d.description.substring(0, 100)}...`).join('\n\n')}\n\n🤗 Te-ar interesa să afli mai multe despre vreuna dintre acestea?`;
    }

    // Summer destinations
    if (message.includes('vara') || message.includes('plaja') || message.includes('soare') || message.includes('cald')) {
      const summerDestinations = destinations.filter(d => 
        d.bestTime.includes('Mai') || d.bestTime.includes('Iunie') || d.bestTime.includes('Iulie') || 
        d.bestTime.includes('August') || d.bestTime.includes('Septembrie') || d.type === 'Coastă'
      );
      return `☀️ Pentru vara aceasta, îți recomand aceste destinații perfecte:\n\n${summerDestinations.map(d => `🏖️ **${d.title}** (${d.location}) - ${d.price}\n   Perioada optimă: ${d.bestTime}\n   ${d.activities.slice(0, 3).join(', ')}`).join('\n\n')}\n\n🌊 Toate sunt perfecte pentru relaxare și activități de vară!`;
    }

    // Winter destinations  
    if (message.includes('iarna') || message.includes('schi') || message.includes('zapada') || message.includes('munte')) {
      const winterDestinations = destinations.filter(d => 
        d.activities.some(activity => activity.includes('Schi')) || d.type === 'Munte'
      );
      return `❄️ Pentru iarnă și activități montane, îți recomand:\n\n${winterDestinations.map(d => `🏔️ **${d.title}** (${d.location}) - ${d.price}\n   ${d.activities.filter(a => a.includes('Schi') || a.includes('Drumeții') || a.includes('Escaladă')).join(', ')}\n   Perioada optimă: ${d.bestTime}`).join('\n\n')}\n\n⛷️ Perfecte pentru iubitorii de munte și sporturi de iarnă!`;
    }

    // Specific destination inquiries
    const mentionedDestination = destinations.find(d => 
      message.includes(d.title.toLowerCase()) || 
      message.includes(d.location.toLowerCase()) ||
      message.includes(d.id) ||
      (d.location === 'România' && (message.includes('carpat') || message.includes('bucuresti') || message.includes('delta') || message.includes('litoral')))
    );

    if (mentionedDestination) {
      return `🌟 ${mentionedDestination.title} este o destinație extraordinară!\n\n📍 Locație: ${mentionedDestination.location}\n💰 Preț: ${mentionedDestination.price}\n⏰ Durată: ${mentionedDestination.duration}\n⭐ Rating: ${mentionedDestination.rating}/5\n🌟 Perioada optimă: ${mentionedDestination.bestTime}\n\n${mentionedDestination.description}\n\n🎯 Activități disponibile:\n${mentionedDestination.activities.map(a => `• ${a}`).join('\n')}\n\n🎫 Ai vrea să rezervi sau să afli mai multe detalii?`;
    }

    // Activities inquiry
    if (message.includes('activitat') || message.includes('ce pot face') || message.includes('distractie') || message.includes('sport')) {
      const allActivities = [...new Set(destinations.flatMap(d => d.activities))];
      return `🎯 Oferim o gamă largă de activități pentru toate gusturile:\n\n${allActivities.map(a => `🔸 ${a}`).join('\n')}\n\n✨ Activitățile variază în funcție de destinație. Despre ce tip de activități ești cel mai interesat? 🤔`;
    }


    // Booking inquiry
    if (message.includes('rezerv') || message.includes('book') || message.includes('comand') || message.includes('cumpar')) {
      return '📞 Pentru rezervări, te pot îndruma către echipa noastră de specialiști:\n\n📱 Telefon: 0743099200\n📧 Email: madaiancu16@gmail.com\n🌐 Online: Completează formularul din secțiunea Contact\n\n💳 Acceptăm plăți cu cardul și transfer bancar\n⏰ Politica de anulare: 48h înainte de plecare\n\n🎯 Sau îmi poți spune ce destinație te interesează și îți voi da detalii specifice pentru rezervare!';
    }

    // Weather/best time inquiry
    if (message.includes('vreme') || message.includes('climat') || message.includes('cand') || message.includes('perioada') || message.includes('timp')) {
      return '🌤️ Iată perioadele optime pentru fiecare destinație:\n\n' + 
      destinations.map(d => `🔸 ${d.title}: ${d.bestTime}`).join('\n') + 
      '\n\n🌍 Climatul și vremea variază mult în funcție de destinație. Pentru care destinație ai vrea informații meteorologice detaliate? ☀️❄️';
    }

    // Cultural/historical inquiries
    if (message.includes('cultura') || message.includes('istorie') || message.includes('muzeu') || message.includes('arhitectura')) {
      const culturalDestinations = destinations.filter(d => 
        d.activities.some(activity => activity.includes('Cultural') || activity.includes('Istorie') || activity.includes('Artă'))
      );
      return `🏛️ Pentru pasionații de cultură și istorie, recomand:\n\n${culturalDestinations.map(d => `🎭 **${d.title}** (${d.location}) - ${d.price}\n   ${d.description.substring(0, 80)}...\n   Activități culturale: ${d.activities.filter(a => a.includes('Cultural') || a.includes('Istorie') || a.includes('Artă')).join(', ')}`).join('\n\n')}\n\n📚 Destinații perfecte pentru a descoperi patrimoniul cultural!`;
    }

    // Adventure/sports inquiries
    if (message.includes('aventura') || message.includes('sport') || message.includes('adrenalina') || message.includes('activ')) {
      const adventureDestinations = destinations.filter(d => 
        d.activities.some(activity => activity.includes('Drumeții') || activity.includes('Escaladă') || activity.includes('Safari') || activity.includes('Sporturi'))
      );
      return `🏃‍♂️ Pentru iubitorii de aventură și sporturi extreme:\n\n${adventureDestinations.map(d => `⚡ **${d.title}** (${d.location}) - ${d.price}\n   Activități: ${d.activities.filter(a => a.includes('Drumeții') || a.includes('Escaladă') || a.includes('Safari') || a.includes('Sporturi')).join(', ')}\n   Rating: ${d.rating}/5`).join('\n\n')}\n\n🎯 Perfecte pentru cei care caută emoții tari!`;
    }

    // Relaxation inquiries
    if (message.includes('relaxare') || message.includes('odihna') || message.includes('spa') || message.includes('liniste')) {
      const relaxDestinations = destinations.filter(d => 
        d.activities.some(activity => activity.includes('Relaxare') || activity.includes('Plajă')) || d.type === 'Coastă'
      );
      return `🧘‍♀️ Pentru relaxare și refacere:\n\n${relaxDestinations.map(d => `🌊 **${d.title}** (${d.location}) - ${d.price}\n   ${d.description.substring(0, 80)}...\n   Activități relaxante: ${d.activities.filter(a => a.includes('Relaxare') || a.includes('Plajă') || a.includes('Gastronomie')).join(', ')}`).join('\n\n')}\n\n😌 Destinații perfecte pentru a te deconecta și relaxa!`;
    }

    // Food/gastronomy inquiries
    if (message.includes('mancare') || message.includes('gastronomie') || message.includes('restaurant') || message.includes('culinar')) {
      const foodDestinations = destinations.filter(d => 
        d.activities.some(activity => activity.includes('Gastronomie'))
      );
      return `🍽️ Pentru iubitorii de gastronomie:\n\n${foodDestinations.map(d => `👨‍🍳 **${d.title}** (${d.location}) - ${d.price}\n   ${d.description.substring(0, 80)}...\n   Experiențe culinare de neuitat!`).join('\n\n')}\n\n🥘 Destinații unde vei descoperi aromele autentice locale!`;
    }

    // Recommendations inquiry - MORE FLEXIBLE
    if (message.includes('recomand') || message.includes('ce imi') || message.includes('ce-mi') || 
        message.includes('sugerezi') || message.includes('propui') || message.includes('ce sa aleg') ||
        message.includes('ce să aleg') || message.includes('ce-mi recomanzi') || message.includes('ce imi recomanzi') ||
        message.includes('sugestii') || message.includes('idei') || message.includes('ce faci')) {
      return `🌟 **Recomandările mele TOP pentru tine:**\n\n💰 **Pentru buget redus:** București Cultural - €599 (4 zile)\n🏔️ **Pentru aventură:** Carpații Românești - €799 (6 zile)\n🌊 **Pentru relaxare:** Litoralul Românesc - €699 (7 zile)\n🎭 **Pentru cultură:** Praga Istorică - €899 (5 zile)\n✨ **Pentru lux:** Coasta Amalfi - €1,699 (8 zile)\n\n🤔 **Spune-mi mai multe despre preferințele tale:**\n• Ce tip de activități îți plac?\n• Ce buget ai disponibil?\n• În ce perioadă vrei să călătorești?\n\n📞 Pentru consultanță personalizată: 0743099200`;
    }

    // Help/general inquiries
    if (message.includes('ajutor') || message.includes('nu stiu') || message.includes('ce sa aleg')) {
      return `🤝 Sunt aici să te ajut să găsești vacanța perfectă! Îmi poți spune:\n\n🎯 **Ce tip de vacanță preferi?**\n• Relaxare la mare\n• Aventură în munte\n• Turism cultural\n• Destinații economice\n\n🌍 **Unde ai vrea să mergi?**\n• România (destinații locale)\n• Europa\n• Destinații exotice\n\n💰 **Ce buget ai în minte?**\n• Sub €700\n• €700-€1200\n• Peste €1200\n\n📅 **În ce perioadă vrei să călătorești?**\n\nSpune-mi preferințele tale și îți voi recomanda destinația perfectă! 😊`;
    }

    // Simple questions that should always work
    if (message.includes('cum pot') || message.includes('cum să') || message.includes('cum se') ||
        message.includes('cum fac') || message.includes('cum sa') || message.includes('cum pot sa') ||
        message.includes('cum pot să') || message.includes('cum se face') || message.includes('cum se poate')) {
      return `🤔 Îmi pare rău, nu am înțeles exact întrebarea ta. Să te ajut cu informații generale:\n\n🌟 **Ce pot să fac pentru tine:**\n• Să îți arăt toate destinațiile disponibile\n• Să îți explic prețurile și pachetele\n• Să îți recomand destinații pe baza preferințelor tale\n• Să îți dau informații despre rezervări\n\n💡 **Încearcă să întrebi:**\n• "Care sunt destinațiile disponibile?"\n• "Care sunt prețurile?"\n• "Ce recomanzi pentru România?"\n• "Cum pot rezerva?"\n\n📞 Sau sună direct: 0743099200`;
    }

    // General questions - catch-all for anything else
    if (message.includes('ce') || message.includes('cum') || message.includes('unde') || 
        message.includes('cand') || message.includes('de ce') || message.includes('care') ||
        message.includes('cine') || message.includes('cui') || message.includes('cui') ||
        message.includes('cand') || message.includes('când') || message.includes('de ce') ||
        message.includes('cum') || message.includes('cum se') || message.includes('cum sa') ||
        message.includes('cum să') || message.includes('cum pot') || message.includes('cum fac')) {
      return `🤔 Îmi pare rău, nu am înțeles exact întrebarea ta. Să te ajut cu informații generale:\n\n🌟 **Ce pot să fac pentru tine:**\n• Să îți arăt toate destinațiile disponibile\n• Să îți explic prețurile și pachetele\n• Să îți recomand destinații pe baza preferințelor tale\n• Să îți dau informații despre rezervări\n\n💡 **Încearcă să întrebi:**\n• "Care sunt destinațiile disponibile?"\n• "Care sunt prețurile?"\n• "Ce recomanzi pentru România?"\n• "Cum pot rezerva?"\n\n📞 Sau sună direct: 0743099200`;
    }

    // PERSONAL QUESTIONS - catch more personal inquiries
    if (message.includes('cine esti') || message.includes('cine ești') || message.includes('cine sunteti') ||
        message.includes('cine sunteți') || message.includes('ce esti') || message.includes('ce ești') ||
        message.includes('despre tine') || message.includes('despre mine') || message.includes('cine ma') ||
        message.includes('cine mă') || message.includes('cine sunt') || message.includes('cine esti tu') ||
        message.includes('cine ești tu') || message.includes('tu cine esti') || message.includes('tu cine ești')) {
      return `😊 Salut! Eu sunt **MadaAI**, asistentul tău virtual pentru călătorii! 🤖\n\n🌟 **Despre mine:**\n• Sunt creat să te ajut cu destinații și călătorii\n• Pot să îți recomand pachete turistice perfecte\n• Îți explic prețurile și ofertele speciale\n• Te ghidez prin procesul de rezervare\n\n🎯 **Cu ce te pot ajuta astăzi?**\n• Destinații disponibile\n• Prețuri și oferte\n• Recomandări personalizate\n• Informații despre rezervări\n\n📞 **Contact MadaTrips:** 0743099200`;
    }

    // Ultimate fallback - ALWAYS respond with something useful
    return `😊 Salut! Sunt MadaAI, asistentul tău pentru călătorii!\n\n🌟 **Cu ce te pot ajuta:**\n• Destinații și pachete turistice\n• Prețuri și oferte speciale\n• Recomandări personalizate\n• Informații despre rezervări\n\n🎯 **Întreabă-mă:**\n• "Care sunt destinațiile disponibile?"\n• "Care sunt prețurile?"\n• "Ce recomanzi pentru vară?"\n• "Cum pot rezerva o călătorie?"\n• "Ce faci?"\n• "Câte locații sunt?"\n• "Cum mă numesc?"\n• "Sâmbătă la ora 17 este închis?"\n\n📞 **Contact direct:** 0743099200\n📧 **Email:** madaiancu16@gmail.com`;
  };

  const generateSuggestions = (userMessage: string): string[] => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('salut') || message.includes('buna') || message.includes('hello')) {
      return ['Care sunt destinațiile disponibile?', 'Care sunt prețurile?', 'Recomandări pentru România'];
    }
    
    if (message.includes('destinat') || message.includes('unde') || message.includes('locuri')) {
      return ['Carpații Românești', 'București Cultural', 'Delta Dunării'];
    }
    
    if (message.includes('pret') || message.includes('cost') || message.includes('tarif')) {
      return ['Cel mai ieftin pachet', 'Pachete premium', 'Ce include prețul?'];
    }
    
    if (message.includes('romania') || message.includes('roman')) {
      return ['Carpații Românești', 'Delta Dunării', 'Litoralul Românesc'];
    }
    
    return ['Cum rezerv?', 'Alte destinații', 'Informații contact'];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessageText = inputValue;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get AI response
      const aiResponseText = await generateAIResponse(userMessageText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      
      // Track successful message exchange
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('chatbot_message_sent', 'engagement', 'MadaAI_conversation');
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Îmi pare rău, am întâmpinat o problemă tehnică. Te rog să încerci din nou sau să ne contactezi direct la 0743099200.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    'Care sunt destinațiile disponibile?',
    'Recomandă-mi ceva pentru România',
    'Care sunt prețurile?',
    'Cum pot rezerva o călătorie?'
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-20 z-50 group">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl animate-pulse"></div>
        
        {/* Main button */}
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
            // Track chatbot interactions
            if (typeof window !== 'undefined' && window.trackEvent) {
              window.trackEvent(
                isOpen ? 'chatbot_close' : 'chatbot_open', 
                'engagement', 
                'MadaAI'
              );
            }
          }}
          className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="flex flex-col items-center">
              <MessageCircle className="w-5 h-5 text-white mb-0.5" />
              <span className="text-[8px] text-white/90 font-medium">AI</span>
            </div>
          )}
        </Button>
        
        {/* Elegant floating tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium shadow-xl border border-white/10">
              MadaAI Assistant
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95"></div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-20 z-40 w-96 h-[500px] flex flex-col shadow-2xl border border-white/20 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 rounded-2xl animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-t-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white">MadaAI</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Asistentul tău virtual</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 text-sm ${
                    message.isBot
                      ? 'bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-md shadow-sm'
                      : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white ml-auto rounded-2xl rounded-br-md shadow-lg'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('ro-RO', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 p-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2">Întrebări frecvente:</p>
              <div className="flex flex-wrap gap-1">
                {quickResponses.map((response, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-xs py-1 px-2"
                    onClick={() => setInputValue(response)}
                  >
                    {response}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/50 rounded-b-2xl">
            <div className="flex gap-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Scrie mesajul tău aici..."
                className="flex-1 rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default MadaAI;
