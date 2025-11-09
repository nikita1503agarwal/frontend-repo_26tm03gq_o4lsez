import { MapPin, Star } from 'lucide-react';

const venuesSample = [
  {
    name: 'Arena Futsal Nusantara',
    location: 'Jakarta Selatan',
    distance: '1.2 km',
    rating: 4.8,
    price: 'Rp120k/jam',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Prime Court Badminton',
    location: 'Tangerang',
    distance: '3.4 km',
    rating: 4.7,
    price: 'Rp75k/jam',
    image: 'https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'SkyHoops Basketball',
    location: 'Depok',
    distance: '5.1 km',
    rating: 4.6,
    price: 'Rp150k/jam',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1800&auto=format&fit=crop',
  },
  {
    name: 'Emerald Tennis Club',
    location: 'Jakarta Timur',
    distance: '6.2 km',
    rating: 4.9,
    price: 'Rp200k/jam',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1800&auto=format&fit=crop',
  },
];

export default function VenuesSection({ title, id, mode = 'nearby' }) {
  return (
    <section id={id} className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">
              {mode === 'nearby'
                ? 'Temukan venue terbaik di sekitarmu.'
                : 'Pilihan favorit dengan penilaian tinggi.'}
            </p>
          </div>
          <a href="#" className="text-emerald-700 text-sm font-medium hover:underline">Lihat semua</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {venuesSample.map((v) => (
            <div key={v.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={v.image} alt={v.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
                  {v.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-1">{v.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-gray-500 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span className="line-clamp-1">{v.location}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  {mode === 'nearby' ? (
                    <div className="text-sm text-emerald-700 font-medium">{v.distance}</div>
                  ) : (
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-amber-400" />
                      <span className="text-sm font-medium text-gray-700">{v.rating}</span>
                    </div>
                  )}
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
