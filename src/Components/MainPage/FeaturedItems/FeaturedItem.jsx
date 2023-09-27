import "./featuredItem.css";
import Button from "../../../UI/Button/Button";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import { FeaturedItemData } from "./FeatureItemData";
import { Link } from "react-router-dom";
function FeaturedItem() {
  return (
    <div className="latest-arrivals section-padding section-margin">
      <div className="title flex justify-between">
        <h1>Featured Item</h1>
        <Link to="/shop">
          <Button>View All</Button>
        </Link>{" "}
      </div>
      <div className="products grid">
        <ProductItem products={FeaturedItemData} />
      </div>
    </div>
  );
}

export default FeaturedItem;
