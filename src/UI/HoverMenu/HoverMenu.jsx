import "./hoverMenu.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HoverMenu({ linksNames, show }) {
  HoverMenu.propTypes = {
    linksNames: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
  };
  return (
    <ul className={`navbar-hover-links ${show}`}>
      {linksNames.map((name) => (
        <li className="navbar-hover-link" key={name.id}>
          <Link to={name.href} className="flex items-center">
            {name.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HoverMenu;
