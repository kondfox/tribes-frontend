import React, { Component } from 'react';
import axios from 'axios';
import { server } from '../constants.js';
import Kingdom from './Kingdom';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {};
}
  
  componentDidMount() {
    axios
      .get(`${server}/api`)
      .then(response => {
        this.setState({content: response.data.name})
      });
  }
  
  render() {
    return (
      <div className="App">
        <Kingdom />
      </div>
    );
  }
}

export default App;
