import { Link } from "react-router-dom";
import "./cartDetail.css";
import { BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
function CartDetail() {
  const { items, totalAmount, removeItem } = useContext(CartContext);

  return (
    <div className="cart-wrapper section-padding section-margin">
      <div className="breadcrumbs flex items-center">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>Cart</span>
      </div>
      <div className="cart grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-28">
        <div className="left col-span-2">
          <div className="title">
            <h1>Cart</h1>
          </div>
          <table width={"100%"}>
            <thead>
              <tr>
                <td id="img">Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Remove</td>
              </tr>
            </thead>
            <br />
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td id="image">
                    <Link  to={`/product/detail/${item.id}`} >
                      <img src={item.img1} alt="" width={"85px"} />
                    </Link>
                  </td>
                  <td>
                    <Link  to={`/product/detail/${item.id}`} >
                      {" "}
                      <h5>{item.name}</h5>
                    </Link>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <p>{item.amount}</p>
                  </td>

                  <td>
                    <a
                      href=""
                      className="text-center"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <BsFillTrashFill
                        onClick={(e) => {
                          e.preventDefault();
                          removeItem(item.id);
                        }}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-bottom flex justify-between">
            <div className="coupon-code">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="update-cart-button">
              <button disabled>Update Cart</button>
            </div>
          </div>
        </div>
        <div className="right ">
          <div className="title">
            <h1>Cart Totals</h1>
          </div>
          <div className="subtotal flex justify-between">
            SUBTOTAL:{" "}
            <span className="font-extrabold">${totalAmount.toFixed(2)}</span>
          </div>{" "}
          <div className="total flex justify-between">
            TOTAL:{" "}
            <span className="font-extrabold">${totalAmount.toFixed(2)}</span>
          </div>
          <div className="check-out-button">
            <button> Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
