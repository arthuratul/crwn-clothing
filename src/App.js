import React from 'react';
import './App.css';
import Home from './pages/home/HomePage.component';
import './pages/home/HomePage.styles.scss';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import ShopPage from './pages/shop/shop.component';
import { auth } from '../src/firebase/firebase.utils';

class App extends React.Component {

    state = {
        currentUser: null
    };

    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <Router>
                <Header currentUser={this.state.currentUser}/>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path="/shop" component={ShopPage}/>
                        <Route exact path="/signin" component={SignInAndSignUpPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
