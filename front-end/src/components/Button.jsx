import React from 'react';

const Button = (props) => {
  return (
    <button {...props}
      className={`btn ${props.className}`}>
        {props.icon ? <i style={{ paddingRight: '10px' }} className={`fas ${props.icon}`} />
        : null}
        {props.label}
      </button>
  );
}

export default Button;