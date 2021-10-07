import React from "react";
import "../CSS/Checkout.css";
import Subtotal from "./Subtotal";
import ProductRow from "./ProductRow";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Your Shopping Cart </h2>
          <h4>price</h4>
        </div>
        {basket?.map((item, index) => (
          <ProductRow key={index} iitem={item} indx={index} />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
