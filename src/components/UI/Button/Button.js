import React from 'react'

import './Button.css';

/**
 * Button component
 * @component
 * @param {Object} props 
 * @param {Function} props.onClick
 * @param {string} props.type
 * @param {string} props.className
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className = {`button ${props.className}`}>
        {props.children}
    </button>
  )
}

export default Button;