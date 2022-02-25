import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

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

  useEffect(() => {
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="list-logo">
        <div>
          {productsList.length === 0 ? (
            <p></p>
          ) : (
            <ItemList products={productsList} />
          )}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
