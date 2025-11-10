function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">

      <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition">
        Primary Button
      </button>

      <button className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-md font-semibold hover:bg-green-50 transition">
        Secondary Button
      </button>

      <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
        Danger Button
      </button>

      <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition">
        Success Button
      </button>

      <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition">
        Large Button
      </button>

      <button className="bg-green-600 text-white px-3 py-1 rounded-md font-semibold text-sm hover:bg-green-700 transition">
        Small Button
      </button>

    </div>
  );
}

export default App;
