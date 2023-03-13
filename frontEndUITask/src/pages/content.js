import React, { useEffect, useState } from "react";
import "./content.css";
import backgroundVideo from "../assets/Comp 1.mp4";
import leftSideBackground from "../assets/leftSideBackground.png";
import starOne from "../assets/starOne.svg";
import starTwo from "../assets/starTwo.svg";
import gradientColorCardOne from "../assets/gradientColorCardOne.png";
import gradientColorCardSecond from "../assets/gradientColorCardSecond.png";
import gradientColorCardThird from "../assets/gradientColorCardThird.png";
import ButtonComponent from "../component/header/button";
import { BiPlayCircle } from "react-icons/bi";
import { Container, Row, Col, Table, Carousel } from "react-bootstrap";
import { BsPlayCircleFill, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import secondCardPoster from "../assets/secondCardPoster.png";
import thirdCardPoster from "../assets/thirdCardPoster.png";
import thirdContainerBackground from "../assets/thirdContainerBackground.png";
import ArrowButtons from "../component/arrowButtons";
import rareCollectionCardTwo from "../assets/rareCollectionCardTwo.png";
import rareCollectionCardFour from "../assets/rareCollectionCardFour.png";
import rareCollectionCardThree from "../assets/rareCollectionCardThree.png";
import fourthContainerTableOne from "../assets/fourthContainerTableOne.png";
import rareCollectionCardFifth from "../assets/rareCollectionCardFifth.png";

import rareCollectionCardTwoX2 from "../assets/rareCollectionCardTwo@2x.png";
import rareCollectionCardFourX2 from "../assets/rareCollectionCardFour@2x.png";
import rareCollectionCardThreeX2 from "../assets/rareCollectionCardThree@2x.png";
import rareCollectionCardFifthX2 from "../assets/rareCollectionCardFifth@2x.png";
import ts from "../assets/ts.png";
import goldCup from "../assets/goldCup.png";
import silverCup from "../assets/silverCup.png";
import bronze from "../assets/bronze.png";
import profile01 from "../assets/profile01.png";
import profile02 from "../assets/profile02.png";
import profile03 from "../assets/profile03.png";
import profile04 from "../assets/profile04.png";
import profile05 from "../assets/profile05.png";
import profile06 from "../assets/profile06.png";
import profile07 from "../assets/profile07.png";
import profile08 from "../assets/profile08.png";
import tableHeaderBackground from "../assets/tableHeaderBackground.png";
import tableDataFirstChild from "../assets/tableDataFirstChild.png";
import FifthContainer from "./fifthContainer";
import SixthContainer from "./sixthContainer";
import SeventhContainer from "./seventhContainer";
import Footer from "../component/footer/footer";
import rareCollectionSachin from "../assets/rareCollectionSachin.png";
import groundBackground from "../assets/groundBackground.png";
import Slider from "react-slick";
import sachinBat from "../assets/sachinBat.png";

function Content() {

  const videoProperties = [
    {
      id: 1,
      title: "video 1",
      url: backgroundVideo,
    },
    {
      id: 2,
      title: "video 2",
      url: backgroundVideo,
    },
    {
      id: 3,
      title: "video 3",
      url: backgroundVideo,
    },
  ];

  const [index, setIndex] = useState(0);

  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  let slider1 = [];
  let slider2 = [];

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const settings = {
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const tableBodyData = [
    {
      sNo: "01",
      cup: goldCup,
      profileImg: profile01,
      profileName: "Sam",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "02",
      cup: silverCup,
      profileImg: profile02,
      profileName: "Ema",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "03",
      cup: bronze,
      profileImg: profile03,
      profileName: "Champion",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "04",
      cup: null,
      profileImg: profile04,
      profileName: "Ben",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "05",
      cup: null,
      profileImg: profile05,
      profileName: "SUper Hero",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "06",
      cup: null,
      profileImg: profile06,
      profileName: "Edward",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "07",
      cup: null,
      profileImg: profile07,
      profileName: "Ross",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
    {
      sNo: "08",
      cup: null,
      profileImg: profile08,
      profileName: "Warner",
      tsValue: 24,
      JTPoints: 24000,
      worth: 240,
      borderColor: "yellow",
    },
  ];

  const rareCollections = [
    {
      id: 1,
      img: rareCollectionSachin,
    },
    {
      id: 2,
      img: rareCollectionCardTwo,
    },
    {
      id: 3,
      img: rareCollectionCardThree,
    },
    {
      id: 4,
      img: rareCollectionCardFifth,
    },
    {
      id: 5,
      img: rareCollectionCardFour,
    },
  ];

  const showCaseCards = [
    {
      id: 1,
      img: sachinBat,
    },
    {
      id: 2,
      img: rareCollectionCardTwoX2,
    },
    {
      id: 3,
      img: rareCollectionCardThreeX2,
    },
    {
      id: 4,
      img: rareCollectionCardFifthX2,
    },
    {
      id: 5,
      img: rareCollectionCardFourX2,
    },
  ];

  const cardData = [
    {
      sNo: "01",
      img: <gradientColorCardOne />,
      secondImg: null,
      header: "Get your NFTs from market place",
      des: "You can explore remarkable NFTs from Jump.Trade market place.",
      playIcon: <BsPlayCircleFill />,
      playDes: "How to Get NFTs from market Place?",
    },
    {
      sNo: "02",
      img: <gradientColorCardOne />,
      secondImg: null,
      header: "Get your NFTs from market place",
      des: "You can explore remarkable NFTs from Jump.Trade market place.",
      playIcon: <BsPlayCircleFill />,
      playDes: "How to Get NFTs from market Place?",
    },
    {
      sNo: "03",
      img: <gradientColorCardOne />,
      secondImg: null,
      header: "Get your NFTs from market place",
      des: "You can explore remarkable NFTs from Jump.Trade market place.",
      playIcon: <BsPlayCircleFill />,
      playDes: "How to Get NFTs from market Place?",
    },
  ];

  return (
    <>
      <div className="videoContainer">
        {/* ------------ firstContainer -------------- */}

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={6000}
          className="w-100 h-100"
        >
          {videoProperties.map((data, index) => {
            return (
              <Carousel.Item key={index}>
                <video src={data.url} autoPlay loop muted className="video" />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div className="leftSideContainer">
          <img src={leftSideBackground} alt="leftSideBackground" />

          <div className="titleContent">
            <span className="starOne">
              {" "}
              <img src={starOne} />{" "}
            </span>
            <span className="starTwo">
              {" "}
              <img src={starOne} />{" "}
            </span>
            <span className="starThree">
              {" "}
              <img src={starTwo} />{" "}
            </span>
            <h1>
              {" "}
              Discover. <br /> collect. and trade{" "}
            </h1>
            <h1> Remarkable nfts </h1>
            <p className="descriptionStyle">
              {" "}
              Discover your favourite NFTs from the wide range of collection,
              <br /> purchase from our Market place and trade to earn.{" "}
            </p>
            <div className="numberCounts">
              <div className="individualCounts">
                <p>
                  {" "}
                  50K<span>+</span>{" "}
                </p>
                <p> Collection </p>
              </div>
              <div className="individualCounts">
                <p>
                  {" "}
                  20K<span>+</span>{" "}
                </p>
                <p> Uniques </p>
              </div>
              <div className="individualCounts">
                <p>
                  {" "}
                  99K<span>+</span>{" "}
                </p>
                <p> Auctions </p>
              </div>
            </div>
            <div className="topWatchContainer">
              <ButtonComponent name={"Explore NFTs"} />
              <div className="pt-2">
                <span className="ps-4 pe-1">
                  {" "}
                  <BiPlayCircle className="BiPlayCircle" />{" "}
                </span>
                <span> Watch video </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------ secondContainer -------------- */}
      <Container fluid className="secondContainer">
        <Row className="text-center">
          <Col className="smallTopHeader"> GET. PLAY. EARN + </Col>
        </Row>
        <Row className="pt-3 text-center">
          <Col>
            <h1>
              {" "}
              HOW TO <br /> GET. PLAY. EARN?{" "}
            </h1>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="descriptionStyle pt-1">
            With MCL, earning made simple with just two steps. By playing your
            favourite <br /> cricket game, you can win huge real cash.
          </Col>
        </Row>
        <Row className="totalCardsContainer">
          <Col>
            <div className="cardStyles">
              <img src={gradientColorCardOne} alt="gradientColorCardOne" />
              <div className="insideCardContent">
                <Row>
                  <div className="topCardContent pt-4">
                    <p> 01. </p>
                    <p>
                      {" "}
                      Get your NFTs <br /> from market place{" "}
                    </p>
                    <p>
                      {" "}
                      You can explore remarkable NFTs from <br /> Jump.Trade
                      market place.{" "}
                    </p>
                  </div>
                </Row>
                <Row className="bottomCardHeight">
                  <div className="bottomCardContent">
                    <span>
                      {" "}
                      <BsPlayCircleFill />{" "}
                    </span>
                    <p> How to Get NFTs from market Place? </p>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardStyles">
              <img src={gradientColorCardSecond} alt="gradientColorCardOne" />
              <div className="backgroundCardPoster">
                <img src={secondCardPoster} />
              </div>

              <div className="insideCardContent">
                <Row>
                  <div className="topCardContent pt-4">
                    <p> 02. </p>
                    <p>
                      {" "}
                      Play our cricket game <br /> in MCL App
                    </p>
                    <p>
                      {" "}
                      With MCL, earning made simple with just <br />
                      two steps.
                    </p>
                  </div>
                </Row>
                <Row className="bottomCardHeight">
                  <div className="bottomCardContent">
                    <span>
                      {" "}
                      <BsPlayCircleFill />{" "}
                    </span>
                    <p> How to play in MCL with NFTs? </p>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardStyles">
              <img src={gradientColorCardThird} alt="gradientColorCardOne" />
              <div className="backgroundCardPosterThird">
                <img src={thirdCardPoster} />
              </div>
              <div className="insideCardContent">
                <Row>
                  <div className="topCardContent pt-4">
                    <p> 03. </p>
                    <p>
                      {" "}
                      Win real cash worth <br /> of ₹10 lakhs daily
                    </p>
                    <p>
                      {" "}
                      With MCL, earning made simple with just <br /> two steps.
                    </p>
                  </div>
                </Row>
                <Row className="bottomCardHeight">
                  <div className="bottomCardContent">
                    <span>
                      {" "}
                      <BsPlayCircleFill />{" "}
                    </span>
                    <p> How to win cash from MCL? </p>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* ------------ thirdContainer -------------- */}
      <Container fluid className="thirdContainer">
        <img src={thirdContainerBackground} alt="thirdContainerBackground" />
        <div className="thirdContainerContent">
          <div className="thirdRightSideContent">
            <div>
              <Row>
                <Col className="smallTopHeader">HOT STUFF +</Col>
              </Row>
              <Row>
                <Col>
                  <h1> RARE COLLECTIONS </h1>
                </Col>
              </Row>
              <Row>
                <Col className="descriptionStyle">
                  Rare collections of bats available for trading. Bat
                  collections signed by legends <br />
                  like Sir DON BRADMAN, SACHIN TENDULKAR…
                </Col>
              </Row>
            </div>
          </div>

          <Row className="carouselContainer">
            <Col>
              <Row className="firstCarouselArrows">
                {" "}
                <ArrowButtons
                  name={BsArrowLeft}
                  classNameOne={"firstArrow"}
                  Left={"leftArrow"}
                  right={"rightArrow"}
                />{" "}
              </Row>

              <div className="heightForRareCollection">
                <>
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => (slider1 = slider)}
                    className="sliderOne"
                  >
                    {showCaseCards.map((data, index) => (
                      <div
                        className="h-100 overallIndividualSlide"
                        key={data.id}
                      >
                        <div className="linkContainer">
                          <div className="showCaseRareCards">
                            <div>
                              <div className="sachinBat">
                                {" "}
                                <img src={data.img} alt="sachinBat" />{" "}
                              </div>
                              <div className="showCaseTitleBox">
                                <p className="mb-0"> MCL Signed Bat </p>
                                <p className="mb-0"> #432 </p>
                              </div>
                            </div>
                            <div className="rareCollectionsDetails">
                              <div> SIGNED BY + </div>
                              <div>
                                {" "}
                                <span className="sachinWord">
                                  {" "}
                                  Sachin{" "}
                                </span>{" "}
                                <span> TENDULKAR </span>{" "}
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                {" "}
                                <span>
                                  {" "}
                                  <BiPlayCircle size={25} />{" "}
                                </span>{" "}
                                <span> Watch Match moment </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </>

                <>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className="sliderTwo"
                    {...settings}
                  >
                    {rareCollections.map((data, index) => (
                      <div key={data.id}>
                        <div className="rareCardSlide">
                          <img src={data.img} alt="rareCollectionCardTwo" />
                          <p className="mb-0 rareCardTitle"> Meta Smiter </p>
                          <p className="rareCardNumber mb-0"> #234 </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* ------------ fourthContainer -------------- */}
      <Container fluid className="fourthContainer">
        <div>
          <Row className="text-center">
            <Col className="smallTopHeader">MEGA CONTEST +</Col>
          </Row>
          <Row className="text-center">
            <Col>
              <h1> PLAY CRICKET </h1>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="descriptionStyle">
              Rare collections of bats available for trading. Bat collections
              signed by legends like Sir DON
              <br /> BRADMAN, SACHIN TENDULKAR…
            </Col>
          </Row>
        </div>

        <Row>
          <Col className="text-center tableContainer">
            <div className="firstTableHeader">
              <p className="mb-0 fourthContainerTableHeader">
                {" "}
                Live & Upcoming Tournaments{" "}
              </p>
            </div>
            <div className="fourthContainerTableOne">
              <img
                src={fourthContainerTableOne}
                alt="fourthContainerTableOne"
              />
            </div>
          </Col>
          <Col className="text-center secondTableContainer">
            <div className="secondTableHeader pt-5">
              <p className="mb-0 fourthContainerTableHeader"> Leaderboard </p>
            </div>
            <Table striped bordered hover>
              <thead className="text-white">
                <tr>
                  <th className="align-middle">S.No</th>
                  <th> </th>
                  <th className="align-middle"> PLAYER </th>
                  <th className="align-middle">
                    {" "}
                    <img src={ts} className="tableTsHeader" />{" "}
                  </th>
                  <th className="align-middle">JT Points</th>
                  <th className="align-middle">$ worth</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {tableBodyData.map((item, index) => (
                  <tr key={item.sNo}>
                    <td className="align-middle tableSerialNumber" style={{borderLeft: '1px solid red'}}> {item.sNo} </td>
                    <td className="align-middle">
                      <img src={item.cup} className="cups" />
                    </td>
                    <td className="align-middle profileSpacing">
                      {" "}
                      <div className="insideProfileData">
                        <div className="tableWidthData">
                        <img src={item.profileImg} className="profile" />
                      &nbsp;&nbsp;&nbsp;{item.profileName}
                        </div>
                      
                      </div>
                      
                    </td>
                    <td className="align-middle">{item.tsValue}</td>
                    <td className="align-middle">{item.JTPoints}</td>
                    <td className="align-middle">{item.worth}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col className="fourthContainerButtons">
            {" "}
            <span>
              {" "}
              <ButtonComponent name={"Download APK"} />{" "}
            </span>{" "}
            <span>
              {" "}
              <ButtonComponent name={"View Contest"} />{" "}
            </span>{" "}
          </Col>
        </Row>
        <hr className="horizontalLine" />
      </Container>
      <FifthContainer />
      <SixthContainer />
      <SeventhContainer />
      <Footer />
    </>
  );
}

export default Content;
