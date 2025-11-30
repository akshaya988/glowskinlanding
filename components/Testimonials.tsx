
// const quotes = [
//   {
//     name: "Priya K.",
//     role: "26 • Combination Skin",
//     text: "My skin looked more even and smoother by week three. The texture feels luxe but sinks in instantly.",
//     avatar: "/hydration.jpg",
//     stars: 5,
//   },
//   {
//     name: "Neha S.",
//     role: "29 • Frequent Traveller",
//     text: "No breakouts, no irritation — just a soft glow. It fits perfectly under my sunscreen and makeup.",
//     avatar: "/sensitive.jpg",
//     stars: 5,
//   },
//   {
//     name: "Rohit M.",
//     role: "31 • Dry Skin",
//     text: "Hydration without oiliness is rare. This is the first serum I’ve actually repurchased.",
//     avatar: "/vitaminC.jpg",
//     stars: 4,
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20">
//       <div className="mx-auto max-w-6xl px-6">

//         <div className="text-center">
//           <h2 className="text-3xl font-bold">Loved by Real People</h2>
//           <p className="mt-2 text-gray-400 text-sm">
//             GlowSkin is part of thousands of everyday routines.
//           </p>
//         </div>

//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {quotes.map((q) => (
//             <div
//               key={q.name}
//               className="p-6 rounded-2xl bg-black/20 border border-white/10 backdrop-blur
//                          hover:shadow-xl hover:shadow-pink-500/20 hover:border-pink-400
//                          transition-all duration-300 cursor-pointer flex flex-col gap-4"
//             >
//               {/* Avatar */}
//               <div className="flex flex-col items-center text-center gap-3">
//                 <img
//                   src={q.avatar}
//                   alt={q.name}
//                   className="w-16 h-16 object-cover rounded-full border border-white/10"
//                 />

//                 {/* Stars */}
//                 <div className="flex gap-1 text-yellow-400 text-sm">
//                   {"★".repeat(q.stars)}
//                   {"☆".repeat(5 - q.stars)}
//                 </div>
//               </div>

//               <p className="text-gray-300 text-sm leading-relaxed text-center">
//                 “{q.text}”
//               </p>

//               <div className="flex flex-col items-center text-center">
//                 <span className="text-gray-100 font-medium text-sm">{q.name}</span>
//                 <span className="text-gray-400 text-xs">{q.role}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const quotes = [
  {
    name: "Priya K.",
    role: "26 • Combination Skin",
    text: "My skin looked more even and smoother by week three. The texture feels luxe but sinks in instantly.",
    stars: 5,
    img: "/brightening.png",
  },
  {
    name: "Neha S.",
    role: "29 • Frequent Traveller",
    text: "No breakouts, no irritation — just a soft glow. It fits perfectly under my sunscreen and makeup.",
    stars: 5,
    img: "/sensitive.png",
  },
  {
    name: "Rohit M.",
    role: "31 • Dry Skin",
    text: "Hydration without oiliness is rare. This is the first serum I’ve actually repurchased.",
    stars: 4,
    img: "/hydration.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Loved by Real People</h2>
        <p className="mt-2 text-center text-gray-400 text-sm md:text-base">
          GlowSkin is part of thousands of everyday routines.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div
              key={q.name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10
                         hover:border-pink-400 hover:shadow-xl hover:scale-[1.02]
                         transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-3"
            >
              <img
                src={q.img}
                alt={q.name}
                className="w-14 h-14 rounded-full object-cover border border-white/20"
              />

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-sm">
                {"★".repeat(q.stars)}
                {"☆".repeat(5 - q.stars)}
              </div>

              <p className="text-gray-200 text-sm leading-relaxed">
                “{q.text}”
              </p>

              <div className="mt-2">
                <div className="text-gray-100 text-sm font-medium">{q.name}</div>
                <div className="text-gray-400 text-xs">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
