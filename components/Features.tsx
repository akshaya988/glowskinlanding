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
<div key={f.title} className="p-6 border rounded-lg text-center">
  <img
    src={f.img}
    alt={f.title}
    className="w-20 h-20 object-cover mx-auto mb-3 rounded-lg"
  />
  <h3 className="font-semibold text-lg">{f.title}</h3>
  <p className="mt-2 text-gray-600">{f.desc}</p>
</div>

