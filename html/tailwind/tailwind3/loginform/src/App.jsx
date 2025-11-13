import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Welcome
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none transition"
            placeholder="samuelakinrinola7@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none transition"
            placeholder="password123"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-700 text-sm">
            <input type="checkbox" className="mr-2 accent-green-600" />
            Remember me
          </label>
          <a href="#" className="text-green-600 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md font-semibold text-white transition ${
            loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? (
            <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default App;
