function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
        
  
        <div className="flex h-24">
          <div className="flex-1 bg-green-600"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-green-600"></div>
        </div>

        
        <div className="flex justify-center -mt-10">
          <img
            src=""
            alt="profile-picture"
            className="w-24 h-24 border-4 border-white rounded-full shadow-md"
          />
        </div>

        
        <div className="flex flex-col items-center mt-2 px-4 text-center">
          <p className="font-bold text-lg">Simeon Akinrinola</p>
          <p className="text-sm text-gray-600">AI Developer</p>
          <p className="text-sm text-gray-500">Abeokuta, Nigeria</p>
        </div>

       
        <div className="flex justify-between mt-5 px-6">
          <div className="flex flex-col items-center">
            <p className="font-bold text-lg">100</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="flex flex-co
          l items-center">
            <p className="font-bold text-lg">2</p>
            <p className="text-gray-500 text-sm">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-lg">500</p>
            <p className="text-gray-500 text-sm">Likes</p>
          </div>
        </div>

       
        <div className="mt-4 px-6 text-center text-sm text-gray-600">
          <p>
            Passionate AI developer.
          </p>
        </div>

        <div className="flex justify-center mt-5 mb-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
