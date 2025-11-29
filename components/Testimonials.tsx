// const quotes = [
//   { name: 'Priya K.', text: 'My skin looks brighter and smoother within 3 weeks. Love the texture!' },
//   { name: 'Neha S.', text: 'No breakouts, just glow. I travel a lot and this stays gentle.' },
//   { name: 'Rohit M.', text: 'Great serum — quick absorption and excellent hydration.' }
// ]

// export default function Testimonials() {
//   return (
//     <section className="py-16">
//       <h2 className="text-2xl font-bold text-center">What Customers Say</h2>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {quotes.map(q => (
//           <blockquote key={q.name} className="p-6 border rounded-lg">
//             <p className="text-gray-700">“{q.text}”</p>
//             <footer className="mt-4 text-sm text-gray-500">— {q.name}</footer>
//           </blockquote>
//         ))}
//       </div>
//     </section>
//   )
// }
const quotes = [
  {
    name: "Priya K.",
    role: "26, combination skin",
    text: "“My skin looked more even and smoother by week three. The texture feels luxe but sinks in instantly.”",
  },
  {
    name: "Neha S.",
    role: "29, frequent traveller",
    text: "“No breakouts, no irritation — just a soft glow. It fits perfectly under my sunscreen and makeup.”",
  },
  {
    name: "Rohit M.",
    role: "31, dry skin",
    text: "“Hydration without oiliness is rare. This is the first serum I’ve actually repurchased.”",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Loved by real people</h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              GlowSkin is a part of thousands of everyday routines.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            *Based on self-reported results from a 4-week user study.
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-rose-100 bg-gradient-to-b from-rose-50/60 to-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-700">{q.text}</p>
              <figcaption className="mt-4">
                <div className="text-sm font-semibold text-slate-900">{q.name}</div>
                <div className="text-xs text-slate-500">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
