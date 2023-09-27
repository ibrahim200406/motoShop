import "./blog.css";
import BlogItem from "../../../UI/BlogItem/BlogIteme";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { BlogsData } from "../BlogsData";

function Blog() {
  const blogs = BlogsData;
  return (
    <div className="blogs section-padding section-margin">
      <div className="breadcrumbs flex items-center">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>Blogs</span>
      </div>

      <div className="top flex justify-between">
        <h1 className="title">Blog</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          consequatur sint? Fuga dolor, iure adipisci consectetur quo nam
          blanditiis nesciunt temporibus.
        </p>
      </div>
      <div className="blogs">
          <BlogItem blogs={blogs} />
      </div>
    </div>
  );
}

export default Blog;
