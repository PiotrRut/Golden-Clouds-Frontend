import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Bookings from './pages/Bookings';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import CarouselPage from './components/CarouselPage';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  /*state = {
    auth: false
  }

  constructor(props) {
    super(props);
    fetch(process.env.REACT_APP_SERVER_PATH + '/isAuth', {
      method: 'post',
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(res.auth);
      if(res.auth) {
        this.setState({
          auth: true
        });
      } else {
        this.setState({
          auth: false
        });
      }
    })
  } */


  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Route exact={true} path='/' render={() => (
            <div className='App'>
              <Home />
              <Footer />
            </div>
          )}/>

        <Route exact={true} path='/contact' render={() => (
            <div className='App'>
              <Contact />
              <Footer />
            </div>
          )}/>

        <Route exact={true} path='/bookings' /*auth={this.state.auth}*/ render={() => (
            <div className='App'>
              <Bookings />
              <Footer />
            </div>
          )}/>

        <Route exact={true} path='/signin' render={() => (
            <div className='App'>
              <SignIn />
              <Footer />
            </div>
          )}/>

        </div>
      </Router>
    );
  }
}

export default App;
