import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>My Kingdom</h1>
      <div className="nav-menu">
        <ul>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;