const features = [
  {
    title: "Brightening",
    desc: "Helps reduce dullness and even skin tone.",
    img: "/brightening.png"
  },
  {
    title: "Deep Hydration",
    desc: "Locks moisture with hyaluronic acid and squalane.",
    img: "/hydration.png"
  },
  {
    title: "Sensitive Safe",
    desc: "Gentle formula suitable for sensitive skin.",
    img: "/sensitive.png"
  },
  {
    title: "Vitamin C Boost",
    desc: "Powered with stabilized Vitamin-C for glow.",
    img: "/vitaminC.png"
  }
];
export default function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-2xl font-bold text-center">What Makes GlowSkin Different?</h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Target brightening, hydration, and skin barrier support with one gentle daily serum.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 border rounded-lg text-center flex flex-col items-center gap-3"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-20 h-20 object-cover rounded-full"
            />
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}