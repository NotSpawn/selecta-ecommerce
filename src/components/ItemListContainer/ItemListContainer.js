import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getProducts()
      .then((products) => {
        if (!categoryName) {
          setProductsList(products);
        } else {
          const CatProducts = products.filter((product) => {
            return product.category === categoryName;
          });
          setProductsList(CatProducts);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div className="list-logo">
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
