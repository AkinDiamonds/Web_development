function HomePage() {
  const details = [
            { name: "Smart Curtain", price: "₦1,500" },
            { name: "Smart Bed", price: "₦5,000" },
            { name: "Smart Coffe Maker", price: "₦1,000" },
            { name: "Aso-Ebi", price: "₦15,000" },
            { name: "Palm Wine", price: "₦1,200" },
            { name: "Agbada", price: "₦25,000" },
          ]

  const supplies = ["Food", "Clothing", "Drinks", "Crafts", "Accessories", "Cultural"]
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex justify-between items-center px-6 py-4 bg-green-600 text-white">
        <h1 className="text-2xl font-bold hover:cursor-pointer">EbukaShop</h1>
        <ul className="hidden md:flex gap-6">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">Shop</li>
          <li className="hover:cursor-pointer">Categories</li>
          <li className="hover:cursor-pointer">Contact</li>
        </ul>
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-green-100 hover:text-gray-500">Login</button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 bg-green-100 px-4">
        <h2 className="text-4xl font-bold mb-4">Shop Ebuka, Shop Quality</h2>
        <p className="text-lg mb-6">Authentic products made with pride in Naija.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer transition">Start Shopping</button>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((product, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-lg transition">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-green-600 font-bold">{product.price}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white px-6">
        <h3 className="text-2xl font-bold mb-8 text-center">Shop by Category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {supplies.map((c, i) => (
            <div key={i} className="p-6 bg-green-100 text-center rounded-lg hover:bg-green-200 transition cursor-pointer">
              {c}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-green-600 text-white py-8 text-center">
        <p>© 2025 Ebuka & Sons Exporter Shop. Proudly Made in Nigeria.</p>
      </footer>
    </div>
  );
};

export default HomePage;
