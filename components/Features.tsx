const features = [
  {
    title: 'Brightening Complex',
    desc: 'Targets dark spots & evens skin tone with stable vitamin C derivatives.'
  },
  {
    title: 'Deep Hydration',
    desc: 'Hyaluronic acid + squalane lock moisture without greasiness.'
  },
  {
    title: 'Clean Ingredients',
    desc: 'No parabens, sulfates, or silicones — dermatologist tested.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-2xl font-bold text-center">Key Features</h2>
      <p className="text-center text-gray-600 mt-2">Formulated for all skin types with visible results in 4 weeks.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
