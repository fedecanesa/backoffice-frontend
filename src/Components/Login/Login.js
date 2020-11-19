import React from "react";
/* import { Link } from "react-router-dom"; */

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            admin: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        const { admin, password } = this.state;
        
        if(admin && password) {

            const OBJ_ADMIN = { admin , password };

            const RECURSO_CONSULTAS = "https://api-servi-oficios.herokuapp.com/admins"
            
            fetch(RECURSO_CONSULTAS, {
                method:'POST',
                body: JSON.stringify(OBJ_ADMIN),
                headers:{'Content-Type':'application/json'}})
            .then((response) => response.json())
            .then((message)=> {!message.err && (console.log("Usuario ok."))
            .catch(err=> {console.log("Intente nuevamente.")});

                /* TODO */
            /* this.setState(); */
            })
        }
}

    render(){
        return(
            <form className="login">
                <h2 className="login-title">Login</h2>
                <input 
                    type="text" 
                    className="input-user" 
                    placeholder="Ingrese su usuario" 
                    name = "user"
                    onChange={this.handleChange} 
                />
                <input 
                    type="password" 
                    className="input-pass" 
                    placeholder="Ingrese su contraseña" 
                    name = "password"
                    onChange={this.handleChange}
                />
                <button className="login-button" onClick={this.handleLogin}>Login</button>
                {/* <Link exact to="/" className="login-button">Login</Link> */}
            </form>
        )
    }
}