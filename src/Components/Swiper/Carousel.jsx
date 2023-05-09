import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Assets/img/GaleryTitle/1.png";
import img2 from "../../Assets/img/GaleryTitle/2.png";
import img3 from "../../Assets/img/GaleryTitle/3.png";
import "./style.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 794, min: 0 },
    items: 1,
  },
};

export default () => {
  return (
    <div className="galeryTitle">
      <h2>Qalereya</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="item">
          <img src={img1} alt="#" />
        </div>
        <div className="item">
          <img src={img2} alt="#" />
        </div>
        <div className="item">
          <img src={img3} alt="#" />
        </div>
      </Carousel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div className="btn">
        <Link to="/">Hamısına bax</Link>
      </div>
    </div>
  );
};
