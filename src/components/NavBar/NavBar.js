import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeCartView from "../HomeCartView";
import MobileMenu from "../MobileMenu";
import device from "../../modules/mediaQuery";
import MediaQuery from "react-responsive";
import Axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      activeclass: false,
      shopDropdown: false
    };
  }

  toggleShopDropdown = () => {
    this.setState({ shopDropdown: !this.state.shopDropdown });
  }

  componentDidMount() {
    if (Object.keys(this.props.cart).length < 1) {
      this.props.getCartByUserId();
    }
    this.fetchDepartments();
  }

  fetchDepartments = async () => {
    try {
      const response = await Axios.get('/api/departments');
      this.setState({ departments: response.data.departments });
    } catch (error) {
      console.error("There was an error fetching the departments!", error);
    }
  }

  showHideModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  handleMenuClicked = () => {
    this.setState({ activeclass: !this.state.activeclass });
  };

  render() {
    const { shopDropdown } = this.state;
    const { departments, cart } = this.props;

    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/fashion-cube">
                  Fashion<span>Cube</span>
                </Link>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link to="/home">home</Link>
                  </li>
                  <li className="mega-drop-down">
                    <a href="#" onClick={this.toggleShopDropdown}>
                      shop <i className="fa fa-angle-down"></i>
                    </a>
                    {shopDropdown && (
                      <div className="mega-menu">
                        <div className="mega-menu-wrap">
                          {departments &&
                            departments.map((item, index) => (
                              <div className="mega-menu-content" key={index}>
                                <h5>{item.departmentName}</h5>
                                <ul className="stander">
                                  {item.categories.split(",").map((i, idx) => (
                                    <li key={idx}>
                                      <Link
                                        to={`/fashion-cube/shops/${item.departmentName}/${i}`}
                                      >
                                        {i}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/fashion-cube/contact">contact</Link>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="#" onClick={() => this.showHideModal()}>
                      <i className="fas fa-shopping-bag"></i>
                      {cart.totalQty !== undefined && (
                        <span id="checkout_items" className="checkout_items">
                          {cart.totalQty}
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
                <div
                  className="hamburger_container"
                  onClick={() => this.handleMenuClicked()}
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <MediaQuery query={device.max.tabletL}>
          <MobileMenu
            activeClass={this.state.activeclass}
            onClose={() => this.handleMenuClicked()}
          />
        </MediaQuery>
        {this.state.modalShow && (
          <HomeCartView
            cart={cart}
            show={this.state.modalShow}
            onHide={() => this.showHideModal()}
          />
        )}
      </div>
    );
  }
}

export default NavBar;