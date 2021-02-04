import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="nav__content">
                        <div className="brand">
                            <h1><Link to="/"><i className="fas fa-video"></i> TV Show</Link></h1>
                        </div>
                        <div className="nav__links">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
