'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xzdarwqo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          _subject: `Новая заявка с сайта от ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '' });
        
        // Сброс статуса успеха через 5 секунд
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Ошибка при отправке');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
      
      // Сброс статуса ошибки через 5 секунд
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  // Функция для форматирования телефона
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length === 0) return '';
    
    let formatted = '+7 ';
    if (phoneNumber.length > 1) {
      formatted += '(' + phoneNumber.substring(1, 4);
    }
    if (phoneNumber.length >= 5) {
      formatted += ') ' + phoneNumber.substring(4, 7);
    }
    if (phoneNumber.length >= 8) {
      formatted += '-' + phoneNumber.substring(7, 9);
    }
    if (phoneNumber.length >= 10) {
      formatted += '-' + phoneNumber.substring(9, 11);
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
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

              {/* Сообщение об успехе */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500">
                    Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}

              {/* Сообщение об ошибке */}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-500">{errorMessage}</p>
                </div>
              )}

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
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Телефон</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                    placeholder="+7 (___) ___-__-__"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Услуга</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                    disabled={status === 'sending'}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-[#D4AF37]">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20 text-white">
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
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold hover:opacity-90 transition-opacity py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    'Отправить заявку'
                  )}
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