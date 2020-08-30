import React from 'react';
import Signin from '../../components/sign-in/SignIn';
import Signup from '../../components/sign-up/SignUp';
import { Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
//Redux Selectors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';
//CSS
import './SigninSignupPage.scss';

const SigninSignupPage = ({ currentUser }) => {

  if (currentUser) {
    return <Redirect to="/" />;
  }
  
  return (
    <div className = "sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SigninSignupPage);