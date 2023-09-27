import "./blogItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function BlogIteme({ blogs }) {
  BlogIteme.propTypes = {
    blogs: PropTypes.array,
  };
  return (
    <>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className="blog-item" key={blog.id}>
          <div className="blog-image relative">
            <img src={blog.img} alt="" />
            <a href="" className="category-name absolute">
              <span>{blog.category}</span>
            </a>
          </div>
          <div className="blog-infos">
            <div className="title">
              <h1>{blog.title}</h1>
            </div>
            <div className="sub-infos">
              <span className="date">{blog.date}</span>
              <span className="author">
                by <b>{blog.author}</b>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BlogIteme;
