import { useState } from 'react';
import Navigation from './Navigation';
import HamburgerMenuOverlay from './HamburgerMenuOverlay';
import ScrollToTopButton from './ScrollToTopButton';
import VerticalLines from './VerticalLines';
import HorizontalLines from './HorizontalLines';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import TechStackSection from './TechStackSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', number: '01', href: '#home' },
    { name: 'About Me', number: '02', href: '#about' },
    { name: 'Tech', number: '03', href: '#tech' },
    { name: 'Works', number: '04', href: '#projects' },
    { name: 'Contact', number: '05', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GITHUB', href: 'https://github.com/Poopyy17' },
    { name: 'FACEBOOK', href: 'https://www.facebook.com/jamesboac17' },
    {
      name: 'LINKED IN',
      href: 'https://www.linkedin.com/in/james-boac-05706420b',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Vertical Grid Lines */}
      {/* <VerticalLines /> */}
      {/* Horizontal Section Separators */}
      {/* <HorizontalLines /> */}
      <Navigation onMenuOpen={() => setIsMenuOpen(true)} />
      <HamburgerMenuOverlay
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
        menuItems={menuItems}
        socialLinks={socialLinks}
      />{' '}
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
