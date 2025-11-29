export default function Newsletter() {
  return (
    <section className="py-16 text-center">
      <p className="text-lg font-serif">
        Get 10% off your next order,
      </p>
      <p className="text-lg mb-8 font-serif">
        Subscribe to our Glow Newsletter
      </p>

      <div className="max-w-md mx-auto flex gap-2">
        <input
          placeholder="Enter your email"
          className="flex-1 py-3 px-4 border rounded-full"
        />
        <button className="px-6 py-3 bg-black text-white rounded-full">
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
}
