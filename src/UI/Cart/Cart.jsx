import "./cart.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { AiOutlineClose } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import CartProduct from "../CartProduct/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const CartContent = ({ show, closeCart }) => {
  CartContent.propTypes = {
    show: PropTypes.string.isRequired,
    closeCart: PropTypes.func,
  };
  const { items, totalAmount } = useContext(CartContext);
  const hasItems = items.length > 0;
  return (
    <div className={`offcanvas ${show === true ? " show " : "  "}`}>
      <div className="cart-header flex justify-between">
        <h1>Cart</h1>
        <button className="close-offcanvas-button" onClick={closeCart}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="cart-bottom">
        <div className="cart-content">
          {items.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
        </div>{" "}
        {hasItems ? (
          <div className="cart-subinfo">
            <div className="total-price">
              <h1>
                SUBTOTAL: <span>${totalAmount.toFixed(2)}</span>
              </h1>
            </div>

            <div className="buttons">
              <Link to="/cart" className="w-full">
                <button className="viewCartButton">View Cart </button>
              </Link>
              <button className="button checkOutButton flex items-center">
                Checkout &nbsp;
                <FiArrowUpRight className="arrowIcon" />
              </button>
            </div>
          </div>
        ) : (
          "There is no product."
        )}
      </div>
    </div>
  );
};
const CartBackdrop = ({ show, closeCart }) => {
  CartBackdrop.propTypes = {
    show: PropTypes.string.isRequired,
    showCart: PropTypes.func,
    closeCart: PropTypes.func,
  };
  return (
    <div
      className={`backdrop ${show === true ? "show" : ""}`}
      onClick={closeCart}
    ></div>
  );
};

function Cart({ show, setShowOffcanvas }) {
  Cart.propTypes = {
    show: PropTypes.string.isRequired,
    setShowOffcanvas: PropTypes.string.isRequired,
  };
  const PortalElement = document.getElementById("overlays");
  const closeCart = () => {
    setShowOffcanvas(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <CartBackdrop show={show} closeCart={closeCart} />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <CartContent show={show} closeCart={closeCart} />,
        PortalElement
      )}
    </>
  );
}

export default Cart;
