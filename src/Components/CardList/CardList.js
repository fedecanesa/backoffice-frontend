import React, { Component } from 'react';
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        const array = [
            {
                id: 2343,
                name: "Carlos Perez",
                job: "Carpintero",
                zone: "Buenos Aires"
            },
            {
                id: 2343,
                name: "Carlos Perez",
                job: "Carpintero",
                zone: "Buenos Aires"
            },
            {
                id: 2343,
                name: "Carlos Perez",
                job: "Carpintero",
                zone: "Buenos Aires"
            },
            {
                id: 2343,
                name: "Carlos Perez",
                job: "Carpintero",
                zone: "Buenos Aires"
            },
            {
                id: 2343,
                name: "Carlos Perez",
                job: "Carpintero",
                zone: "Buenos Aires"
            },
            {
                id: 2343,
                name: "Carlos Perez",
                job: "Carpintero",
                zone: "Buenos Aires"
            }
        ]

        return (
            <section className="cardlist-container">
            {
                array && (
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
                                    array.map(worker => {
                                        return (
                                            <Card
                                                id={worker.id}
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