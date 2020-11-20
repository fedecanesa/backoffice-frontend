import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ABMPage from "./Components/ABMPage/ABMPage";
import Login from "./Components/Login/Login";
import CardList from "./Components/CardList/CardList";
import React from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import ButtonAdd from "./Components/ButtonAdd/ButtonAdd";


export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            pending: [],
            banners: []
        }
    }


    componentDidMount(){
        fetch("https://api-servi-oficios.herokuapp.com/pendings") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({pending: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });

        fetch("https://api-servi-oficios.herokuapp.com/pendings") /* TODO */
        .then((response)=>response.json())
        .then((jsonResponse)=>{this.setState({pending: jsonResponse})})
        .catch((error)=>{ /* TODO catch handler */ });
    }


    render() {
    return (

        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <NavBar /> 
                        <Login/>
                    </Route>

                    <Route exact path="/backoffice">
                        <NavBar logged={true}/> 
                        <h2 className="app-subtitle">Backoffice ServiOficios</h2>
                        <ABMPage />
                    </Route>

                    <Route exact path="/pendientes">
                        <NavBar logged={true}/>
                        <div className="main-actions">
                        <SearchBox />   
                        <ButtonAdd />        
                        </div>
                       <CardList arrayWorkerToShow={this.state.pending} />
                    </Route>

                    <Route exact path="/banners">
                        <NavBar logged={true}/>
                        <div className="main-actions">
                        <SearchBox />   
                        <ButtonAdd />        
                        </div>
                       <CardList arrayWorkerToShow={this.state.banners} />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
    }
}


