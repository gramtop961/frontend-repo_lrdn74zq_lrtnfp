import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Book in Seconds',
    desc: 'Tell us the pickup, drop-off, and timing — we confirm right away.'
  },
  {
    num: '02',
    title: 'We Collect & Update',
    desc: 'Real-time updates so you always know what’s happening.'
  },
  {
    num: '03',
    title: 'Delivered with Care',
    desc: 'Friendly, verified drivers who know the Stanger routes.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0B0B0C] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">How It Works</h2>
          <p className="mt-3 text-zinc-400">Simple, transparent, and built for everyday life.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative overflow-hidden rounded-xl border border-zinc-800/90 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-xl"
            >
              <div className="text-6xl font-black tracking-tighter text-transparent opacity-20" style={{ WebkitTextStroke: '1px #d4a10055' }}>
                {s.num}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
