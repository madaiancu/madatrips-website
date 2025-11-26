import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollButtons from './ScrollButtons';
import HelpButton from './HelpButton';
import MadaAI from './MadaAI';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <ScrollButtons />
      <HelpButton />
      <MadaAI />
    </div>
  );
};

export default Layout;
