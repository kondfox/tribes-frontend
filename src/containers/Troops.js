import React, { Component } from 'react';
import TroopInfo from '../components/troops/TroopInfo';
import TroopList from '../components/troops/TroopList';

class Troops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      troops: [
        {
          level: 1,
          count: 13,
        },
        {
          level: 2,
          count: 8,
        },
        {
          level: 3,
          count: 2,
        },
      ],
      stats: {
        attack: 0,
        defence: 0,
        sustenance: 0,
      }
    };
  }

  render() {
    return (
      <main className="troops main-panel box">
        <TroopInfo stats={this.state.stats} />
        <TroopList troops={this.state.troops} />
      </main>
    );
  }
}

export default Troops;