import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  state = {
    name: 'Daniel'
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  componentDidMount() {
    console.log(this.props.test)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello, { this.state.name }
          </p>
          <input
            value={this.state.name}
            onChange={this.handleChange}
          />
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
