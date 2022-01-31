import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemlistContainer = () => {
  return (
    <section>
      <div className="intro-logo">
        <h3>Treat Yourself</h3>
        <img src="" className="" alt="" />
        <div className="intro-button">
          <span> SHOP NOW</span>
        </div>
        <div>
          <ItemCount stock={5} initial={1} />
        </div>
      </div>
    </section>
  );
};

export default ItemlistContainer;
