import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/kingdom/Header';
import Menu from '../components/kingdom/Menu';
import Resources from '../components/kingdom/Resources';
import { menuItems, initResources } from '../constants';
import Buildings from './Buildings';
import Troops from './Troops';

class Kingdom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItems: menuItems,
      resources: initResources,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu menuItems={this.state.menuItems}/>
          <Resources resources={this.state.resources} />
          <Route exact path='' component={Buildings} />
          <Route exact path='/troops' component={Troops} />
          <Route exact path='/battle' component={Buildings} />
          <Route exact path='/leaderboard' component={Buildings} />
        </div>
      </Router>
    )
  }
}

export default Kingdom;
