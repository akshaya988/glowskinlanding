import Image from "next/image";

const categories = [
  {
    title: "Brightening",
    img: "/images/glow.jpg",
  },
  {
    title: "Hydration",
    img: "/images/water.jpg",
  },
  {
    title: "Sensitive Safe",
    img: "/images/barrier.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-serif font-semibold text-center mb-12">
        Benefits
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {categories.map((c) => (
          <div key={c.title} className="flex flex-col items-center">
            <Image
              src={c.img}
              alt={c.title}
              width={300}
              height={256}
              className="w-full h-64 rounded-xl object-cover"
            />
            <p className="mt-4 font-medium text-lg">{c.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}