import { ShoppingBag, Pill, School, Package } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Grocery Runs",
    desc: "Quick store trips, click-and-collect pickups, and doorstep drop-offs.",
  },
  {
    icon: Pill,
    title: "Pharmacy & Essentials",
    desc: "Prescription pickups and everyday necessities handled discreetly.",
  },
  {
    icon: School,
    title: "School & Activities",
    desc: "After-school lifts and drop-offs for kids’ classes and sports.",
  },
  {
    icon: Package,
    title: "Small Parcels",
    desc: "Gift, documents, and online order collections around town.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What we can do for you</h2>
          <p className="mt-3 text-gray-600">
            Flexible, safe and reliable small-route delivery across Stanger and nearby suburbs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-lg bg-emerald-100 p-2 text-emerald-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
