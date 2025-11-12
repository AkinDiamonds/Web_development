function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Basic</h2>
          <p className="text-3xl font-bold text-green-600 mb-4">₦5,000<span className="text-base text-gray-500">/month</span></p>
          <ul className="text-gray-600 text-sm space-y-2 mb-6">
            <li>✔ 5 Projects</li>
            <li>✔ Basic Support</li>
            <li>✔ Access to Tutorials</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>

        <div className="bg-green-600 text-white rounded-xl shadow-xl p-10 text-center transform scale-105 hover:scale-110 transition">
          <h2 className="text-2xl font-bold mb-3">Pro</h2>
          <p className="text-4xl font-bold mb-4">₦15,000<span className="text-base text-green-100">/month</span></p>
          <ul className="text-green-100 text-sm space-y-2 mb-6">
            <li>✔ 20 Projects</li>
            <li>✔ Priority Support</li>
            <li>✔ Advanced Analytics</li>
          </ul>
          <button className="bg-white text-green-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            Choose Plan
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Enterprise</h2>
          <p className="text-3xl font-bold text-green-600 mb-4">₦50,000<span className="text-base text-gray-500">/month</span></p>
          <ul className="text-gray-600 text-sm space-y-2 mb-6">
            <li>✔ Unlimited Projects</li>
            <li>✔ Dedicated Support</li>
            <li>✔ Custom Integrations</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
