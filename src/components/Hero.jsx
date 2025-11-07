import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-rose-300/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-300/50 bg-red-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-red-700">
            APD • Aboo's Parcel Delivery
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Small‑Route Deliveries for Busy Moms in Stanger
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
            Groceries, pharmacy runs, school drops, and small parcels — handled with care and delivered on time. You handle life, APD handles the rest.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-rose-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Book a Pickup
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              See Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Live updates
            </div>
            <div>Same-day turnaround</div>
            <div>Trusted by local families</div>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[420px] w-full md:h-[520px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-xl border border-red-200 bg-gradient-to-br from-white to-rose-50 shadow-2xl">
            <Spline
              scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* subtle overlay for depth without blocking interaction */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
