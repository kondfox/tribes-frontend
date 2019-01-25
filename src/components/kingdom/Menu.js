import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems, selectMenu }) => {
  return (
    <nav className="box game-menu">
      <ul>
        {menuItems.map(item => <MenuItem key={item.title}
          title={item.title}
          isSelected={item.isSelected}
          link={item.link}
          selectMenu={selectMenu}
        />)}
      </ul>
    </nav>
  );
}

export default Menu;