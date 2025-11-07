import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-rose-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-zinc-600">Ready to book or have a question? Reach us any way you like.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="tel:+27000000000"
            className="group flex items-center gap-4 rounded-xl border border-red-200 bg-white p-6 text-zinc-900 transition hover:border-red-300 hover:shadow-red-200"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200">
              <Phone size={22} />
            </span>
            <div>
              <div className="font-semibold">Call Us</div>
              <div className="text-sm text-zinc-600">Mon–Sat, 8am–6pm</div>
            </div>
          </a>
          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-4 rounded-xl border border-red-200 bg-white p-6 text-zinc-900 transition hover:border-red-300 hover:shadow-red-200"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200">
              <Mail size={22} />
            </span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-zinc-600">We reply within an hour</div>
            </div>
          </a>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-red-200 bg-white p-6 text-zinc-900 transition hover:border-red-300 hover:shadow-red-200"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200">
              <MessageSquare size={22} />
            </span>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-zinc-600">Instant chat for quick bookings</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
