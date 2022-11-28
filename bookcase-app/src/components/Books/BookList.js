import React from 'react'
import BookPropTypes from './BookPropTypes'
import styled from "styled-components";
import Book from './Book';

const ListOfBooks = styled.div`
padding: 0 10vh
`;

const BookList = ({ bookBasket, setBookBasket, books, addTitle, quantity, setQuantity }) => {
  return (
    <ListOfBooks>
      {books.map((book, i) => <Book key={i} bookBasket={bookBasket} setBookBasket={setBookBasket} book={book} addTitle={addTitle} quantity={quantity} setQuantity={setQuantity} />)}
    </ListOfBooks>
)
}

export default BookList