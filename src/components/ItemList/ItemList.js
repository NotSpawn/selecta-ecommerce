import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ products }) {
  return (
    <div className="item-list">
      <h4>Trendy Products</h4>
      <div className="item-title-list">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
