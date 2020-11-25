import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class PendingProfile extends Component {

    constructor() {
        super();
        this.state = {
            accepted: false,
            rejected: false,
            isOutOfPendigs: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    handleClickAccept = ()=>{
        const { worker } = this.props;
        const { _id, name, dni, email, phone, job, imgUrl, hourPrice, currency, zone, description, status, rating  } = worker;
        const START_DATE = new Date();
        let NEW_PROFESSIONAL = { name, dni, email, phone, job, imgUrl, hourPrice, currency, zone, description, status, rating, START_DATE };
        const ID_DELETE = _id;

        fetch(`https://api-servi-oficios.herokuapp.com/professionals`, {
            method: "POST",
            body: JSON.stringify(NEW_PROFESSIONAL),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(professional => {
            if (professional._id)/* Es nuevo ID, no es similar al que tenía cuando estaba en pendientes. */ 
            {
                this.setState({accepted: true});
                fetch(`https://api-servi-oficios.herokuapp.com/pendings/${ID_DELETE}`, { method: 'DELETE'})
                .then(response => response.json() )
                .then( pendingDeleted => { pendingDeleted._id && ( this.setState({isOutOfPendigs: true}) ) } )
            }

        })
        .catch(error => console.log(error))
    }

    handleClickReject = ()=>{

    }

    render() {
        const { accepted } = this.state;
        const { worker } = this.props;
        const { name, dni, email, phone, job, imgUrl, hourPrice, currency, zone, description } = worker;

        return (
            <div className="profile-container">
                <div className="profile-card">
                    <NavLink className="profile-button-back" to="/pendientes">
                        <i className="fas fa-chevron-circle-left"></i>
                        <span className="button-back-text">Volver</span>
                    </NavLink>

                    <div className="profile-img-container">
                        <img className="profile-img" src={imgUrl} alt={name} />
                    </div>

                    <div className="profile-info">
                        
                        
                        {/* Worker Name */}
                        <div className="profile-head">
                            {
                                name && (
                                    <span className="profile-name" >
                                    {
                                        name[0].toUpperCase()+name.slice(1, name.indexOf(" "))
                                        + " " 
                                        + name[name.indexOf(" ")+1].toUpperCase()+name.slice(name.indexOf(" ")+2)
                                    }
                                    </span>
                                )
                            }
                            <span className="profile-job">{job && (job[0].toUpperCase()+job.slice(1))}</span>
                        </div>

                        {/* Worker ZONE */}
                        <div className="profile-zone">{zone && (zone[0].toUpperCase()+zone.slice(1))}</div>

                        {/* Worker HOUR PRICE */}
                        <div className="profile-price">
                            <span className="profile-hour-price" >{" $"+hourPrice}</span>
                        </div>

                        <p className="profile-description">{description}</p>
                        <div className="profile-data">
                            {/* Worker EMAIL */}
                            <div className="profile-email">Email: {email}</div>

                            {/* Worker PHONE */}
                            <div className="profile-phone">Tel: <span className="profile-numeros">{phone}</span></div>

                            {/* Worker DNI */}
                            <div className="profile-dni">Dni: <span className="profile-numeros">{dni}</span></div>
                        </div>
                        

                        {/* BUTTONS */}
                        <div className="profile-buttons" >
                        { accepted ? <span>Agregado a la coleción "Professionals".</span> : (
                            <>
                                <button 
                                    className="profile-button profile-button-accept" 
                                    onClick={this.handleClickAccept}
                                >
                                    <span><i className="fas fa-user-check" /></span>
                                    <span className="profile-button-text">{" Aceptar"}</span>
                                </button>
                                <button 
                                    className="profile-button profile-button-reject"
                                    onClick={this.handleClickReject}
                                >
                                    <span><i className="fas fa-user-times" /></span>
                                    <span className="profile-button-text">{" Rechazar"}</span>
                                </button>
                            </>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


