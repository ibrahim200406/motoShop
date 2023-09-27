import "./button.css";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";

function ViewAll(props) {
  ViewAll.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
  };
  return (
    <button onClick={props.onClick} className="viewAllButton flex items-center">
      {props.children} &nbsp; <FiArrowUpRight className="arrowIcon" />
    </button>
  );
}

export default ViewAll;
