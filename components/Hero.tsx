
// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-b from-pink-50 via-white to-rose-50">
//       <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-20 pt-16 lg:flex-row lg:pt-24">
//         {/* Left */}
//         <div className="flex-1 space-y-6">
//           <div className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-3 py-1 text-xs text-pink-600 shadow-sm">
//             <span className="h-2 w-2 rounded-full bg-pink-500" />
//             Dermatologist tested • For all skin types
//           </div>

//           <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//             Reveal your
//             <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
//               {" "}natural glow
//             </span>
//             .
//           </h1>

//           <p className="max-w-xl text-base text-slate-600 sm:text-lg">
//             GlowSkin is a clinically-formulated brightening serum that targets dark spots,
//             evens out skin tone and deeply hydrates — without feeling heavy or sticky.
//           </p>

//           <div className="flex flex-wrap items-center gap-4">
//             <a
//               href="#pricing"
//               className="rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-700"
//             >
//               Buy Now
//             </a>
//             <a
//               href="#features"
//               className="text-sm font-medium text-pink-700 underline-offset-4 hover:underline"
//             >
//               View ingredients & benefits
//             </a>
//           </div>

//           <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-500">
//             <div>
//               <div className="text-base font-semibold text-slate-900">4 weeks</div>
//               <div className="text-xs">Visible brightness*</div>
//             </div>
//             <div>
//               <div className="text-base font-semibold text-slate-900">92%</div>
//               <div className="text-xs">Users saw smoother skin</div>
//             </div>
//             <div>
//               <div className="text-base font-semibold text-slate-900">0%</div>
//               <div className="text-xs">Parabens • Sulfates • Silicones</div>
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="flex-1">
//           <div className="relative mx-auto flex h-80 w-72 max-w-full items-center justify-center rounded-3xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-50 shadow-2xl lg:h-96 lg:w-80">
//             <div className="absolute -top-4 -left-4 rounded-2xl bg-white/70 px-3 py-2 text-xs shadow-md backdrop-blur">
//               ✨ Reduces dullness
//             </div>
//             <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/70 px-3 py-2 text-xs shadow-md backdrop-blur">
//               🌙 AM & PM routine
//             </div>
//             <div className="h-48 w-16 rounded-3xl bg-pink-500/80 shadow-xl shadow-pink-300" />
//             <div className="ml-4 h-56 w-20 rounded-3xl bg-white shadow-xl shadow-pink-200 ring-1 ring-pink-100" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-24"
    >
      <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-3xl leading-tight">
        Reveal your natural glow
      </h1>

      <p className="mt-4 text-gray-500 text-lg max-w-xl">
        Dermatologist-tested formula that brightens dull skin and deeply hydrates.
      </p>

      <button className="mt-8 px-8 py-3 bg-black text-white text-sm rounded-full">
        SHOP NOW
      </button>

      {/* Product hero image */}
      <div className="mt-16 w-full max-w-4xl">
        <Image
          src="/images/hero.jpg"
          alt="GlowSkin serum product"
          width={800}
          height={300}
          className="rounded-xl object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}