import React from 'react';
import './Header.css';

import Avatar from '../Avatar/Avatar';

const Header = () => (
  <div className="header">
    <div className="left-side">
      <Avatar />
    </div>
    <div className="right-side">
      <Avatar />
    </div>
  </div>
);

export default Header;