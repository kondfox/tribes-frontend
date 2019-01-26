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

    this.selectMenu = this.selectMenu.bind(this);
  }

  selectMenu(selectedTitle) {
    const selectedMenu = this.state.menuItems
      .map(item => item.title === selectedTitle ?
        {...item, isSelected: true} :
        {...item, isSelected: false}
      );
    
    this.setState({
      menuItems: selectedMenu,
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="game">
            <div className="upper-bar">
              <Menu menuItems={this.state.menuItems} selectMenu={this.selectMenu}/>
              <Resources resources={this.state.resources} />
            </div>
            <div className="main">
              <Route exact path='' component={Buildings} />
              <Route exact path='/troops' component={Troops} />
              <Route exact path='/battle' component={Buildings} />
              <Route exact path='/leaderboard' component={Buildings} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Kingdom;
