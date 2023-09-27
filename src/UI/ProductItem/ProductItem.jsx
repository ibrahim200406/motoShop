import { Link } from "react-router-dom";
import "./productItem.css";
import PropTypes from "prop-types";

function ProductItem({ products }) {
  ProductItem.propTypes = {
    products: PropTypes.array,
  };
  return (
    <>
      {products.map((product) => (
        <Link
          to={`/product/detail/${product.id}`}
          className="productLink"
          key={product.id}
        >
          <div className="product">
            <div className="productImage">
              <img src={product.img1} alt="" />
            </div>
            <div className="product-info">
              <div className="product-title">
                <h1>{product.name}</h1>
              </div>
              <div className="product-subinfo">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
              </div>
              <div className="product-price">
                <span className="newPrice">${product.price.toFixed(2)}</span>
                <span className="oldPrice">${product.oldPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductItem;
