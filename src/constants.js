const server = 'http://localhost:8080';

const menuItems = [
  {
    title: 'Buildings',
    image: '',
    isSelected: true,
    link: '',
  },
  {
    title: 'Troops',
    image: '',
    isSelected: false,
    link: '/troops',
  },
  {
    title: 'Battle',
    image: '',
    isSelected: false,
    link: '/battle',
  },
  {
    title: 'Leaderboard',
    image: '',
    isSelected: false,
    link: '/leaderboard',
  },
];

const initResources = [
  {
    name: 'food',
    value: 0,
    generation: 0,
    image: '',
    generatorImage: '',
  },
  {
    name: 'gold',
    value: 100,
    generation: 0,
    image: '',
    generatorImage: '',
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
  troop: '',
  attack: '',
  defence: '',
};

export { server, menuItems, initResources, buildingConstructors, images };
