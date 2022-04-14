import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ gap: "10px" }}>
                        <Link to="/" style={{ color: "red", marginRight: 15 }}>Home</Link>
                        <Link to="/login" style={{ marginRight: 15 }}>Login</Link>
                        <Link to='/register' style={{ marginRight: 15 }}>Register</Link>
                        <Link to='/get-restaurants' style={{ marginRight: 15 }}>Resturant</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
