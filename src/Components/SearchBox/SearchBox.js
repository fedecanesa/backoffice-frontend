import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="searchbox">
                <input type="search" className="searchbox-search" placeholder="Buscar" />
                <button className="searchbox-button"><i class="fas fa-search"></i> BUSCAR</button>
            </div>
        );
    }
}

export default SearchBox;