import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  if (!showButtons) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-fade-in">
      <Button
        size="icon"
        onClick={scrollToTop}
        className="w-12 h-12 rounded-xl shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </Button>
      <Button
        size="icon"
        onClick={scrollToBottom}
        className="w-12 h-12 rounded-xl shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm"
        aria-label="Scroll to bottom"
      >
        <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </Button>
    </div>
  );
};

export default ScrollButtons;
