import React, {Component} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import '../styles/App.css';

class InputForm extends Component {
  render() {
    return (<div style={{paddingTop: 50, paddingLeft: 10, position: "relative", width: '25%' }}>
      <h3>Register</h3>
      <form action="http://localhost:3001/addUser" method="post">
        <div className="form-group">
          <label>First Name:
          </label>
          <Input type="text" name="firstName"/>
        </div>
        <div className="form-group">
          <label>Last Name:
          </label>
          <Input type="text" name="lastName"/>
        </div>
        <div className="form-group">
          <label>Password:
          </label>
          <Input type="password" name="password"/>
      </div>
          <div className="form-group">
            <label>E-mail:
            </label>
            <Input type="email" name="email"/>
        </div>
        <div className="form-group">
          <Input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
    </div>)
  }
}

export default InputForm;
