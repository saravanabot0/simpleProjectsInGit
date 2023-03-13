import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsPlayCircleFill, BsArrowLeft, BsArrowRight } from "react-icons/bs";

function ArrowButtons(props) {
  return (
    <div className='arrowButtonContainer'>
        <Button className={`${props.classNameOne} ${props.Left}`} onClick={props.leftOnclick}><BsArrowLeft/></Button>
        <Button className={`${props.classNameOne} ${props.right}`} onClick={()=>props.rightOnclick()}><BsArrowRight/></Button>
    </div>
    
  )
}

export default ArrowButtons