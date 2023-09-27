import { Link, useLocation } from "react-router-dom";
import products from "../../../ProductData";
import "./allProducts.css";
import ProductItem from "../../../UI/ProductItem/ProductItem";
import Button from "../../../UI/Button/Button";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
function AllProducts() {
  const [visibleProductsCount, setVisibleProductCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleProductCount((prevCount) => prevCount + 8);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("search");
  let displayedProducts;

  if (searchValue) {
    displayedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    displayedProducts = products; 
  }

  return (
    <div className="all-products section-padding section-margin">
      <div className="breadcrumbs flex items-center">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>Shop</span>
      </div>
      <div className="title">
        <h1 className="bigTitle">Shop</h1>
      </div>
      <div className="products-container ">
        <div className="products grid">
          <ProductItem
            products={displayedProducts.slice(0, visibleProductsCount)}
          />
          {visibleProductsCount < displayedProducts.length && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </div>
        {visibleProductsCount < products.length && (
          <div className="load-more-button">
            <Button onClick={handleLoadMore}>Load More</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
