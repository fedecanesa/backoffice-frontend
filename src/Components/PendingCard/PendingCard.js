import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class PendingCard extends Component {

    handleClickProfile = () => {
        const { worker } = this.props;
        this.props.loadData(worker);
    }

    render() {

        const { worker } = this.props;
        const { registrationDate, name, job, zone } = worker;

        return (
            <>
                <tr className="card-row">
                    <td className="card-date">{registrationDate.slice(0,10)}</td>
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
                        <NavLink 
                            className="card-profile-GE" 
                            to="/ficha"
                            onClick={this.handleClickProfile}
                        >
                            <button 
                                className="card-button button-see"
                            >
                                <i className="fas fa-eye" />
                                {" Ver ficha"}
                            </button>   
                        </NavLink>
                    </td>
                </tr>
            </>
        );
    }
}

