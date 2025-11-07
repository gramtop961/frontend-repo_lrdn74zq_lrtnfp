import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0E0E10] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-zinc-400">Ready to book or have a question? Reach us any way you like.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="tel:+27000000000"
            className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 text-white transition hover:border-amber-400/40 hover:shadow-amber-500/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/20">
              <Phone size={22} />
            </span>
            <div>
              <div className="font-semibold">Call Us</div>
              <div className="text-sm text-zinc-400">Mon–Sat, 8am–6pm</div>
            </div>
          </a>
          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 text-white transition hover:border-amber-400/40 hover:shadow-amber-500/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/20">
              <Mail size={22} />
            </span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-zinc-400">We reply within an hour</div>
            </div>
          </a>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 text-white transition hover:border-amber-400/40 hover:shadow-amber-500/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/20">
              <MessageSquare size={22} />
            </span>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-zinc-400">Instant chat for quick bookings</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
