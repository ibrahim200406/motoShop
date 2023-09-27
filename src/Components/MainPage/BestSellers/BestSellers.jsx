import "./bestSellers.css";
import Button from "../../../UI/Button/Button";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import { BestSellersData } from "./bestSellersData";
import { Link } from "react-router-dom";
function BestSellers() {
  return (
    <div className="latest-arrivals section-padding section-margin">
      <div className="title flex justify-between">
        <h1>Best Sellers</h1>
        <Link to="/shop">
          <Button>View All</Button>
        </Link>      </div>
      <div className="products grid">
        <ProductItem products={BestSellersData} />
      </div>
    </div>
  );
}

export default BestSellers;
