'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '' });
  };

  return (
    <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Свяжитесь{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              с нами
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Запишитесь на процедуру или получите консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Оставьте заявку
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Ваше имя</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Телефон</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Услуга</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-[#D4AF37]">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20">
                      <SelectItem value="haircut">Стрижки и укладки</SelectItem>
                      <SelectItem value="coloring">Окрашивание</SelectItem>
                      <SelectItem value="makeup">Макияж</SelectItem>
                      <SelectItem value="manicure">Маникюр</SelectItem>
                      <SelectItem value="brows">Брови и ресницы</SelectItem>
                      <SelectItem value="spa">SPA-уход</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold hover:opacity-90 transition-opacity py-6 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Адрес</p>
                    <p className="text-white font-semibold">
                      Санкт-Петербург, ул. Достоевского, д. 15
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-lg">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Телефон</p>
                    <p className="text-white font-semibold">
                      +7 (931) 327-49-39
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <p className="text-white font-semibold">
                      hello@beauty-house-spb.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-lg">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Режим работы</p>
                    <p className="text-white font-semibold">
                      Ежедневно: 09:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 h-64">
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-[#D4AF37]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
