import React from 'react'
import "../styles/errorStyle.css"
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div>
            <div class="container">
                <div class="gif">
                    <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
                </div>
                <div class="content">
                    <h1 class="main-heading">This page is gone.</h1>
                    <p>
                        ...maybe the page you're looking for is not found or never existed.
                    </p>
                    <NavLink to="/">
                        <button>Back to home <i class="far fa-hand-point-right"></i></button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Errorpage    