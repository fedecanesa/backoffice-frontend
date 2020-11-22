import React, { Component } from 'react';

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            subjectSearch: "",
            search: ""
            
        }
    }


    normalizeString = (string)=>{return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}

    changeHandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value})
    }
    
    searchHandler = ()=>{
        const { subjectSearch, search } = this.state;
        const { collection } = this.props;

        fetch(`https://api-servi-oficios.herokuapp.com/${collection}/${subjectSearch}${this.normalizeString(search)}`)
        .then( response => response.json() )
        .then( jsonResponse => {console.log(jsonResponse); this.props.search(jsonResponse)})
        .catch( error => {/* TODO catchHandler */})
    }

    render() {
        return (
            <div className="searchbox">
                <select className="searchbox-select" name="subjectSearch" onChange={this.changeHandler}>
                    <option value="" >ID</option>
                    <option value="names/" >Nombre</option>
                    <option value="jobs/" >Categoría</option>
                    <option value="zones/" >Zona</option>
                </select>
                <input type="search" name="search"className="searchbox-search" placeholder="Buscar" onChange={this.changeHandler}/>
                <button className="searchbox-button" onClick={this.searchHandler}><i className="fas fa-search"/> BUSCAR</button>
            </div>
        );
    }
}

export default SearchBox;