import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ABMPage from "./Components/ABMPage/ABMPage";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <h2 className="app-subtitle">Backoffice ServiOficios</h2>
                <ABMPage />
            </Router>
        </div>
    );
}

export default App;
