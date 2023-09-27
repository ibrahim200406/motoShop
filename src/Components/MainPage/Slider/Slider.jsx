import "./slider.css";
import { SliderInfos } from "./sliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import slideImage1 from "../../../assets/slider/slideImage1.jpg";
import slideImage2 from "../../../assets/slider/slideImage2.jpg";
import slideImage3 from "../../../assets/slider/slideImage3.jpg";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const slideImages = [slideImage1, slideImage2, slideImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const preventSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(2);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlide = useCallback(() => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, [nextSlide]);
  return (
    <div className="slider section-padding section-margin">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
      >
        <div className="blur"></div>
        <div className="slide-content">
          <div className="category-name">
            <span>{SliderInfos[currentIndex].category}</span>
          </div>
          <div className="title">
            <h1> {SliderInfos[currentIndex].title}</h1>
          </div>
          <div className="button">
            <Link to={`category/${SliderInfos[currentIndex].category}`}>
              <button className="shopButton flex items-center justify-center">
                Shop Collection &nbsp; <FiArrowUpRight className="arrowIcon" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="buttons flex items-center ">
        <div className="buttonLeft" onClick={preventSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="buttonRight" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Slider;
