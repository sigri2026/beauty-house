'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Массив с фоновыми изображениями
  const backgrounds = [
    '/images/inside1.jpg',
    '/images/inside2.jpg',
    '/images/inside3.jpg',
    '/images/inside4.jpg',
  ];

  // Предзагрузка изображений
  useEffect(() => {
    backgrounds.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Контейнер для фонов */}
      <div className="absolute inset-0 grid grid-cols-1">
        {backgrounds.map((src, index) => (
          <div
            key={src}
            className="row-span-1 col-span-1 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentIndex ? 1 : 0,
              gridRow: 1,
              gridColumn: 1,
              willChange: 'opacity',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        ))}
      </div>


      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Искусство быть{' '}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
            красивой
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
          Премиум-салон красоты в центре Санкт-Петербурга
        </p>
        <Button
          onClick={() => scrollToSection('contacts')}
          size="lg"
          className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold hover:opacity-90 transition-opacity text-lg px-8 py-6 animate-fade-in-delay-2"
        >
          Записаться на прием
        </Button>
      </div>

      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
