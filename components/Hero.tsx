export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            GlowSkin — Reveal Your Natural Glow
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Clinically-formulated serum that brightens, evens tone, and hydrates for visibly radiant skin.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#pricing" className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg shadow">
              Buy Now
            </a>
            <a href="#features" className="inline-block px-6 py-3 border border-pink-600 rounded-lg">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-80 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl shadow flex items-center justify-center">
            <div className="w-56 h-56 bg-pink-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
