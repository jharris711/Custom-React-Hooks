// Toggle boolean state:
import { useState } from 'react'


const useToggle = (initialVal = false) => {
    // Call useState, 'reserve piece of state':
    const [state, setState] = useState(initialVal)
    // Set state to the opposite of the current state:
    const toggle = () => {
        setState(!state)
    }
    // Return the state and the toggle function:
    return [state, toggle]
}


export default useToggle