import ProductItem from "../../../UI/ProductItem/ProductItem";
import Button from "../../../UI/Button/Button";
import { LatestArrivalsInfos } from "./latestArrivalsInfos";
import "./latestArrivals.css";
import { Link } from "react-router-dom";
function LatestArrivals() {
  return (
    <div className="latest-arrivals section-padding section-margin">
      <div className="title flex justify-between">
        <h1>Latest Arrivals</h1>
        <Link to="/shop">
          <Button>View All</Button>
        </Link>
      </div>
      <div className="products grid">
        <ProductItem products={LatestArrivalsInfos} />
      </div>
    </div>
  );
}

export default LatestArrivals;
