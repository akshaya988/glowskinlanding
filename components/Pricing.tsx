
// export default function Pricing() {
//   return (
//     <section id="pricing" className="mt-20 border-t border-white/10 bg-black/20 backdrop-blur py-16">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-white">Pricing</h2>
//         <p className="text-gray-400 mt-2">
//           Choose the GlowSkin routine that fits your needs.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           {/* Starter */}
//           <div className="p-6 rounded-2xl bg-black/30 border border-white/10 text-gray-300 hover:border-pink-500 transition">
//             <h3 className="text-xl font-semibold text-white">Starter</h3>
//             <p className="mt-2 text-sm">30ml • 1 Month Supply</p>
//             <div className="text-4xl font-bold mt-4 text-white">₹699</div>
//             <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
//               BUY NOW
//             </button>
//           </div>

//           {/* Best Value */}
//           <div className="p-6 rounded-2xl bg-black/40 border border-pink-500/40 shadow-lg text-gray-300 hover:border-pink-500 transition">
//             <h3 className="text-xl font-semibold text-white">Best Value</h3>
//             <p className="mt-2 text-sm">3 x 30ml • Save 15%</p>
//             <div className="text-4xl font-bold mt-4 text-white">₹1,799</div>
//             <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg shadow">
//               BUY NOW
//             </button>
//           </div>

//           {/* Luxury */}
//           <div className="p-6 rounded-2xl bg-black/30 border border-white/10 text-gray-300 hover:border-pink-500 transition">
//             <h3 className="text-xl font-semibold text-white">Luxury</h3>
//             <p className="mt-2 text-sm">6 x 30ml • Save 30%</p>
//             <div className="text-4xl font-bold mt-4 text-white">₹2,999</div>
//             <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Choose Your Glow Routine
        </h2>
        <p className="text-gray-500 mt-2">
          Smart bundles that actually save you money.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Starter */}
          <div className="p-6 border rounded-xl bg-white/5 backdrop-blur
                          hover:scale-[1.03] hover:border-pink-400 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-400 text-sm mt-1">
              1 x GlowSkin Serum
            </p>
            <div className="mt-4 text-3xl font-bold text-pink-400">₹699</div>
            <p className="text-gray-500 text-xs mt-2">30ml — 1 Month Supply</p>
            <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 hover:shadow-pink-500/40 hover:scale-105
 ">
              BUY NOW
            </button>
          </div>

          {/* Best Value */}
          <div className="p-6 border rounded-xl bg-gradient-to-b from-pink-300/20 to-black/50 backdrop-blur
                          shadow-lg scale-[1.05] border-pink-400">
            <span className="text-xs font-semibold text-pink-300 uppercase tracking-wide">
              ✨ Most Popular
            </span>
            <h3 className="text-xl font-semibold mt-1">Glow Duo</h3>
            <p className="text-gray-300 text-sm mt-1">
              2 x GlowSkin Serum
            </p>
            <div className="mt-4 text-3xl font-bold text-pink-300">₹1,299</div>
            <p className="text-gray-300 text-xs mt-2">Save 10%</p>
            <button className="mt-6 w-full py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              BUY NOW
            </button>
          </div>

          {/* Bundle */}
          <div className="p-6 border rounded-xl bg-white/5 backdrop-blur
                          hover:scale-[1.03] hover:border-pink-400 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold">Glow Bundle</h3>
            <p className="text-gray-400 text-sm mt-1">
              3 x GlowSkin Serum
            </p>
            <div className="mt-4 text-3xl font-bold text-pink-400">₹1,999</div>
            <p className="text-gray-500 text-xs mt-2">Save 20%</p>
            <button className="mt-6 w-full py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
              BUY NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
