import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import SigninSignupPage from './pages/signin-signup/SigninSignupPage';

//Import firebase auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

class  App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;n

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //Get the userRef that we are returning from the function
        const userRef = await createUserProfileDocument(userAuth);
       //Get the snapshot of the userRef, representing the user in our DB
        userRef.onSnapshot(snapShot => {
          //Change the state
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className = "App">
        <Router>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route path = '/shop' component = {Shop}/>
            <Route path = '/signin' component = {SigninSignupPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;