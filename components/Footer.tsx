// export default function Footer() {
//   return (
//     <footer className="mt-12 border-t">
//       <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
//         <div>© {new Date().getFullYear()} GlowSkin</div>
//         <div className="text-sm text-gray-600">
//           Contact: support@glowskin.example | Terms • Privacy
//         </div>
//       </div>
//     </footer>
//   )
// }
export default function Footer() {
  return (
    <footer className="py-16 border-t text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-12">
        <div>
          <p className="font-serif font-semibold text-lg">GlowSkin</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Connect</p>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>Youtube</li>
            <li>TikTok</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Support</p>
          <ul className="space-y-1">
            <li>Shipping</li>
            <li>FAQs</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">About</p>
          <ul className="space-y-1">
            <li>Our Story</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-400">
        Designed by Akshaya • GlowSkin © 2025
      </div>
    </footer>
  );
}
