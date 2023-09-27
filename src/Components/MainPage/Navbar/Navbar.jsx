import "./navbar.css";
import HoverMenu from "../../../UI/HoverMenu/HoverMenu";
import { linksCollections, linksMain } from "./navbarLinksNames";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useState } from "react";
import SearchForm from "../../../UI/SearchForm/SearchForm";
import Cart from "../../../UI/Cart/Cart";
import MobileOffcanvas from "../../../UI/MobileOffcanvas/MobileOffcanvas";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
function Navbar() {
  // ! Hover Links Start
  const [show, setShow] = useState("notShow");
  const linkHover = () => {
    setShow("show");
  };
  const linkLeave = () => {
    setShow("notShow");
  };
  const [show2, setShow2] = useState("notShow");
  const linkHover2 = () => {
    setShow2("show");
  };
  const linkLeave2 = () => {
    setShow2("notShow");
  };
  const [isActive, setIsActive] = useState(true);
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };
  // ! Hover Links End

  // ! Search Form start
  const [showSearchForm, setShowSearchForm] = useState(false);
  const OpenCloseSearchForm = () => {
    if (showSearchForm === true) {
      setShowSearchForm(false);
    } else {
      setShowSearchForm(true);
    }
  };

  // ! Search form end

  // ! Cart Start

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const showCart = () => {
    setShowOffcanvas(true);
  };
  const [showOffcanvas2, setShowOffcanvas2] = useState(false);

  const showMenuOffcanvas = () => {
    setShowOffcanvas2(true);
  };

  const cartCtx = useContext(CartContext);
  const totalItemInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);
  console.log(totalItemInCart);
  // ! Cart End
  return (
    <header className="navbar section-margin section-padding">
      <div className="navbar-left flex items-center col-lg-4">
        <div className="toggle-button">
          <button>
            <HiOutlineMenuAlt1 onClick={showMenuOffcanvas} />
          </button>
          <MobileOffcanvas
            linksNames={linksMain}
            linksNames2={linksCollections}
            show={showOffcanvas2}
            setShowOffcanvas={setShowOffcanvas2}
            toggleActiveState={toggleActiveState}
            isActive={isActive}
          />
        </div>
        <ul className="navbar-menu-links  flex">
          <li className="navbar-menu-link relative">
            <a
              href=""
              className="flex items-center"
              onMouseEnter={linkHover}
              onMouseLeave={linkLeave}
            >
              <span>Main</span> <IoIosArrowDown className="arrowIcon" />
            </a>
            <HoverMenu linksNames={linksMain} show={show} />
          </li>
          <li className="navbar-menu-link relative">
            <a
              href=""
              className="flex items-center"
              onMouseEnter={linkHover2}
              onMouseLeave={linkLeave2}
            >
              <span>Collections</span> <IoIosArrowDown className="arrowIcon" />
            </a>
            <HoverMenu linksNames={linksCollections} show={show2} />
          </li>
          <li className="navbar-menu-link">
            <Link to="/shop" className="flex items-center">
              <span>All Products</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center flex justify-center">
        <Link to="/" className="navbar-logo">
          SHOPMOTBIKE
        </Link>
      </div>
      <div className="navbar-right flex items-center justify-end ">
        <ul className="navbar-menu-links right flex items-center justify-center">
          <li className="navbar-menu-link search-button flex items-center relative">
            <BiSearchAlt className="icon" onClick={OpenCloseSearchForm} />{" "}
            <span onClick={OpenCloseSearchForm}>Search</span>
            <SearchForm showSearchForm={showSearchForm} />
          </li>
          <li className="navbar-menu-link my-account flex items-center">
            <Link to="/account">
              <span>My Account</span>
            </Link>
          </li>
          <li className="navbar-menu-link cart flex items-center">
            <AiOutlineShoppingCart className="icon" onClick={showCart} />
            <span onClick={showCart}>Cart</span>
            <span className="count" onClick={showCart}>
              {totalItemInCart}
            </span>
            <Cart show={showOffcanvas} setShowOffcanvas={setShowOffcanvas} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
