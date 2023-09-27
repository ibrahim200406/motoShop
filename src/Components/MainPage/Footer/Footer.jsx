import "./footer.css";
import Button from "../../../UI/Button/Button";
import creditCards from "../../../assets/credit-cards.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="section-padding section-margin">
      <div className="footer flex">
        <div className="footer-left ">
          <ul className="menu-list flex justify-between flex-wrap">
            <li>
              <a className="linkTitle" href="">
                Main
              </a>

              <ul>
                <li>
                  <Link to="/">Home Page</Link>
                </li>
                <li>
                  <Link to="/shop">All Products</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/">Cart</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="linkTitle" href="">
                Collections
              </a>
              <ul>
                <li>
                  <Link to="/category/chain">Chain </Link>
                </li>
                <li>
                  <Link to="/category/engineoil">Engine Oils</Link>
                </li>
                <li>
                  <Link to="/category/tires">Tires</Link>
                </li>
                <li>
                  <Link to="/category/accessories">Accessories</Link>
                </li>
                <li>
                  <Link to="/category/helmant">Helmants</Link>
                </li>
                <li>
                  <Link to="/category/tools">Tools</Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="linkTitle" href="">
                Information
              </a>
              <ul>
                <li>
                  <Link to="/about">About Us </Link>
                </li>
                <li>
                  <Link to="/">ShopMotoBike</Link>
                </li>
                <li>
                  <Link to="/shop">Shop Now</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="title">
            <h2>Our Values</h2>
            <div className="text">
              <p>
                At <a href="">SHOPMOTOBIKE</a>, we believe that every car should
                reflect its owner&apos;s personal style, and with our diverse
                catalog of high-quality products, you can transform any vehicle
                into a personal sanctuary of comfort and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom grid ">
        <div className="left ">
          <div className="logo">
            <Link to="/postcss.config.js">SHOPMOTOBIKE</Link>
          </div>
          <span>
            ©️ Copyright, <Link to="/">ShopMotoBike</Link>, 2023
          </span>
        </div>
        <div className="center  flex items-start flex-col">
          <div className="address">
            <span>885 Avenue of the Turkey Istanbul NY 10001-3457 Turkey</span>
          </div>
          <div className="credit-cards-images">
            <img src={creditCards} alt="" />
          </div>
        </div>
        <div className="right ">
          <div className="text">
            <h1>Only Important Updates and Cool Articles</h1>
          </div>
          <form className="flex">
            <input type="email" placeholder="E-mail" />
            <Button>Subscribe</Button>
          </form>
          <div className="form-info">
            <p>
              By pressing the “Subscribe” button, you confirm that you have read
              and are agreeing to our <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
