// export default function Pricing() {
//   return (
//     <section id="pricing" className="py-16">
//       <h2 className="text-2xl font-bold text-center">Pricing</h2>
//       <p className="text-center text-gray-600 mt-2">Simple plans — real results.</p>

//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="p-6 border rounded-lg text-center">
//           <h3 className="font-semibold text-lg">Starter</h3>
//           <div className="text-3xl font-bold mt-4">₹699</div>
//           <p className="mt-2 text-gray-600">30ml — 1 month supply</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>

//         <div className="p-6 border rounded-lg text-center shadow-lg">
//           <h3 className="font-semibold text-lg">Best Value</h3>
//           <div className="text-3xl font-bold mt-4">₹1,799</div>
//           <p className="mt-2 text-gray-600">3 x 30ml — Save 15%</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>

//         <div className="p-6"></div>
// export default function Pricing() {
//   return (
//     <section id="pricing" className="py-16">
//       <h2 className="text-2xl font-bold text-center">Pricing</h2>
//       <p className="text-center text-gray-600 mt-2">Simple plans — real results.</p>

//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="p-6 border rounded-lg text-center">
//           <h3 className="font-semibold text-lg">Starter</h3>
//           <div className="text-3xl font-bold mt-4">₹699</div>
//           <p className="mt-2 text-gray-600">30ml — 1 month supply</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>

//         <div className="p-6 border rounded-lg text-center shadow-lg">
//           <h3 className="font-semibold text-lg">Best Value</h3>
//           <div className="text-3xl font-bold mt-4">₹1,799</div>
//           <p className="mt-2 text-gray-600">3 x 30ml — Save 15%</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>

//         <div className="p-6 border rounded-lg text-center">
//           <h3 className="font-semibold text-lg">Premium</h3>
//           <div className="text-3xl font-bold mt-4">₹3,299</div>
//           <p className="mt-2 text-gray-600">6 x 30ml — Save 25%</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// const plans = [
//   {
//     name: "Starter",
//     price: "₹699",
//     note: "30 ml · 1 month",
//     popular: false,
//     features: ["Daily AM or PM use", "Great for first-time users", "Works with existing routine"],
//   },
//   {
//     name: "Glow Duo",
//     price: "₹1,299",
//     note: "2 × 30 ml · Save 7%",
//     popular: true,
//     features: ["Ideal for 2–3 months", "Share with a friend", "Free shipping included"],
//   },
//   {
//     name: "Routine Set",
//     price: "₹1,999",
//     note: "3 × 30 ml · Save 20%",
//     popular: false,
//     features: ["Best long-term value", "Morning & night routine", "Priority support"],
//   },
// ];

// export default function Pricing() {
//   return (
//     <section id="pricing" className="py-16">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold tracking-tight">Choose your glow plan</h2>
//           <p className="mt-2 text-sm text-slate-500 sm:text-base">
//             Start small or commit to a full routine — your glow, your pace.
//           </p>
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {plans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`flex flex-col rounded-2xl border bg-white/70 p-6 shadow-sm ${
//                 plan.popular
//                   ? "border-pink-400 shadow-lg shadow-pink-100 scale-[1.02]"
//                   : "border-rose-100"
//               }`}
//             >
//               {plan.popular && (
//                 <div className="mb-3 inline-flex self-start rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
//                   Most popular ✨
//                 </div>
//               )}
//               <h3 className="text-base font-semibold text-slate-900">{plan.name}</h3>
//               <div className="mt-3 flex items-baseline gap-1">
//                 <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
//               </div>
//               <div className="text-xs text-slate-500">{plan.note}</div>

//               <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-500" />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className={`mt-6 w-full rounded-full px-4 py-2 text-sm font-semibold transition ${
//                   plan.popular
//                     ? "bg-pink-600 text-white shadow-md hover:bg-pink-700"
//                     : "border border-pink-200 text-pink-700 hover:border-pink-400"
//                 }`}
//               >
//                 Add to bag
//               </button>
//             </div>
//           ))}
//         </div>

//         <p className="mt-6 text-center text-xs text-slate-500">
//           Free shipping on orders above ₹999. 30-day satisfaction guarantee.
//         </p>
//       </div>
//     </section>
//   );
// }
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold text-slate-800">GlowSkin</span> · © {year}
        </div>
        <div className="flex flex-wrap gap-4">
          <span>support@glowskin.example</span>
          <span>·</span>
          <a href="#" className="hover:text-pink-600">
            Terms
          </a>
          <a href="#" className="hover:text-pink-600">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
