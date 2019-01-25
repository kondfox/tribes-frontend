import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <nav className="game-menu">
      <ul>
        {menuItems.map(item => <MenuItem key={item.title} item={item} />)}
      </ul>
    </nav>
  );
}

export default Menu;