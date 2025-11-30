
// export default function Navbar() {
//   return (
//     <header className="fixed top-0 inset-x-0 z-30 bg-black/30 backdrop-blur border-b border-white/10">
//       <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-sm">
        
//         {/* Brand */}
//         <a href="#hero" className="text-xl font-serif font-bold text-white">
//           GlowSkin
//         </a>

//         {/* Menu */}
//         <div className="hidden md:flex gap-8 text-gray-300">
//           <a href="#hero" className="hover:text-pink-400 transition">
//             Home
//           </a>
//           <a href="#features" className="hover:text-pink-400 transition">
//             Product
//           </a>
//           <a href="#testimonials" className="hover:text-pink-400 transition">
//             Reviews
//           </a>
//           <a href="#pricing" className="hover:text-pink-400 transition">
//             Pricing
//           </a>
//         </div>

//         {/* Icons */}
//         <div className="hidden sm:flex gap-5 text-gray-300">
//           <span className="hover:text-pink-400 cursor-pointer transition">🔍</span>
//           <span className="hover:text-pink-400 cursor-pointer transition">🛒</span>
//         </div>

//       </nav>
//     </header>
//   );
// }
export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-black/30 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-sm">

        {/* Brand */}
        <a
          href="#hero"
          className="text-xl font-serif font-bold text-white hover:text-pink-300 transition"
        >
          GlowSkin
        </a>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-400 font-light">
          <a
            href="#hero"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_6px_#f472b6] hover:underline underline-offset-4 transition"
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_6px_#f472b6] hover:underline underline-offset-4 transition"
          >
            Product
          </a>
          <a
            href="#testimonials"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_6px_#f472b6] hover:underline underline-offset-4 transition"
          >
            Reviews
          </a>
          <a
            href="#pricing"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_6px_#f472b6] hover:underline underline-offset-4 transition"
          >
            Pricing
          </a>
        </div>

        {/* Icons */}
        <div className="hidden sm:flex gap-5 text-gray-300">
          <span className="hover:text-pink-400 hover:drop-shadow-[0_0_8px_#f472b6] cursor-pointer transition">🔍</span>
          <span className="hover:text-pink-400 hover:drop-shadow-[0_0_8px_#f472b6] cursor-pointer transition">🛒</span>
        </div>
      </nav>
    </header>
  );
}
