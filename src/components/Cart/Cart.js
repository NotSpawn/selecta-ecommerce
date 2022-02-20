import React, { useContext, useEffect, useState } from "react";
import CartDetail from "../CartDetail/CartDetail";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";

function Cart() {
  const { cart } = useContext(CartContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      setIsCartEmpty(false);
    }
  }, [cart]);

  return (
    <div className="cart-list">
      <div className="cart-title-list">
        {isCartEmpty === true ? <EmptyCart /> : <CartDetail />}
      </div>
    </div>
  );
}

export default Cart;
