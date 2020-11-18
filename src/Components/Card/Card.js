import React, { Component } from 'react';

class Card extends Component {
    render() {

        const { id, name, job, zone, } = this.props;

        return (
            <>
                <tr className="card-row">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{job}</td>
                    <td>{zone}</td>
                    <td className="buttons-container">
                        <button className="card-button button-edit">
                            <i class="fas fa-edit"></i>
                            Editar
                        </button>
                        <button className="card-button button-delete">
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