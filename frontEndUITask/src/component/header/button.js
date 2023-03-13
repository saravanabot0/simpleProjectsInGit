import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonComponent(props) {
  return (
    <Button {...props} className="buttonStyle">{props.name}</Button>
  )
}

export default ButtonComponent