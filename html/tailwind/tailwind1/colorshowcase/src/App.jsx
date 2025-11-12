function App() {
  const colors = [
    { name: "Naija Green 50", hex: "#ECFDF5" },
    { name: "Naija Green 100", hex: "#D1FAE5" },
    { name: "Naija Green 200", hex: "#A7F3D0" },
    { name: "Naija Green 300", hex: "#6EE7B7" },
    { name: "Naija Green 400", hex: "#34D399" },
    { name: "Naija Green 500", hex: "#10B981" },
    { name: "Naija Green 600", hex: "#059669" },
    { name: "Naija Green 700", hex: "#047857" },
    { name: "Naija Green 800", hex: "#065F46" },
    { name: "Naija Green 900", hex: "#064E3B" },
    { name: "Naija Green 950", hex: "#022C22" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Nigerian Color Palette</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-green-600 rounded-lg shadow-md"></div>
          <p className="text-sm text-gray-700 mt-2 font-medium">Green</p>
          <p className="text-xs text-gray-500">#008751</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white border rounded-lg shadow-md"></div>
          <p className="text-sm text-gray-700 mt-2 font-medium">White</p>
          <p className="text-xs text-gray-500">#FFFFFF</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-green-600 rounded-lg shadow-md"></div>
          <p className="text-sm text-gray-700 mt-2 font-medium">Green</p>
          <p className="text-xs text-gray-500">#008751</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-4">Naija Green Shades</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded-lg shadow-md border"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p className="text-sm text-gray-800 mt-2 font-medium">{color.name}</p>
            <p
              className={`text-xs ${
                index < 4 ? "text-gray-700" : "text-gray-200"
              }`}
            >
              {color.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
