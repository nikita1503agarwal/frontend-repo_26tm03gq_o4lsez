import { Dumbbell, Basketball, Volleyball, Shuttlecock, Football, Bike, Tennis, Skiing } from 'lucide-react';

const categories = [
  { name: 'Futsal', Icon: Football, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Basket', Icon: Basketball, color: 'bg-orange-50 text-orange-600' },
  { name: 'Badminton', Icon: Shuttlecock, color: 'bg-indigo-50 text-indigo-600' },
  { name: 'Tenis', Icon: Tennis, color: 'bg-lime-50 text-lime-600' },
  { name: 'Voli', Icon: Volleyball, color: 'bg-pink-50 text-pink-600' },
  { name: 'Gym', Icon: Dumbbell, color: 'bg-sky-50 text-sky-600' },
  { name: 'Sepeda', Icon: Bike, color: 'bg-yellow-50 text-yellow-600' },
  { name: 'Lainnya', Icon: Skiing, color: 'bg-purple-50 text-purple-600' },
];

export default function Categories() {
  return (
    <section id="olahraga" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Kategori Olahraga</h2>
            <p className="text-gray-500 text-sm">Jelajahi pilihan olahraga untuk menemukan venue yang cocok.</p>
          </div>
          <a href="#" className="text-emerald-700 text-sm font-medium hover:underline">Lihat semua</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map(({ name, Icon, color }) => (
            <button key={name} className={`group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 hover:shadow-md transition-shadow ${color}`}>
              <span className="rounded-lg bg-white/70 p-2">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-gray-800">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
