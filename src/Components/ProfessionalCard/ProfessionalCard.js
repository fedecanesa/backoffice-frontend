import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ProfessioalCard extends Component {
    handleClickDelete = (e) => {
        this.props.handleClickDelete(e.target.value);
    }

    render() {

        const { _id, name, job, zone } = this.props;

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
                        <button className="card-button button-edit">
                            <i className="fas fa-edit"></i>
                            Editar
                        </button>
                        <button title="¿Esta seguro que desea eliminarlo?" className="card-button button-delete" value={this.props._id} onClick={this.handleClickDelete}>
                            <i className="fas fa-trash-alt"></i>
                            Borrar
                        </button>
                    </td>
                </tr>
            </>
        );
    }
}
