import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ABMPage from "./Components/ABMPage/ABMPage";
import Login from "./Components/Login/Login"

function App() {
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
                </Switch>
            </Router>
        </div>
    );
}

export default App;
