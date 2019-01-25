import React, { Component } from 'react';
import BuildingList from '../components/buildings/BuildingList';
import BuildingConstructor from '../components/buildings/BuildingConstructor';
import { buildingConstructors } from '../constants';

class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [
        {name: 'townhall', level: 2},
        {name: 'academy', level: 1},
        {name: 'farm', level: 1},
        {name: 'mine', level: 2},
      ],
      buildingConstructors: buildingConstructors,
    };
  }

  render() {
    return (
      <main className="buildings box">
        <BuildingList buildings={this.state.buildings} />
        <BuildingConstructor buildingConstructors={this.state.buildingConstructors} />
      </main>
    );
  }
}

export default Buildings;