import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {

    logout = () => {
        localStorage.removeItem("logged");
    }
  
    render() {
        return (
            <>
                <nav className="nav">
                    <div className="navbar-container">
                        {/* NAVBAR TITLE */}
                        <div className="navbar-title-container">
                            <h1 className="navbar-title"><i className="fas fa-tools"></i> ServiOficios</h1>
                        </div>

                        {
                            this.props.logged && (
                                <>
                                    {/* PENDINGS AND BANNERS */}
                                    <NavLink to="/pendientes" className="button-list-alt">
                                        PENDIENTES
                                        </NavLink>

                                        <NavLink to="/banners" className="button-list-alt">
                                            BANNERS
                                        </NavLink>
                                </>
                            )
                        }

                        {/* NAVBAR LINKS */}
                        <div className="navbar-links-container">
                            { 
                                this.props.logged && (
                                    <>
                                        <div>
                                            {/* TODO */}
                                            <NavLink exact to="/" className="navbar-link" onClick={this.logout}>Logout</NavLink>
                                        </div>  
                                    </>
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