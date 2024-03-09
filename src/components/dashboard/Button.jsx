import React from 'react'

function Button(props) {
    const {onClick,buttonText,className,type,disabled} = props;
  return (
    
    <button type={type} onClick={onClick}  className={className} disabled={disabled}>{buttonText}</button>
  )
}

export default Button
