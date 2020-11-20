import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Card extends Component {




    handleClickDelete = (e) => {
        this.props.handleClickDelete(e.target.value);
    }

    render() {

        const { _id, name, job, zone, } = this.props;

        return (
            <>
                <tr className="card-row">
                    <td className="card-id">
                        <CopyToClipboard text={_id}> 
                            <button className="copy-id" onClick={this.handleClick}>Copy ID</button>
                        </CopyToClipboard>
                    </td>
                    <td>{name}</td>
                    <td>{job}</td>
                    <td>{zone}</td>
                    <td className="buttons-container">
                        <button className="card-button button-edit">
                            <i class="fas fa-edit"></i>
                            Editar
                        </button>
                        <button title="¿Esta seguro que desea eliminarlo?" className="card-button button-delete" value={this.props._id} onClick={this.handleClickDelete}>
                            <i class="fas fa-trash-alt"></i>
                            Borrar
                        </button>
                    </td>
                </tr>
            </>
        );
    }
}

export default Card;