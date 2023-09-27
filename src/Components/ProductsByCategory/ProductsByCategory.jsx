import { Link } from "react-router-dom";
import "./productsByCategory.css";
import ProductItem from "../../UI/ProductItem/ProductItem";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

function ProductsByCategory({ products }) {
  ProductsByCategory.propTypes = {
    products: PropTypes.array,
  };
  return (
    <div className="all-products section-padding section-margin">
      <div className="breadcrumbs flex items-center">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>{products[0].category}</span>
      </div>
      <div className="title">
        <h1 className="bigTitle mr-72">{products[0].category}</h1>
       
      </div>
      <div className="products-container ">
        <div className="products grid">
          <ProductItem products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsByCategory;
