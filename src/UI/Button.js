import React from 'react'

import './Button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className = {`button ${props.className}`}>
        {props.children}
    </button>
  )
}

export default Button;