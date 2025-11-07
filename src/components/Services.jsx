import React from 'react';
import { ShoppingCart, Pill, School, Package } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Grocery Runs',
    desc: 'Quick pickups from your favorite stores with careful handling.'
  },
  { icon: Pill, title: 'Pharmacy Pickups', desc: 'Discreet, secure medication pickups and drop-offs.' },
  { icon: School, title: 'School & Activities', desc: 'Short-distance drops for after-school clubs and classes.' },
  { icon: Package, title: 'Small Parcels', desc: 'Documents and small packages delivered across Stanger.' }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0E0E10] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">What We Do</h2>
          <p className="mt-3 text-zinc-400">
            Focused, local, and reliable — built around the rhythms of busy families in Stanger.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-xl transition hover:border-amber-400/40 hover:shadow-amber-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
