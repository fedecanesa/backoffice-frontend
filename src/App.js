import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import ButtonAdd from "./Components/ButtonAdd/ButtonAdd";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <h2 className="app-subtitle">Backoffice ServiOficios</h2>

                <div className="main-actions">
                    <SearchBox />
                    <ButtonAdd />
                </div>
                <CardList />
            </Router>
        </div>
    );
}

export default App;
