import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import logo from "../images/login1.jpg"

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/signin", {
      method : "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if (res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login Successful");
      navigate('/');
    }
  }

  return (
    <div>

      <div className="formbody form-container">

        <img src={logo} alt='logo' />

        <form method='POST' className="fr">
          <h1 className="elem">Login<br /> </h1>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-email"></i> Email</label>
            <input type="text" id="email" name="email" className="elem" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-lock-outline"></i> Password</label>
            <input type="password" id="email" name="email" className="elem" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </div>

          <input type="submit" value="Login" onClick={loginUser} className="submit-btn elem mt-2" />

        </form>

      </div>

    </div>
  )
}

export default Login