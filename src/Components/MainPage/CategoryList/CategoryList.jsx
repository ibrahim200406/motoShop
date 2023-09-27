import "./categoryList.css";
import Button from "../../../UI/Button/Button";
import { CategoryInfos } from "./categoriesInfos";
import { Link } from "react-router-dom";

function CategoryList() {
  return (
    <div className="categories section-padding section-margin">
      <div className="title flex justify-between">
        <h1>Shop by Category</h1>
        <Link to="/shop">
          <Button>View All</Button>
        </Link>
      </div>

      <div className="category-list grid">
        {CategoryInfos.map((category) => (
          <Link to={category.href} key={category.id}>
            <div className="category">
              <div className="category-image">
                <img src={category.img} alt="chain" />
              </div>
              <div className="category-title">
                <h1>{category.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
