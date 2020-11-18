import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="nav">
                    <div className="navbar-container">
                        {/* NAVBAR TITLE */}
                        <div className="navbar-title-container">
                            <h1 className="navbar-title"><i className="fas fa-tools"></i> ServiOficios</h1>
                        </div>

                        {/* NAVBAR LINKS */}
                        <div className="navbar-links-container">
                            <input type="text" className="input-user" placeholder="Usuario" />
                            <input type="password" className="input-pass" placeholder="Contraseña" />
                            <NavLink exact to="/login" className="navbar-link">Login</NavLink>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;