function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transition">

        <div className="overflow-hidden">
          <img
            src="https://weeatatlast.com/wp-content/uploads/2022/11/chicken-jollof-rice.jpg"
            alt="jollof rice"
            className="w-full h-48 object-cover transform \"
          />
        </div>

        <div className="p-5 text-center">
          <h2 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition">
            Naija Jollof Rice
          </h2>
          <p className="text-green-600 font-bold mt-2">N1,500</p>

          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md font-semibold shadow-sm hover:bg-green-700 cursor-pointer active:scale-95 transition duration-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
