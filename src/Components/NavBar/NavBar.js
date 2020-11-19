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
                            { 
                                this.props.logged && (
                                    <div>
                                        {/* TODO */}
                                        <NavLink exact to="/" className="navbar-link">Logout</NavLink>
                                    </div>  
                                )
                            }
                           
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;