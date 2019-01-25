const server = 'http://localhost:8080';

const menuItems = [
  {
    title: 'buildings',
    isSelected: true,
    link: '',
  },
  {
    title: 'troops',
    isSelected: false,
    link: '/troops',
  },
  {
    title: 'battle',
    isSelected: false,
    link: '/battle',
  },
  {
    title: 'leaderboard',
    isSelected: false,
    link: '/leaderboard',
  },
];

const initResources = [
  {
    name: 'food',
    value: 0,
    generation: 0,
  },
  {
    name: 'gold',
    value: 100,
    generation: 0,
  },
];

const buildingConstructors = ['farm', 'mine', 'academy'];

const images = {
  menu: {
    buildings: require('./img/assets/buildings.svg'),
    troops: require('./img/assets/troops.svg'),
    battle: require('./img/assets/map.svg'),
    leaderboard: require('./img/assets/leaderboard.svg'),
  },
  buildings: {
    academy: require('./img/assets/academy.svg'),
    farm: require('./img/assets/farm.svg'),
    mine: require('./img/assets/mine.svg'),
    townhall: require('./img/assets/townhall.svg'),
    add: {
      academy: require('./img/assets/addacademy.svg'),
      farm: require('./img/assets/addfactory.svg'),
      mine: require('./img/assets/addmine.svg'),
    }
  },
  resources: {
    food: require('./img/assets/bread.png'),
    foodProvider: require('./img/assets/farm.svg'),
    gold: require('./img/assets/gold.png'),
    goldProvider: require('./img/assets/mine.svg'),
  },
  troops: {
    troop: '',
    attack: '',
    defence: '',
  },
};

export { server, menuItems, initResources, buildingConstructors, images };
