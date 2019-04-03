import React, { Component } from 'react';
import '../styles/App.css';
import BookingForm from '../components/BookingForm';



class Bookings extends Component {
    render() {
        return (
          <div className="Bookings">
            <BookingForm />
          </div>
        )
    }
}

export default Bookings;
