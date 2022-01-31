import React from "react";
import "./CartWidget.css";

function CartWidjet() {
  return (
    <div class="cart-count">
      <i className="fa fa-shopping-cart"></i>
      <span className="span-cart">0</span>
    </div>
  );
}

export default CartWidjet;
