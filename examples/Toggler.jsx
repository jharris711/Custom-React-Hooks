import React from 'react'


const Toggler = () => {
    const [isHappy, toggleIsHappy] = useToggle(true)
    return (
        <>
            <h1 onClick={toggleIsHappy}>{isHappy ? "I'm happy, but click me anyway..." : "Click me to make me happy..."}</h1>
        </>
    )
}


export default Toggler