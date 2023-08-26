import React from 'react'
import "../styles/aboutStyle.css"

const About = () => {
  return (
    <div>
      <div className="jumbo container bd-example mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Hello, name!</h1>
          <p className="lead">This is your personal vault.</p>
          <hr className="my-4" />
          <div class="jbox jbody">
            <h2>User Vault</h2>
            <ul>
              <li><span>1</span>Name : Name</li>
              <li><span>2</span>Email : Email</li>
              <li><span>3</span>Mobile : Mobile</li>
              <li><span>4</span>Occupation : Occupation</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About