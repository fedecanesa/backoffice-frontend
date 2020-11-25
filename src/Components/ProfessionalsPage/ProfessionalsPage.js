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


    render() {
        const { arrayResponse, arrayWorkerToShow } = this.state;
        return(
            <>
                {
                    localStorage.getItem("token") === null && (
                        <Redirect to="/" />
                    )
                } 

                <div className="main-actions">
                    <SearchBox collection="professionals" search={this.search}/>
                </div>
                <ProfessionalsList 
                    editConfirm={this.props.editConfirm}
                    handleClickDelete={this.handleClickDelete} 
                    arrayWorkerToShow={arrayWorkerToShow.length > 0 ? arrayWorkerToShow : arrayResponse}
                />
            </>
        )
    }
}