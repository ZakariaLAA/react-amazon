import React, { useState } from "react";
import "../CSS/ProductRow.css";
import { useStateValue } from "./StateProvider";

function ProductRow({ iitem }) {
  const [{ basket }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(false);
  const deleteProduct = () => {
    setFlag(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: iitem.id,
      });
      setFlag(false);
    }, 400);
  };
  return (
    <div
      className="productRow"
      style={
        flag
          ? {
              animation: "mymove 500ms infinite",
              animationTimingFunction: "ease",
              position: "relative",
            }
          : {}
      }
    >
      <img src={iitem.image} className="productRow__image" alt="" />
      <div className="productRow__info">
        <div className="productRow__title">
          <h2>{iitem.title}</h2>
          <div>
            {" "}
            {Array(iitem.rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}{" "}
            16
          </div>

          <button onClick={deleteProduct}>Delete Product</button>
        </div>
        <h3>${iitem.price}</h3>
      </div>
    </div>
  );
}

export default ProductRow;
