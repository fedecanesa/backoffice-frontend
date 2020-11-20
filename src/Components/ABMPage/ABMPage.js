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
            logged: true,
            arrayWorkerToShow: []
        }
    }

    componentDidMount(){
        fetch("https://api-servi-oficios.herokuapp.com/professionals") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }


    handleClickDelete = (id) => {
        const auxArrayResponse = this.state.arrayResponse;

        auxArrayResponse.map((professional, i) => {
            if(professional._id == id) {
                auxArrayResponse.splice(i, 1);
            }

            this.setState({arrayResponse: auxArrayResponse});
        });
    }

    search = (array)=>{
        this.setState({ arrayWorkerToShow: array });
    }


    render(){

        //LOGIN
        const logged = localStorage.getItem("logged") || null;

        if(logged === null) {
            this.setState({logged:false});
        }

        const { arrayResponse, arrayWorkerToShow } = this.state;
        return(
            <>
                {
                    !this.state.logged && (
                        <Redirect to="/" />
                    )
                }  

                <div className="main-actions">
                    <SearchBox search={this.search}/>
                    <ButtonAdd />
                </div>
                <CardList 
                    handleClickDelete={this.handleClickDelete} 
                    arrayWorkerToShow={arrayWorkerToShow.length > 0 ? arrayWorkerToShow : arrayResponse}/>
            </>
        )
    }
}