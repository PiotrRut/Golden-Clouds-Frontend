import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import SignInForm from '../components/SignInForm';


import '../styles/App.css';

class SignIn extends Component {
    render() {
        return (
          <div className="SignIn">
            <InputForm />
          <SignInForm />
          </div>
        )
    }
}

export default SignIn;
