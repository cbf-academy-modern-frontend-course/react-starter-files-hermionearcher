import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const BasketItem = ({
  setQuantity,
  quantity,
  setBookBasket,
  bookBasket,
  books,
}) => {
  const removeFromCart = (id) => {
    const index = bookBasket.map((obj, i) => obj.id).indexOf(id);
    let basket = [...bookBasket];
    if (index !== -1) {
      basket.splice(index, 1);
      setBookBasket(basket);
    }
    setQuantity(quantity - 1);
  };

  return (
    <>
      {bookBasket.map((book, i) => (
        <>
          <Basket key={i}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
            <BasketInfo>
              <p>
                <strong>{book.volumeInfo.title}</strong>
              </p>
              {book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? (
                <p>{book.volumeInfo.authors.join(" and ")}</p>
              ) : (
                <p>{book.volumeInfo.authors}</p>
              )}
            </BasketInfo>
            <BasketQty>
              <p>
                <strong>QTY</strong> 1
              </p>
            </BasketQty>
            <p style={{ width: "50%" }}>
            {/* src={imageLinks ? imageLinks.thumbnail : errorImg} */}


              {book.saleInfo.retailPrice
                ? book.saleInfo.retailPrice.amount
                : book.saleInfo.saleability}{" "}
              <strong>{book.saleInfo.retailPrice ? book.saleInfo.retailPrice.currencyCode : null}</strong>
            </p>
            <Button
              style={{
                cursor: "pointer",
                marginLeft: "auto",
                marginRight: "2vh",
              }}
              onClick={() => removeFromCart(book.id)}
              variant="danger"
              size="sm"
            >
              Remove
            </Button>
          </Basket>
        </>
      ))}
    </>
  );
};

const Basket = styled.div`
  display: flex;
  flex-direction: row
  padding: 10vh;
  background-color: #f7f7f7;
  align-items: center;
  text-align: left;
  height: 100%;
  gap: 20;

`;

const BasketQty = styled.div`
  display: flex;
  flex-direction: row
  margin-left: auto;
  align-items: center;
  width: 50%;
`;

const BasketInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vh;
  margin: 0;
  width: 100%;
`;

export default BasketItem;
