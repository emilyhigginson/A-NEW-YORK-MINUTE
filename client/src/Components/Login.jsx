import React, {useState} from 'react'
import Signup from './Signup';
import {useHistory} from 'react-router-dom'

function Login({onLogin}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState([])
  let history = useHistory();

function toggleSignup() {
  setShowForm((showForm) => !showForm);
}

function handleSubmit(e){
  e.preventDefault();
  const user = {
    email,
    password
  }
  fetch("/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({user}),
  })
  .then((r) => r.json())
  .then((user) => { 
    onLogin(user);
  })
    history.push("/spots");
}
  return (
    <div className='loginPage'>
            <h1 id='minute'>A NEW YORK <br></br> MINUTE</h1>

    <div className='loginDiv'>
      <form onSubmit={handleSubmit}>
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
      </div>
  )
}

export default Login