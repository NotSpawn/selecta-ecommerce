import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = cart;
  //add items to cart

  const addToCart = (newItemCount, product) => {
    if (isOnCart(product.id)) {
      alert("Already on Cart");
    } else {
      setCart([...cart, { ...product, newItemCount }]);
    }
  };

  //check if existing on cart

  const isOnCart = (id) => {
    const response = cart.find((product) => product.id === id);
    return response;
  };
  // clear cart
  const ClearCart = () => {
    setCart([]);
  };
  // remove item
  const removeItem = (id) => {
    const newItems = cart.filter((product) => product.id !== id);
    setCart(newItems);
  };

  // cartwidget count

  const itemCount = cart.reduce((newItemCount, product) => {
    return newItemCount + +product.newItemCount;
  }, 0);

  // cart summary

  const subTotal = cart.reduce((total, product) => {
    return total + product.price * +product.newItemCount;
  }, 0);

  const tax = 5;
  const total = subTotal + tax;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        ClearCart,
        itemCount,
        removeItem,
        subTotal,
        total,
        tax,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
