import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./CartDetail.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/95029-success.json";

function CartDetail() {
  const { cart, products, ClearCart, tax, total, subTotal } =
    useContext(CartContext);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const checkout = () => {
    if (products.length === 0) {
      alert("Cart is empty");
      return;
    }
    const productsToBuy = products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        newItemCount: product.newItemCount,
      };
    });

    setBuyer({
      name: buyer.name,
      phone: buyer.phone,
      email: buyer.email,
    });

    const order = { buyer: buyer, products: productsToBuy, total: total };

    addDoc(collection(db, "orders"), order)
      .then((doc) => {
        setOrderId(doc.id);
        setSuccess(true);
        console.log("products have been purchased", doc.id);
      })
      .catch((err) => {
        console.log("something went wrong...", err);
      });
    ClearCart();
    setBuyer({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="card-detail">
      <div className="wrap">
        <header className="cart-header cf">
          <strong>Items in Your Cart</strong>
          <span className="btn-nav" onClick={ClearCart}>
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
        <div className="buyer-input">
          <input
            className="buy-input"
            type="text"
            placeholder="Name"
            name="name"
            value={buyer.name}
            onChange={handleChange}
          />
          <input
            className="buy-input"
            type="text"
            placeholder="Phone"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
          />
          <input
            className="buy-input"
            type="text"
            placeholder="Email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
          />
        </div>
        <div className="cart-footer cf">
          <span className="btn-nav" onClick={checkout}>
            Checkout
          </span>
          <span className="cont-shopping">
            <Link to="/" className="cont-shop">
              <i className="i-angle-left"></i>Continue Shopping
            </Link>
          </span>
        </div>
      </div>
      {success ? (
        <div className="success">
          <Lottie options={defaultOptions} height={150} width={150} />
          <h1>Your purchase has been completed</h1>
          <p>Purchase order number (id) : {orderId}</p>
        </div>
      ) : null}
    </div>
  );
}

export default CartDetail;
