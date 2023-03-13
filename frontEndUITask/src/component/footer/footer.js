import React from 'react';
import "../footer/footer.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import companyName from "../../assets/companyName.svg";
import ButtonComponent from '../header/button';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TfiApple } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";


function Footer() {
  return (
    <Container fluid className='footerContainer'>
    <Row>
      <Col className='footerLeftSideContent'>
        <div>
        <div className='footerCompanyName'> <img src={companyName} alt="companyName"/> </div>
        <div className='footerDescription'> Jump.trade is one of the world's largest NFT marketplace where you <br/>can buy & trade a lot of top digital collectibles including MCL cricket <br/>game NFTs and other sports NFTs. </div>
        <div className='footerButtons'>
        <Button className='d-flex align-items-center gap-2'> <IoLogoGooglePlaystore size={25}/> Play Store </Button>
        <Button className='d-flex align-items-center gap-2'> <TfiApple size={28}/> Play Store </Button>
        </div>
        </div>
      </Col>
      <Col className='footerRightSideContent'>
        {/* <div className=''> */}
        <div className='footerRSHeading'> Get the Latest Updates on Jump.trade <br/> NFT Marketplace </div>
        <div className='footerInput'>
        <InputGroup>
        <Form.Control
          placeholder="Enter your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <span className='footerRightArrow'> <BsArrowRight/></span>
        </div>
        <div className='footerMenuList'> 
        <Col> 
            <p className='mb-0'> Marketplace </p>
            <p className='mb-0'> MCL Game </p>
            <p className='mb-0'> Terms & Conditions </p>
            <p className='mb-0'> PrivacyPolicy </p>
        </Col>
        <Col> 
            <p className='mb-0'> About Us </p>
            <p className='mb-0'> Blog </p>
            <p className='mb-0'> FAQs </p>
            <p className='mb-0'> Instruction </p>
        </Col>
        <Col> 
            <p className='mb-0'> Release Notes </p>
            <p className='mb-0'> Contact Us </p>
        </Col>
        </div>
        {/* </div> */}
      </Col>
    </Row>
  </Container>
  )
}

export default Footer