import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';


class ProtectedRoute extends Component {
  render() {
    return (
      <Route exact path={this.props.path} render={() => (
        this.props.auth ? (
          <Route to={this.props.path} component={this.props.component} />
        ) : (
          <SignIn />
        )
      )} />
    )
  }
}

export default ProtectedRoute;
