import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Navigation({ onMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">portfolio.</div>
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
