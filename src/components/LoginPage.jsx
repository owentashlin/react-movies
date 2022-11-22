import {useState} from 'react'

function LoginPage({user, setUser}) {
    
    const [email, setEmail] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        setUser(email)
    }

    return ( 
        <div className="login-page">
        <h1>Login Page</h1>
        <form autoComplete="false" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} required/>
            <button type="submit">
              Login
            </button>
          </form>
        </div>
     )
}

export default LoginPage;