function RGBSlider({ color, value, onSliderChange }) {
    return (
        <div>
            <label>{color}</label>
            <input
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={(e) => onSliderChange(color, e.target.value)}
            />
        </div>
    )
}
export default RGBSlider;