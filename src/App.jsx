import "./App.css";
import CategoryList from "./Components/MainPage/CategoryList/CategoryList";
import LatestArrivals from "./Components/MainPage/LatestArrivals/LatestArrivals";
import CountDown from "./Components/MainPage/CountDown/CountDown";
import Navbar from "./Components/MainPage/Navbar/Navbar";
import Slider from "./Components/MainPage/Slider/Slider";
import BestSellers from "./Components/MainPage/BestSellers/BestSellers";
import SectionAdd from "./Components/MainPage/SectionAdd/SectionAdd";
import FeaturedItem from "./Components/MainPage/FeaturedItems/FeaturedItem";
import UsefulTips from "./Components/MainPage/UsefulTips/UsefulTips";
import Footer from "./Components/MainPage/Footer/Footer";
import ProductsByCategory from "./Components/ProductsByCategory/ProductsByCategory";

import { Tires } from "./Components/ProductsByCategory/productbyCategoryNam/tires";
import { Accessories } from "./Components/ProductsByCategory/productbyCategoryNam/accessories";
import { Tools } from "./Components/ProductsByCategory/productbyCategoryNam/tools";
import { engineOil } from "./Components/ProductsByCategory/productbyCategoryNam/engineoil";
import { Helmant } from "./Components/ProductsByCategory/productbyCategoryNam/helmant";
import { Chain } from "./Components/ProductsByCategory/productbyCategoryNam/chain";

import AllProducts from "./Components/Shop/AllProducts/AllProducts";
// !Pages
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ProductDetail from "./UI/ProductDetail/ProductDetail";

import products from "./ProductData";
import { BlogsData } from "./Components/Blogs/BlogsData";

import AboutUs from "./Components/AboutUs/AboutUs";
import MyAccount from "./Components/MyAccount/MyAccount";
import Blog from "./Components/Blogs/Blog/Blog";
import BlogDetails from "./Components/Blogs/BlogDetails/BlogDetails";
import CartDetail from "./Components/CartDetail/CartDetail";
import { CartProvider } from "./context/CartProvider";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/account" element={<MyAccountPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Category  */}
          <Route path="/category/tires" element={<ProductsTiresCategory />} />
          <Route
            path="/category/accessories"
            element={<ProductsAccessoriesCategory />}
          />
          <Route path="/category/chain" element={<ProductsChainCategory />} />
          <Route
            path="/category/engineoil"
            element={<ProductsEngineoilCategory />}
          />
          <Route
            path="/category/helmant"
            element={<ProductsHelmantCategory />}
          />
          <Route path="/category/tools" element={<ProductsToolsCategory />} />
          {/* Product Detail */}
          <Route path="/product/detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

// ! Pages
function MainPage() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Slider />
        <CategoryList />
        <LatestArrivals />
        <CountDown />
        <BestSellers />
        <SectionAdd />
        <FeaturedItem />
        <UsefulTips />
      </main>
      <Footer />
    </>
  );
}
// ! Product Detail
function ProductDetailPage() {
  let { id } = useParams();

  let product = products.find((p) => p.id === Number(id));

  return (
    <>
      <Navbar />
      <div className="content">
        {product ? (
          <ProductDetail youMayAlsoLike={youMayAlsoLike} product={product} />
        ) : (
          <p>Ürün bulunamadı</p>
        )}
      </div>
      <Footer />
    </>
  );
}
// ! Shop
function Shop() {
  return (
    <>
      <Navbar />
      <main className="content">
        <AllProducts />
      </main>
      <Footer />
    </>
  );
}
// ! Categories List

function ProductsTiresCategory() {
  return (
    <>
      <Navbar />
      <div className="content">
        <ProductsByCategory products={Tires} />
      </div>
      <Footer />
    </>
  );
}

function ProductsAccessoriesCategory() {
  return (
    <>
      <Navbar />
      <div className="content">
        <ProductsByCategory products={Accessories} />
      </div>
      <Footer />
    </>
  );
}

function ProductsChainCategory() {
  return (
    <>
      <Navbar />
      <div className="content">
        <ProductsByCategory products={Chain} />
      </div>
      <Footer />
    </>
  );
}

function ProductsEngineoilCategory() {
  return (
    <>
      <Navbar />
      <div className="content">
        <ProductsByCategory products={engineOil} />
      </div>
      <Footer />
    </>
  );
}
function ProductsHelmantCategory() {
  return (
    <>
      <Navbar />
      <div className="content">
        <ProductsByCategory products={Helmant} />
      </div>
      <Footer />
    </>
  );
}
function ProductsToolsCategory() {
  return (
    <>
      <Navbar />
      <div className="content">
        <ProductsByCategory products={Tools} />
      </div>
      <Footer />
    </>
  );
}

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
const youMayAlsoLike = [];

for (let i = 0; i < 3; i++) {
  let randomProduct = getRandomItem(products);

  while (youMayAlsoLike.includes(randomProduct)) {
    randomProduct = getRandomItem(products);
  }

  youMayAlsoLike.push(randomProduct);
}
// ! About Us

function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

// ! My Account Page
function MyAccountPage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <MyAccount />
      </div>
      <Footer />
    </>
  );
}

// ! Blogs Page

function BlogsPage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Blog />
      </div>
      <Footer />
    </>
  );
}

// ! Blog Detail Page

function BlogDetailPage() {
  let { id } = useParams();

  let blog = BlogsData.find((b) => b.id === Number(id));
  return (
    <>
      <Navbar />
      <div className="content">
        {blog ? <BlogDetails blog={blog} /> : <p>There is no blog </p>}
      </div>
      <Footer />
    </>
  );
}
// ! Cart Page

function CartPage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <CartDetail />
      </div>
      <Footer />
    </>
  );
}
export default App;
