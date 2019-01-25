const server = 'http://localhost:8080';

const menuItems = [
  {
    title: 'Buildings',
    isSelected: true,
    link: '',
  },
  {
    title: 'Troops',
    isSelected: false,
    link: '/troops',
  },
  {
    title: 'Battle',
    isSelected: false,
    link: '/battle',
  },
  {
    title: 'Leaderboard',
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

const buildingConstructors = [
  {
    name: 'Farm',
    image: '',
  },
  {
    name: 'Mine',
    image: '',
  },
  {
    name: 'Academy',
    image: '',
  },
];

const images = {
  menu: {
    buildings: '',
    troops: '',
    battle: '',
    leaderboard: '',
  },
  buildings: {
    farm: '',
    min: '',
  },
  resources: {
    food: '',
    foodProvider: '',
    gold: '',
    goldProvider: '',
  },
  troops: {
    troop: '',
    attack: '',
    defence: '',
  },
};

export { server, menuItems, initResources, buildingConstructors, images };
