import React from "react";
import NavbarDropdown from "react-navbar-dropdown";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

function DropdownMenu() {
  return (
    <NavbarDropdown>
      <NavbarDropdown.Toggle className="menu__item">
        <NavbarDropdown.Open>
          <p className="menu-title">Categories</p>
        </NavbarDropdown.Open>
        <NavbarDropdown.Close>
          <p className="menu-title">Categories</p>
        </NavbarDropdown.Close>
      </NavbarDropdown.Toggle>
      <NavbarDropdown.CSSTransitionMenu
        className="example1-dropdown-menu"
        classNames="example1-dropdown-menu"
        timeout={200}
      >
        <NavbarDropdown.Item className="example1-dropdown-menu-item">
          <Link to="/category/remeras">
            <ScrollIntoView selector="#item-list">
              <div className="example1-dropdown-menu-item__spacer" />
              <div className="example1-dropdown-menu-item__text">Remeras</div>
            </ScrollIntoView>
          </Link>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className="example1-dropdown-menu-item">
          <Link to="/category/sacos">
            <ScrollIntoView selector="#item-list">
              <div className="example1-dropdown-menu-item__spacer" />
              <div className="example1-dropdown-menu-item__text">
                Sacos-Blazers
              </div>
            </ScrollIntoView>
          </Link>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className="example1-dropdown-menu-item">
          <ScrollIntoView selector="#item-list">
            <Link to="/category/camisas">
              <div className="example1-dropdown-menu-item__spacer" />
              <div className="example1-dropdown-menu-item__text">Camisas</div>
            </Link>
          </ScrollIntoView>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className="example1-dropdown-menu-item">
          <ScrollIntoView selector="#item-list">
            <Link to="/category/sweaters">
              <div className="example1-dropdown-menu-item__spacer" />
              <div className="example1-dropdown-menu-item__text">Sweaters</div>
            </Link>
          </ScrollIntoView>
        </NavbarDropdown.Item>
      </NavbarDropdown.CSSTransitionMenu>
    </NavbarDropdown>
  );
}

export default DropdownMenu;
