import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import CardList from "../CardList/CardList";

export default class ABMPage extends React.Component {
    constructor(){
        super();
        this.state = {
            arrayResponse: []
        }
    }

    componentDidMount(){
        fetch("https://api-servi-oficios.herokuapp.com/professionals") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }

    render(){
        return(
            <>
                <div className="main-actions">
                    <SearchBox />
                    <ButtonAdd />
                </div>
                <CardList arrayWorkerToShow={this.state.arrayResponse}/>
            </>
        )
    }
}