import React from "react";
import "../pages/content.css";
import round from "../assets/round.png";
import player01 from "../assets/player01.png";
import player02 from "../assets/player02.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "../component/header/button";

function SixthContainer() {
  return (
    <div className="sixthContainer">
      <div className="round">
        <img src={round} alt="roundCircleBackground" />
      </div>
      <img src={player01} alt="player01" className="player01"/>
      <img src={player02} alt="player02" className="player02"/>
      <div>
        <div className="sixthContainerFirstContent">
            <div> <h1> 1$ NFT PACKS </h1> </div>
            <div className="descriptionStyle"> Rare collections of bats available for trading. Bat collections <br/>signed by legends like Sir DON BRADMAN, SACHIN TENDULKAR… </div>
            <div className="pt-4"> <ButtonComponent name={"Know More"} /> </div>
        </div>
      </div>
    </div>
  );
}

export default SixthContainer;
