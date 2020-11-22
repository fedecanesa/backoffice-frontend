import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ProfessionalsPage from "./Components/ProfessionalsPage/ProfessionalsPage";
import PendingsPage from "./Components/PendigsPage/PendingsPage";
import Login from "./Components/Login/Login";
import CardList from "./Components/ProfessionalsList/ProfessionalsList";
import React from "react";
import SearchBox from "./Components/SearchBox/SearchBox";


export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            

        }
    }

    render() {
        const { pending , banners, arrayWorkerToShow } = this.state;
    return (

        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <NavBar /> 
                        <Login/>
                    </Route>

                    <Route exact path="/profesionales">
                        <NavBar logged={true}/> 
                        <h2 className="app-subtitle">Backoffice ServiOficios</h2>
                        <h4 className="app-description ">Lista de profesionales</h4>
                        <ProfessionalsPage />
                    </Route>

                    <Route exact path="/pendientes">
                        <NavBar logged={true}/>
                        <h2 className="app-subtitle">Backoffice ServiOficios</h2>
                        <h4 className="app-description ">Pendientes de Alta</h4>
                        <PendingsPage />
                    </Route>

                    <Route exact path="/banners">
                        <NavBar logged={true}/>
                        {/* TODO BannersPage */}
                    </Route>

                </Switch>
            </Router>
        </div>
    );
    }
}


