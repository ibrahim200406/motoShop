import { Link } from "react-router-dom";
import "./aboutUs.css";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/aboutUs.png";
import img2 from "../../assets/aboutus2.png";
function AboutUs() {
  return (
    <div className="aboutUs-wrapper section-padding section-margin">
      <div className="breadcrumbs flex items-center">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <IoIosArrowForward />
        </span>
        <span>About Us</span>
      </div>

      <div className="top">
        <div className="text">
          <h1 className="title">
            Your Go-To Destination for Exceptional Car Care
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            molestiae fuga quam assumenda iure quae voluptate ipsa veniam nam
            eaque quis enim, at neque voluptas. Perspiciatis voluptatem nemo,
            vero quam velit quas praesentium obcaecati dolor ipsum voluptate
            atque error eaque mollitia provident cum impedit qui eligendi illo
            sunt nobis iste.
          </p>
        </div>

        <div className="imagePeople">
          <img src={img1} alt="" />
        </div>

        <div className="text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            distinctio ratione repellendus. Perferendis saepe iure praesentium
            maiores, a quaerat incidunt. Obcaecati esse, dicta quidem, error,
            doloremque nostrum earum nihil est voluptas quia porro quo ab
            minima! Nostrum dolorum sed sunt, fugit quo beatae quaerat fugiat
            ullam saepe explicabo, eum repellendus aspernatur repellat, quidem
            officiis cupiditate laborum? Nisi ducimus unde quis quos dolor.
            Ducimus ullam nihil aperiam ipsam quibusdam? Omnis consequatur
            corporis eligendi. Quo et assumenda architecto ut obcaecati
            perspiciatis velit repellendus quos ipsum omnis placeat, maxime
            eligendi? Illum ut dolorem eum id autem! Fugiat mollitia nihil ea
            recusandae eveniet, pariatur sed labore corporis cumque ut voluptate
            quod animi hic porro distinctio dignissimos itaque minima est, optio
            enim quaerat rem repudiandae debitis! Excepturi sapiente reiciendis
            consequuntur suscipit dicta optio itaque deserunt molestias quia
            voluptates nobis, autem, nemo obcaecati maiores eligendi similique
            corporis illum laudantium architecto nam velit corrupti pariatur.
            Magnam, nostrum.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            distinctio ratione repellendus. Perferendis saepe iure praesentium
            maiores, a quaerat incidunt. Obcaecati esse, dicta quidem, error,
            doloremque nostrum earum nihil est voluptas quia porro quo ab
            minima! Nostrum dolorum sed sunt, fugit quo beatae quaerat fugiat
            ullam saepe explicabo, eum repellendus aspernatur repellat, quidem
            officiis cupiditate laborum? Nisi ducimus unde quis quos dolor.
            Ducimus ullam nihil aperiam ipsam quibusdam? Omnis consequatur
            corporis eligendi.
          </p>
        </div>

        <div className="subinfos">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="infos">
            <h5>Lynn Norton & Lisa Graham</h5>
            <span>Founders of Shopfront</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
