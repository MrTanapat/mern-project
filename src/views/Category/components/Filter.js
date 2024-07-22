import React, { Component } from "react";
import Axios from "axios";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "Women",
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  handleFilterChange = (category) => {
    this.setState({ selectedFilter: category }, this.fetchProducts);
  };

  fetchProducts = async () => {
    try {
      const response = await Axios.get(`/api/products?category=${this.state.selectedFilter}`);
      this.setState({ products: response.data.products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  render() {
    const { selectedFilter } = this.state;

    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul className="sidebar_categories">
          <li className={selectedFilter === "Men" ? "active" : ""}>
            <a href="#" onClick={() => this.handleFilterChange("Men")}>Men</a>
          </li>
          <li className={selectedFilter === "Women" ? "active" : ""}>
            <a href="#" onClick={() => this.handleFilterChange("Women")}>
              <span>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </span>
              Women
            </a>
          </li>
          <li className={selectedFilter === "Accessories" ? "active" : ""}>
            <a href="#" onClick={() => this.handleFilterChange("Accessories")}>Accessories</a>
          </li>
          <li className={selectedFilter === "New Arrivals" ? "active" : ""}>
            <a href="#" onClick={() => this.handleFilterChange("New Arrivals")}>New Arrivals</a>
          </li>
          <li className={selectedFilter === "Collection" ? "active" : ""}>
            <a href="#" onClick={() => this.handleFilterChange("Collection")}>Collection</a>
          </li>
          <li className={selectedFilter === "Shop" ? "active" : ""}>
            <a href="#" onClick={() => this.handleFilterChange("Shop")}>Shop</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
