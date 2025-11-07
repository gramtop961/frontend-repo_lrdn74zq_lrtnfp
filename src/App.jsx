import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold text-emerald-700">
            Stanger Small Route Delivery
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">
            Book Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Stanger Small Route Delivery. All rights reserved.
            </p>
            <p>Made with care for families in Stanger, South Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
