import React, { useState } from 'react';
import { Button } from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/logo.jpeg" 
                  alt="JIDI Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">JIDI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-6">
            <Button onClick={() => scrollToSection('#contact')} size="sm" className="hidden sm:inline-flex">
              Join Us
            </Button>

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 sm:p-3 text-zinc-400 hover:text-white md:hidden rounded-xl hover:bg-zinc-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-zinc-900 p-6 sm:p-8 shadow-2xl border-l border-zinc-800">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-zinc-300 hover:text-white py-3 text-lg font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-8 border-t border-zinc-800">
                  <Button onClick={() => scrollToSection('#contact')} className="w-full">
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;