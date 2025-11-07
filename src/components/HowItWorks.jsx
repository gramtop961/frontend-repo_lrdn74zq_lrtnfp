import { Phone, Calendar, Navigation2, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="mt-3 text-gray-600">
              Simple steps tailored for busy families. We keep communication clear and
              timings reliable.
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-emerald-600" />
                <span><strong>1) Message or call:</strong> Tell us what you need picked up and where it’s going.</span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-emerald-600" />
                <span><strong>2) Choose a window:</strong> Pick a same-day or scheduled time that suits you.</span>
              </li>
              <li className="flex items-start gap-3">
                <Navigation2 className="mt-1 h-5 w-5 text-emerald-600" />
                <span><strong>3) Live updates:</strong> We confirm collection and share ETA along the way.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                <span><strong>4) Drop-off done:</strong> A friendly handover and proof of delivery.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">Coverage</p>
                <p className="text-2xl font-bold text-emerald-900">Stanger +15km</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">Average pickup</p>
                <p className="text-2xl font-bold text-emerald-900">under 60 min</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">Communication</p>
                <p className="text-2xl font-bold text-emerald-900">WhatsApp/SMS</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">Safety</p>
                <p className="text-2xl font-bold text-emerald-900">Verified drivers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
