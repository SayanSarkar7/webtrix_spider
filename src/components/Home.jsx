import React from "react";

import { useEffect, useState } from "react";

import Section from "./Section";

import data from "../data/data.json";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import freshTopicImg from "../assets/academy.png";
import freshTopic2Img from "../assets/story.png";
import tedTalksImg from "../assets/in-the-news.gif";
import franchiseImg from "../assets/franchise.gif";
import mapImg from "../assets/locations.gif";
import coursesImg from "../assets/image2.png";
import albumImg from "../assets/mba-cares.gif";
import baratImg from "../assets/image1.gif";
import conclusionImg from "../assets/image3.png";

import "../styles/App.scss";
import "../styles/Header.scss";
import "../styles/intro.scss";
import "../styles/section.scss";
import "../styles/footer.scss";
import "../styles/misc.scss";
import "../styles/mediaQuery.scss";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f",
  black = "black";

const Home = () => {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    conclusion,
  } = data;

  const [loading, setLoading] = useState(true);

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);
  return (
    <>
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        imgSrc={freshTopicImg}
        backgroundColor={black}
        headingColor={yellow}
        textColor={yellow}
        
      />
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        imgSrc={freshTopic2Img}
        backgroundColor={black}
        headingColor={yellow}
        textColor={yellow}
        
      />
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        
        imgSrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={black}
        textColor={black}
        
      />
      <Section
        h3={franchise.heading}
        text={franchise.text}
       
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={black}
        textColor={brown}
       
      />
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={black}
        headingColor={yellow}
        textColor={yellow}
        
        hasBtn={false}
      />
      <Section
        h3={courses.heading}
        text={courses.text}
        
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={black}
        textColor={black}
        
      />
      <Section
        h3={album.heading}
        text={album.text}
       
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={black}
        textColor={brown}
        
      />
      <Section
        h3={barat.heading}
        text={barat.text}
       
        imgSrc={baratImg}
        backgroundColor={black}
        headingColor={yellow}
        textColor={yellow}
        
      />
      <Section
        h3={conclusion.heading}
        text={conclusion.text}
        
        imgSrc={conclusionImg}
        backgroundColor={white}
        headingColor={black}
        textColor={brown}
        
      />
    </>
  );
};

export default Home;
