import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { menuItems } from '../constants';

class Kingdom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItems: menuItems,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Menu menuItems={this.state.menuItems}/>
      </div>
    )
  }
}

export default Kingdom;