import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [itemTotal, setItemTotal] = useState();

  function onAddItem(newItemCount) {
    setItemTotal(newItemCount);
  }

  return (
    <div className="container card">
      <div className="card_left">
        <img src={product.picture} alt="" />
      </div>
      <div className="card_right">
        <h3 className="title-product">{product.title}</h3>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          porttitor augue, quis interdum nisl. Curabitur non nisi felis. Quisque
          ipsum tellus, molestie a bibendum id, tempor eget massa. Nunc lobortis
          est eget nulla pellentesque, sed condimentum odio lobortis.
        </p>
        <div className="card_footer">
          <span className="price">{product.price} $</span>
        </div>
        <div>
          {!itemTotal ? (
            <ItemCount stock={10} initial={1} onAdd={onAddItem} />
          ) : (
            <Link to="/cart">
              <button className="addTo"> Go to Cart</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
