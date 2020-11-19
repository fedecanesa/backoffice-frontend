import React from "react";
import NavBarLogin from "./NavBarLogin/NavBarLogin";
import Form from "./Form/Form";

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return(
            <>
               <NavBarLogin />
                <div className="form-div">
                    <Form />
                </div>
            </>
        )
    }
}