import "./usefulTips.css";
import Button from "../../../UI/Button/Button";
import { UsefulTipsData } from "./usefulTipsData";
import { Link } from "react-router-dom";
function UsefulTips() {
  return (
    <div className="latest-arrivals section-padding section-margin">
      <div className="title flex justify-between">
        <h1>Useful Tips</h1>
        <Link to="/blogs">
          <Button>View All</Button>
        </Link>{" "}
      </div>

      <div className="usefulTips-content grid">
        {UsefulTipsData.map((item) => (
          <div className="usefulTipItem" key={item.id}>
            <div className="usefulTipImage">
              <Link to={`blogs/${item.id}`}>
                <img src={item.img} alt="" />
              </Link>
              <Link to={`blogs/${item.id}`}>
                <span className="category">{item.category}</span>
              </Link>
            </div>
            <div className="content">
              <div className="usefulTipTitle">
                <Link to={`blogs/${item.id}`}>
                  {" "}
                  <h1>{item.title}</h1>
                </Link>
              </div>
              <div className="usefulTipInfos flex items-center">
                <div className="date mr-6">
                  <span>{item.date}</span>
                </div>
                <div className="author">
                  by <span>{item.author}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsefulTips;
