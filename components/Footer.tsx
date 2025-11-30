
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30 backdrop-blur text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-8 py-16 grid gap-10 md:grid-cols-4">
        
        <div>
          <p className="font-serif font-bold text-xl text-white mb-2">GlowSkin</p>
          <p className="text-gray-400 text-xs max-w-xs">
            Clinically formulated skincare for a brighter, healthier you.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Connect</p>
          <ul className="space-y-1">
            <li className="hover:text-pink-400 cursor-pointer">Instagram</li>
            <li className="hover:text-pink-400 cursor-pointer">YouTube</li>
            <li className="hover:text-pink-400 cursor-pointer">TikTok</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Support</p>
          <ul className="space-y-1">
            <li className="hover:text-pink-400 cursor-pointer">Shipping</li>
            <li className="hover:text-pink-400 cursor-pointer">FAQs</li>
            <li className="hover:text-pink-400 cursor-pointer">Returns</li>
            <li className="hover:text-pink-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">About</p>
          <ul className="space-y-1">
            <li className="hover:text-pink-400 cursor-pointer">Our Story</li>
            <li className="hover:text-pink-400 cursor-pointer">Press</li>
            <li className="hover:text-pink-400 cursor-pointer">Careers</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6 text-xs text-gray-500 border-t border-white/10">
        Designed by <span className="text-pink-400 font-medium">Akshaya</span> • GlowSkin © {year}
      </div>
    </footer>
  );
}

