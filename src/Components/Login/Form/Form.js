import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Form extends Component {
    render() {
        return (
            <div className="form">
                <input type="search" className="form-imput" placeholder="User" /> <br/>
                <input type="search" className="form-imput" placeholder="Password" />
                <NavLink exact to="/" className="form-button">Login</NavLink>
            </div>
        );
    }
}

export default Form;