import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import CardList from "../CardList/CardList";
import { Redirect } from "react-router-dom";

export default class ABMPage extends React.Component {
    constructor(){
        super();
        this.state = {
            arrayResponse: [],
            logged: true
        }
    }

    componentDidMount(){
        fetch("https://api-servi-oficios.herokuapp.com/professionals") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }

    

    render(){

        //LOGIN
        const logged = localStorage.getItem("logged") || null;

        if(logged === null) {
            this.setState({logged:false});
        }

        return(
            <>
                {
                    !this.state.logged && (
                        <Redirect to="/" />
                    )
                }  

                <div className="main-actions">
                    <SearchBox />
                    <ButtonAdd />
                </div>
                <CardList arrayWorkerToShow={this.state.arrayResponse}/>
            </>
        )
    }
}