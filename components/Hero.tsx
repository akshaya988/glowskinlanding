
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center pt-32 pb - 20"
    >
      <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-3xl leading-tight">
        Reveal your natural glow
      </h1>

      <p className="mt-4 text-gray-500 text-lg max-w-xl">
        Dermatologist-tested formula that brightens dull skin and deeply hydrates.
      </p>

      <button className="mt-8 px-8 py-3 text-sm rounded-full 
bg-gradient-to-r from-pink-400 to-pink-600 text-white 
hover:from-pink-500 hover:to-pink-700 hover:scale-105
transition-all duration-200 shadow-lg">

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