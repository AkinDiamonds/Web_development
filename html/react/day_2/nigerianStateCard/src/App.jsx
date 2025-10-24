import StateCard from "./components/StateCard";

function App() {
  return (
    <div>
      <StateCard state={"Ogun"} capital={"Abeokuta"} region={"West"} population={"5 million"}>
        <div>Olumo Rock</div>
        <p>The major historical site</p>
      </StateCard>
      <StateCard state={"Lagos"} capital={"Ikeja"} region={"West"} population={"20 million"}></StateCard>
      <StateCard state={"Kwara"} capital={"Ilorin"} region={"North"} population={"2 million"}></StateCard>
      <StateCard state={"Abia"} capital={"Umaiaha"} region={"East"} population={"3 million"}></StateCard>
    </div>
  )
}

export default App