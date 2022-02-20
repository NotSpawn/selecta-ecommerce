import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <li className="item">
        <div className="item-main cf">
          <div className="item-block ib-info cf">
            <img className="product-img" src={product.picture} alt="" />
            <div className="ib-info-meta">
              <Link to={`/products/${product.id}`}>
                <span className="title">{product.title} </span>
                <span className="itemno">#{product.id}37289</span>
              </Link>
            </div>
          </div>
          <div className="item-block ib-qty">
            <input type="text" value={product.newItemCount} className="qty" />
            <span className="price">
              <span>x</span> ${product.price}
            </span>
          </div>
        </div>
        <div className="if-left">
          <button className="btn" onClick={() => removeItem(product.id)}>
            Remove item
          </button>
        </div>
      </li>
    </div>
  );
}

export default CartItem;
