import React from 'react';
import './App.css';
import Home from './pages/home/HomePage.component';
import './pages/home/HomePage.styles.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/reducers/user/user.actions';

class App extends React.Component {

    unSubscribeFromAuth = null;

    componentDidMount() {

        const { setCurrentUser } = this.props;

        this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth, null);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: userAuth,
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth);
            }

        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {

        const { user } = this.props;

        return (
            <Router>
                <Header/>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path="/shop" component={ShopPage}/>
                        <Route exact path="/signin" render={() => user ? <Redirect to={'/'}/> : <SignInAndSignUpPage/>}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
    user: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
