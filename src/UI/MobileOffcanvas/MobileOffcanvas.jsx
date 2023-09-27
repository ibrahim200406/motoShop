import "./mobileOffcanvas.css";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileOffcanvasContent = ({
  linksNames,
  linksNames2,
  show,
  closeCart
}) => {
  MobileOffcanvasContent.propTypes = {
    linksNames: PropTypes.string.isRequired,
    linksNames2: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
    closeCart: PropTypes.func,
    toggleActiveState: PropTypes.func,
    isActive: PropTypes.string.isRequired,
  };
  // !Block refresh page
  const preventLinks = document.getElementsByClassName("hover-menu");

  for (let i = 0; i < preventLinks.length; i++) {
    preventLinks[i].addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
  // ! Block refresh page
  const [showHoverMenu, setShowHoverMenu] = useState(false);
  const [showHoverMenu2, setShowHoverMenu2] = useState(false);

  const openHoverMenu = () => {
    if (showHoverMenu === true) {
      setShowHoverMenu(false);
    } else {
      setShowHoverMenu(true);
    }
  };
  const openHoverMenu2 = () => {
    if (showHoverMenu2 === true) {
      setShowHoverMenu2(false);
    } else {
      setShowHoverMenu2(true);
    }
  };

  return (
    <div className={`mobileOffcanvas ${show === true ? " show " : "  "}`}>
      <div className="mobile-offcanvas-header">
        <button className="close-offcanvas-button" onClick={closeCart}>
          <AiOutlineClose className="closeIcon" />
        </button>
      </div>
      <div className="mobile-offcanvas-menu">
        <ul className="top-menu-links">
          <li>
            <a
              href=""
              className="flex justify-between items-center hover-menu"
              onClick={openHoverMenu}
            >
              <span>Main</span>
              <IoIosArrowDown className="menuIcon" />
            </a>
            <div
              className={`hover-links flex flex-col ml-3  ${
                showHoverMenu === true ? "show" : ""
              }`}
            >
              {linksNames.map((name) => (
                <Link to={name.href} key={name.id}>
                  {name.name}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <a
              href=""
              className="flex justify-between items-center hover-menu"
              onClick={openHoverMenu2}
            >
              <span>Collections</span>
              <IoIosArrowDown className="menuIcon" />
            </a>
            <div
              className={`hover-links flex flex-col ml-3  ${
                showHoverMenu2 === true ? "show" : ""
              }`}
            >
              {linksNames2.map((name) => (
                <Link to={name.href} key={name.id}>
                  {name.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/shop" className="flex justify-between">
              All Products <MdKeyboardArrowRight className="rightHoverIcon" />
            </Link>
          </li>
        </ul>
        <ul className="bottom-menu-links">
          <li>
            <Link to="/account" className="flex justify-between">
              My Account <MdKeyboardArrowRight className="rightHoverIcon" />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex justify-between">
              View Cart <MdKeyboardArrowRight className="rightHoverIcon" />
            </Link>
          </li>
          <li>
            <Link to="/shop" className="flex justify-between">
              Buy Now <MdKeyboardArrowRight className="rightHoverIcon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="offcanvas-bottom">
  
      </div>
    </div>
  );
};

const MobileOffcanvasBackdrop = ({ show, closeCart }) => {
  MobileOffcanvasBackdrop.propTypes = {
    show: PropTypes.string.isRequired,
    closeCart: PropTypes.func,
  };
  return (
    <div
      className={`backdrop ${show === true ? " show " : "  "}`}
      onClick={closeCart}
    ></div>
  );
};

function MobileOffcanvas({
  linksNames,
  linksNames2,
  show,
  setShowOffcanvas,
  toggleActiveState,
  isActive,
}) {
  const PortalElement = document.getElementById("overlays");
  MobileOffcanvas.propTypes = {
    linksNames: PropTypes.string.isRequired,
    linksNames2: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
    setShowOffcanvas: PropTypes.string.isRequired,
    toggleActiveState: PropTypes.func,
    isActive: PropTypes.string.isRequired,
  };

  const closeCart = () => {
    setShowOffcanvas(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <MobileOffcanvasBackdrop show={show} closeCart={closeCart} />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <MobileOffcanvasContent
          linksNames={linksNames}
          linksNames2={linksNames2}
          show={show}
          closeCart={closeCart}
          toggleActiveState={toggleActiveState}
          isActive={isActive}
        />,
        PortalElement
      )}
    </>
  );
}

export default MobileOffcanvas;
