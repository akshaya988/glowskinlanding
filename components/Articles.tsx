// ...existing code...
import Image from "next/image";

export default function Articles() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Dermatologist tested article */}
        <div>
          <Image
            src="/images/derm.jpeg"
            alt="Dermatologist tested"
            width={700}
            height={256}
            className="w-full h-64 rounded-xl object-cover"
          />
          <p className="mt-3 text-gray-900 font-medium">
            Dermatologically tested: safe for all skin types
          </p>
          <p className="text-gray-500 text-sm">Trusted dermatologist</p>
        </div>

        {/* Vitamin C / dark spots article */}
        <div>
          <Image
            src="/images/darkspots.jpg"
            alt="How Vitamin C treats dark spots"
            width={700}
            height={256}
            className="w-full h-64 rounded-xl object-cover"
          />
          <p className="mt-3 font-medium">
            How Vitamin C and Niacinamide help reduce dark spots
          </p>
          <p className="text-gray-500 text-sm">GlowSkin advisory</p>
        </div>
      </div>
    </section>
  );
}
// ...existing code...