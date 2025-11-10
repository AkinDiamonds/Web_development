function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
        
        <div className="relative">
          <img
            src="https://via.placeholder.com/400x200"
            alt="news"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Politics
          </span>
        </div>

        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800 leading-snug">
            Nigerian Senate Approves New Economic Reform Plan
          </h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            The Nigerian Senate has passed a comprehensive...
          </p>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <p>By <span className="font-semibold text-gray-700">Simeon Akinrinola</span></p>
            <p>Nov 10, 2025</p>
          </div>

          <div className="mt-4">
            
              Read more
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
