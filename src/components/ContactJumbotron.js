import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'reactstrap';
import '../styles/App.css';

const ContactJumbotron = (props) => {

  return (<div>
    <Jumbotron>
      <h1 className="display-3">Contact Golden Clouds!</h1>
      <p className="lead">Feel free to ask us any questions you'd like, by calling our helpline on 020 8778 6916, open 9am - 5pm weekdays.</p>
      <hr className="my-2"/>
      <p>If you can't reach us, feel free to send us an e-mail, and we will aim to respond as quick as we can!</p>
      <p className="lead">
        <Button color="primary" tag={Link} to={"mailto:mail@mail.com"}>Send an e-mail</Button>
      </p>
    </Jumbotron>
  </div>);
};

export default ContactJumbotron;
