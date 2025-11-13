function StatsDashboard() {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="p-6 bg-green-100 border border-green-300 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold">N2.5M</h2>
          <p className="text-gray-700">Total Sales</p>
          <span className="text-green-600 text-sm">+12% ↑</span>
        </div>

        <div className="p-6 bg-blue-100 border border-blue-300 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold">1,234</h2>
          <p className="text-gray-700">Orders</p>
          <span className="text-blue-600 text-sm animate-bounce">+8% ↑</span>
        </div>

        <div className="p-6 bg-yellow-100 border border-yellow-300 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold">567</h2>
          <p className="text-gray-700">Customers</p>
          <span className="text-yellow-600 text-sm">+23% ↑</span>
        </div>

        <div className="p-6 bg-emerald-100 border border-emerald-300 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold">N4.2M</h2>
          <p className="text-gray-700">Revenue</p>
          <span className="text-emerald-600 text-sm">+15% ↑</span>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
