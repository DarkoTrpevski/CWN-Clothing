import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../button/CustomButton';
import './SignIn.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err)
      console.log(err.message);
    }

  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label = "email" type="email" name = "email" value = {this.state.email} required handleChange = {this.handleChange}/>
          <FormInput label = "password" type="password" name = "password" value = {this.state.password} required handleChange = {this.handleChange}/>

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
