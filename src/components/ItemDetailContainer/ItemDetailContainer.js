import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function ItemDetailContainer() {
  const [productdt, setProductdt] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "products", productId);

    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProductdt({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
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
