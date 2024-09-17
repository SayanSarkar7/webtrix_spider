import { useEffect, useState } from "react";

import axios from "axios";
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Misc from "./components/Misc";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import data from "./data/data.json";
import  {BrowserRouter as Router,Routes ,Route} from "react-router-dom";

import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.gif";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.gif";
import conclusionImg from "./assets/image3.png";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Contact.scss";
import "./styles/Home.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";
import Header from "./components/Header";
import Home from "./components/Home";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f",
  black="black";

function App() {
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
    <Router>
      {loading && <Loader />}
      <Header/>
      <IntroVideo />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      <Footer/>
      <Misc />
    </Router>
   
  );
}

export default App;
