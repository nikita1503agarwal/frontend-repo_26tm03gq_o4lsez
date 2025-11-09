import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Booking Lapangan Jadi Mudah',
    subtitle: 'Cari dan pesan lapangan olahraga favoritmu dalam hitungan detik.',
    image: 'https://images.unsplash.com/photo-1544913000-63d75169d0d6?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Temukan Venue Terdekat',
    subtitle: 'Aktifkan lokasi untuk melihat lapangan terbaik di sekitarmu.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'Banyak Pilihan Olahraga',
    subtitle: 'Futsal, basket, badminton, tenis, dan banyak lagi.',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1800&auto=format&fit=crop',
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-[56vh] sm:h-[64vh] w-full overflow-hidden rounded-b-3xl">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                {slides[index].title}
              </h1>
              <p className="mt-3 text-white/90 text-base sm:text-lg">
                {slides[index].subtitle}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/90 backdrop-blur p-3 rounded-xl">
                <input className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm" placeholder="Lokasi atau kota" />
                <input className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm" placeholder="Pilih olahraga" />
                <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors">Cari Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
