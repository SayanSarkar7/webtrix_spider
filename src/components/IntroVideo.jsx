import React from "react";
import video from "../assets/webtrix.mp4";

const IntroVide = () => {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
};

export default IntroVide;
