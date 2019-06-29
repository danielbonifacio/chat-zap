import React, { Component } from 'react';
import './Container.css';
import Header from '../Header/Header';
import ChatWrapper from '../ChatWrapper/ChatWrapper';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ChatWrapper /> 
      </div>
    )
  }
}

export default Container;
