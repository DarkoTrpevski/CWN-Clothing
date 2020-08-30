import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import HomePage from '../pages/homepage/HomePage';
import Checkout from '../pages/checkout/Checkout';
import Shop from '../pages/shop/Shop';
import SigninSignupPage from '../pages/signin-signup/SigninSignupPage';
//Firebase auth
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
//Redux
import { Provider } from 'react-redux';
//Redux persist
import { PersistGate } from 'redux-persist/integration/react';
//Redux actions
import { setCurrentUser } from '../redux/user/userActions';
//Import modified store and persistor
import { store, persistor } from '../redux/store';
//CSS
import './App.css';

class  App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //If user is authenticated
      if (userAuth) {
        //Get the userRef that we are returning from the function
        const userRef = await createUserProfileDocument(userAuth);
        //Get the snapshot of the userRef, representing the user in our DB
        userRef.onSnapshot(snapShot => {
          store.dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));
        });
      } else {
        //If user is NOT authenticated
        store.dispatch(setCurrentUser(userAuth))
        // this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Provider store = {store}>
        <PersistGate persistor = {persistor}>
          <div className = "App">
            <Router>
              <Header/>
              <Switch>
                <Route exact path = '/' component = {HomePage}/>
                <Route path = '/shop' component = {Shop}/>
                <Route path = '/checkout' component = {Checkout}/>
                <Route path = '/signin' component = {SigninSignupPage} />
              </Switch>
            </Router>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;