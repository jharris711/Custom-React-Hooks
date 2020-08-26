import { useState } from 'react'

// Any time this hook is called, pass in the initial value:
export default initialVal => {
    // Reserve value's place in state:
    const [value, setValue] = useState(initialVal)
    // Handle the change in state:
    const handleChange = e => setValue(e.target.value)
    // Reset the input:
    const reset = () => setValue("")
    // Return everything:
    return [value, handleChange, reset]
}

