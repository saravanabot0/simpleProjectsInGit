import React from 'react';
import "../pages/content.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ellipse01 from "../assets/ellipse01.png";
import ellipse02 from "../assets/ellipse02.png";
import ellipse03 from "../assets/ellipse03.png";
import user from "../assets/user.png";
import links from "../assets/links.png";
import inviteButton from "../assets/inviteButton.png";
import inviteArrow from "../assets/inviteArrow.png";
import inviteEllipse from "../assets/inviteEllipse.svg";
import friend01 from "../assets/friend01.png";
import friend02 from "../assets/friend02.png";
import friend03 from "../assets/friend03.png";
import friend04 from "../assets/friend04.png";
import friend05 from "../assets/friend05.png";
import friend06 from "../assets/friend06.png";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoCopy } from "react-icons/io5";


function SeventhContainer() {
  return (
    <div className='seventhContainer'>
        <Container fluid className='seventhInviteContainer'>
      <Row className='h-100'>

        <Col className='leftSideInviteContent'>
          <div className='d-flex flex-column align-items-start'>
        <div className="smallTopHeader"> REFFERAL + </div>
        <h1> EARN REWARDS <br/>FOR EVERY FRIENDS<br/> YOU REFER. </h1>
        <div className='inviteCode d-flex align-items-center justify-content-center'>
          Your Invite code:<span> HXTRF12GV </span>  <span> <IoCopy/> &nbsp;copy </span>
        </div>
        </div>
        </Col>

        <Col className='inviteFriendsContainer' xs={7}>
        <img src={ellipse01} alt="ellipse01" className="ellipse01"/>
        <img src={ellipse02} alt="ellipse02" className='ellipse02' />
        <img src={ellipse03} alt="ellipse03" className='ellipse03'/>
        <img src={user} alt="user" className='user'/> 
        <img src={links} alt="links" className='links'/>
        <img src={inviteButton} alt="inviteButton" className='inviteButton'/> 
        <img src={inviteArrow} alt="inviteArrow" className='inviteArrow'/> 
        <div className='inviteFriend01'>
        <img src={inviteEllipse} alt="inviteEllipse" className='inviteEllipse'/>
        <img src={friend01} alt="friend01" className='friend01' />
        </div>
        <div className='inviteFriend02'>
        <img src={inviteEllipse} alt="inviteEllipse" className='inviteEllipse'/>
        <img src={friend02} alt="friend02" className='friend02' />
        </div>
        <div className='inviteFriend03'>
        <img src={inviteEllipse} alt="inviteEllipse" className='inviteEllipse'/>
        <img src={friend03} alt="friend03" className='friend01' />
        </div>
        <div className='inviteFriend04'>
        <img src={inviteEllipse} alt="inviteEllipse" className='inviteEllipse'/>
        <img src={friend04} alt="friend04" className='friend02' />
        </div>
        <div className='inviteFriend05'>
        <img src={inviteEllipse} alt="inviteEllipse" className='inviteEllipse'/>
        <img src={friend05} alt="friend05" className='friend01' />
        </div>
        <div className='inviteFriend06'>
        <img src={inviteEllipse} alt="inviteEllipse" className='inviteEllipse'/>
        <img src={friend06} alt="friend06" className='friend02' />
        </div>
        
        </Col>
      </Row>
    </Container>

    <Container fluid className='joinCommunityContainer'>
      <Row className='text-center'>
        <Col><h1> JOIN THE COMMUNITY </h1></Col>
      </Row>
      <Row className='text-center'>
        <Col className="descriptionStyle">Rare collections of bats available for trading. Bat collections <br/>signed by legends like Sir DON BRADMAN, SACHIN TENDULKAR…</Col>
      </Row>
      <Row className='text-center pt-4'>
        <Col className='d-flex justify-content-center gap-3'>
          <FaDiscord className='socialMediaIcons'/>
          <FaTelegramPlane className='socialMediaIcons'/>
          <FaTwitter className='socialMediaIcons'/>
          <AiFillInstagram className='socialMediaIcons'/>
          <AiFillYoutube className='socialMediaIcons'/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default SeventhContainer