import React, { Component } from 'react';

export default class PendingCard extends Component {

    seeDetailsHandler = () => {
        console.log("Ver detalles")
    }

    render() {

        const { registrationDate, name, job, zone } = this.props;

        return (
            <>
                <tr className="card-row">
                    <td className="card-date">{registrationDate}</td>
                    <td>
                    {
                        name[0].toUpperCase()+name.slice(1, name.indexOf(" "))
                        + " " 
                        + name[name.indexOf(" ")+1].toUpperCase()+name.slice(name.indexOf(" ")+2)
                    }
                    </td>
                    <td>{ job && job[0].toUpperCase()+job.slice(1) }</td>
                    <td>{ zone && zone[0].toUpperCase()+zone.slice(1) }</td>
                    <td className="buttons-container">
                        <button 
                            className="card-button button-see"
                            onClick={this.seeDetailsHandler}
                        >
                            <a className="goToProfile" href="http://localhost:3000/profesionales" target="_blank">
                                <i className="fas fa-eye" />
                                {" Ver ficha"}
                            </a>
                        </button>                    
                    </td>
                </tr>
            </>
        );
    }
}

