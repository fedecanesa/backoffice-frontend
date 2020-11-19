import React, { Component } from 'react';

class NavBarLogin extends Component {
    constructor(){
        super();
        this.state = {
        }
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

                    
                    </div>
                </nav>
            </>
        );
    }
}
export default NavBarLogin;