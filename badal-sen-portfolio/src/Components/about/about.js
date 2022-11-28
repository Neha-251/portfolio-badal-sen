import "./about.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Slide1 } from "../slide1/slide1";
import { Slide2 } from "../slide2/slide2";
import { Slide3 } from "../slide3/slide3";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        src="https://www.bakemyweb.com/files/public/de/69/2770cae8aabc7706c58dde69/i/5d/e2/635cf0fa064e46002afa5de2/original?name=arrow-2.png&mimetype=image/png&cd=inline"
        className="arrow-img-next"
        alt="Next"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        src="https://www.bakemyweb.com/files/public/de/69/2770cae8aabc7706c58dde69/i/5d/e2/635cf0fa064e46002afa5de2/original?name=arrow-2.png&mimetype=image/png&cd=inline"
        className="arrow-img-prev"
        alt="Prev"
      />
    </div>
  );
}

export const About = () => {
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {}, [slideCount]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          padding: "2px",
          display: "flex",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          background: "#fbf4f4cc",
          borderRadius: "50%",
        }}
      ></div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="carousel">
      <div className="slide">
        <Slide1 />
      </div>
      <div className="slide">
        <Slide2 />
      </div>
      <div className="slide">
        <Slide3 />
      </div>
    </Slider>
  );
};
