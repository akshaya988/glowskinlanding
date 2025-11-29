// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
//         <div className="flex items-center gap-2">
//           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white text-sm font-bold">
//             G
//           </div>
//           <span className="text-lg font-semibold tracking-tight">GlowSkin</span>
//         </div>
//         <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
//           <a href="#features" className="hover:text-pink-600">Features</a>
//           <a href="#testimonials" className="hover:text-pink-600">Reviews</a>
//           <a href="#pricing" className="hover:text-pink-600">Pricing</a>
//         </nav>
//         <a
//           href="#pricing"
//           className="rounded-full bg-pink-600 px-4 py-2 text-xs md:text-sm font-medium text-white shadow-sm hover:bg-pink-700"
//         >
//           Shop Now
//         </a>
//       </div>
//     </header>
//   );
// }
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4">
      <h1 className="text-xl font-serif font-bold">GlowSkin</h1>

      <div className="hidden md:flex gap-8 text-sm text-gray-600">
        <a href="#hero">Home</a>
        <a href="#features">Product</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="flex gap-4 text-gray-600">
        <span>🔍</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}
