// export default function Pricing() {
//   return (
//     <section id="pricing" className="py-16">
//       <h2 className="text-2xl font-bold text-center">Pricing</h2>
//       <p className="text-center text-gray-600 mt-2">Simple plans — real results.</p>

//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="p-6 border rounded-lg text-center">
//           <h3 className="font-semibold text-lg">Starter</h3>
//           <div className="text-3xl font-bold mt-4">₹699</div>
//           <p className="mt-2 text-gray-600">30ml — 1 month supply</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>

//         <div className="p-6 border rounded-lg text-center shadow-lg">
//           <h3 className="font-semibold text-lg">Best Value</h3>
//           <div className="text-3xl font-bold mt-4">₹1,799</div>
//           <p className="mt-2 text-gray-600">3 x 30ml — Save 15%</p>
//           <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
//         </div>

//         <div className="p-6"></div>
export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <h2 className="text-2xl font-bold text-center">Pricing</h2>
      <p className="text-center text-gray-600 mt-2">Simple plans — real results.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg text-center">
          <h3 className="font-semibold text-lg">Starter</h3>
          <div className="text-3xl font-bold mt-4">₹699</div>
          <p className="mt-2 text-gray-600">30ml — 1 month supply</p>
          <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
        </div>

        <div className="p-6 border rounded-lg text-center shadow-lg">
          <h3 className="font-semibold text-lg">Best Value</h3>
          <div className="text-3xl font-bold mt-4">₹1,799</div>
          <p className="mt-2 text-gray-600">3 x 30ml — Save 15%</p>
          <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="font-semibold text-lg">Premium</h3>
          <div className="text-3xl font-bold mt-4">₹3,299</div>
          <p className="mt-2 text-gray-600">6 x 30ml — Save 25%</p>
          <button className="mt-6 px-4 py-2 bg-pink-600 text-white rounded">Buy</button>
        </div>
      </div>
    </section>
  );
}