import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    function handleSubmit(){}



  return (
    <div>
        <h2>Login</h2>
        <br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'  />
        {" "}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <br />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login