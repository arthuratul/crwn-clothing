import React from 'react';
import './App.css';
import Home from './pages/home/HomePage.component';
import './pages/home/HomePage.styles.scss';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import ShopComponent from './pages/shop/shop.component';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/shop" component={ShopComponent}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
