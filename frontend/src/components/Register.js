import React, {useState} from 'react'
import "../styles/registerStyle.css"
import logo from "../images/register1.jpg"

const Register = () => {

  const [user, setUser] = useState({
    name : "",
    email : "",
    phone : "",
    occupation : "",
    password : "",
    cpassword : ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  return (
    <div>

      <div className="formbody form-container">
        <form className="fr">
          <h1 className="elem">Register<br /> </h1>
          <div className="item-container">
            <label htmlFor='name'> <i class="zmdi zmdi-accounts"></i> Name</label>
            <input type="text" id="name" name="name" className="elem" placeholder='Enter name' value={user.name} onChange={handleInputs} />
          </div>
          <div className='item-container'>
            <label htmlFor='email'> <i class="zmdi zmdi-email"></i> Email</label>
            <input type="email" id="email" name="email" className="elem" placeholder='Enter email' value={user.email} onChange={handleInputs}/>
          </div>
          <div className='item-container'>
            <label htmlFor='phone'> <i class="zmdi zmdi-phone"></i> Mobile No.</label>
            <input type="number" id="phone" name="phone" className="elem" placeholder='Enter mobile no.' value={user.phone} onChange={handleInputs}/>
          </div>
          <div className='item-container'>
            <label htmlFor='occupation'> <i class="zmdi zmdi-tag"></i> Occupation</label>
            <input type="text" id="occupation" name="occupation" className="elem" placeholder='Enter occupation' value={user.occupation} onChange={handleInputs} />
          </div>
          <div className='item-container'>
            <label htmlFor='password'> <i class="zmdi zmdi-lock-outline"></i> Password</label>
            <input type="password" id="password" name="password" className="elem" placeholder='Enter password' value={user.password} onChange={handleInputs}/>
          </div>
          <div className='item-container'>
            <label htmlFor='cpassword'> <i class="zmdi zmdi-lock"></i> Confirm Password</label>
            <input type="password" id="cpassword" name="cpassword" className="elem" placeholder='Confirm password' value={user.cpassword} onChange={handleInputs} />
          </div>
          
          <input type="button" value="Register" className="submit-btn elem" />

        </form>
        <img src={logo} alt='logo'/>
      </div>

    </div>
  )
}

export default Register