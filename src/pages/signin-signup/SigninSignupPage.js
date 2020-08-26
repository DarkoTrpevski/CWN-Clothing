import React from 'react';
import Signin from '../../components/sign-in/SignIn';
import Signup from '../../components/sign-up/SignUp';
import './SigninSignupPage.scss';

const SigninSignupPage = (props) => {
  return (
    <div className = "sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  )
}

export default SigninSignupPage;