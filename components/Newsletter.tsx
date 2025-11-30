// export default function Newsletter() {
//   return (
//     <section className="py-16 text-center">
//       <p className="text-lg font-serif">
//         Get 10% off your next order,
//       </p>
//       <p className="text-lg mb-8 font-serif">
//         Subscribe to our Glow Newsletter
//       </p>

//       <div className="max-w-md mx-auto flex gap-2">
//         <input
//           placeholder="Enter your email"
//           className="flex-1 py-3 px-4 border rounded-full"
//         />
//         <button className="px-6 py-3 bg-black text-white rounded-full">
//           SUBSCRIBE
//         </button>
//       </div>
//     </section>
//   );
// }
export default function Newsletter() {
  return (
    <section
      id="search"
      className="py-20 bg-black/30 backdrop-blur border-t border-white/10 text-center"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white">
        Get 10% off your next order
      </h3>
      <p className="mt-2 text-sm text-gray-400">
        Subscribe to the GlowSkin newsletter
      </p>

      <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-full bg-black/50 border border-white/15
                     placeholder:text-gray-500 text-gray-100
                     focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-600/30"
        />

        <button
          className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600
                     text-white text-sm font-medium transition-all shadow-md"
        >
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
}
