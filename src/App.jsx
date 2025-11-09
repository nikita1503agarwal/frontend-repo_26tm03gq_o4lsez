import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Categories from './components/Categories';
import VenuesSection from './components/VenuesSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroCarousel />
      <main>
        <Categories />
        <VenuesSection id="terdekat" title="Venue Terdekat" mode="nearby" />
        <VenuesSection id="rekomendasi" title="Rekomendasi Venue" mode="recommended" />
      </main>
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>&copy; {new Date().getFullYear()} ArenaKita. Semua hak dilindungi.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-700">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-gray-700">Bantuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
