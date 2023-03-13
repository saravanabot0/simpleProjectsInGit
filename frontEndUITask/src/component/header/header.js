import React, { useState, useEffect } from "react";
import "./header.css";
import headerBackground from "../../assets/Rectangle 3353.svg";
import companyName from "../../assets/companyName.svg";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import ButtonComponent from "./button";
import { Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
 }, [openMenu]);

  return (
    <div className="header">
      <img
        src={headerBackground}
        alt="headerBackground"
        className="headerBackground"
      />
      <div className="headerContent">
        <div className="companyImgContainer">
          <img src={companyName} alt="companyName" className="companyName" />
        </div>
        <div className="AiOutlineMenu">
          {openMenu ? (
            <AiOutlineClose className="hamburgerIcon AiOutlineClose" onClick={()=> setOpenMenu(!openMenu)}/>
          ) : (
            <AiOutlineMenuFold className="hamburgerIcon" onClick={()=> setOpenMenu(!openMenu)}/>
          )}
        </div>
        <div className="hideOptions">
          <div className="menuGroup">
            <p className="cursorPointer"> Drop </p>
            <p className="cursorPointer"> MCL Games </p>
            <p className="cursorPointer"> Contest </p>
          </div>
          <div className="headerButtonGroup">
            <ButtonComponent name={"Market Place"} active={"active"} />
            <ButtonComponent name={"Login"} />
            <ButtonComponent name={<FaDiscord size={18} />} />
          </div>
        </div>
      </div>

        <div className={`smallScreenMenuContainer ${openMenu ? "open":"close"}`}>
          <Container fluid className={`smallScreenContent ${openMenu ? "showContent":"hideContent"}`}>
            <Row>
              <Col>
                <p className="mb-0"> Drop </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mb-0"> MCL Games </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mb-0"> Contest </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonComponent name={"Market Place"} active={"active"} />
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonComponent name={"Login"} />
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonComponent name={<FaDiscord size={18} />} />
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
}

export default Header;
