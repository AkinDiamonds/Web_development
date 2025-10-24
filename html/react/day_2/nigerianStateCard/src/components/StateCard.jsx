import "./StateCard.css"

function StateCard({ state, capital, region, population, children }) {
    const bg = {
        North: `#8B4513`,
        South: `#008751`,
        East: `#FFD700`,
        West: `#4169E1`
    }
    return (
        <div className="state-card" style= {{backgroundColor: bg[region]}}>
            <p>{state}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            {children}
        </div>
    )
}

export default StateCard