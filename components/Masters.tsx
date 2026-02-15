'use client';

import { Award } from 'lucide-react';

const masters = [
  {
    name: 'Анна Петрова',
    position: 'Стилист-колорист',
    experience: '5 лет опыта',
    image: '/images/master1.jpg',
  },
  {
    name: 'Мария Соколова',
    position: 'Мастер маникюра',
    experience: '8 лет опыта',
    image: '/images/master6.jpg',
  },
  {
    name: 'Елена Воронова',
    position: 'Визажист',
    experience: '7 лет опыта',
    image: '/images/master2.jpg',
  },
  {
    name: 'Ольга Смирнова',
    position: 'Brow-мастер',
    experience: '10 лет опыта',
    image: '/images/master3.jpg',
  },
];

export default function Masters() {
  return (
    <section id="masters" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Наши{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
              мастера
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Команда профессионалов с международными сертификатами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {masters.map((master, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative p-6 -mt-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full mb-4">
                  <Award className="w-4 h-4 text-black" />
                  <span className="text-sm font-semibold text-black">
                    {master.experience}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {master.name}
                </h3>
                <p className="text-[#D4AF37]">{master.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
