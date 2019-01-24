import React from 'react';

const MenuItem = ({ item }) => {

  const menuItemClass = (isSelected) => {
    return isSelected ? 'menu-item selected' : 'menu-item';
  }

  return (
    <div className={menuItemClass(item.isSelected)}>
      <img className="menu-item-image" src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
    </div>
  );
}

export default MenuItem;