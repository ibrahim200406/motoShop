import { Link } from "react-router-dom";
import "./productDetail.css";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { CartContext } from "../../context/CartProvider";

function ProductDetail({ product, youMayAlsoLike }) {
  ProductDetail.propTypes = {
    product: PropTypes.array,
    youMayAlsoLike: PropTypes.array,
  };
  const [image, setImage] = useState(product.img1);
  useEffect(() => {
    setImage(product.img1);
  }, [product.img1]);
  const ChangeImageHandler1 = () => {
    setImage(product.img1);
  };
  const ChangeImageHandler2 = () => {
    setImage(product.img2);
  };

  const [activeImage1, setActiveImage1] = useState("active");
  const [activeImage2, setActiveImage2] = useState("");
  const ActiveImage1 = () => {
    setActiveImage1("active");
    setActiveImage2("");
  };
  const ActiveImage2 = () => {
    setActiveImage1("");
    setActiveImage2("active");
  };

  const CombineHandler1 = () => {
    ActiveImage1(), ChangeImageHandler1();
  };
  const CombineHandler2 = () => {
    ActiveImage2(), ChangeImageHandler2();
  };

  const { items, totalAmount, addItem } = useContext(CartContext);
  console.log(items, totalAmount);
  return (
    <>
      <div className="produc-detail-wrapper ">
        <div className="breadcrumbs flex items-center section-padding section-margin">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <IoIosArrowForward />
          </span>
          <span>{product.category}</span>
          <span>
            <IoIosArrowForward />
          </span>
          <span>{product.name}</span>
        </div>
        <div className="product-detail">
          <div className="left">
            <div className="product-image">
              <img src={image} alt="" />
            </div>
            <div className="product-careousel">
              <img
                className={activeImage1}
                style={{ width: "150px" }}
                src={product.img1}
                alt={product.name}
                onClick={CombineHandler1}
              />
              <img
                className={activeImage2}
                style={{ width: "150px" }}
                src={product.img2}
                alt={product.name}
                onClick={CombineHandler2}
              />
            </div>
          </div>
          <div className="right ">
            <div className="product-infos flex flex-col">
              <span className="product-sku">SKU: 302004</span>
              <Link
                to={`/category/${product.category}`}
                className="product-category"
              >
                {product.category}
              </Link>
              <div className="product-title">
                <h1>{product.name}</h1>
              </div>
              <div className="product-subinfo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <span className="product-price">${product.price.toFixed(2)}</span>
              <div className="product-quatity">
                <input
                  type="number"
                  id="quantity_650c057204ade"
                  className="input-text qty text"
                  name="quantity"
                  defaultValue="1"
                  aria-label="Product quantity"
                  size="4"
                  min="1"
                  max="10"
                  step="1"
                  placeholder=""
                  inputMode="numeric"
                  autoComplete="off"
                />
              </div>
              <div className="add-to-cart-button">
                <Button onClick={() => addItem(product)}>Add To Cart</Button>
              </div>
              <div className="description">
                <h1 className="title">Product Description</h1>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="you-may-also-like section-padding section-margin">
        <h1 className="title">You May Also Like</h1>
        <div className="wrapper">
          <ProductItem products={youMayAlsoLike} />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
