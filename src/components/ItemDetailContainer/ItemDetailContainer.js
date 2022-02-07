import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [productdt, setProductdt] = useState({});

  useEffect(() => {
    getProducts().then((products) => {
      const product = products.find((i) => i.id === 2);
      setProductdt(product);
    });
  }, []);

  return (
    <div className="next-logo">
      <ItemDetail product={productdt} />
    </div>
  );
}

export default ItemDetailContainer;
