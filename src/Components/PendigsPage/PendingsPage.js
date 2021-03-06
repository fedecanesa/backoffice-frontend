import React, { Component } from 'react';


import SearchBox from "./../SearchBox/SearchBox";
import PendingsList from "./../PendingsList/PendingsList"
import { Redirect } from 'react-router-dom';


export default class PendingsPage extends Component
{
    constructor() {
        super();
        this.state = {
            arrayResponse: [],
            arrayWorkerToShow: []
        }
    }

    search = (array)=>{
        this.setState({ arrayWorkerToShow: array });
    }

    componentDidMount() {
        fetch("https://api-servi-oficios.herokuapp.com/pendings") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({arrayResponse: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }

    render () {
        let showResponse = false
        const { arrayResponse, arrayWorkerToShow } = this.state;
        return (
            <>
                {
                    localStorage.getItem("token") === null && (
                        <Redirect to="/" />
                    )
                } 

                <div className="main-actions">
                    <SearchBox collection="pendings" search={this.search}/> 
                </div>
                { 
                    showResponse = ( arrayWorkerToShow.length === 0 )
                }
                {
                    showResponse ? ( 
                        arrayResponse.length > 0 ? (
                            <PendingsList arrayWorkerToShow={arrayResponse} loadData={this.props.loadData} />
                                ) : ( " " ) /* TODO Renderiza al segundo click en buscar */
                        ) : ( <PendingsList arrayWorkerToShow={arrayWorkerToShow} loadData={this.props.loadData} />  )
                }
            </>
        )
    }
}