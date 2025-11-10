// **Task:** Create a color picker where RGB sliders update a color preview

// **Requirements:**
// 1. Create parent component `ColorPicker.jsx`
// 2. Create `RGBSlider.jsx` component (reusable for R, G, B)
// 3. Create `ColorDisplay.jsx` component to show the color
// 4. Lift RGB values state to parent
// 5. Each slider ranges from 0-255
// 6. Display the RGB values and hex code

// 7. Show color preview box


import { useState } from "react"
import RGBSlider from "./RGBSlider"
import ColorDisplay from "./ColorDisplay"

function ColorPicker() {
    const [colors, setColors] = useState({
        red: 0,
        green: 0,
        blue: 0,
    })

    const handleSliderChange = (color, value) => {
        setColors(prevColors => ({
            ...prevColors,
            [color]: value
        }))
    }

    return (
        <div>
            <RGBSlider
                color="red"
                value={colors.red}
                onSliderChange={handleSliderChange}
            />
            <RGBSlider
                color="green"
                value={colors.green}
                onSliderChange={handleSliderChange}
            />
            <RGBSlider
                color="blue"
                value={colors.blue}
                onSliderChange={handleSliderChange}
            />
            <ColorDisplay colors={colors} />
        </div>
    )
}

export default ColorPicker
