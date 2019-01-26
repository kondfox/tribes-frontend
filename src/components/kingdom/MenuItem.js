import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

const MenuItem = ({ title, isSelected, link, selectMenu }) => {

  const menuItemClass = (isSelected) => {
    return isSelected ? 'menu-item selected' : 'menu-item';
  }

  return (
    <li className={menuItemClass(isSelected)} onClick={(e) => selectMenu(title)}>
      <Link to={link}>
        <img className="round-icon" src={images.menu[title]} alt={title} />
        <h2>{title}</h2>
      </Link>
    </li>
  );
}

export default MenuItem;