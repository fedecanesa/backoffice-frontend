import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ProfessionalsPage from "./Components/ProfessionalsPage/ProfessionalsPage";
import PendingsPage from "./Components/PendigsPage/PendingsPage";
import Login from "./Components/Login/Login";
import React from "react";
import PendingProfile from "./Components/PendigProfile/PendingProfile";
import EditProfile from "./Components/EditProfile/EditProfile";


export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            professionalData:{},
            professionaEdit:{}
        }
    }

    loadData = (worker) => {
		this.setState({professionalData: worker});
    }
    
    editConfirm = (data) => {
        this.setState({professionaEdit: data})
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

                        <Route exact path="/profesionales">
                            <NavBar logged={true}/> 
                            <h2 className="app-subtitle">Backoffice ServiOficios</h2>
                            <h4 className="app-description ">Lista de profesionales</h4>
                            <ProfessionalsPage editConfirm={this.editConfirm}/>
                        </Route>
                        {/* <Route exact to="/editarperfil">
                            <NavBar logged={true}/> 
                            <EditProfile data={this.state.professionaEdit}/>
                        </Route> */}

                        <Route exact path="/pendientes">
                            <NavBar logged={true}/>
                            <h2 className="app-subtitle">Backoffice ServiOficios</h2>
                            <h4 className="app-description ">Pendientes de Alta</h4>
                            <PendingsPage loadData={this.loadData}/>
                        </Route>

                        <Route exact path="/banners">
                            <NavBar logged={true}/>
                            {/* TODO BannersPage */}
                        </Route>

                        <Route exact path="/ficha">
                            <NavBar logged={true}/>
                            <PendingProfile
                                worker={this.state.professionalData}
                            />
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}

