import React from 'react';
import './App.css';
import Home from './pages/HomePage.component';
import './pages/HomePage.styles.scss';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

const HatsPage = () => {
    return (
        <div>
            <h1>Hats Page</h1>
        </div>
    )
};

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/hats" component={HatsPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
