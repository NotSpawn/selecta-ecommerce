import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <h1 className="navbar-logo">
            Selecta <i className="fa fa-heart"></i>
          </h1>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <DropdownMenu />
        <CartWidget />
        <Button>Sign Up</Button>
      </nav>
    );
  }
}
