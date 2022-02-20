import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartDetail.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

function CartDetail() {
  const { cart, ClearCart, tax, total, subTotal } = useContext(CartContext);

  return (
    <div className="card-detail">
      <div className="wrap">
        <header className="cart-header cf">
          <strong>Items in Your Cart</strong>
          <span class="btn-nav" onClick={ClearCart}>
            Clear Cart
          </span>
        </header>
        <div className="cart-table">
          <ul>
            {cart.map((product, index) => {
              return <CartItem key={index} product={product} />;
            })}
          </ul>
        </div>
        <div className="sub-table cf">
          <div className="summary-block">
            <div className="sb-promo">
              <input type="text" placeholder="Enter Promo Code" />
              <span className="btn-nav">Apply</span>
            </div>
            <ul>
              <li className="subtotal">
                <span className="sb-label">Subtotal</span>
                <span className="sb-value">${subTotal}</span>
              </li>
              <li className="shipping">
                <span className="sb-label">Shipping</span>
                <span className="sb-value">n/a</span>
              </li>
              <li className="tax">
                <span className="sb-label">Est. Tax |</span>
                <span className="sb-value">${tax}</span>
              </li>
              <li className="grand-total">
                <span className="sb-label">Total</span>
                <span className="sb-value">${total}</span>
              </li>
            </ul>
          </div>
          <div className="copy-block">
            <p>Items will be saved in your cart for 30 days.</p>
            <p className="customer-care">
              Call us M-F 8:00 am to 6:00 pm EST
              <br />
              (877)-555-5555 or contact us. <br />
            </p>
          </div>
        </div>

        <div className="cart-footer cf">
          <span className="btn-nav">Checkout</span>
          <span className="cont-shopping">
            <Link to="/">
              <i className="i-angle-left"></i>Continue Shopping
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
