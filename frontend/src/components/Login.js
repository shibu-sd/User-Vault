import React from 'react'
import logo from "../images/login1.jpg"

const Login = () => {
  return (
    <div>

      <div className="formbody form-container">

        <img src={logo} alt='logo' />

        <form className="fr">
          <h1 className="elem">Login<br /> </h1>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-email"></i> Email</label>
            <input type="text" id="email" name="email" className="elem" placeholder='Enter email' />
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-lock-outline"></i> Password</label>
            <input type="password" id="email" name="email" className="elem" placeholder='Enter password' />
          </div>

          <input type="button" value="Login" className="submit-btn elem mt-2" />

        </form>

      </div>

    </div>
  )
}

export default Login