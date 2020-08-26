import React from 'react'
import useInputState  from '../hooks'


const SimpleInputHooks = () => { 
    const [email, updateEmail, resetEmail] = useInputState("")
    const [password, updatePassword, resetPassword] = useInputState("")
    return (
        <div>
            <h1>The value is: {email} Password is: {password}</h1>
            <input type="text" value={email} onChange={updateEmail} />
            <input type="text" value={password} onChange={updatePassword} />
            <button onClick={resetEmail}>Submit Email</button>
            <button onClick={resetPassword}>Submit PW</button>
        </div>
    )
}


export default SimpleInputHooks