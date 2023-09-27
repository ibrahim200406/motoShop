import "./countDown.css";
import { initializeCountDown } from "./countDownApp.js";
import Button from "../../../UI/Button/Button";
import motobike from "../../../assets/motobike.jpg";
import React from "react";
import { Link } from "react-router-dom";

function CountDown() {
  React.useEffect(() => {
    initializeCountDown();
  }, []);
  return (
    <div className="countDown section-padding section-margin">
      <div className="background-image">
        <img src={motobike} alt="motobike" />
      </div>
      <div className="content">
        <div className="content-left">
          <h1>
            Wheel into Savings: Limited-Time Seasonal Sale on All Car
            Accessories
          </h1>
          <Link to="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>
        <div className="content-right">
          <div className="countdown flex items-center justify-center">
            <div className="time flex flex-col   items-center justify-center">
              <h2 id="days">00</h2>
              <small>Days</small>
            </div>
            <div className="time flex flex-col  items-center justify-center">
              <h2 id="hours">00</h2>
              <small>Hours</small>
            </div>
            <div className="time flex flex-col  items-center justify-center">
              <h2 id="minutes">00</h2>
              <small>Minutes</small>
            </div>
            <div className="time flex flex-col items-center justify-center">
              <h2 id="seconds">00</h2>
              <small>Seconds</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
