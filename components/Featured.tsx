import Image from "next/image";

const features = [
  {
    title: "Clinically proven brightening",
    desc: "Stabilised Vitamin C and niacinamide visibly reduce dark spots and uneven tone.",
    icon: "💡",
    image: "/images/brightening.jpg",
  },
  {
    title: "Hydration without heaviness",
    desc: "Triple-weight hyaluronic acid and squalane give plump, bouncy skin that never feels greasy.",
    icon: "💧",
    image: "/images/hydration.jpg",
  },
  {
    title: "Skin-barrier friendly",
    desc: "Fragrance-free, alcohol-free and suitable for sensitive skin with dermatologist testing.",
    icon: "🛡️",
    image: "/images/sensitive.jpg",
  },
  {
    title: "Vitamin C Power",
    desc: "Stable vitamin C derivative penetrates deeply to boost collagen and protect against environmental damage.",
    icon: "✨",
    image: "/images/vitaminc.jpg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why GlowSkin works</h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            A formula designed to support your routine — morning and night.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-rose-100 bg-white/60 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col h-full"
            >
              <Image
                src={f.image}
                alt={f.title}
                width={250}
                height={180}
                className="rounded-lg object-cover w-full h-40 mb-4"
              />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-xl">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}