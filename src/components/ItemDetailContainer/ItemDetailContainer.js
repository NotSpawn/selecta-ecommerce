import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [productdt, setProductdt] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      const product = products.find((i) => i.id === Number(productId));
      setProductdt(product);
    });
  }, [productId]);

  return (
    <div>
      <div className="next-logo">
        <ItemDetail product={productdt} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
