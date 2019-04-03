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

class BookingForm extends Component {
  render() {
    return (<div style={{
        textAlign: 20,
        paddingTop: 50,
        width: '50%',
        paddingLeft: 15,
        position: "relative",
        display: "block",

      }}>
      <h3>Register a booking</h3>
      <form action="http://localhost:3001/addBooking" method="post">
        <FormGroup>
          <Label for="Date">Date</Label>
          <Input type="date" name="date" id="Date" placeholder="Date"/>
        </FormGroup>
        <FormGroup>
          <Label for="Time">Time</Label>
          <Input type="time" name="time" id="Time" placeholder="Time"/>
        </FormGroup>
        <FormGroup>
          <Label for="serviceChosen">Choose service</Label>
        <Input type="select" name="serviceChosen" id="serviceChosen">
            <option>Sun bed</option>
            <option>Spray tan</option>
            <option>Other tanning</option>
            <option>More tanning</option>
            <option>Tanning extreme</option>
          </Input>
        </FormGroup>
        <div className="form-group">
          <label>Preferences:
          </label>
          <Input type="text" name="preferences"/>
        </div>
        <div className="form-group">
          <Input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
    </div>)
  }
}

export default BookingForm;
