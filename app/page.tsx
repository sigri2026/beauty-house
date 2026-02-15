import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Masters from '@/components/Masters';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Masters />
      <Contacts />

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 БьютиХаус. Все права защищены.
          </p>
        </div>
      </footer>
    </main>
  );
}
