import { PhoneCall, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Book a pickup</h2>
          <p className="mt-3 text-gray-600">We’d love to help with your next errand.</p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <a
            href="tel:+27720000000"
            className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm hover:bg-gray-100"
          >
            <PhoneCall className="h-6 w-6 text-emerald-600" />
            <span className="font-medium text-gray-900">Call</span>
            <span className="text-sm text-gray-600">+27 72 000 0000</span>
          </a>
          <a
            href="mailto:hello@stangerdeliveries.co.za"
            className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm hover:bg-gray-100"
          >
            <Mail className="h-6 w-6 text-emerald-600" />
            <span className="font-medium text-gray-900">Email</span>
            <span className="text-sm text-gray-600">hello@stangerdeliveries.co.za</span>
          </a>
          <a
            href="https://wa.me/27720000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm hover:bg-gray-100"
          >
            <MessageSquare className="h-6 w-6 text-emerald-600" />
            <span className="font-medium text-gray-900">WhatsApp</span>
            <span className="text-sm text-gray-600">Chat now</span>
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          Operating in Stanger, KwaDukuza and surrounding suburbs. Business hours: Mon–Sat, 7am–7pm.
        </p>
      </div>
    </section>
  );
}
