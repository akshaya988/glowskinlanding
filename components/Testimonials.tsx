const quotes = [
  { name: 'Priya K.', text: 'My skin looks brighter and smoother within 3 weeks. Love the texture!' },
  { name: 'Neha S.', text: 'No breakouts, just glow. I travel a lot and this stays gentle.' },
  { name: 'Rohit M.', text: 'Great serum — quick absorption and excellent hydration.' }
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center">What Customers Say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map(q => (
          <blockquote key={q.name} className="p-6 border rounded-lg">
            <p className="text-gray-700">“{q.text}”</p>
            <footer className="mt-4 text-sm text-gray-500">— {q.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
