import React, { useEffect } from "react";
import styled from "styled-components";
import Book from "./Book";
import { useLocation } from "react-router-dom";
import Search from "../Search/Search";

const ListOfBooks = styled.div`
  padding: 0 10vh;
`;

const BookList = ({
  keyword,
  setKeyword,
  bookBasket,
  setBookBasket,
  books,
  addTitle,
  quantity,
  setQuantity,
}) => {
  const location = useLocation();
  let currentUrl = location.pathname;

  return (
    <>
      {(currentUrl === "/" || currentUrl === "/bookcase") && (
        <Search keyword={keyword} setKeyword={setKeyword} value={keyword} />
      )}
      <ListOfBooks>
        {books.map((book, i) => (
          <Book
            key={i}
            bookBasket={bookBasket}
            setBookBasket={setBookBasket}
            book={book}
            addTitle={addTitle}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </ListOfBooks>
    </>
  );
};

export default BookList;
