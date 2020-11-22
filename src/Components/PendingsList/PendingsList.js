import React, { Component } from 'react';
import PendingCard from "./../PendingCard/PendingCard";

class CardList extends Component {

    orderByDate = ()=>{
        console.log("Ordenar lista por Fecha, e invertir en cada click")
        /* TODO */
    }

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
                                    <th className="date">
                                        <button 
                                            className="orderByDate"
                                            onClick={this.orderByDate} 
                                        >
                                            FECHA
                                        </button>
                                    </th>
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
                                            <PendingCard
                                                key={worker._id}
                                                registrationDate={worker.registrationDate}
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