import React from "react";
import animationData from "../../assets/animations/13525-empty.json";
import Lottie from "react-lottie";
import "./EmptyCart.css";
import { Link } from "react-router-dom";

function EmptyCart() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fondo-lottie">
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1>Your Cart is Empty</h1>
      <Link to="/">
        <button className="btn-nav"> Go Back</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
