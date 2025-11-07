import React from 'react';
import { ShoppingCart, Pill, School, Package } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Grocery Runs',
    desc: "Quick pickups from your favorite stores with careful handling."
  },
  { icon: Pill, title: 'Pharmacy Pickups', desc: 'Discreet, secure medication pickups and drop-offs.' },
  { icon: School, title: 'School & Activities', desc: 'Short-distance drops for after-school clubs and classes.' },
  { icon: Package, title: 'Small Parcels', desc: 'Documents and small packages delivered across Stanger.' }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-rose-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">What We Do</h2>
          <p className="mt-3 text-zinc-600">
            Focused, local, and reliable — built around the rhythms of busy families in Stanger.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-red-200 bg-white p-6 shadow-xl transition hover:border-red-300 hover:shadow-red-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-200/40 blur-2xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
