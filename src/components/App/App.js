import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Container from '../Container/Container';

class App extends React.Component {
  state = {
    name: 'Marcos'
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  componentDidMount() {
    console.log(this.props.chats)
  }

  render() {
    return (
      <div className="app">
        <Container />
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
