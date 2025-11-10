function ColorDisplay({ colors }) {
    const { red, green, blue } = colors
    const hex = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`

    return (
        <div>
            <h2>Color Preview</h2>
            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }} />
            <p>RGB: {red}, {green}, {blue}</p>
            <p>Hex: {hex}</p>
        </div>
    )
}
export default ColorDisplay;