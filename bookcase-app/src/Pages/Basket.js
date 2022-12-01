import React, { useEffect } from "react";
import BasketItem from "../components/Basket/BasketItem";
import styled from "styled-components";

const Basket = ({
  basketValue,
  setBasketValue,
  setQuantity,
  quantity,
  setBookBasket,
  bookBasket,
  books,
}) => {

useEffect(() => {
  setBasketValue(
    bookBasket
      .map((item) => item.saleInfo.retailPrice?.amount)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  )
},[])

  return (
    <BookBasket>
      {bookBasket.length === 0 ? (
        "Your basket is empty"
      ) : (
        <p>
          <strong>Total: </strong>
          {basketValue} GBP
        </p>
      )}

      <BasketItem
        books={books}
        bookBasket={bookBasket}
        setBookBasket={setBookBasket}
        quantity={quantity}
        setQuantity={setQuantity}
      /> 
    </BookBasket>
  );
};

const BookBasket = styled.div`
  margin: 0 10vh;
`;

export default Basket;
