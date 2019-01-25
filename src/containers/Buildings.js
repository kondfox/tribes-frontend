import React, { Component } from 'react';
import BuildingList from '../components/buildings/BuildingList';
import BuildingConstructor from '../components/buildings/BuildingConstructor';
import { buildingConstructors } from '../constants';

class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
      buildingConstructors: buildingConstructors,
    };
  }

  render() {
    return (
      <main>
        <BuildingList buildings={this.state.buildings} />
        <BuildingConstructor buildingConstructors={this.state.buildingConstructors} />
      </main>
    );
  }
}

export default Buildings;