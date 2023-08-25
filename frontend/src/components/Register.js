import React from 'react'
import "../styles/registerStyle.css"
import logo from "../images/register1.jpg"

const Register = () => {
  return (
    <div>

      <div className="formbody form-container">
        <form className="fr">
          <h1 className="elem">Register<br /> </h1>
          <div className="item-container">
            <label htmlFor='fname'> <i class="zmdi zmdi-accounts"></i> Name</label>
            <input type="text" id="fname" name="fname" className="elem" placeholder='Enter name' />
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-email"></i> Email</label>
            <input type="text" id="email" name="email" className="elem" placeholder='Enter email'/>
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-phone"></i> Mobile No.</label>
            <input type="text" id="email" name="email" className="elem" placeholder='Enter mobile no.'/>
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-tag"></i> Occupation</label>
            <input type="text" id="email" name="email" className="elem" placeholder='Enter occupation' />
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-lock-outline"></i> Password</label>
            <input type="password" id="email" name="email" className="elem" placeholder='Enter password'/>
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-lock"></i> Confirm Password</label>
            <input type="password" id="email" name="email" className="elem" placeholder='Confirm password' />
          </div>
          
          <input type="button" value="Register" className="submit-btn elem" />

        </form>
        <img src={logo} alt='logo'/>
      </div>

    </div>
  )
}

export default Register