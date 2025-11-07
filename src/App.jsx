import React from 'react';
import { Rocket, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">Stanger Swift</div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                <MapPin size={12} /> Stanger, SA
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 font-medium text-black shadow hover:brightness-110"
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-black/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row">
          <div>© {new Date().getFullYear()} Stanger Swift. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
