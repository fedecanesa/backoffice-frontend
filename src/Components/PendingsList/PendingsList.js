import React, { Component } from 'react';
import PendingCard from "./../PendingCard/PendingCard";

class CardList extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            arrayWorkerToShow: [],
            sortedByPriority: false
        }
    }
    orderByDate = ()=>{
        const { arrayWorkerToShow, sortedByPriority } = this.state;
        let auxArrayWorkers = [...arrayWorkerToShow];
        if ( sortedByPriority ) {
            auxArrayWorkers.sort( (worker0, worker1)=>{
                if (worker0.registrationDate > worker1.registrationDate) { return 1 }
                if (worker0.registrationDate < worker1.registrationDate) { return -1 }
                return 0;
            } )
            this.setState({arrayWorkerToShow: auxArrayWorkers, sortedByPriority: false});
        }
        else {
            auxArrayWorkers.sort( (worker0, worker1)=>{
                if (worker0.registrationDate > worker1.registrationDate) { return -1 }
                if (worker0.registrationDate < worker1.registrationDate) { return 1 }
                return 0;
            } )
            this.setState({arrayWorkerToShow: auxArrayWorkers, sortedByPriority: true});
        }
    }
    

    componentDidMount() {
        this.setState({arrayWorkerToShow: this.props.arrayWorkerToShow})
    }

    render() {
        const { arrayWorkerToShow } = this.state;
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
                                                registrationDate={worker.registrationDate.slice(0,10)}
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