import React from 'react';

import './button.css';

const Button = ({ name, action }) => (
  <div className="actions">
    <button className="action" onClick={action}>
      { name }
    </button>
  </div>
);

export default Button;
