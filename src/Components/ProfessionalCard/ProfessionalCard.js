import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import swal from "sweetalert";
import {NavLink} from "react-router-dom";

    
export default class ProfessioalCard extends Component {

   
    confirmAlert = (e) => {
        swal({
            title: "¿Estás seguro que desea eliminar este profesional?",
            text: "Una vez eliminado, no podrás volver atras",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
              swal("El perfil ha sido eliminado", {
                icon: "success",
              });
              this.props.handleClickDelete(e.target.value)
            } else {
              swal("El perfil se encuentra a salvo.");
            }
        });
    }

    handleClickEdit = (e) => {
        
        const OBJ_PROF_EDIT = {
            name: this.props.name,
            dni: this.props.dni,
            email: this.props.email,
            phone:this.props.phone,
            job: this.props.job,
            seniority: this.props.seniority,
            imgUrl: this.props.imgUrl,
            hourPrice: this.props.hourPrice,
            currency: this.props.currency,
            zone: this.props.zone,
            description:this.props.description,
        }

        this.props.editConfirm(OBJ_PROF_EDIT);
    }

    render() {

        const { _id, name, job, zone , dni , description , hourPrice , phone , email, seniority , imgUrl} = this.props;
        return (
            <>
                <tr className="card-row">
                    <td className="card-id">
                        <CopyToClipboard text={_id}> 
                            <button className="copy-id" onClick={this.handleClick}>Copiar ID</button>
                        </CopyToClipboard>
                    </td>
                    <td>
                    {
                        name && (
                            name[0].toUpperCase()+name.slice(1, name.indexOf(" "))
                            + " " 
                            + name[name.indexOf(" ")+1].toUpperCase()+name.slice(name.indexOf(" ")+2)
                        )
                    }
                    </td>
                    <td>{ job && ( job[0].toUpperCase()+job.slice(1) ) }</td>
                    <td>{ zone && ( zone[0].toUpperCase()+zone.slice(1) ) }</td>
                    <td className="buttons-container">
                        <NavLink 
                            to="/editarperfil"
                            onClick={this.handleClickEdit} 
                            className="card-button button-edit">
                            <i className="fas fa-edit"></i>
                            Editar
                        </NavLink>

                        <button 
                            className="card-button button-delete" 
                            value={this.props._id} 
                            onClick={this.confirmAlert}>
                            <i className="fas fa-trash-alt"></i>
                            Borrar
                        </button>
                    </td>
                </tr>
            </>
        );
    }
}
