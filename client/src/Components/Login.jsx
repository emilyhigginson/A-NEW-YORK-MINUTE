import React, {useState} from 'react'
import Signup from './Signup';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState([])


function toggleSignup() {
  setShowForm((showForm) => !showForm);
}
  return (
    <>
    <div>
      <form>
      <h1>Welcome back, login below. New user? Signup.</h1>
      <label> Email:
      <br></br>
        <input 
          className= "loginBox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <br></br>
      <label> Password:
      <br></br>
        <input
          className= "loginBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br></br>
      <input className="submit" type="submit" value="Login!" />
      </form>
      {error?<div>{error}</div>:null}
      <p>New user?</p>
      <button className="submit" onClick={toggleSignup}>Sign Up</button>
      {showForm ? <Signup/> : null}
      </div>
      </>
  )
}

export default Login