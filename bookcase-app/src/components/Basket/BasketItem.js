import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import image from "../../models/error-book-cover.jpg";

const BasketItem = ({ setQuantity, quantity, setBookBasket, bookBasket, books }) => {
  console.log("basket",bookBasket);
  const removeFromCart = (id) => {
    setBookBasket(bookBasket => bookBasket.filter(item => {
      return item !== id
    }))
    setQuantity(quantity - 1);
    console.log(bookBasket)
  };
  return (
    <>
      {bookBasket
      .map((book, i) => (
        <>
          <Basket key={i}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
            <div>
              <p>{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.author}</p>
            </div>
            <BasketQty>
              <p>1</p>
            </BasketQty>
            {/* <p>{book.saleInfo.retailPrice.amount !== undefined ? book.saleInfo.retailPrice.amount : null} <strong>{book.saleInfo.retailPrice.currencyCode}</strong></p> */}
            <GrClose style={{cursor: "pointer"}} onClick={() => removeFromCart(book.id)}/>
          </Basket>
        </>
      ))}
    </>
  );
};

const Basket = styled.div`
  display: flex;
  flex-direction: row
  margin: 0;
  background-color: #f7f7f7;
  align-items: center;
  text-align: left;
  height: 100%;

//   @media (max-width: 700px) {
//     flex-direction: column;
//     width: 100%;
//     align-items: center;
//     text-align: center;
//     padding-bottom: 5px;
//   }
`;

const BasketQty = styled.div`
  display: flex;
  flex-direction: row
  margin: 0;
  align-items: center;
`;

export default BasketItem;
