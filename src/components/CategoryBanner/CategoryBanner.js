import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Banner1 from "../../assets/images/banner_1.jpg";
import Banner2 from "../../assets/images/banner_2.jpg";
import Banner3 from "../../assets/images/banner_3.jpg";

function CategoryBanner(props) {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner1})`
              }}
              data-aos="fade-right"
            >
              <div className="banner_category">
                <Link to="/fashion-cube/category">women's</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner2})`
              }}
              data-aos="fade-up"
            >
              <div className="banner_category">
                <Link to="/fashion-cube/category">accessories's</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{
                backgroundImage: `url(${Banner3})`
              }}
              data-aos="fade-left"
            >
              <div className="banner_category">
                <Link to="/fashion-cube/category">man's</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
