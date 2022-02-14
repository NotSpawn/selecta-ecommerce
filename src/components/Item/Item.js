import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <div className="page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img className="img" src={product.picture} alt="" />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name"> {product.title} </span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <p className="cart" href="#">
                    <span className="price">{product.price} $</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
