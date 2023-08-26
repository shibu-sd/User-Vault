import React from 'react'
import "../styles/homeStyle.css"

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-div h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <p className="fs-3" style={{ letterSpacing: "0.5em", color: "green" }}>WELCOME</p>
          </div>
          <h1>Secure Beyond Doubt.</h1>
        </div>
      </div>

    </div>
  )
}

export default Home