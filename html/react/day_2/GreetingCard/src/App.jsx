import GreetingCard from "./components/GreetingCard"
function App() {
  return (
    <div>
      <GreetingCard name={"Simeon"} message={"How are you today?"} color={"blue"}></GreetingCard>
      <GreetingCard name={"Deji"} message={"Are you the devil?"} color={"orange"}></GreetingCard>
      <GreetingCard name={"Olamide"} message={"You are the devil's seat partner, correct?"} color={"yellow"}></GreetingCard>
    </div>
  )
}
export default App
