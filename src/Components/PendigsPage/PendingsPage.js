import React, { Component } from 'react';


import SearchBox from "./../SearchBox/SearchBox";
import PendingsList from "./../PendingsList/PendingsList"


export default class PendingsPage extends Component
{
    constructor() {
        super();
        this.state = {
            arrayResponse: []
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
        const { arrayResponse } = this.state;
        return (
            <>
                <div className="main-actions">
                    <SearchBox search={this.search}/> 
                </div>
                { arrayResponse.length > 0 &&  ( <PendingsList arrayWorkerToShow={arrayResponse} /> ) }
            </>
        )
    }
}