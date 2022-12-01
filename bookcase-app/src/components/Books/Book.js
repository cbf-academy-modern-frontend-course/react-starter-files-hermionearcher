import React from "react";
import styled from "styled-components";
import errorImg from "../../models/error-book-cover.jpg";
import { Button } from "react-bootstrap";
import ScrollToTop from "../Scroll/ScrollToTop";

function Book({ bookBasket, setBookBasket, book, quantity, setQuantity }) {
  const truncate = (input) =>
    input?.length > 252 ? `${input.substring(0, 250)}...` : input;

  const removeFromCart = (id) => {
    const index = bookBasket.map((obj) => obj.id).indexOf(id);
    let basket = [...bookBasket];
    if (index !== -1) {
      basket.splice(index, 1);
      setBookBasket(basket);
    }
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    setQuantity(quantity + 1);
    setBookBasket((bookBasket) => [...bookBasket, book]);
  };
  const {
    volumeInfo: { title, authors, description, imageLinks, previewLink },
    saleInfo: { retailPrice },
  } = book;
  return (
    <>
      <BookItem component={"div"} key={book.id}>
        <a href={previewLink} target="_blank" rel="noreferrer">
          <BookCover component={"div"}>
            <img
              className="book-img"
              alt={`${title} book cover`}
              src={imageLinks ? imageLinks.thumbnail : errorImg}
            />
          </BookCover>
        </a>
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
        {!bookBasket.includes(book) && retailPrice ? (
          <Button onClick={() => addToCart()} size="sm">
            Add+
          </Button>
        ) : quantity > 0 && bookBasket.includes(book) ? (
          <Button
            onClick={() => removeFromCart(book.id)}
            variant="danger"
            size="sm"
          >
            Remove
          </Button>
        ) : (
          <Button size="sm" disabled>
            Not for sale
          </Button>
        )}
      </BookItem>
      <ScrollToTop />
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
