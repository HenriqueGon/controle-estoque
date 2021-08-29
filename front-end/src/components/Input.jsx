import React from 'react';

const Input = (props) => {
  return (
    <div style={props.style}>
      <div className='single-input'>
        <input {...props}
          id={props.id} 
          className='input'
          required />

        <label htmlFor={props.id}> 
          {props.label} 
        </label>
      </div>
      {/* <div className="input-container">
        <label className="label" 
          htmlFor={props.id}> 
            {props.label} 
        </label>
        
        <input {...props}
          id={props.id}
          className="input" />
      </div> */}
    </div>
  );
}

export default Input;