import "./sectionAdd.css";
import Button from "../../../UI/Button/Button";
import leftImage from "../../../assets/left.jpg";
import rightImage from "../../../assets/right.jpg";
import { Link } from "react-router-dom";

function SectionAdd() {
  return (
    <div className="sectionAdd section-padding section-margin grid">
      <div className="left">
        <div className="left-image">
          <img src={leftImage} alt="" />
        </div>
        <div className="content flex flex-col">
          <div className="category-name">
            <span>PREMIUM TIRES</span>
          </div>
          <div className="title">
            <h1>
              Keep Rolling: Premium Tires for Optimal Safety and Performance
            </h1>
          </div>
          <Link to="/category/tires">
            <Button>Shop Now</Button>
          </Link>{" "}
        </div>
      </div>
      <div className="right">
        <div className="right-image">
          <img src={rightImage} alt="" />
        </div>
        <div className="content flex flex-col">
          <div className="category-name">
            <span>PREMIUM Tools</span>
          </div>
          <div className="title">
            <h1>
              Get the Professional Tools for Your Car&apos;s Peak Performance
            </h1>
          </div>
          <Link to="/category/tools">
            <Button>Shop Collection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionAdd;
