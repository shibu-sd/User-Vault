import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/registerStyle.css"
import logo from "../images/register1.jpg"

const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name : "",
    email : "",
    phone : "",
    work : "",
    password : "",
    cpassword : ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value});
  }

  const postData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();
    if (res.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Successfully Registered");
      console.log("Successfully Registered");

      navigate('/login');
    }
  }

  return (
    <div>

      <div className="formbody form-container">
        <form className="fr" method="post">
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
            <label htmlFor='work'> <i class="zmdi zmdi-tag"></i> Work</label>
            <input type="text" id="work" name="work" className="elem" placeholder='Enter work' value={user.work} onChange={handleInputs} />
          </div>
          <div className='item-container'>
            <label htmlFor='password'> <i class="zmdi zmdi-lock-outline"></i> Password</label>
            <input type="password" id="password" name="password" className="elem" placeholder='Enter password' value={user.password} onChange={handleInputs}/>
          </div>
          <div className='item-container'>
            <label htmlFor='cpassword'> <i class="zmdi zmdi-lock"></i> Confirm Password</label>
            <input type="password" id="cpassword" name="cpassword" className="elem" placeholder='Confirm password' value={user.cpassword} onChange={handleInputs} />
          </div>
          
          <input type="submit" name="signup" value="Register" className="submit-btn elem" onClick={postData} />

        </form>
        <img src={logo} alt='logo'/>
      </div>

    </div>
  )
}

export default Signup