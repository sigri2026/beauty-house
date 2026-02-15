'use client';

import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              БьютиХаус
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('masters')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Мастера
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Записаться
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/20">
          <nav className="flex flex-col px-4 py-6 gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#D4AF37] transition-colors text-left py-2"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('masters')}
              className="text-white hover:text-[#D4AF37] transition-colors text-left py-2"
            >
              Мастера
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-white hover:text-[#D4AF37] transition-colors text-left py-2"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold hover:opacity-90 transition-opacity w-full mt-2"
            >
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
