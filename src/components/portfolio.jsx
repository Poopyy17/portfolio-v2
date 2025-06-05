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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern design',
      image: '/placeholder.svg?height=200&width=300',
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI integration',
      image: '/placeholder.svg?height=200&width=300',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative project management platform',
      image: '/placeholder.svg?height=200&width=300',
      github: '#',
      live: '#',
    },
  ];
  const menuItems = [
    { name: 'Home', number: '01', href: '#home' },
    { name: 'About Me', number: '02', href: '#about' },
    { name: 'Tech', number: '03', href: '#tech' },
    { name: 'Works', number: '04', href: '#projects' },
    { name: 'Contact', number: '05', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GITHUB', href: '#' },
    { name: 'FACEBOOK', href: '#' },
    { name: 'LINKED IN', href: '#' },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Vertical Grid Lines */}
      <VerticalLines />
      {/* Horizontal Section Separators */}
      <HorizontalLines />
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
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
