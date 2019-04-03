import React, { Component } from 'react';
import Footer from '../components/Footer';
import ContactJumbotron from '../components/ContactJumbotron';
import '../styles/App.css';




class Contact extends Component {
    render() {
        return (
          <div className="Contact">
            <ContactJumbotron />
          </div>
        )
    }
}

export default Contact;
