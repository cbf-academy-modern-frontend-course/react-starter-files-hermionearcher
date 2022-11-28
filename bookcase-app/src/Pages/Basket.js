import React from "react";
import BasketItem from "../components/Basket/BasketItem";

const Basket = ({setQuantity, quantity, setBookBasket, bookBasket, books}) => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <BasketItem books={books} bookBasket={bookBasket} setBookBasket={setBookBasket} quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
};

export default Basket;
