// Toggle boolean state:
import { useState } from 'react'

const useToggle = (initialVal = false) => {
    // call useState, 'reserve piece of state'
    const [state, setState] = useState(initialVal)
    const toggle = () => {
        setState(!state)
    }
    return [state, toggle]
}

export default useToggle