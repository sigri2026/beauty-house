'use client';

import { Scissors, Sparkles, Paintbrush, Heart, Eye, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scissors,
    title: 'Стрижки и укладки',
    price: 'от 3 500 ₽',
    description: 'Профессиональные стрижки и укладки от лучших стилистов',
  },
  {
    icon: Paintbrush,
    title: 'Окрашивание',
    price: 'от 5 000 ₽',
    description: 'Современные техники окрашивания премиум-красителями',
  },
  {
    icon: Sparkles,
    title: 'Макияж',
    price: 'от 4 000 ₽',
    description: 'Профессиональный макияж для любого случая',
  },
  {
    icon: Hand,
    title: 'Маникюр',
    price: 'от 2 500 ₽',
    description: 'Аппаратный и комбинированный маникюр с покрытием',
  },
  {
    icon: Eye,
    title: 'Брови и ресницы',
    price: 'от 1 800 ₽',
    description: 'Архитектура бровей, ламинирование ресниц',
  },
  {
    icon: Heart,
    title: 'SPA-уход',
    price: 'от 6 000 ₽',
    description: 'Комплексный уход и расслабляющие процедуры',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Наши{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              услуги
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Широкий спектр услуг для вашей красоты и комфорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%)',
                }}
              >
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-xl">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4">{service.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#D4AF37]">
                    {service.price}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-[#D4AF37] hover:bg-white/10"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
