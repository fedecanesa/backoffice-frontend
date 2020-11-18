import React, { Component } from 'react';

class Card extends Component {
    render() {

        const { id, name, job, zone, } = this.props;

        return (
            <>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{job}</td>
                    <td>{zone}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </>
        );
    }
}

export default Card;