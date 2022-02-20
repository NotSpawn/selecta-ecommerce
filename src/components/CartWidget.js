import React, { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidjet() {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="cart-count">
      <Link to="/cart">
        <i className="fa fa-shopping-cart">
          <span className="cart-items-count">
            {itemCount >= 1 ? itemCount : ""}
          </span>
        </i>
      </Link>
    </div>
  );
}

export default CartWidjet;
