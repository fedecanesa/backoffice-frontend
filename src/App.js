import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CardList from "./Components/CardList/CardList";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <CardList />
            </Router>
        </div>
    );
}

export default App;
