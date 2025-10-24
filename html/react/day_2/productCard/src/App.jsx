import ProductCard from "./components/ProductCard"
import "./App.css"

function App() {
  return (
    <div className="overall-container">
      <ProductCard name={"Rice"} price={"1000 Naira"} image={"https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg"} inStock={true}/>
      <ProductCard name={"Flour"} price={"5000 Naira"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1qx2_0vNdmCXvRv4vnkIzGNFryJnmAlsg&s"} inStock={true}/>
      <ProductCard name={"Yam"} price={"500 Naira"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz303YgCs0VC6gZvdI2ucO7g9ZruqM05J3PA&s"} inStock={false}/>
    </div>
  )
}
export default App
