import { useState } from 'react';
import { Menu, X, MapPin, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center font-bold">A</div>
            <span className="text-xl font-semibold tracking-tight">ArenaKita</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#olahraga" className="hover:text-gray-900 transition-colors">Kategori</a>
            <a href="#terdekat" className="hover:text-gray-900 transition-colors">Terdekat</a>
            <a href="#rekomendasi" className="hover:text-gray-900 transition-colors">Rekomendasi</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari venue, lokasi..."
                className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm w-64"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
              <MapPin className="h-4 w-4" />
              Gunakan Lokasi
            </button>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari venue, lokasi..."
                className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <a href="#olahraga" className="px-3 py-2 rounded-lg bg-gray-50 text-gray-700 text-center">Kategori</a>
              <a href="#terdekat" className="px-3 py-2 rounded-lg bg-gray-50 text-gray-700 text-center">Terdekat</a>
              <a href="#rekomendasi" className="px-3 py-2 rounded-lg bg-gray-50 text-gray-700 text-center">Rekomendasi</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
