import React, { Component } from 'react';
import axios from 'axios';
import { server } from '../constants.js';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    content: '',
  }
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
        {this.state.content}
      </div>
    );
  }
}

export default App;
