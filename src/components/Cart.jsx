import React from "react";
import "../styles/Cart.css";

const Cart = (props) => {
 const {message} = props;
 
  return (
    <div className="cartContainer">
      <h1>Your Cart</h1>
      <div>{message}</div>
    </div>
  );
};

export default Cart;
