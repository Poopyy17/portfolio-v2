import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import logo from '@/assets/gradient.png';

export default function Navigation({ onMenuOpen }) {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={scrollToHome}
          >
            <img src={logo} alt="James Logo" className="h-8 w-auto" />
            james.
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuOpen}
            className="hover:bg-gray-800"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
