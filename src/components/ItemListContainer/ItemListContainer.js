import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProductsList(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="intro-logo">
      <h3>{greeting}</h3>
      <img src="" className="" alt="" />
      <div className="intro-button">
        <span> SHOP NOW</span>
      </div>
      <div>
        {productsList.length === 0 ? (
          <p></p>
        ) : (
          <ItemList products={productsList} />
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
