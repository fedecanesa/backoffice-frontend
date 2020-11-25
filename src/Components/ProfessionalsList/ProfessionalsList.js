import React, { Component } from 'react';
import ProfessionalCard from "../ProfessionalCard/ProfessionalCard";

class CardList extends Component {
    render() {
        const { arrayWorkerToShow } = this.props;
        return (
            <section className="cardlist-container">
            {
                arrayWorkerToShow && (
                    <>
                        <table className="table" cellSpacing="0">
                            <thead className="table-thead">
                                <tr>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>CATEGORÍA</th>
                                    <th>ZONA</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>

                            <tbody className="table-tbody">
                                {
                                    arrayWorkerToShow.map(worker => {
                                        return (
                                            <ProfessionalCard
                                                editConfirm={this.props.editConfirm}
                                                key={worker._id}
                                                _id={worker._id}
                                                name={worker.name}
                                                job={worker.job}
                                                zone={worker.zone}
                                                handleClickDelete={this.props.handleClickDelete}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                )
            }
            </section>
        );
    }
}

export default CardList;