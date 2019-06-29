import React from 'react';
import './Header.css';

import Badge from '../Badge/Badge';

const Header = () => (
  <div className="header">
    <div className="left-side">
      <Badge />
    </div>
    <div className="right-side">
      <Badge />
    </div>
  </div>
);

export default Header;