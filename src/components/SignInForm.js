import React, {Component} from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback
} from 'reactstrap';
import '../styles/App.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {validate} = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({validate})
  }

  handleChange = async (event) => {
    const {target} = event;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const {name} = target;
    await this.setState({[name]: value});
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`)
  }

  render() {
    const {email, password} = this.state;
    return (<div style={{
        paddingTop: 50,
        paddingLeft: 10,
        position: "relative",
        width: '25%'
      }}>
      <h3>Sign In</h3>
      <form action="http://localhost:3001/login" method="post">
        <div className="form-group">
          <label>E-mail:
          </label>
          <Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" value={email} valid={this.state.validate.emailState === 'has-success'} invalid={this.state.validate.emailState === 'has-danger'} onChange={(e) => {
              this.validateEmail(e)
              this.handleChange(e)
            }}/>
          <FormFeedback valid="valid">
            Valid.
          </FormFeedback>
          <FormFeedback>
            Uh oh! Looks like there is an issue with your email. Please input a correct email.
          </FormFeedback>
        </div>
        <div className="form-group">
          <label>Password:
          </label>
          <Input type="password" name="password" id="examplePassword" placeholder="********" value={password} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="form-group">
          <Input type="submit" value="Log In" className="btn btn-primary"/>
        </div>
      </form>
    </div>)
  }
}

export default SignInForm;
