import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./BeritaSliderStyle.css";

export const BeritaSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === { data }.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? { data }.length - 1 : slide - 1);
  };

  return (
    <div className="slider">
      <button className="arrow-left" onClick={prevSlide}>
        <BsFillArrowLeftCircleFill />
      </button>
      {data[slide].map((item, idx) => (
        <img
          src={item.src}
          alt={item.desc}
          key={idx}
          className="slider-image"
        />
      ))}
      <button className="arrow-right" onClick={nextSlide}>
        <BsFillArrowRightCircleFill />
      </button>
      <span>
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={idx === slide ? "slide-active" : "slide-non-active"}
          ></button>
        ))}
      </span>
    </div>
  );
};
