import React from 'react';
import './Badge.css';

import Avatar from '../Avatar/Avatar';

const Badge = (props) => (
  <div className="badge">
    <Avatar />
    <span className="name">Marcos Vinicius</span>
  </div>
);

export default Badge;