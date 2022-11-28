import React from 'react'
import BookPropTypes from './BookPropTypes'
import styled from "styled-components";
import Book from './Book';

const ListOfBooks = styled.div`
padding: 0 10vh
`;

const BookList = ({ books, addTitle }) => {
  return (
    <ListOfBooks>
      {books.map((book, i) => <Book key={i} book={book} addTitle={addTitle} />)}
    </ListOfBooks>
)
}

export default BookList