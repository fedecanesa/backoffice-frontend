import React, { Component } from 'react';
import Card from "../Card/Card";

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
                                    <th>OCUPACION</th>
                                    <th>ZONA</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>

                            <tbody className="table-tbody">
                                {
                                    arrayWorkerToShow.map(worker => {
                                        return (
                                            <Card
                                                _id={worker._id}
                                                name={worker.name}
                                                job={worker.job}
                                                zone={worker.zone}
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