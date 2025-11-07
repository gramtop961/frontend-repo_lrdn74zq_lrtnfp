import { Truck, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium">
              <Truck className="h-4 w-4" /> Fast, friendly, local
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Stanger’s trusted small-route delivery for busy moms
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              From school runs to grocery and pharmacy pick-ups — we handle the little trips
              that make a big difference to your day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Book a pickup
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-700 shadow-sm hover:bg-gray-50"
              >
                See what we deliver
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-600" /><span>Same-day windows</span></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-600" /><span>Stanger & surrounds</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-emerald-100/60 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1400&auto=format&fit=crop"
              alt="Local courier delivering groceries"
              className="relative z-10 rounded-2xl shadow-xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
