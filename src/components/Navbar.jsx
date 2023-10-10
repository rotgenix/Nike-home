import React from 'react'
import logo from '../images/brand_logo.png'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>

                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="navigation">
                    <ul>
                        <li><a href="#">MENU</a></li>
                        <li><a href="#">LOCATION</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>

                <div className="nav-btns">
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar