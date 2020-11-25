import React from "react";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
    constructor(){
        super();

        this.state = {
            admin: "",
            password: "",
            auth:false,
            logged:false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { admin, password } = this.state;
        
        if(admin && password) {
            const RECURSO_CONSULTAS = "https://api-servi-oficios.herokuapp.com/login";
            const OBJ_ADMIN = { admin , password };
            
            fetch(RECURSO_CONSULTAS, {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(OBJ_ADMIN)})
                .then(res => res.json())
                .then(data => {

                    if(data.token) {
                        localStorage.setItem("token", data.token);
                        this.setState({auth:true})
                    }
                    else {
                        this.setState({logged:true}); //ERROR MESSAGE IN UI
                    }

                })
                .catch(err => console.log("Err"));
        }
    }

    render(){

        return(
            <>
                {
                    this.state.auth && (
                        <Redirect to="/profesionales" />
                    )
                }

                {
                    localStorage.getItem("token") !== null && (
                        <Redirect to="/profesionales" />
                    )
                } 

                <form className="login">
                    <h2 className="login-title">Login</h2>
                    <input 
                        type="text" 
                        className="input-user" 
                        placeholder="Ingrese su usuario" 
                        name="admin"
                        value={this.state.admin}
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="password" 
                        className="input-pass"
                        placeholder="Ingrese su contraseña" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button className="login-button" onClick={this.handleSubmit}>Login</button>
                </form>
                {
                    this.state.logged && (
                        <div className="logged-message">Usuario o Contraseña incorrecto</div>
                    )
                }
            </>
        )
    }
}