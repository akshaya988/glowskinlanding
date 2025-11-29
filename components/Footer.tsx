export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} GlowSkin</div>
        <div className="text-sm text-gray-600">
          Contact: support@glowskin.example | Terms • Privacy
        </div>
      </div>
    </footer>
  )
}
