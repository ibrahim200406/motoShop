import { useContext } from "react";
import "./cartProduct.css";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

function CartProduct({ item }) {
  CartProduct.propTypes = {
    item: PropTypes.array,
  };
  const { removeItem } = useContext(CartContext);
  return (
    <div className="cartProduct flex">
      <Link to={`/product/detail/${item.id}`}>
        <div className="product-image ">
          <img src={item.img1} alt="" />
        </div>
      </Link>
      <div className="product-infos">
        <div className="title">
          <Link to={`/product/detail/${item.id}`} href="">
            {" "}
            <h1>{item.name}</h1>
          </Link>
        </div>
        <div className="quantity flex">
          <span>{item.amount}&nbsp;X&nbsp;</span>
          <span className="price"> ${item.price.toFixed(2)}</span>
        </div>
        <div className="deleteProductButton">
          <Link
            to={`/product/detail/${item.id}`}
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              removeItem(item.id);
            }}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
