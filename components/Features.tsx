
const acids = [
  {
    title: "💧 Hyaluronic Acid (HA)",
    desc: "Pulls moisture into skin, plumps, reduces fine lines, gives glass-skin hydration.",
    best: "All skin types",
    img: "/hydration.png",
  },
  {
    title: "🌼 Niacinamide (B3)",
    desc: "Reduces oil, shrinks pores appearance, calms redness & strengthens skin barrier.",
    best: "Oily, acne-prone, sensitive",
    img: "/brightening.png",
  },
  {
    title: "✨ Retinol (Vitamin A)",
    desc: "Boosts cell turnover, treats acne, fades pigmentation & stimulates collagen.",
    best: "Anti-aging, acne, texture",
    img: "/vitaminC.png",
  },
  {
    title: "🧪 Salicylic Acid (BHA)",
    desc: "Dissolves oil in pores, clears blackheads/whiteheads & reduces acne.",
    best: "Oily, clogged pores",
    img: "/sensitive.png",
  },
];
export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          4 Power Ingredients in <span className="text-pink-400">GlowSkin</span>
        </h2>

        <p className="text-center text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Science-backed actives that hydrate, heal, and transform your skin barrier naturally.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {acids.map((i) => (
            <div
              key={i.title}
              className="p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur
                         hover:bg-black/40 hover:scale-105 hover:shadow-xl hover:border-pink-400
                         transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-3"
            >
              <img
                src={i.img}
                alt={i.title}
                className="w-20 h-20 object-cover rounded-full border border-white/10 hover:scale-110 transition duration-300"
              />
              <h3 className="text-white font-semibold text-lg">{i.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{i.desc}</p>
              <span className="text-pink-300 text-xs font-semibold mt-1">
                Best for: {i.best}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

