import React from 'react';
import { Rocket, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-red-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 text-zinc-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-red-600 text-white shadow">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">APD</div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                <MapPin size={12} /> Aboo's Parcel Delivery • Stanger, SA
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#services" className="transition hover:text-zinc-900">Services</a>
            <a href="#contact" className="transition hover:text-zinc-900">Contact</a>
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-rose-500 to-red-600 px-4 py-2 font-medium text-white shadow hover:brightness-110"
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
      <footer className="border-t border-red-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-600 md:flex-row">
          <div>© {new Date().getFullYear()} APD — Aboo's Parcel Delivery. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
