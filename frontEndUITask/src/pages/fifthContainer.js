import React, { useEffect, useState } from "react";
import "../pages/content.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "../component/header/button";
import {BsArrowLeft, BsArrowRight, BsHeart } from "react-icons/bs";
import rareCollectionCard1 from "../assets/rareCollectionCard1.png";
import rareCollectionCard2 from "../assets/rareCollectionCard2.png";
import rareCollectionCard3 from "../assets/rareCollectionCard3.png";
import rank02 from "../assets/rank02.png";
import Slider from "react-slick";

function FifthContainer() {

    const [displaySlide,setDisplaySlide] = useState(4);

      

    const discoverNtfs = [
        {
            id:1,
            cardBackground:rareCollectionCard3,
            category:"allRounder",
        },
        {
            id:2,
            cardBackground:rareCollectionCard1,
            category:"batter",
        },
        {
            id:3,
            cardBackground:rareCollectionCard2,
            category:"bower",
        },
        {
            id:4,
            cardBackground:rareCollectionCard3,
            category:"batter",
        },
        {
            id:5,
            cardBackground:rareCollectionCard1,
            category:"bower",
        },
        {
            id:6,
            cardBackground:rareCollectionCard3,
            category:"allRounder",
        },
        {
            id:7,
            cardBackground:rareCollectionCard2,
            category:"batter",
        },
        {
            id:8,
            cardBackground:rareCollectionCard1,
            category:"allRounder",
        },
    ]

    const [NftsData,setNFTsData] = useState(discoverNtfs);

    const settingSlideToDisplay = () => {
        if (NftsData.length<4) {
            setDisplaySlide(NftsData.length);
        }else {
            setDisplaySlide(4);
        }
    }  

    useEffect(()=> {
        settingSlideToDisplay();
    },[NftsData])

    const filterItem = (curcat) => {
        const newItem = discoverNtfs.filter((newVal) => {
          return newVal.category === curcat; // comparing category for displaying data
        });
        setNFTsData(newItem);
      };

    const settings = {
        className: "left",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: displaySlide,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      
  return (
    <div className="fifthContainer">
        {console.log(NftsData)}
      <Container fluid>
        <Row className="text-center">
          <Col className="smallTopHeader">DISCOVER +</Col>
        </Row>
        <Row className="text-center">
          <Col><h1> DISCOVER NFTS </h1></Col>
        </Row>
        <Row>
          <Col className="fifthContainerButtons">
          <div className="playersButtonContainer">
          <ButtonComponent name={"Live Auction"} />
          <ButtonComponent name={"Sold"}/>
          <div className="filterTags">  
          <ButtonComponent name={"All"} onClick={()=>setNFTsData(discoverNtfs)}/>
          <ButtonComponent name={"Batsman"} onClick={()=>filterItem("batter")}/>
          <ButtonComponent name={"Bowler"} onClick={()=>filterItem("bower")}/>
          <ButtonComponent name={"AllRounder"} onClick={()=>filterItem("allRounder")}/>
          </div>
          </div>
          <div className="arrowContainer">
            <Button className="fifthContainerArrow" disabled={ NftsData.length<4 ? true : false}><BsArrowLeft/></Button>
            <Button className="fifthContainerArrow" disabled={ NftsData.length<4 ? true : false}><BsArrowRight/></Button>
          </div>
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">

          <div className="discoverNFTsCardContainer">
        <Slider {...settings}>

            {NftsData.map((data,index)=>
            <div className="d-flex justify-content-center" key={data.id}>
            <div className="rareCollectionCardContainer">
                <div className="rareCollectionCard">
                    <img src={data.cardBackground}/>
                </div>
                <img src={rank02} alt="" className="rank" />
                <div className="timing">    
                    <p className="mb-0"> ENDS IN </p>
                    <p className="mb-0"> 5h:43m:5s </p>
                </div>
                <div className="pt-4">
                    <div className="playerDetails"> 
                    <div className="d-flex gap-2 align-items-center">  
                    <p className="mb-0 bidPriceHeading"> @MR K </p> <span className="playerTag"> ERC721 </span>  
                        
                    </div>
                    <p className="mb-0"> <BsHeart /> </p> 
                    </div>
                    <p className="playersNumber bidPrice"> Meta Genius #472 </p>
                </div>
                <div className="rareCardBottomContent">
                    <div>
                        <p className="mb-0 bidPriceHeading"> Bid price </p>
                        <p className="mb-0 bidPrice"> $49.00 </p>
                    </div>
                    <div>
                        <p className="mb-0 bidPriceHeading"> bid price </p>
                        <p className="mb-0 bidPrice"> $49.00 </p>
                    </div>
                </div> 
            </div>
          </div>
            )}
        </Slider>
      </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-5"><ButtonComponent name={"Explore"}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default FifthContainer;
