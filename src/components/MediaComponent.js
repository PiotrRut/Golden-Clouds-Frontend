import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

class MediaComponent extends Component {
  render() {
    return (
      <div className="MediaComponent">
        <NavLink to={this.props.path} className="MediaComponentLink">{this.props.icon}</NavLink>
        <h2>{this.props.title}</h2>
        <hr />
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default MediaComponent;
