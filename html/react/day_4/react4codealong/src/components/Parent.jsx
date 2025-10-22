import Child from "Child.jsx"
import { useState } from "react"

function Parent() {
    const [message, setMessage] = useState('Hello from Parent');
    return <Child message={message} />;
}

export default Parent