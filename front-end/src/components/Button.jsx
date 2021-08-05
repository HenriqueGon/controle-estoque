import React from 'react';

const Button = (props) => {
  return (
    <button {...props}
      className={`btn ${props.className}`}>
      {props.label}
    </button>
  );
}

export default Button;