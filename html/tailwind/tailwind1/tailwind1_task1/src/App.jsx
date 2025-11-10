function App() {
  return(
    <div>
      <div className="flex h-24">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-green-600"></div>
        
      </div>
        
      <div className="flex justify-center" >
        <img src="" alt="profile-picture" className="w-30 h-30 border-2 rounded-full border-grey" />
      </div>
      <div className="flex flex-col items-center">
      <p className="font-bold">Simeon Akinrinola</p>
      <p>AI Developer</p>
      <p>Abeokuta</p>
      </div>

      <div className="flex justify-center gap-20 mt-5">
        <p>100 followers</p>
        <p>2 posts</p>
        <p>500 likes</p>
      </div>

      <div className="border w-100 flex m-auto shadow-xs">
        

      </div>
    </div>

  )
}

export default App