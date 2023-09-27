import "./blogDetails.css";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function BlogDetails({ blog }) {
  BlogDetails.propTypes = {
    blog: PropTypes.string,
  };
  return (
    <>
      <div className="breadcrumbs flex items-center section-padding section-margin">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>
          <Link to="/blogs">Blogs</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>{blog.title}</span>
      </div>
      <div className="blog-details-wrapper section-margin section-padding">
        <div className="blog-details">
          <div className="blog-category-name">
            <span>{blog.category}</span>
          </div>
          <div className="blog-title">
            <h1>{blog.title}</h1>
          </div>
          <div className="blog-infos flex">
            <div className="date">
              <span>{blog.date}</span>
            </div>
            <div className="author">
              by
              <strong> {blog.author}</strong>
            </div>
          </div>

          <div className="blog-image">
            <img src={blog.img} alt="" />
          </div>

          <div className="blog-content">
            <p>{blog.description}</p>
          </div>

          <div className="blog-subinfos flex justify-between">
            <div className="subinfo-date">
              Published: <span> {blog.date}</span>
            </div>
            <div className="subinfo-author">
              <span>
                by <strong className="text-black">{blog.author}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
