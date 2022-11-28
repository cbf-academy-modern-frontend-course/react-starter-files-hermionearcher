import React, { useState } from "react";
import styled from "styled-components";
import errorImg from "../../models/error-book-cover.jpg";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

function Book({ bookBasket, setBookBasket, book, addTitle, quantity, setQuantity }) {
  

  const truncate = (input) =>
    input?.length > 252 ? `${input.substring(0, 250)}...` : input;

  const onClick = (title) => {
    console.log(`The book '${title} was clicked`);
  };
  const removeFromCart = () => {
    setQuantity(quantity - 1);
    setBookBasket(bookBasket.filter(function(item) {
      return item !== book
    }))
  };
  const addToCart = () => {
    setQuantity(quantity + 1);
    setBookBasket((bookBasket) => [...bookBasket, book]);
  };
  console.log("id", bookBasket);
  const {
    volumeInfo: { title, authors, description },
    saleInfo: { retailPrice },
  } = book;
  // console.log(book);
  return (
    <>
      <BookItem component={"div"} key={book.id}>
        <BookCover component={"div"}>
          {(typeof book.volumeInfo.imageLinks.thumbnail === "undefined" ||
            book.volumeInfo.imageLinks.thumbnail === undefined) &&
          (typeof book.volumeInfo.imageLinks.smallThumbnail === "undefined" ||
            book.volumeInfo.imageLinks.smallThumbnail === undefined) ? (
            <img
              className="book-img"
              alt={`${title} book cover`}
              src={errorImg}
            />
          ) : book.volumeInfo.imageLinks.thumbnail === undefined ? (
            <img
              className="book-img"
              alt={`${title} book cover`}
              src={book.volumeInfo.imageLinks.smallThumbnail}
            />
          ) : (
            <img
              className="book-img"
              alt={`${title} book cover`}
              src={book.volumeInfo.imageLinks.thumbnail}
            />
          )}
        </BookCover>
        <BookText component={"div"}>
          <h2>{title}</h2>
          {authors && authors.length > 1 ? (
            <p>{authors.join(" and ")}</p>
          ) : (
            <p>{authors}</p>
          )}

          {retailPrice && (
            <p>
              {retailPrice.amount} <strong>{retailPrice.currencyCode}</strong>
            </p>
          )}
          <p>{truncate(description)}</p>
        </BookText>

        {!bookBasket.includes(book) ? (
          <Button onClick={() => addToCart()} size="sm">
            Add+
          </Button>
        ) : quantity > 0 && bookBasket.includes(book) ? (
          <Button onClick={() => removeFromCart()} variant="danger" size="sm">
            Remove
          </Button>
        ) : null}
      </BookItem>
    </>
  );
}

export default Book;

const BookItem = styled.div`
  display: flex;
  width: calc(100% - 30px);
  margin: 0;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  // width: 97%;
  text-align: left;
  height: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;
    padding-bottom: 5px;
  }
`;
const BookCover = styled.div`
  align-self: center;
  @media (max-width: 700px) {
    justify-content: flex-start;
    top: 0;
  }
`;
const BookText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  &:not(:last-child) {
    display: block;
    padding: 0 1vh 0 1vh;
    margin: 0;
    width: 100%;
  }
`;
const BookButtonWrapper = styled.div`
  align-self: start;
  width: 90px;
  padding: 1vh 0 1vh 0;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
const BookButton = styled.button`
  background-color: #0467fc;
  color: #fff;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 1.1em;
  min-width: 80px;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 90%;
    margin: 0;
  }
`;
