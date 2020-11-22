import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import ProfessionalsList from "../ProfessionalsList/ProfessionalsList";
import { Redirect } from "react-router-dom";

export default class ProfessionalsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            logged: true,

            arrayResponse: [],
            arrayWorkerToShow: []
        }
    }

    search = (array)=>{
        this.setState({ arrayWorkerToShow: array });
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
                </div>
                <ProfessionalsList 
                    handleClickDelete={this.handleClickDelete} 
                    arrayWorkerToShow={arrayWorkerToShow.length > 0 ? arrayWorkerToShow : arrayResponse}
                />
            </>
        )
    }
}