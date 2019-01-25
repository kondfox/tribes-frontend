import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {

  const menuItemClass = (isSelected) => {
    return isSelected ? 'menu-item selected' : 'menu-item';
  }

  return (
    <Link to={item.link} className={menuItemClass(item.isSelected)}>
      <img className="menu-item-image" src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
    </Link>
  );
}

export default MenuItem;